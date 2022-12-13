# Digital Audio workstation plugin company

- Musicians apply filters to their tracks
- Band pass filter
- Takes a soundwave as an input (array of numbers)
- Each num. is a freq
- Filter checks if freq is above a particular limit, changes freq to the high limit
- Filter checks if freq is below a particular limit, changes freq to the low limit
- Input is never none / null
- Raise error if array is empty Error "No frequencies supplied"
- No limits supplied by user but they should have the option to
- Anything other than integer - raise error "Something is corrupted"
- Always the default: lower limit = 40 & upper limit = 1000
- 0 or negative will raise same error as non-integer - "Something is corrupted"
- Upper range is limitless

INPUT | OUTPUT

---

[60,10,45,60,1500] | [60,40,45,60,1000] <<< lower limit = 40 & upper limit = 1000
[40,20,65,800,100] | [40,30,65,750,100] <<< lower limit = 30 & upper limit = 750
[40,9000,65,5,100] | [40,1000,65,20,100] <<< lower limit = 20 & upper limit = 1000
[40,11000,30,5,100]| [40,10000,50,50,100] <<< lower limit = 50 & upper limit = 10000

const bandPassFilter = ([array], (lower limit), (upper limit)) => {

}
