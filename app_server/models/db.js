var mongoose=require("mongoose");
var dbURI="mongodb+srv://ahmet1234:1234@mekanbul.qpke1ce.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });

}
process.on("SIGNIT",function(){
    kapat("uygulama kapatildi",function(){
    process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
console.log(dbURI +"Adresindeki veritabanına bağlandı");
});
mongoose.connection.on("disconnected",function(){
    console.log("baglanti koptu");
});
mongoose.connection.on("error",function(){
        console.log("bağlantı hatası");
});
        

require("./mekansema");