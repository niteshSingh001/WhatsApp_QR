import React from "react";
import QRCode from "react-qr-code";

const WhatsAppQRCode = () => {
  // Access the phone number from the environment variable
  const phoneNumber = process.env.REACT_APP_WHATSAPP_PHONE_NUMBER;

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
