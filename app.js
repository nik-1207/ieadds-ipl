import Utils from './services/Utils.js';
import Home from './components/home.js';
import Csk from './components/csk.js';
import Mi from './components/mi.js';
import Rcb from './components/rcb.js';
import Srh from './components/srh.js';
import Kkr from './components/kkr.js';
import Dc from './components/dc.js';
import Kxip from './components/kxip.js';
import Rr from './components/rr.js';
import NotFound from './components/404.js';

const routes = {
    '/': Home,
    '/csk': Csk,
    '/dc': Dc,
    '/mi': Mi,
    '/rcb': Rcb,
    '/srh': Srh,
    '/kxip': Kxip,
    '/rr': Rr,
    '/kkr': Kkr
};
const router = async() => {
    const content = null || document.getElementById('root');
    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    let page = routes[parsedURL] ? routes[parsedURL] : NotFound
    content.innerHTML = await page.render();
    await page.after_render();

}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);