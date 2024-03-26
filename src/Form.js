import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './Form.css';
function Proform({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: '',
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};    
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
        errors.firstName = "Invalid First ame";
        formIsValid = false;
    }   
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
        errors.lastName = "Invalid Last Name";
        formIsValid = false;
    }    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Invalid Email Format";
        formIsValid = false;
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(formData.password)) {
        errors.password = "Invalid Password Format";
        formIsValid = false;
    }
    if (!formData.favoriteSeason) {
        errors.favoriteSeason = "Please select your favorite season.";
        formIsValid = false;
    }
    setErrors(errors);
    return formIsValid;
};
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };
  
  return (
    <><h1 className="heading">Registration Form</h1>
    
    <Container className="d-flex justify-content-center align-items-center vh-100">
      

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <Form.Text className="text-danger">{errors.firstName}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <Form.Text className="text-danger">{errors.lastName}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFavoriteSeason">
          <Form.Label>Favorite Season</Form.Label>
          <Form.Select name="favoriteSeason" value={formData.favoriteSeason} onChange={handleChange}>
            <option value="">Select your favorite season</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container></>
    );
}

export default Proform;
