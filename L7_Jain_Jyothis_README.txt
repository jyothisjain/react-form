


# Lab 



* *Date Created*: 26 03 2024
* *Last Modification Date*: 26 03 2024
* *Deploy URL*: https://65f9118cfdd3920008e41ca0--jyo-lab6.netlify.app/
* *Git Hub URL*: https://github.com/jyothisjain/first-react-app
* *Git Lab URL*: https://git.cs.dal.ca/jyothis/csci-3172/-/tree/main/labs/lab7





## Authors



* Jyothis Jain(jyothis@dal.ca) - *(Author)*

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




The code above was created by adapting the code in W3Schools(https://www.w3schools.com/react/react_usestate.asp) and as shown below: 

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);


- <!---How---> W3Schools(https://www.w3schools.com/react/react_forms.asp)'s was implemented by understanding on how to build a form from stratch.
- <!---Why---> W3Schools(https://www.w3schools.com/react/react_forms.asp) 's Code was used because the implementation of the form and its structure was unknown.
- <!---How---> W3Schools(https://www.w3schools.com/react/react_forms.asp)'s Code was modified by adapting the code as per design and validation requiremnts. 


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Bootstrap]https://react-bootstrap.netlify.app/ - The React web framework used

**