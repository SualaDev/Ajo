<template lang="">
  <main>
    <div>
      <div class="title">
        <nuxt-link to="/auth/login">
          <font-awesome-icon icon="x" />
        </nuxt-link>
        <h1>Reset Password</h1>
      </div>
      <div class="form">
        <form
          v-if="!loading"
          @submit="login()"
          enctype="multipart/form-data"
          method="post"
        >
          <div class="fields">
            <label for="email"><strong>Email Address</strong></label>
            <input type="email" name="email" v-model="email" />
          </div>
          <div>
            <div class="btn">
              <button type="button" @click="forgotPassword()">
                <TheButton title="Reset Password" value="yellowBgLg" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-show="loading" class="loader">
        <TheBlueLoader />
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      loading: false,
    }
  },
  methods: {
    async forgotPassword() {
      const data = {
        email: this.email,
      }
      this.loading = true
      if (this.email == '') {
        this.loading = false
        this.$toasted.show('email cannot be empty', {
          position: 'top-center',
          duration: 2500,
          type: 'danger',
        })
        return
      }
      axios
        .post('https://ajo-app.herokuapp.com/api/auth/forgot_password', data)
        .then((res) => {
          this.$toasted.show(res.data.message, {
            position: 'top-right',
            duration: 500,
            type: 'success',
          })
          this.loading = false
          this.$router.push('/home')
        })
        .catch((err) => {
          this.$toasted.show('Please enter the right details and try again', {
            position: 'top-left',
            duration: 2000,
            type: 'danger',
          })
          this.loading = false
        })
    },
  },
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 428px) {
  main {
    display: flex;
    padding: 1.5rem;
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
    .form {
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
      margin: 4rem 5rem;
    }
    .back {
      a {
        text-decoration: none;
        color: #041a7a;
      }
    }
  }
}
</style>
