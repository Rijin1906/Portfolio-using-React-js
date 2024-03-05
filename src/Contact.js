import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../src/components  /css/Contact.css";
// import Footer from "./components  /Footer";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h6s368j",
        "template_yeamgqf",
        form.current,
        "tWOxEqo5u2iC9hEq1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="container-fliuid contact-body">
        <div>
          <h2>LET'S CHAT 👇</h2>
          <p id="para">
            {" "}
            “What will they think of me? Must be put aside for bliss."{" "}
          </p>{" "}
          {/* <p id="para2">~ JOSEPH CAMPBELL</p> */}
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          {/* <label>Name</label> */}
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="contact-input"
          />
          {/* <label>Email</label> */}
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="contact-input"
          />
          {/* <label>Message</label> */}
          <textarea
            name="message"
            // col="50"
            // row="50"
            placeholder="Write here.."
            className="contact-textarea"
          />
          <button type="submit" className="btn btn-outline-info btn-lg">
            {" "}
            Submit
          </button>
          {/* <input type="submit" value="Send" /> */}
        </form>
      </div>
      <div>
        <ul id="icons">
          <li>
            <a href="https://unsplash.com/@rijin_1906">
              {" "}
              <i class="fa-brands fa-unsplash"></i>
            </a>
          </li>
          <li><a href="https://www.linkedin.com/in/rijin-raj-6574b1226/"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/Rijin1906"><i class="fa-brands fa-github"></i></a></li>
        </ul>
        
      </div>

      {/* <Footer/> */}
    </div>
  );
}
