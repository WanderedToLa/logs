"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[668],{3587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(7624),o=t(2172);const s={sidebar_position:3},l="Next.js 14",i={id:"FrontEnd/next-14",title:"Next.js 14",description:"- Introduction Next.js \uacf5\uc2dd\ubb38\uc11c",source:"@site/docs/FrontEnd/next-14.md",sourceDirName:"FrontEnd",slug:"/FrontEnd/next-14",permalink:"/docs/FrontEnd/next-14",draft:!1,unlisted:!1,editUrl:"https://github.com/WanderedToLa/logs/tree/master/docs/FrontEnd/next-14.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"WikiSidebar",previous:{title:"FrontEnd\uc758 modal\uad00\ub9ac",permalink:"/docs/FrontEnd/popover"},next:{title:"\uba54\ubaa8",permalink:"/docs/OS/memo"}},a={},d=[{value:"App Router",id:"app-router",level:2},{value:"Route Groups",id:"route-groups",level:2},{value:"Parallel Routes",id:"parallel-routes",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nextjs-14",children:"Next.js 14"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nextjs.org/docs",children:"Introduction"})," Next.js \uacf5\uc2dd\ubb38\uc11c"]}),"\n",(0,r.jsx)(n.li,{children:"\ucc38\uace0\uc6a9\uc73c\ub85c\ub9cc \uc815\ub9ac \uc21c\uc11cX"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"app-router",children:"App Router"}),"\n",(0,r.jsxs)(n.p,{children:["\uc0c8\ub85c\uc6b4 App Router \ub4f1\uc7a5",(0,r.jsx)(n.br,{}),"\n","The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming.",(0,r.jsx)(n.br,{}),"\n","\uae30\uc874\uc758 pages router\ubb38\uc11c\ub3c4 \ub0a8\uc544\uc788\uc73c\ub2c8 \uc120\ud0dd\ud558\uc5ec \ubcfc \uc218 \uc788\uc74c."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pages router"}),"\uc640\ub294 \ub2ec\ub9ac \ud2b9\uc218\ud30c\uc77c\uc778 ",(0,r.jsx)(n.code,{children:"page.js"}),"\uac00 index\uc5ed\ud560\uc744 \ud568"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="app/page.tsx"',children:"// `app/page.tsx` is the UI for the `/` URL\nexport default function Page() {\n  return <h1>Hello, Home page!</h1>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"route-groups",children:"Route Groups"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-groups",children:"Route Groups"}),(0,r.jsx)(n.br,{}),"\n","\uae30\ubcf8\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"app"}),"\uc548\uc5d0 \uc788\ub294 \ud3f4\ub354\ub4e4\uc740 url\uacbd\ub85c\uc5d0 \ud45c\uc2dc\ub418\uc9c0\ub9cc url\uacbd\ub85c\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc73c\uba74\uc11c \uadf8\ub8f9\uc73c\ub85c \ubb36\uc744 \uc218 \uc788\uc74c",(0,r.jsx)(n.br,{}),"\n","\uad04\ud638\ub85c \ubb36\uc5b4 \uc0dd\uc131(folderName) \uc5ec\ub7ec\uac1c\uc758 \ub3c5\ub9bd\uc801\uc778 \ub808\uc774\uc544\uc6c3\uc744 \uac00\uc838\uc57c \ud558\uac70\ub098 \ud2b9\uc815 \ud398\uc774\uc9c0\ub9cc \ub808\uc774\uc544\uc6c3\uc744 \uac00\uc9c8 \ub54c",(0,r.jsx)(n.br,{}),"\n","\uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Route Groups\uc790\uccb4\ub294 \uc870\uc9c1\uc744 \uc704\ud55c\uac83 \uc678\uc5d0\ub294 \ud070 \uc758\ubbf8\uac00 \uc788\uc9c0 \uc54a\uc74c."}),"\n",(0,r.jsxs)(n.li,{children:["Route Groups\ub97c \uc0ac\uc6a9\ud560\ub54c \ub3d9\uc77c\ud55c \uacbd\ub85c\ub97c \uc0ac\uc6a9\ud558\uba74 \uc548\ub428. ",(0,r.jsx)(n.code,{children:"(shop)/about/page.js"})," / ",(0,r.jsx)(n.code,{children:"(marketing)/about/page.js"})]}),"\n",(0,r.jsx)(n.li,{children:"\ucd5c\uc0c1\uc704 layout\ud30c\uc77c\uc774 \uc5c6\uc774 \uc5ec\ub7ec\uac1c\uc758 RootLayout\uc744 \uc0ac\uc6a9\ud558\ub294\uacbd\uc6b0 RouteGroup \uc548\uc5d0 \uc815\uc758\ud574\uc57c\ud568"}),"\n",(0,r.jsx)(n.li,{children:"\uc5ec\ub7ec\uac1c\uc758 RootLayout\uc744 \ud0d0\uc0c9\ud560 \uacbd\uc6b0 \uc804\uccb4 \ud398\uc774\uc9c0\uac00 \ub85c\ub4dc\ub428."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"parallel-routes",children:"Parallel Routes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#useselectedlayoutsegments",children:"Parallel Routes"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\ub3d9\uc77c\ud55c \ub808\uc774\uc544\uc6c3 \ub0b4\uc5d0\uc11c \ud55c\uac1c \uc774\uc0c1\uc758 \ud398\uc774\uc9c0\ub97c \ub3d9\uc2dc \ud639\uc740 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1 \uac00\ub2a5.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Parallel Route"}),"\ub294 ",(0,r.jsx)(n.code,{children:"Slots"}),"\uc73c\ub85c \uc815\uc758 ",(0,r.jsx)(n.code,{children:"@foldername"}),"\uc640 \uac19\uc774 \uc0dd\uc131",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Slot"}),"\uc740 \uc0c1\uc704 \ub808\uc774\uc544\uc6c3\uc5d0 Props\ub85c \uc804\ub2ec\ud558\uc5ec \uc0ac\uc6a9\ud568 \uc774\ub294 url\uacbd\ub85c\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0\uc54a\uc74c."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="app/layout.tsx"',children:"export default function Layout({\n  children,\n  team,\n  analytics,\n}: {\n  children: React.ReactNode;\n  analytics: React.ReactNode;\n  team: React.ReactNode;\n}) {\n  return (\n    <>\n      {children}\n      {team}\n      {analytics}\n    </>\n  );\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>l});var r=t(1504);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);