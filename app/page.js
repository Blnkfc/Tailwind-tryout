import Image from 'next/image'

export default function Home() {
  return (
   <div className={"wrapper flex-col w-full "}>
     <nav className={"flex bg-primary px-24 justify-between items-center text-black h-32"}>
       <div className="logo flex  text-6xl">
         <img src="/assets/logo.png"  className={"w-10 h-10"} alt="logo"/>
         <span>Educate</span>
       </div>
       <div className="navigation flex align-middle flex-grow justify-end ">
         <div className="navigation__list flex font-bold text-3xl w-2/3 justify-around">
           <div className="navigation__list__link ">Home</div>
           <div className="navigation__list__link ">About</div>
           <div className="navigation__list__link ">Courses <span className={"inline-block rotate-90 ml-1 "}>&#10093;</span> </div>
           <div className="navigation__list__link ">Blog <span className={"inline-block rotate-90 ml-1"} >&#10093;</span></div>
         </div>
         <button className="navigation__contact bg-btn_dark text-white font-bold rounded-2xl h-10 text-3xl w-48 text-center ">Contuct us</button>
       </div>
     </nav>
     <header className={"header  flex items-center  px-24 pt-18 "}>
       <div className="header__info mr-10">
         <h1 className={"text-6xl font-bold w-104"} >Start learning with us now</h1>
         <h3 className={"text-2xl mt-8"} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur error ex harum ipsam maiores molestiae natus optio vero voluptatum!</h3>
         <button className={"w-50 h-11 px-4 bg-btn_darker text-white rounded-xl mt-8 "} >Start learning</button>
       </div>
       <img src="/assets/header-img.png" alt="" className=" header__img w-122"/>
     </header>
     <main className={"content"} >
       <div className="content__course">
         <img src="" alt="" className="content__course__img"/></div>
         <div className="content__course__info">
           <h1>Welcome to the online centers</h1>
           <ul>
             <li>Start learning from your experience  </li>
             <li>Enhance your skills with us now</li>
             <li>Do your favorite course</li>
           </ul>
         </div>
       <div className="content__course">
         <div className="content__course__info">
           <h1>Start learning by creating free account and get register</h1>
         </div>
         <img src="" alt="" className="content__course__img"/></div>
       <div className="content__subscription">
         <input type="text"/>
         <input type="text"/>
         <button>Subscribe</button>
       </div>
       <div className="content__community">
         <h1>Start growing with our community</h1>
         <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</h4>
         <button>Join community</button>
       </div>
     </main>
     <footer className={"footer"}>
       <div className="footer__info">
         <div className="footer__info__logo">
           <img src="" alt=""/>
           <span>Educate</span>
         </div>
         <div className="footer__info__socials">
           <h3>Follow us</h3>
           <button></button>
           <button></button>
           <button></button>
           <button></button>
         </div>
         <div className={"footer__info__links"}>
           <h3>Useful links</h3>
           <a href="">Our projects</a>
           <a href="">FAQ's</a>
           <a href="">News and Updates</a>
         </div>
         <div className="footer__info__contacts">
           <h3>Contacts</h3>
           <p>Address : 4-5 Main road , Delhi </p>
           <p>Email : educare@gmail.com</p>
           <p>Phone Number : +91 4533433265</p>
         </div>
       </div>
       <div className="footer__copyrights">All Copyrights reserved</div>
     </footer>
   </div>
  )
}
