//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets = [];
class DataSet {
  constructor(sub_title, menuNum) {
    this.sub_title = sub_title;
  }
  user_fill = "";
  sub_content = [];
  sub_img = [];
  set_content(content) {
    this.sub_content.push(content);
  }
  set_img(num, obj) {
    if (!this.sub_img[num]) {
      this.sub_img[num] = [];
    }
    this.sub_img[num].push(obj);
  }
  set_fill(ufill) {
    this.user_fill = ufill;
  }
}

let d1 = new DataSet("선형회귀모델"); //메인 타이틀 //메뉴번호
d1.set_content("보스턴 주택 가격 예측 선형 모델"); //서브 타이틀
d1.set_img(0, {
  imgtitle: "보스턴 주택 가격예측",
  imgurl: "",
  imglog: "",
  sourceurl:
    "https://docs.google.com/document/d/1UvD1fZNL9yjLORwxgAW5vD6C-A_RwL1zcNan9RZqmys/edit?usp=drive_link",
}); //이미지타이틀

d1.set_content("캘리포니아 주태 가격 예측 선형 회귀모델");
d1.set_img(1, {
  imgtitle: "캘리포니아 주택 가격 예측",
  imgurl: "",
  imglog: "",
  sourceurl:
    "https://docs.google.com/document/d/1UvD1fZNL9yjLORwxgAW5vD6C-A_RwL1zcNan9RZqmys/edit?usp=drive_link",
}); //이미지타이틀

d1.set_content("당뇨상태 1년후 예측 선형 회귀모델");
d1.set_img(2, {
  imgtitle: "1년후 당뇨상태 예측",
  ingurl: "",
  imglog: "",
  sourceurl:
    "https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link",
}); //이미지타이틀

d1.set_fill(
  "서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장"
); //사용자 에필로그
data_sets.push(d1);

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현"); //메인타이틀

data_sets.push(d2);

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현"); //메인타이틀

data_sets.push(d3);

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현"); //메인타이틀

data_sets.push(d4);
