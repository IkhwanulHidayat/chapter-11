import axios from '../../utility/axios'
import { GET_PROFILE } from '../type/authType'
import { toast } from "react-toastify"

export const getProfile = () => async (dispatch) => {
  try {
    const data = await axios.get('/api/profile')
    dispatch({
      type: GET_PROFILE,
      profile: data.data,
    })
  } catch (error) {
    console.log(error)
  }
};

export const doLogin = async (body) => {
  try {
    const { data } = await axios.post("/auth/login", body);
    console.log(data)
    localStorage.setItem("_q", data.token);
    toast.success("Login success");
    window.location.replace("/homepage");
  } catch (error) {}
};

export const doRegister = async (body) => {
  try {
    await axios.post("/auth/register", body)
    toast.success("silahkan login")
    window.location.replace("/auth/login")
  } catch (error) {
    toast.error(error.message)
  }
}