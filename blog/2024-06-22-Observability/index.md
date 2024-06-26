---
slug: frontend-observability
title: 안전한 프론트엔드 서비스란?
authors: [WanderedToLa]
tags: [Observability, Frontend]
---

## SSR(Server-Side Rendering) 도입의 변화

여러기업들에서 사용자에게 더 나은 사용성을 제공하기 위해 노력하고 있다.  
Frontend 측면에서 어떤 노력들을 하고있을까 찾아보았는데  
첫번째는 Node.js 의 발전으로 server와 client가 같은 언어를 사용하게 되면서  
렌더링의 책임을 Server로 이전하려는 움직임이 나타났고  
클라이언트 측에서 렌더링을 담당하던 React와 같은 환경에서  
사용자들이 페이지에 처음으로 진입하는 시간`(LCP/FCP)`을 줄여 더 나은 사용성을 제공한 것이다.

이런 대표적인 프레임워크로 Next.js가 있고 단점은  
Server측에서 렌더링 한다는 것은 결국 관리해야하는 서버가 있다는 것이고 곧  
모니터링 하는데 비용이 들고 트래픽이 몰릴 경우를 대비해야한다.  
또한 Build 및 배포시간이 오래걸린다는 단점도 존재.

## Observability?

컨퍼런스나 자료들을 찾다보면 `Observability`라는 단어를 심심치 않게 볼 수 있다.  
도대체 무슨 뜻일까 보다보니 나에게는 이상적으로 다가왔는데  
이 단어를 만든 사람 `Rudolf E Kalman`은 "시스템의 출력으로부터 시스템의 상태를 이해할 수 있는 능력"
이라고 한다 결국 이 말이 로깅이나 모니터링 지표를 통해 우리의 App의 상태를 측정하고  
발 빠른 대응이 가능한 능력이라고 생각한다.

특히나 규모가 큰 기업들은 MSA같은 아키텍처를 사용하고 요청이 분산처리되어  
제대로 로그를 확인하거나 모니터링이 힘들 수 있다.  
이상적으로는 에러가 아예없는 환경을 꿈꾸긴 하겠지만 에러는 있을 수 밖에 없고  
그렇기에 발빠른 대응을 위해 최대한 `Observability`를 향상시키기 위해 힘쓰는것 같다.

## Web Vitals

대표적으로 프론트엔드의 성능을 측정할 때 신경 쓰는 4가지는

- TTFB: 브라우저가 서버로부터 첫번째 바이트를 수신하는 속도(>500ms)
- LCP: 가장 큰 콘텐츠가 브라우저에 그려지기까지의 속도(>2.5s)
- FCP: 사용자에게 볼 수 있는 콘텐츠가 최초로 그려지기까지의 속도(>1.8s)
- TTI: 페이지 로딩이 완료되고 사용자 입력에 응답하기까지의 속도(>100ms)

이 외에도 레이아웃 시프트(CLS)나 TTI와 유사한 FID등이 있다.

이런 지표들의 자세한 설명이아닌 이유에 대해 생각해보려 하는데  
위와같은 지표들을 통해 성능을 측정/최적화 하는 것은 사용자 경험 개선으로 이어지고  
꾸준한 모니터링을 통해 성능의 저하를 막는다고 생각한다 혹은 테스트코드 작성을 통해 막거나?

## 정리

누군가 나에게 안전한 프론트엔드 서비스란 뭐에요? 라고 묻는다면  
Frontend의 Observability를 가능한 최대로 끌어올리는 것과 Metric같은 보조지표를 활용하여  
App의 성능을 측정하고 최적화,정확성을 테스트하여 웹사이트의 다양한 측면들을 원활하게  
만들어 사용자 경험을 개선하고 에러를 감지하여 신속하게 처리할 수 있는 모니터링 환경을 구성하는 것
이상적으로는 에러가 아예없는 환경이 안전한 프론트엔드 서비스에 근접하지 않을까 라고 대답할것같다.

### 참고

- [SSR의 기쁨과 슬픔: 렌더링의 변화의 흐름을 통해 알아보는 SSR과 Streaming SSR | 인프콘2023](https://www.youtube.com/watch?v=hPyyFu3lrEg&list=PLpkj8RKr48waFtrqvJjbNrpGCvdxyX8Nx&index=30)
- [[Dev Dive\_ Frontend Day] 스트리밍 SSR 딥 다이브](https://www.youtube.com/watch?v=9xl9X2pfHeI&t=1934s)
- [토스ㅣSLASH 23 - 분산 추적 체계 & 로그 중심으로 Observability 확보하기](https://www.youtube.com/watch?v=Ifz0LsfAG94&list=PL1DJtS1Hv1PiGXmgruP1_gM2TSvQiOsFL&index=23)
- [토스ㅣSLASH 22 - 잃어버린 개발자의 시간을 찾아서: 매일 하루를 아끼는 DevOps 이야기](https://www.youtube.com/watch?v=2IE68SDTYvI)
