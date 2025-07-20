// Application State
let currentUser = null;
let cart = [];
let products = [];

// Expanded Products Data - 60 items total
const sampleProducts = [
    // Fresh Fruits (15 items)
    {
        id: 1,
        name: "Fresh Apples",
        description: "Crisp and sweet red apples",
        price: 120,
        image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Organic Bananas",
        description: "Fresh organic bananas",
        price: 60,
        image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.3,
        inStock: true
    },
    {
        id: 3,
        name: "Fresh Oranges",
        description: "Juicy Valencia oranges",
        price: 80,
        image: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.4,
        inStock: true
    },
    {
        id: 4,
        name: "Green Grapes",
        description: "Sweet seedless green grapes",
        price: 150,
        image: "https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.6,
        inStock: true
    },
    {
        id: 5,
        name: "Fresh Mangoes",
        description: "Sweet Alphonso mangoes",
        price: 200,
        image: "https://static.toiimg.com/thumb/msid-120427786,width-1280,height-720,resizemode-4/120427786.jpg",
        category: "fruits",
        rating: 4.8,
        inStock: true
    },
    {
        id: 6,
        name: "Strawberries",
        description: "Fresh red strawberries",
        price: 180,
        image: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.7,
        inStock: true
    },
    {
        id: 7,
        name: "Pineapple",
        description: "Sweet tropical pineapple",
        price: 90,
        image: "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.2,
        inStock: true
    },
    {
        id: 8,
        name: "Watermelon",
        description: "Fresh juicy watermelon",
        price: 40,
        image: "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.1,
        inStock: true
    },
    {
        id: 9,
        name: "Pomegranate",
        description: "Fresh ruby red pomegranate",
        price: 160,
        image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.5,
        inStock: true
    },
    {
        id: 10,
        name: "Kiwi Fruit",
        description: "Fresh New Zealand kiwi",
        price: 220,
        image: "https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.3,
        inStock: true
    },
    {
        id: 11,
        name: "Dragon Fruit",
        description: "Exotic dragon fruit",
        price: 300,
        image: "https://budsnblush.com/cdn/shop/products/RareWhiteDragonFruitPlantBudsnblush.com.jpg?v=1708761472",
        category: "fruits",
        rating: 4.0,
        inStock: true
    },
    {
        id: 12,
        name: "Papaya",
        description: "Sweet ripe papaya",
        price: 70,
        image: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-87935234/87935234.jpg",
        category: "fruits",
        rating: 4.2,
        inStock: true
    },
    {
        id: 13,
        name: "Avocado",
        description: "Fresh Hass avocado",
        price: 250,
        image: "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.6,
        inStock: true
    },
    {
        id: 14,
        name: "Blueberries",
        description: "Fresh organic blueberries",
        price: 400,
        image: "https://www.tastingtable.com/img/gallery/15-types-of-blueberries-and-what-makes-them-unique/l-intro-1656439699.jpg",
        category: "fruits",
        rating: 4.8,
        inStock: true
    },
    {
        id: 15,
        name: "Cherries",
        description: "Sweet red cherries",
        price: 350,
        image: "https://images.pexels.com/photos/162689/cherry-pair-fruits-sweet-162689.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "fruits",
        rating: 4.7,
        inStock: true
    },

    // Vegetables (20 items)
    {
        id: 16,
        name: "Fresh Tomatoes",
        description: "Juicy red tomatoes",
        price: 40,
        image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "vegetables",
        rating: 4.3,
        inStock: true
    },
    {
        id: 17,
        name: "Green Spinach",
        description: "Fresh leafy spinach",
        price: 30,
        image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "vegetables",
        rating: 4.4,
        inStock: true
    },
    {
        id: 18,
        name: "Onions",
        description: "Fresh red onions",
        price: 35,
        image: "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "vegetables",
        rating: 4.1,
        inStock: true
    },
    {
        id: 19,
        name: "Potatoes",
        description: "Fresh farm potatoes",
        price: 25,
        image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "vegetables",
        rating: 4.2,
        inStock: true
    },
    {
        id: 20,
        name: "Carrots",
        description: "Fresh orange carrots",
        price: 45,
        image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "vegetables",
        rating: 4.5,
        inStock: true
    },
    {
        id: 21,
        name: "Bell Peppers",
        description: "Colorful bell peppers",
        price: 80,
        image: "https://healthyfamilyproject.com/wp-content/uploads/2020/05/Bell-Peppers-background.jpg",
        category: "vegetables",
        rating: 4.3,
        inStock: true
    },
    {
        id: 22,
        name: "Broccoli",
        description: "Fresh green broccoli",
        price: 60,
        image: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "vegetables",
        rating: 4.4,
        inStock: true
    },
    {
        id: 23,
        name: "Cauliflower",
        description: "Fresh white cauliflower",
        price: 50,
        image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/6544/images/hxdy8wnBSiyrzXHHPQ2K_Cauliflower-1280x720-2018.png",
        category: "vegetables",
        rating: 4.2,
        inStock: true
    },
    {
        id: 24,
        name: "Cucumber",
        description: "Fresh green cucumber",
        price: 35,
        image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "vegetables",
        rating: 4.1,
        inStock: true
    },
    {
        id: 25,
        name: "Lettuce",
        description: "Fresh iceberg lettuce",
        price: 40,
        image: "https://media.newyorker.com/photos/5b6b08d3a676470b4ea9b91f/4:3/w_1920,h_1440,c_limit/Rosner-Lettuce.jpg",
        category: "vegetables",
        rating: 4.0,
        inStock: true
    },
    {
        id: 26,
        name: "Green Beans",
        description: "Fresh green beans",
        price: 55,
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/06/green-beans-732x549-thumbnail.jpg",
        category: "vegetables",
        rating: 4.3,
        inStock: true
    },
    {
        id: 27,
        name: "Eggplant",
        description: "Fresh purple eggplant",
        price: 45,
        image: "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "vegetables",
        rating: 4.2,
        inStock: true
    },
    {
        id: 28,
        name: "Zucchini",
        description: "Fresh green zucchini",
        price: 50,
        image: "https://www.allrecipes.com/thmb/xkybcCdsXKxe46LB9v4e4AV28oo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-zucchini-basket-4x3-e6aba860035443a1b0a885d2d941ef6a.jpg",
        category: "vegetables",
        rating: 4.1,
        inStock: true
    },
    {
        id: 29,
        name: "Mushrooms",
        description: "Fresh button mushrooms",
        price: 90,
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/1200x628_FACEBOOK_Are_Mushrooms_Good_for_You.jpg",
        category: "vegetables",
        rating: 4.4,
        inStock: true
    },
    {
        id: 30,
        name: "Sweet Corn",
        description: "Fresh sweet corn",
        price: 40,
        image: "https://lh5.googleusercontent.com/proxy/GbS8Sytqrirx0cVt9MZ0HQSVIGsQzbMk_XlBZf4flasKXCroXph2WEwbwaL299pz9KeKdA4nT4Ns1tpZSNzTdYH3pGiJubqiQTlqNcYRO5zuvK3pK3DA8q09_nnvl1oqyd0Ayn1N_lVTD0PvM1fn1pEsxAeNJQ",
        category: "vegetables",
        rating: 4.3,
        inStock: true
    },
    {
        id: 31,
        name: "Radish",
        description: "Fresh white radish",
        price: 30,
        image: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-106613002/106613002.jpg",
        category: "vegetables",
        rating: 4.0,
        inStock: true
    },
    {
        id: 32,
        name: "Cabbage",
        description: "Fresh green cabbage",
        price: 35,
        image: "https://assets.clevelandclinic.org/transform/LargeFeatureImage/871f96ae-a852-4801-8675-683191ce372d/Benefits-Of-Cabbage-589153824-770x533-1_jpg",
        category: "vegetables",
        rating: 4.1,
        inStock: true
    },
    {
        id: 33,
        name: "Garlic",
        description: "Fresh garlic bulbs",
        price: 120,
        image: "https://images.indianexpress.com/2024/08/garlic.jpg",
        category: "vegetables",
        rating: 4.5,
        inStock: true
    },
    {
        id: 34,
        name: "Ginger",
        description: "Fresh ginger root",
        price: 100,
        image: "https://media.istockphoto.com/id/162711007/photo/fresh-ginger-whole-and-chopped-on-rustic-wood-surface.jpg?s=612x612&w=0&k=20&c=DRfdLfPE7VM6yDR4sldD5uytjjH_ZJ2cBTFDgXlmSZE=",
        category: "vegetables",
        rating: 4.4,
        inStock: true
    },
    {
        id: 35,
        name: "Green Chili",
        description: "Fresh green chilies",
        price: 60,
        image: "https://images.picxy.com/cache/2020/5/6/64cf1504e30bb1a706adbf5eb703308d.jpg",
        category: "vegetables",
        rating: 4.2,
        inStock: true
    },

    // Dairy Products (10 items)
    {
        id: 36,
        name: "Fresh Milk",
        description: "Pure cow milk 1L",
        price: 55,
        image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "dairy",
        rating: 4.5,
        inStock: true
    },
    {
        id: 37,
        name: "Greek Yogurt",
        description: "Creamy Greek yogurt",
        price: 80,
        image: "https://static.toiimg.com/photo/75220490.cms",
        category: "dairy",
        rating: 4.6,
        inStock: true
    },
    {
        id: 38,
        name: "Cheddar Cheese",
        description: "Aged cheddar cheese",
        price: 200,
        image: "https://www.foodsmith.in/cdn/shop/collections/Cheddar_1024x1024.jpg?v=1619874294",
        category: "dairy",
        rating: 4.7,
        inStock: true
    },
    {
        id: 39,
        name: "Fresh Butter",
        description: "Unsalted fresh butter",
        price: 120,
        image: "https://4.imimg.com/data4/NF/MI/MY-2778357/butter-500x500.jpg",
        category: "dairy",
        rating: 4.4,
        inStock: true
    },
    {
        id: 40,
        name: "Mozzarella Cheese",
        description: "Fresh mozzarella cheese",
        price: 180,
        image: "https://cheesemaking.com/cdn/shop/products/mozzarella-pizza-recipe-instructions-120348.jpg?crop=center&height=630&v=1744671270&width=1200",
        category: "dairy",
        rating: 4.5,
        inStock: true
    },
    {
        id: 41,
        name: "Heavy Cream",
        description: "Fresh heavy cream",
        price: 90,
        image: "https://media.istockphoto.com/id/1494240398/photo/cooking-whipped-cream-with-hand-mixer-heavy-cream-powdered-sugar-ricotta-cheese-top-view-of.jpg?s=612x612&w=0&k=20&c=eimK5mF_jNkqPOdmrgsa_cv3cD-f0IeAufOgOyontsI=",
        category: "dairy",
        rating: 4.3,
        inStock: true
    },
    {
        id: 42,
        name: "Cottage Cheese",
        description: "Fresh cottage cheese",
        price: 70,
        image: "https://cheesemaking.com/cdn/shop/products/cottage-cheese-recipe-266121.jpg?v=1739766325",
        category: "dairy",
        rating: 4.2,
        inStock: true
    },
    {
        id: 43,
        name: "Sour Cream",
        description: "Fresh sour cream",
        price: 85,
        image: "https://www.realsimple.com/thmb/WIQw_c6ePyPKkXAGrFVB5hvMN_A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/make-sour-cream-2000-513d49b3aaba4708a67b19380cc32de6.jpg",
        category: "dairy",
        rating: 4.1,
        inStock: true
    },
    {
        id: 44,
        name: "Cream Cheese",
        description: "Smooth cream cheese",
        price: 95,
        image: "https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/Homemade-cream-cheese-Thumbnail-scaled.jpg",
        category: "dairy",
        rating: 4.4,
        inStock: true
    },
    {
        id: 45,
        name: "Paneer",
        description: "Fresh homemade paneer",
        price: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CGWz2DAp5NZV2KodnNHepE83azj-1Iw7QQ&s",
        category: "dairy",
        rating: 4.6,
        inStock: true
    },

    // Bakery (15 items)
    {
        id: 46,
        name: "Fresh Bread",
        description: "Whole wheat bread loaf",
        price: 35,
        image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=300",
        category: "bakery",
        rating: 4.3,
        inStock: true
    },
    {
        id: 47,
        name: "Croissants",
        description: "Buttery French croissants",
        price: 25,
        image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=300",
        category: "bakery",
        rating: 4.5,
        inStock: true
    },
    {
        id: 48,
        name: "Bagels",
        description: "Fresh sesame bagels",
        price: 30,
        image: "https://www.seriouseats.com/thmb/smh66J9YXc-B8PBWXenM-9QTzTg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__01__20170127-bagels-vicky-wasik-2-a2f8b4b04ba74902955c323cfc9df695.jpg",
        category: "bakery",
        rating: 4.2,
        inStock: true
    },
    {
        id: 49,
        name: "Muffins",
        description: "Blueberry muffins",
        price: 40,
        image: "https://www.allrecipes.com/thmb/RdyL1EgIB0Qq_fr5HjdsAmcpMlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228553-moist-chocolate-muffins-DDMFS-4x3-a9f73a46938547c99d921613dc167741.jpg",
        category: "bakery",
        rating: 4.4,
        inStock: true
    },
    {
        id: 50,
        name: "Danish Pastry",
        description: "Sweet Danish pastry",
        price: 45,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwB9fkQRmu2Vfr_1FCRAqClaCKXL-MRXeOYQ&s",
        category: "bakery",
        rating: 4.3,
        inStock: true
    },
    {
        id: 51,
        name: "Sourdough Bread",
        description: "Artisan sourdough bread",
        price: 60,
        image: "https://simpleisgourmet.com/wp-content/uploads/2021/07/The-best-Sourdough-bread-on-towel-cut-open-in-slices.jpg",
        category: "bakery",
        rating: 4.6,
        inStock: true
    },
    {
        id: 52,
        name: "Donuts",
        description: "Glazed donuts pack",
        price: 50,
        image: "https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg",
        category: "bakery",
        rating: 4.1,
        inStock: true
    },
    {
        id: 53,
        name: "Cookies",
        description: "Chocolate chip cookies",
        price: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_ilu8h3E7s0yQIVXKB_8XN-u1q8ZRvYWvg&s",
        category: "bakery",
        rating: 4.5,
        inStock: true
    },
    {
        id: 54,
        name: "Cupcakes",
        description: "Vanilla cupcakes",
        price: 55,
        image: "https://www.cookwithmanali.com/wp-content/uploads/2017/07/Eggless-Chocolate-Cupcakes-500x375.jpg",
        category: "bakery",
        rating: 4.4,
        inStock: true
    },
    {
        id: 55,
        name: "Pizza Base",
        description: "Fresh pizza base",
        price: 40,
        image: "https://5.imimg.com/data5/SELLER/Default/2021/12/VH/ZM/EB/62087282/pizza-base.jpg",
        category: "bakery",
        rating: 4.2,
        inStock: true
    },
    {
        id: 56,
        name: "Garlic Bread",
        description: "Herb garlic bread",
        price: 45,
        image: "https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-jumbo.jpg",
        category: "bakery",
        rating: 4.3,
        inStock: true
    },
    {
        id: 57,
        name: "Sandwich Bread",
        description: "White sandwich bread",
        price: 30,
        image: "https://bakejunction.com/wp-content/uploads/2021/07/aa1a0002_H_MediWhiteSwichBread-1.jpg",
        category: "bakery",
        rating: 4.1,
        inStock: true
    },
    {
        id: 58,
        name: "Baguette",
        description: "French baguette",
        price: 50,
        image: "https://www.allrecipes.com/thmb/J96_s7wY7k0vQtMZ9l5_XQZn4cg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7028-french-baguettes-DDMFS-4x3-a3f7e7cc53654c8db2c9919148e7c915.jpg",
        category: "bakery",
        rating: 4.4,
        inStock: true
    },
    {
        id: 59,
        name: "Pita Bread",
        description: "Fresh pita bread",
        price: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRids7Po0FF0aWy4bj3sjHO3KfzUsaEjCjQ1w&s",
        category: "bakery",
        rating: 4.2,
        inStock: true
    },
    {
        id: 60,
        name: "Cake Slice",
        description: "Chocolate cake slice",
        price: 80,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8G039KBbEb2R0MoRWmvPOf-eiYpQ8lpqq3w&s",
        category: "bakery",
        rating: 4.6,
        inStock: true
    }
];

