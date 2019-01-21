<template>
<div>
    <header class="header">
        <!-- Main Navbar-->
        <nav class="navbar navbar-expand-lg">
        <div class="container">
            <!-- Navbar Brand -->
            <div class="navbar-header d-flex align-items-center justify-content-between">
            <!-- Navbar Brand -->
            <router-link to="/" class="navbar-brand">
                <img src="../assets/logo.png">
                Vue Movies 
            </router-link>
            </div>
            <div id="navbarcollapse" class="collapse navbar-collapse">
                    <Autocomplete />
            </div>
        </div>
        </nav>
    </header>
    </div>
</template>

<script>


import Autocomplete from "@/components/Autocomplete";
export default {
  components: {
    Autocomplete
  }
}
</script>

<style scoped>

</style>