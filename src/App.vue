<template>
  <v-app>
    <v-main class="main-container">
      <div class="layout-wrap">
        <div class="header">
          <router-view name="Header" :show="show" @close="close"></router-view>
        </div>
        <div class="contents">
          <router-view name="contents"></router-view>
        </div>
      </div>
      <router-view />
      <v-progress-circular :size="70" :width="7" color="amber" indeterminate class="spinner" v-if="loading"></v-progress-circular>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { mobileBreakPoint } from "@/utils/mobileBreakPoint";
export default {
  name: "App",
  data() {
    return {
      loadingStatus: false,
      show: false,
    };
  },
  computed: {
    ...mapGetters("common", ["loading", "windowWidth"]),
  },
  watch: {
    //반응형 감지
    windowWidth(size) {
      size > mobileBreakPoint ? this.$store.commit("common/setDeviceStatus", false) : this.$store.commit("common/setDeviceStatus", true);
    },
  },
  mounted() {
    //윈도우 가로사이즈 계산
    let docWidth = window.innerWidth;
    this.$store.commit("common/setWindowWidth", docWidth); //새로고침 초기 설정
    window.addEventListener(
      "resize",
      () => {
        let docWidth = window.innerWidth;
        this.$store.commit("common/setWindowWidth", docWidth);
      },
      true,
    );
    //반응형 초기 설정
    this.windowWidth > mobileBreakPoint ? this.$store.commit("common/setDeviceStatus", false) : this.$store.commit("common/setDeviceStatus", true);
  },
  methods: {
    showLnb() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss">
.spinner {
  position: fixed !important;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//margin, padding setting
@for $i from 0 through 200 {
  .mt#{$i} {
    margin-top: 0.1rem * $i !important;
  }
  .ml#{$i} {
    margin-left: 0.1rem * $i !important;
  }
  .mr#{$i} {
    margin-right: 0.1rem * $i !important;
  }
  .mb#{$i} {
    margin-bottom: 0.1rem * $i !important;
  }
  .pt#{$i} {
    padding-top: 0.1rem * $i !important;
  }
  .pl#{$i} {
    padding-left: 0.1rem * $i !important;
  }
  .pr#{$i} {
    padding-right: 0.1rem * $i !important;
  }
  .pb#{$i} {
    padding-bottom: 0.1rem * $i !important;
  }
}
//width setting
@for $i from 1 through 500 {
  .w#{$i} {
    width: 0.1rem * $i !important;
  }
}
.sign-out {
  position: absolute;
  right: 20px;
  top: 25px;
  z-index: 1;
  cursor: pointer;
}
</style>
