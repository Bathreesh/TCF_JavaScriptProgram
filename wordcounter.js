// 4-word-counter.js
function wordCount(text) {
    return text.trim().split(/\s+/).length;
}

let sentence = "JavaScript is fun to learn!";
console.log(`Word count: ${wordCount(sentence)}`);
