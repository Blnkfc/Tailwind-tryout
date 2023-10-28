import Image from 'next/image'

export default function Home() {
  return (
   <div className={"wrapper flex-col w-full "}>
     <nav className={
       "flex bg-primary justify-between items-center text-black     " +
         "xl:h-32 lg:h-32 md:h-18 sm:h-18    " +
         "xl:px-24 lg:px-24 md:px-16 sm:px-16    "}>
       <div className="logo flex   xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl ">
         <img src="/assets/logo.png"
              className={"xl:w-10 lg:w-8 md:w-6 sm:w-6     xl:h-10 lg:h-8 md:h-6 sm:h-6 "} alt="logo"/>
         <span>Educate</span>
       </div>
       <div className="navigation flex align-middle flex-grow justify-end ">
         <div className="navigation__list flex font-bold
         xl:text-3xl lg:text-2xl md:text-lg sm:text-sm     w-2/3 justify-around  ">
           <div className="navigation__list__link ">Home</div>
           <div className="navigation__list__link ">About</div>
           <div className="navigation__list__link ">Courses <span className={"inline-block rotate-90 ml-1 "}>&#10093;</span> </div>
           <div className="navigation__list__link ">Blog <span className={"inline-block rotate-90 ml-1"} >&#10093;</span></div>
         </div>
         <button className="navigation__contact bg-btn_dark text-white font-bold
         xl:rounded-2xl lg:rounded-2xl md:rounded-xl sm:rounded-lg
         xl:h-10 lg:h-10 md:h-8 sm:h-6
         xl:text-3xl lg:text-3xl md:text-lg sm:text-base
         xl:w-48 lg:w-48 md:w-32 sm:w-28
         text-center ">
           Contact us
         </button>
       </div>
     </nav>

     <header className={"header  flex items-center   xl:px-24 lg:px-24 md:px-16 sm:px-16    xl:pt-18 lg:pt-18 sm:pt-10 "}>
       <div className="header__info    xl:mr-10 lg:mr-10 md:mr-6 sm:mr-6  ">
         <h1 className={" font-bold    xl:w-104 lg:w-104 md:w-64 sm:w-52     xl:text-6xl lg:text-6xl md:text-3xl sm:text-xl "} >
           Start learning with us now
         </h1>
         <h3 className={" xl:text-2xl lg:text-2xl md:text-lg sm:text-xs    xl:mt-8 lg:mt-8 md:mt-2 sm:mt-2 "} >
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur error ex harum ipsam maiores molestiae natus optio vero voluptatum!
         </h3>
         <button className={"xl:w-52 lg:w-52 md:w-36 sm:w-32    xl:h-11 lg:h-11 md:h-10 sm:h-8    xl:px-4 lg:px-4 md:px-3 sm:px-2  " +
             "bg-btn_darker text-white     xl:rounded-xl lg:rounded-xl md:rounded-lg sm:rounded-lg     xl:mt-8 lg:mt-8 md:mt-6 sm:mt-4 "} >
           Start learning
         </button>
       </div>
       <img src="/assets/header-img.png" alt="" className=" header__img xl:w-122 lg:w-122 md:w-96 sm:w-72" />
     </header>
     <main className={"content xl:mt-56 lg:mt-56 md:mt-28 sm:mt-16     xl:px-24 lg:px-24 md:px-16 sm:px-16 "} >
       <div className="content__course flex items-center ">
         <img src="/assets/content-course.png" alt=""
              className="content__course__img     xl:w-120 lg:w-104 md:w-80 sm:w-64
               xl:h-96 lg:h-80 md:h-60 sm:h-48   xl:mr-24 lg:mr-20 md:mr-12 sm:mr-8 "/>
         <div className="content__course__info ">
           <h1 className={" font-bold   xl:text-6xl lg:text-5xl md:text-3xl sm:text-xl "} >Welcome to the online centers</h1>
           <ul className={" list-disc   xl:text-2xl lg:text-xl md:text-lg sm:text-xs   xl:mt-4 lg:mt-4 md:mt-4 sm:mt-4 "} >
             <li>Start learning from your experience  </li>
             <li>Enhance your skills with us now</li>
             <li>Do your favorite course</li>
           </ul>
         </div>
       </div>
       <div className="content__course flex items-center ">
         <div className="content__course__info font-bold    xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl   xl:mr-24 lg:mr-20 md:mr-12 sm:mr-8 ">
           <h1>Start learning by creating free account and get register</h1>
         </div>
         <img src="/assets/content-course-2.png" alt=""
              className="content__course__img   xl:w-120 lg:w-104 md:w-80 sm:w-64    xl:h-96 lg:h-80 md:h-60 sm:h-48  "/>
       </div>
       <div className="content__subscription flex bg-primary w-full justify-around items-center
         xl:mt-28 lg:mt-24 md:mt-20 sm:mt-16   xl:h-36 lg:h-24 md:h-20 sm:h-20 ">
         <input type="text" placeholder={"Your name"}
                className={"xl:h-16 lg:h-10 md:h-8 sm:h-6    xl:w-72 lg:w-52 md:w-44 sm:w-36 "} />
         <input type="text" placeholder={"Your email address "}
                className={"xl:h-16 lg:h-10 md:h-8 sm:h-6    xl:w-72 lg:w-52 md:w-44 sm:w-36 "} />
         <button className={"bg-btn_dark text-white font-bold    xl:h-16 lg:h-12 md:h-8 sm:h-6   " +
             " xl:w-72 lg:w-52 md:w-36 sm:w-28    xl:text-xl lg:text-xl md:text-md sm:text-base "} >
           Subscribe
         </button>
       </div>
       <div className="content__community bg-community_bg bg-cover w-full
        xl:h-195 lg:h-160 md:h-132 sm:h-104    xl:mt-48 lg:mt-36 md:mt-20 sm:mt-16 ">
         <div className={" flex-col items-center text-center    xl:w-132 lg:w-104 md:w-72 sm:w-64 " +
             "   xl:mt-16 lg:mt-16 md:mt-8 sm:mt-8    xl:ml-16 lg:ml-10 md:ml-4 sm:ml-4 "} >
           <h1 className={" font-bold text-center    xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl    xl:w-132 lg:w-104 md:w-72 sm:w-64 "} >
             Start growing with our community
           </h1>
           <h4 className={"text-center    sm:text-sm    xl:w-132 lg:w-104 md:w-72 sm:w-64     xl:mt-4 lg:mt-4 md:mt-4 sm:mt-2"} >
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.
           </h4>
           <button className={"bg-orange rounded-md text-white   xl:mt-16 lg:mt-10 md:mt-8 sm:mt-4    " +
               "xl:h-16 lg:h-12 md:h-10 sm:h-8   xl:w-64 lg:w-56 md:w-36 sm:w-36   xl:text-xl lg:text-lg md:text-lg sm:text-base "} >
             Join community
           </button>
         </div>
       </div>
     </main>
     <footer className={"footer     md:flex sm:hidden    flex-col justify-between items-center bg-primary      xl:h-104 lg:h-104 md:h-72 sm:h-64 "}>
       <div className="footer__info flex justify-around items-center w-full    xl:mt-28 lg:mt-28 md:mt-16 sm:mt-8 ">
         <div className="footer__info__logo flex">
           <img src="/assets/logo.png" className={"xl:w-10 lg:w-10 md:w-6 sm:w-4    xl:h-10 lg:h-10 md:h-6 sm:h-4 "} alt=""/>
           <span className={"xl:text-4xl lg:text-4xl md:text-2xl sm:text-xl "} >Educate</span>
         </div>
         <div className="footer__info__socials flex-col ">
           <h3 className={"xl:text-xl lg:text-lg md:text-lg    font-bold "} >Follow us</h3>
           <div className="footer__info__social__link flex items-center ">
             <button className={"  bg-cover    xl:w-8 lg:w-8 md:w-6    xl:h-8 lg:h-8 md:h-6    xl:mr-6 lg:mr-6 md:mr-3 "} >
               <img src="/assets/contacts_tw.png" alt=""/>
             </button>
             <button className={"  bg-cover    xl:w-8 lg:w-8 md:w-6    xl:h-8 lg:h-8 md:h-6    xl:mr-6 lg:mr-6 md:mr-3 "} >
               <img src="/assets/contacts_ln.png" alt=""/>
             </button>
             <button className={"  bg-cover    xl:w-9 lg:w-9 md:w-7    xl:h-9 lg:h-9 md:h-7    xl:mr-6 lg:mr-6 md:mr-3 "} >
               <img src="/assets/contacts_fb.png" alt=""/>
             </button>
             <button className={"  bg-cover    xl:w-8 lg:w-8 md:w-6    xl:h-8 lg:h-8 md:h-6    xl:mr-6 lg:mr-6 md:mr-3 "} >
               <img src="/assets/contacts_ig.png" alt=""/>
             </button>
           </div>
         </div>
         <div className={"footer__info__links flex-col "}>
           <h3 className={" font-bold    xl:text-xl lg:text-xl md:text-lg "} >Useful links</h3>
           <ul className={"list-disc    xl:text-lg lg:text-lg md:text-sm "} >
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
           <h3 className={" font-bold    xl:text-xl lg:text-xl md:text-lg "} >Contacts</h3>
           <p className={"xl:text-lg lg:text-lg md:text-sm"} >Address : 4-5 Main road , Delhi </p>
           <p className={"xl:text-lg lg:text-lg md:text-sm"} >Email : educare@gmail.com</p>
           <p className={"xl:text-lg lg:text-lg md:text-sm"} >Phone Number : +91 4533433265</p>
         </div>
       </div>
       <div className="footer__copyrights    xl:mb-14 lg:mb-14 md:mb-10 "> &#169; &nbsp;&nbsp; All Copyrights reserved</div>
     </footer>
     <footer className={"footer     md:hidden sm:flex    flex-col justify-between items-center bg-primary      sm:h-104 "}>
       <div className="footer__info flex  justify-around w-full     sm:mt-8 ">
         <div className="group__1 gap-4 flex flex-col justify-around">
           <div className="footer__info__logo flex">
             <img src="/assets/logo.png" className={"sm:w-8    sm:h-8 "} alt=""/>
             <span className={"sm:text-2xl "} >Educate</span>
           </div>
           <div className="footer__info__socials flex-col ">
             <h3 className={"sm:text-xl    font-bold "} >Follow us</h3>
             <div className="footer__info__social__link flex items-center ">
               <button className={"  bg-cover sm:w-10 sm:h-10    sm:mr-3 "} >
                 <img src="/assets/contacts_tw.png" alt=""/>
               </button>
               <button className={"  bg-cover sm:w-10 sm:h-10    sm:mr-3 "} >
                 <img src="/assets/contacts_ln.png" alt=""/>
               </button>
               <button className={"  bg-cover sm:w-11 sm:h-11    sm:mr-3 "} >
                 <img src="/assets/contacts_fb.png" alt=""/>
               </button>
               <button className={"  bg-cover sm:w-10 sm:h-10    sm:mr-3 "} >
                 <img src="/assets/contacts_ig.png" alt=""/>
               </button>
             </div>
           </div>
         </div>
         <div className="group__2 gap-4 flex flex-col justify-around">
           <div className="footer__info__contacts flex-col ">
             <h3 className={" font-bold   sm:text-xl "} >Contacts</h3>
             <p className={"sm:text-lg  "} >Address : 4-5 Main road , Delhi </p>
             <p className={"sm:text-lg"} >Email : educare@gmail.com</p>
             <p className={"sm:text-lg"} >Phone Number : +91 4533433265</p>
           </div>
           <div className={"footer__info__links flex-col "}>
             <h3 className={" font-bold    xl:text-xl lg:text-xl md:text-lg sm:text-xl "} >Useful links</h3>
             <ul className={"list-disc    xl:text-lg lg:text-lg md:text-sm "} >
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
         </div>
       </div>
       <div className="footer__copyrights    sm:mb-6  "> &#169; &nbsp;&nbsp; All Copyrights reserved</div>
     </footer>
   </div>
  )
}
