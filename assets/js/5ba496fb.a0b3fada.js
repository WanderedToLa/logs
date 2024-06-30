"use strict";(self.webpackChunkwanderedtola_blog=self.webpackChunkwanderedtola_blog||[]).push([[384],{1140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(7624),s=t(2172);const o={sidebar_position:3},l="Next.js 14",i={id:"Frontend/next-14",title:"Next.js 14",description:"- Introduction Next.js \uacf5\uc2dd\ubb38\uc11c",source:"@site/docs/Frontend/next-14.md",sourceDirName:"Frontend",slug:"/Frontend/next-14",permalink:"/docs/Frontend/next-14",draft:!1,unlisted:!1,editUrl:"https://github.com/WanderedToLa/logs/tree/master/docs/Frontend/next-14.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"WikiSidebar",previous:{title:"Javascript\uc758 null check",permalink:"/docs/Frontend/js-type"},next:{title:"FrontEnd\uc758 modal\uad00\ub9ac",permalink:"/docs/Frontend/popover"}},c={},d=[{value:"App Router",id:"app-router",level:2},{value:"Route Groups",id:"route-groups",level:2},{value:"Parallel Routes",id:"parallel-routes",level:2},{value:"Intercepting Routes",id:"intercepting-routes",level:2},{value:"Convention",id:"convention",level:3},{value:"API References",id:"api-references",level:2},{value:"Functions",id:"functions",level:3}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nextjs-14",children:"Next.js 14"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nextjs.org/docs",children:"Introduction"})," Next.js \uacf5\uc2dd\ubb38\uc11c"]}),"\n",(0,r.jsx)(n.li,{children:"\ucc38\uace0\uc6a9\uc73c\ub85c\ub9cc \uc815\ub9ac \uc21c\uc11cX"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"app-router",children:"App Router"}),"\n",(0,r.jsxs)(n.p,{children:["\uc0c8\ub85c\uc6b4 App Router \ub4f1\uc7a5",(0,r.jsx)(n.br,{}),"\n","The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming.",(0,r.jsx)(n.br,{}),"\n","\uae30\uc874\uc758 pages router\ubb38\uc11c\ub3c4 \ub0a8\uc544\uc788\uc73c\ub2c8 \uc120\ud0dd\ud558\uc5ec \ubcfc \uc218 \uc788\uc74c."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pages router"}),"\uc640\ub294 \ub2ec\ub9ac \ud2b9\uc218\ud30c\uc77c\uc778 ",(0,r.jsx)(n.code,{children:"page.js"}),"\uac00 index\uc5ed\ud560\uc744 \ud568"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="app/page.tsx"',children:"// `app/page.tsx` is the UI for the `/` URL\nexport default function Page() {\n  return <h1>Hello, Home page!</h1>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"route-groups",children:"Route Groups"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-groups",children:"Route Groups"}),(0,r.jsx)(n.br,{}),"\n","\uae30\ubcf8\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"app"}),"\uc548\uc5d0 \uc788\ub294 \ud3f4\ub354\ub4e4\uc740 url\uacbd\ub85c\uc5d0 \ud45c\uc2dc\ub418\uc9c0\ub9cc url\uacbd\ub85c\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc73c\uba74\uc11c \uadf8\ub8f9\uc73c\ub85c \ubb36\uc744 \uc218 \uc788\uc74c",(0,r.jsx)(n.br,{}),"\n","\uad04\ud638\ub85c \ubb36\uc5b4 \uc0dd\uc131(folderName) \uc5ec\ub7ec\uac1c\uc758 \ub3c5\ub9bd\uc801\uc778 \ub808\uc774\uc544\uc6c3\uc744 \uac00\uc838\uc57c \ud558\uac70\ub098 \ud2b9\uc815 \ud398\uc774\uc9c0\ub9cc \ub808\uc774\uc544\uc6c3\uc744 \uac00\uc9c8 \ub54c",(0,r.jsx)(n.br,{}),"\n","\uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Route Groups\uc790\uccb4\ub294 \uc870\uc9c1\uc744 \uc704\ud55c\uac83 \uc678\uc5d0\ub294 \ud070 \uc758\ubbf8\uac00 \uc788\uc9c0 \uc54a\uc74c."}),"\n",(0,r.jsxs)(n.li,{children:["Route Groups\ub97c \uc0ac\uc6a9\ud560\ub54c \ub3d9\uc77c\ud55c \uacbd\ub85c\ub97c \uc0ac\uc6a9\ud558\uba74 \uc548\ub428. ",(0,r.jsx)(n.code,{children:"(shop)/about/page.js"})," / ",(0,r.jsx)(n.code,{children:"(marketing)/about/page.js"})]}),"\n",(0,r.jsx)(n.li,{children:"\ucd5c\uc0c1\uc704 layout\ud30c\uc77c\uc774 \uc5c6\uc774 \uc5ec\ub7ec\uac1c\uc758 RootLayout\uc744 \uc0ac\uc6a9\ud558\ub294\uacbd\uc6b0 RouteGroup \uc548\uc5d0 \uc815\uc758\ud574\uc57c\ud568"}),"\n",(0,r.jsx)(n.li,{children:"\uc5ec\ub7ec\uac1c\uc758 RootLayout\uc744 \ud0d0\uc0c9\ud560 \uacbd\uc6b0 \uc804\uccb4 \ud398\uc774\uc9c0\uac00 \ub85c\ub4dc\ub428."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"parallel-routes",children:"Parallel Routes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#useselectedlayoutsegments",children:"Parallel Routes"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\ub3d9\uc77c\ud55c \ub808\uc774\uc544\uc6c3 \ub0b4\uc5d0\uc11c \ud55c\uac1c \uc774\uc0c1\uc758 \ud398\uc774\uc9c0\ub97c \ub3d9\uc2dc \ud639\uc740 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1 \uac00\ub2a5.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Parallel Route"}),"\ub294 ",(0,r.jsx)(n.code,{children:"Slots"}),"\uc73c\ub85c \uc815\uc758 ",(0,r.jsx)(n.code,{children:"@foldername"}),"\uc640 \uac19\uc774 \uc0dd\uc131",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Slot"}),"\uc740 \uc0c1\uc704 \ub808\uc774\uc544\uc6c3\uc5d0 Props\ub85c \uc804\ub2ec\ud558\uc5ec \uc0ac\uc6a9\ud568 \uc774\ub294 url\uacbd\ub85c\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0\uc54a\uc74c."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="app/layout.tsx"',children:"export default function Layout({\n  children,\n  team,\n  analytics,\n}: {\n  children: React.ReactNode;\n  analytics: React.ReactNode;\n  team: React.ReactNode;\n}) {\n  return (\n    <>\n      {children}\n      {team}\n      {analytics}\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"intercepting-routes",children:"Intercepting Routes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes",children:"Intercepting Routes"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["url\uc744 intercept\ud558\uc5ec \uc11c\ub85c\ub2e4\ub978 url\uc744 \ub3d9\uc2dc\uc5d0 \ud654\uba74\uc5d0 \ub744\uc6b8\uc218\uc788\uc74c.",(0,r.jsx)(n.br,{}),"\n","\uc608\ub97c\ub4e4\uc5b4 \ud53c\ub4dc\uc5d0\uc11c \uc0ac\uc9c4\uc744 \ud074\ub9ad",(0,r.jsx)(n.code,{children:"photo/123"})," \ud560\ub54c \uc758 \uacbd\ub85c\ub97c \uac00\ub85c\ucc44 url\uc744 \uac00\ub9ac\uace0 \uc624\ubc84\ub808\uc774\ub85c \uc804\ud658 ",(0,r.jsx)(n.code,{children:"/feed"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"convention",children:"Convention"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"(..)"}),"\uc640 \uac19\uc740 \uaddc\uce59\uc744 \ub530\ub984 \ud3f4\ub354 \uc0c1\ub300\uacbd\ub85c \uaddc\uce59",(0,r.jsx)(n.code,{children:"../"}),"\uacfc \uc720\uc0ac\ud568",(0,r.jsx)(n.br,{}),"\n","\uc774\ub97c \ud65c\uc6a9\ud558\uc5ec \ubaa8\ub2ec\uc744 \ub9cc\ub4e4\ub54c \uc720\uc6a9\ud568"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"url\uc744 \ud1b5\ud574 \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub2ec \uc0dd\uc131"}),"\n",(0,r.jsx)(n.li,{children:"\ubaa8\ub2ec\uc744 \ub2eb\ub294\ub300\uc2e0 \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce60 \ub54c \ucee8\ud14d\uc2a4\ud2b8 \uc720\uc9c0"}),"\n",(0,r.jsx)(n.li,{children:"\uc774\uc804 \uacbd\ub85c\ub85c \uc774\ub3d9\ud558\ub294 \ub300\uc2e0 \ubaa8\ub2ec\uc744 \ub2eb\uc744 \uc218 \uc788\uc74c"}),"\n",(0,r.jsx)(n.li,{children:"\uc55e\uc73c\ub85c \uc774\ub3d9\uc2dc \ubaa8\ub2ec \uc0dd\uc131"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"api-references",children:"API References"}),"\n",(0,r.jsx)(n.p,{children:"The Next.js API reference"}),"\n",(0,r.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"useSelectedLayoutSegment"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ud638\ucd9c\ub41c \ub808\uc774\uc544\uc6c3\uc758 ",(0,r.jsx)(n.code,{children:"1 depth"}),"\uc544\ub798\uc758 active route\ub97c \uc77d\uc744 \uc218 \uc788\ub294 client component hook"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="app/example-client-component.tsx"',children:"'use client';\n\nimport { useSelectedLayoutSegment } from 'next/navigation';\n\nexport default function ExampleClientComponent() {\n  const segment = useSelectedLayoutSegment();\n\n  return <p>Active segment: {segment}</p>;\n}\n\n// app/layout.js ->\t/dashboard ->\treturn 'dashboard'\n// app/dashboard/layout.js ->\t/dashboard -> return\tnull\n// app/dashboard/layout.js ->\t/dashboard/analytics/monthly ->\treturn 'analytics'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc120\ud0dd\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"parallelRoutesKey"}),"\ub97c \uc77d\uc744 \uc218 \uc788\uc74c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const segment = useSelectedLayoutSegment(parallelRoutesKey?: string)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>l});var r=t(1504);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);