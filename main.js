var monthday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var weekday = [ "mo", "tu", "we", "th", "fr", "sa","su"]

function isLeapYear(y) {
    if (y % 4 != 0) return false
    else if (y % 100 != 0) return true
    else if (y % 400 != 0) return false
    else return true
}
const div2int = (a,b)=>Math.floor(a/b);
function countLeapYear(y){
    return div2int(y,4)-div2int(y,100)+div2int(y,400)
}
function whatDay(d, m, y) {
    var isLeap = isLeapYear(y);
    var diffYear = y - 1900 -1
    var leapYearCount = countLeapYear(y-1) - countLeapYear(1900)
    var dayList = monthday.slice(0, m - 1)
    var daySumThisYear = dayList.reduce((sum, d) => sum + d, 0) + d
    var daySumAll =diffYear*365 +  leapYearCount + daySumThisYear + (m>=3 && isLeap ? 1 : 0)
    return daySumAll % 7
}
function test(d, m, y, w) {
    var index = weekday.findIndex(i => i == w)
    var dayindex = whatDay(d, m, y)
    var pass = dayindex == index

    if (pass) console.log("pass" ,d,m,y,w,weekday[dayindex]);
    else console.log("fail",d,m,y,w,weekday[dayindex]);
    console.log("");
}

test(1, 1, 1900, "mo")
test(1, 1, 1901, "tu")
test(12, 9, 2020, "sa")
test(11, 9, 2020, "fr")
test(1, 1, 2020, "we")
test(1, 1, 2011, "sa")
test(1, 3, 2011, "tu")
test(1, 1, 2012, "su")
test(29, 2, 2012, "we")
test(1, 12, 2012, "sa")