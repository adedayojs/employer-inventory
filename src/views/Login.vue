<template>
  <div class="container mx-4 pt-5 col">
    <form class="my-5 p-5 bg-white m-auto col-6" id="signup-form">
      <div class="form-row">
        <div class="col-12 my-1">
          <label for="" class="small">Email</label>
          <input
            v-model="form.email"
            type="text"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div class="col-12 my-1">
          <label for="" class="small">Password</label>
          <input
            v-model="form.password"
            type="text"
            class="form-control"
            placeholder="Password"
          />
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

<style></style>
