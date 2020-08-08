<template>
  <div class="container mx-4 pt-5 col">
    <div class="row justify-content-between m-4">
      <div class="col-md-8">
        <h6>Emloyees</h6>
      </div>
      <div class="col-md-4">
        <div class="add-new">
          <button class="ml-auto btn btn-small px-5 color">Add New</button>
        </div>
      </div>
    </div>

    <div class="row justify-content-between m-4 py-4 px-2 bg-white rounded">
      <div class="col-md-7">
        <h5>Josh Bakery Ventures</h5>
      </div>
      <div class="col-md-5">
        <div class="add-new">
          <span>62, Bode Thomas, Surulere, Lagos</span>
        </div>
      </div>
    </div>

    <div class="row  m-4">
      <div class="col col-sm-12 m-1" style="max-width:fit-content">
        <select class="p-1 role text-secondary border-3 border-secondary small">
          <option value=""> Change Role</option>
          <option>Admin</option>
          <option>Staff</option>
        </select>
        <button class="btn btn-sm color ml-2">Change</button>
      </div>

      <div class="col-sm-6 col-md-6 m-1">
        <div class="input-group small">
          <input
            type="text"
            class="form-control small"
            placeholder="Enter staff name here"
          />
          <div class="input-group-append">
            <button
              class="btn btn-sm btn-outline-secondary border-left-0 bg-white small"
              type="button"
            >
              <i class="fa fa-fw fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="add-new m-1 ml-auto">
        <span class="img-thumbnail">1</span> of 2 <span> </span>
        <span> </span>
      </div>
    </div>

    <div class="row m-4">
      <div class="col-12">
        <div class="row mb-2">
          <h6 class="col-md-1 col-12">
            <i class="fa fa-square" aria-hidden="true"></i>
          </h6>
          <h6 class="col-md-2 col-12">FIRST NAME</h6>
          <h6 class="col-md-2 col-12">LAST NAME</h6>
          <h6 class="col-md-2 col-12">EMAIL</h6>
          <h6 class="col-md-2 col-12">PHONE</h6>
          <h6 class="col-md-2 col-12">ROLE</h6>
          <h6 class="col-md-1 col-12"></h6>
        </div>
        <div
          v-for="user of users"
          :key="user._id"
          class="row py-2 bg-white mb-2"
        >
          <div class="col-md-1 col-12">
            <i class="fa fa-square" aria-hidden="true"></i>
          </div>
          <div class="col-md-2 col-12">{{ user.firstName }}</div>
          <div class="col-md-2 col-12">{{ user.lastName }}</div>
          <div class="col-md-2 col-12">{{ user.email }}</div>
          <div class="col-md-2 col-12">{{ user.phone }}</div>
          <div class="col-md-2 col-12">{{ user.role }}</div>
          <div
            v-on:click="deleteUser(user._id)"
            class="delete-user col-md-1 col-12"
          >
            <i class="fa fa-fw fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  components: {},
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchAllUsers();
  },
  methods: {
    fetchAllUsers() {
      fetch("https://crudcrud.com/api/c4a797a82d754192a88f2864235dbb25/users")
        .then(res => res.json())
        .then(response => {
          this.users = response;
        })
        .catch(err => {
          console.log(err);
          this.$toast.error("Unable to fetch all users");
        });
    },
    deleteUser(id) {
      fetch(
        `https://crudcrud.com/api/c4a797a82d754192a88f2864235dbb25/users/${id}`,
        { method: "DELETE" }
      )
        .then(res => {
          console.log(res);
        })
        .then(() => {
          this.$toast.success("User Successfully Removed");
          this.fetchAllUsers();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

.color {
  color: white !important;
  background-color: $green !important;
}
.add-new {
  margin-left: auto;
  width: fit-content;
}
.role {
  //
  color: inherit;
}
.form-control.small {
  height: 2em;
  line-height: 1.5em;
}
.delete-user:hover {
  cursor: pointer;
  background-color: #f6f8f8;
}
</style>
