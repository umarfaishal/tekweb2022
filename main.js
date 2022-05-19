Vue.createApp({
    data() {
      return {
        header: {
          nama: "Faishal Umar Al-Amin",
          description: '2011016067 | Sistem Informasi 2020',
          imageprofile: "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/me.png",
        },
        social: {
            ig: {
              url: "https://instagram.com/umarfaishall?utm_medium=copy_link",
              title: "umarfaishall",
            },
            fb: {
              url: "https://www.facebook.com/faishal.umar.73",
              title: "Umar Al-Amin",
            },
            mail: {
              url: "mailto:faishal.umar2002@gmail.com",
              title: "Faishal Umar",
            },
          },

          data_artikel: [],
          article: null,
        };
      },
      methods: {
        getArticle() 
        {
          axios 
          .get(
            "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/assets/articles.json"
          )
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
        this.getArticle(),
        this.getMarkdown()
      },
}).mount("#arc");
         
  $('.skill-per').each(function() {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per}, {
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
 });
 