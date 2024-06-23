"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6880],{8256:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"reactiflux-pets","metadata":{"permalink":"/blog/reactiflux-pets","editUrl":"https://github.com/WanderedToLa/logs/tree/master/blog/2024-06-24-pets/index.md","source":"@site/blog/2024-06-24-pets/index.md","title":"\uac15\uc544\uc9c0","description":"\uc694\uc998 \uc624\ud508\uc18c\uc2a4\ub4e4 \ucee4\ubba4\ub2c8\ud2f0\uc5d0 \ucc38\uc5ec\ud558\ub824\uace0 \ub514\uc2a4\ucf54\ub4dc \ucc44\ub110\uc5d0\uc11c \ud1a0\ub860\ud558\ub294\uac70 \uad6c\uacbd\ud558\ub294\ub370","date":"2024-06-24T00:00:00.000Z","formattedDate":"June 24, 2024","tags":[{"label":"pets","permalink":"/blog/tags/pets"},{"label":"reactiflux","permalink":"/blog/tags/reactiflux"}],"readingTime":0.43,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"reactiflux-pets","title":"\uac15\uc544\uc9c0","authors":["WanderedToLa"],"tags":["pets","reactiflux"]},"unlisted":false,"nextItem":{"title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","permalink":"/blog/frontend-observability"}},"content":"\uc694\uc998 \uc624\ud508\uc18c\uc2a4\ub4e4 \ucee4\ubba4\ub2c8\ud2f0\uc5d0 \ucc38\uc5ec\ud558\ub824\uace0 \ub514\uc2a4\ucf54\ub4dc \ucc44\ub110\uc5d0\uc11c \ud1a0\ub860\ud558\ub294\uac70 \uad6c\uacbd\ud558\ub294\ub370  \\nreact \ucee4\ubba4\ub2c8\ud2f0\uc778 Reactiflux \ub514\uc2a4\ucf54\ub4dc\uc5d0 \ubc18\ub824\ub3d9\ubb3c \uc598\uae30\ud558\ub294 \ud0ed\uc774 \uc788\ub2e4 \u314b\u314b.  \\n\ubc18\ub824\ub3d9\ubb3c \uc0ac\ub791\uc740 \ub611\uac19\uc740\ub4ef\\n\\n## pets\\n\\n![pets](../../static/img/reactiflux-pets.png)  \\n\ub098\ub3c4 \uc608\uc804\uc5d0 \ud0a4\uc6b0\ub358 \uac15\uc544\uc9c0 \uc62c\ub9bc"},{"id":"frontend-observability","metadata":{"permalink":"/blog/frontend-observability","editUrl":"https://github.com/WanderedToLa/logs/tree/master/blog/2024-06-22-Observability/index.md","source":"@site/blog/2024-06-22-Observability/index.md","title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","description":"SSR(Server-Side Rendering) \ub3c4\uc785\uc758 \ubcc0\ud654","date":"2024-06-22T00:00:00.000Z","formattedDate":"June 22, 2024","tags":[{"label":"Observability","permalink":"/blog/tags/observability"},{"label":"Frontend","permalink":"/blog/tags/frontend"}],"readingTime":5.355,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"frontend-observability","title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","authors":["WanderedToLa"],"tags":["Observability","Frontend"]},"unlisted":false,"prevItem":{"title":"\uac15\uc544\uc9c0","permalink":"/blog/reactiflux-pets"},"nextItem":{"title":"How To Speak","permalink":"/blog/how-to-speak"}},"content":"## SSR(Server-Side Rendering) \ub3c4\uc785\uc758 \ubcc0\ud654\\n\\n\uc5ec\ub7ec\uae30\uc5c5\ub4e4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub354 \ub098\uc740 \uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\ub2e4.  \\nFrontend \uce21\uba74\uc5d0\uc11c \uc5b4\ub5a4 \ub178\ub825\ub4e4\uc744 \ud558\uace0\uc788\uc744\uae4c \ucc3e\uc544\ubcf4\uc558\ub294\ub370  \\n\uccab\ubc88\uc9f8\ub294 Node.js \uc758 \ubc1c\uc804\uc73c\ub85c server\uc640 client\uac00 \uac19\uc740 \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74\uc11c  \\n\ub80c\ub354\ub9c1\uc758 \ucc45\uc784\uc744 Server\ub85c \uc774\uc804\ud558\ub824\ub294 \uc6c0\uc9c1\uc784\uc774 \ub098\ud0c0\ub0ac\uace0  \\n\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c \ub80c\ub354\ub9c1\uc744 \ub2f4\ub2f9\ud558\ub358 React\uc640 \uac19\uc740 \ud658\uacbd\uc5d0\uc11c  \\n\uc0ac\uc6a9\uc790\ub4e4\uc774 \ud398\uc774\uc9c0\uc5d0 \ucc98\uc74c\uc73c\ub85c \uc9c4\uc785\ud558\ub294 \uc2dc\uac04`(LCP/FCP)`\uc744 \uc904\uc5ec \ub354 \ub098\uc740 \uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud55c \uac83\uc774\ub2e4.\\n\\n\uc774\ub7f0 \ub300\ud45c\uc801\uc778 \ud504\ub808\uc784\uc6cc\ud06c\ub85c Next.js\uac00 \uc788\uace0 \ub2e8\uc810\uc740  \\nServer\uce21\uc5d0\uc11c \ub80c\ub354\ub9c1 \ud55c\ub2e4\ub294 \uac83\uc740 \uacb0\uad6d \uad00\ub9ac\ud574\uc57c\ud558\ub294 \uc11c\ubc84\uac00 \uc788\ub2e4\ub294 \uac83\uc774\uace0 \uace7  \\n\ubaa8\ub2c8\ud130\ub9c1 \ud558\ub294\ub370 \ube44\uc6a9\uc774 \ub4e4\uace0 \ud2b8\ub798\ud53d\uc774 \ubab0\ub9b4 \uacbd\uc6b0\ub97c \ub300\ube44\ud574\uc57c\ud55c\ub2e4.  \\n\ub610\ud55c Build \ubc0f \ubc30\ud3ec\uc2dc\uac04\uc774 \uc624\ub798\uac78\ub9b0\ub2e4\ub294 \ub2e8\uc810\ub3c4 \uc874\uc7ac.\\n\\n## Observability?\\n\\n\ucee8\ud37c\ub7f0\uc2a4\ub098 \uc790\ub8cc\ub4e4\uc744 \ucc3e\ub2e4\ubcf4\uba74 `Observability`\ub77c\ub294 \ub2e8\uc5b4\ub97c \uc2ec\uc2ec\uce58 \uc54a\uac8c \ubcfc \uc218 \uc788\ub2e4.  \\n\ub3c4\ub300\uccb4 \ubb34\uc2a8 \ub73b\uc77c\uae4c \ubcf4\ub2e4\ubcf4\ub2c8 \ub098\uc5d0\uac8c\ub294 \uc774\uc0c1\uc801\uc73c\ub85c \ub2e4\uac00\uc654\ub294\ub370  \\n\uc774 \ub2e8\uc5b4\ub97c \ub9cc\ub4e0 \uc0ac\ub78c `Rudolf E Kalman`\uc740 \\"\uc2dc\uc2a4\ud15c\uc758 \ucd9c\ub825\uc73c\ub85c\ubd80\ud130 \uc2dc\uc2a4\ud15c\uc758 \uc0c1\ud0dc\ub97c \uc774\ud574\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\\"\\n\uc774\ub77c\uace0 \ud55c\ub2e4 \uacb0\uad6d \uc774 \ub9d0\uc774 \ub85c\uae45\uc774\ub098 \ubaa8\ub2c8\ud130\ub9c1 \uc9c0\ud45c\ub97c \ud1b5\ud574 \uc6b0\ub9ac\uc758 App\uc758 \uc0c1\ud0dc\ub97c \uce21\uc815\ud558\uace0  \\n\ubc1c \ube60\ub978 \ub300\uc751\uc774 \uac00\ub2a5\ud55c \ub2a5\ub825\uc774\ub77c\uace0 \uc0dd\uac01\ud55c\ub2e4.\\n\\n\ud2b9\ud788\ub098 \uaddc\ubaa8\uac00 \ud070 \uae30\uc5c5\ub4e4\uc740 MSA\uac19\uc740 \uc544\ud0a4\ud14d\ucc98\ub97c \uc0ac\uc6a9\ud558\uace0 \uc694\uccad\uc774 \ubd84\uc0b0\ucc98\ub9ac\ub418\uc5b4  \\n\uc81c\ub300\ub85c \ub85c\uadf8\ub97c \ud655\uc778\ud558\uac70\ub098 \ubaa8\ub2c8\ud130\ub9c1\uc774 \ud798\ub4e4 \uc218 \uc788\ub2e4.  \\n\uc774\uc0c1\uc801\uc73c\ub85c\ub294 \uc5d0\ub7ec\uac00 \uc544\uc608\uc5c6\ub294 \ud658\uacbd\uc744 \uafc8\uafb8\uae34 \ud558\uaca0\uc9c0\ub9cc \uc5d0\ub7ec\ub294 \uc788\uc744 \uc218 \ubc16\uc5d0 \uc5c6\uace0  \\n\uadf8\ub807\uae30\uc5d0 \ubc1c\ube60\ub978 \ub300\uc751\uc744 \uc704\ud574 \ucd5c\ub300\ud55c `Observability`\ub97c \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574 \ud798\uc4f0\ub294\uac83 \uac19\ub2e4.\\n\\n## Web Vitals\\n\\n\ub300\ud45c\uc801\uc73c\ub85c \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \uc131\ub2a5\uc744 \uce21\uc815\ud560 \ub54c \uc2e0\uacbd \uc4f0\ub294 4\uac00\uc9c0\ub294\\n\\n- TTFB: \ube0c\ub77c\uc6b0\uc800\uac00 \uc11c\ubc84\ub85c\ubd80\ud130 \uccab\ubc88\uc9f8 \ubc14\uc774\ud2b8\ub97c \uc218\uc2e0\ud558\ub294 \uc18d\ub3c4(>500ms)\\n- LCP: \uac00\uc7a5 \ud070 \ucf58\ud150\uce20\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uadf8\ub824\uc9c0\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>2.5s)\\n- FCP: \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcfc \uc218 \uc788\ub294 \ucf58\ud150\uce20\uac00 \ucd5c\ucd08\ub85c \uadf8\ub824\uc9c0\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>1.8s)\\n- TTI: \ud398\uc774\uc9c0 \ub85c\ub529\uc774 \uc644\ub8cc\ub418\uace0 \uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc751\ub2f5\ud558\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>100ms)\\n\\n\uc774 \uc678\uc5d0\ub3c4 \ub808\uc774\uc544\uc6c3 \uc2dc\ud504\ud2b8(CLS)\ub098 TTI\uc640 \uc720\uc0ac\ud55c FID\ub4f1\uc774 \uc788\ub2e4.\\n\\n\uc774\ub7f0 \uc9c0\ud45c\ub4e4\uc758 \uc790\uc138\ud55c \uc124\uba85\uc774\uc544\ub2cc \uc774\uc720\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574\ubcf4\ub824 \ud558\ub294\ub370  \\n\uc704\uc640\uac19\uc740 \uc9c0\ud45c\ub4e4\uc744 \ud1b5\ud574 \uc131\ub2a5\uc744 \uce21\uc815/\ucd5c\uc801\ud654 \ud558\ub294 \uac83\uc740 \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uac1c\uc120\uc73c\ub85c \uc774\uc5b4\uc9c0\uace0  \\n\uafb8\uc900\ud55c \ubaa8\ub2c8\ud130\ub9c1\uc744 \ud1b5\ud574 \uc131\ub2a5\uc758 \uc800\ud558\ub97c \ub9c9\ub294\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4 \ud639\uc740 \ud14c\uc2a4\ud2b8\ucf54\ub4dc \uc791\uc131\uc744 \ud1b5\ud574 \ub9c9\uac70\ub098?\\n\\n## \uc815\ub9ac\\n\\n\ub204\uad70\uac00 \ub098\uc5d0\uac8c \uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780 \ubb50\uc5d0\uc694? \ub77c\uace0 \ubb3b\ub294\ub2e4\uba74  \\nFrontend\uc758 Observability\ub97c \uac00\ub2a5\ud55c \ucd5c\ub300\ub85c \ub04c\uc5b4\uc62c\ub9ac\ub294 \uac83\uacfc Metric\uac19\uc740 \ubcf4\uc870\uc9c0\ud45c\ub97c \ud65c\uc6a9\ud558\uc5ec  \\nApp\uc758 \uc131\ub2a5\uc744 \uce21\uc815\ud558\uace0 \ucd5c\uc801\ud654,\uc815\ud655\uc131\uc744 \ud14c\uc2a4\ud2b8\ud558\uc5ec \uc6f9\uc0ac\uc774\ud2b8\uc758 \ub2e4\uc591\ud55c \uce21\uba74\ub4e4\uc744 \uc6d0\ud65c\ud558\uac8c  \\n\ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uac1c\uc120\ud558\uace0 \uc5d0\ub7ec\ub97c \uac10\uc9c0\ud558\uc5ec \uc2e0\uc18d\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd\uc744 \uad6c\uc131\ud558\ub294 \uac83\\n\uc774\uc0c1\uc801\uc73c\ub85c\ub294 \uc5d0\ub7ec\uac00 \uc544\uc608\uc5c6\ub294 \ud658\uacbd\uc774 \uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\uc5d0 \uadfc\uc811\ud558\uc9c0 \uc54a\uc744\uae4c \ub77c\uace0 \ub300\ub2f5\ud560\uac83\uac19\ub2e4.\\n\\n### \ucc38\uace0\\n\\n- [SSR\uc758 \uae30\uc068\uacfc \uc2ac\ud514: \ub80c\ub354\ub9c1\uc758 \ubcc0\ud654\uc758 \ud750\ub984\uc744 \ud1b5\ud574 \uc54c\uc544\ubcf4\ub294 SSR\uacfc Streaming SSR | \uc778\ud504\ucf582023](https://www.youtube.com/watch?v=hPyyFu3lrEg&list=PLpkj8RKr48waFtrqvJjbNrpGCvdxyX8Nx&index=30)\\n- [[Dev Dive\\\\_ Frontend Day] \uc2a4\ud2b8\ub9ac\ubc0d SSR \ub525 \ub2e4\uc774\ube0c](https://www.youtube.com/watch?v=9xl9X2pfHeI&t=1934s)\\n- [\ud1a0\uc2a4\u3163SLASH 23 - \ubd84\uc0b0 \ucd94\uc801 \uccb4\uacc4 & \ub85c\uadf8 \uc911\uc2ec\uc73c\ub85c Observability \ud655\ubcf4\ud558\uae30](https://www.youtube.com/watch?v=Ifz0LsfAG94&list=PL1DJtS1Hv1PiGXmgruP1_gM2TSvQiOsFL&index=23)\\n- [\ud1a0\uc2a4\u3163SLASH 22 - \uc783\uc5b4\ubc84\ub9b0 \uac1c\ubc1c\uc790\uc758 \uc2dc\uac04\uc744 \ucc3e\uc544\uc11c: \ub9e4\uc77c \ud558\ub8e8\ub97c \uc544\ub07c\ub294 DevOps \uc774\uc57c\uae30](https://www.youtube.com/watch?v=2IE68SDTYvI)"},{"id":"how-to-speak","metadata":{"permalink":"/blog/how-to-speak","editUrl":"https://github.com/WanderedToLa/logs/tree/master/blog/2024-06-08-HowToSpeak/index.md","source":"@site/blog/2024-06-08-HowToSpeak/index.md","title":"How To Speak","description":"How To Speak","date":"2024-06-08T00:00:00.000Z","formattedDate":"June 8, 2024","tags":[{"label":"MITOpenCourseWare","permalink":"/blog/tags/mit-open-course-ware"},{"label":"Patrick Winston","permalink":"/blog/tags/patrick-winston"}],"readingTime":2.38,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"how-to-speak","title":"How To Speak","authors":["WanderedToLa"],"tags":["MITOpenCourseWare","Patrick Winston"]},"unlisted":false,"prevItem":{"title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","permalink":"/blog/frontend-observability"},"nextItem":{"title":"Measuring Devloper Productivity","permalink":"/blog/dev-ex"}},"content":"## How To Speak\\n\\n- \uc7ac\ub2a5\ubcf4\ub2e4 \uc544\ub294\uac83\uc774 \uc911\uc694\ud558\ub2e4.\\n- [How to Speak-MIT OpenCourseWare](https://www.youtube.com/watch?v=Unzc731iCUY)\\n\\n\uc0ac\ud68c\uc5d0\uc11c\uc758 \uc131\uacf5\uc740 \ub9d0\ud558\uae30, \uae00\uc4f0\uae30, \uac00\uc9c4 \uc544\uc774\ub514\uc5b4\uc758 \ud004\ub9ac\ud2f0 \uc21c\uc11c\ub85c \uacb0\uc815\ub41c\ub2e4.  \\n\uc774 \uc138\uac00\uc9c0 \ub2a5\ub825\uc740 \ub2e4\uc74c \uacf5\uc2dd\uc5d0 \ub530\ub978\ub2e4.\\n\\n```js\\nQuailty = F(K, P, T);\\n```\\n\\n\ub9e8\ucc98\uc74c\uc73c\ub85c \ub9ce\uc774\uc544\ub294 \uac83 `Knowledge`, \ub450\ubc88\uc9f8\ub85c\ub294 \uc5f0\uc2b5 `Practice`, \uc138\ubc88\uc9f8\ub294 \uc7ac\ub2a5\uc774\ub2e4 `Talent`  \\n**\uc911\uc694\ub3c4\ub294 K-P-T\uc21c \uc7ac\ub2a5\uc774\uc544\ub2cc \ub9ce\uc774 \uc544\ub294\uac83\uc774 \uc911\uc694\ud558\ub2e4.**\\n\\n### How To Start?\\n\\n\uc5b4\ub5a4 \uc0ac\ub78c\ub4e4\uc740 \ub18d\ub2f4\uc73c\ub85c \uc2dc\uc791\ud558\ub294\uac83\uc774 \uc88b\ub2e4\uace0 \ud558\uc9c0\ub9cc  \\n`Patrick Winston` \uad50\uc218\uac00 \ub9d0\ud558\ub294 \uccab\ubc88\uc9f8 \ubc29\ubc95\uc740 **\uc57d\uc18d\ud558\uae30**  \\n\uc608\ub97c\ub4e4\uc5b4, **\uc774 60\ubd84 \uac15\uc758 \ud6c4\uc5d0 \uc5ec\ub7ec\ubd84\ub4e4\uc740 \uc9c0\uae08\uae4c\uc9c0\ub294 \ubab0\ub790\ub358 \ub300\ud654\ubc29\ubc95\uc744 \uc54c\uac8c \ub420\uac81\ub2c8\ub2e4**  \\n\uc640 \uac19\uc774 \uc57d\uc18d\uc744 \ud558\uba70 \uc2dc\uc791\ud55c\ub2e4.\\n\\n`Patrick Winston` \uad50\uc218\uac00 \uac15\uc758\ub97c \ud560\ub54c\ub9c8\ub2e4 \ub9c8\uc74c\uc5d0 \uc0c8\uae30\ub294 \uba87\uac00\uc9c0 \uc0ac\ub840\ub97c \uc18c\uac1c\ud558\ub294\ub370\\n\\n1. \uc8fc\uc81c\uc5d0 \ub300\ud574 \ubc18\ubcf5\ud558\uae30 - \\"\ud3ec\uc778\ud2b8\ub294, \uc65c\ub0d0\ud558\uba74, \ub9ce\uc740 \uc774\uc720\uac00 \uc788\ub294\ub370...\\"\\n\\n   - \ubaa8\ub974\ub294 \uc0ac\ub78c\uc5d0\uac8c \ub9d0\ud558\ub4ef \uc138\ubc88\uc529 \ubc18\ubcf5\\n\\n2. \ub0b4 \uc544\uc774\ub514\uc5b4\uc5d0 \uacbd\uacc4\ub97c \uc9c0\uc74c - \ub2e4\ub978 \uc0ac\ub78c\uacfc \uc544\uc774\ub514\uc5b4 \ucc28\ubcc4\ud654\\n\\n3. \uc8fc\uc81c\uc5d0 \ub300\ud574 \uac70\ub4ed \uc0c1\uae30\uc2dc\ud0a4\uae30 - \uac15\uc5f0\uc911 \uc0ac\ub78c\ub4e4\uc740 \uc8fc\uc81c\ub97c \uc783\uc5b4\ubc84\ub9ac\uace4 \ud568.\\n\\n4. \uc9c8\ubb38\ud558\uae30 - \uc801\uc808\ud55c \uc9c8\ubb38 \uc5b4\ub835\uac70\ub098 \ub108\ubb34\ubed4\ud558\uc9c0 \uc54a\uc740\\n\\n### The Tools\\n\\n\ub2e4\uc74c\uc740 `Patrick Winston` \uad50\uc218\uac00 \uac15\uc758\uc5d0\uc11c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ud558\ub294 \uba87\uac00\uc9c0 \ub3c4\uad6c\ub4e4\uc744 \uc18c\uac1c\ud55c\ub2e4\\n\\n1. **Time&Place**  \\n   \uc608\ub97c\ub4e4\uc5b4 \ubc1c\ud45c\ub97c \ud560\ub54c \uac00\uc7a5 \uc801\uc808\ud55c \uc2dc\uac04\uc740 \uc624\uc80411\uc2dc. \ubaa8\ub450 \uae68\uc5b4\uc788\ub294 \uc2dc\uac04\uc778\ub370\ub2e4  \\n   \uc810\uc2ec\uc804\uc774\ub77c \ud53c\uace4\ud558\uc9c0 \uc54a\uc544 \ubc1c\ud45c\ub97c \uc704\ud55c \uc2dc\uac04\uc73c\ub85c \uc801\uc808\ud568.  \\n   \uc7a5\uc18c\uc120\uc815\uc5d0 \uac00\uc7a5 \uc911\uc694\ud55c\uac83\uc740 \ubc1d\uc740 \uc870\uba85 \ub0ae\uac70\ub098 \uc5b4\ub450\uc6b0\uba74 \uc878\ub9b4\uc218 \uc788\ub2e4."},{"id":"dev-ex","metadata":{"permalink":"/blog/dev-ex","editUrl":"https://github.com/WanderedToLa/logs/tree/master/blog/2024-01-26-DX/index.md","source":"@site/blog/2024-01-26-DX/index.md","title":"Measuring Devloper Productivity","description":"Measuring Devloper Productivity: Real-World Examples","date":"2024-01-26T00:00:00.000Z","formattedDate":"January 26, 2024","tags":[{"label":"DX","permalink":"/blog/tags/dx"}],"readingTime":0.48,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"dev-ex","title":"Measuring Devloper Productivity","authors":["WanderedToLa"],"tags":["DX"]},"unlisted":false,"prevItem":{"title":"How To Speak","permalink":"/blog/how-to-speak"}},"content":"## Measuring Devloper Productivity: Real-World Examples\\n\\n- test\\n- [Measuring Devloper Productivity: Real-World Examples](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae)\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n:::\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);