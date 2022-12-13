# Wed 26 October (week 6, School results)

# Exercise: School results

# Language: JavaScript

# I use an agile process. Rating: Improving

You managed to get the main points of the acceptance criteria from the user, but your information gathering process could use a bit of work. These main points gave you a skeleton idea of how the program should work, and you ran with this. To improve further, I would suggest investigating the variations of the input that might make up finer details and edge cases. For example, within the input string:

- How is capitalization handled?
- How many spaces can there be after the comma?
- Can the string be empty?

To help you gather these requirements, I would recommend using the input-output table and fleshing out examples of these types of variations and edge cases.

# I can model anything. Rating: Improving

You modelled your solution as a single function, which I felt was perfectly sufficient for this exercise and provided a good place to start. Your function name, schoolReport, followed the Javascript convention for function naming (i.e. camelCase).

The method name was good, but a further improvement on it could be generateSchoolReport. When naming your method, you want to describe what it does. This way, your method name becomes more ‘actionable’.

You later went on to create a class with properties and a constructor which was over-engineered for this problem which only requires a functional approach due to its stateless nature.

# I can TDD anything. Rating: Improving

Your first test was sufficiently simple, but your second test (which seemed like a simple increase in complexity) took on most of the complexity of the problem in one step. A simpler next step would have been to either isolate one colour and count many of them, or change the colour, but for only one grade.

I'd strongly encourage you to switch your testing approach to incorporate a simpler test progression: starting from a simple input and gradually writing tests to handle increasingly complex inputs, and expecting the output of the program that the user would get.

Eg: starting with simple examples with one colour (“Green” expecting “Green: 1”) and then once all the simple tests are covered, identifying the next most simple example which would break the current assumption of the code (ie. the code is assuming just one grade in the input string, so you could write a test with “Green, Green” expecting “Green: 2”, which is one of the simplest examples which would make the test fail. You could also take a different approach by testing a single Amber grade. Both are valid incremental approaches that focus on introducing one level of complexity to the algorithm).

This helps you to focus on as little complexity as possible on each iteration of the RGR cycle.

To help with test progression I would like you to take a look at the following resources on test triangulation.

https://www.youtube.com/watch?v=E8gipX_C5fM&ab_channel=Codemanship

https://www.tddfellow.com/blog/2016/08/31/getting-stuck-while-doing-tdd-part-3-triangulation-to-the-rescue/

# I can program fluently. Rating: Steady

You seemed quite comfortable navigating your terminal and editor while setting up your environment.

You seemed pretty comfortable with Javascript/Jest syntax and showed a reasonably good grasp of core programming concepts. You were also aware of how to use some of the built-in methods, but due to the time constraint, you did not make as much progress as you may have wanted to.

# I can refactor anything. Rating: Nothing here

Unfortunately, you did not get an opportunity to display your refactoring skills.

# I can debug anything. Rating: Improving

You are familiar with the common errors and paid attention to the error messages in the stack trace. I believe that you should take the time to use console.log to get visibility into how your code is behaving and try simpler solutions rather than elegant solutions to get tests to pass because you are leaving quite a bit of scope for bugs to creep in. This will also improve with a more incremental TDD process.

# I write code that is easy to change Rating: Improving

You have made regular use of Git, committing whenever tests pass on Green or refactor phases. Doing so ensures that you have a working history of your code and that any rollbacks will return the working code. This also allows you the opportunity to keep a record of changes to your code which can assist the client with keeping track of the progress made with the program.

You tested at the system’s boundaries allowing you to vary the internal details without worrying about breaking your tests. In other words, it allows you to utilise your refactor phases with tests available to control the changes you make.

You chose sensible names that were derived from the domain and thus meaningful beyond the simple execution of your script, improving the maintainability of your code. Your tests were also meaningfully named, making it easy to understand the specification, even to non-developers.

# I have a methodological approach to problem solving. Rating: Improving

You have prioritised core cases over edge cases in order to deliver immediate value to the client.

As you have had some trouble with simple test progression, I suggest the following checklist whilst you are refining your process.

Write a failing test.
Did you run the test?
Did it fail?
Did it fail because of an assertion?
Did it fail because of the last assertion?
Make all tests pass by doing the simplest thing that could possibly work.
Consider the resulting code. Can it be improved through refactoring? If so, do it, but make sure that all tests still pass.

Ask yourself the question, ‘what is my code currently assuming’ and think of the next simple test that will break that assumption and introduce a new failing test.
Repeat

# I can justify the way I work. Rating: Steady

You were quite vocal about what you were doing and why you were doing it. This is a good way to get an interviewer to understand what your thought process is and follow your logic. I look forward to how you justify decisions made in a future review when you make some more progress with the algorithm as you employ a refined process.

# General feedback

Well done on completing your first review. Taking this review is a good first step towards getting a good process for code interviews. As the main points of improvement, I would recommend the following:

- Asking about edge cases and constructing an input-output table for the information-gathering session
- A simpler test progression for TDD
- Working well within assumptions when passing tests. This means following a good RGR cycle.
- Some practice on Codewars will help to improve your confidence in programming

Otherwise, well done for taking that first step, and I look forward to further improvements in your process.
