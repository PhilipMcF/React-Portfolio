import { useState } from "react";
import {validateEmail} from "../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } 
            else {
                setErrorMessage('');
            }
        } 
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } 
            else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            const updatedFormState = { ...formState, [e.target.name]: e.target.value }; //for logging purposes
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', updatedFormState);
        }
    };

    function renderErrorMessage() {
        if (errorMessage) {
            return (
                <div>
                <p className="error">{errorMessage}</p>
                </div>
            );
        }
        return null;
    }

    return (
        <section className="contactS">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br></br>
                    <input className="input-field"
                        type="text"
                        name="name"
                        defaultValue={name}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br></br>
                    <input className="input-field"
                    type="email"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea className="textarea-field"
                        name="message"
                        rows={7}
                        defaultValue={message}
                        onBlur={handleChange}
                    />
                </div>
                {renderErrorMessage()}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

// export default Contact;
export default Contact;