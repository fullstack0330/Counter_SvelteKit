import { writable } from "svelte/store";
export let allItems = writable(
    { status: true, text: "new", count: 0 });