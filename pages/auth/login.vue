<template>
  <div class="login">
    <section class="">
      <div class="form">
        <div class="title">
          <nuxt-link to="/mobile">
            <font-awesome-icon icon="x" />
          </nuxt-link>
          <h1>Sign In to Ajo</h1>
        </div>
        <form
          v-if="!loading"
          @submit="login()"
          enctype="multipart/form-data"
          method="post"
        >
          <div class="fields">
            <label for="email"><strong>Email Address</strong></label>
            <input
              type="email"
              name="email"
              v-model="email"
              @keyup.enter="login()"
            />

            <label for="email"><strong>Password</strong></label>
            <input
              type="password"
              name="email"
              v-model="password"
              @keyup.enter="login()"
            />
            <span class="forgot">
              Use Uppercase, Lowercase and Numeric characters*
            </span>
            <span
              ><div class="back">
                <nuxt-link to="/auth/forgot-password"
                  >Forgot password?</nuxt-link
                >
              </div></span
            >
          </div>
          <div>
            <div class="btn">
              <button type="button" @click="login()">
                <TheButton title="Sign In" value="yellowBgLg" />
              </button>
            </div>
          </div>
        </form>
        <div v-show="loading" class="loader">
          <TheBlueLoader />
        </div>
      </div>
    </section>
    <div class="reg">
      <div class="back">
        <p>Don't have an account?</p>
        <nuxt-link to="/auth/register"><span>Register</span></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
      userInfo: this.$store.state.userDetails,
      loading: false,
    }
  },
  methods: {
    async login() {
      const data = {
        email: this.email,
        password: this.password,
      }
      this.loading = true
      if (this.email == '' || this.password == '') {
        this.loading = false
        this.$toasted.show('field cannot be empty', {
          position: 'top-center',
          duration: 500,
          type: 'success',
        })
        return
      }
      axios
        .post('https://ajo-app.herokuapp.com/api/auth/signin', data)
        .then((res) => {
          const userData = res.data
          userData.user.token = userData.token
          this.$store.commit('setUserDetails', userData.user)
          this.$toasted.show('You have logged in successfully', {
            position: 'top-center',
            duration: 500,
            type: 'success',
          })
          this.loading = false
          this.$router.push('/home')
        })
        .catch((err) => {
          this.loading = false
          this.$toasted.show('Please enter the correct details and try again', {
            position: 'top-center',
            duration: 2500,
            type: 'danger',
          })
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  padding: 43px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form {
    .title {
      svg {
        color: #041a7a;
        font-size: 32px;
      }
      h1 {
        font-family: 'Brown';
        color: #041a7a;
        margin-top: 32px;
      }
    }
    form {
      .fields {
        display: flex;
        flex-direction: column;
        label {
          font-family: 'Brown';
          font-weight: normal;
          font-size: 12px;
          margin: 16px 0px;
          color: #686868;
          line-height: 16px;
        }
        input {
          height: 50px;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 0.1rem 0.5rem;
        }
        span {
          font-family: 'Brown';
          font-weight: normal;
          font-size: 12px;
          margin-bottom: 10px;
          color: #686868;
          line-height: 16px;
        }
      }
      .methods {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 56px;
        p {
          margin-bottom: 0px;
          padding: 0px 5px;
          font-family: 'Brown';
          font-size: 16px;
        }
      }
      .socials {
        .acc {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          margin-top: 24px;
          svg {
            font-size: 25px;
            background-color: #072ac8;
            color: #fff;
            border-radius: 16px;
            padding: 17px 29px;
          }
        }
      }
    }
  }

  .reg {
    margin-top: 221px;
    bottom: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Brown';
    .btn {
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
    .back {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      a {
        color: #041a7a;
        text-decoration: none;
        font-weight: 200;
      }
    }
  }
  button {
    background: transparent;
    border: 0px;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem;
  }
  .btn {
    margin: 2rem 0;
  }
  .back {
    a {
      text-decoration: none;
      color: #041a7a;
    }
  }
}
</style>
