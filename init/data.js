const sampleListings = [ 
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    category: "Beach",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    category: "Iconic cities",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    category: "Mountains",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    category: "Luxury",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    category: "Nature",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    category: "Beach",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    category: "Camping",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    category: "Trending",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    category: "Winter",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    category: "Nature",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    category: "Historic",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&...",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    category: "Luxury",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&...",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    category: "Countryside",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&...",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    category: "City",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&...",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    category: "Beach",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&...",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    category: "Mountain",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&...",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    category: "City",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&...",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    category: "Beach",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&...",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    category: "Historic",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&...",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    category: "Luxury",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&...",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    category: "Mountain",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&...",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    category: "Beach",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&...",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    category: "Forest",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&...",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    category: "Historic",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&...",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    category: "City",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&...",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    category: "Lake",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&...",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
{
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    category: "Luxury",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&...",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    category: "Mountain",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&...",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    category: "Beach",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&...",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Beachside Villa in Goa",
    description: "A relaxing beachside villa with open skies, golden sands, and tropical vibes. Perfect for a serene getaway in Goa.",
    category: "Beach",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587139111266-1f9db8d3dbff?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=...",
    },
    price: 2200,
    location: "Goa",
    country: "India",
  },
  {
    title: "Himalayan Retreat in Manali",
    description: "Experience snowy peaks, cozy wooden interiors, and breathtaking mountain views from this peaceful retreat in Manali.",
    category: "Mountain",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721989519334-40923a0ee1c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=...",
    },
    price: 2500,
    location: "Manali",
    country: "India",
  },
  {
    title: "Royal Palace Stay in Udaipur",
    description: "Live like royalty in this stunning heritage palace hotel with marble architecture and lake views in Udaipur.",
    category: "Historic",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1712226652059-a34d334e6cd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=...",
    },
    price: 3200,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Jungle Resort in Kerala",
    description: "Stay amidst lush greenery in this eco-resort nestled in the backwaters and forests of Kerala. Perfect for nature lovers.",
    category: "Forest",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=...",
    },
    price: 2000,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Luxury Hotel in Mumbai",
    description: "Enjoy your stay at this modern hotel in the heart of Mumbai, with skyline views, rooftop pools, and fine dining.",
    category: "City",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&...",
    },
    price: 3000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Beachfront Resort in Goa",
    description: "Escape to the golden sands of Goa with this luxurious beachfront resort. Wake up to the sound of waves...",
    category: "Beach",
    image: {
      filename: "goaResort",
      url: "https://images.unsplash.com/photo-1592555059503-0a774cb8d477?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=...",
    },
    price: 3200,
    location: "Baga Beach, Goa",
    country: "India",
  },
  {
    title: "Luxury Palace Hotel in Jaipur",
    description: "Step into royal elegance at this opulent hotel nestled in the heart of Jaipur. Adorned with heritage Rajasthani decor...",
    category: "Historic",
    image: {
      filename: "jaipurHotel",
      url: "https://plus.unsplash.com/premium_photo-1682285212027-6af0d0f70e07?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=...",
    },
    price: 4500,
    location: "C-Scheme, Jaipur",
    country: "India",
  },
  {
    title: "Modern Studio Apartment in Bengaluru",
    description: "Located in the buzzing tech hub of Indiranagar, this stylish studio offers a perfect balance of comfort and convenience...",
    category: "City",
    image: {
      filename: "bengaluruStudio",
      url: "https://images.unsplash.com/photo-1668957067320-921d79368284?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=...",
    },
    price: 2600,
    location: "Indiranagar, Bengaluru",
    country: "India",
  },
  {
    title: "Traditional Houseboat Stay in Kerala",
    description: "Cruise through the tranquil backwaters of Alleppey in this beautiful wooden houseboat...",
    category: "Lake",
    image: {
      filename: "keralaBoat",
      url: "https://images.unsplash.com/photo-1611920884794-92783f260fbd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=...",
    },
    price: 3800,
    location: "Alleppey Backwaters, Kerala",
    country: "India",
  },
];

module.exports = { data: sampleListings };




  
    