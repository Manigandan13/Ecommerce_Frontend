import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContact } from '../store/actions';
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
    const dispatch = useDispatch();
    const { loading, success, error, message } = useSelector((state) => state.contact);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitContact(formData));
        setFormData({name: '',
        email: '',
        message: ''});
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
             style={{ backgroundImage: "url('')" }}>

            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-4xl font-bold text-center mb-6">Contact us</h1>
                <p className="text-gray-600 text-center mb-4">
                    We would love to hear from you! Please fill out the form below or contact us directly
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                            disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && <p className="text-green-600">Message sent successfully!</p>}
                    {error && <p className="text-red-600">Failed to send message: {error}</p>}
                </form>

                <div className="mt-8 text-center">
                    <h2 className="text-lg font-semibold">Contact Information</h2>
                    <div className="flex flex-col items-center space-y-2 mt-4">
                        <div className="flex items-center">
                            <FaPhone className="text-blue-500 mr-2" />
                            <span className="text-gray-600">+91 9995557773</span>
                        </div>

                        <div className="flex items-center">
                            <FaEnvelope className="text-blue-500 mr-2" />
                            <span className="text-gray-600">abixy@gmail.com</span>
                        </div>

                        <div className="flex items-center">
                            <FaMapMarkedAlt className="text-blue-500 mr-2" />
                            <span className="text-gray-600">13 Warrior street,Vellore,Tamilnadu</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;