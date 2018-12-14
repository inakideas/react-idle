const MINUTES_UNITL_AUTO_LOGOUT = 1 // in mins
const CHECK_INTERVAL = 500 // in ms
const STORE_KEY =  'lastAction';

export function idleTimeout(callback){

    initListener();

    setInterval(() => {

        const now = Date.now();
        const timeleft = getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        const diff = timeleft - now;
        const isTimeout = diff < 0;
        if (isTimeout) callback();

    },CHECK_INTERVAL)

}

function initListener(){
    document.body.addEventListener('click', () => reset());
    document.body.addEventListener('mouseover',()=> reset());
    document.body.addEventListener('mouseout',() => reset());
    document.body.addEventListener('keydown',() => reset());
    document.body.addEventListener('keyup',() => reset());
    document.body.addEventListener('keypress',() => reset());
}


function getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
}

function setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
}

function reset() {
    setLastAction(Date.now());
}
