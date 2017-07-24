/**
 * Linked list node
 */
export interface LinkedListNode<T> {
  value: T
  next: LinkedListNode<T>
}

/**
 * Linked list for items of type T
 */
export class LinkedList<T> {
  public head: LinkedListNode<T> | undefined;
  public tail: LinkedListNode<T> | undefined;

  /**
   * Adds an item in O(1)
   **/
  push(value: T) {
    const node = {
      value,
      next: undefined
    }
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }
}

/**
 * Iteration helper for LinkedList
 */
export function* values<T>(list: LinkedList<T>) {
  let current = list.head;
  while (current) {
    yield current.value;
    current = current.next;
  }
}
