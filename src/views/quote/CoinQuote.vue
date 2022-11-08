<template>
  <div class="sub-container">
    <h1>구매하실 코인을 선택하세요</h1>
    <h2>시세는 어떻게 정해지는지 기술...</h2>
    <ul class="quote-wrap">
      <li>
        <div class="info-wrap">
          <div class="coin-img"></div>
          <div class="coin-info">
            <h3>인스타코인</h3>
            <div class="name">INC</div>
          </div>
        </div>
        <div class="price">
          <div class="quote">1,789</div>
          <div class="unit">KRW</div>
        </div>
      </li>
      <li>
        <div class="info-wrap">
          <div class="coin-img"></div>
          <div class="coin-info">
            <h3>이더리움</h3>
            <div class="name">ETH</div>
          </div>
        </div>
        <div class="price">
          <div class="quote">1,789</div>
          <div class="unit">KRW</div>
        </div>
      </li>
      <li>
        <div class="info-wrap">
          <div class="coin-img"></div>
          <div class="coin-info">
            <h3>비트코인</h3>
            <div class="name">BTC</div>
          </div>
        </div>
        <div class="price">
          <div class="quote">1,789</div>
          <div class="unit">KRW</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CoinQuote",
};
</script>

<style lang="scss" scoped>
h1 {
  @include NotoSans(2, 500, #000);
}
h2 {
  @include NotoSans(1.4, 500, #888888);
  margin-top: 5px;
}
.quote-wrap {
  margin-top: 30px;
  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    padding: 20px 0;
    .info-wrap {
      display: flex;
      align-items: center;
      .coin-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #d9d9d9;
      }
      .coin-info {
        margin-left: 20px;
        h3 {
          @include NotoSans(1.6, 500, #000);
        }
        .name {
          @include NotoSans(1.6, 500, #888);
        }
      }
    }
    .price {
      .quote {
        @include NotoSans(1.8, 500, #000);
        text-align: right;
      }
      .unit {
        @include NotoSans(1.5, 500, #4bc1c2);
        text-align: right;
      }
    }
  }
}
</style>
