# Next.js + Typescript

### 1-1. TypeScript 기본 문법 ✅

- 타입 선언 (`string`, `number`, `boolean`, `any`, `unknown`)
- 인터페이스(`interface`) & 타입(`type`)
- 제네릭(`<T>`)
- 클래스, 상속, 접근제어자(`public`,`private`,`protected`)
- 유틸리티 타입 (`Partial`, `Pick`, `Omit`, `Readonly`)

### 1-2. React 기본기 ✅

- 컴포넌트, Props, State
- Hooks(`useState`,`useEffect`,`useRef`,`useContext`)
- 이벤트 처리, 리스트 렌더링, 조건부 렌더링

---

## 2. 개발 환경 세팅 ✅

1.  **Node.JS 설치**(v18 이상)
2.  **프로젝트 생성**

```bash
  npx-create-next-app@latest next-bloging --typescript
  cd next-bloging
  npm run dev
```

3.  **폴더 구조 이해** ✅

- `/app` 또는 `/pages`: 라우팅 담당
- `/components`: UI 컴포넌트
- `/styles`: CSS/SCSS 스타일
- `/lib`: 유틸 함수, API 요청

---

## 3. 기본 페이지 & 라우팅

- **파일 기반 라우팅**
  - `/pages/index.tsx` -> `/`
  - `/pages/about.tsx` -> `/about`
- **동적 파일 라우팅**
  - `/pages/posts/[id].tsx`
- **Link 컴포넌트**

```tsx
import Link from "next/link";

<Link href="/about">About</Link>;
```

---

## 4. 스타일링

- CSS 모듈
- SCSS 모듈
- styled-components / Tailwind CSS 연동하기

---

## 5. 데이터 페칭

- SSR(서버사이드 렌더링)
- SSG(정적 사이트 생성)
- CSR(클라이언트 사이드 렌더링)
- 안전한 타입 API 요청하기

---

## 6. API Routes

- api 폴더에서 라우터 관리하기

## 7. 상태 관리

- React Context API 사용하기
- Zustand / Redux Toolkit
- 서버 상태 관리 -> ReactQuery(TanStack Query)

## 8. 고급 기능

- 이미지 최적화 -> `next/image`
- 메타데이터 설정 -> `next/head`
- 미들웨어(MiddleWare)
  - `middleware.ts`에서 요청 가로채기
- 환경변수 관리
  - `.env.local` 파일 생성

## 9. 프로젝트 예제

- 블로그
  - SSG + Markdown 파일 읽기
- Todo 앱
  - API Routes + React Query
- 간단한 쇼핑몰 사이트
  - SSR로 상품 리스트 출력
  - 장바구니 기능

## 10. 배포

- vercel로 배포하기
- Docker + Next.js를 사용해 배포
