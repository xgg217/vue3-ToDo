<template>
  <li>
    <input type="checkbox" @change="qh">
    <p>{{ title }}</p>
    <button>删除</button>
  </li>
</template>

<script>
export default {
  props: {
    ids: [String, Number],
    title: String,
    types: Boolean
  },

  setup(props, ext) {
    const { types } = props;
    const qh = () => {
      emit("")
    }

    return {
      qh
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
</style>