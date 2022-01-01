module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dozens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = parseInt(number / 100);
    const rankTeens = number % 100;
    const rankUnits = number % 10;
    if (rankTeens <= 19 && rankTeens >= 10) {
        let result = `${units[hundreds]}${!(hundreds) ? "" : " hundred"} ${teens[rankUnits]}`
        return result.replace(/\s+/g, " ").trim();
        //return units[hundreds] + (!hundreds) ? "" : " hundred" + teens[rankTeens];
    }

    const rankDozens = (number % 100 - rankUnits) / 10;
    let result = `${units[hundreds]}${!(hundreds) ? "" : " hundred"} ${dozens[rankDozens]} ${units[rankUnits]}`;
    return result.replace(/\s+/g, " ").trim();
}