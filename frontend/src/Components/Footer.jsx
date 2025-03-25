import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12 border-t">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* TheEvexs Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">TheEvexs</h3>
            <p className="text-sm leading-relaxed">
              Learn more about TheEvexs! We'll help's journey and vision. In this space, we share 
              our story and commitment to providing outstanding event planning services.
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-900">About Us</Link></li>
              <li><Link to="/events" className="hover:text-gray-900">Latest Events</Link></li>
              <li><Link to="/services" className="hover:text-gray-900">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
            <p className="text-sm mb-2">
              4517 Washington Avenue,<br />
              Manchester, Kentucky 39495,<br />
              Region Iraq
            </p>
            <a href="mailto:info@theevexs.com" className="text-sm hover:text-gray-900">info@theevexs.com</a><br />
            <a href="tel:+9647461123456789" className="text-sm hover:text-gray-900">+964 746 123 456 789</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 TheEvexs – The Events Specialists All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
