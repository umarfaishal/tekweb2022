Vue.createApp({
    data() {
      return {
        header: {},
        artikel: [],
      };
    },
    methods: {
      getHeaderData() {
        axios
          .get("https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/SK1-Latihan%203/assets/header.json")
          .then((res) => {
            console.log(res.data);
            this.header = res.data;
            this.getArtikel();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getArtikel() {
        axios
          .get("https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/SK1-Latihan%203/assets/artikel.json")
          .then((res) => {
            console.log(res.data);
            this.artikel = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    beforeMount() {
      this.getHeaderData();
    },
  }).mount("#arc");