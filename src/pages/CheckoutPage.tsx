// Import required modules
import React, { useState } from 'react';

interface OrderSummaryItem {
    product: string;
    quantity: number;
    price: number;
}

const Checkout: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        subDistrict: '',
        district: '',
        province: '',
        postalCode: '',
        phoneNumber: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        paymentMethod: 'card',
        bankAccount: '',
        paymentSlip: null as File | null,
    });

    const orderSummary: OrderSummaryItem[] = [
        { product: 'Product A', quantity: 2, price: 19.99 },
        { product: 'Product B', quantity: 1, price: 29.99 },
        { product: 'Product C', quantity: 3, price: 9.99 },
    ];

    const totalAmount = orderSummary.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({ ...formData, paymentSlip: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add validation logic or API submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex justify-between p-6 bg-gray-50">
            {/* Left Section: Form */}
            <form onSubmit={handleSubmit} className="w-full md:w-3/5 p-5 bg-white shadow-md rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Checkout</h2>
                <p className="text-gray-600 mb-6">Complete your order by providing your personal and payment information.</p>

                {/* Personal Information */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <input
                            type="text"
                            name="subDistrict"
                            placeholder="Sub-District"
                            value={formData.subDistrict}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="district"
                            placeholder="District"
                            value={formData.district}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <input
                            type="text"
                            name="province"
                            placeholder="Province"
                            value={formData.province}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
                    <div className="mb-3">
                        <label className="block mb-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={formData.paymentMethod === 'card'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Credit/Debit Card
                        </label>
                        <label className="block mb-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cashOnDelivery"
                                checked={formData.paymentMethod === 'cashOnDelivery'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Cash on Delivery
                        </label>
                        <label className="block mb-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="bankTransfer"
                                checked={formData.paymentMethod === 'bankTransfer'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Bank Transfer
                        </label>
                    </div>

                    {/* Card Payment Fields */}
                    {formData.paymentMethod === 'card' && (
                        <>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                                className="block w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="expirationDate"
                                placeholder="MM/YY"
                                value={formData.expirationDate}
                                onChange={handleChange}
                                required
                                className="block w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                                className="block w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </>
                    )}

                    {/* Bank Transfer Fields */}
                    {formData.paymentMethod === 'bankTransfer' && (
                        <div className="mt-4">
                            <p className="mb-3 text-gray-600">
                                Please transfer the total amount to the following bank account:
                            </p>
                            <div className="mb-3 p-3 bg-gray-100 border rounded">
                                <p><strong>Bank Name:</strong> Mock Bank</p>
                                <p><strong>Account Number:</strong> 123-456-7890</p>
                                <p><strong>Account Holder:</strong> Mock Account</p>
                            </div>
                            <input
                                type="file"
                                name="paymentSlip"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                                className="block w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                    Place Order
                </button>
            </form>

            {/* Right Section: Order Summary */}
            <div className="w-full md:w-1/3 p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
                <ul className="mb-4">
                    {orderSummary.map((item, index) => (
                        <li key={index} className="flex justify-between mb-3 text-gray-800">
                            <span>{item.product} x{item.quantity}</span>
                            <span>${(item.quantity * item.price).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <h4 className="text-lg font-bold text-gray-900">Total: ${totalAmount}</h4>
            </div>
        </div>
    );
};

export default Checkout;