const api_base_url = "https://api.noroff.dev/api/v1";

// Endpoints
const register_endpoint = "/holidaze/auth/register";
const login_endpoint = "/social/auth/login";
const posts_endpoint = "/social/posts";


//------------------REGISTER------------------//

/**
 * API call that registers the user
 * @param {string} url 
 * @param {any} userData 
 * 
 * ```js
 *createProfile (registerUrl, userToRegister);
  * ```
 */

 const API_BASE_URL = 'https://api.noroff.dev';

 async function registerUser(url, data) {
   try {
     const postData = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
     };
 
     const response = await fetch(url, postData);
     console.log(response);
     const json = await response.json();
     console.log(json);
     return json;
   } catch (error) {
     console.log(error);
   }
 }
 
 const user = {
   name: 'ninuskaninus',
   email: 'NinAmd94811@stud.noroff.no',
   password: 'hurrysorry',
 };
 
 registerUser(`${API_BASE_URL}/api/v1/social/auth/register`, user);


//------------------LOGIN------------------//

/**
 * Log in the user
 * @param {string} url 
 * @param {any} userData 
 * ```js
 * login(loginUrl, userToLogin);
 * ```
 */ 

async function login(url, userData) {
  try {
    
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    
  } catch (error) {
    console.log(error);
  }
}

const userToLogin = {
  name: 'ninuskaninus',
  email: 'NinAmd94811@stud.noroff.no',
  password: 'hurrysorry',
};

const loginUrl = `${api_base_url}${login_endpoint}`;

login(loginUrl, userToLogin);

//------------------Request with token------------------//

/** Get data with token
 * @param {string} url 
 * 
 * ```js
 * getWithToken(postsUrl);
 * ```
 */

async function getWithToken(url){
const token = localStorage.getItem("accessToken");
  try {
    const fetchData = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      },
    });
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }

}

const postsUrl = `${api_base_url}${posts_endpoint}`;


getWithToken(postsUrl, fetchData);

