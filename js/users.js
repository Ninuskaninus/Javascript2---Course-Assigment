/* const userForm = document.querySelector('#userForm');
const userInput = document.querySelectorAll('#userForm input');
const inputElements = Array.from(document.querySelectorAll('#userForm input'));
const formDataObject = inputElements.reduce((acc, input) => ({...acc, [input.id]: input.value}), {});
console.log(formDataObject);

const userToRegister = {

  name: formDataObject.username,
  password: formDataObject.createPassword,
  email: formDataObject.email,

}; */

/* const api_base_url = "https://api.noroff.dev/api/v1";
const register_endpoint = "/holidaze/auth/register";

async function createProfile(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

const mainUser = {
  name: "ninuskaninus",
  password: "hurrysorry",
  email: "NinAmd94811@stud.noroff.no",
};

const registerUrl = `${api_base_url}${register_endpoint}`;

createProfile (registerUrl, mainUser); */