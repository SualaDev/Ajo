<template>
  <div>
    <main>
      <div class="img-container">
        <img src="~/assets/images/error.png" alt="" />
      </div>
      <div class="text">
        <h1>Not Found</h1>
        <p>{{ message }}</p>
        <p>Check the spelling and try again</p>
      </div>
      <nuxt-link to="/home" class="btn">
        <TheButton title="Back to homepage" value="yellowBgLg" />
      </nuxt-link>
    </main>
  </div>
</template>
<script>
export default {
  props: {
    message: String,
  },
}
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-container {
    padding: 1rem 0rem;
    margin-top: 200px;
  }
  .text {
    color: #041a7a;
    text-align: center;
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 14px;
    }
  }
  .btn {
    margin-top: 72px;
    margin-bottom: 130px;
  }
  a {
    text-decoration: none;
  }
}
</style>
