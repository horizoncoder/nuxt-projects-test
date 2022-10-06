<template>
  <div class="projectsWrapper">
    <Project :onClick="toggleIsOpen" v-for="project in myProjects" :id="project.id" :name="project.name"
             :logo="project.logo_url" :isActive="project.is_active" :key="project.id"/>
    <Modal v-if="isOpen" :closeModal="toggleIsOpen" :projectId="projectId"/>
  </div>
</template>
<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Projects',
  data() {
    return {
      isOpen: false,
      projectId: 0
    }
  },
  computed: {
    ...mapGetters({
      myProjects: "projectStore/getProjects"
    }),

  },
  methods: {
    ...mapActions({
      projects: 'projectStore/fetchProjects',
    }),
    toggleIsOpen(id) {
      this.projectId = id
      this.isOpen = !this.isOpen && true
    }
  },
  mounted() {
    this.projects()
  }
}
</script>

<style>
.projectsWrapper {
  width: 60%;
  margin: 150px auto 0;

}
</style>
