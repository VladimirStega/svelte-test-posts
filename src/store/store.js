import { writable } from "svelte/store";

export const posts = writable(JSON.parse(localStorage.getItem("posts")) || []);

posts.subscribe((value) => localStorage.setItem("posts", JSON.stringify(value)));