
    // Select DOM elements
    const inputFields = document.querySelectorAll(".contact-input");
    const loginForm = document.querySelector(".login-form");
    const submitButton = document.querySelector(".submit-button");
    const errorMessage = document.querySelector(".error-message");
    const contactList = document.createElement("ul");
    document.body.appendChild(contactList);
    
    const submittedContacts = [];
    
    // Event listeners
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        validateAndSubmit(event);
    });
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default button action
        validateAndSubmit(event);
    });
    
    // Validation and submission function
    function validateAndSubmit(event) {
        let isValid = true; // Flag to track validity
        errorMessage.innerText = ""; // Clear previous error messages
    
        inputFields.forEach(input => {
            if (input.value.trim() === "") { // Check if input is empty
                isValid = false; // Set flag to false
                errorMessage.innerText = "Please fill in all the inputs!";
                errorMessage.style.color = "red";
                setTimeout(() =>{errorMessage.innerText=""},3000);
            }
        });
    
        if (isValid) {
            submitData(event); // Call submitData only if valid
        }
    }
    
    // Data submission function
    function submitData(event) {
        const newContact = {
            firstName: inputFields[0].value,
            secondName: inputFields[1].value,
            email: inputFields[2].value,
            mobileNumber: inputFields[3].value,
            id: Date.now()* Math.floor( Math.random()*10000,)// Generating unique id using combintion of date.now and Math.random and math.floor
            
        };
        console.log(newContact.id);
        submittedContacts.push(newContact); // Add new contact to the array
        createListItem(newContact); // Create and display the list of contacts
    
        // Clear input fields after submission
        inputFields.forEach(input => input.value = "");
    }
    
    // Function to create a list item
    function createListItem(contact) {
        const listElement = document.createElement("li");
        listElement.classList.add("contact-list");
    
        // Format the output for the contact
        listElement.innerText = `Name: ${contact.firstName} ${contact.secondName}, Email: ${contact.email}, Mobile: ${contact.mobileNumber}`;
    
        // Append the new list element to the contact list
        contactList.appendChild(listElement);
    }