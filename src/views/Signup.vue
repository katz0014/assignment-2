<template>
  <div class="signUp">
    <div>
      <h2>Sign Up</h2>
      <el-form class="form">
        <el-form-item prop="name" label="NAME">
          <el-input v-model="forms.name" placeholder="Your Name"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="EMAIL">
          <el-input
            v-model="forms.email"
            placeholder="example@gmail.com"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="PASSWORD">
          <el-input type="password" v-model="forms.password"></el-input>
        </el-form-item>
        <el-button @click="submitForm" class="button" type="submit"
          >Submit</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      forms: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["setInput"]),
    submitForm() {
      this.setInput(this.forms);
    }
  }
};
</script>
<style lang="scss">
.signUp {
  width: 50%;
  text-align: left;
  padding-top: 100px;
  padding-bottom: 50px;
  margin: auto;
}

.button {
  position: absolute;
  margin: 0 auto;
}

.form {
  border: 2px solid purple;
  border-radius: 10px;
  padding: 30px;
  padding-bottom: 50px;
}
</style>
