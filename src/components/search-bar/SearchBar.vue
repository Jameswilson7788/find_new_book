<template>
<div>

  <input placeholder="請輸入關鍵字..." type="text">
  <button>搜尋</button>
  {{ data }}
</div>
</template>

<style>

</style>
<script>
import axios from "axios";
const url =
  "https://quality.data.gov.tw/dq_download_json.php?nid=6730&md5_url=a937a1dee74f4eed870dfc36a6bdc43e";
export default {
  name: "search-bar",
  data() {
    return {
      data: this.getNewBooks()
    }
  },
  methods: {
    getNewBooks:function() {
      const data = axios(url,function(data){
        console.log(data)
        this.data = data
      })
    }
  }
}
</script>
