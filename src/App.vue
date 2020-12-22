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
        placeholder="请输入任务" />
      <button @click="addArr" type="button">添加</button>
    </div>

    <div class="box">
      <ul>
        <template v-for="item of arr" :key="item.ids">
          <list-com
            :ids="item.ids"
            :title="item.title"
            v-model:types="item.types"
          ></list-com>
        </template>
        
      </ul>

      <div class="foot">
        <p>总数</p>
        <div class="tj">
          <button :class="[  ]">全部</button>
          <button>待完成</button>
          <button>已完成</button>
        </div>
        <button>清空</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, readonly, reactive, toRef } from "vue";
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

    const useAddObj = (value) => {
      const obj = reactive({
        ids: getRandomIntInclusive(1, 1000),
        title: value,
        types: false
      });
      return obj
    }

    // 添加内容
    const addArr = () => {
      const obj = useAddObj(inpVueRef.value);
      inpVueRef.value = "";
      arrRef.value.push(obj);
    };

    return {
      inpVue: inpVueRef,
      arr: arrRef,
      addArr,
      
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
</style>
