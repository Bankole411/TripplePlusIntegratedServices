import {FaHammer, FaHandshake} from "react-icons/fa"
import {PiLightbulbLight, PiUserFocus} from "react-icons/pi"
import {GiScales} from "react-icons/gi"
import {IoIosPeople} from "react-icons/io"


export const paint_products = [
    {
        "id": 1,
        "name": "Satin",
        //"price":"10.95",
        "mini_description": "Elevate walls with a gentle shimmer, bridging matte and glossy elegance.",
        "tag": "Best seller",
        "interior": true,
        "exterior": false,
        "img_url": "pic.jpg"
    }, 
    {
        "id": 2,
        "name": "Emulsion",
        //"price":"10.95",
        "mini_description": "Versatile and durable water-based formula for effortlessly stylish spaces.",
        "tag": "Hot",
        "interior": true,
        "exterior": true,
        "img_url": "pic2.jpg"
    }, 
    {
        "id": 3,
        "name": "Matte",
        //"price":"10.95",
        "mini_description": "Craft a refined look with a velvety, non-reflective finish that adds depth.",
        "tag": "New",
        "interior": true,
        "exterior": true,
        "img_url": "pic.jpg"
    }, 
    {
        "id": 4,
        "name": "Wall Primer",
        //"price":"10.95",
        "mini_description": "Create the perfect canvas for your vision with our effective wall primer.",
        "tag": "Essentials",
        "interior": false,
        "exterior": true,
        "img_url": "pic2.jpg" 
    }
]

export const projectsData = [
    {
        "id": 1,
        "imgUrl": "",
        "project_name": "Rainbow",
        "location": "Ikeja | Lagos",
        "route": "rainbow", 
    },
    {"id": 2,
    "imgUrl": "",
    "project_name": "The Morville Suites",
    "location": "Abeokuta | Ogun",
    "route": "burst-of-peach", 
    },
    {"id": 3,
    "imgUrl": "",
    "project_name": "Azure Tranquility",
    "location": "Ogba | Lagos",
    "route": "azure-tranquility", 
    },
    {"id": 4,
    "imgUrl": "",
    "project_name": "Harbor Haven",
    "location": "Ask | Later",
    "route": "harbor-haven", 
    },
    {"id": 5,
    "imgUrl": "",
    "project_name": "Vintage blush",
    "location": "Abeokuta | Ogun",
    "route": "vintage",
    }, 
    {"id": 6,
    "imgUrl": "",
    "project_name": "Citrus Serenity",
    "location": "Abeokuta | Ogun",
    "route": "citrus-serenity", 
    },
    {"id": 7,
    "imgUrl": "",
    "project_name": "Madon Project",
    "location": "Ask | Later",
    "route": "madon-project", 
    },
    {"id": 8,
    "imgUrl": "",
    "project_name": "PTL Towers",
    "location": "Ask | Later",
    "route": "ptl-towers", 
    },
    {"id": 9,
    "imgUrl": "",
    "project_name": "Brownstone Oasis",
    "location": "Ask | Later",
    "route": "brownstone-oasis", 
    },
    {"id": 10,
    "imgUrl": "",
    "project_name": "MD Principal",
    "location": "Ask | Later",
    "route": "principal", 
    },
    {"id": 11,
    "imgUrl": "",
    "project_name": "Brown",
    "location": "Lekki | Lagos",
    "route": "brown-project", 
    },
    {"id": 12,
    "imgUrl": "",
    "project_name": "White castle",
    "location": "Festac | Lagos",
    "route": "white-castle", 
    },
    {"id": 13,
    "imgUrl": "",
    "project_name": "Burgundy Elegance",
    "location": "Ask | Later",
    "route": "burgundy-elegance", 
    },
    {"id": 15,
    "imgUrl": "",
    "project_name": "Citrus Grove",
    "location": "Abeokuta | Ogun",
    "route": "citrus-grove", 
    },
    {"id": 16,
    "imgUrl": "",
    "project_name": "COAH",
    "location": "Agidingbi | Lagos",
    "route": "coah", 
    },
]

export const approach_items = [
    {
        "id": 1,
        "text": "Weather Resistant",
        "subText": "Our products withstand the harshest weather conditions, ensuring your investment remains protected and looking great for years to come.",
        "on": false
    }, 
    {
        "id": 2,
        "text": "Variety of Attractive Colors",
        "subText": "With a wide selection of attractive and classic color shades, you can find the perfect hue to complement your style and enhance the aesthetics of your project.",
        "on": false
    }, 
    {
        "id": 3,
        "text": "Value for Your Money",
        "subText": "Our commitment to quality and affordability guarantees that every purchase provides excellent value for your money.",
        "on": false
    },
    {
        "id": 4,
        "text": "Custom Color Options",
        "subText": "We can match colors to your specific tone and desires, ensuring your project is as unique as you envision it.",
        "on": false
    },
    {
        "id": 5,
        "text": "Durable and Affordable",
        "subText": "Designed to endure the test of time, our products offer long-lasting quality at competitive prices, so you can have both durability and affordability in one.",
        "on": false
    },
]


