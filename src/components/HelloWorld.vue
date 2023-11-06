<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="green">I'm Lincoln Gibson.</h3>
    <p> A Full-Stack web developer.
      I love to build things with code.
<!-- I love to build things&ndash;&gt;-->
<!--      with code. I have a passion for learning and sharing my knowledge with others as publicly as-->
<!--      possible. I love the logic and structure of coding and always strive to write elegant and-->
<!--      efficient code whether it be HTML, CSS or JavaScript. When I'm not coding or pushing pixels,-->
<!--      you'll find me in the gym or on the football field.-->
    </p>
    <div class="social">
      <ul>
        <li>
          <a href="https://github.com/lincoln1883" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a href=" https://www.linkedin.com/in/lincoln-gibson/" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/lincolngibson7" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-weight: 500;
  font-size: 2.2rem;
  position: relative;
  top: -10px;
}

p {
  font-size: 1.2rem;
}

strong {
  font-weight: 700;
  font-size: large;
  color: green;

}
.social {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.social ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li{
  display: inline-block;
  padding: 0 0.5rem;
  //border-left: 1px solid var(--color-border);
}
ul li a {
  font-size: 1.5rem;
  transition: color 0.2s ease-in-out;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
