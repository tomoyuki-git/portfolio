<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <h1>
          <router-link to="/">My Portfolio</router-link> 
        </h1>
      </header>
    </div>
    <div id="gnav" class="header-nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
          <router-link to="/skill">Skill</router-link>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
    <footer>
      <div class="copyright-box">©️ 2019 My Portfolio</div>
    </footer>
  </div>
</template>