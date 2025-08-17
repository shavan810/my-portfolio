// src/pages/Contact.jsx
import { Mail, MapPin, Send } from "lucide-react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tpf7piw",
        "template_8m27ahe",
        form.current,
        "BHjqWNGDxhxRT4kFm"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully! ✅");
          form.current.reset(); // reset form after sending
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="bg-slate-600 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-12 text-lg">
          Let’s build something amazing together 🚀
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-left space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600">
              I’d love to hear about your project or collaboration ideas. Reach
              out through the form or via my contact details below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-teal-500" />
                <span className="text-gray-700">creative.shavan@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-teal-500" />
                <span className="text-gray-700">Nashik, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid gap-6"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
