<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Left Image -->
      <div
        class=" text-white d-none d-md-flex flex-column justify-content-end align-items-center col-5 px-0 image"
      >
        <h5 class="text-align-center">No Hazzles</h5>
        <p class="text-center w-75">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sit
          ducimus deleniti nulla laudantium ex,
        </p>
      </div>
      <!-- Sign Up Section -->
      <div class="col-12 col-md-7 bg-white d-flex flex-column ml-auto right">
        <div class="container signup">
          <h3>Create your free account</h3>
          <h6>
            <small
              >Already registered?
              <router-link to="login">Sign in</router-link></small
            >
          </h6>
          <form class="my-5 p-5 bg-white" id="signup-form">
            <div class="form-row">
              <div class="col-12 col-md-6 my-1">
                <label for="" class="small">First Name</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="col-12 col-md-6 my-1">
                <label for="" class="small">Last Name</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
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
                <button
                  v-on:click.prevent="createUser()"
                  class="ml-auto btn btn-sm small px-5 color"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="row mt-auto justify-content-between footer">
          <p class="col-12 col-md-8 small">
            By signing up, you agree to our
            <router-link to="#">Terms</router-link> and
            <router-link to="#">Privacy Policy</router-link>
          </p>
          <p class="col-12 col-md-4 small">
            @2019 Tinylabs. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        role: ["admin", "staff", "user", "employee"][
          Math.floor(Math.random() * 4)
        ],
        phone: `${Math.floor(Math.random() * 456787654677)}`
      }
    };
  },
  methods: {
    createUser() {
      fetch("https://crudcrud.com/api/c4a797a82d754192a88f2864235dbb25/users", {
        method: "POST",
        mode: "no-cors",
        body: this.form,
        credentials: "same-origin",
        "Content-Type": "application/json"
      })
        .then(res => res.json())
        .then(response => {
          //  Show Successfull Toast
          //  Route to Login Page if any exist
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          alert("Sorry An error occured");
        });
    }
  },
  watch: {
    form() {
      //  Auto generate role since there is no field to select that.
      const role = ["admin", "staff", "user", "employee"][
        Math.floor(Math.random() * 4)
      ];
      console.log(role);
      this.form.role = role;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

.src {
  height: 100vh;
}
.image {
  position: fixed;
  z-index: 199999;
  background-image: url("~@/assets/img/bg-person.png");
  height: 100vh;
  object-fit: cover;
  background-size: cover;
}
.right {
  min-height: 100vh;
}
a {
  color: $green;
}
#signup-form {
  box-shadow: 0px 20px 50px #eaeee9;
  border-radius: 5px;
}
.signup {
  padding: 5em 5em 0em 5em;
}
@media (max-width: 767.98px) {
  .signup {
    padding: 0.5em;
  }
}
@media (max-width: 575.98px) {
  h3,
  h6 {
    text-align: center;
  }
  .right {
    background-color: #f6f8f8 !important;
  }
  #signup-form {
    margin: 2em auto !important;
    padding: 1em !important;
  }
  .footer {
    text-align: center;
  }
}
</style>
