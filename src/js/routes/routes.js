import HomeViewComponent from '../views/home-view/HomeViewComponent';
import LazyPicsViewComponent from '../views/lazy-pics/LazyPicsViewComponent';
import {HOME_PAGE, LAZY_PICS_PAGE} from "./nav-pages";

const routes = [
  { name: HOME_PAGE, path: '/', component: HomeViewComponent },
  { name: LAZY_PICS_PAGE, path: '/lazy-pics', component: LazyPicsViewComponent}
];

export {routes};