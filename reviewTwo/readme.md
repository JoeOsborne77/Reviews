# 9 Nov (week 8, Band Pass Filter)

# Exercise: School results

# Language: JavaScript

# I use an agile process. Rating: Improving

You paid attention to the information the client provided, asking questions about the filter’s behaviour and also made sure that you understood how inputs and outputs would be modelled.

You constructed an input-output table to verify your assumptions and understanding of the filter with the client, which was also great for planning your tests. You also captured finer details such as the default limits.

This was overall a really good information-gathering session. I do suggest that you rather make examples in your table of the edge cases/errors than writing brief sentences as these could easily be misinterpreted by anybody collaboration g with you. Examples make it more explicit and lower the risk of misinterpretation.

# I can model anything. Rating: Steady

Your solution’s interface structure to begin with was a single function, which was suitable given the problem’s stateless nature. You named your methods and variables with lowerCamelCase which is in line with Javascript conventions.

Your algorithm began to form nicely and make sense, but you do need to work on the usage of the default parameters in Javascript.

# I can TDD anything. Rating: Improving

Your initial tests are not testing for valid behaviours i.e. the default limits should apply when they are absent from the input and your test inputs have values beyond the limits but do not apply the limits. This means that the invalid tests then need to be modified or removed which is not good TDD practice.

I also suggest that you start from an even simpler point by testing for single-element array inputs rather than multiple elements in an array. This helps you to focus on only the filtering one value with basic conditional logic before taking that code and reusing it with iteration when tests with multiple elements are introduced.

# I can program fluently. Rating: Steady

You seemed comfortable enough using the terminal and editor to develop the program and run the tests.

You seemed to have a sufficient level of knowledge in all of the relevant programming constructs and built-in methods needed for solving the problem.

You have used the forEach method which works quite well for this problem. You may want to just consider using the map method for a cleaner solution as there would be no need to create a new array to push filtered elements to.

You did some great research about default parameters but struggled a bit to implement them in your solution. I suggest continuing with this exercise after this session so that you can work on that implementation.

# I can refactor anything. Rating: Improving

Unfortunately, you did not refactor your code in this session due to the complex test progression and also the time constraint. Refactors here could have been forEach to map and the if statements changed to default parameters

# I can debug anything. Rating: Strong

You had a methodical approach to debugging and were able to add research to your debugging process when you were not sure of an implementation.

# I write code that is easy to change. Rating: Improving

Although you had Git initialised, you seem to forget about making commits as we discussed in your previous session. I recommend that you use a sticky note on your monitor to remind you of what to do at each phase of the RGR cycle.

I was pleased to see that you had your test suite decoupled from the implementation. This was done by testing the expected inputs and outputs of the system. This promotes flexibility in your code, so any changes made to the structure of the code will not warrant a change in tests.

You have good, descriptive variable and function names that make your code easy to read and change.

# I have a methodological approach to problem solving. Rating: Improving

You have prioritised core cases over edge cases over edge cases which helps to provide a client with immediate value as features are being developed and there is a usable program for those features.

You are not following a regular RGR cycle. You are taking most of the complexity of the problem in your first tests which leads you to focus on too much complexity at once. With a TDD approach, we break the larger problem into smaller problems by using simple test cases first and with each new test driving a transformation to the algorithm in small increments. We then use the refactor phases to generalise the code and clean up the code on each iteration of the RGR cycle. As I have mentioned in the “I can TDD anything” section of the feedback, this did not really hinder you much on this exercise but could cause problems on more complex exercises.

# I can justify the way I work. Rating: Steady

You were quite vocal about your process and why you were making the decisions that you did. I just suggest that you try justifying deviations from the process such as skipping refactor phases and ensure that your reasoning is sound.
General feedback Thank you for joining your second review session. You have shown a much firmer understanding of TDD in this session as opposed to the last session. There are just a few minor adjustments that you can make to better align with the optimal process.
