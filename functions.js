import vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.8.0";
VanillaTilt.init(document.querySelectorAll(".links ul li"), {
		max: 10,
		speed: 800,
        glare: true,
        "max-glare": 1
});
