import React, { useState } from "react";
import classNames from "classnames";
import styles from "../styles/Contact.module.scss";
import RequiredAsterisk from "./required";

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

  type RadioValues = {
    [key: string]: boolean;
  };

  const [radioValues, setRadioValues] = useState<RadioValues>({
    generalEnquiry: true,
    supportRequest: false,
  });

  const [errors, setErrors] = useState<InputValues>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const validate = (): boolean => {
    let valid = true;
    const newErrors: InputValues = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    if (!inputValues.firstName) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    if (!inputValues.lastName) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    if (!inputValues.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!inputValues.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    console.log(valid);
    return valid;
  };

  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = async (event: any) => {
    validate();
    event.preventDefault();
    console.log("submit");

    // handle form submission logic here
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = event.target;

    if (type === "radio") {
      setRadioValues({
        generalEnquiry: id === "generalEnquiry",
        supportRequest: id === "supportRequest",
      });
    } else {
      setInputValues((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
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
      error: errors[id],
      "spacing-300": !errors[id],
    });
  };

  const getRadioClass = (id: string) => {
    return classNames("form-check radio-button generalEnquiry", {
      checked: radioValues[id],
    });
  };

  return (
    <div className="container-fluid entireForm">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First Name <RequiredAsterisk />
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
                {errors["firstName"] && (
                  <div>
                    <span className="errorMessage">{errors["firstName"]}</span>
                  </div>
                )}
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name <RequiredAsterisk />
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
                {errors["lastName"] && (
                  <div>
                    <span className="errorMessage">{errors["lastName"]}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email address <RequiredAsterisk />
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
            {errors["email"] && (
              <div>
                <span className="errorMessage">{errors["email"]}</span>
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">
              Query Type <RequiredAsterisk />
            </label>
            <div className="row">
              <div className="col-sm-6">
                <div className={getRadioClass("generalEnquiry")}>
                  <input
                    className="form-check-input radio"
                    type="radio"
                    name="queryType"
                    id="generalEnquiry"
                    value="generalEnquiry"
                    defaultChecked={true}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="generalEnquiry">
                    General Enquiry
                  </label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className={getRadioClass("supportRequest")}>
                  <input
                    className="form-check-input radio"
                    type="radio"
                    name="queryType"
                    id="supportRequest"
                    value="supportRequest"
                    onChange={handleChange}
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
              Message <RequiredAsterisk />
            </label>
            <textarea
              className={getInputClass("message")}
              id="message"
              rows={6}
              value={inputValues.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
            {errors["message"] && (
              <div>
                <span className="errorMessage">{errors["message"]}</span>
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-check contact-consent-section">
              <input
                className="form-check-input checkbox"
                type="checkbox"
                value=""
                id="consent"
              />
              <label className="form-check-label consent" htmlFor="consent">
                I consent to being contacted by the team <RequiredAsterisk />
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
