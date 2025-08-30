import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const phone = "+94701424978";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2hya2xr",     
        "template_wit05yg",    
        e.currentTarget,
        "KjE1dqoAvXC5R53Fb"     
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
        },
        (error) => {
          alert("Failed to send message ❌: " + error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div>
      <h2 className="section-title">Contact Me</h2>
      <p className="small">Click the button below to chat via WhatsApp.</p>
      <a
        className="btn"
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noreferrer"
      >
        Message on WhatsApp
      </a>
      <hr className="sep" />

      {}
      <form onSubmit={sendEmail}>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label>
              Name<br />
              <input name="name" required />
            </label>
          </div>
          <div>
            <label>
              Email<br />
              <input type="email" name="email" required />
            </label>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <label>
            Message<br />
            <textarea name="message" rows={5} required />
          </label>
        </div>
        <div style={{ marginTop: 12 }}>
          <button className="btn" type="submit">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
