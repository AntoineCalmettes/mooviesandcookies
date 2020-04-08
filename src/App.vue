
<template>
  <div id="app">
    <div id="nav">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
         <b-navbar-brand><router-link to="/"> <img src="./assets/logo.png"  id="logo-nav-bar" alt=""> </router-link></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
               <b-navbar-nav>
               <b-nav-item> <router-link to="/">Accueil</router-link> </b-nav-item>
               <b-nav-item >  <router-link to="/about">Notre sélection</router-link></b-nav-item>
               <router-view/>
           </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Rechercher un film ..."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
  <ListTopFilms></ListTopFilms>
  </div>
  
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#logo-nav-bar {
 height: 50px;
}

#nav a {
 color: white;
}

#nav a.router-link-exact-active {

}

.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
<script>
const ListTopFilms = () => import("@/components/ListTopFilms.vue");
// import ListTopFilms from "@/components/ListTopFilms.vue";
export default {
  components: {
    ListTopFilms,
  },
  // rest of the component
}
</script>