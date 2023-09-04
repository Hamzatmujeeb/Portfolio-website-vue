<template>
  <div class="contact section">
    <h2>Contact Me</h2>
    <form @submit.prevent="sendContactMessage" class="text-center form-animate">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          v-model="formData.name"
          placeholder="Your Name"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          v-model="formData.email"
          placeholder="Your Email"
          required
        />
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          rows="4"
          v-model="formData.message"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary"> <i class="fas fa-paper-plane">
      </i> Send Message <!-- Paper Plane icon --></button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAn5m48RWHA5eNLMY2y2QTfu-3SVFqEN7w",
  authDomain: "myportfolio-8dad7.firebaseapp.com",
  projectId: "myportfolio-8dad7",
  storageBucket: "myportfolio-8dad7.appspot.com",
  messagingSenderId: "116807906141",
  appId: "1:116807906141:web:7f7a4c3f236763337f6eb4",
  measurementId: "G-QJNGWJ4ZKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const convertToLowercase = () => {
  formData.email = formData.email.toLowerCase();
};
const sendContactMessage = async () => {
  try {
    // Create a new document in the "contacts" collection
    await addDoc(collection(db, 'users-Details'), {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
      timestamp: new Date()
    });

    prompt("Are you sure your details are correct ? if yes type , if no type!");
    // Display a success message using alert
    alert(`Dear ${formData.value.name}, your message has been sent successfully!`);


    // Clear the form after submission
    formData.value = {
      name: '',
      email: '',
      message: ''
    };
  } catch (error) {
    console.error('Error sending message:', error);
    alert('An error occurred while sending your message. Please try again later.');
  }
};
</script>

<style scoped>
.contact {
  background-color:#3d79f0;
  color: #fff;
  padding: 60px 0;
  text-align: center;
  max-width: 1690px;
}

.contact h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.form-animate {
  max-width: 500px;
  margin: 0 auto;
  opacity: 0; /* Start with 0 opacity */
  transform: translateY(30px); /* Start with a slight translation */
  animation: slide-up-fade 0.9s ease-in-out forwards; /* Animation forwards to keep the final state */
}

.contact input,
.contact textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #000;
  opacity: 0; /* Start with 0 opacity */
  transform: translateY(20px); /* Start with a slight translation */
  animation: slide-up-fade 0.5s ease-in-out forwards; /* Animation forwards to keep the final state */
  transition: background-color 0.3s, transform 0.3s; /* Add transitions */
}

.contact input::placeholder,
.contact textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.contact input:hover,
.contact textarea:hover {
  background-color: #fffffff8; /* Change background color on hover */
  transform: translateY(10px); /* Animate on hover */
}

.contact button {
  padding: 10px 20px;
  background-color: #ff6c6c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  opacity: 0; /* Start with 0 opacity */
  transform: translateY(10px); /* Start with a slight translation */
  animation: slide-up-fade 0.5s ease-in-out forwards; /* Animation forwards to keep the final state */
}

.contact button:hover {
  background-color: #ff3f3f;
}

/* Animation keyframes */
@keyframes slide-up-fade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>