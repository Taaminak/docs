<template>
  <div class="dlinks">
    <div class="link">
      <h2>Backend & API Docs</h2>
      <p>Developer Api Documentatons - <i>Require a private access</i></p>
      <a
        href="https://inovola-stage.com/taminak_backend_development/public/docs/1.0/front_user"
        target="_blank"
        >Get Started</a
      >
    </div>

    <div class="link">
      <h2>FrontEnd Docs</h2>
      <p>
        Developer FrontEnd Code Documentatons - <i>Require a private access</i>
      </p>

      <a
        href="https://github.com/khaled-abdelhamid-inovola/taminkom-frontend/tree/feature/docs"
        target="_blank"
        >Get Started</a
      >
    </div>

    <div class="link">
      <h2>Swagger Docs</h2>
      <p>
        Developer Swagger Apis Documentatons - <i>Require a private access</i>
      </p>
      <a
        href="https://inovola-stage.com/taminak_backend_development/public/api/swagger/docs"
        target="_blank"
        >Get Started</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello this is <demo-component>",
    };
  },
};
</script>

<style>
.dlinks {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
  margin: 50px 0;
}

.dlinks .link {
  box-sizing: border-box;
  width: calc((100% - 40px) / 3);
  border: 1px solid #e2dddd;
  border-radius: 6px;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.dlinks .link h2 {
  padding: 0;
  margin: 0;
  padding-bottom: 15px;
}

.dlinks .link p {
  color: gray;
  flex-grow: 1;
}

.dlinks .link a {
  display: inline-block;
  border: 1px solid #92c01f;
  padding: 10px 15px;
  line-height: 1;
  vertical-align: middle;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
}
.dlinks .link a:hover {
  text-decoration: none;
  background-color: #92c01f;
  color: #fff;
}
.dlinks .link a:active {
  background-color: #6e9116;
}

@media screen and (max-width: 740px) {
  .dlinks .link {
    width: 100%;
  }
}
</style>
