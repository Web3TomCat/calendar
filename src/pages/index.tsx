import Head from "next/head";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Script from "next/script";
// import GoogleAnalytics from "@/components/GoogleAnalytics";


import { initializeGA } from "@/utilities/google-analytics";




import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from "firebase/analytics";
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyBix0_l0V2BRG8VCuTid97j7yRHIzQtUUA",
  authDomain: "predx-46a86.firebaseapp.com",
  projectId: "predx-46a86",
  storageBucket: "predx-46a86.appspot.com",
  messagingSenderId: "580898390555",
  appId: "1:580898390555:web:72df2516f0ea7a3b412ebe",
  measurementId: "G-95F3FKJH3Q"
};





export default function Home() {


  // useEffect(() => {
  //   // @ts-ignore
  //   if (!window.GA_INITIALIZED) {
  //     initializeGA();
  //     // @ts-ignore
  //     window.GA_INITIALIZED = true;
  //   }
  // }, []);


  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    console.log('app', app)
    const analytics = getAnalytics(app);
    console.log('analytics', analytics)
    // logEvent(analytics, 'notification_received');

  },[])

  return (
    <div >
      {/* <GoogleAnalytics /> */}
      
      
      <main>
        <div style={{ color: '#fff', fontSize: 40}}>GA Demo 1111 </div>
      </main>
      
    </div>
  );

  // return (
  //   <>
  //     <Head>
  //       <title>Tony</title>
  //       <meta name="description" content="Chris Cooper" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="icon" href="./favicon.ico" />
  //       <script
  //         async
  //         src={`https://www.googletagmanager.com/gtag/js?id=G-WEGPVP1Q5D`}
  //       />
  //       <script
  //         dangerouslySetInnerHTML={{
  //           __html: `
  //           window.dataLayer = window.dataLayer || [];
  //           function gtag(){dataLayer.push(arguments);}
  //           gtag('js', new Date());
  //           gtag('config', 'G-WEGPVP1Q5D', {
  //             page_path: window.location.pathname,
  //           });
  //         `,
  //         }}
  //       />
  //       <link rel="preconnect" href="https://fonts.googleapis.com" />
  //       <link rel="preconnect" href="https://fonts.gstatic.com" />
  //       {/* eslint-disable-next-line @next/next/no-page-custom-font */}
  //       <link
  //         href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
  //         rel="stylesheet"
  //       ></link>
  //     </Head>
  //     {/*  */}
  //     <main className="flex flex-col justify-center items-center  gap-10 w-full h-full pt-10 md:pt-16 px-5 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
  //       <div id="blob"></div>
  //       <div className="flex flex-col md:flex-row justify-center items-center gap-8">
  //         {/*  eslint-disable-next-line @next/next/no-img-element */}
  //         <img
  //           alt="profile picture"
  //           src="https://chriscooper0.github.io/calendar/chris.jpeg"
  //           className="rounded-full w-32 h-32 ring-cyan-500 ring-1"
  //         />
  //         <div className="flex flex-col gap-4">
  //           <h1 className="text-3xl font-medium md:text-4xl text-white">
  //             Chris Cooper
  //           </h1>
  //           <div className="flex flex-col gap-1.5">
  //             <p className="font-extralight text-white">
  //               Hey, I&apos;m Chris 👋
  //             </p>
  //             <p className="font-extralight text-white">
  //               I&apos;m a self-taught Software Developer. I also mentor
  //               aspiring & junior developers, helping secure their first jobs in
  //               tech.
  //             </p>
  //             <div className="flex flex-row gap-2">
  //               <a href="https://www.linkedin.com/in/chris--cooper/">
  //                 <FaLinkedin color="#0077b5" size={28} />
  //               </a>
  //               <a href="mailto:christopher.cooper@mail.com">
  //                 <HiOutlineMail color="whitesmoke" size={30} />
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <p className="font-extralight text-white">
  //         Purchase the Junior Developer CV template below.
  //       </p>

  //       <div>
  //         <Script
  //           src="https://chriscooper.ck.page/commerce.js"
  //           async
  //           defer
  //         ></Script>
  //         <a
  //           target="_blank"
  //           className="convertkit-button"
  //           href="https://chriscooper.ck.page/products/web-dev-cv-template"
  //           data-commerce
  //           rel="noreferrer"
  //         >
  //           Junior Developer CV Template
  //         </a>
  //       </div>
  //       <Cal
  //         calLink={process.env.CALLINK ?? ""}
  //         style={{ width: "100%", height: "100%", overflow: "hidden" }}
  //       />
  //       {/* <p className="font-extralight text-white max-w-2xl mt-16">
  //         Note: The Free Web Dev calls are currently stopped due to
  //         availability. Please get in touch via LinkedIn or Email if you would
  //         like to join the waitlist for when they re-open.
  //       </p> */}
  //     </main>
  //   </>
  // );
}
