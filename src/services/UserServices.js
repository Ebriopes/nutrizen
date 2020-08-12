import axios from "axios";

const base_url = "https://cinta-negra-b43.herokuapp.com/api/v1";
const token = `myapp ${localStorage.getItem('token')}`

export async function getUsers() {
  try {
    const { data } = await axios.get(`${base_url}/users`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}

export async function registerUser(user, props) {
  try {
    await axios.post(`${base_url}/users`, user);
    props.history.push("/login");
  } catch (error) {
    return error;
  }
}

export async function loginUser(user) {
  try {
    const { data } = await axios.post(`${base_url}/users/login`, user);
    return data
  } catch (error) {
    return error;
  }
}
