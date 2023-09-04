<template>
  <div class="home section">
    <div class="background-image"></div>
    <div class="content">
      <h1 class="headline">I'M Ham<span class="your-name">zat</span> Muj<span class="your-name-two">eeb</span></h1>
      <p class="description">Hi there! I'm passionate about creating amazing web experiences.</p>
      <p class="description">Explore my projects and get to know more about me.</p>
      <button class="btn btn-primary" @click="scrollToAbout">Learn More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    scrollToAbout() {
      this.$nextTick(() => {
        const aboutElement = this.$refs.about;
        if (aboutElement) {
          window.scrollTo({
            top: aboutElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.home {
  position: relative;
  max-width: 1690px;
  color: #eee8e8;
  text-align: center;
  padding-bottom: 100px;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/bg3.png"); /* Replace with your image */
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
}

.content {
  position: relative;
  padding: 20vh 0;
  z-index: 1;
}

.headline {
  font-size: 4rem;
  margin-bottom: 20px;
  line-height: 1.2; /* Adjust the line height as needed */
  animation: fadeInUp 1s ease-in-out;
  text-transform: uppercase;
}

.your-name {
  color: hsl(71, 100%, 50%); /* Customize the color of your name */
}

.your-name-two {
  color: #ef3535;
}

.description {
  font-size: 1.145rem;
  margin-bottom: 20px;
  opacity: 1; /* Initial opacity */
  transform: translateY(20px); /* Initial position */
  animation: fadeInUp 1s ease-in-out, slideIn 1s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 0.9s;
  line-height: 1; /* Reduce line height for p */
}

/* Define a custom animation for the button */
@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.home button {
  font-size: 1.2rem;
  margin: 30px;
  padding: 15px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  animation: grow 2s infinite; /* Apply the custom animation */
}

.home button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Media Queries */
@media (max-width: 767px) {
  .headline {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .home button {
    font-size: 1rem;
  }
}
</style>
