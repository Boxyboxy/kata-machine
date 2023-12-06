function walk(curr:BinaryNode<number> | null, path: number[]): number[]{
    // base case: no child nodes
    if(!curr){
        return path;
    }

    // recursion steps
    // pre
    
    // recurse
    walk(curr.left, path);
    walk(curr.right, path);
    path.push(curr.value);
    // post
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head,[]);
}