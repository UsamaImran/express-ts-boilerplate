import { ROUTER } from '../appInstance';
import { ROUTES } from './ROUTES';

ROUTES.forEach((route) => {
  ROUTER.use(route.endpoint, route.path);
});

export default ROUTER;
