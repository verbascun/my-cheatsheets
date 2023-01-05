h2 = document.getElementsByTagName("h2");
for (i = 0; i < h2.length; i++) {
	h2[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var section = this.nextElementSibling;
	var hidden = document.createElement('span')
	hidden.innerHTML = "[hidden]"
	const display = getComputedStyle(section).getPropertyValue('display');
	if (display === "flex") {
		section.style.display = "none";
		this.append(hidden);
	} else {
		section.style.display = "flex";
		this.innerHTML = this.childNodes[0].data
	    }
	  }); }
