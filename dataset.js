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
//d1.set_img(1, {imgtitle: "",imglog: "",imgurl: "",sourceurl:""})
let d1 = new DataSet("선형회귀모델"); //메인 타이틀 //메뉴번호
d1.set_content("보스턴 주택 가격 예측 선형 회귀모델"); //서브 타이틀
d1.set_img(0, {imgtitle: "보스턴 데이터 수신",imglog: "텐서플로우 보스턴 데이터셋 수신확인",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/LinearRegression/examp_LinearRegression_bostonHousing.py",});
d1.set_img(0, {imgtitle: "데이터 특성 파악",imglog: "각 필드별 데이터의 특성의 의미 및 값을 확인",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/LinearRegression/examp_LinearRegression_bostonHousing.py",});
d1.set_img(0, {imgtitle: "데이터 연관성 확인",imglog: "가격정답과 데이터의 특성별 상호 연관도를 파악",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/LinearRegression/examp_LinearRegression_bostonHousing.py",});
d1.set_img(0, {imgtitle: "데이터 분포도 파악",imglog: "히스토그램을 이용하여 데이터의 분포와 이상치 데이터를 확인",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/LinearRegression/examp_LinearRegression_bostonHousing.py",});
d1.set_img(0, {imgtitle: "데이터 분포도 전환",imglog:"훈련 전처리를 위한 데이터를 평균 0 표준절차 1로 구성된 정규분포로 변환",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/LinearRegression/examp_LinearRegression_bostonHousing.py",});
d1.set_img(0, {imgtitle: "순차모델구성 및 훈련실행",imglog:"평균제곱오차법을 이용한 손실함수와 경사하강법을 이용한 최적화 함수로 컴파일 및 최적화된 훈련 15회 실행",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/LinearRegression/examp_LinearRegression_bostonHousing.py",});
d1.set_img(0, {imgtitle: "훈련 결과 시각화",imglog: "훈련 결과인 mse 손실값의 변화를 시각화 표현 ",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/LinearRegression/examp_LinearRegression_bostonHousing.py",});
d1.set_img(0, {imgtitle: "모델의 예측 결과 측정",imglog:"테스트 데이터를 주입하여 예측결과를 인출하고 실제 정답과 차이를 정확률로 표시 ",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/LinearRegression/examp_LinearRegression_bostonHousing.py",});

d1.set_content("캘리포니아 주택 가격 예측 선형 회귀모델");
d1.set_img(1, {imgtitle: "캘리포니아 주택 특성데이터 수신 및 분석",imglog:"사이킷런에서 제공하는 캘리포니아 주택 가격에 따른 데이터특성(x)들의 모음과 그에 따른 가격정보(y)",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl: "",});
d1.set_img(1, {imgtitle: "주택가격 특성과 가격의 연관성 분석",imglog: "주택의 특성별 산점도 분석으로 가격에 따른 선형성 확인",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl: "",});
d1.set_img(1, {imgtitle: "데이터 통계정보 분석",imglog:"판다스 데이터프레임으로 전환후 평균치, 표준편차등의 데이터 통계정보 분석",imgurl:"https://drive.google.com/file/d/1SbrttiOQQ2VJVM2ffFL6-N-Yba8rUaio/view?usp=drive_link",sourceurl: "",});
d1.set_img(1, {imgtitle: "",imglog:"히스토그램으로 데이터 분포 시각화와 이상데이터 또는 범위를 벗어난 데이터 설정",imgurl:"https://drive.google.com/file/d/1uy0UQlxQ7IRcft21MZXyeu3Ynl-GU1OS/view?usp=drive_link",sourceurl: "",});
d1.set_img(1, {imgtitle: "이상 데이터제거",imglog:"범위를 벗어나거나 이상치 데이터는 성능에 치명적인 영향을 줄 수 있으므로 이상치 및 범위를 벗어나 데이터를 제거하여 데이터 정체를 수행",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl: "",});
d1.set_img(1, {imgtitle: "데이터정체후 분포확인",imglog:"데이터 전처리 시행후 데이터 범위등의 히스토그램으로 이상데이터 분포확인",imgurl:"https://drive.google.com/file/d/1WrL4ZwI6fwSp0OC0n8bc0NBhfPpkF419/view?usp=drive_link",sourceurl: "",});
d1.set_img(1, {imgtitle: "훈련데이터와 테스트데이터 분할",imglog:"훈련데이터 80%, 테스트 데이터 20%를 사이킷런 라이브러리를 이용하여 분할 및 데이터 정규분포화 실행",imgurl:"https://drive.google.com/file/d/1pdDmw4ZGT_51gKTQk8OnCGrZ4fcOWTQQ/view?usp=drive_link",sourceurl: "",});
d1.set_img(1, {imgtitle: "선형회귀 기계학습 모델구성과 훈련",imglog:"은닉층이 존재하지 않는 머신러닝 모델을 구성하고 평균절대오차 손실함수 설정과 경사하강법으로 최적화 함수를 설정한후 훈련 100회 실행",imgurl:"https://drive.google.com/file/d/1I-ii72jo3FGSdQ6PXcfZm-z2sEV3JcMk/view?usp=drive_link",sourceurl: "",});
d1.set_img(1, {imgtitle: "훈련결과 시각화",imglog: "훈련시 저장된 손실값을 이용하여 시각화 그래프표현",imgurl:"https://drive.google.com/file/d/1Jp6ZNeL13HgfpWNB64wheLk42NWee6pM/view?usp=drive_link",sourceurl: "",});

d1.set_content("당뇨상태 1년후 예측 선형 회귀모델");
d1.set_img(2, {imgtitle: "1년후 당뇨상태 예측",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",imglog: "",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link",}); //이미지타이틀

d1.set_fill("선형 회귀모델은 데이터를 이용하거나 다중데이터를 이용하여 연속적인 값을 출력하여 예측한다"); //사용자 에필로그
data_sets.push(d1);
//d2.set_img(1, {imgtitle: "",imglog: "",imgurl: "",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
// menu2 =============================================================
let d2 = new DataSet("분류모델구현"); //메인타이틀
d2.set_content("패션 mist 회구 다중 분류")//서브 타이틀
d2.set_img(0, {imgtitle: "fashion_mist 데이터 수신",imglog: "1.구글에서 제공하는 드레스,셔츠,샌달등의 패션관련 이미지 다운로드",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "수신데이터 확인",imglog: "2.훈련데이터 6만개 테스터 데이터 1만개, 이미지사이즈 28,28 1채널 그레이, 정답데이터 정수형",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "훈련데이터 minmax 정규환",imglog: "3.훈련데이터의 0 ~ 1 사잇값으로 정규화 실행",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "데이터셔플링 및 정답일치성확인",imglog: "4.데이터셔플링 후 정답과 일치하도록 셔플이 되었는지 확인 작업",imgurl: "https://drive.google.com/file/d/19ohvbjPMv8KfcYhSSc1HYo_obWFRW_EI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "커스텀원핫인코딩 수행",imglog: "5.커스텀 원핫인코딩 클래스 생성후 원하는 방법으로 원핫인코딩 후 작동 확인",imgurl: "https://drive.google.com/file/d/1Pit-y74hKnOzS_9vxJMlhjQfdNZ8NEku/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "모델컴파일 및 훈련실행",imglog: "6.flattan으로 완전층 연결후 다중분류모델로 softmax 활성화 함수로 10class 출력",imgurl: "https://drive.google.com/file/d/1oMkFBlgb0A8arfFCUHZPxD2_mDntC1F0/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "훈련결과 시각화",imglog: "7.훈련 종료 후 손실 및 정확도 시각화 표현",imgurl: "https://drive.google.com/file/d/1OaEfO2e16D5DF3w83e-rv7q1rHIzOjNC/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "테스트 데이터 예측",imglog: "8.모델의 테스터 데이터 예측과 예측결과 시각화",imgurl: "https://drive.google.com/file/d/1G-w73IA6aCZq901bbLtGed4GQBHb5tVS/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "모델 및 인코더 저장",imglog: "9.훈련된 모델의 저장과 레이블이 연결된 인코더 파일로 저장",imgurl: "9.https://drive.google.com/file/d/17y3mhXumVwK0CAzVyeOQ3td7xkeuEE-n/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "모델과 인코더 불러오기",imglog: "실제이미지 측정을 위해 훈련된 모델과 라벨 인코더 다시 불러오기",imgurl: "10.https://drive.google.com/file/d/1qgclJaZT8DPUTDEX4L2XEPHQPZwJ9pdN/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "실제 이미지 테스트",imglog: "인터넷의 이미지를 복사하여 (test_ing)모델에 적합하도록 전처리 후 예측값 출력",imgurl: "11.https://drive.google.com/file/d/1J4SUrkQOmVjBSpcsi-LCXY92QStaf2z2/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_img(0, {imgtitle: "실제 이미지 예측결과 시각화",imglog: "실제 이미지를 예측한 결과를 시각화하여 표현",imgurl: "https://drive.google.com/file/d/1GhYHm7N64ooca8N9pkXynMcpbKa1ecMp/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/ClassificationSoftmax_fashionmnist/Examp_dassification_fashionMnist.lpynb.py"})
d2.set_content("fashion_mnist CNN 모델")//서브 타이틀
d2.set_img(1, {imgtitle: "fashion_mnist 훈련파일 불러오기",imglog: "구글에서 제공되는 이미지 훈련파일 불러오기와 라벨리스트 만들기",imgurl: "https://drive.google.com/file/d/10G8lFQVFn-J_dEcAJWjblKbZhOBcN6Kz/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "데이터 struct",imglog: "훈련데이터와 정답데이터 수치 및 구조 확인",imgurl: "https://drive.google.com/file/d/10G8lFQVFn-J_dEcAJWjblKbZhOBcN6Kz/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "검증데이터_테스트데이터분할",imglog: "검증데이터 6000개와 테스트데이터 4000개 분할",imgurl: "https://drive.google.com/file/d/10pavQmfc-OAUPuz5M7V0iAg6J3ynisJu/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "데이터셔플 및 전처리 수행",imglog: "문제데이터 표준화와 정답데이터 원핫인코딩 실행",imgurl: "https://drive.google.com/file/d/1X_ZvRQO422obhRl0y9gQaR3PaktWJn7o/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "데이터와 정답 일치성 확인",imglog: "셔플링 및 전처리후 데이터와 정답이 일치하는지 랜덤추출 후 확인 ",imgurl: "https://drive.google.com/file/d/1vV61QO5gas5JjD9gYjGn_c4fK_70NVQO/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "CNN 모델 구축 및 컴파일",imglog: "컨볼루션레이어와 풀링레이어와 완전연결층으로 구현딘 모델 구축",imgurl: "https://drive.google.com/file/d/1wLJdeYm6SEDUm13HWZT_X570M_O3uTPA/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "훈련실행",imglog: "배치사이즈를 3000으로 설정후 100회 훈련 실행",imgurl: "https://drive.google.com/file/d/1XBOc0ZLSATgWh3P7frBvASxet_i1Hh8f/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "훈련결과시각화",imglog: "정확률과 손실율을 시각화 표현으로 과적합 판단",imgurl: "https://drive.google.com/file/d/1wx2zXBQfIwJRQnuKEj83OTyNiRv_ofnd/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "모델평가 및 예측값",imglog: "테스트 데이터를 이용한 모델의 평가와 예측결과에 대한 시각화",imgurl: "https://drive.google.com/file/d/1wFHOPrLtemkPOVfsKnsPoj24UCY5bGdx/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "혼동행렬산출하기",imglog: "정답과 예측값 형태를 일치시킨후 혼동행렬 구하기",imgurl: "https://drive.google.com/file/d/11PUEp1bHs9a0W4_Xuf7Hk3KtNrOjSNRZ/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "혼동행렬시각화 및 fl_score",imglog: "히트맵을 이용한 혼동행렬의 시각화와 리포트 요약기능을 이용한 정밀도,재현율,fl_score출력",imgurl: "https://drive.google.com/file/d/1HTf_KoYfFna4jG7tJW0BXFzwp35wtrFh/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classification_Convolution/Exam_fashionmnist_class_conv.py"})
d2.set_img(1, {imgtitle: "합성곱층 풀리층 실습",imglog: "합성곱층의 특성맵과 풀링층의 특성 요약에 대한 형태 실습확인",imgurl: "https://drive.google.com/file/d/1YUDrI0TyaNm2aA5ISzdMiOjkhde_yEjA/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classification_Convolution"})
d2.set_content("암호화폐회귀분류예측")//서브 타이틀
d2.set_img(2, {imgtitle: "가상화폐데이터수신모듈",imglog:"날짜별 주별 시간별 화폐종별 데이터 수신 모듈",imgurl:"https://drive.google.com/file/d/1ehL1a_3p-D_zJmVwR-7mhcFM4jcvDpAu/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/utilpy.py"})
d2.set_img(2, {imgtitle: "데이터셋 생성",imglog:"가격정보와 연관성이 있는 값으로 구성된 데이터셋 생성 모듈",imgurl:"",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/EncryptoCoinPredPrice.py"})
d2.set_img(2, {imgtitle: "데이터추출",imglog:"문제데이터와 필드리스트 추출모듈",imgurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/EncryptoCoinPredPrice.py"})
d2.set_img(2, {imgtitle: "데이터수신및 생성모듈호출",imglog:"데이터 수신후 생성 / 추출 모듈 호출",imgurl:"https://drive.google.com/file/d/11lADIS8yQyiPP5P-xcReHEsIxOHCEqEu/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/utilpy.py"})
d2.set_img(2, {imgtitle: "산점도 연관성 분석",imglog:"산점도 분석에 의한 가격정보와 연관성이 낮은 필드 제거",imgurl:"https://drive.google.com/file/d/1VOl-9n6BwTRUUvFnOlXrJ_8nLLQCGH3F/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/utilpy.py"})
d2.set_img(2, {imgtitle: "회귀분석을 위한 파생값으로 통합",imglog:"회귀분석을 위해 데이터 통합취합",imgurl:"https://drive.google.com/file/d/1hIxiQNAcEXb21ZerBOSPmdu77qg6T33n/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/EncryptoCoinPredPrice.py"})
d2.set_img(2, {imgtitle: "심층모델구성",imglog:"다층 레이어로 구성된 회귀모델 구성및 컴파일 훈련",imgurl: "https://drive.google.com/file/d/14WWhfhLQBask4ueOngIzlSFx4r1naGbJ/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/EncryptoCoinPredPrice.py"})
d2.set_img(2, {imgtitle: "예측 및 확률검증",imglog:"예측은 산점도, 실제는 선형그래프로 시각화후 예측률 판단",imgurl:"https://drive.google.com/file/d/1UIDOAR6upJv7pmIFAWCDxY2440uYXaFC/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/EncryptoCoinPredPrice.py"})
d2.set_img(2, {imgtitle: "예측된 정보 출력",imglog:"내일(현재)의 가격 예측 정보 출력",imgurl:"https://drive.google.com/file/d/1ep0q6Zirn1XQsJkPkLPl4_uTLHETFyva/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/EncryptoCoinPredPrice.py"})
d2.set_img(2, {imgtitle: "예측과 실제 그래프 시각화",imglog:"예측정보와 실제그래프를 동시 표현으로 정확도 판단",imgurl:"https://drive.google.com/file/d/1F1fm-OlSfhQrHIgcKR8ccRhor305rGWn/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Encrypto_Anal/EncryptoCoinPredPrice.py"})

d2.set_content("")//서브 타이틀
d2.set_img(3, {imgtitle: "msist데이터수신및셔플링",imglog: "손글씨데이터 다운로드 및 셔플링 수행",imgurl:"https://drive.google.com/file/d/15QiPw6O5leWEXpMpek0e2FE_rrnZrZTV/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classifi_mnist_conv_advan"})
d2.set_img(3, {imgtitle: "데이터스케일링 및 원핫인코딩",imglog: "문제데이터 min-max scaling 정답데이터 one hot encoding",imgurl:"https://drive.google.com/file/d/1nfutpOg0l5cFKr1LctJHUyUzY0zL_FRS/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classifi_mnist_conv_advan"})
d2.set_img(3, {imgtitle: "훈련콜백함수",imglog: "earlystop callback,ModelCheckpint 객체 생성",imgurl:"https://drive.google.com/file/d/1YJd9BHw50aiO6a-d5w0ReQQ0RqSjdwrI/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classifi_mnist_conv_advan"})
d2.set_img(3, {imgtitle: "모델컴파일 및 훈련실행",imglog: "조기종료 및 최적화저장 콜백 주입후 훈련 실행",imgurl:"https://drive.google.com/file/d/157iSeZgHxIUwUn9qbLi4rzQb-7YX1bie/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classifi_mnist_conv_advan"})
d2.set_img(3, {imgtitle: "조기종료및체크포인트저장",imglog: "최적의 정확률로 조기종료실행 및 최적의 손실값으로 자동저장 수행",imgurl:"https://drive.google.com/file/d/1N7PT_mFWbNjL577CB3vGewf53Bod7YON/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classifi_mnist_conv_advan"})
d2.set_img(3, {imgtitle: "훈련결과시각화",imglog:"훈련결과를 시각화하여 최적의 모델을 선택하는 판단 기준",imgurl:"https://drive.google.com/file/d/1lQvUWUoJyrlw3vTANP4G29H2uY_DKN48/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classifi_mnist_conv_advan"})
d2.set_img(3, {imgtitle: "최적모델 선택",imglog:"시각화 결과와 테스트데이터 측정 평가로 정확률과 손실도가 최적화된 모델 선택",imgurl:"https://drive.google.com/file/d/1zFT6zwQqohVYXDKKzwlT5wwGmrwYbvjn/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classifi_mnist_conv_advan"})
d2.set_img(3, {imgtitle: "테스트측정",imglog:"테스트결과 시각화",imgurl:"https://drive.google.com/file/d/1iuiuCFqimZsL2IS28irNohTZS8BK2CCA/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/tree/main/Classifi_mnist_conv_advan"})
d2.set_img(3, {imgtitle: "사용자이미지판별",imglog:"그림판으로 작성하여 저장된 이미지를 불러와서 모델의 판별 테스트",imgurl:"https://drive.google.com/file/d/1fLXOUx6f4My6ti6SSXGTOTtiGktFgINi/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classifi_mnist_conv_advan/mnist_conv_main.py"})
d2.set_img(3, {imgtitle: "실제이미지판별",imglog:"6개의 실제 이미를 제작하여 모델의 예측능력 판별",imgurl:"https://drive.google.com/file/d/1WgCPoyrjX5p6KbxsvA3HBwfoLg3aUTSh/view?usp=drive_link",sourceurl:"https://github.com/dptj13/al_trian_0317/blob/main/Classifi_mnist_conv_advan/mnist_conv_main.py"})
d2.set_img(3, {imgtitle: "콜백함수에 의해 저장된 모델",imglog:"콜백함수에 의해 저장된 모델들의 저장된 스냅샷",imgurl:"https://drive.google.com/file/d/1w1soxGm-Y-6qPWhs0de7J99Kshrw4Gyf/view?usp=drive_link",sourceurl:""})





d2.set_fill("회귀 모델의 softmax 다중 분류 구현"); //사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현"); //메인타이틀

data_sets.push(d3);

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현"); //메인타이틀

data_sets.push(d4);
