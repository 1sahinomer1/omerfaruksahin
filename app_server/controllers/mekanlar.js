
var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
    { 'baslik': 'Anasayfa',
      'sayfaBaslik':{
         'siteAd':'Mekan32',
         'aciklama':'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar':[
        {
          'ad':'Starbucks',
          'adres':'Centrum Garden',
          'puan':'3',
          'imkanlar':['kahve','çay','pasta'],
          'mesafe':'10km'
        },
        {
          'ad':'PİDEM',
          'adres':'Iyaş AVM',
          'puan':'4',
          'imkanlar':['pide','tatli','mesrubat'],
          'mesafe':'5km'
        },
        {
          'ad':'Tavuk Dunyasi',
          'adres':'Centrum Garden',
          'puan':'5',
          'imkanlar':['tavuk','kola','salata'],
          'mesafe':'10km'
        },
        {
          'ad':'Simit Sarayı',
          'adres':'SDÜ Doğu Kampüsü',
          'puan':'3',
          'imkanlar':['kahvaltı','simit','çay'],
          'mesafe':'12km'
        },
        {
          'ad':'Yesene',
          'adres':'Isparta Merkez',
          'puan':'4',
          'imkanlar':['pilav','tavuk doner','içecek'],
          'mesafe':'5km'
        }
      ]
    });
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay',{
      'baslik':'Mekan Bilgisi',
      'sayfaBaslik':'Starbucks',
      'mekanBilgisi':{
          'ad':'Starbucks',
          'puan':3,
          'imkanlar':['kahve','çay','pasta'],
          'koordinatlar':{
              'enlem':37.781885,
              'boylam':30.566034
          },
          'saatler':[
              {
                'gunler':'Pazartesi-Cuma',
                'acilis':'7:00',
                'kapanis':'23:00',
                'kapali':false
              },
              {
                'gunler':'Cumartesi',
                'acilis':'9:00',
                'kapanis':'22:30',
                'kapali':false
              },
              {
                'gunler':'Pazar',
                'kapali':true
              }
            ],
            'yorumlar':[
                {
                  'yorumYapan':'Omer Faruk Sahin',
                  'puan':1,
                  'tarih':'3.12.2020',
                  'yorumMetni':'Kahve sevmiyorum.'
                }
            ]
      }
  });
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}


module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}