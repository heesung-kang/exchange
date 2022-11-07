<template>
  <section class="header-wrap">
    <div class="logo"><img src="@/assets/images/logo.svg" alt="" /></div>
    <div class="hamburg-menu" @click="isActive = true">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="linked" :class="{ active: isActive }">
      <div class="close" @click="isActive = false"><img src="@/assets/images/close.svg" alt="" /></div>
      <div class="books">
        <a href="#">BOOKS</a>
        <h3>책을 사는 새로운 방법! 인스타북스</h3>
      </div>
      <div class="beans">
        <a href="#">BEANS</a>
        <h3>
          당신의 취향을 사로잡는 압도적인 풍미!<br />
          커피의 혁신 고릴라 빈즈<br />
          안녕하세요
        </h3>
      </div>
    </nav>
    <div class="dim" @click="isActive = false" :class="{ active: isActive }"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  .linked {
    display: flex;
    a {
      @include NotoSans(1.8, 500, #000);
    }
    .beans {
      margin-left: 34px;
    }
    .close {
      display: none;
    }
    h3 {
      display: none;
    }
  }
  .hamburg-menu {
    display: none;
  }
  .dim {
    display: none;
  }
}

@include mobile {
  .linked {
    width: 320px;
    position: fixed;
    right: -320px;
    top: 0;
    height: 100vh;
    transition: right 0.3s ease-in-out;
    background-color: #fff;
    z-index: 1000;
    &.active {
      right: 0;
    }
  }
  .hamburg-menu {
    display: block !important;
    position: absolute;
    width: 18px;
    cursor: pointer;
    right: 20px;
    top: 27px;
    span {
      display: block;
      margin-bottom: 5px;
      border-top: 2px solid #000;
      border-radius: 2px;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .header-wrap {
    .linked {
      flex-direction: column;
      padding: 52px 24px 52px 36px;
      a {
        @include NotoSans(2.4, 500, #000);
      }
      .beans {
        margin: 50px 0 0 0;
      }
      h3 {
        display: block;
        @include NotoSans(1.6, 500, #000);
        margin-top: 7px;
      }
      .close {
        display: block;
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
      }
    }
  }
  .dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0);
    display: none;
    transition: background 0.3s ease-in-out;
    &.active {
      background: rgba(0, 0, 0, 0.1);
      display: block;
    }
  }
}
</style>
