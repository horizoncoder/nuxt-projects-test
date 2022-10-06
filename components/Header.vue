<template>
  <header class="header">
    <div class="logo">Q</div>
    <nav class="navigation">
      <NuxtLink to="/" class="navLink">PROJECTS</NuxtLink>
      <button  @click="handleClick" class="navLink">LOGOUT</button>
    </nav>
  </header>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: 'Header',
  data(){
    return{
    }
  },
  methods:{
    handleClick(){
      this.logout()
      this.$router.push("/login");
    },
    ...mapActions({
      logout:'userStore/logout'
    })
  },
  computed:{
    token(){
      return localStorage.getItem("authorization")
    }
  },
  mounted() {
    if(!this.token){
      this.$router.push("/login");
    }
  }
}
</script>
<style>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 15px;
  background: #fafafa;
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  font-size: 40px;
  font-weight: 700;
}
.navLink{
  font-size: 30px;
  text-decoration: none;
  color: #c5c4be;
  border: none;
  background: none;
}
.navLink+.navLink{
  margin-left: 20px;
}
</style>
