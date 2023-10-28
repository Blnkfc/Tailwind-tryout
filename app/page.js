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
     <main className={"content mt-56 px-24 "} >
       <div className="content__course flex items-center ">
         <img src="/assets/content-course.png" alt="" className="content__course__img w-120 h-96 mr-24 "/>
         <div className="content__course__info ">
           <h1 className={"text-6xl font-bold "} >Welcome to the online centers</h1>
           <ul className={"text-2xl list-disc mt-4 "} >
             <li>Start learning from your experience  </li>
             <li>Enhance your skills with us now</li>
             <li>Do your favorite course</li>
           </ul>
         </div>
       </div>
       <div className="content__course flex items-center ">
         <div className="content__course__info text-5xl mr-24 font-bold ">
           <h1>Start learning by creating free account and get register</h1>
         </div>
         <img src="/assets/content-course-2.png" alt="" className="content__course__img w-120 h-96  "/></div>
       <div className="content__subscription flex mt-28 bg-primary w-full justify-around items-center h-36 ">
         <input type="text" placeholder={"Your name"} className={"h-16 w-72 "} />
         <input type="text" placeholder={"Your email address "} className={"h-16 w-72"} />
         <button className={"bg-btn_dark text-white h-16 w-72 text-xl font-bold "} >Subscribe</button>
       </div>
       <div className="content__community bg-community_bg bg-cover w-full h-195 mt-48 ">
         <div className={" flex-col items-center text-center w-132 mt-16 ml-16 "} >
           <h1 className={"text-5xl font-bold w-132 text-center "} >Start growing with our community</h1>
           <h4 className={"w-132 text-center mt-4 "} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</h4>
           <button className={"mt-16 bg-orange rounded-md h-16 w-64 text-xl "} >Join community </button>
         </div>
       </div>
     </main>
     <footer className={"footer flex flex-col justify-between items-center bg-primary h-104 "}>
       <div className="footer__info flex justify-around items-center w-full mt-28 ">
         <div className="footer__info__logo flex">
           <img src="/assets/logo.png" className={"w-10 h-10"} alt=""/>
           <span className={"text-4xl"} >Educate</span>
         </div>
         <div className="footer__info__socials flex-col ">
           <h3 className={"text-xl font-bold "} >Follow us</h3>
           <div className="footer__info__social__link flex items-center ">
             <button className={" bg-cover w-8 h-8 mr-6 "} ><img src="/assets/contacts_tw.png" alt=""/></button>
             <button className={" bg-cover w-8 h-8 mr-6 "} ><img src="/assets/contacts_ln.png" alt=""/></button>
             <button className={" bg-cover w-9 h-9 mr-6 "} ><img src="/assets/contacts_fb.png" alt=""/></button>
             <button className={" bg-cover w-8 h-8 mr-6 "} ><img src="/assets/contacts_ig.png" alt=""/></button>
           </div>
         </div>
         <div className={"footer__info__links flex-col "}>
           <h3 className={" text-xl font-bold "} >Useful links</h3>
           <ul className={"list-disc"} >
             <li>
               <a href="">Our projects</a>
               </li>
             <li>
               <a href="">FAQ&#39;s</a>
             </li>
             <li>
               <a href="">News and Updates</a>
             </li>
           </ul>
         </div>
         <div className="footer__info__contacts flex-col ">
           <h3 className={"text-xl font-bold"} >Contacts</h3>
           <p>Address : 4-5 Main road , Delhi </p>
           <p>Email : educare@gmail.com</p>
           <p>Phone Number : +91 4533433265</p>
         </div>
       </div>
       <div className="footer__copyrights mb-14 "> &#169; &nbsp;&nbsp; All Copyrights reserved</div>
     </footer>
   </div>
  )
}
