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
      <div class="exchange-wrap">
        <div class="krw" @click="inputShow = true">
          <span class="money">
            <input v-if="inputShow" class="number" type="number" v-model="initKrw" @blur="inputShow = false" />
            <span v-else>{{ krw }}</span> </span
          ><span class="unit">KRW</span>
        </div>
        <div class="coin">
          <span class="money"
            ><span>{{ inc }}</span>
            <div class="commission">수수료 0.1%</div></span
          ><span class="unit">INC</span>
        </div>
      </div>
    </div>
    <div class="ck-wrap mt64 ml10">
      <input type="checkbox" v-model="check" id="ck" /><label for="ck"></label><span>인스타코인 구매약관</span>에 동의합니다
    </div>
    <button class="btn-buy mt20" :disabled="!check">구매하기</button>
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
  .commission {
    @include NotoSans(1.6, 500, #888888);
    text-align: right;
    margin-top: 10px;
  }
  .exchange-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    margin: 0 auto;
    position: relative;
    .krw {
      width: 100%;
      @include NotoSans(2.4, 500, #000);
      display: flex;
      justify-content: space-between;
      .unit {
        @include NotoSans(2.4, 500, #4bc1c2);
        width: 50px;
      }
      .money {
        padding-bottom: 5px;
        border-bottom: 1px solid #888888;
        background: url("../../assets/images/arrow_down.svg") no-repeat right 10px top 15px;
        .number {
          text-align: right;
          @include NotoSans(2.4, 500, #000);
          width: calc(100% - 61px);
        }
      }
    }
    .coin {
      width: 100%;
      @include NotoSans(2.4, 500, #000);
      display: flex;
      justify-content: space-between;
      .unit {
        width: 50px;
      }
    }
    .money {
      width: calc(100% - 65px);
      text-align: right;
      padding-right: 40px;
      min-height: 36px;
    }
  }
}
.btn-buy {
  width: 100%;
  height: 46px;
  @include NotoSans(1.8, 500, #fff);
  background-color: #4bc1c2;
  &:disabled {
    background-color: #dddddd !important;
    color: #fff !important;
  }
}
input[type="number"] {
  text-align: right;
}
.ck-wrap {
  position: relative;
  @include NotoSans(1.4, 500, #000);
  span {
    text-decoration: underline;
    cursor: pointer;
  }
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
