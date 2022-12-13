# NOTES FOR ME
- RGR! In TDD, it is important that each new test added fails in some way, as this is how improvements are added into your code base.
- Commit early and often
- The most simple increase in complexity to break assumptions
- Why did it pass? Why did it fail?
- explicit naming of variables, functions etc.
- Green steps should be hardcoded as much as possible
--------------------------------------------------------------------------
# USER STORIES
Company that makes math papers easier to read 
1. product scans papers and looks for sums (four basic operators * / + -)
2. when it finds sums it extracts as strings 
3. sum string gets evaluated 
4. returns evaluated result as well as original string (original first and then result)
5. looking to move to a modern tech stack 
6. always same operator
7. Should be a float up to 2 decimal places

# EDGE CASES
1. If non string is given, raise error "Input must be a string"
2. There can be negative numbers
3. if letter is given with operator, raise error "Input must be a valid mathematical string separated by spaces"


# INPUT / OUTPUT TABLE

|__________INPUT__________|__________OUTPUT__________|
|          "1 + 1"        |      ["1 + 1", 2.0]      |
|          "1 + 1 + 1"    |      ["1 + 1 + 1", 3.0]  |
|          "2 - 1"        |      ["2 - 1", 1.0]      |
|          "2 - 1.5"      |      ["2 - 1.5", 0.5]    |
|          "2 * 2"        |      ["2 * 2", 4.0]      |
|          "1.5 * 2"      |      ["1.5 * 2", 3.0]    |
|          "2 / 1"        |      ["2 / 1", 2.0]      |
|          "3 / 0.5"      |      ["3 / 0.5", 1.5]    |
|          1 + 1          | "Input must be a string" |
|          "a + b"        | "Input must be a valid mathematical string separated by spaces" |

