<script>
// Import the image using ES6 import
import logoImage from '@/assets/images/logo4.png'; // Adjust the path to your image

export default {
  name: 'Header',
  data() {
    return {
      // Bind the imported image to a data property
      logo: logoImage,
    };
  },
  methods: {
    closeMenu() {
      const navCollapse = document.querySelector('.navbar-collapse');
      if (navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
      }
    },
  },
};
</script>

<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <div class="navbar-container">
          <!-- Update menu links to use router-link -->
          <router-link to="/" class="navbar-brand">
            <img :src="logo" alt="Logo" class="logo" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto" @click="closeMenu">
              <!-- Update menu links to use router-link -->
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/projects" class="nav-link">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  /* Create a gradient background */
  background: linear-gradient(90deg, #ff6b6b, #45aaf2); /* Adjust colors as needed */
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
  max-width: 1690px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 100%;
}

.logo {
  width: 160px; /* Adjust logo width */
  height: 80px; /* Adjust logo height */
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center; /* Vertically align logo and text */
  text-decoration: none;
}

.navbar-toggler-icon {
  background-color: #fff;
  margin-left: 10px;
}

.navbar-collapse {
  display: flex;
  justify-content: flex-end;
}

.navbar-nav {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 40px; /* Adjust horizontal margin for the items */
}

.nav-link {
  font-size: 18px;
  font-family: "Poppins";
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  padding: 5px 0; /* Add vertical padding to the items */
  transition: color 0.3s, background-color 0.3s; /* Smooth transition */
}

.nav-link:hover {
  color: #f8f9fa;
  background-color: #333;
  border-radius: 5px;
}

/* Responsive Styles */
@media (max-width: 1467px) {
  .navbar-collapse {
    display: none;
  }

  .navbar-toggler-icon {
    background-color: #fff;
  }

  .navbar-collapse.show {
    display: block;
  }
}

@media (max-width: 467px) {
  .navbar-collapse {
    display: none;
  }

  .navbar-toggler-icon {
    background-color: #fff;
  }

  .navbar-collapse.show {
    display: block;
  }
}
</style>
