// smallest node as root
export default class MinHeap {
    public length: number;
    private data: number[];
    
    print(){
        console.log(this.data)
    }

    constructor() {
        this.data = []
        this.length = 0;
    }

    
    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }   
    
    delete(): number { 
        if(this.length === 0){
            return -1;
        }
        const out = this.data[0];
        this.length--;

        if (this.length === 0){
            this.data = [];
            return out;
        }
        
       
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;

        
    }

    private heapifyDown(idx:number): void {
        if(idx >= this.length){
            return;
        }

        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if(lIdx >= this.length ){
            return;
        }

        const lVal = this.data[lIdx];
        const rVal = this.data[rIdx];
        const val = this.data[idx];

        if(lVal > rVal && val > rVal) {
            this.data[idx]= rVal;
            this.data[rIdx]= val;
            this.heapifyDown(rIdx);
        } else if( rVal > lVal && val > lVal){
            this.data[idx]= lVal;
            this.data[lIdx]= val;
            this.heapifyDown(lIdx);
        }
    }
    // recursive
    private heapifyUp(idx: number) : void{
        if(idx === 0){
            return;
        }

        const p = this.parent(idx);
        const parentV = this.data[p];
        const v = this.data[idx];
        if( parentV > v){
            this.data[idx] = parentV;
            this.data[p]=v;
            this.heapifyUp(p);
        }

    }

    private parent(idx: number):number {
        return Math.floor((idx -1)/2);
    }

    private leftChild(idx:number): number {
        return idx * 2  + 1;
    }

    private rightChild(idx:number): number {
        return idx *2 +2;
    }


}