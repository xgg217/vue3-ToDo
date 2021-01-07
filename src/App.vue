<template>
  <h1>TO DO</h1>
  <section>
    <div class="inp">
      <div class="che">
        <input type="checkbox" />
      </div>
      <input
        class="nr"
        v-model="inpVue"
        type="text"
        @keyup.enter="addArr"
        placeholder="请输入任务" />
      <button @click.enter="addArr" type="button">添加</button>
    </div>

    <div class="box">
      <ul>
        <template v-for="item of arr" :key="item.ids">
          <list-com
            :ids="item.ids"
            :title="item.title"
            v-model:isBool="item.isBool"
            v-model:types="item.types"
          ></list-com>
        </template>
        
      </ul>

      <div class="foot">
        <p>总数：{{ arr.length }}</p>
        <div class="tj">
          <button :class="[ showVal === 0 ? 'xs' : '' ]" @click="qh(0)">全部</button>
          <button :class="[ showVal === 1 ? 'xs' : '' ]" @click="qh(1)">待完成</button>
          <button :class="[ showVal === 2 ? 'xs' : '' ]" @click="qh(2)">已完成</button>
        </div>
        <button @click="qk">清空</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watchEffect } from "vue";
import { getRandomIntInclusive } from "./ulits/index.js";
import Lists from "./components/List.vue";
export default {
  name: "App",

  components: {
    "list-com": Lists,
  },

  setup() {
    let inpVueRef = ref("");
    let arrRef = ref([]);
    let showValRef = ref(0);

    const useAddObj = (value) => {
      const obj = reactive({
        ids: getRandomIntInclusive(1, 1000),
        title: value,
        types: false, // 是否完成
        isBool: false, // 是否删除
      });
      return obj
    }

    // 添加内容
    const addArr = () => {
      if(!inpVueRef.value.trim()) {
        return
      }
      console.log(111);
      const obj = useAddObj(inpVueRef.value);
      inpVueRef.value = "";
      arrRef.value.push(obj);
    };

    // 根据状态显示内容
    const comArrRef = computed(() => {
      console.log(12);
      // 显示全部
      if(showValRef.value === 0) {
        console.log("显示全部");
        return arrRef.value
      }

      // 待完成
      if(showValRef.value === 1) {
        console.log("待完成");
        return arrRef.value.filter(item => {
          if(item.types) {
            return false
          }
          return true
        })
      }

      // 已完成
      if(showValRef.value === 2) {
        console.log("已完成");
        return arrRef.value.filter(item => {
          if(item.types) {
            return true
          }
          return false
        })
      }
    });

    // 过滤删除的内容
    watchEffect(
      () => {
        const aa = comArrRef.value.filter(item => {
          if(item.isBool) {
            return false
          }
          return true
        })
        console.log(aa);
        comArrRef.value = aa;

      },{
      onTrigger(e) {
        debugger
      }
    })

    // 切换状态
    const qh = (state) => {
      showValRef.value = state;
    };

    // 清空
    const qk = () => {
      arrRef.value = [];
    };



    return {
      inpVue: inpVueRef,
      addArr,
      arr: comArrRef,
      showVal: showValRef,
      qh,
      qk
    };
  },
};
</script>

<style scoped>
section {
  display: inline-block;
  border: 1px solid #000;
}
.inp {
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inp .nr {
  margin: 0 10px;
}

.foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
.foot button {
  cursor: pointer;
}

.foot .tj button {
  margin-right: 5px;
}

.xs {
  background-color: red;
}
</style>
