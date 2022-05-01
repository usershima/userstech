<template>
  <v-navbar toggleable type="dark" variant="dark">
    <v-navbar-brand href="#">NavBar</v-navbar-brand>

    <v-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <v-icon v-if="expanded" icon="chevron-bar-up"></v-icon>
        <v-icon v-else icon="chevron-bar-down"></v-icon>
      </template>
    </v-navbar-toggle>

    <v-collapse id="navbar-toggle-collapse" is-nav>
      <v-navbar-nav class="ml-auto">
        <v-nav-item href="#"></v-nav-item>
        <v-nav-item href="#">Link 2</v-nav-item>
        <v-nav-item href="#" disabled>Disabled</v-nav-item>
      </v-navbar-nav>
    </v-collapse>
  </v-navbar>
</template>