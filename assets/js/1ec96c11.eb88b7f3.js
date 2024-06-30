"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[576],{8320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=t(7624),r=t(2172);const i={sidebar_position:5},l="[WOOWACON 2023] \ud504\ub860\ud2b8\uc5d4\ub4dc \uc0c1\ud0dc\uad00\ub9ac \uc2e4\uc804 \ud3b8 with React Query & Zustand",d={id:"Frontend/woowa-state-manage",title:"[WOOWACON 2023] \ud504\ub860\ud2b8\uc5d4\ub4dc \uc0c1\ud0dc\uad00\ub9ac \uc2e4\uc804 \ud3b8 with React Query & Zustand",description:"\uc608\uc81c\ucf54\ub4dc\ub294 \uc81c\uc678\ud588\uc2b5\ub2c8\ub2e4",source:"@site/docs/Frontend/woowa-state-manage.md",sourceDirName:"Frontend",slug:"/Frontend/woowa-state-manage",permalink:"/docs/Frontend/woowa-state-manage",draft:!1,unlisted:!1,editUrl:"https://github.com/WanderedToLa/logs/tree/master/docs/Frontend/woowa-state-manage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"WikiSidebar",previous:{title:"FrontEnd\uc758 modal\uad00\ub9ac",permalink:"/docs/Frontend/popover"},next:{title:"\uba54\ubaa8",permalink:"/docs/OS/memo"}},c={},a=[{value:"\ubc30\uacbd",id:"\ubc30\uacbd",level:2},{value:"\uc0c1\ud0dc\uad00\ub9ac \ubc29\ubc95\uc758 \ubcc0\ud654",id:"\uc0c1\ud0dc\uad00\ub9ac-\ubc29\ubc95\uc758-\ubcc0\ud654",level:2},{value:"ReactQuery/Zustand \ub3c4\uc785 \ubc30\uacbd",id:"reactqueryzustand-\ub3c4\uc785-\ubc30\uacbd",level:2},{value:"Redux vs ReactQuery",id:"redux-vs-reactquery",level:2},{value:"Redux vs Zustand",id:"redux-vs-zustand",level:2},{value:"\ud45c\uc900 \uac1c\ubc1c \ud658\uacbd \uc124\uc815 \ubc0f \ud65c\uc6a9",id:"\ud45c\uc900-\uac1c\ubc1c-\ud658\uacbd-\uc124\uc815-\ubc0f-\ud65c\uc6a9",level:2},{value:"queries \uc640 stores \ud65c\uc6a9",id:"queries-\uc640-stores-\ud65c\uc6a9",level:2},{value:"1. Component Layer",id:"1-component-layer",level:3},{value:"2. Business Layer/hooks",id:"2-business-layerhooks",level:3},{value:"3. Store Layer/queries",id:"3-store-layerqueries",level:3},{value:"4. Store Layer/stores",id:"4-store-layerstores",level:3},{value:"\uc544\ud0a4\ud14d\uccd0 Layer\uc758 \ubcf8\uc9c8",id:"\uc544\ud0a4\ud14d\uccd0-layer\uc758-\ubcf8\uc9c8",level:2},{value:"\uc601\uc0c1 \ud55c\uc904 \ud3c9",id:"\uc601\uc0c1-\ud55c\uc904-\ud3c9",level:2}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"woowacon-2023-\ud504\ub860\ud2b8\uc5d4\ub4dc-\uc0c1\ud0dc\uad00\ub9ac-\uc2e4\uc804-\ud3b8-with-react-query--zustand",children:"[WOOWACON 2023] \ud504\ub860\ud2b8\uc5d4\ub4dc \uc0c1\ud0dc\uad00\ub9ac \uc2e4\uc804 \ud3b8 with React Query & Zustand"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\uc608\uc81c\ucf54\ub4dc\ub294 \uc81c\uc678\ud588\uc2b5\ub2c8\ub2e4"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=nkXIpGjVxWU&list=PLgXGHBqgT2TundZ81MAVHPzeYOTeII69j&index=21",children:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc0c1\ud0dc\uad00\ub9ac \uc2e4\uc804 \ud3b8 with React Query & Zustand"})}),"\n",(0,s.jsx)(n.li,{children:"\ucf54\uc5b4\uc6f9\ud504\ub860\ud2b8\uac1c\ubc1c\ud300 \ubc30\ubbfc\uadfc"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ubc30\uacbd",children:"\ubc30\uacbd"}),"\n",(0,s.jsxs)(n.p,{children:["State(\uc0c1\ud0dc)\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uba54\ubaa8\ub9ac\uc774\ub2e4. \ud604\uc7ac \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc758 \uc911\uc2ec\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc788\uace0",(0,s.jsx)(n.br,{}),"\n","\ub9ce\uc740 \ubc1c\uc804\uc744 \uac70\ub4ed\ud558\uba74\uc11c \ub2e8\uc21c \uc815\uc801\ud398\uc774\uc9c0\uac00 \uc544\ub2cc \ud31d\uc5c5\uc774\ub098 \uc8fc\ubb38/\ubc30\ub2ec\uc758 \uc9c4\ud589\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uc218\ub9ce\uc740 \uc778\ud130\ub799\uc158\uc744 \ub2f4\ub2f9\ud558\uac8c \ub418\uc5c8\uc74c.",(0,s.jsx)(n.br,{}),"\n","\uc774\ub7f0 \uc0c1\ud0dc\ub294 \ub300\ud45c\uc801\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"useState"}),"\uc640 \uac19\uc774 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uadc0\uc18d\ub418\uc5b4 \uc788\ub294 \uac1c\ub150\uc774\uc9c0\ub9cc",(0,s.jsx)(n.br,{}),"\n","\ud504\ub85c\ub355\ud2b8 \uc804\ubc18\uc5d0 \uac78\uccd0 \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ub420 \uc218 \ub3c4 \uc788\ub294\ub370 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uadc0\uc18d\ub418\uc5b4 \uc788\uc9c0\uc54a\ub294 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\uad00\ub9ac \ubc29\ubc95\ub860\uc744 \ud544\uc694\ub85c \ud568"]}),"\n",(0,s.jsx)(n.h2,{id:"\uc0c1\ud0dc\uad00\ub9ac-\ubc29\ubc95\uc758-\ubcc0\ud654",children:"\uc0c1\ud0dc\uad00\ub9ac \ubc29\ubc95\uc758 \ubcc0\ud654"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \uacc4\uce35\ubd84\ub9ac"}),"\n",(0,s.jsx)(n.li,{children:"Props Drilling"}),"\n",(0,s.jsx)(n.li,{children:"Redux"}),"\n",(0,s.jsx)(n.li,{children:"MobX\ub4f1 \ud6c4\ubc1c\uc8fc\uc790 \ub4f1\uc7a5 (Redux\uc758 \ucf54\ub4dc\uac00 \ub108\ubb34 \ub9ce\uc74c)"}),"\n",(0,s.jsx)(n.li,{children:"React Hooks/Context API \uc640 \uae30\uc874 \uc0c1\ud0dc\uad00\ub9ac\uc758 \ud55c\uacc4 \ub3c4\ub2ec"}),"\n",(0,s.jsx)(n.li,{children:"Post Redux \uc0c1\ud0dc\uad00\ub9ac (Recoil,Zustand..)"}),"\n",(0,s.jsx)(n.li,{children:"\uc6d0\uaca9 \uc0c1\ud0dc\uad00\ub9ac \ubc29\ubc95 \ubd84\ub9ac\uc2dc\ub3c4(React-query, SWR..)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reactqueryzustand-\ub3c4\uc785-\ubc30\uacbd",children:"ReactQuery/Zustand \ub3c4\uc785 \ubc30\uacbd"}),"\n",(0,s.jsxs)(n.p,{children:["Store\uac00 \ud06c\uace0 \ubcf5\uc7a1\ud574\uc9c0\uba74\uc11c \uc0c1\ud0dc\uad00\ub9ac\ub77c\uae30 \ubcf4\ub2e4 API\ub97c \ud638\ucd9c\ud558\ub294 \ucf54\ub4dc\uac00 \ub354 \ub9ce\uc544\uc9d0",(0,s.jsx)(n.br,{}),"\n","\uc0c1\ud0dc\uad00\ub9ac\ub97c \uc704\ud55c \ub3c4\uad6c\uc778\ub370 API fetching\uc6a9\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc801\uc808\ud55c\uac00? -> ReactQuery",(0,s.jsx)(n.br,{}),"\n","Store\ub294 \uac04\ub2e8\ud574\uc84c\uc9c0\ub9cc \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubcf5\uc7a1\uc131 \uc99d\uac00, \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \ub300\ubd80\ubd84\uc774 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc788\uc74c",(0,s.jsx)(n.br,{}),"\n","\uc5bc\ub9c8 \ub0a8\uc544\uc788\uc9c0\ub3c4 \uc54a\uc740 \uc0c1\ud0dc\ub97c \uad73\uc774 MobX\ub85c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\uac00? -> Zustand"]}),"\n",(0,s.jsxs)(n.p,{children:["\ub530\ub77c\uc11c Client\uc5d0\uc11c \uc628\uc804\ud788 \uad00\ub9ac\uac00\ub2a5\ud55c \uc0c1\ud0dc\ub294 Zustand\ub85c, Client \uc678\ubd80\uc5d0\uc11c \uc18c\uc720\ud558\uba70",(0,s.jsx)(n.br,{}),"\n","Server State\uc778 \uacbd\uc6b0\ub294 React Query\ub85c \uad00\ub9ac\ud55c\ub2e4.(Client\uc5d0\uc11c\ub294 \uc77c\uc885\uc758 \uce90\uc2dc\ud615\ud0dc\ub85c \uc874\uc7ac\ud568)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://techblog.woowahan.com/6339/",children:"Store\uc5d0\uc11c \ube44\ub3d9\uae30 \ud1b5\uc2e0 \ubd84\ub9ac\ud558\uae30 (feat. React Query)"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"redux-vs-reactquery",children:"Redux vs ReactQuery"}),"\n",(0,s.jsx)(n.p,{children:"\ud300 \ub0b4 \ub3c4\uba54\uc778\ub4e4\uc774 \uc11c\ubc84\uc640 \uc720\uae30\uc801\uc73c\ub85c \uc5bd\ud600\uc788\uc73c\uba74\uc11c \ube44\ub3d9\uae30 \ud638\ucd9c \uc804\ub7b5\uc774 \uc694\uad6c\ub418\ubbc0\ub85c ReactQuery\uac00 \uc801\ud569\ud558\ub2e4."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"API \ud638\ucd9c \ucf54\ub4dc\ub85c \ube44\ub300\ud574\uc9c4 Store\ub97c \ubaa9\uc801\uc5d0 \ub9de\uac8c \ubd84\ub9ac\ud568"}),"\n",(0,s.jsx)(n.li,{children:"\ub9ac\uc5d1\ud2b8 \ud6c5\uacfc \ube44\uc2b7\ud55c \uc9c1\uad00\uc801\uc778 \uc0ac\uc6a9\uc131"}),"\n",(0,s.jsx)(n.li,{children:"\uc5ec\ub7ec \uc778\ud130\ud398\uc774\uc2a4&\uc635\uc158\uc744 \uc81c\uacf5\ud574 \uc801\uc740 \ucf54\ub4dc\ub85c \uac15\ub825\ud558\uac8c \ub3d9\uc791"}),"\n",(0,s.jsx)(n.li,{children:"\uc790\uccb4 \uac1c\ubc1c\ub3c4\uad6c \uc81c\uacf5"}),"\n"]}),"\n",(0,s.jsx)("h3",{children:"1. API\ud638\ucd9c\ucf54\ub4dc\uc5d0 Polling\uc744 \uad6c\ud604\ud560 \ub54c"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Redux"}),(0,s.jsx)(n.th,{children:"ReactQuery"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1. Action \uc120\uc5b8"}),(0,s.jsx)(n.td,{children:"1. Query \uc120\uc5b8 + \uc635\uc158"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2. State \ucd94\uac00"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3. Reducer \ub300\uc751"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4. saga \ud3f4\ub9c1 \uad6c\ud604"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5. \ucef4\ud3ec\ub10c\ud2b8 \uc5f0\uacb0"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)("h3",{children:"2. API \ud638\ucd9c \uc0c1\ud0dc \ud655\uc778"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Redux"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"ReactQuery"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"1. State \ucd94\uac00"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"1. Query\uc5d0\uc11c \uc81c\uacf5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2. Reducer \ub300\uc751"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"3. \ucef4\ud3ec\ub10c\ud2b8 \uc5f0\uacb0"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"redux-vs-zustand",children:"Redux vs Zustand"}),"\n",(0,s.jsxs)(n.p,{children:["\uc678\ubd80 \uc0c1\ud0dc\uad00\ub9ac \ub3c4\uad6c\uc758 \uc758\uc874\ub3c4\uac00 \ub0ae\uc740 \ud300 \ub0b4 \ucf54\ub4dc\uc640",(0,s.jsx)(n.br,{}),"\n","\uc804\uc5ed \uc0c1\ud0dc\ub97c \ucd5c\uc18c\ud654\ud558\ub294 \ud300 \ubc29\ud5a5\uc131\uc5d0 \uc801\ud569"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ubc16\uc5d0\uc11c\ub3c4 \uc0c1\ud0dc\ubcc0\uacbd \uac00\ub2a5"}),"\n",(0,s.jsx)(n.li,{children:"\uc0ac\uc6a9\uc131\uc774 \ub2e8\uc21c\ud568"}),"\n",(0,s.jsx)(n.li,{children:"\uc0c1\ud0dc\uad00\ub9ac\uc5d0 \ud544\uc694\ud55c \ucf54\ub4dc\uac00 \uc801\uc74c"}),"\n",(0,s.jsx)(n.li,{children:"Redux Devtools \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8 \ud65c\uc6a9\uac00\ub2a5"}),"\n"]}),"\n",(0,s.jsx)("h3",{children:"1. Store \uad6c\ud604"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Redux"}),(0,s.jsx)(n.th,{children:"Zustand"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1. \uc2a4\ud1a0\uc5b4 \ubc0f \uc0c1\ud0dc \uc120\uc5b8"}),(0,s.jsx)(n.td,{children:"1. \uc2a4\ud1a0\uc5b4\uc5d0 \ubaa8\ub450 \uad6c\ud604"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2. Action \uc120\uc5b8"}),(0,s.jsx)(n.td,{children:"2. \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud638\ucd9c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3. Reducer \uad6c\ud604"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4. Provider \uc5f0\uacb0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5. \ucef4\ud3ec\ub10c\ud2b8 \uc5f0\uacb0"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\ud45c\uc900-\uac1c\ubc1c-\ud658\uacbd-\uc124\uc815-\ubc0f-\ud65c\uc6a9",children:"\ud45c\uc900 \uac1c\ubc1c \ud658\uacbd \uc124\uc815 \ubc0f \ud65c\uc6a9"}),"\n",(0,s.jsx)(n.p,{children:"\ub808\uc774\uc5b4\ub97c 5\uac1c\ub85c \uad6c\ubd84\ud558\uc5ec \uad00\ub9ac"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Page Layer"}),"\n",(0,s.jsx)(n.li,{children:"Component Layer"}),"\n",(0,s.jsx)(n.li,{children:"Business Layer (Hooks, Services)"}),"\n",(0,s.jsx)(n.li,{children:"Store Layer (Queries, Stores)"}),"\n",(0,s.jsx)(n.li,{children:"Utility Layer"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"queries-\uc640-stores-\ud65c\uc6a9",children:"queries \uc640 stores \ud65c\uc6a9"}),"\n",(0,s.jsx)(n.h3,{id:"1-component-layer",children:"1. Component Layer"}),"\n",(0,s.jsx)(n.p,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ub2e8\uc5d0\uc11c hooks, store, services\ub97c \ud638\ucd9c\ud568"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="PocketListContainer.tsx"',children:"const PocketListContainer = () => {\n  //...\n\n  //zustand\n  const { handler } = useBaeminpayModuleStore();\n  const { selectedPocket, onSelectPocket } = usePayMethodStore();\n\n  //hooks\n  const { pocketList } = usePocketListViewModel();\n\n  const handleSelectPocket = async (pocket: PocketItemViewModel) => {\n    //services\n    sendPocketSelectLog();\n  };\n\n  //...\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-business-layerhooks",children:"2. Business Layer/hooks"}),"\n",(0,s.jsxs)(n.p,{children:["pocketList\ub97c \ub9ac\ud134\ud558\uae30 \uc704\ud574 4\uac1c\uc758 \ucffc\ub9ac \ud638\ucd9c, store\ub97c \ud638\ucd9c\ud558\uace0 covertViewModel\uc744 \ud1b5\ud574 \ub370\uc774\ud130 \uac00\uacf5",(0,s.jsx)(n.br,{}),"\n","\ucef4\ud3ec\ub10c\ud2b8\ub2e8\uc5d0\uc11c \ucffc\ub9ac \ud638\ucd9c\uc744 \ud588\ub2e4\uba74 \uac00\ub3c5\uc131\uc774 \uc800\ud558\ub428"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="usePocketListViewModel.ts"',children:"const usePocketListViewModel = () => {\n  // queries\n  const { data: baeminpayPocketListData } = useFetchBaeminpayPocketListQuery();\n  const { data: baeminpayMemberInfoData } = useFetchBaeminpayMemberInfoQuery();\n  const { data: baeminpayMoneyInfoData } = useFetchBaeminpayMoneyInfoQuery();\n  const { data: baeminpayMoneyAMLStatusData } = useFetchBaeminpayMoneyAMLStatusQuery();\n\n  // store\n  const { config } = useBaeminpayModuleStore();\n\n  const convertPocketList = useMemo(() => {\n    //...\n    return convertPocketListViewModel({\n      // \ub370\uc774\ud130 \uac00\uacf5\n    });\n  }, []);\n\n  //...\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-store-layerqueries",children:"3. Store Layer/queries"}),"\n",(0,s.jsxs)(n.p,{children:["API \ud638\ucd9c\uc2dc global state\ub97c \ucc38\uc870\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uae30\ub9c8\ub828",(0,s.jsx)(n.br,{}),"\n","\ub530\ub77c\uc11c \ucffc\ub9ac\ub0b4\ubd80\uc5d0\uc11c\ub3c4 store\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0 \uc874\uc7ac \uc678\ubd80\uc5d0\uc11c \ubc1b\ub294\uacbd\uc6b0\ub3c4 \uc788\uace0 store\uc5d0\uc11c \ubc1b\uc744 \uc218\ub3c4 \uc788\uc74c",(0,s.jsx)(n.br,{}),"\n","\ubcf8\uc778\uc774 \uc9c0\ud5a5\ud558\ub294 \ubc14\uc5d0\ub530\ub77c \uacb0\uc815"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="useFetchBaeminpayPocketListQuery.ts"',children:"const baeminpayQueryKey = createQueryKey('baeminpay', {\n  pocketList: (params: FetchBaeminpayPocketListRequest) => [params],\n});\n\nexport const useFetchBaeminpayPocketListQuery = (options?: { enabled: boolean }) => {\n  // store\n  const { user } = useBaeminpayModuleStore();\n\n  return useQuery({\n    context: queryContext,\n    //...\n  });\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-store-layerstores",children:"4. Store Layer/stores"}),"\n",(0,s.jsx)(n.p,{children:"\uc77c\ubc18\uc801\uc778 store\uc758 \ud615\ud0dc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="useBaeminpayModuleStore.ts"',children:"export const useBaeminpayModuleStore = create<ModuleDataStore>(() => ({\n  initialized: false,\n  //...\n}));\n\nexport const initializeBaeminpayModule = (moduleData: ModuleData) => {\n  useBaeminpayModuleStore.setState({\n    ...moduleData,\n    initialized: true,\n  });\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\uc544\ud0a4\ud14d\uccd0-layer\uc758-\ubcf8\uc9c8",children:"\uc544\ud0a4\ud14d\uccd0 Layer\uc758 \ubcf8\uc9c8"}),"\n",(0,s.jsxs)(n.p,{children:["\uac04\ub2e8\ud55c \ud398\uc774\uc9c0\uc77c \uacbd\uc6b0 \uc704\uc640 \uac19\uc740 \uacfc\uc815\uc740 \ubd88\ud544\uc694\ud558\ub2e4 \ud615\uc2dd\uc5d0 \uc9d1\uc911\ud558\uc9c0 \ub9d0\uace0 \ubcf8\uc9c8\uc744 \ubc14\ub77c\ubcf4\uc790",(0,s.jsx)(n.br,{}),"\n","\uc704\uc640 \uac19\uc740 Layer \uad6c\uc870\ub97c \uc120\ud0dd\ud55c \uc774\uc720\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc9d1\uc911\ub41c \ub85c\uc9c1\uc744 \uc801\uc808\ud788 \ubd84\ubc30\ud558\uace0 \uac00\ub3c5\uc131/\uac1c\ubc1c\uc790 \uacbd\ud5d8\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud55c \uac83",(0,s.jsx)(n.br,{}),"\n","Class\uc758 \ub2e8\uc77c\ucc45\uc784\uc6d0\uce59\uae4c\uc9c0\ub294 \uc5b4\ub835\uc9c0\ub9cc \uc5ed\ud560\uc744 \uc801\uc808\ud788 \ubd84\uc0b0\uc2dc\ucf1c \uc720\uc9c0\ubcf4\uc218\uc5d0 \uc6a9\uc774\ud558\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\uc601\uc0c1-\ud55c\uc904-\ud3c9",children:"\uc601\uc0c1 \ud55c\uc904 \ud3c9"}),"\n",(0,s.jsx)(n.p,{children:"\uc6d0\ub798 \uc801\uc808\ud788\uac00 \uc81c\uc77c \uc5b4\ub824\uc6c0"})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>l});var s=t(1504);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);