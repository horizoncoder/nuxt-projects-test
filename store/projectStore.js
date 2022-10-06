import axios from "axios";

const state = () => ({
  projects: [],
});
const mutations = {
  setProjects(state, payload) {
    state.projects = payload;
  },
};
const actions = {
  async fetchProjects({ commit }) {
    const token = localStorage.getItem("authorization");
    axios
      .get(
        "https://api.quwi.com/v2/projects-manage/index",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (response) {
        if(response.status===200 || 201){
          commit("setProjects", response.data.projects);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  async changeProjectName({ commit }, payload) {
    const token = localStorage.getItem("authorization");
    axios
      .post(
        `https://api.quwi.com/v2/projects-manage/update?id=${payload?.id}`,
        {
          name: payload?.name,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (response) {
        // commit("updateProject", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
const getters = {
  getProjects(state) {
    return state.projects;
  },
};
export default { state, mutations, actions, getters };
