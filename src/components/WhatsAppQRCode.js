import React from "react";
import QRCode from "react-qr-code";

const WhatsAppQRCode = () => {
  // Access the phone number from the environment variable
  const phoneNumber = 18455379661;

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      <h2>Scan to Chat on WhatsApp</h2>
      <QRCode value={whatsappLink} />
    </div>
  );
};

export default WhatsAppQRCode;
