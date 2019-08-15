<template>
  <div class="signUp">
    <div>
      <h2>Sign Up</h2>
      <el-form class="form" @submit.prevent="submitForm">
        <el-form-item prop="name" label="NAME">
          <el-input v-model="ruleForm.name" placeholder="Your Name"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="EMAIL">
          <el-input
            v-model="ruleForm.email"
            placeholder="example@gmail.com"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="PASSWORD">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button class="button" type="submit">Submit</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["setInput"]),
    submitForm() {
      console.log(this.ruleForm);
      this.setInput(this.ruleForm);
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
