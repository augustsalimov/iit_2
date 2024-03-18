function reverseInputWords(input) {
    var reversed = input.split(" ").reverse();
    var output = reversed.join(" ");
    
    return output;
}

var input = "Какая-то строка со словами для теста на js";
console.log(reverseInputWords(input)); // Output: js на теста для словами со строка Какая-то
