<template>
  <div class="container mx-4 pt-5 col">
    <form class="my-5 p-5 bg-white m-auto col-6" id="signup-form">
      <div class="form-row">
        <div class="col-12 input-div my-1">
          <label for="" class="small">Email</label>
          <div class="d-flex">
            <input
              v-model="form.email"
              type="text"
              class="form-control"
              placeholder="Email"
            />
            <img src="@/assets/img/email.svg" alt="" class="" />
          </div>
        </div>
        <div class="col-12 input-div my-1">
          <label for="" class="small">Password</label>
          <div class="d-flex">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-control"
              placeholder="Password"
            />
            <img
              src="@/assets/img/eye.svg"
              alt=""
              v-on:click="tooglePasswordView()"
              class=""
            />
          </div>
        </div>

        <div class="col-md-4 col-12 ml-auto mt-4">
          <button class="ml-auto btn btn-sm small px-5 color">
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    };
  }
};
</script>

<style>
input {
  border: none !important;
  padding: 0em !important;
}
.input-div {
  border-bottom: black solid 1px;
}
input:focus {
  box-shadow: none !important;
  outline: none !important;
}
</style>
