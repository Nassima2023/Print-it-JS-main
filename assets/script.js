/* constantes et variables */ 

// const slides = [ 
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	},
// 	{
// 		"image":"slide5.jpg",
// 		"tagLine":"blabla <span>avec découpe laser sur mesure</span>"
// 	}

// ]
  

// const arrowLeft = document.querySelector('.arrow_left');
// const arrowRight = document.querySelector('.arrow_right');
// const images = document.querySelector('.banner-img');
// const tagline = document.createElement("p");
// const banner = document.getElementById('banner');
// const dots = document.querySelector('.dots')

// let index = 0 

// /* évenements */ 

// arrowLeft.addEventListener('click', imagePrecedente); 
// arrowRight.addEventListener('click', imageSuivante);

// /* fonctions et méthodes */ 

// window.onload = (event) => 
// {
// 	afficherImage();
// 	creerBulletPoints();
// }
			

// function afficherImage()
// {
// 	images.setAttribute("src", "./assets/images/slideshow/" + slides[index].image);
//   	tagline.innerHTML = slides[index].tagLine;
//   	banner.appendChild(tagline);

// 	/*allumer le bulLet point correspondant*/ 
// 	for (let index = 0; index < dots.length; index++) {
// 		if (index === index) {
// 			dots[index].setAttribute('dot_selected' , 'true');
// 		  } else {
// 			dots[index].removeAttribute('dot_selected');
// 		  }
		
// 	}

// }

// function creerBulletPoints() 
// {
// 	for (let index = 0; index < slides.length; index++) 
// 	{
// 		const dot = document.createElement("div");
// 		dot.setAttribute("class", "dot");
// 		dots.appendChild(dot);
// 	}
// }



// function imageSuivante() 
// {
// 	if (index < slides.length - 1) 
// 	{
// 		index++;
// 		console.log('index : ' + index);
// 		afficherImage();
// 		bulletPoint();
// 	}
// }
	
// function imagePrecedente() 
// {
// 	if (index > 0) 
// 	{
// 		index--;	
// 		console.log('index : ' + index);
// 		afficherImage();
// 	}
// }

const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
  ];
  
  const arrowLeft = document.querySelector('.arrow_left');
  const arrowRight = document.querySelector('.arrow_right');
  const images = document.querySelector('.banner-img');
  const tagline = document.createElement("p");
  const banner = document.getElementById('banner');
  const dots = document.querySelector('.dots');
  
  let index = 0;
  
  /* évenements */
  arrowLeft.addEventListener('click', imagePrecedente);
  arrowRight.addEventListener('click', imageSuivante);
  
  /* fonctions et méthodes */
  window.onload = (event) => {
	afficherImage();
	creerBulletPoints();
  };
  
  function afficherImage() {
	images.setAttribute("src", "./assets/images/slideshow/" + slides[index].image);
	tagline.innerHTML = slides[index].tagLine;
	banner.appendChild(tagline);
  
	// Allumer le bullet point correspondant
	for (let i = 0; i < dots.children.length; i++) {
	  if (i === index) 
	  {
		dots.children[i].classList.add('dot_selected');
	  } 
	  else 
	  {
		dots.children[i].classList.remove('dot_selected');
	  }
	}
  }
  

function creerBulletPoints() {
	for (let i = 0; i < slides.length; i++) {
	  const dot = document.createElement("div");
	  dot.className = "dot";
	  dots.appendChild(dot);
  
	  if (i === 0) {
		dot.classList.add("dot_selected");
	  }
	}
  }
  
  function imageSuivante() {
	index++;
  	if (index === slides.length) 
	{
    index = 0; 
 	}
  	console.log('index : ' + index);
  	afficherImage();
	}
  
  
  function imagePrecedente() {
	index--;
  	if (index < 0) 
	{
    index = slides.length - 1; 
 	}
  console.log('index : ' + index);
  afficherImage();
  }
  

	

