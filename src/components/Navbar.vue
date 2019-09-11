<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span >Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn color="grey" flat>
                    <span>
                        sign out
                    </span>
                    <v-icon right>
                        exit_to_app
                    </v-icon>
                </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-action >
                        <v-icon left class="white--text">{{ link.icon }}</v-icon>
                    </v-list-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                            {{ link.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            drawer: false,
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/'},
                {icon: 'folder', text: 'My Projects', route: '/projects'},
                {icon: 'person', text: 'Team', route: '/team'},
                {icon: 'settings_overscan', text: 'Buttons', route: '/buttons'},
                {icon: 'web', text: 'Breakpoints', route: '/breakpoints'},
                {icon: 'view_quilt', text: 'Griding 1', route: 'grids1'},
            ]
        }
    }
}
</script>

<style>

</style>
