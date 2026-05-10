# Taxbon → Astro 이식 가이드

## 폴더 구조

```
taxbon/
├── src/
│   ├── components/
│   │   ├── Header.astro   ← 공통 헤더 (완성)
│   │   └── Footer.astro   ← 공통 푸터 (완성)
│   ├── layouts/
│   │   └── BaseLayout.astro  ← 공통 레이아웃 (완성)
│   ├── pages/
│   │   ├── index.astro    ← 메인 (내용 이식 필요)
│   │   ├── intake.astro   ← 준비서류 (내용 이식 필요)
│   │   └── calculator.astro ← 계산기 (내용 이식 필요)
│   └── styles/
│       └── global.css     ← 공통 CSS (완성)
├── public/
│   └── images/            ← 기존 images/ 폴더 통째로 복사
├── astro.config.mjs       ← (완성)
├── tailwind.config.mjs    ← (완성)
├── package.json           ← (완성)
└── wrangler.jsonc         ← (완성, dist/ 바라봄)
```

---

## 이식 순서

### STEP 1 — 초기 설치
```bash
npm install
```

### STEP 2 — images 폴더 복사
기존 프로젝트의 `images/` 폴더를 `public/images/`로 복사.
(Astro에서 public/ 폴더가 루트로 서빙됨 → /images/logo.png 그대로 동작)

### STEP 3 — index.astro 이식
index.html을 열고:
1. <header>...</header> 블록 삭제 (Header.astro로 대체됨)
2. <footer>...</footer> 블록 삭제 (Footer.astro로 대체됨)
3. 나머지 섹션 전체를 index.astro의 <!-- 여기서부터 --> 위치에 붙여넣기
4. <script> 중 모바일메뉴·이메일 난독화는 삭제 (컴포넌트로 이동됨)
5. 나머지 <script> 내용은 <script slot="scripts"> 안으로 이동

### STEP 4 — intake.astro 이식
intake.html을 열고:
1. <header>/<footer> 삭제
2. <style> 내용은 global.css 에 추가하거나 <style is:global> 유지
3. 나머지 내용 붙여넣기

### STEP 5 — calculator.astro 이식
calculator.html을 열고:
1. <header>/<footer>/<style> 처리 (동일)
2. React CDN 스크립트 태그들 삭제
3. React 코드(.jsx)는 src/components/Calculator.jsx 로 분리
   → calculator.astro 에서 <Calculator client:load /> 로 사용

### STEP 6 — 로컬 확인
```bash
npm run dev
# → http://localhost:4321
```

### STEP 7 — 배포
```bash
npm run deploy
# = npm run build && wrangler deploy
```

---

## 주의사항

- 이미지 경로: 기존 `images/파일.jpg` → `/images/파일.jpg` (슬래시 추가)
  - 단, 이미 BaseLayout/Header/Footer는 `/images/` 로 수정됨
  - 붙여넣는 섹션 내용의 img src도 `/images/`로 일괄 치환 필요

- 페이지 간 링크: `intake.html` → `/intake`, `calculator.html` → `/calculator`

- SEO 인증 파일 (google***.html, naver***.html):
  → `public/` 폴더에 그대로 복사 (경로 변경 없음)

- robots.txt, sitemap.xml:
  → `public/` 폴더에 복사
