<template>
    <div class="back">
        <div class="text">
            <h1>Hi, I'm Shantanu</h1>
        <p> As a robotics graduate student, you have a strong foundation in engineering, computer science,
             or a related field, and are eager to delve deeper into the exciting and rapidly-evolving field of robotics.
              Your studies may involve a combination of theoretical research and hands-on projects, and you have the opportunity to work with
               a diverse range of technologies and applications. Whether you are interested in developing autonomous systems, exploring human-robot interaction,
                applying machine learning techniques, or designing control systems, your work has the potential to make a significant impact on a variety of industries
                 and fields. As you continue your studies, 
            you will have the opportunity to collaborate with other researchers and professionals, and to make your mark on this rapidly-growing and dynamic field.</p>
            <a href="/src/store/resume.pdf" download>
                <button class="download-btn">Download Resume</button>
                </a>
        </div>
        
        
    </div>
</template>
<script>
export default {
  methods: {
    downloadResume() {
      const link = this.$refs.downloadLink
      link.href = 'resume.pdf'
      link.download = 'resume.pdf'
    //   link.click()
    }
  }
}
</script>
<style scoped>
.back{
    background-image: url(../assets/deepika.jpg);
    height:700px;
    color: azure;
    border-radius: 10px;
    padding: 15px 15px;
}
.text{
    position: relative;
    top:300px;
    left: 100px;
    float: left;
    width: 45%;
    height: auto;
}
.download-btn {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.download-btn:hover {
  background-color: #444;
}


</style>