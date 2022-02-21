<template>
  <span class="login100-form-title p-b-41">
    Ingresar
  </span>
  <form
    class="login100-form validate-form p-b-33 p-t-5"
    @submit.prevent="onSubmit"
    ref="form"
  >
    <div class="wrap-input100 validate-input" data-validate="Enter username">
      <input
        v-model="userForm.email"
        class="input100"
        type="email"
        placeholder="Correo"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input
        v-model="userForm.password"
        class="input100"
        type="password"
        placeholder="Contraseña"
        required
      />

      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <VueRecaptcha
        sitekey="6LeAJJAeAAAAAEJ7Tj1Vk1mHwEG93jTqe0rw3Yuv"
        @verify="verifyMethod"
        @expired="expiredMethod"
      />

      <button class="login100-form-btn">
        Login
      </button>
    </div>

    <div></div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'register' }">¿No tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { VueRecaptcha } from "vue-recaptcha";

import Swal from "sweetalert2";

import useAuth from "../composables/useAuth";

export default {
  components: {
    VueRecaptcha,
  },
  setup() {
    const router = useRouter();
    const { loginUser } = useAuth();
    const isCaptchaValidated = ref(false);
    const userForm = ref({
      email: "edson@gmail.com",
      password: "123456",
    });

    return {
      userForm,
      isCaptchaValidated,

      //Methods
      onSubmit: async () => {
        if (isCaptchaValidated.value) {
          const { ok, message } = await loginUser(userForm.value);
          console.log(ok, message);

          if (!ok) Swal.fire("Error", message, "error");
          else router.push({ name: "no-entry" });
        } else {
          Swal.fire(
            "Error",
            "Debes realizar la autentización captcha antes de continuar",
            "error"
          );
        }
      },
      verifyMethod(data) {
        console.log(data);
        isCaptchaValidated.value = true;
      },
      expiredMethod() {
        Swal.fire(
          "Error",
          "La verificación ha caducado, vuelve a marcar la casilla de verificación",
          "error"
        );
      },
    };
  },
};
</script>

<style></style>
