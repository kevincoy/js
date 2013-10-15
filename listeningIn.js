text = "Blah blah blah blah blah blah Kevin blah blah blah Kevin blah blah Kevin blah blah blah blah blah blah blah Kevin";

var myName = "Kevin";
var hits = [];

// Look for "K" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] == "K") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}