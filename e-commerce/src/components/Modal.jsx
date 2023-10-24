/* eslint-disable react/prop-types */
const Modal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
