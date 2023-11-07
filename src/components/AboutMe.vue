<template>
<div class="about">
  <h1>About</h1>
  <p>
    I am a <strong>Software Engineer</strong> with a passion for <strong>Web Development</strong> and <strong>Machine Learning</strong>.
  </p>
</div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.6rem;
  position: relative;
  top: -10px;
}

p {
  font-size: 1.2rem;
  text-align: start;
}

strong {
  font-weight: 700;
  font-size: large;
  color: green;
}
@media (min-width: 1024px) {
  p {
    text-align: start;
  }
}

@media (max-width: 1023px) {
  .about {
    margin-top: 50px;
  }
}
</style>
