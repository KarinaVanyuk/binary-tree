'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var current;
		if (this.root === null) {
			this.root = new Node(data);
			return;
		} else current = this.root;
		while (true) {
			if (data < current.data) {
				if (current.left === null) {
					current.left = new Node(data);
					break;
				} else current = current.left;
			} else {
				if (current.right === null) {
					current.right = new Node(data);
					break;
				} else current = current.right;
			}
		}
	}

	contains(data) {
		
		var currentNode = this.root;

		while (currentNode) {
		  if (data === currentNode.data) {
			return true;
		  } else if (data < currentNode.data) {
			currentNode = currentNode.left;
		  } else {
			currentNode = currentNode.right;
		  }
		}

		return false;
	}

	remove(data) {
 var  parent = null,
            current = this.root;
        while(current){

            if (data < current.data){
                parent = current;
                current = current.left;
            } else if (data > current.data){
                parent = current;
                current = current.right;
            } else {

            	if (current === this.root){

                    if(current.left === null && current.right === null){ 
                        this.root = null;
                    } else if(current.right === null){
                        current = current.left;
                    } else if(current.left === null){
                        current = current.right;
                    }
                
            	} else {

                    if(current.left == null && current.right == null){
                        if (current.data < parent.data){
                            parent.left = null;
                        } else if(current.data > parent.data){
                            parent.right = null;
                        } 
                    }else if(current.right === null){
                          parent.left = (current.left === null ? current.right : current.left);
                    } else if(current.left === null){
                         parent.right = (current.left === null ? current.right : current.left);
                    } else {
                    	if (current.left != null && current.right != null) {
							if (parent.left == current){
								parent.left = current.left;
							}
							else {
								parent.right = current.left;
							}
                    	}
            		}
        		}
        		current = false;
            }
        }
	}

	size() {
		var number = 0;
		if (this.root) { 
			handler(this.root); 
		}
		return number;

		function handler(node) {
			number++;
			if (node.left) { 
				handler(node.left); 
			}
			if (node.right) { 
				handler(node.right); 
			}
		}
	}

	isEmpty() {
		if(this.root === null){
			return true;
		}
		else{
			return false;
		}
	}
		
	
}
