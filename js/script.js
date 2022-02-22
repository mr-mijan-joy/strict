// alert("Hi");

	// card animation script
	
const element = document.querySelector('.card');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'animation', entries[0].isIntersecting );
});

observer.observe( element );


	// menubar script

 function myFunction() {
    document.getElementsByClassName("menu")[0].classList.toggle("m_img");
  }

 myFunction();