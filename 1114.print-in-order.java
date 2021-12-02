import java.util.concurrent.CompletableFuture;

/*
 * @lc app=leetcode id=1114 lang=java
 *
 * [1114] Print in Order
 */

// @lc code=start
class Foo {

    private final CompletableFuture<Void> firstFuture = new CompletableFuture<>();
    private final CompletableFuture<Void> secondFuture = new CompletableFuture<>();

    public Foo() {
    }

    public void first(Runnable printFirst) throws InterruptedException {
      // printFirst.run() outputs "first". Do not change or remove this line.
      printFirst.run();
      this.firstFuture.complete(null);
    }

    public void second(Runnable printSecond) throws InterruptedException {
      this.firstFuture.join();
      // printSecond.run() outputs "second". Do not change or remove this line.
      printSecond.run();
      this.secondFuture.complete(null);
    }

    public void third(Runnable printThird) throws InterruptedException {
      this.secondFuture.join();
      // printThird.run() outputs "third". Do not change or remove this line.
      printThird.run();
    }

  }
// @lc code=end
