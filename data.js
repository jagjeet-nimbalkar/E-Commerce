let details = [
    {
        id: 1,
        image: "https://www.martizy.in/cdn/shop/files/1_a3a4cc76-08a9-48ea-af8d-2a669e2b2d93.jpg?v=1722009137",
        title: "Classic Cotton T-Shirt",
        rating: "4",
        price: (Math.floor(Math.random() * 30) + 20),
        type: "T-Shirt",
        description: "A soft and breathable cotton t-shirt, perfect for everyday casual wear. Comes in various colors and sizes."
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/81pl1vZLCaL._AC_UY350_.jpg",
        title: "Modern Fit Printed Tee",
        rating: "5",
        price: (Math.floor(Math.random() * 30) + 40),
        type: "T-Shirt",
        description: "A stylish printed tee with a modern fit, offering comfort and versatility for any casual outing."
    },
    {
        id: 3,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/12/470654276/MF/LD/HG/96491632/active-wear-hoodie-500x500.jpg",
        title: "Ultimate Comfort Hoodie",
        rating: "3",
        price: (Math.floor(Math.random() * 40) + 60),
        type: "Hoodie",
        description: "A cozy hoodie designed for ultimate comfort, perfect for chilly evenings or lounging at home."
    },
    {
        id: 4,
        image: "https://m.media-amazon.com/images/I/71QIBKGgFoL._AC_UY1000_.jpg",
        title: "Luxury Wool Jacket",
        rating: "4",
        price: (Math.floor(Math.random() * 50) + 90),
        type: "Jacket",
        description: "A luxurious wool jacket with a sophisticated design, ideal for cold weather and formal occasions."
    },
    {
        id: 5,
        image: "https://static.wixstatic.com/media/b34b0a_6eb1c9bfcb124a4889c73611d8adb6bf~mv2.jpg/v1/fill/w_980,h_1313,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b34b0a_6eb1c9bfcb124a4889c73611d8adb6bf~mv2.jpg",
        title: "Retro Graphic T-Shirt",
        rating: "4",
        price: (Math.floor(Math.random() * 30) + 20),
        type: "T-Shirt",
        description: "A throwback to the retro era, this graphic tee brings a vintage look with modern comfort."
    },
    {
        id: 6,
        image: "https://dhagastore.com/cdn/shop/files/003.jpg?v=1711706963",
        title: "RCB T-shirt",
        rating: "5",
        price: (Math.floor(Math.random() * 40) + 30),
        type: "T-Shirt",
        description: "Support your favorite team with this stylish Royal Challengers Bangalore T-shirt. Comfortable for any casual occasion."
    },
    {
        id: 7,
        image: "https://i5.walmartimages.com/seo/Gasue-2023-Warm-Puffer-Jacket-Men-in-Winter-Comfortable-Breathable-Holiday-Home-Coats-Casual-Long-Sleeve-Soft-Jackets-Gray-XL_d41c91b0-875e-427a-85a8-10e52b1557fd.e9550b8616c3e99766c45c1f220f2ec6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        title: "Stylish Puffer Jacket",
        rating: "3",
        price: (Math.floor(Math.random() * 50) + 80),
        type: "Jacket",
        description: "A stylish puffer jacket designed for warmth and comfort during the winter months. Features a sleek, modern look."
    },
    {
        id: 8,
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/11/360614898/VH/YR/KM/47245251/product-jpeg-500x500.jpg",
        title: "Premium Denim Jacket",
        rating: "4",
        price: (Math.floor(Math.random() * 50) + 100),
        type: "Jacket",
        description: "A premium denim jacket that blends classic style with contemporary flair, suitable for both casual and semi-formal wear."
    },
    {
        id: 9,
        image: "https://assets.ajio.com/medias/sys_master/root/20231028/xyXM/653c208cddf77915195f78d4/-473Wx593H-466751571-white-MODEL.jpg",
        title: "Graphic Print Sweatshirt",
        rating: "4",
        price: (Math.floor(Math.random() * 30) + 40),
        type: "Sweatshirt",
        description: "A cozy sweatshirt with a bold graphic print, offering both comfort and a statement look for casual days."
    },
    {
        id: 10,
        image: "https://down-my.img.susercontent.com/file/1f28d3e2f7b22013623447612b40a1d8",
        title: "Vibrant Hoodie with Zip",
        rating: "5",
        price: (Math.floor(Math.random() * 40) + 50),
        type: "Hoodie",
        description: "A vibrant, zip-up hoodie that provides both warmth and style, with a bold design for a sporty look."
    },
    {
        id: 11,
        image: "https://www.leafstudios.in/cdn/shop/files/BassProupdated_5c4be897-7c12-4ca1-ae42-8498d4c51857_1000x.jpg?v=1690373001",
        title: "BOAT Wireless Bluetooth",
        rating: "5",
        price: (Math.floor(Math.random() * 50) + 50),
        type: "Audio",
        description: "Experience high-quality sound and convenience with these wireless Bluetooth headphones, designed for all-day comfort."
    },
    {
        id: 12,
        image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/67b6bc5d54e1f05e8e9b9b83/1.jpg",
        title: "Smartphone Charging Stand",
        rating: "4",
        price: (Math.floor(Math.random() * 30) + 20),
        type: "Accessory",
        description: "A compact and convenient charging stand for your smartphone, making it easy to charge and use your device simultaneously."
    },
    {
        id: 13,
        image: "https://m.media-amazon.com/images/I/71tsTZoDenL.jpg",
        title: "Portable Phone Charger",
        rating: "5",
        price: (Math.floor(Math.random() * 40) + 30),
        type: "Accessory",
        description: "A compact portable charger to keep your phone powered up on the go, ensuring you never run out of battery again."
    },
    {
        id: 14,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/soundcore_by_anker_a3959z11_anker_soundcore_p30i_noise_1728488427_1856344.jpg",
        title: "Noise Cancelling Earbuds",
        rating: "4",
        price: (Math.floor(Math.random() * 50) + 60),
        type: "Audio",
        description: "These noise-canceling earbuds provide immersive sound quality while blocking out external noise for an enhanced listening experience."
    },
    {
        id: 15,
        image: "https://www.microdigit.online/images/products/DSC03547.JPG",
        title: "Wireless Mouse & Keyboard Combo",
        rating: "4",
        price: (Math.floor(Math.random() * 40) + 50),
        type: "Accessory",
        description: "A convenient wireless mouse and keyboard combo for a tidy workspace and seamless connectivity with your devices."
    },
    {
        id: 16,
        image: "https://images-cdn.ubuy.co.in/6622f4af2d5e7d72c076c47d-dteck-for-apple-iphone-15-pro-max-heavy.jpg",
        title: "Phone Case with Card Holder",
        rating: "4",
        price: (Math.floor(Math.random() * 20) + 15),
        type: "Accessory",
        description: "A durable phone case with an integrated card holder for added convenience and protection, ideal for everyday use."
    },
    {
        id: 17,
        image: "https://res.cloudinary.com/joinventures/f_auto,q_auto,t_pnopt19prodlp/products/p-3-in-1-car-mobile-holder-360-degree-single-piece-251242-m.jpg",
        title: "Phone Holder for Car",
        rating: "5",
        price: (Math.floor(Math.random() * 30) + 25),
        type: "Accessory",
        description: "A versatile phone holder designed for your car, offering a secure mount for hands-free use while driving."
    },
    {
        id: 18,
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697020659/Croma%20Assets/Miscellanous/Chargers%20and%20Batteries/Images/215974_0_vp7sma.png?tr=w-640",
        title: "Universal USB Adapter",
        rating: "3",
        price: (Math.floor(Math.random() * 25) + 10),
        type: "Accessory",
        description: "A universal USB adapter compatible with most devices, providing a fast and reliable charging solution."
    },
    {
        id: 19,
        image: "https://redragon.in/cdn/shop/products/3_feb6d5fd-c246-478d-bfcd-e7874efc3b65_1400x.jpg?v=1680603032",
        title: "Gaming Mouse with RGB Lighting",
        rating: "4",
        price: (Math.floor(Math.random() * 50) + 40),
        type: "Accessory",
        description: "A precision gaming mouse featuring RGB lighting for a dynamic gaming experience and enhanced performance."
    },
    {
        id: 20,
        image: "https://drtrust.in/cdn/shop/products/dr-trust-usa-healthpal-smart-watch-fitness-tracker-28784664018990_700x700.jpg?v=1682060079",
        title: "Smartwatch with Fitness Tracker",
        rating: "5",
        price: (Math.floor(Math.random() * 70) + 80),
        type: "Smartwatch",
        description: "A sleek smartwatch that tracks your fitness goals, heart rate, and more, while keeping you connected to your device."
    }
];


module.exports=details;