export const about_dropdown = [
    {
        "id": 1,
        "text": "Our history",
        "subText": "The company was founded as `Tripple plus integrated services,` a registered interior decorating company with a deep understanding of color placement and matching",
        "on": true
    }, 
    {
        "id": 2,
        "text": "Years Active",
        "subText": "We have been operational for over 14 years and are proud to be a new generation Nigerian paint company focused on making high-quality paint products accessible and affordable to ordinary Nigerians.",
        "on": false
    }, 
    {
        "id": 3,
        "text": "Quality paint products",
        "subText": "Our mission is to bridge the gap between high-quality paints that are often costly and more affordable options of lower quality. We offer high-quality paints at prices that won't strain your budget.",
        "on": false
    },
    {
        "id": 4,
        "text": "Commitment to excellence",
        "subText": "We have successfully served clients, including architects, engineers, property developers, private home owners, and more, by providing quality paint products, professional color advice, and expert paint application using our dedicated and highly trained painters, earning us a strong reputation as a customer-focused company.",
        "on": false
    }
]

export const coreValues = [
    {
        "id": 1,
        "svg": <FaHammer />,
        "value": "Craftsmanship",
        "subText": "Every project reflects the highest standards of quality and attention to detail."
    }, 
    {
        "id": 2,
        "svg": <PiLightbulbLight />,
        "value": "Innovation",
        "subText": "We continually explore new ideas and techniques, pushing the boundaries of what's possible in our industry."
    }, 
    {
        "id": 3,
        "svg": <PiUserFocus />,
        "value": "Customer Centricity",
        "subText": "Putting our customers first is at the core of our values. We strive to understand their needs and provide solutions that exceed their expectations."
    }, 
    {
        "id": 4,
        "svg": <FaHandshake />,
        "value": "Trust",
        "subText": "Building trust with our clients, partners, and team members is fundamental to our success. We are dedicated to maintaining open and transparent relationships."
    }, 
    {
        "id": 5,
        "svg": <GiScales />,
        "value": "Integrity",
        "subText": "We uphold the highest ethical standards in all our interactions, fostering a culture of honesty, accountability, and reliability."
    }, 
    {
        "id": 6,
        "svg": <IoIosPeople />,
        "value": "Teamwork",
        "subText": "Collaboration and synergy among our team members are essential in achieving our goals."
    }, 
    
]

export const servicesData = [
    {
        "id" : 1,
        "serviceName": "Production and Delivery",
        "serviceSuperText" : "Color Perfection, Delivered to Your Doorstep",
        "seviceSubText" : "We take pride in crafting paints with precision, tailored to meet the specific color preferences and quantity requirements of our clients. Our dedicated production team ensures that each batch is meticulously formulated, guaranteeing a flawless finish. Once the paints are perfected, we deliver them directly to our clients' doorsteps, providing a seamless and convenient experience. From vibrant hues to subtle tones, our extensive color palette is at your disposal, ensuring your vision comes to life with every brushstroke.",
    },
    {
        "id" : 2,
        "serviceName": "Production and Application",
        "serviceSuperText" : "Where Production Meets Precision: Painting Your Imagination",
        "seviceSubText" : "After creating the perfect paint formulations, we deploy a team of skilled professional painters, accompanied by a dedicated project manager, to your specified location. This service is designed to take the hassle out of the painting process for our clients. The experienced team ensures efficient and precise application within the agreed-upon timeframe, turning your space into a work of art. From production to application, our integrated service ensures a seamless and high-quality painting experience tailored to your unique needs.",
    },
    {
        "id" : 3,
        "serviceName": "Custom Color Consultation",
        "serviceSuperText" : "Personalized Palettes: Let Our Experts Guide Your Color Choices",
        "seviceSubText" : "Our Custom Color Consultation service goes beyond the standard paint offerings, providing a personalized and expert touch to the color selection process. We understand that choosing the perfect palette for your space can be a daunting task, and that's where our experienced color consultants step in. Whether you're looking to refresh your home, update your office environment, or enhance your commercial space, our consultants work closely with you to understand your preferences, style, and the atmosphere you wish to create.",
    },
]
