let apiUrl = "https://myapi.umarfaishal.my.id/index.php/";

Vue.createApp({
    data() {
      return {
          message:"Hallo",
          header: {
          },
          data_artikel: [],
          article: null,
        };
      },
      methods: {
        getHeaderData() 
        {
          axios 
          .get(apiUrl + "users/1")
          .then((res) => {
            this.header = res.data;
            this.getUsers();
          })
          .catch((error) => {
            console.log(error);
          });
        },
        getPortofolioData() 
        {
          axios 
          .get(apiUrl + "portofolio/1")
          .then((res) => {
            this.portofolio = res.data;
            this.getPortofolio();
          })
          .catch((error) => {
            console.log(error);
          });
        },
        getArticle() 
        {
          axios 
          .get(apiUrl + "article")
          .then((res) => {
            console.log(res.data);
            this.data_artikel = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
        },
        getMarkdown()
        {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const article = urlParams.get('article');
          var converter = new showdown.Converter();
          console.log(article);
          axios
            .get(
              src="https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/assets/" + article
              )
            .then((res) => {
              var html = converter.makeHtml(res.data);
              this.article = html;
              console.log(html);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
      beforeMount() {
        this.getHeaderData(),
        this.getPortofolioData(),
        this.getArticle(),
        this.getMarkdown()
      },
}).mount("#arc");
         
 
