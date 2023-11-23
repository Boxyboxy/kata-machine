export default function two_crystal_balls(breaks: boolean[]): number {
// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i< breaks.length; i+= jumpAmount) {
        if (breaks[i] ){
            break;
        }
    }

    i-= jumpAmount;
    for (let j =i; j< i+jumpAmount; j++){
        if (breaks[j]){
            return j;
        }
    }

    return -1;
    

    for (let i = jumpAmount; i < breaks.length; i+= jumpAmount) {
        if (breaks[i] ) {
            for(let j = i - jumpAmount; j < i; j++){
                if (breaks[j] ){
                    return j;
                }
            }
        }
    }
    return -1;

}