<template>
  <nav class="navbar">
      <div class="nav-brand">
          <img src="assets/images/nav-brand.png" alt="navbar-brand">
      </div>
      <div class="nav-menu">
          <ul>
              <li><router-link to="/" style="text-decoration:none;">Home</router-link></li>
              <li><router-link to="/blog" style="text-decoration:none;">Blog</router-link></li>
              <li><router-link to="/portofolio" style="text-decoration:none;">Portofolio</router-link></li>
              <li><router-link to="/contact" style="text-decoration:none;">Contact</router-link></li>
          </ul>
      </div>
      <div class="nav-icon">
          <a href="https://www.linkedin.com/in/arnold-therigan-342a81160" target="_blank"><i class="fab fa-linkedin"></i></a>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
