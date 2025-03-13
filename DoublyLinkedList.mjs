class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
            if(this.head != null) {
                // head가 null일 때 에러가 나지 않기 위한 if if
                this.head.prev = newNode;
            }
            this.head = newNode;
        } else if (index == this.count) {
            // tail에 삽입하는 경우를 위한 else if
            newNode.next = null;
            newNode.prev = this.tail;
            this.tail.next = newNode;
        } else {
            // 데이터가 head가 아닌 나머지 위치에 삽입되는 경우
            let currentNode = this.head;

            for(let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.prev = currentNode;
            currentNode.next = newNode;
            newNode.next.prev = newNode;
        }

        if (newNode.next = null) {
            this.tail = newNode;
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
        let deleteNode = this.head;
        if(this.head.next == null) {
            // 데이터가 한 개 일 때
            this.head = null;
            this.tail = null;
        } else {
            // 데이터가 두 개 이상일 때
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.count--;
        return deleteNode;
        } else if (index == this.count - 1) {
            // 마지막 노드를 제거하는 경우
            let deleteNode = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.count--;
        } else {
            // head와 tail이 아닌 나머지 위치에 데이터를 삭제하는 경우
            for(let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            let deleteNode = currentNode;
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
            this.count--;
            return deleteNode;
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

export { Node, DoublyLinkedList };