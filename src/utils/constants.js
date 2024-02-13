export const tabButtons = {
  getUltraSrtNcst: "초단기실황조회",
  getUltraSrtFcst: "초단기예보조회",
  getVilageFcst: "단기예보조회",
  getAll: "모든 api 호출",
};

export const category = {
  T1H: {
    title: "기온",
    unit: "℃",
  },
  RN1: {
    title: "1시간 강수량",
    unit: "mm",
  },
  TMP: {
    title: "1시간 기온",
    unit: "℃",
  },
  TMN: {
    title: "일 최저기온",
    unit: "℃",
  },
  TMX: {
    title: "일 최고기온",
    unit: "℃",
  },
  WAV: {
    title: "파고",
    unit: "M",
  },
  SNO: {
    title: "1시간 신적설",
    unit: "",
  },
  PCP: {
    title: "1시간 강수량",
    unit: "mm",
  },
  UUU: {
    title: "동서바람성분",
    unit: "m/s",
  },
  VVV: {
    title: "남북바람성분",
    unit: "m/s",
  },
  REH: {
    title: "습도",
    unit: "%",
  },
  PTY: {
    title: "강수형태",
    unit: "",
  },
  POP: {
    title: "강수확률",
    unit: "%",
  },
  VEC: {
    title: "풍향",
    unit: "deg",
  },
  WSD: {
    title: "풍속",
    unit: "m/s",
  },
  LGT: {
    title: "낙뢰",
    unit: "KA/㎢",
  },
  SKY: {
    title: "하늘상태",
    unit: "",
  },
};

const READ_PTY = {
  0: "없음",
  1: "비",
  2: "비/눈",
  3: "눈",
  4: "소나기",
  5: "빗방울",
  6: "빗망울눈날림",
  7: "눈날림",
};

const READ_SKY = {
  1: "맑음",
  3: "구름많음",
  4: "흐림",
};

export const getCategoryValue = (key, value) => {
  const getCategory = category[key];

  let convertValue;
  switch (key) {
    case "PTY":
      convertValue = READ_PTY[value];
      break;
    case "SKY":
      convertValue = READ_SKY[value];
      break;
    case "RN1":
    case "PCP":
      const numValue = Number(value);
      if (numValue < 1) {
        convertValue = "1mm 미만";
      } else if (numValue >= 1 && numValue < 30) {
        convertValue = Math.floor(numValue) + getCategory.unit;
      } else if (numValue >= 30 && numValue < 50) {
        convertValue = "30 ~ 50mm";
      } else {
        convertValue = "50mm 이상";
      }
      break;
    case "UUU":
      if (value.includes("-")) {
        convertValue = "서 " + value.replace("-", "") + getCategory.unit;
      } else {
        convertValue = "동 " + value + getCategory.unit;
      }
      break;
    case "VVV":
      if (value.includes("-")) {
        convertValue = "남 " + value.replace("-", "") + getCategory.unit;
      } else {
        convertValue = "북 " + value + getCategory.unit;
      }
      break;
    default:
      convertValue = value + getCategory.unit;
      break;
  }
  return convertValue;
};
