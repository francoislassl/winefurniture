import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <h1 className="text-2xl font-bold text-gray-800">WhineFurniture</h1>
                    <nav className="space-x-4">
                        <a href="#about" className="text-gray-600 hover:text-gray-800 transition duration-300">About</a>
                        <a href="#products" className="text-gray-600 hover:text-gray-800 transition duration-300">Products</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-800 transition duration-300">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex-grow flex items-center justify-center bg-cover bg-center h-96" style={{ backgroundImage: "url('https://via.placeholder.com/800x400')" }}>
                <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Elevate Your Space</h2>
                    <p className="text-lg text-gray-600 mb-6">Discover our unique furniture collection designed for comfort and style.</p>
                    <a href="#products" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Shop Now</a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">About WhineFurniture</h3>
                    <p className="text-gray-600 mb-8">At WhineFurniture, we create stylish and functional pieces that make your home a better place.</p>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Sample Product Cards */}
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-32 object-cover rounded" />
                            <h4 className="text-lg font-semibold text-gray-800 mt-2">Product 1</h4>
                            <p className="text-gray-600">$299</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src="https://via.placeholder.com/150" alt="Product 2" className="w-full h-32 object-cover rounded" />
                            <h4 className="text-lg font-semibold text-gray-800 mt-2">Product 2</h4>
                            <p className="text-gray-600">$399</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src="https://via.placeholder.com/150" alt="Product 3" className="w-full h-32 object-cover rounded" />
                            <h4 className="text-lg font-semibold text-gray-800 mt-2">Product 3</h4>
                            <p className="text-gray-600">$499</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                    <p className="text-gray-600 mb-8">Have questions? We’d love to hear from you!</p>
                    <form className="flex flex-col items-center space-y-4">
                        <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-lg p-2 w-64" required />
                        <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-lg p-2 w-64" required />
                        <textarea placeholder="Your Message" className="border border-gray-300 rounded-lg p-2 w-64 h-32" required></textarea>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 WhineFurniture. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;