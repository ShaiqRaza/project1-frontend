import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="z-50 text-sm text-gray-500 flex flex-col items-center justify-center bg-gray-900 py-6 w-full">
      {/* Copyright Section */}
      <div className="flex items-center mb-4">
        © 2024
        <a href="#" className="hover:underline ml-1 text-white">
          muhammadkhushamali
        </a>
        . All Rights Reserved.
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4">
        <a href="https://www.facebook.com" className="text-white hover:text-blue-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.twitter.com" className="text-white hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.instagram.com" className="text-white hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com" className="text-white hover:text-blue-700">
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Contact Information */}
      <div className="flex items-center space-x-2">
        <FaPhoneAlt className="text-white" size={20} />
        <a href="tel:+1234567890" className="text-white hover:underline">
          +1 234 567 890
        </a>
      </div>
    </div>
  );
};

export default Footer;
