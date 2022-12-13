# Req's

- Mega Soft Weird
- Word processor
- One feature is a spellchecker
- Single sentence
- Need to be compared to word bank
- Word bank should be an array of strings with correctly spelt words
- Non string data should raise an error "Incorrect data provided"
- Same casing for input and output
- Anything not in the word bank is incorrect

INPUT | OUTPUT
"hello" | "hello"  
"hlelo | "~hlelo~"
1234 | "Incorrect data provided"
"pineapple" | "pineapple"
"pinapple | "~pinapple~"

wordBank = ["hello", "pineapple", "the", "earth", "stars"]
