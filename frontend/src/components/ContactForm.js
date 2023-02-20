import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur();
    e.stopPropagation();
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateForm = () => {
    if (!name) {
      toast.error("Name is Required", { theme: "colored" });
      return false;
    } else if (!email) {
      toast.error("Email is Required", { theme: "colored" });
      return false;
    } else if (!phone) {
      toast.error("Phone Number is Required", { theme: "colored" });
      return false;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email id", {
        theme: "colored",
      });
      return false;
    }
    if (phone.length !== 10) {
      toast.error("Please enter a valid phone number", {
        theme: "colored",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const isValid = validateForm();
    if (isValid) {
      await axios
        .post("/submitForm", {
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Form Submitted Successfully", {
              theme: "colored",
            });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          }
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error(error.response.data.message, {
              theme: "colored",
            });
            console.log(error.response.data);
          } else {
            toast.error(error.response, {
              theme: "colored",
            });
            console.log(error.message);
          }
          setIsLoading(false);
        });
    }else{
        setIsLoading(false);
    }
  };

  return (
    <>
      <div className="contact flex flex-col md:flex-row justify-between md:mt-20 md:px-40 py-5 md:py-20 md:mb-40 md:h-[400px]">
        <div className="p-5">
          <div className="mb-10">
            <h1 className=" font-bold text-xl">
              <span className="fa fa-phone"></span> Call Us
            </h1>
            <p>+91 12345 12345</p>
          </div>
          <div className="mb-10">
            <h1 className=" font-bold text-xl">
              <span className="fa fa-map-marker"></span> Location
            </h1>
            <p>Ghaziabad, Uttar Pradesh</p>
          </div>
          <div>
            <h1 className=" font-bold text-xl">
              <span className="fa fa-globe"></span> Mail Us
            </h1>
            <p>info@markall.in</p>
          </div>
        </div>
        <div className="bg-white px-10 py-10 md:w-[600px] md:absolute md:mt-[-130px] md:right-20 form">
          <h1 className="mb-5 font-extrabold text-2xl">Contact Now</h1>
          <p className="md:w-[500px] mb-10 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            inventore libero eaque aliquid obcaecati repudiandae magnam corrupti
            illo perspiciatis porro consequatur
          </p>
          <form action="/#">
            <input
              type="text"
              placeholder="Name*"
              className="mb-5 md:w-[500px]"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <br />
            <input
              type="number"
              placeholder="Phone*"
              className="mb-5 md:w-[500px]"
              onWheel={numberInputOnWheelPreventChange}
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <br />
            <input
              type="email"
              placeholder="Email*"
              className="mb-5 md:w-[500px]"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Message"
              className="md:w-[500px] mb-10"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
            <br />
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white submit-btn px-5 py-3"
            >
              {isLoading && (<p>Submitting...</p>)}
              {!isLoading && (<p>Submit Form</p>)}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
