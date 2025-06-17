const Listing = require("../models/listing");
module.exports.index = async (req,res)=>
{
  const { category } = req.query;
  let listings;
  if (category) {
    listings = await Listing.find({ category: category });
  } else {
    listings = await Listing.find({});
  }
  res.render("listings/index", { listings,category });
};
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    id = id.trim();
    const listing = await Listing.findById(id).
      populate({path:"reviews" , 
        populate :
        {
          path:"author"
        },
      }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing doesn't exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show", { listing });
};

module.exports.createListing = async (req, res, next) => {
  const listingData = req.body.listing;
  if (req.file) {
    listingData.image = {
      url: req.file.path,    
      filename: req.file.filename
    };
  }
  const newListing = new Listing(listingData);
  newListing.owner = req.user._id;
  await newListing.save();
  
  console.log("listingData:", req.body.listing);

  req.flash("success", "New listing created!");
  res.redirect(`/listings/${newListing._id}`);
};

module.exports.renderEditForm = async (req, res) => {
  try {
    let { id } = req.params;
    id = id.trim();
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing doesn't exist!");
      return res.redirect("/listings");
    }
    let OriginalUrl = listing.image?.url || null;
    if (OriginalUrl) {
      OriginalUrl = OriginalUrl.replace("/upload/h_300,w_250", "");
    }
    res.render("listings/edit", { listing, OriginalUrl });
  } catch (err) {
    req.flash("error", "Something went wrong!");
    res.redirect("/listings");
  }
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  id = id.trim();
  let updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
  if (typeof req.file !== "undefined") {
  let url = req.file.path;
  let filename = req.file.filename;
  updatedListing.image = { url, filename };
  await updatedListing.save();
}
req.flash("success", "Listing updated!");
res.redirect(`/listings/${id}`);
};

module.exports.filter = async (req, res, next) => {
  let { id } = req.params;
  let listings = await Listing.find({ category: { $all: [id] } });
  if (listings.length != 0) {
    res.locals.success = `Listings Filtered by ${id}!`;
    res.render("listings/index", { listings });
  } else {
    req.flash("error", `There is no any Listing for ${id}!`);
    res.redirect("/listings");
  }
};

module.exports.search = async (req, res) => {
  let input = req.query.q.trim().replace(/\s+/g, " ");
  if (input == "" || input == " ") {
    req.flash("error", "Please enter search query!");
    return res.redirect("/listings");
  }

  let data = input.split("");
  let element = "";
  let flag = false;
  for (let index = 0; index < data.length; index++) {
    if (index == 0 || flag) {
      element = element + data[index].toUpperCase();
    } else {
      element = element + data[index].toLowerCase();
    }
    flag = data[index] == " ";
  }

  let listings = await Listing.find({
    title: { $regex: element, $options: "i" },
  });
  if (listings.length != 0) {
    res.locals.success = "Listings searched by Title!";
    res.render("listings/index", { listings });
    return;
  }

  if (listings.length == 0) {
    listings = await Listing.find({
      category: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (listings.length != 0) {
      res.locals.success = "Listings searched by Category!";
      res.render("listings/index", { listings });
      return;
    }
  }
  if (listings.length == 0) {
    listings = await Listing.find({
      country: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (listings.length != 0) {
      res.locals.success = "Listings searched by Country!";
      res.render("listings/index", { listings });
      return;
    }
  }

  if (listings.length == 0) {
    listings = await Listing.find({
      location: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (listings.length != 0) {
      res.locals.success = "Listings searched by Location!";
      res.render("listings/index", { listings });
      return;
    }
  }

  const intValue = parseInt(element, 10);
  const intDec = Number.isInteger(intValue);

  if (listings.length == 0 && intDec) {
    listings = await Listing.find({ price: { $lte: element } }).sort({
      price: 1,
    });
    if (listings.length != 0) {
      res.locals.success = `Listings searched by price less than Rs ${element}!`;
      res.render("listings/index", { listings });
      return;
    }
  }
  if (listings.length == 0) {
    req.flash("error", "No listings found based on your search!");
    res.redirect("/listings");
  }
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  id = id.trim();
  let deletedListing = await Listing.findOneAndDelete({ _id: id });
  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};

module.exports.reserveListing = async (req, res) => {
  let { id } = req.params;
  req.flash("success", "Reservation Details sent to your Email!");
  res.redirect(`/listings/${id}`);
};