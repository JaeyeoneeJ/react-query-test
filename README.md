# react-query-test

## 0. 개요

- 이 프로젝트는 React App에서 API 통신을 위해 비동기 데이터를 redux로 관리하던 것을 react query로 관리하기 위한 방법을 연구하기 위해 제작되었습니다.
- 해당 프로젝트에 대한 상세 정보는 아래 문서를 확인 바랍니다.
  - [TanStack Query(react-query)](<https://github.com/JaeyeoneeJ/TIL/blob/main/react/TanStack_Query(react-query).md>)
- 프로젝트 결과 예시
  <img src="https://github.com/JaeyeoneeJ/react-query-test/assets/77138259/0a10240b-d951-44a5-9362-2b29fa6b69ab" alt="console.log" />

## 1. 개발 환경

이 프로젝트는 다음과 같은 환경에서 개발되었습니다.

- npm: 6.14.7
- node: v16.17.0
- dependencies

  - "@tanstack/react-query": "^5.20.2",
  - "axios": "^1.6.7",
  - "react": "^18.2.0",
  - "react-dom": "^18.2.0",
  - "react-scripts": "5.0.1"

- 이 프로젝트의 구조는 다음과 같습니다.

```
├── .env
├── package-lock.json
├── package.json
├── public
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── api
    │   ├── api.js
    │   └── instance.js
    ├── components
    │   ├── All.jsx
    │   ├── UltraSrcNcst.jsx
    │   ├── UltraSrtFcst.jsx
    │   └── VilageFcst.jsx
    ├── index.js
    └── utils
        ├── constants.js
        └── utils.js
```

- 이 프로젝트는 API로 **공공데이터 기상청 Open-API**를 사용합니다.
- 따라서 아래 사이트에 접속 후, `ACCESS-KEY`를 발급 받아야 사용이 가능합니다. 이 키는 decoding 방식을 사용하는 것을 권장드립니다.
  > [기상청 공공데이터 Open-API](https://data.kma.go.kr/api/selectApiDetail.do?pgmNo=42&openApiNo=421)
- 이 프로젝트는 환경변수 설정이 필요합니다. 위에서 발급 받은 키를 추가하여 주세요.

```.env
REACT_APP_OPEN_API_KEY = YOUR_KEY
REACT_APP_WEATHER_API_URL = http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0
```

## 2. 프로젝트 실행

### 1) `npm start` || `npm run start`

- 위 명령어를 통해 개발 모드의 앱을 실행할 수 있으며, [http://localhost:3000](http://localhost:3000)의 기본 포트의 브라우저에서 확인할 수 있습니다.

### 2) `npm run build`

- 위 명령어를 통해 개발 모드의 앱을 빌드할 수 있습니다.
- 만일 당신의 글로벌 환경에 http-server가 설치되어 있는 경우, 빌드 후, `npx http-server ./build`로 빌드된 앱을 확인할 수 있습니다.

## 3. 프로젝트 확인

- 버튼을 눌러 api를 호출할 수 있습니다.
- `src/api.js` 파일 수정을 통해 원하는 날짜와 지역의 값을 확인할 수 있습니다.

```jsx
export const getUltraSrtNcst = async () => {
  const res = await weatherInstance.get(`/getUltraSrtNcst`, {
    params: {
      numOfRows: "10",
      pageNo: "1",
      dataType: "JSON",
      base_date: getFormattedDate(), // 날짜
      base_time: getCurrentTime(), // 시간
      nx: "55", // 행정구역별 nx
      ny: "127", // 행정구역별 ny
    },
  });

  ...
};
```
