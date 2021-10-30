<template>
  <div class="form">
    <div class="row justify-content-center">
        <div class="col-6 justify-content-center border">
            <div class="col mx-5 no-gutters border">
                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                <b-form-input v-model="text" placeholder="Enter your Surname"></b-form-input>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <b-form-input v-model="text" placeholder="Enter your email"></b-form-input>
                <b-form-input v-model="text" placeholder="Enter your Phone Number"></b-form-input>
                <b-form-input v-model="text" placeholder="Enter your Age"></b-form-input>
                <b-form-input v-model="text" placeholder="Enter your TC"></b-form-input>
                <b-form-input v-model="text" placeholder="Enter your HES Code"></b-form-input>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Form",
  props: {},
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [
            
        ],
      },
      options: [
        { value: "Men", text: 'Men' },
        { value: "Women", text: 'Women' },
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
