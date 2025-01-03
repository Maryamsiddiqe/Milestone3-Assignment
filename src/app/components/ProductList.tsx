import React from 'react';

const products = [
  {
    id: 1,
    title: "Italian Lasagna",
    category: "classy",
    price: "1200",
    imageUrl: "../images/lasagna2.jpg",
    bgColor: "bg-pink-500",
  },
  {
    id: 2,
    title: "Alfredo Pasta",
    category: "creamy",
    price: "800",
    imageUrl: "../images/pasta2.jpg",
    bgColor: "bg-teal-500",
  },
  {
    id: 3,
    title: "Pizza Fries",
    category: "cheesy delight",
    price: "500",
    imageUrl: "../images/fries2.jpg",
    bgColor: "bg-pink-500",
  },
];

export default function ProductList() {
    return (
      <div className="p-1 flex items-center justify-center mb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="152"
                height="152"
                width="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                height="152"
                width="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  zIndex: "-1",
                  opacity: 0.2,
                }}
              ></div>
              <img
                className="relative w-52"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
            <div className="relative text-white px-4 pb-4 mt-4">
              <span className="block opacity-75 text-sm">{product.category}</span>
              <div className="flex justify-between items-center mt-2">
                <span className="block font-semibold text-lg">{product.title}</span>
                <span className="block bg-white rounded-full text-orange-500 text-sm font-bold px-2 py-1">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }