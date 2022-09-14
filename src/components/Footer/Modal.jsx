import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ open, onClose }) => {
  const handleSubmit = () => {
    setTimeout(() => {
      toast("Email Received");
      onClose();
    }, 100);
  };

  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <p className="closeBtn" onClick={onClose}>
          X
        </p>
        <div className="email-form">
          <h2>Contact Us</h2>
          <form
            action={
              "https://public.herotofu.com/v1/686c2ee0-3403-11ed-9de0-b73c4b901972"
            }
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div>
              <input type="text" placeholder="Your name" name="name" required />
            </div>
            <div>
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
              <textarea placeholder="Your message" name="message" required />
            </div>
            <button className="btnPrimary" type="submit">
              Send us a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
