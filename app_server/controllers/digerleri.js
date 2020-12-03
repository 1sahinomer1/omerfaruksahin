const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında' });
}

const layout=function(req, res, next) {
  res.render('layout',{
      'bilgi':{
         'ad':'Serhat',
         'soyad':'GENÇ'
    }
});
}


module.exports={
  hakkinda,
  layout
}