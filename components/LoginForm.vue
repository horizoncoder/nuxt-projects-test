<template>
  <div class="wrapper">
  <article class="container">
    <div class="form-box">
      <form action="#" class="form form_signin">
        <h3 class="form__title">Вход</h3>
        <p  class="error-message" v-if="isButtonDisabled">Заполните поля</p>
        <p>
          <input v-model="form.email" type="text" class="form__input" placeholder="Логин">
        </p>
        <p>
          <input v-model="form.password" type="password" class="form__input" placeholder="Пароль">
        </p>
        <p>
          <button  @click="click(form)" :disabled="isButtonDisabled" type="button" class="form__btn">Войти</button>
        </p>
      </form>
    </div>
  </article>
  </div>
</template>
<script >
import {mapActions, mapGetters} from 'vuex'
import login from "~/pages/login";
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

    methods: {
     async click(form) {
       try {
         await this.userLogin(form)
       } finally {
         setTimeout(()=>{
           this.$router.push("/");
         },1000)

       }
     },
      ...mapActions({
        userLogin: 'userStore/login',
      }),


    },
    computed: {
      isButtonDisabled() {

        if (this.form.email.length === 0 || this.form.password.length === 0) {
          return true

        } else {
          return false
        }
      },
      ...mapGetters({
        userLoginData: 'userStore/getUser'
      })
    },
}
</script>
<style>
.error-message{
  color: red;
}
.wrapper{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 800px;
  height: 500px;
  padding: 40px 0;
  position: relative;
}
.form-box {
  background-color: #fff;
  height: 100%;
  width: 50%;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  transition: 0.5s ease-in-out;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.form {
  width: 100%;
  padding: 50px;
  font-size: 16px;
  position: absolute;
  transition: 0.5s;
}

.form_signin {
  left: 0;
  transition-delay: 0.25s;
}

.form-box.active .form_signin {
  left: -100%;
  transition-delay: 0s;
}

.form__title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
}

.form__input {
  width: 100%;
  padding: 10px;
  border: solid 1px #333;
  font-size: inherit;
}

.form__btn {
  border: none;
  cursor: pointer;
  font-size: inherit;
  background-color: #03a9f4;
  color: #fff;
  padding: 10px 50px;
}


@media (max-width: 992px) {
  .container {
    max-width: 400px;
    height: 650px;
    padding: 0;
    margin: 0 20px;
  }

  .form-box {
    width: 100%;
    height: 500px;
    box-shadow: none;
    top: 0;
  }
}
</style>
