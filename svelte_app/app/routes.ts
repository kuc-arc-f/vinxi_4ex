import Home from './client/Home.svelte'
import About from './client/About.svelte'
import Test1 from './client/Test1.svelte'
//console.log("App.svelte");

export const routes = {
    '/': Home,
    '/about': About,
    '/test1': Test1,
}
