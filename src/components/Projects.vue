<template>
  <div class="projects section">
    <div class="container">
      <h2>My Projects</h2>
      <hr class="horizontal-line" />
      <div class="project-grid">
        <div v-for="(project, index) in projects" :key="index" class="project">
          <img :src="project.image" :alt="project.name" class="project-image" />
          <h3 class="project-name">{{ project.name }}</h3>
          <p class="project-description">{{ generateDescription(project.image) }}</p>
          <button class="view-more-button" @click="showModal(project)">View More</button>
        </div>
      </div>
      <!-- Modal -->
      <div v-if="showImageModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="hideModal">&times;</span>
          <img v-if="modalProject" :src="modalProject.image" :alt="modalProject.name" class="modal-image" />
          <h3 class="modal-name">{{ modalProject ? modalProject.name : '' }}</h3>
          <p class="modal-description">{{ generateDescription(modalProject.image) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import qrimage from '@/assets/images/qr.png';
import calculator from '@/assets/images/calculator.png';
import programming from '@/assets/images/yh-min.jpg';
import ecommerce from  '@/assets/images/ecommerce.jpg';
import portfolios from  '@/assets/images/project1.jpg';
import todo from  '@/assets/images/todo.jpg';

export default {
  name: 'Project',
  setup() {
    const projects = ref([
      {
        name: 'QR Generator',
        image: qrimage,
      },
      {
        name: 'Calculator',
        image: calculator,
      },
      {
        name: 'Ideas Training',
        image: programming,
      },
      {
        name: 'Ecommerce Web',
        image: ecommerce,
      },
      {
        name: 'Portfolios',
        image: portfolios,
      },
      {
        name: 'Todo List',
        image: todo,
      },
      // Add more project objects with images as needed
    ]);

    const modalProject = ref(null);
    const showImageModal = ref(false);

    const showModal = (project) => {
      modalProject.value = project;
      showImageModal.value = true;
    };

    const hideModal = () => {
      modalProject.value = null;
      showImageModal.value = false;
    };

    const generateDescription = (image) => {
      // Extract the filename from the image path
      const filename = image.split('/').pop();
      
      // Remove file extension
      const nameWithoutExtension = filename.split('.').shift();
      
      // Capitalize the first letter and replace hyphens with spaces
      const formattedName = nameWithoutExtension.charAt(0).toUpperCase() + nameWithoutExtension.slice(1).replace('-', ' ');
      
      return `Description of ${formattedName}`;
    };

    return {
      projects,
      modalProject,
      showModal,
      hideModal,
      showImageModal,
      generateDescription,
    };
  },
};
</script>

<style scoped>
.projects {
  background-color: #f7f9fc;
  max-width: 1690px;
  padding: 10vh 0;
  color: #333;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.horizontal-line {
  width: 400px;
  height: 7px;
  margin: 0 auto;
  border-top: 1px solid #000000;
  margin-bottom: 30px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 40px;
  margin-top: 20px;
}

.project {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.project:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.project-image {
  max-width: 100%;
  height: 55%;
  margin-bottom: 10px;
}

.project-name {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.project-description {
  font-size: 1rem;
  color: #777777; /* Light gray color for descriptions */
  margin-bottom: 10px;
}

.view-more-button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.view-more-button:hover {
  background-color: #0056b3;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  max-width: 70%;
  max-height: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  width: 100%;
  height: 100%;
}

.close {
  position: absolute;
  top: 0;
  right: 10px;
  padding: 10px;
  cursor: pointer;
  color: #000000;
  font-size: 50px;
}

.modal-image {
  width: 100%;
  height: 90%;
  margin-bottom: 10px;
  object-fit: contain;
}
</style>
