export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if ( needle < haystack[mid] ) {
            hi = mid; // hi is exclusive
        } else {
            lo = mid+1; // lo is inclusive [lo, hi)
        }
    } while (lo< hi)
    return false;
}