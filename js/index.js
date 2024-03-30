function fetchBlogs() {
  return new Promise((resolve, reject) => {
      fetch('blogs.json')
          .then(response => {
              if (!response.ok) {
                  throw new Error('File oxunmur');
              }
              return response.json();
          })
          .then(blogs => {
              localStorage.setItem('blogs', JSON.stringify(blogs)); // Melumat localstoragede saxlanilir
              resolve(blogs);
          })
          .catch(error => reject(error));
  });
 }
 
 
 function getBlogsFromLocalStorage() {
  const blogs = localStorage.getItem('blogs');
  return blogs ? JSON.parse(blogs) : null;
 }
 
 
 // Məlumatları ekrana yazdıran funksiya
 function displayBlogs(blogs) {
  const blogContainer = document.querySelector('.blog-right-side');
  blogContainer.innerHTML = '';
 
 
  blogs.forEach(blog => {
      const blogDiv = document.createElement('div');
      blogDiv.classList.add('blog');
 
 
      blogDiv.innerHTML = `
          <span id="metadata">${blog.tarix}</span>
          <h3>${blog.title}</h3>
          <a href="" class="text-white">Read the article</a>
      `;
 
 
      blogContainer.appendChild(blogDiv);
  });
 }
 
 
 // LocalStorage və fetch prosesi yükləmə
 function loadBlogs() {
  const blogs = getBlogsFromLocalStorage();
  if (blogs) {
      console.log('Məlumat localstorageden yüklənir');
      displayBlogs(blogs);
  } else {
      console.log('Fetch ilə yüklənir...');
      fetchBlogs()
          .then(blogs => displayBlogs(blogs))
          .catch(error => console.error('Xeta yarandı', error));
  }
 }
 
 
 // Səhifə yüklənəndə funksiyanın işə düşməsi üçün
 document.addEventListener('DOMContentLoaded', loadBlogs);
 
 
 

// swiper js code
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});





const  swiper3 = new Swiper(".mySwiper3", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
  mousewheel: true,
  keyboard: true,
});

