```

<!--  Tabel Users -->

GET: /users

data: [
{
      "id": "1",
      "nama": "Faishal Umar Al-Amin",
      "deskripsi": "2011016067 | Sistem Informasi ",
      "motto": "Bersabarlah dalam menghadapi cobaan, karena kalau sedikit namanya cobain",
      "info": "More Information :",
      "ig_url": "https://instagram.com/umarfaishall?utm_medium=copy_link",
      "fb_url": "https://www.facebook.com/faishal.umar.73",
      "mail_url": "mailto:faishal.umar2002@gmail.com"
},
{
      "id": "2",
      "nama": "Anhar Suryadi update",
      "deskripsi": "2011016067 | Sistem Informasi ",
      "motto": "Bersabarlah dalam menghadapi cobaan, karena kalau sedikit namanya cobain",
      "info": "More Information :",
      "ig_url": "https://instagram.com/umarfaishall?utm_medium=copy_link",
      "fb_url": "https://www.facebook.com/faishal.umar.73",
      "mail_url": "mailto:faishal.umar2002@gmail.com"
},
{
      "id": "5",
      "nama": "Habib Aditya",
      "deskripsi": "2011016067 | Sistem Informasi ",
      "motto": "Bersabarlah dalam menghadapi cobaan, karena kalau sedikit namanya cobain",
      "info": "More Information :",
      "ig_url": "https://instagram.com/umarfaishall?utm_medium=copy_link",
      "fb_url": "https://www.facebook.com/faishal.umar.73",
      "mail_url": "mailto:faishal.umar2002@gmail.com"
}
]


GET: /users/[1]

data:{
    "id": "1",
    "nama": "Faishal Umar Al-Amin",
    "deskripsi": "2011016067 | Sistem Informasi ",
    "motto": "Bersabarlah dalam menghadapi cobaan, karena kalau sedikit namanya cobain",
    "info": "More Information :",
    "ig_url": "https://instagram.com/umarfaishall?utm_medium=copy_link",
    "fb_url": "https://www.facebook.com/faishal.umar.73",
    "mail_url": "mailto:faishal.umar2002@gmail.com"
}


POST: /users

data:{
    "nama": "Habib Aditya",
    "deskripsi": "2011016067 | Sistem Informasi ",
    "motto": "Bersabarlah dalam menghadapi cobaan, karena kalau sedikit namanya cobain",
    "info": "More Information :",
    "ig_url": "https://instagram.com/umarfaishall?utm_medium=copy_link",
    "fb_url": "https://www.facebook.com/faishal.umar.73",
    "mail_url": "mailto:faishal.umar2002@gmail.com"
}

PUT: /users/[2]

data:{
    "nama": "Anhar Suryadi update",
    "deskripsi": "2011016067 | Sistem Informasi ",
    "motto": "Bersabarlah dalam menghadapi cobaan, karena kalau sedikit namanya cobain",
    "info": "More Information :",
    "ig_url": "https://instagram.com/umarfaishall?utm_medium=copy_link",
    "fb_url": "https://www.facebook.com/faishal.umar.73",
    "mail_url": "mailto:faishal.umar2002@gmail.com"
}



<!--  Tabel Portofolio -->

GET: /portofolio

data:[
{
    "id": "1",
    "gambar": "https://umarfaishal.my.id/img/",
    "title": "Welcome to my websit",
    "deskripsi": "Namaku Faishal Umar Al-Amin, aku berasal dari pulau dewata atau yang dikenal dengan pulau Bali. Tapi aku lahir di tempat berbeda, yakni di Banyuwangi pada tanggal 13 Agustus 2002 (barangkali ada yang "
},
{
    "id": "2",
    "gambar": "https://umarfaishal.my.id/img/",
    "title": "Welcome guys",
    "deskripsi": "Namaku Faishal Umar Al-Amin, aku berasal dari pulau dewata atau yang dikenal dengan pulau Bali. Tapi aku lahir di tempat berbeda, yakni di Banyuwangi pada tanggal 13 Agustus 2002 (barangkali ada yang "
},
{
    "id": "4",
    "gambar": "https://umarfaishal.my.id/img/",
    "title": "Welcome everybody",
    "deskripsi": "Namaku Faishal Umar Al-Amin, aku berasal dari pulau dewata atau yang dikenal dengan pulau Bali. Tapi aku lahir di tempat berbeda, yakni di Banyuwangi pada tanggal 13 Agustus 2002 (barangkali ada yang "
},
{
    "id": "5",
    "gambar": "https://umarfaishal.my.id/img/",
    "title": "Welcome everybody",
    "deskripsi": "Namaku Faishal Umar Al-Amin, aku berasal dari pulau dewata atau yang dikenal dengan pulau Bali. Tapi aku lahir di tempat berbeda, yakni di Banyuwangi pada tanggal 13 Agustus 2002 (barangkali ada yang "
}
]

GET: /portofolio/[1]

data:{
    "id": "1",
    "gambar": "https://umarfaishal.my.id/img/",
    "title": "Welcome to my websit",
    "deskripsi": "Namaku Faishal Umar Al-Amin, aku berasal dari pulau dewata atau yang dikenal dengan pulau Bali. Tapi aku lahir di tempat berbeda, yakni di Banyuwangi pada tanggal 13 Agustus 2002 (barangkali ada yang "
}


POST: /portofolio

data:{
    "gambar": "https://umarfaishal.my.id/img/",
    "title": "Welcome everybody",
    "deskripsi": "Namaku Faishal Umar Al-Amin, aku berasal dari pulau dewata atau yang dikenal dengan pulau Bali. Tapi aku lahir di tempat berbeda, yakni di Banyuwangi pada tanggal 13 Agustus 2002 (barangkali ada yang "
}


PUT: /portofolio/[2]

data:{
    "gambar": "https://umarfaishal.my.id/img/",
    "title": "Welcome guys",
    "deskripsi": "Namaku Faishal Umar Al-Amin, aku berasal dari pulau dewata atau yang dikenal dengan pulau Bali. Tapi aku lahir di tempat berbeda, yakni di Banyuwangi pada tanggal 13 Agustus 2002 (barangkali ada yang "
}


<!--  Tabel Article -->

GET: /article

data:[
{
    "id": "1",
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/tekno.jpg",
    "title": "Kehidupan Teknologi",
    "subtitle": "Oleh : Faishal Umar Al-Amin"
},
{
    "id": "2",
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/mobil.jpg",
    "title": "Makanan terbaik",
    "subtitle": "Oleh : Faishal Umar Al-Amin"
},
{
    "id": "3",
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/tambang.jpg",
    "title": "Lika liku Pertambangan",
    "subtitle": "Oleh : Faishal Umar Al-Amin"
},
{
    "id": "6",
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/mobil.jpg",
    "title": "bengkel motor",
    "subtitle": "Oleh : Faishal Umar Al-Amin"
},
{
    "id": "7",
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/mobil.jpg",
    "title": "bengkel motor",
    "subtitle": "Oleh : Faishal Umar Al-Amin"
}
]


GET: /article/[2]

data:{
    "id": "2",
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/mobil.jpg",
    "title": "Makanan terbaik",
    "subtitle": "Oleh : Faishal Umar Al-Amin"
}


POST: /article

data:{
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/mobil.jpg",
    "title": "bengkel motor",
    "subtitle": "Oleh : Faishal Umar Al-Amin"
}


PUT: /article/[2]

data:{
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/mobil.jpg",
    "title": "Makanan terbaik",
    "subtitle": "Oleh : Faishal Umar Al-Amin"
}

```
