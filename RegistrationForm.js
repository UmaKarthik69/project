import './RegistrationForm.css';
import React, { useState } from 'react';

export default function RegistrationForm() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        gender: '',
        hobbies: [],
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update form values
        setFormValues({
            ...formValues,
            [name]: value,
        });

        // Clear the error for the specific field
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormValues((prevValues) => {
            if (checked) {
                return {
                    ...prevValues,
                    hobbies: [...prevValues.hobbies, value],
                };
            } else {
                return {
                    ...prevValues,
                    hobbies: prevValues.hobbies.filter((hobby) => hobby !== value),
                };
            }
        });

        // Clear the error for hobbies if any are selected
        if (checked) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                hobbies: '',
            }));
        }
    };

    const validate = () => {
        const validationErrors = {};
        if (!formValues.firstName) validationErrors.firstName = "First Name is required";
        if (!formValues.lastName) validationErrors.lastName = "Last Name is required";
        if (!formValues.email) validationErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(formValues.email)) validationErrors.email = "Email address is invalid";
        if (!formValues.mobileNumber) {
            validationErrors.mobileNumber = "Mobile Number is required";
        } else if (!/^\d{10}$/.test(formValues.mobileNumber)) {
            validationErrors.mobileNumber = "Mobile Number must be exactly 10 digits";
        }
        if (!formValues.gender) validationErrors.gender = "Gender is required";
        if (formValues.hobbies.length === 0) validationErrors.hobbies = "At least one hobby must be selected";

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                        <br />
                        <a href="#"><img src="https://codebegun.com/images/logo_3_trans.png" className="logo" alt="Logo" /></a><br /><br />
                        <h1>Get In Touch.</h1>
                        <h5>Fill in the form to the right to get in touch with someone on our team, and we will reach out shortly.</h5><br /><br />
                        <h6>If you are seeking support please visit our <a className="uline" href="#">support portal</a> before reaching out directly.</h6><br />
                        <div className="display">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" /></svg> <h6>+91 6301099587</h6>
                        </div>
                        <div className="display">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16"><path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" /></svg><h6>hr@codebegun.com</h6>
                        </div>
                        <div className="display">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg><h6>Plot No.4, Flat N0.102, SM Reddy Complex, House No.1-98/8/9/A, Madhapur, Hyderabad, Telangana 500081</h6>
                        </div>
                        <div className="displays uline">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a><br/><br/><br/><br/>
                    </div>
                </div>
                
                <div className="col-lg-7 col-md-12 color margin">
                    <form onSubmit={handleSubmit}>
                        <div className="margins">
                            <div className="row">
                            <div className="col-lg-6 col-md-12">
<br/><label className="form-label">First Name <span className="text-danger">*</span></label>
     <input type="text" name="firstName" className="form-control" placeholder="Enter First Name" value={formValues.firstName} onChange={handleInputChange}/>
     {errors.firstName && <p className="text-danger">{errors.firstName}</p>}</div>
     <div className="col-lg-6 col-md-12">
<br/><label className="form-label">Last Name <span className="text-danger">*</span></label>
     <input type="text" name="lastName" className="form-control" placeholder="Enter Last Name" value={formValues.lastName} onChange={handleInputChange}/>
     {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
<br />
</div>

<div className="col-lg-6 col-md-12">
<label className="form-label">Email address <span className="text-danger">*</span></label>
<input type="email" name="email" className="form-control" placeholder="name@example.com" value={formValues.email} onChange={handleInputChange}/>
{errors.email && <p className="text-danger">{errors.email}</p>}
<br /></div>
<div className="col-lg-6 col-md-12">
<label className="form-label">Mobile Number <span className="text-danger">*</span></label>
<input type="text" name="mobileNumber" className="form-control" placeholder="Enter Mobile Number" value={formValues.mobileNumber} pattern="\d{10}" onChange={handleInputChange}/>
{errors.mobileNumber && <p className="text-danger">{errors.mobileNumber}</p>}
<br />
</div>



<div className="col-lg-6 col-md-12">
<label className="form-check-label">Gender <span className="text-danger">*</span></label><br />
    <div className="form-check">
        <input className="form-check-input" type="radio" name="gender" value="Male" checked={formValues.gender === 'Male'} onChange={handleInputChange}/>
            <label className="form-check-label">Male</label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="radio" name="gender" value="Female" checked={formValues.gender === 'Female'} onChange={handleInputChange}/>
            <label className="form-check-label">Female</label>
    </div>
{errors.gender && <p className="text-danger">{errors.gender}</p>}
<br /></div>
<div className="col-lg-6 col-md-12">
<label className="form-label">Hobbies <span className="text-danger">*</span></label>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" name="hobbies" value="Cricket" onChange={handleCheckboxChange}/>
            <label className="form-check-label">Cricket</label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" name="hobbies" value="Chess" onChange={handleCheckboxChange}/>
            <label className="form-check-label">Chess</label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" name="hobbies" value="Badminton" onChange={handleCheckboxChange}/>
            <label className="form-check-label">Badminton</label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" name="hobbies" value="Dance" onChange={handleCheckboxChange}/>
            <label className="form-check-label">Dance</label>
    </div>
{errors.hobbies && <p className="text-danger">{errors.hobbies}</p>}
<br />
</div>
                            </div>
                            </div>
                            <div className="col-4 offset-5">
                            <button type="submit" className="btn btn-primary align">Submit</button>
                            </div>
                        
                    </form>
                    {isSubmitted && <p className="text-success align">Form submitted successfully!</p>}<br/>
                </div>
            </div>
        </div>
    );
}
