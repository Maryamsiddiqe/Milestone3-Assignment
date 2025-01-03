import React from 'react';

const contentBlock = () => {
    return (
        <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 md:pr-10'>
                <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Pizza</h2>
                <p className='text-white mb-4'>
                    Experience the tasty pizza in town made with fresh ingredient and baked to perfection.
                </p>
                <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-green-500 transition duration-200'>
                    Order Now
                </button>

                <h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-white'>
                    Coming soon our new flavours launches
                </h3>

                <ul className='space-y-4'>
                    <li className='text-white'>
                        <strong>Spicy Tex-Mex Pizza:</strong> Jalapeños, chipotle chicken, corn, and spicy Tex-Mex sauce.
                    </li>

                    <li className='text-white'>
                        <strong>Mediterranean Delight:</strong> Olives, feta cheese, sun-dried tomatoes, and oregano.
                    </li>

                    <li className='text-white'>
                        <strong>BBQ Burst Pizza:</strong> Smoky BBQ chicken, caramelized onions, and mozzarella.
                    </li>

                    <li className='text-white'>
                        <strong>Creamy Garlic Mushroom Pasta:</strong> A rich blend of garlic, mushrooms, and parmesan cream.
                    </li>

                    <li className='text-white'>
                        <strong>Spicy Arrabbiata Pasta:</strong> Tangy tomato sauce with red chili flakes and olives.
                    </li>

                    <li className='text-white'>
                        <strong>Tandoori Masala Fries:</strong> Crispy fries with a zesty tandoori masala.
                    </li>

                    <li className='text-white'>
                        <strong>Herb & Garlic Fries:</strong> Infused with fresh herbs, garlic, and parmesan.
                    </li>
                </ul>
            </div>

            <div className='md:w-1/2 mt-6 md:mt-0'>
                <img
                    src='../images/deliciouspizza1.jpg'
                    alt='delicious pizza'
                    className='w-[800px] h-[500px] rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'
                />
            </div>
        </section>
    );
};

export default contentBlock;