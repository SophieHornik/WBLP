const vue_app = Vue.createApp({
  created() {
    // Fetch the images.json file and update the 'images' array
    fetch("images.json")
      .then((response) => response.json())
      .then((json) => {
        this.images = json; // Set the response to the images array
      })
      .catch((error) => console.error("Error loading images:", error));
  },
  data() {
    return {
      images: [] // Declare the images data array
    };
  }
});

vue_app.mount("#vue_app");