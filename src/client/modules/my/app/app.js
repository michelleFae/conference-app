import { LightningElement, track } from 'lwc';
export default class App extends LightningElement {
    // if sessionId or state changes, re-render the whole component
    @track sessionId;
    @track state;

    constructor() {
        super();
        this.state = 'list';
        window.history.replaceState('list', null, '');
        window.onpopstate = event => {
            if (event.state) {
                this.state = event.state;
            }
        };
    }
    handleNavigate(event) {
        this.sessionId = event.detail;
        this.state = 'details';
        window.history.pushState('details', null);
    }

    get isStateList() {
        return this.state === 'list';
    }
    get isStateDetails() {
        return this.state === 'details';
    }
}
