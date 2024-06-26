import Node from "./Node.js"
class BST {
    #root

    constructor(){
        this.#root = null
    }

    add(value){
        if(this.#root == null){
            this.#root = new Node(value)
        }
        else
        this.insertNode(this.#root, value)
    }

    insertNode(node, value){
        if(node.value.name>value.name){
            if(node.left==null){
                node.left = new Node(value)
            }
            else
            this.insertNode(node.left, value)
        }
        else{
            if(node.right==null){
                node.right = new Node(value)
            }
            else
            this.insertNode(node.right, value)
        }
    }

    search(value){
        return this.searchNode(this.#root, value)
    }

    searchNode(node,value){
        if(node === null || node.value.name === value){
            return node
        }
        else if(value < node.value.name){
            return this.searchNode(node.left, value)
        }
        else
        return this.searchNode(node.right, value)
    }

    max(){
        return this.searchMax(this.#root)
    }

    searchMax(node){
        if(node===null || node.right===null){
            return node
        }
        else
        return this.searchMax(node.right)
    }

    min(){
        return this.searchMin(this.#root)
    }

    searchMin(node){
        if(node===null || node.left===null){
            return node
        }
        else
        return this.searchMin(node.left)
    }

    inorder(callback){
        return this.inorderRoute(this.#root,callback)
    }

    inorderRoute(node,callback){
        if(node!=null){
            this.inorderRoute(node.left,callback)
            callback(node)
            this.inorderRoute(node.right,callback)
        }
    }
}

export default BST