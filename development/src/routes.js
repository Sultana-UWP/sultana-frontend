import Home from './components/views/Home';
import Search from './components/views/Search';
import About from './components/views/About';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/about',
        component: About
    }
];

export default routes;