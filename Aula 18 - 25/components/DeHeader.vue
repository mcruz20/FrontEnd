<template>
    <header class="main-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <nav class="main-nav">
         <ul class="nav-links">
           <nuxt-link to="/" class="nav-link" tag="li"><a>Home</a></nuxt-link>
           <nuxt-link to="/users" class="nav-link" tag="li"><a>All Posts</a></nuxt-link>
           <nuxt-link to="/admin" class="nav-link" tag="li"><a>Admin</a></nuxt-link>
         </ul>
      </nav>
      
    </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TheSideNavToggle from "@/Navigation/TheSideNavToggle";

export default {
  name: "DeHeader",
  components: {
    Logo,
    TheSideNavToggle
  }
}
</script>

<style>
.main-header{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  background:#022d30;
  height:4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.main-nav{
  height: 100%;
  display:none;
}
.nav-links{
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100%;
}
.nav-link{
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding:0.3rem;
}

.nav-link a{
  display:block;
  text-decoration:none;
  color:white;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a{
  color:#06c4d1;
}
.nav-link.nuxt-link-exact-active{
  border-bottom: 3px solid #06c4d1;
}

.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
@media (min-width: 768px){
    .main-nav{
        display: flex;
        width: 100%;
        justify-content: center;
    }
}

</style>
