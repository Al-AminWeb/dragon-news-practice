import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className="p-4">
            <h2 className="font-bold text-lg mb-3">Find Us On</h2>

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 border rounded-md px-4 py-2 hover:bg-gray-50 cursor-pointer">
                    <FaFacebookF className="text-blue-600" />
                    <span className="font-medium">Facebook</span>
                </div>

                <div className="flex items-center gap-3 border rounded-md px-4 py-2 hover:bg-gray-50 cursor-pointer">
                    <FaTwitter className="text-sky-500" />
                    <span className="font-medium">Twitter</span>
                </div>

                <div className="flex items-center gap-3 border rounded-md px-4 py-2 hover:bg-gray-50 cursor-pointer">
                    <FaInstagram className="text-pink-500" />
                    <span className="font-medium">Instagram</span>
                </div>
            </div>
        </div>
    );
};

export default FindUs;
