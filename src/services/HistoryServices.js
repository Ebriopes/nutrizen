import axios from "axios";

const base_url = "https://nutrizens.herokuapp.com/api/v1";
const token = `myapp ${localStorage.getItem('token')}`

export async function getHistory() {
  try {
    const data2 =       [{userId: "111111", checkdate: "14/08/2020", weight: "70", bodyfat:"25", musclemass :"56", calories:"2500"}]
    const { data } = await axios.get(`${base_url}/:id/bodies`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}
