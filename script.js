const backBtn = document.querySelector(".back-btn");

window.onscroll = function () {
	if (window.scrollY > 100) {
		backBtn.style.display = "block";
	} else {
		backBtn.style.display = "none";
	}
};
