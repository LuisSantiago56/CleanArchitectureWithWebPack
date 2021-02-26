<template>
    <div>
        <b-navbar toggleable="lg" typeof="dark" variant="dark">
            <b-navbar-brand :to="'/'">Clean Architecture</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-nav>
                <b-nav-item :to="'/'">Home</b-nav-item>
                <b-nav-item-dropdown text="Drop-down" right>
                    <b-dropdown-item :to="'/example">Example</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            @*<b-nav-text class="ml-auto">{{username}}</b-nav-text>*@
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "app",
        data: function () {
            return {
                username: window.AppData.username,
            };
        }
    };
</script>

<style>
    html,
    body{
        margin: 0;
        font-family: "Segoe UI";
    }
</style>