// Sample Reviews Data
const sampleReviews = [
    {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        comment: "Amazing quality products! Fresh vegetables delivered right on time. Highly recommended!",
        date: "2024-01-15",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
        id: 2,
        name: "Rahul Kumar",
        rating: 4,
        comment: "Great service and fresh fruits. The delivery was quick and packaging was excellent.",
        date: "2024-01-12",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
        id: 3,
        name: "Anita Patel",
        rating: 5,
        comment: "Love shopping here! The dairy products are always fresh and the prices are reasonable.",
        date: "2024-01-10",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
];

// Sample Blog Posts
const sampleBlogs = [
    {
        id: 1,
        title: "10 Health Benefits of Eating Fresh Fruits Daily",
        excerpt: "Discover how incorporating fresh fruits into your daily diet can boost your immune system and improve overall health.",
        image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
        date: "2024-01-20",
        author: "Dr. Meera Gupta",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Organic vs Regular: What's the Difference?",
        excerpt: "Learn about the key differences between organic and regular produce and make informed choices for your family.",
        image: "https://hips.hearstapps.com/hmg-prod/images/versus6-1-1559152957.jpg",
        date: "2024-01-18",
        author: "Rajesh Verma",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "Best Storage Tips for Fresh Vegetables",
        excerpt: "Maximize the shelf life of your vegetables with these expert storage tips and keep them fresh longer.",
        image: "https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=400",
        date: "2024-01-15",
        author: "Chef Sunita Rao",
        readTime: "4 min read"
    }
];

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const userDisplay = document.getElementById('userDisplay');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const modalTitle = document.getElementById('modalTitle');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const productGrid = document.getElementById('productGrid');
const overlay = document.getElementById('overlay');
const toastContainer = document.getElementById('toastContainer');
const searchInput = document.getElementById('searchInput');
const logoutBtn = document.getElementById('logoutBtn');
const userDropdown = document.getElementById('userDropdown');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadUserSession();
    setupEventListeners();
    loadReviews();
    loadBlogs();
    setupScrollAnimations();
    setupUserDropdown();
});

