<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <h2>Get in contact with us!</h2>
        <p>Bern Cortes</p>
        <p>801-555-5555</p>
        <address>1111 Street Drive Salt Lake City, 84116</address>
        <v-btn
          ><a
            href="tel:801-555-5555"
            style="text-decoration: none; color: black"
            >Call Today!</a
          ></v-btn
        >
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <form
          action="https://formsubmit.co/329c6ceb4b3d8edb24d8a2c1d628d64f"
          method="POST"
        >
          <v-text-field
            v-model="name"
            name="name"
            :error-messages="nameErrors"
            :counter="20"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            name="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            label="Item"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
          <!--<v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>-->
          <v-textarea
            name="message"
            v-model="message"
            label="Message"
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
          ></v-textarea>
          <v-btn class="mr-4" type="submit" @click="submit()"> submit </v-btn>
          <v-btn @click="clear"> clear </v-btn>
          <v-alert type="success" v-if="show">Successfully sent, thank you</v-alert>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    // select: { required },
    // checkbox: {
    //   checked(val) {
    //     return val;
    //   },
    //},
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    message: "",
    items: ["Epoxy Information", "Garage Floors", "Decks"],
    checkbox: false,
    show: false,
  }),

  computed: {
    // checkboxErrors() {
    //   const errors = [];
    //   if (!this.$v.checkbox.$dirty) return errors;
    //   !this.$v.checkbox.checked && errors.push("You must agree to continue!");
    //   return errors;
    // },
    // selectErrors() {
    //   const errors = [];
    //   if (!this.$v.select.$dirty) return errors;
    //   !this.$v.select.required && errors.push("Item is required");
    //   return errors;
    // },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      this.show = true;
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.message = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
