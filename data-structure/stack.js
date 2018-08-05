class Stack {
  constructor() {
    this.items = [];
  }
  //入栈
  push(element) {
    this.items.push(element);
  }
  //出栈
  pop() {
    return this.items.pop();
  }
  //末位
  get peek() {
    return this.items[this.items.length - 1];
  }
  //是否为栈空
  get isEmpty() {
    return !this.items.length;
  }
  //长度
  get size() {
    return this.items.length;
  }
  //清空栈
  clear() {
    this.items = [];
  }
  //打印栈数据
  print() {
    console.log(this.items.toString());
  }
}

var stack = new Stack();
console.log(stack.isEmpty); //true
console.log(stack.size); //0
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.size);
console.log(stack.peek);  
console.log(stack.isEmpty);  //false
stack.pop();
console.log(stack.peek);
stack.print(); //3, 4
