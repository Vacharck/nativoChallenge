export class Url {
    constructor(full = "", clicks = 0, short = "") {
        this.full = full;
        this.clicks = clicks;
        this.short = short;
    }

    full: string;
    clicks: number;
    short: string;
}