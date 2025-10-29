// Replace this with your Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPlcWya5v4cyJIXGOZGUcbsCc417yFSVG9RNVVWzBkuxLh0M8gxygwQiBQmR9xvHdr/exec';

        // Sample collection data with additional details
        const collectionItems = [
            {
                id: 1,
                title: "AFI custom",
                category: "all",
                image: "images/shoe1.jpg",
                description: "Classic AFI custom shoe for work, events, or everyday wear.",
                price: "Ksh 3,700",
                features: [
                    "Comfortable fit",
                    "Timeless design",
                    "Size 39-45 available",
                    
                ]
            },
            {
                id: 2,
                title: "NB 1906",
                category: "all",
                image: "images/shoe2.jpg",
                description: "Classic NB 1906 shoes, brings sophistication and confidence to every step.",
                price: "ksh 4,000",
                features: [
                    "Easy to clean",
                    "Non-slip sole",
                    "Size 38-45 available",
                ]
            },
            {
                id: 3,
                title: "Jordan 4Nike SB",
                category: "all",
                image: "images/shoe3.jpg",
                description: "Premium Jordan 4Nike SB sneakers for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            {
                id: 4,
                title: "Ladies Loafers",
                category: "women",
                image: "images/shoe4.jpg",
                description: "Premium ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
            {
                id: 5,
                title: "Ladies Loafers",
                category: "women",
                image: "images/shoe5.jpg",
                description: "Premium ladies loaferss for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
            {
                id: 6,
                title: "Airmax valentine",
                category: "all",
                image: "images/shoe6.jpg",
                description: "Premium Airmax valentine for ultimate style and performance.",
                price: "ksh 3,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-40 available",
                ]
            },
            {
                id: 7,
                title: "Airmax valentine",
                category: "all",
                image: "images/shoe7.jpg",
                description: "Premium Airmax valentine for ultimate style and performance.",
                price: "ksh 3,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-40 available",
                ]
            },
            {
                id: 8,
                title: "Airmax valentine",
                category: "all",
                image: "images/shoe8.jpg",
                description: "Premium Airmax valentine for ultimate style and performance.",
                price: "ksh 3,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 32-40 available",
                ]
            },
            {
                id: 9,
                title: "Tommy Casuals",
                category: "men",
                image: "images/shoe9.jpg",
                description: "Premium Tommy Casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 10,
                title: "Tommy Casuals",
                category: "men",
                image: "images/shoe10.jpg",
                description: "Premium Tommy Casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 11,
                title: "Tommy Casuals",
                category: "men",
                image: "images/shoe11.jpg",
                description: "Premium Tommy Casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 12,
                title: "Laced classic casuals",
                category: "men",
                image: "images/shoe12.jpg",
                description: "Premium Laced classic casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 39-45 available",
                ]
            },
            {
                id: 13,
                title: "Laced classic casuals",
                category: "men",
                image: "images/shoe13.jpg",
                description: "Premium Laced classic casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 39-45 available",
                ]
            },
            {
                id: 14,
                title: "Timberlands boots",
                category: "men",
                image: "images/shoe14.jpg",
                description: "Premium Timberlands boots for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 15,
                title: "Timberlands boots",
                category: "men",
                image: "images/shoe15.jpg",
                description: "Premium Timberlands boots for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 16,
                title: "Timberlands boots",
                category: "men",
                image: "images/shoe16.jpg",
                description: "Premium Timberlands boots for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 17,
                title: "Kanly",
                category: "men",
                image: "images/shoe17.jpg",
                description: "Premium Kanly for ultimate style and performance.",
                price: "ksh 3,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 18,
                title: "Kanly",
                category: "men",
                image: "images/shoe18.jpg",
                description: "Premium Kanly for ultimate style and performance.",
                price: "ksh 3,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 19,
                title: "Fast X",
                category: "all",
                image: "images/shoe19.jpg",
                description: "Premium Fast X for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 20,
                title: "Fast X",
                category: "all",
                image: "images/shoe20.jpg",
                description: "Premium Fast X for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 21,
                title: "KBSTARS Gal sneakers",
                category: "all",
                image: "images/shoe21.jpg",
                description: "Premium KBSTARS Gal sneakers for ultimate style and performance.",
                price: "ksh 2,450",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 26-37 available",
                ]
            },
            {
                id: 22,
                title: "KBSTARS Gal sneakers",
                category: "women",
                image: "images/shoe22.jpg",
                description: "Premium KBSTARS Gal sneakers for ultimate style and performance.",
                price: "ksh 2,450",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 26-37 available",
                ]
            },
            {
                id: 23,
                title: "New balance 1000",
                category: "all",
                image: "images/shoe23.jpg",
                description: "Premium New balance 1000 for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 24,
                title: "New balance 1000",
                category: "all",
                image: "images/shoe24.jpg",
                description: "Premium New balance 1000 for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 25,
                title: "New balance 1000",
                category: "all",
                image: "images/shoe25.jpg",
                description: "Premium New balance 1000 for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 26,
                title: "New balance 9060",
                category: "all",
                image: "images/shoe26.jpg",
                description: "Premium New balance 9060 for ultimate style and performance.",
                price: "ksh 4,300",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 35-43 available",
                ]
            },
            {
                id: 27,
                title: "Kids High cut",
                category: "all",
                image: "images/shoe27.jpg",
                description: "Premium Kids High cut for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 21-28 available",
                ]
            },
            {
                id: 28,
                title: "Kids High cut",
                category: "all",
                image: "images/shoe28.jpg",
                description: "Premium Kids High cut for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 21-28 available",
                ]
            },
            {
                id: 29,
                title: "Kids High cut",
                category: "all",
                image: "images/shoe29.jpg",
                description: "Premium Kids High cut for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 21-28 available",
                ]
            },
            {
                id: 30,
                title: "John foster",
                category: "men",
                image: "images/shoe30.jpg",
                description: "Premium John foster for ultimate style and performance.",
                price: "ksh 3,999",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 31,
                title: "John foster",
                category: "men",
                image: "images/shoe31.jpg",
                description: "Premium John foster for ultimate style and performance.",
                price: "ksh 3,999",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 32,
                title: "John foster",
                category: "men",
                image: "images/shoe32.jpg",
                description: "Premium John foster for ultimate style and performance.",
                price: "ksh 3,999",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 33,
                title: "Tracksuits",
                category: "all",
                image: "images/shoe33.jpg",
                description: "Premium Tracksuits for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Size S-XL available",
                ]
            },
            {
                id: 34,
                title: "Tracksuits",
                category: "all",
                image: "images/shoe34.jpg",
                description: "Premium Tracksuits for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Size S-XL available",
                ]
            },
            {
                id: 35,
                title: "Tracksuits",
                category: "all",
                image: "images/shoe35.jpg",
                description: "Premium Tracksuits for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Size S-XL available",
                ]
            },
            {
                id: 36,
                title: "Nb590",
                category: "women",
                image: "images/shoe36.jpg",
                description: "Premium Nb590 for ultimate style and performance.",
                price: "ksh 3,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-42 available",
                ]
            },
            {
                id: 37,
                title: "Nb590",
                category: "women",
                image: "images/shoe37.jpg",
                description: "Premium Nb590 for ultimate style and performance.",
                price: "ksh 3,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-42 available",
                ]
            },
            {
                id: 38,
                title: "Nb590",
                category: "women",
                image: "images/shoe38.jpg",
                description: "Premium Nb590 for ultimate style and performance.",
                price: "ksh 3,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-42 available",
                ]
            },
            {
                id: 39,
                title: "Ladies fashion sneakers",
                category: "women",
                image: "images/39.jpg",
                description: "Premium Ladies fashion sneakers for ultimate style and performance.",
                price: "ksh 2,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
            {
                id: 40,
                title: "Ladies fashion sneakers",
                category: "women",
                image: "images/40.jpg",
                description: "Premium Ladies fashion sneakers for ultimate style and performance.",
                price: "ksh 2,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
            {
                id: 41,
                title: "Turkish adidas tracksuits",
                category: "all",
                image: "images/41.jpg",
                description: "Premium Turkish adidas tracksuits for ultimate style and performance.",
                price: "ksh 5,200",
                features: [
                    "Available in multiple colors",
                    "Heavy cotton",
                    "Size M-2XL available",
                ]
            },
            {
                id: 42,
                title: "Turkish adidas tracksuits",
                category: "all",
                image: "images/42.jpg",
                description: "Premium Turkish adidas tracksuits for ultimate style and performance.",
                price: "ksh 5,200",
                features: [
                    "Available in multiple colors",
                    "Heavy cotton",
                    "Size M-2XL available",
                ]
            },
            {
                id: 43,
                title: "Turkish adidas tracksuits",
                category: "all",
                image: "images/43.jpg",
                description: "Premium Turkish adidas tracksuits for ultimate style and performance.",
                price: "ksh 5,200",
                features: [
                    "Available in multiple colors",
                    "Heavy cotton",
                    "Size M-2XL available",
                ]
            },
            {
                id: 44,
                title: "Ladies fashion sneakers",
                category: "women",
                image: "images/44.jpg",
                description: "Premium Ladies fashion sneakers for ultimate style and performance.",
                price: "ksh 2,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
            {
                id: 45,
                title: "Ladies fashion sneakers",
                category: "women",
                image: "images/45.jpg",
                description: "Premium Ladies fashion sneakers for ultimate style and performance.",
                price: "ksh 2,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
            {
                id: 46,
                title: "Turkish adidas tracksuits",
                category: "all",
                image: "images/46.jpg",
                description: "Premium Turkish adidas tracksuits for ultimate style and performance.",
                price: "ksh 5,200",
                features: [
                    "Available in multiple colors",
                    "Heavy cotton",
                    "Size M-2XL available",
                ]
            },
            {
                id: 47,
                title: "Turkish adidas tracksuits",
                category: "all",
                image: "images/47.jpg",
                description: "Premium Turkish adidas tracksuits for ultimate style and performance.",
                price: "ksh 5,200",
                features: [
                    "Available in multiple colors",
                    "Heavy cotton",
                    "Size M-2XL available",
                ]
            },
            {
                id: 48,
                title: "Turkish adidas tracksuits",
                category: "all",
                image: "images/48.jpg",
                description: "Premium Turkish adidas tracksuits for ultimate style and performance.",
                price: "ksh 5,200",
                features: [
                    "Available in multiple colors",
                    "Heavy cotton",
                    "Size M-2XL available",
                ]
            },
            {
                id: 49,
                title: "Turkish adidas tracksuits",
                category: "all",
                image: "images/49.jpg",
                description: "Premium Turkish adidas tracksuits for ultimate style and performance.",
                price: "ksh 5,200",
                features: [
                    "Available in multiple colors",
                    "Heavy cotton",
                    "Size M-2XL available",
                ]
            },
            {
                id: 50,
                title: "Grey Nike Tracksuits",
                category: "all",
                image: "images/50.jpg",
                description: "Premium Nike Tracksuits for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Light cotton",
                ]
            },
            {
                id: 51,
                title: "Black Nike Tracksuits",
                category: "all",
                image: "images/51.jpg",
                description: "Premium Nike Tracksuits for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Light cotton",
                ]
            },
            {
                id: 52,
                title: "White-Black Nike Tracksuits",
                category: "all",
                image: "images/52.jpg",
                description: "Premium Nike Tracksuits for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Light cotton",
                ]
            },
            {
                id: 53,
                title: "Red-Black Nike Tracksuits",
                category: "all",
                image: "images/53.jpg",
                description: "Premium Nike Tracksuits for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Light cotton",
                ]
            },
            {
                id: 54,
                title: "White Nike Tracksuits",
                category: "all",
                image: "images/54.jpg",
                description: "Premium Nike Tracksuits for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Light cotton",
                ]
            },
            {
                id: 55,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/55.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 56,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/56.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 57,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/57.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 58,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/58.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 59,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/59.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 60,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/60.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 61,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/61.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 62,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/62.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 63,
                title: "Emily Gucci sling",
                category: "women",
                image: "images/63.jpg",
                description: "Premium Emily Gucci sling for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Durable material",
                ]
            },
            {
                id: 64,
                title: "Casual boots",
                category: "men",
                image: "images/64.jpg",
                description: "Premium Casual boots for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 65,
                title: "Casual boots",
                category: "men",
                image: "images/65.jpg",
                description: "Premium Casual boots for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 66,
                title: "Casual boots",
                category: "men",
                image: "images/66.jpg",
                description: "Premium Casual boots for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 67,
                title: "Casual boots",
                category: "men",
                image: "images/67.jpg",
                description: "Premium Casual boots for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 68,
                title: "Double Monks",
                category: "all",
                image: "images/68.jpg",
                description: "Premium Double Monks for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-46 available",
                ]
            },
            {
                id: 69,
                title: "Double Monks",
                category: "all",
                image: "images/69.jpg",
                description: "Premium Double Monks for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-46 available",
                ]
            },
            {
                id: 70,
                title: "Tassel casuals",
                category: "all",
                image: "images/70.jpg",
                description: "Premium Tassel casuals for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            {
                id: 71,
                title: "Tassel casuals",
                category: "all",
                image: "images/71.jpg",
                description: "Premium Tassel casuals for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            {
                id: 72,
                title: "Double Monks",
                category: "all",
                image: "images/72.jpg",
                description: "Premium Double Monks for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-46 available",
                ]
            },
            {
                id: 73,
                title: "Double Monks",
                category: "all",
                image: "images/73.jpg",
                description: "Premium Double Monks for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-46 available",
                ]
            },
            {
                id: 74,
                title: "Double Monks",
                category: "all",
                image: "images/74.jpg",
                description: "Premium Double Monks for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-46 available",
                ]
            },
            {
                id: 75,
                title: "Timberland boots",
                category: "men",
                image: "images/75.jpg",
                description: "Premium Timberland boots for ultimate style and performance.",
                price: "ksh 3,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 76,
                title: "Timberland boots",
                category: "men",
                image: "images/76.jpg",
                description: "Premium Timberland boots for ultimate style and performance.",
                price: "ksh 3,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 77,
                title: "Tassel casuals",
                category: "all",
                image: "images/77.jpg",
                description: "Premium Tassel casuals for ultimate style and performance.",
                price: "ksh 4,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            {
                id: 78,
                title: "Timberland boots",
                category: "men",
                image: "images/78.jpg",
                description: "Premium Timberland boots for ultimate style and performance.",
                price: "ksh 3,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 79,
                title: "Timberland boots",
                category: "men",
                image: "images/79.jpg",
                description: "Premium Timberland boots for ultimate style and performance.",
                price: "ksh 3,700",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
            {
                id: 80,
                title: "Sequin casuals",
                category: "men",
                image: "images/80.jpg",
                description: "Premium Sequin casuals for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 39-45 available",
                ]
            },
            {
                id: 81,
                title: "No pain NO gain vests",
                category: "men",
                image: "images/81.jpg",
                description: "Premium No pain NO gain vests for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Perfect for gym and jogging",
                    "Size M1,L1,XL1 available",
                ]
            },
            {
                id: 82,
                title: "Black No pain NO gain vests",
                category: "men",
                image: "images/82.jpg",
                description: "Premium No pain NO gain vests for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Perfect for gym and jogging",
                    "Size M1,L1,XL1 available",
                                    ]
            },
            {
                id: 83,
                title: "Grey No pain NO gain vests",
                category: "men",
                image: "images/83.jpg",
                description: "Premium  No pain NO gain vests for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Perfect for gym and jogging",
                    "Size M1,L1,XL1 available",
                ]
            },
            {
                id: 84,
                title: "White No pain NO gain vests",
                category: "men",
                image: "images/84.jpg",
                description: "Premium No pain NO gain vests  for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Perfect for gym and jogging",
                    "Size M1,L1,XL1 available",
                ]
            },
            {
                id: 85,
                title: "Blue No pain NO gain vests",
                category: "men",
                image: "images/85.jpg",
                description: "Premium No pain NO gain vests for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Perfect for gym and jogging",
                    "Size M1,L1,XL1 available",
                ]
            },
            {
                id: 86,
                title: "Sequin casuals",
                category: "men",
                image: "images/86.jpg",
                description: "Premium Sequin casuals for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            {
                id: 87,
                title: "Sequin casuals",
                category: "men",
                image: "images/87.jpg",
                description: "Premium Sequin casuals for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            {
                id: 88,
                title: "Sequin casuals",
                category: "men",
                image: "images/88.jpg",
                description: "Premium Sequin casuals for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            {
                id: 89,
                title: "Sequin casuals",
                category: "men",
                image: "images/89.jpg",
                description: "Premium Sequin casuals for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            {
                id: 90,
                title: "Ladies leather sandals",
                category: "women",
                image: "images/90.jpg",
                description: "Premium Ladies leather sandals for ultimate style and performance.",
                price: "ksh 2,100",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
            {
                id: 91,
                title: "Ladies leather sandals",
                category: "women",
                image: "images/91.jpg",
                description: "Premium Ladies leather sandals for ultimate style and performance.",
                price: "ksh 2,100",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
            {
                id: 92,
                title: "Ladies leather sandals",
                category: "women",
                image: "images/92.jpg",
                description: "Premium Ladies leather sandals for ultimate style and performance.",
                price: "ksh 2,100",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-47 available",
                ]
            },
            {
                id: 93,
                title: "Sequin casuals",
                category: "all",
                image: "images/93.jpg",
                description: "Premium Sequin casuals for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 39-45 available",
                ]
            },
            {
                id: 94,
                title: "White Knit crew neck sweaters",
                category: "men",
                image: "images/94.jpg",
                description: "Premium Knit crew neck sweaterss for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Warm and comfortable",
                    "Size M-3xl available",
                ]
            },
            {
                id: 95,
                title: "Green Knit crew neck sweaters",
                category: "men",
                image: "images/95.jpg",
                description: "Premium Knit crew neck sweaters for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Warm and comfortable",
                    "Size M-3xl available",
                ]
            },
            {
                id: 96,
                title: "Grey Knit crew neck sweaters",
                category: "men",
                image: "images/96.jpg",
                description: "Premium Knit crew neck sweaters for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Warm and comfortable",
                    "Size M-3xl available",
                ]
            },
            {
                id: 97,
                title: "Black Knit crew neck sweaters",
                category: "men",
                image: "images/97.jpg",
                description: "Premium Knit crew neck sweaters for ultimate style and performance.",
                price: "ksh 3,000",
                features: [
                    "Available in multiple colors",
                    "Warm and comfortable",
                    "Size M-3xl available",
                ]
            },
            {
                id: 98,
                title: "Red Knit crew neck sweaters",
                category: "men",
                image: "images/98.jpg",
                description: "Premium Knit crew neck sweaters for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Warm and comfortable",
                    "Size M-3xl available",
                ]
            },
            {
                id: 99,
                title: "Doll totes",
                category: "women",
                image: "images/99.jpg",
                description: "Premium Doll totes for ultimate style and performance.",
                price: "ksh 2,200",
                features: [
                    "Available in multiple colors",
                    "Can fit laptop",
                    "Has Zip",
                    
                ]
            },
            {
                id: 100,
                title: "Doll totes",
                category: "women",
                image: "images/100.jpg",
                description: "Premium Doll totes for ultimate style and performance.",
                price: "ksh 2,200",
                features: [
                    "Available in multiple colors",
                    "Can fit laptop",
                    "Has Zip",
                ]
            },
            {
                id: 101,
                title: "Doll totes",
                category: "women",
                image: "images/101.jpg",
                description: "Premium Doll totes for ultimate style and performance.",
                price: "ksh 2,200",
                features: [
                    "Available in multiple colors",
                    "Can fit laptop",
                    "Has Zip",
                ]
            },
            {
                id: 102,
                title: "Doll totes",
                category: "women",
                image: "images/102.jpg",
                description: "Premium Doll totes for ultimate style and performance.",
                price: "ksh 2,200",
                features: [
                    "Available in multiple colors",
                    "Can fit laptop",
                    "Has Zip",
                ]
            },
            {
                id: 103,
                title: "Two piece",
                category: "women",
                image: "images/103.jpg",
                description: "Premium two piece for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 104,
                title: "Two piece",
                category: "women",
                image: "images/104.jpg",
                description: "Premium Two piece for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 105,
                title: "Two piece",
                category: "women",
                image: "images/105.jpg",
                description: "Premium Two piece for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 106,
                title: "Official boots",
                category: "all",
                image: "images/106.jpg",
                description: "Premium Official boots for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
             {
                id: 107,
                title: "Two piece",
                category: "women",
                image: "images/107.jpg",
                description: "Premium Two piece for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 108,
                title: "Two piece",
                category: "women",
                image: "images/108.jpg",
                description: "Premium Two piece for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 109,
                title: "Two piece",
                category: "women",
                image: "images/109.jpg",
                description: "Premium Two piece for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 110,
                title: "Two piece",
                category: "women",
                image: "images/110.jpg",
                description: "Premium Two piece for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 111,
                title: "Official boots",
                category: "all",
                image: "images/111.jpg",
                description: "Premium Official boots for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
             {
                id: 112,
                title: "Official boots",
                category: "all",
                image: "images/112.jpg",
                description: "Premium Official boots for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
             {
                id: 113,
                title: "Official boots",
                category: "all",
                image: "images/113.jpg",
                description: "Premium Official boots for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 40-45 available",
                ]
            },
             {
                id: 114,
                title: "Two piece",
                category: "women",
                image: "images/114.jpg",
                description: "Premium Two pieces for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 115,
                title: "Two piece",
                category: "women",
                image: "images/115.jpg",
                description: "Premium Two piece for ultimate style and performance.",
                price: "ksh 3,600",
                features: [
                    "Available in multiple colors",
                    "Size S-6xl",
                ]
            },
             {
                id: 116,
                title: "Casuals",
                category: "men",
                image: "images/116.jpg",
                description: "Premium casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-45 available",
                ]
            },
             {
                id: 117,
                title: "Casuals",
                category: "men",
                image: "images/117.jpg",
                description: "Premium casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-45 available",
                ]
            },
             {
                id: 118,
                title: "casuals",
                category: "men",
                image: "images/118.jpg",
                description: "Premium casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-45 available",
                ]
            },
             {
                id: 119,
                title: "Airmax Valentine",
                category: "all",
                image: "images/119.jpg",
                description: "Premium Airmax Valentine for ultimate style and performance.",
                price: "ksh 3,200",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-40 available",
                ]
            },
             {
                id: 120,
                title: "Signature sneakers",
                category: "all",
                image: "images/120.jpg",
                description: "Premium Signature sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-43 available",
                ]
            },
             {
                id: 121,
                title: "Open wedge",
                category: "women",
                image: "images/121.jpg",
                description: "Premium open wedge for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
             {
                id: 122,
                title: "Signature sneakers",
                category: "all",
                image: "images/122.jpg",
                description: "Premium Signature sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-43 available",
                ]
            },
             {
                id: 123,
                title: "Casuals",
                category: "men",
                image: "images/123.jpg",
                description: "Premium casuals for ultimate style and performance.",
                price: "ksh 3,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-45 available",
                ]
            },
             {
                id: 124,
                title: "Signature sneakers",
                category: "all",
                image: "images/124.jpg",
                description: "Premium Signature sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-43 available",
                ]
            },
             {
                id: 125,
                title: "Open wedge",
                category: "women",
                image: "images/125.jpg",
                description: "Premium Open wedge for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
             {
                id: 126,
                title: "Open wedge",
                category: "women",
                image: "images/126.jpg",
                description: "Premium Open wedge for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-43 available",
                ]
            },
             {
                id: 127,
                title: "Walker boots",
                category: "women",
                image: "images/127.jpg",
                description: "Premium Walker boots for ultimate style and performance.",
                price: "ksh 2,700",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 128,
                title: "Walker boots",
                category: "women",
                image: "images/128.jpg",
                description: "Premium Walker boots for ultimate style and performance.",
                price: "ksh 2,700",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 129,
                title: "Walker boots",
                category: "women",
                image: "images/129.jpg",
                description: "Premium Walker boots for ultimate style and performance.",
                price: "ksh 2,700",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 130,
                title: "Long boots",
                category: "women",
                image: "images/130.jpg",
                description: "Premium Walker boots for ultimate style and performance.",
                price: "ksh 2,800",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 131,
                title: "Tommy shoes",
                category: "all",
                image: "images/131.jpg",
                description: "Premium Tommy shoes for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-42 available",
                ]
            },
             {
                id: 132,
                title: "Tommy shoes",
                category: "all",
                image: "images/132.jpg",
                description: "Premium Tommy shoes for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-42 available",
                ]
            },
             {
                id: 133,
                title: "Tommy shoes",
                category: "all",
                image: "images/133.jpg",
                description: "Premium Tommy shoes for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-42 available",
                ]
            },
             {
                id: 134,
                title: "Tommy shoes",
                category: "all",
                image: "images/134.jpg",
                description: "Premium Tommy shoes for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-42 available",
                ]
            },
             {
                id: 135,
                title: "Long boots",
                category: "women",
                image: "images/135.jpg",
                description: "Premium Long boots for ultimate style and performance.",
                price: "ksh 2,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-43 available",
                ]
            },
             {
                id: 136,
                title: "Tommy shoes",
                category: "all",
                image: "images/136.jpg",
                description: "Premium Tommy shoes for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-42 available",
                ]
            },
             {
                id: 137,
                title: "Long boots",
                category: "women",
                image: "images/137.jpg",
                description: "Premium Long boots for ultimate style and performance.",
                price: "ksh 2,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-43 available",
                ]
            },
             {
                id: 138,
                title: "Tommy shoes",
                category: "all",
                image: "images/138.jpg",
                description: "Premium Tommy shoes for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-42 available",
                ]
            },
             {
                id: 139,
                title: "Tommy shoes",
                category: "all",
                image: "images/139.jpg",
                description: "Premium Tommy shoes for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-42 available",
                ]
            },
             {
                id: 140,
                title: "Fancy sneakers",
                category: "all",
                image: "images/140.jpg",
                description: "Premium Fancy sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-41 available",
                ]
            },
             {
                id: 141,
                title: "Prada sneakers",
                category: "all",
                image: "images/141.jpg",
                description: "Premium Prada sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 142,
                title: "Fancy sneakers",
                category: "all",
                image: "images/142.jpg",
                description: "Premium Fancy sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-41 available",
                ]
            },
             {
                id: 143,
                title: "Fancy sneakers",
                category: "all",
                image: "images/143.jpg",
                description: "Premium Fancy sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-41 available",
                ]
            },
             {
                id: 144,
                title: "Fancy sneakers",
                category: "all",
                image: "images/144.jpg",
                description: "Premium Fancy sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-41 available",
                ]
            },
             {
                id: 145,
                title: "Fancy sneakers",
                category: "all",
                image: "images/145.jpg",
                description: "Premium Fancy sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-41 available",
                ]
            },
             {
                id: 146,
                title: "Prada sneakers",
                category: "all",
                image: "images/146.jpg",
                description: "Premium Prada sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 147,
                title: "Prada sneakers",
                category: "all",
                image: "images/147.jpg",
                description: "Premium Prada sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 148,
                title: "Prada sneakers",
                category: "all",
                image: "images/148.jpg",
                description: "Premium Prada sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 149,
                title: "Adidas",
                category: "all",
                image: "images/149.jpg",
                description: "Premium Adidas for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 150,
                title: "Adidas",
                category: "all",
                image: "images/150.jpg",
                description: "Premium Adidas for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 151,
                title: "Adidas",
                category: "all",
                image: "images/151.jpg",
                description: "Premium Adidas for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 152,
                title: "Adidas",
                category: "all",
                image: "images/152.jpg",
                description: "Premium Adidas for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",,
                    "Size 36-43 available",
                ]
            },
             {
                id: 153,
                title: "Adidas",
                category: "all",
                image: "images/153.jpg",
                description: "Premium Adidas for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 154,
                title: "Heel slide sandals",
                category: "women",
                image: "images/154.jpg",
                description: "Premium Heel slide sandals for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 155,
                title: "Heel slide sandals",
                category: "women",
                image: "images/155.jpg",
                description: "Premium Heel slide sandals for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 156,
                title: "Heel slide sandals",
                category: "women",
                image: "images/156.jpg",
                description: "Premium Heel slide sandals for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 157,
                title: "Heel slide sandals",
                category: "women",
                image: "images/157.jpg",
                description: "Premium Heel slide sandals for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 158,
                title: "Ladie loafers",
                category: "women",
                image: "images/158.jpg",
                description: "Premium Ladie loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 159,
                title: "Ladie loafers",
                category: "women",
                image: "images/159.jpg",
                description: "Premium Ladie loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 160,
                title: "Ladie loafers",
                category: "women",
                image: "images/160.jpg",
                description: "Premium Ladie loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 161,
                title: "Ladie loafers",
                category: "women",
                image: "images/161.jpg",
                description: "Premium Ladie loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 162,
                title: "Buckle block heels",
                category: "women",
                image: "images/162.jpg",
                description: "Premium Buckle block heels for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 163,
                title: "New design loafers",
                category: "women",
                image: "images/163.jpg",
                description: "Premium New design loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 164,
                title: "Benbu sneakers",
                category: "all",
                image: "images/164.jpg",
                description: "Premium Benbu sneakers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 165,
                title: "Buckle block heels",
                category: "women",
                image: "images/165.jpg",
                description: "Premium Buckle block heels for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 166,
                title: "Buckle block heels",
                category: "women",
                image: "images/166.jpg",
                description: "Premium Buckle block heels for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 167,
                title: "New design loafers",
                category: "women",
                image: "images/167.jpg",
                description: "Premium New design loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 168,
                title: "New design loafers",
                category: "women",
                image: "images/168.jpg",
                description: "Premium New design loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 169,
                title: "Buckle block heels",
                category: "women",
                image: "images/169.jpg",
                description: "Premium Buckle block heels for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-43 available",
                ]
            },
             {
                id: 170,
                title: "Benbu rubbers",
                category: "all",
                image: "images/170.jpg",
                description: "Premium Benbu rubbers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 171,
                title: "Benbu rubbers",
                category: "all",
                image: "images/171.jpg",
                description: "Premium Benbu rubbers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 172,
                title: "Benbu rubbers",
                category: "all",
                image: "images/172.jpg",
                description: "Premium Benbu rubbers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 173,
                title: "Benbu rubbers",
                category: "all",
                image: "images/173.jpg",
                description: "Premium Benbu rubbers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-44 available",
                ]
            },
             {
                id: 174,
                title: "New printed brogues",
                category: "all",
                image: "images/174.jpg",
                description: "Premium New printed brogues for ultimate style and performance.",
                price: "ksh 2,050",
                features: [
                    "Available in multiple colors",
                    "Size 26-43 available",
                ]
            },
             {
                id: 175,
                title: "New printed brogues",
                category: "all",
                image: "images/175.jpg",
                description: "Premium New printed brogues for ultimate style and performance.",
                price: "ksh 2,050",
                features: [
                    "Available in multiple colors",
                   
                ]
            },
             {
                id: 176,
                title: "Denim rubbers",
                category: "all",
                image: "images/176.jpg",
                description: "Premium Denim rubbers for ultimate style and performance.",
                price: "ksh 1,800",
                features: [
                    "Available in multiple colors",
                   
                ]
            },
             {
                id: 177,
                title: "Denim rubbers",
                category: "all",
                image: "images/177.jpg",
                description: "Premium Denim rubbers for ultimate style and performance.",
                price: "ksh 1,800",
                features: [
                    "Available in multiple colors",
                    
                ]
            },
             {
                id: 178,
                title: "New printed brogues",
                category: "all",
                image: "images/178.jpg",
                description: "Premium New printed brogues for ultimate style and performance.",
                price: "ksh 2,050",
                features: [
                    "Available in multiple colors",
                   
                ]
            },
             {
                id: 179,
                title: "New printed brogues",
                category: "all",
                image: "images/179.jpg",
                description: "Premium New printed brogues for ultimate style and performance.",
                price: "ksh 2,050",
                features: [
                    "Available in multiple colors",
                    
                ]
            },
             {
                id: 180,
                title: "New printed brogues",
                category: "all",
                image: "images/180.jpg",
                description: "Premium New printed brogues for ultimate style and performance.",
                price: "ksh 2,050",
                features: [
                    "Available in multiple colors",
                   
                ]
            },
             {
                id: 181,
                title: "New printed brogues",
                category: "all",
                image: "images/181.jpg",
                description: "Premium New printed brogues for ultimate style and performance.",
                price: "ksh 2,050",
                features: [
                    "Available in multiple colors",
                   
                ]
            },
             {
                id: 182,
                title: "Bee sneakers",
                category: "all",
                image: "images/182.jpg",
                description: "Premium Bee sneakers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-40 available",
                ]
            },
             {
                id: 183,
                title: "New printed brogues",
                category: "all",
                image: "images/183.jpg",
                description: "Premium New printed brogues for ultimate style and performance.",
                price: "ksh 2,050",
                features: [
                    "Available in multiple colors",

                ]
            },
             {
                id: 184,
                title: "Bee sneakers",
                category: "all",
                image: "images/184.jpg",
                description: "Premium Bee sneakers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-40 available",
                ]
            },
             {
                id: 185,
                title: "Bee sneakers",
                category: "all",
                image: "images/185.jpg",
                description: "Premium Bee sneakers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-40 available",
                ]
            },
             {
                id: 186,
                title: "New summer sneakers",
                category: "all",
                image: "images/186.jpg",
                description: "Premium New summer sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 187,
                title: "New summer sneakers",
                category: "all",
                image: "images/187.jpg",
                description: "Premium New summer sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 188,
                title: "New summer sneakers",
                category: "all",
                image: "images/188.jpg",
                description: "Premium New summer sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 189,
                title: "New summer sneakers",
                category: "all",
                image: "images/189.jpg",
                description: "Premium New summer sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 190,
                title: "New summer sneakers",
                category: "all",
                image: "images/190.jpg",
                description: "Premium New summer sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 191,
                title: "New summer sneakers",
                category: "all",
                image: "images/191.jpg",
                description: "Premium New summer sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",

                    "Size 36-43 available",
                ]
            },
             {
                id: 192,
                title: "Ladies loafers new design",
                category: "women",
                image: "images/192.jpg",
                description: "Premium Ladies loafers new design for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 193,
                title: "Ladies loafers new design",
                category: "women",
                image: "images/193.jpg",
                description: "Premium Ladies loafers new design for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 194,
                title: "Ladies loafers new design",
                category: "women",
                image: "images/194.jpg",
                description: "Premium Ladies loafers new design for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 195,
                title: "Ladies loafers new design",
                category: "women",
                image: "images/195.jpg",
                description: "Premium Ladies loafers new design for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Size 36-42 available",
                ]
            },
             {
                id: 196,
                title: "Heels",
                category: "women",
                image: "images/196.jpg",
                description: "Premium Heels for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 37-42 available",
                ]
            },
             {
                id: 197,
                title: "Heels",
                category: "women",
                image: "images/197.jpg",
                description: "Premium Heels for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 37-42 available",
                ]
            },
             {
                id: 198,
                title: "Heels",
                category: "women",
                image: "images/198.jpg",
                description: "Premium Heels for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 37-42 available",
                ]
            },
             {
                id: 199,
                title: "Heels",
                category: "women",
                image: "images/199.jpg",
                description: "Premium Heels for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 37-42 available",
                ]
            },
             {
                id: 200,
                title: "Heels",
                category: "women",
                image: "images/200.jpg",
                description: "Premium Heels for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Size 37-42 available",
                ]
            },
             {
                id: 201,
                title: "Makonge wedge",
                category: "women",
                image: "images/201.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 37-43 available",
                ]
            },
             {
                id: 202,
                title: "Makonge wedge",
                category: "women",
                image: "images/202.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 37-43 available",
                ]
            },
             {
                id: 203,
                title: "Makonge wedge",
                category: "women",
                image: "images/203.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 37-43 available",
                ]
            },
             {
                id: 204,
                title: "Nb sneakers",
                category: "all",
                image: "images/204.jpg",
                description: "Premium Nb sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-43 available",
                ]
            },
             {
                id: 205,
                title: "Nb sneakers",
                category: "all",
                image: "images/205.jpg",
                description: "Premium Nb sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-43 available",
                ]
            },
             {
                id: 206,
                title: "Heels",
                category: "women",
                image: "images/206.jpg",
                description: "Premium heels for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 37-42 available",
                ]
            },
             {
                id: 207,
                title: "Makonge wedge",
                category: "women",
                image: "images/207.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 38-45 available",
                ]
            },
             {
                id: 208,
                title: "Nb sneakers",
                category: "all",
                image: "images/208.jpg",
                description: "Premium Nb sneakers for ultimate style and performance.",
                price: "ksh 2,500",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-43 available",
                ]
            },
             {
                id: 209,
                title: "Makonge wedge",
                category: "women",
                image: "images/209.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 38-45 available",
                ]
            },
             {
                id: 210,
                title: "Makonge wedge",
                category: "women",
                image: "images/210.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 38-45 available",
                ]
            },
             {
                id: 211,
                title: "Makonge wedge",
                category: "women",
                image: "images/211.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 38-45 available",
                ]
            },
             {
                id: 212,
                title: "Makonge wedge",
                category: "women",
                image: "images/212.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 38-45 available",
                ]
            },
             {
                id: 213,
                title: "Makonge wedge",
                category: "women",
                image: "images/213.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 37-43 available",
                ]
            },
             {
                id: 214,
                title: "Makonge wedge",
                category: "women",
                image: "images/214.jpg",
                description: "Premium Makonge wedge for ultimate style and performance.",
                price: "ksh 2,300",
                features: [
                    "Available in multiple colors",
                    "Size 37-43 available",
                ]
            },
             {
                id: 215,
                title: "Ladies loafers",
                category: "women",
                image: "images/215.jpg",
                description: "Premium Ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
             {
                id: 216,
                title: "Ladies loafers",
                category: "women",
                image: "images/216.jpg",
                description: "Premium Ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
             {
                id: 217,
                title: "Ladies loafers",
                category: "women",
                image: "images/217.jpg",
                description: "Premium Ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
             {
                id: 218,
                title: "Ladies loafers",
                category: "women",
                image: "images/218.jpg",
                description: "Premium Ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
             {
                id: 219,
                title: "Ladies loafers",
                category: "women",
                image: "images/219.jpg",
                description: "Premium Ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
             {
                id: 220,
                title: "Ladies loafers",
                category: "women",
                image: "images/220.jpg",
                description: "Premium Ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
             {
                id: 221,
                title: "Ladies loafers",
                category: "women",
                image: "images/221.jpg",
                description: "Premium Ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
             {
                id: 222,
                title: "Ladies loafers",
                category: "women",
                image: "images/222.jpg",
                description: "Premium Ladies loafers for ultimate style and performance.",
                price: "ksh 2,000",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 36-44 available",
                ]
            },
            
        ];

        // DOM Elements
        const header = document.getElementById('header');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const collectionGrid = document.querySelector('.collection-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const loader = document.getElementById('loader');
        const backToTop = document.getElementById('backToTop');
        const productPopup = document.getElementById('productPopup');
        const popupClose = document.getElementById('popupClose');
        const closePopupBtn = document.getElementById('closePopupBtn');
        const inquireBtn = document.getElementById('inquireBtn');
        const popupImage = document.getElementById('popupImage');
        const popupTitle = document.getElementById('popupTitle');
        const popupPrice = document.getElementById('popupPrice');
        const popupDescription = document.getElementById('popupDescription');
        const popupFeatures = document.getElementById('popupFeatures');
        
        // Form elements
        const contactForm = document.getElementById('contactForm');
        const newsletterForm = document.getElementById('newsletterForm');
        const contactNotification = document.getElementById('contactNotification');
        const newsletterNotification = document.getElementById('newsletterNotification');
        const contactSubmitBtn = document.getElementById('contactSubmitBtn');
        const newsletterSubmitBtn = document.getElementById('newsletterSubmitBtn');

        // Function to show notification
        function showNotification(element, message, type) {
            element.textContent = message;
            element.className = 'form-notification';
            element.classList.add(`form-${type}`);
            element.style.display = 'block';
            
            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    element.style.display = 'none';
                }, 5000);
            }
        }

        // Function to submit form data to Google Sheets
        async function submitToGoogleSheets(data, type) {
            try {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8',
                    },
                    body: JSON.stringify({...data, type: type})
                });
                
                const result = await response.json();
                return result;
            } catch (error) {
                console.error('Error submitting form:', error);
                return {result: 'error', message: 'Network error. Please try again.'};
            }
        }

        // Contact form submission
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Show loading state
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            showNotification(contactNotification, 'Sending your message...', 'loading');
            
            try {
                const result = await submitToGoogleSheets(formData, 'contact');
                
                if (result.result === 'success') {
                    showNotification(contactNotification, 'Thank you! Your message has been sent successfully.', 'success');
                    contactForm.reset();
                } else {
                    showNotification(contactNotification, `Error: ${result.message}`, 'error');
                }
            } catch (error) {
                showNotification(contactNotification, 'An error occurred. Please try again.', 'error');
            } finally {
                // Reset button state
                contactSubmitBtn.disabled = false;
                contactSubmitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            }
        });

        // Newsletter form submission
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('newsletterEmail').value;
            const formData = { email };
            
            // Show loading state
            newsletterSubmitBtn.disabled = true;
            newsletterSubmitBtn.innerHTML = 'Subscribing...';
            showNotification(newsletterNotification, 'Subscribing...', 'loading');
            
            try {
                const result = await submitToGoogleSheets(formData, 'newsletter');
                
                if (result.result === 'success') {
                    showNotification(newsletterNotification, 'Thank you for subscribing to our newsletter!', 'success');
                    newsletterForm.reset();
                } else {
                    showNotification(newsletterNotification, `success: ${result.message}`, 'success');
                }
            } catch (error) {
                showNotification(newsletterNotification, 'Thank you for subscribing to our newsletter!', 'success');
            } finally {
                // Reset button state
                newsletterSubmitBtn.disabled = false;
                newsletterSubmitBtn.innerHTML = 'Subscribe';
            }
        });

        // ... (rest of your existing JavaScript remains the same)
        // Loading screen, header scroll, mobile menu, collection rendering, etc.

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderCollectionItems();
        });
     

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Back to top button
            if (window.scrollY > 500) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        // Mobile menu toggle
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Render collection items
        // In your renderCollectionItems function, update the description rendering:

        // In your renderCollectionItems function:
        function renderCollectionItems(filter = 'all') {
            collectionGrid.innerHTML = '';
            
            const filteredItems = filter === 'all' 
                ? collectionItems 
                : collectionItems.filter(item => item.category === filter);
            
            filteredItems.forEach(item => {
                const collectionItem = document.createElement('div');
                collectionItem.className = 'collection-item';
                collectionItem.setAttribute('data-category', item.category);
                
                // Ultra short description for mobile
                const shortDescription = item.description.substring(0, 60) + '...';
                
                collectionItem.innerHTML = `
                    <div class="collection-img-container">
                        <img src="${item.image}" alt="${item.title}" class="collection-img">
                        <div class="collection-overlay">
                            <button class="btn view-details-btn" data-id="${item.id}">Details <i class="fas fa-eye"></i></button>
                        </div>
                    </div>
                    <div class="collection-info">
                        <h3>${item.title}</h3>
                        <p class="collection-description">${shortDescription}</p>
                        <div class="collection-price">${item.price}</div>
                    </div>
                `;
                
                collectionGrid.appendChild(collectionItem);
            });
            
            
            // Add event listeners to view details buttons
            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const itemId = parseInt(btn.getAttribute('data-id'));
                    openProductPopup(itemId);
                });
            });
            
            // Animate items on scroll
            animateOnScroll();
        }

        // Open product popup
        function openProductPopup(itemId) {
            const item = collectionItems.find(i => i.id === itemId);
            if (!item) return;
            
            // Set popup content
            popupImage.style.backgroundImage = `url('${item.image}')`;
            popupTitle.textContent = item.title;
            popupPrice.textContent = item.price;
            popupDescription.textContent = item.description;
            
            // Clear and set features
            popupFeatures.innerHTML = '';
            item.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                popupFeatures.appendChild(li);
            });
            
            // Show popup
            productPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close product popup
        function closeProductPopup() {
            productPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Event listeners for popup
        popupClose.addEventListener('click', closeProductPopup);
        closePopupBtn.addEventListener('click', closeProductPopup);
        
        // Close popup when clicking outside content
        productPopup.addEventListener('click', (e) => {
            if (e.target === productPopup) {
                closeProductPopup();
            }
        });

        // Inquire button - scroll to contact form
        inquireBtn.addEventListener('click', () => {
            closeProductPopup();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Filter collection items
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                // Filter items
                renderCollectionItems(btn.getAttribute('data-filter'));
            });
        });

        // Animate elements on scroll
        function animateOnScroll() {
            const items = document.querySelectorAll('.collection-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            items.forEach(item => {
                observer.observe(item);
            });
        }

        // Animate stats counter
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current);
                }, 16);
            });
        }

        // Stats counter on scroll
        const statsSection = document.querySelector('.stats');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Form submission (frontend only - no backend functionality)
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a frontend-only demonstration, so your message has not been sent to a server.');
            e.target.reset();
        });

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            e.target.reset();
        });

        // Back to top functionality
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderCollectionItems();
        });

        // Create particle effect
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random position
                particle.style.left = Math.random() * 100 + 'vw';
                
                // Random size
                const size = Math.random() * 3 + 1;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random animation duration
                const duration = Math.random() * 10 + 10;
                particle.style.animationDuration = duration + 's';
                
                // Random delay
                particle.style.animationDelay = Math.random() * 15 + 's';
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Initialize when page loads
        window.addEventListener('DOMContentLoaded', createParticles);
