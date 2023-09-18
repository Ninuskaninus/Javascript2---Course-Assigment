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
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

const user = {
  name: 'nina_amdal',
  email: 'ninaamdal@noroff.no',
  password: 'thisisapassword',
};

registerUser(`${API_BASE_URL}/api/v1/social/auth/register`, user);

const userLogin = {
  email: 'ninaamdal@noroff.no',
  password: 'thisisapassword',
};

async function loginUser(url, data) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem('accessToken', accessToken);
    return json;
  } catch (error) {
    console.log(error);
  }
}

loginUser(`${API_BASE_URL}/api/v1/social/auth/login`, user);

async function fetchWithToken(url) {
  try {
    const token = localStorage.getItem('accessToken');
    const getData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}

fetchWithToken(API_BASE_URL + '/api/v1/social/posts');


