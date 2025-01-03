export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Chicken fajita Pizza",
            price: 1500,
            image: '../images/fajita.jpg', // Fixed `images` to `image`
        },
        {
            id: 2,
            name: "Chicken Tikka Pizza",
            price: 1500,
            image: '../images/tikka.jpg', // Fixed `images` to `image`
        },
        {
            id: 3,
            name: "Afghani Pizza",
            price: 1500,
            image: '../images/afghani.jpg', // Fixed `images` to `image`
        },
        {
            id: 4,
            name: "Chipotle",
            price: 500,
            image: '../images/fries2.jpg', // Fixed `images` to `image`
        },
        {
            id: 5,
            name: "Calzone",
            price: 1300,
            image: '../images/calzone3.jpg', // Fixed `images` to `image`
        },
        {
            id: 6,
            name: "Red Sauce Pasta",
            price: 800,
            image: '../images/redpasta.jpg', // Fixed `images` to `image`
        },
    ];

    res.status(200).json(products);
}