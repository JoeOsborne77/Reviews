# Thurs 24 November (week 11, Spell Checker)

# Exercise: Spell Checker

# Language: JavaScript

# I use an agile process. Rating: Strong
You began your information-gathering by first clarifying on the inputs and outputs of the system, which was a great first step to take. Following this, you methodically constructed an input-output table, clarifying various finer details and edge cases as you went. As a result, you left the information-gathering system with a solid idea of the client’s expectations.

# I can model anything. Rating: Improving
You modelled your solution as a single method, which I felt was a nice and simple choice for this particular exercise. Given the stateless nature of the problem, using a method was a perfect fit.
Your method name unfortunately didn’t follow the Javascript convention. Your method name used PascalCase, whereas methods should be named using camelCase in Javascript.

# I can TDD anything. Rating: Steady
You were sufficiently familiar with the testing syntax and framework. Your tests were based on the expected inputs and outputs of the system. This is great as it promotes flexibility in your code, while keeping it focused on the behaviour of the system. Your tests successfully began with the simplest test case possible, and progressed very well to ensure a small and incremental improvement. There was one pain point in your tests, however - due to the way your first test passed, your second test passed immediately. As a result, there was no Red step, and therefore no need to improve the code to pass this test. In TDD, it is important that each new test added fails in some way, as this is how improvements are added into your code base.

# I can program fluently. Rating: Strong
You seemed comfortable enough using the terminal and editor to set up your environment. You seemed to have a sufficient level of knowledge in all of the relevant programming constructs needed to solve the problem.

# I can refactor anything. Rating: Nothing here
Unfortunately, there was no opportunity for a refactor.

# I can debug anything. Rating: Strong
You regularly read the stack trace to ensure that you are up-to-date on all possible bugs.

# I write code that is easy to change. Rating: Steady
You made regular use of Git as part of your process, committing whenever tests pass. This ensures that you have a working history of your code and that any rollbacks will return working code. This also allows you the opportunity to keep a record of changes to your code. I was pleased to see that you had your test suite decoupled from the implementation. This was done by testing on the expected inputs and outputs of the system. This promotes flexibility in your code, and so any changes made to the structure of the code will not warrant a change in tests. Unfortunately, your choice of variable name did not accurately reflect the information being held in that variable. For example, the input to your method was called `string`, which only informs the reader of the data type. However, a name such as `sentence` would inform the reader that the input to your method is a sentence, which makes understanding your code a bit easier.

# I have a methodological approach to problem solving. Rating: Improving
You regularly ran your test suite on the Red step to ensure that tests are failing correctly. You followed a mostly regular RGR cycle. Unfortunately, however, you passed tests using logic, which equates to skipping the Green step and moving straight to the Refactor step. Before using logic to pass tests, you must ensure that the tests pass the way you want them to. This is usually done through methods such as hard-coding, which are reserved for the Green step. Then, once the tests pass, keep that level of functionality with a Refactor (i.e. using logic) to pass the same test again. As a general rule-of-thumb, I recommend repeating tests three times (with three different values). The first time can be passed on the Green step using a simple hardcoded value. The second time can be passed on the Green step with an if-statement. The third time can be passed on the Green step by extending the if-statement, and then a Refactor to generalize. As a simple example, let’s say you start with an incorrectly spelled word. You would pass the first test by returning what the first test wants. Then, for your second test, you would give the system another incorrectly-spelled word and simply pass with an if-statement. Then, one more time with another incorrectly-spelled word. Then, on your Refactor step, you would see that you are always returning the same string, but interpolated with a tilde on each side. Then, you can write code to reflect this. Your tests logically prioritized simple behaviour over complex. You also focused on core functionality before eventually moving to edge cases.

# I can justify the way I work. Rating: Steady
You sounded out your logic and process so that it was easy to follow you during this review. To refine a bit further, you could make some mention of TDD and the RGR cycle to ensure that you are remaining within this framework.

# General feedback
Great job on this review! You are managing a nice and incremental test progression, and focusing on just passing tests with each coding cycle. Unfortunately, the way that you are passing tests are technically not Green steps. Generally, Green steps are hardcoded as much as possible. This way, you can build up a reflection of your tests in your code. The Refactor step is generally where you would start building in some logic for the end system. To refine further, try adopting the three-test approach to RGR - this allows you to build up a pattern with three consecutive Green steps, so that a Refactor step can be introduced to add logic in. Otherwise, great work on your process so far, and I look forward to seeing you improve even further!
