<template>
 <div id="nav" class="container-fluid">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand>
            <router-link to="/">
              <img src="../assets/logo.png" id="logo-nav-bar" alt />
            </router-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <router-link to="/">Accueil</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/about">Notre sélection</router-link>
              </b-nav-item>
              <router-view />
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Rechercher un film ..."></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 "  type="submit">Rechercher</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
      <router-view/>-->
    </div>
</template>

<script>

    export default {
  name: "ListTopFilms"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo-nav-bar {
  height: 50px;
}

#nav a {
  color: white;
}
.bg-dark{
  background: #0F2027!important;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)!important;  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #2C5364, #203A43, #0F2027)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#nav{
    position: fixed;
    padding-left: 0px!important;
    padding-right: 0px!important;
    z-index: 100;
}
</style>
