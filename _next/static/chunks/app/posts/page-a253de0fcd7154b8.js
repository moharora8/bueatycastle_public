(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991,469,38],{791:function(e,t,r){Promise.resolve().then(r.bind(r,6629)),Promise.resolve().then(r.bind(r,6134)),Promise.resolve().then(r.bind(r,5293)),Promise.resolve().then(r.bind(r,9780)),Promise.resolve().then(r.t.bind(r,2972,23))},6629:function(e,t,r){"use strict";var a=r(7437),i=r(8645),n=r(7183),s=r(7648),o=r(2265),l=r(7942),c=r(5293);t.default=e=>{let{title:t}=e,r=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=i.gsap.context(()=>{let e=document.querySelector(".header");i.gsap.timeline().fromTo(".banner-regular-title",{y:20},{y:0,opacity:1,duration:.5}).fromTo(".breadcrumb",{y:20},{y:0,opacity:1,duration:.5},">-.3");let t=i.gsap.timeline({ease:"none",scrollTrigger:{trigger:r.current,start:()=>"top ".concat(e.clientHeight),end:()=>"+=".concat(r.current.offsetHeight),scrub:!0}}),a=.15*r.current.offsetHeight;t.fromTo(".banner-single .circle",{y:0},{y:a},"<")},r);return()=>e.revert()},[]),(0,a.jsx)("div",{className:"banner banner-single ",ref:r,children:(0,a.jsx)("div",{className:"container-xl ",children:(0,a.jsxs)("div",{className:"banner-wrapper relative text-center",children:[(0,n.gI)(t,"h1","mb-8 banner-regular-title opacity-0"),(0,a.jsxs)("ul",{className:"breadcrumb flex items-center justify-center opacity-0",children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{className:"text-primary",href:"/",children:"Home"})}),(0,a.jsx)("li",{className:"mx-2",children:"/"}),(0,a.jsx)("li",{className:"capitalize",children:t})]}),(0,a.jsxs)("div",{className:"bg-theme banner-bg col-12 absolute left-0 top-0 bg-theme-light before:hidden after:hidden",children:[(0,a.jsx)(c.default,{priority:!0,fill:!0,src:"/images/vectors/single-banner-wave-1.svg",sizes:"100vw",alt:""}),(0,a.jsx)(c.default,{priority:!0,fill:!0,src:"/images/vectors/single-banner-wave-2.svg",sizes:"100vw",alt:""}),(0,a.jsx)(l.Z,{className:"circle left-[15%] top-[18%]",width:32,height:32,fill:!1}),(0,a.jsx)(l.Z,{className:"circle bottom-[27%] left-[4%]",width:73,height:73}),(0,a.jsx)(l.Z,{className:"circle bottom-[27%] left-[39.5%]",width:20,height:20}),(0,a.jsx)(l.Z,{className:"circle bottom-[24%] left-[22%]",width:47,height:47,fill:!1}),(0,a.jsx)(l.Z,{className:"circle left-[31%] top-[10%]",width:62,height:62,fill:!1}),(0,a.jsx)(l.Z,{className:"circle right-[27%] top-[15%]",width:20,height:20,fill:!1}),(0,a.jsx)(l.Z,{className:"circle bottom-[17%] right-[3%]",width:73,height:73,fill:!1}),(0,a.jsx)(l.Z,{className:"circle bottom-[50%] right-[38%]",width:20,height:20,fill:!1}),(0,a.jsx)(l.Z,{className:"circle right-[13%] top-[30%]",width:20,height:20}),(0,a.jsx)(l.Z,{className:"circle bottom-[29%] right-[20%]",width:65,height:65}),(0,a.jsx)(l.Z,{className:"circle bottom-[12%] right-[35%]",width:37,height:37,fill:!1})]})]})})})}},7942:function(e,t,r){"use strict";var a=r(7437);t.Z=function(e){let{className:t,width:r,height:i,fill:n=!0,...s}=e;return(0,a.jsx)("div",{className:"absolute ".concat(t," ").concat(n?"bg-primary":"bg-[#ffe6db]"," rounded-full"),style:{width:"".concat(r,"px"),height:"".concat(i,"px")},...s})}},6134:function(e,t,r){"use strict";var a=r(7437),i=r(8645),n=r(9376),s=r(2265);t.default=e=>{let{children:t}=e,r=(0,s.useRef)(),o=(0,n.usePathname)();return(0,s.useEffect)(()=>{let e=i.gsap.context(()=>{document.querySelectorAll(".fade").forEach(e=>{i.gsap.to(e,{opacity:1,scrollTrigger:e,duration:.3})}),document.querySelectorAll(".animate").forEach(e=>{let t=i.gsap.timeline({scrollTrigger:{trigger:e,start:"top bottom"}});e.classList.contains("from-left")?t.from(e,{opacity:0,x:-100}):e.classList.contains("from-right")?t.from(e,{opacity:0,x:100}):t.from(e,{opacity:0,y:100})}),document.querySelectorAll(".bg-theme").forEach(e=>{i.gsap.to(e,{scrollTrigger:{trigger:e,toggleClass:"bg-animate",once:!0}})})},r);return()=>e.revert()},[o]),(0,a.jsx)("main",{ref:r,children:t})}},5293:function(e,t,r){"use strict";r.r(t);var a=r(7437),i=r(3145),n=r(2265);t.default=e=>{let{src:t,fallback:r,...s}=e,[o,l]=(0,n.useState)(t);return(0,n.useEffect)(()=>{l(t)},[t]),(0,a.jsx)(i.default,{...s,src:o,onError:()=>{l(r)}})}},9780:function(e,t,r){"use strict";var a=r(7437),i=r(7625),n=r(7183),s=r(9376);t.default=e=>{let{title:t,meta_title:r,image:o,description:l,canonical:c,noindex:u}=e,{meta_image:m,meta_author:g,meta_description:d}=i.metadata,{base_url:h}=i.site,p=(0,s.usePathname)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:(0,n.ab)(r||t||i.site.title)}),c&&(0,a.jsx)("link",{rel:"canonical",href:c,itemProp:"url"}),u&&(0,a.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,a.jsx)("meta",{name:"description",content:(0,n.ab)(l||d)}),(0,a.jsx)("meta",{name:"author",content:g}),(0,a.jsx)("meta",{property:"og:title",content:(0,n.ab)(r||t||i.site.title)}),(0,a.jsx)("meta",{property:"og:description",content:(0,n.ab)(l||d)}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(h,"/").concat(p.replace("/",""))}),(0,a.jsx)("meta",{name:"twitter:title",content:(0,n.ab)(r||t||i.site.title)}),(0,a.jsx)("meta",{name:"twitter:description",content:(0,n.ab)(l||d)}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(h).concat(o||m)}),(0,a.jsx)("meta",{name:"twitter:image",content:"".concat(h).concat(o||m)}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},8645:function(e,t,r){"use strict";var a=r(5273),i=r(1342);r.o(a,"gsap")&&r.d(t,{gsap:function(){return a.gsap}}),r.o(i,"gsap")&&r.d(t,{gsap:function(){return i.gsap}}),a.gsap.registerPlugin(i.ScrollTrigger)},7183:function(e,t,r){"use strict";r.d(t,{ab:function(){return s},gI:function(){return n}});var a=r(7437);r(738);var i=r(7970);let n=(e,t,r)=>e?(0,a.jsx)(t||"span",{className:r,dangerouslySetInnerHTML:{__html:"div"===t?i.TU.parse(e):i.TU.parseInline(e)}}):null,s=e=>e?o(i.TU.parseInline(String(e)).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"")):null,o=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},7648:function(e,t,r){"use strict";r.d(t,{default:function(){return i.a}});var a=r(2972),i=r.n(a)},7625:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"BeautyCastle","base_url":"/","y":"/images/favicon.png","logo":"/images/abcd_2.jpeg","logo_width":"240","logo_height":"34","logo_text":"BeautyCastle"},"params":{"footer_content":"Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus, sed condimentum volutpat."},"contact_info":{"phone":"+91 8007347723","email":"abcd@example.io","location":"2118 Thornridge Cir. Syracuse, Connecticut 35624"},"H":{"wp":true,"PS":"Book Your Appointment","p4":"https://themefisher.com/products/andromeda-light-nextjs"},"metadata":{"meta_author":"BeautyCastle","meta_image":"/images/og-image.png","meta_description":"BeautyCastle - Makeup Studio"},"call_to_action":{"enable":true,"title":"Schedule Your Appointment Now","content":"Get ready for a glow-up! Reserve your spot today </br> and enjoy personalized beauty services tailored to your needs and desires.","button":{"label":"Book Your Appointment","link":"/"}},"disqus":{"enable":true,"shortname":"beautycastle","settings":{}}}')}},function(e){e.O(0,[806,412,342,971,117,744],function(){return e(e.s=791)}),_N_E=e.O()}]);