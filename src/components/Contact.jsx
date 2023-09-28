import React from 'react';
import { FaEnvelope, FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

function Contact() {
  return (
    <div className="bg-[#9F5FFE] h-5 flex font-light text-xs items-center justify-between p-1 px-16">
      <div className="flex items-center text-white text-xs flex-shrink">
        <div className="mr-2">
          <BsFillTelephoneFill fill='white' size={10} />
        </div>
        <div >
          <p>+123-456-7890</p>
        </div>
        <div className="ml-7 mr-2">
          <FaEnvelope fill='white' size={10} />
        </div>
        <div>
          <p>info@donaty.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaTwitter fill='white' size={10} className="mr-3" />
        <FaInstagram fill='white' size={10} className="mr-3" />
        <FaFacebookF fill='white' size={10} className="mr-3" />
        <FaYoutube fill='white' size={10} />
      </div>
    </div>
  );
}

export default Contact;
