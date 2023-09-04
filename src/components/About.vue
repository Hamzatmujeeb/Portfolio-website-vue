<template>
  <div class="about section">
    <h2>About Me</h2>
    <p>
      I'm Hamzat Mujeeb, a frontend developer with a strong passion for user-friendly
      interfaces and web technologies.
    </p>
    <p>
      I studied Business Administration at Federal Polytechnic Offa, Kwara State,
      and I also pursued software development at Altschool of Africa.
    </p>
    <p>
      With a background in both business and software development, I
      enjoy turning complex problems into simple, beautiful, and intuitive
      solutions.
    </p>
    <p>
      I am constantly learning and expanding my skill set. I'm also an advocate
      for clean, maintainable code and have experience collaborating in agile
      teams.
    </p>
    <p>
      When I'm not coding, you'll find me enjoying outdoor activities, exploring
      new places, and experimenting with new recipes in the kitchen.
    </p>
    <!-- Add a link to the button -->
    <a :href="emailAddress" class="btn btn-primary" target="_blank">Contact Me</a>
  </div>
</template>

<script setup>
const emailAddress = "mailto:hamzatmujeeb586@gmail.com";
</script>

<style scoped>
.about {
  background-color: #f4f6f9;
  max-width: 1690px;
  padding: 80px 0;
  text-align: center;
  color: #333;
}

.about h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #444;
}

.about p {
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.2;
}

.about a.btn-primary {
  padding: 10px 20px;
  margin-top: 25px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none; /* Remove default link underline */
  cursor: pointer;
  transition: background-color 0.3s;
}

.about a.btn-primary:hover {
  background-color: #0056b3;
}
</style>
