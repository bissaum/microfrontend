<template>
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-auto">
        <img height="32" src="../assets/angular.svg" />
      </div>
      <div class="col-auto">
        <input
          type="text"
          id="inputAngular"
          class="form-control"
          aria-describedby="hintAngular"
        />
      </div>
      <div class="col-auto">
        <span id="hintAngular" class="form-text"> Angular </span>
      </div>
    </div>

    <div class="row align-items-center justify-content-center">
      <div class="col-auto">
        <img height="32" src="../assets/jquery.svg" />
      </div>
      <div class="col-auto">
        <input
          type="text"
          id="inputJQuery"
          class="form-control"
          aria-describedby="hintJQuery"
        />
      </div>
      <div class="col-auto">
        <span id="hintJQuery" class="form-text"> jQuery </span>
      </div>
    </div>

    <div class="row align-items-center justify-content-center">
      <div class="col-auto">
        <img height="32" src="../assets/js.svg" />
      </div>
      <div class="col-auto">
        <input
          type="text"
          id="inputJS"
          class="form-control"
          aria-describedby="hintJS"
        />
      </div>
      <div class="col-auto">
        <span id="hintJS" class="form-text"> JS </span>
      </div>
    </div>

    <div class="row align-items-center justify-content-center">
      <div class="col-auto">
        <img height="32" src="../assets/nextjs.svg" />
      </div>
      <div class="col-auto">
        <input
          type="text"
          id="inputNextJS"
          class="form-control"
          aria-describedby="hintNextJS"
        />
      </div>
      <div class="col-auto">
        <span id="hintNextJS" class="form-text"> NextJS </span>
      </div>
    </div>

    <div class="row align-items-center justify-content-center">
      <div class="col-auto">
        <img height="32" src="../assets/react.svg" />
      </div>
      <div class="col-auto">
        <input
          type="text"
          id="inputReact"
          class="form-control"
          aria-describedby="hintReact"
        />
      </div>
      <div class="col-auto">
        <span id="hintReact" class="form-text"> React </span>
      </div>
    </div>

    <div class="row align-items-center justify-content-center">
      <div class="col-auto">
        <img height="32" src="../assets/vue.svg" />
      </div>
      <div class="col-auto">
        <input
          type="text"
          id="inputVue"
          class="form-control"
          aria-describedby="hintVue"
          @keyup="value = $event.target.value"
        />
      </div>
      <div class="col-auto">
        <span id="hintVue" class="form-text"> {{ value }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "Vue"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}
.row {
  padding: 10px;
}
</style>