// Event Listeners
function setupEventListeners() {
    // Auth Modal
    loginBtn.addEventListener('click', handleLoginClick);
    closeModal.addEventListener('click', closeAuthModal);
    showSignup.addEventListener('click', switchToSignup);
    showLogin.addEventListener('click', switchToLogin);
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
    
    // Cart
    cartBtn.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // Overlay
    overlay.addEventListener('click', closeAllModals);
    
    // Search
    searchInput.addEventListener('input', handleSearch);
    
    // Logout
    logoutBtn.addEventListener('click', logout);
    
    // Category filters
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProductsByCategory(category);
        });
    });

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// User Dropdown Setup
function setupUserDropdown() {
    loginBtn.addEventListener('click', function(e) {
        if (currentUser) {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
        } else {
            showAuthModal('login');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!loginBtn.contains(e.target)) {
            userDropdown.classList.remove('show');
        }
    });
}

// Authentication Functions
function handleLoginClick() {
    if (currentUser) {
        userDropdown.classList.toggle('show');
    } else {
        showAuthModal('login');
    }
}

function showAuthModal(type) {
    if (type === 'signup') {
        modalTitle.textContent = 'Sign Up';
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    } else {
        modalTitle.textContent = 'Login';
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
    authModal.classList.add('show');
    overlay.classList.add('show');
}

function closeAuthModal() {
    authModal.classList.remove('show');
    overlay.classList.remove('show');
    // Reset forms
    loginForm.reset();
    signupForm.reset();
}

function switchToSignup() {
    showAuthModal('signup');
}

function switchToLogin() {
    showAuthModal('login');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUserDisplay();
        closeAuthModal();
        showToast('✅ Login successful! Welcome back!', 'success');
    } else {
        showToast('❌ Invalid email or password! Please try again.', 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    if (password !== confirmPassword) {
        showToast('❌ Passwords do not match! Please check again.', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('❌ Password must be at least 6 characters long!', 'error');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
        showToast('❌ Account already exists with this email!', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    updateUserDisplay();
    closeAuthModal();
    showToast('✅ Account created successfully! Welcome to FreshMart!', 'success');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserDisplay();
    userDropdown.classList.remove('show');
    cart = [];
    updateCartDisplay();
    showToast('✅ Logged out successfully! See you again soon!', 'success');
}

function loadUserSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserDisplay();
    }
}

function updateUserDisplay() {
    if (currentUser) {
        userDisplay.textContent = currentUser.name;
        loginBtn.innerHTML = `<i class="fas fa-user"></i> <span>${currentUser.name}</span>`;
        userDropdown.style.display = 'block';
    } else {
        userDisplay.textContent = 'Login';
        loginBtn.innerHTML = `<i class="fas fa-user"></i> <span>Login</span>`;
        userDropdown.style.display = 'none';
    }
}

// Product Functions
function loadProducts() {
    products = sampleProducts;
    displayProducts(products);
}

function displayProducts(productsToShow) {
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${!product.inStock ? '<div class="out-of-stock">Out of Stock</div>' : ''}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-text">(${product.rating})</span>
            </div>
            <div class="product-price">₹${product.price}</div>
            <button class="add-to-cart ${!product.inStock ? 'disabled' : ''}" 
                    onclick="addToCart(${product.id})" 
                    ${!product.inStock ? 'disabled' : ''}>
                <i class="fas fa-cart-plus"></i> 
                ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function filterProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
    
    // Scroll to products section
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Cart Functions
function addToCart(productId) {
    if (!currentUser) {
        showToast('⚠️ Please login to add items to cart!', 'warning');
        showAuthModal('login');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product.inStock) {
        showToast('❌ Product is out of stock!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showToast(`✅ ${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showToast('🗑️ Item removed from cart!', 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        cart.forEach(item => {
            const cartItem = createCartItem(item);
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
}

function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price}</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 1rem; background: #ff4444; color: white;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    return cartItem;
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

function handleCheckout() {
    if (!currentUser) {
        showToast('⚠️ Please login to checkout!', 'warning');
        showAuthModal('login');
        return;
    }
    
    if (cart.length === 0) {
        showToast('⚠️ Your cart is empty!', 'warning');
        return;
    }
    
    // Simulate checkout process
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (confirm(`Proceed with checkout for ₹${total}?`)) {
        // Clear cart
        cart = [];
        updateCartDisplay();
        toggleCart();
        showToast('🎉 Order placed successfully! Thank you for shopping with us!', 'success');
    }
}

// Reviews Functions
function loadReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (!reviewsContainer) return;
    
    reviewsContainer.innerHTML = '';
    
    sampleReviews.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
        <div class="review-header">
            <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
            <div class="review-info">
                <h4>${review.name}</h4>
                <div class="review-rating">
                    ${generateStars(review.rating)}
                </div>
                <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
            </div>
        </div>
        <p class="review-comment">${review.comment}</p>
    `;
    return card;
}

// Blog Functions
function loadBlogs() {
    const blogsContainer = document.getElementById('blogsContainer');
    if (!blogsContainer) return;
    
    blogsContainer.innerHTML = '';
    
    sampleBlogs.forEach(blog => {
        const blogCard = createBlogCard(blog);
        blogsContainer.appendChild(blogCard);
    });
}

function createBlogCard(blog) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
        <div class="blog-image">
            <img src="${blog.image}" alt="${blog.title}">
        </div>
        <div class="blog-content">
            <h3>${blog.title}</h3>
            <p class="blog-excerpt">${blog.excerpt}</p>
            <div class="blog-meta">
                <span class="blog-author">By ${blog.author}</span>
                <span class="blog-date">${new Date(blog.date).toLocaleDateString()}</span>
                <span class="blog-read-time">${blog.readTime}</span>
            </div>
            <button class="read-more-btn">Read More</button>
        </div>
    `;
    return card;
}

// Contact Form Handler
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    // Simulate form submission
    showToast('✅ Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Utility Functions
function closeAllModals() {
    closeAuthModal();
    if (cartSidebar.classList.contains('open')) {
        toggleCart();
    }
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = message;
    
    toastContainer.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .category-card, .product-card, .review-card, .blog-card, .contact-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Hero content animation
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.classList.add('animate-on-scroll', 'slide-in-left');
        observer.observe(heroContent);
    }
    
    if (heroImage) {
        heroImage.classList.add('animate-on-scroll', 'slide-in-right');
        observer.observe(heroImage);
    }
}