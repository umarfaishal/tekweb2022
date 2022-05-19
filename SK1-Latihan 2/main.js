Vue.createApp({
    data() {
      return {
        mesage: "Hello Vue!",
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
        artikel: [
          {
            title: "Teknologi",
            image: "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/tekno.jpg",
          },
        ],
      };
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