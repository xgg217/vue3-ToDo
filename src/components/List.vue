<template>
  <li>
    <input type="checkbox" @change="qh">
    <p :class="{ del: types }">{{ title }}</p>
    <button @click="delList">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    ids: [String, Number],
    title: String,
    types: Boolean
  },

  setup(props, ctr) {
    const { types } = props;
    const qh = (event) => {
      console.log(event.target.checked);
      console.log(ctr.emit);
      ctr.emit("update:types", event.target.checked);
    };

    const delList = () => {

    }

    return {
      qh,
      delList
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 5px 0;
}

p {
  width: 170px;
  border: 1px solid red;
  text-align: left;
}

.del {
  text-decoration: line-through;
  color: rgb(129, 127, 127);
}
</style>