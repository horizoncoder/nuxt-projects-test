import axios from "axios";
import login from "~/pages/login";
const state = () => ({
  user: {},
  isLogin:false
});
const mutations = {

};
const actions = {
  async login({ commit }, payload) {
    axios
      .post("https://api.quwi.com/v2/auth/login", payload)
      .then(async  (response)=> {
        if (response.status === 200 || 201) {
          await localStorage.setItem("authorization", response.data.token);
          console.log(localStorage.getItem('authorization'))
        }

      })
      .catch((error)=> {
        alert(error)
      });
  },
  async logout({ commit }) {
    const token = localStorage.getItem("authorization");
    axios
      .post("https://api.quwi.com/v2/auth/logout", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function () {
        localStorage.removeItem("authorization");
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
const getters = {
  getUser(state) {
    return state.user;
  },
};

export default { state, mutations, actions, getters };
