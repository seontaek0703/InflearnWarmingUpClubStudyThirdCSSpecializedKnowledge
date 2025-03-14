class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    priintAll() {
        let currentNode = this.head;
        let text = "[";

        while(currentNode != null) {
            // console.log(currentNode.data);
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null) {
                text += ", ";
            }
        }

        text += "]";
        console.log(text);
    }

    // 리스트의 모든 원소를 제거하는 기능
    clear() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data) {
        // index가 크기를 초과하거나 음수를 가르키는 경우
        if(index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);

        if(index == 0) {
            // 데이터가 head에 삽입되는 경우
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // 데이터가 head가 아닌 나머지 위치에 삽입되는 경우
            let currentNode = this.head;

            for(let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    // 리스트의 마지막에 데이터를 삽입하는 경우
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        // index가 크기를 초과하거나 음수를 가르키는 경우
        if(index >= this.count || index < 0) {
            throw new Error("제거할 수 없습니다.");
        }

        let currentNode = this.head;

        if(index == 0){
            // head에 위치한 데이터를 삭제하는 경우
            let deletedNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deletedNode;
        } else {
            // head가 아닌 나머지 위치에 데이터를 삭제하는 경우
            for(let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            let deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deletedNode;
        }
    }

    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index) {
        // index가 크기를 초과하거나 음수를 가르키는 경우
        if(index >= this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, LinkedList };