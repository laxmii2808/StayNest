const Joi = require('joi');

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        category: Joi.string()
        .valid(
        "Trending", "Rooms", "Iconic cities", "Amazing pool", "Farms", "Gym", "City",
        "Historic", "Countryside", "Beach", "Mountain", "Mountains", "Camping",
        "Luxury", "Winter", "Nature", "Lake", "Forest", "Houseboat", "Studio",
        "Palace", "Resort", "Retreat", "Hotel", "Villa", "Chalet", "Apartment"
        ).required(),
        image: Joi.object({
            url: Joi.string(),
            filename: Joi.string()
        }).optional()
    }).required()
});
const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),

    }).required()
});

module.exports ={ listingSchema , reviewSchema};
