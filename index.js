module.exports = Phrase;

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
// function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
// }

function emailParts(email) {
  // FILL IN
  return email.toLowerCase().split("@");
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds `reverse` to all strings.
String.prototype.blank = function() {
  if (Array.from(this).join("").match(/^\s*$/)) {
    return true;
  } else {
    return false;
  }
}

// Adds `reverse` to all strings.
Array.prototype.last = function() {
  return Array.from(this).slice(-1)[0];
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    // FILL IN
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
    // return this.content;
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Makes the phrase LOUDER.
  this.louder = function() {
    // FILL IN
    return this.content.toUpperCase();
  };
}

// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//
//   // Returns translation processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
//
// }
//
// TranslatedPhrase.prototype = new Phrase();
