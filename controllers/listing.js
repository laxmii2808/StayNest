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
    console.log(listing);
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

  req.flash("success", "New listing created!");
  res.redirect(`/listings/${newListing._id}`);
};

module.exports.renderEditForm = async(req,res)=>{
  let { id } =req.params;
  id = id.trim(); 
   const listing= await Listing.findById(id);
   if (!listing) {
        req.flash("error", "Listing doesn't exist!");
        return res.redirect("/listings");
    }
    let OriginalUrl = listing.image?.url || null;
    if (OriginalUrl) {
      OriginalUrl = OriginalUrl.replace("/upload/h_300,w_250", ""); // Only if URL exists
    }

    res.render("listings/edit", { listing, OriginalUrl });
};

module.exports.updateListing = async(req ,res ) => {
  let { id } =req.params;
  id = id.trim();
  let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing});
  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
    await listing.save();
  }
  req.flash("success","Listing Updated!");
  res.redirect(`/listings/${id}`);
};
module.exports.destroy = async(req ,res ) => {
  let { id } =req.params;
  id = id.trim();
  let deletedListing=await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted successfully!");  
  res.redirect("/listings");
}