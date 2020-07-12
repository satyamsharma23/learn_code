(function a() {

	var Wish = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var j = 0; j < Wish.length; j++) {
		if (Wish[j].charAt(0).toLowerCase() === 'j') {
			byeSpeaker.speak(Wish[j]);
		} 
		else {
			helloSpeaker.speak(Wish[j]);
		}
	}
}

)();