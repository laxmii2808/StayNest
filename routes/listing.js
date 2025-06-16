const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middlewares.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("image"),
    (req, res, next) => {
      if (!req.body.listing) req.body.listing = {};
      if (req.file) {
        req.body.listing.image = {
          url: req.file.path,
          filename: req.file.filename
        };
      }
      next();
    },
    validateListing,
    wrapAsync(listingController.createListing)
  );

router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));
router.get("/filter/:id", wrapAsync(listingController.filter));
router.get("/search", listingController.search);

router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("image"),
    (req, res, next) => {
      if (!req.body.listing) req.body.listing = {};
      if (req.file) {
        req.body.listing.image = {
          url: req.file.path,
          filename: req.file.filename
        };
      }
      next();
    },
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));


router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

router.get(
  "/:id/reservelisting",
  isLoggedIn,
  wrapAsync(listingController.reserveListing)
);
module.exports = router;