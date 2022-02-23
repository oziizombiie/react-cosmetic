import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function SocialMediaBar() {
  return (
    <div className="flex space-x-6 text-2xl text-white py-4">
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
  );
}

export default SocialMediaBar;