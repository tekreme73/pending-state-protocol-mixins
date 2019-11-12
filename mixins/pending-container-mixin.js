export const PendingContainer = (base) => class extends base {

    constructor() {
        super();

        this.__hasPendingChildren = false;
        this.__pendingCount = 0;

        this.addEventListener('pending-state', async e => {
            this.__hasPendingChildren = true;
            this.__pendingCount++;
            await e.detail.promise;
            this.__pendingCount--;
            this.__hasPendingChildren = this.__pendingCount !== 0;
        });
    }

    get isPending() {
        return this.__hasPendingChildren;
    }
};