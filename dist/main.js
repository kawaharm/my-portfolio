(()=>{let e=document.querySelector(".hamburger"),t=document.querySelector(".nav-list"),a=document.querySelectorAll(".nav-link");e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active")})),a.forEach((a=>a.addEventListener("click",(()=>{e.classList.remove("active"),t.classList.remove("active")}))));const s=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));document.querySelectorAll(".hidden").forEach((e=>s.observe(e)));const n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show-skill"):e.target.classList.remove("show-skill")}))}));document.querySelectorAll(".hidden-skill").forEach((e=>n.observe(e))),ScrollOut({targets:".greeting-title",onShown:function(e){e.classList.remove("animate__animated","animate__bounce"),e.offsetWidth,e.classList.add("animate__animated","animate__bounce"),e.style.setProperty("--animate-repeat","infinite"),e.style.setProperty("--animate-delay","2s")}}),ScrollOut({target:".project-title",once:!0,cssProps:!0}),ScrollOut({targets:".backInLeft",onShown:function(e){e.classList.remove("animate__animated","animate__backInLeft"),e.offsetWidth,e.classList.add("animate__animated","animate__backInLeft")}}),ScrollOut({targets:".fadeIn",once:!0,onShown:function(e){e.classList.remove("animate__animated","animate__fadeIn"),e.offsetWidth,e.classList.add("animate__animated","animate__fadeIn"),e.style.setProperty("--animate-duration","2s")}})})();