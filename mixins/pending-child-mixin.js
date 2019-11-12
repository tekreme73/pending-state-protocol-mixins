export const PendingChild = (base) => class extends base {

    constructor() {
        super();
    }

    dispatchPendingEvent(pendingPromise) {
        this.dispatchEvent(new CustomEvent('pending-state', {
            composed: true,
            bubbles: true,
            detail: {promise: pendingPromise},
        }));
    }
};