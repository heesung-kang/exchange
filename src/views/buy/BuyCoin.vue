<template>
  <div class="sub-container">
    <div class="back">
      <span @click="$router.push('/quote')" class="wrap">
        <span><img src="@/assets/images/back.svg" alt="뒤로가기" /></span>
        <span class="menu">구매</span>
      </span>
    </div>
    <h1>인스타코인</h1>
    <div class="quote">
      <div class="init-wrap" v-if="inputShow">
        <input class="number" type="number" v-model="initKrw" @blur="inputShow = false" />
      </div>
      <div class="krw" @click="inputShow = true" v-else>{{ krw }}<span>KRW</span></div>
      <div>{{ inc }}<span>INC</span></div>
      <div>수수료 0.1%</div>
    </div>
    <div class="ck-wrap"><input type="checkbox" v-model="check" id="ck" /><label for="ck">인스타코인 구매약관에 동의합니다</label></div>
    <div><button>구매하기</button></div>
  </div>
</template>

<script>
export default {
  name: "BuyCoin",
  data() {
    return {
      initKrw: 0, //최종 krw
      initCoin: 0, //최종 coin
      check: false,
      inputShow: false,
    };
  },
  computed: {
    krw() {
      return String(this.initKrw).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    },
    inc() {
      let calc = String(this.initKrw * 1.2);
      const arr = calc.split("."); //정수, 소숫점이하 분리
      let first = String(arr[0]).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,"); //정수에 콤마
      if (arr[1] === undefined) {
        return `${first}`;
      } else {
        return `${first}.${arr[1]}`;
      }
    },
  },
  watch: {
    initKrw(newValue) {
      this.initKrw = newValue.replace(/(^0+)/, ""); //첫째 자리 0 제거
      this.initCoin = this.initKrw * 1.2;
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  @include NotoSans(2, 500, #000);
  .wrap {
    cursor: pointer;
    img {
      vertical-align: 0px;
    }
    .menu {
      margin-left: 17px;
    }
  }
}
h1 {
  margin-top: 30px;
  @include NotoSans(1.6, 500, #000);
}
.quote {
  position: relative;
  margin-top: 46px;
  .init-wrap {
    position: absolute;
    top: 0;
    left: 0;
  }
  .krw {
  }
}
input[type="number"] {
  text-align: right;
}
.ck-wrap {
  position: relative;
  input[id="ck"] {
    display: none;
  }
  input[id="ck"] + label {
    padding-left: 30px;
    &:before {
      content: "";
      width: 24px;
      height: 24px;
      background: url("../../assets/images/check.svg");
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  input[id="ck"]:checked + label {
    padding-left: 30px;
    cursor: pointer;
    &:before {
      content: "";
      width: 24px;
      height: 24px;
      background: url("../../assets/images/checked.svg");
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
