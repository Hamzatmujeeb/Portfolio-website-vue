<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>Contact Me</h4>
          <p>Email: hamzatmujeeb586@gmail.com</p>
          <p>Phone: (234) 8146 144 880</p>
          <p>Address: 123 Main St, City</p>
        </div>
        <div class="col-md-4">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="@/components/Home.vue">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Follow Me</h4>
          <ul class="social-icons">
            <li><a href="https://www.facebook.com/Hamzat Mujeeb" target="_blank" style="color: #1877F2;"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/HamzatMujeeb" target="_blank" style="color: #1DA1F2;"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/hamzat-mujeeb-042b29270" target="_blank" style="color: #0A66C2;"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://wa.me/08146144880" target="_blank" style="color: #25D366;"><i class="fab fa-whatsapp"></i></a></li>
            <li><a href="https://github.com/Hamzatmujeeb" target="_blank" style="color: #333;"><i class="fab fa-github"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <p>&copy; 2023 Hamzat Mujeeb. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  background-color: #ffff;
  color: #000;
  padding: 50px 0;
}

.footer h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer p {
  font-size: 19px;
  padding-bottom: 10px;
  margin-top: 10px;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 5px;
}

.social-icons {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.social-icons li {
  margin: 2px;
  font-size: 24px;
}

.social-icons a {
  color: #000;
  text-decoration: none;
  text-decoration-line: none;
  margin:0px 20px 0px 20px;
}

a {
  text-decoration: none;
  color: #000;
  font-weight: 400;
}

/* Additional styles for your footer */
</style>
