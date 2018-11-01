<template>
  <div class="app">
        <header class="main-header size-boxing-header">
          <img src="src/assets/img/logo.png" />
          <div class="main-menu"
            @click="menuClick"
            :class="{active: isActive}">
              <div class="menu-line" ></div>
          </div>
        </header>
  	    <nav :class="{active: isActive}" class="menu-list">
  			  <ul><li v-for="m in menu"><a :href="m.link">{{m.text}}</a></li></ul>
  	    </nav>
        <div class="container">
          <div class="headline-image">
          </div>
          <router-view/>
        </div>
        <footer class="main-footer">
            <p>Copyright © Mijin Corp. All rights reserved.</p>
        </footer>
      </div>
</template>

<script>
export default {
    data: function(){
      return {
  	    menu: [
  	    { link: '/', text:'Home.'},
  	    { link: '/intro', text:'About Me.'},
  	    { link: '/life', text:'Baby Life.'},
  	    { link: '/share', text:'Share Info.'},
  	    { link: '/contact', text:'Contact.'}
  	    ],
        isActive: false
      }
    },
    methods:{
      menuClick: function(){
        this.isActive = !this.isActive;
      },
    },
}
</script>
<style lang="scss">
</style>
