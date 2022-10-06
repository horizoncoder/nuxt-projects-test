<template>
  <div>
    <div class="modal">
      <button class="close-modal" @click="closeModal(projectId)">&times;</button>
      <h1>Input new project name</h1>
      <input class="input" v-model="name" type="text">
      <button class="modal-btn" @click="handleSubmit(name)">Edit</button>
    </div>
    <div class="overlay" @click="closeModal(projectId)"></div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Modal',
  props: {
    projectId: Number,
    closeModal: Function
  },
  data(){
    return{
      name: ""
    }
  },
  methods:{
    ...mapActions({
      changeProject: 'projectStore/changeProjectName',
      getProjects: "projectStore/fetchProjects",
    }),
    ...mapGetters({
      myProjects: "projectStore/getProjects"
    }),
    handleSubmit(name){
      try {
        this.changeProject({name,id:this.projectId})
      }finally {
        setTimeout(()=>{
          this.getProjects()
        },500) // The data could not be updated in time on the server, so a delay had to be made
        this.closeModal(this.projectId)
      }
    },
  }
}
</script>
<style>

.close-modal {
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  font-size: 5rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: white;
  padding: 6rem;

  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
}
h1{
  text-align: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}
.input{
  display: block;
  width: 70%;
  padding: 10px;
  font-size: 20px;
  margin: 0 auto;
}
.modal-btn{
  display: block;
  margin: 30px auto 0;
  font-size: 24px;
  padding: 5px 30px;
  background: #ccfcff;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>
