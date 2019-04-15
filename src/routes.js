import Home from './components/Home.vue'
import Input from './components/Input.vue'
import Output from './components/Output.vue'
import Students from './components/Students.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/input', component: Input },
    { path: '/output', component: Output },
    { path: '/students', component: Students }

];

export default routes;