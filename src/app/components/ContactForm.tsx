import React, { useState } from "react";
import classNames from "classnames";
import styles from "../styles/Contact.module.scss";

const ContactForm: React.FC = () => {
  type InputValues = {
    [key: string]: string;
  };

  const [inputValues, setInputValues] = useState<InputValues>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // handle form submission logic here
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setInputValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocusedInput(event.target.id);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const getInputClass = (id: string) => {
    return classNames("form-control text-box", {
      filled: inputValues[id] && focusedInput !== id,
    });
  };

  return (
    <div className="container mt-5">
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={getInputClass("firstName")}
                  id="firstName"
                  value={inputValues.firstName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={getInputClass("lastName")}
                  id="lastName"
                  value={inputValues.lastName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={getInputClass("email")}
              id="email"
              value={inputValues.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Query Type</label>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-check radio-button">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="queryType"
                    id="generalEnquiry"
                    value="generalEnquiry"
                  />
                  <label className="form-check-label" htmlFor="generalEnquiry">
                    General Enquiry
                  </label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check radio-button">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="queryType"
                    id="supportRequest"
                    value="supportRequest"
                  />
                  <label className="form-check-label" htmlFor="supportRequest">
                    Support Request
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className={getInputClass("message")}
              id="message"
              rows={4}
              value={inputValues.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="consent"
              />
              <label className="form-check-label" htmlFor="consent">
                I consent to being contacted by the team
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
