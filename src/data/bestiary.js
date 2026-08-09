// ============================================================
// LA GRANDE ROUTE — src/data/bestiary.js
// Faune de l'Acte I, trophées, compositions de rencontres.
// Aucun texte ici : noms/descriptions/intents = clés w.foe.*.
// Fusion de l'ancien socle23.js : guerrier_Fouisseur, épiques,
// trophées, spéciaux télégraphiés.
// ============================================================
const MONSTRES={
chien:{n:'w.foe.chien.name',em:"🐕",pv:[14,20],atq:[4,7],cat:"bete",faib:"Domination",txt:'w.foe.chien.txt',ints:[{n:'w.foe.chien.i0n',em:"🦷",d:[4,7]},{n:'w.foe.chien.i1n',em:"🦷",d:[4,7]},{n:'w.foe.chien.i2n',em:"💥",d:[6,9]}]},
Charognard:{n:'w.foe.Charognard.name',em:"🤮",pv:[18,26],atq:[4,7],cat:"necrophage",faib:"Onde",txt:'w.foe.Charognard.txt',ints:[{n:'w.foe.Charognard.i0n',em:"🪝",d:[4,7]},{n:'w.foe.Charognard.i1n',em:"☠️",d:[3,5],fx:"poison"},{n:'w.foe.Charognard.i2n',em:"🦷",d:[5,8]}]},
alguire:{n:'w.foe.alguire.name',em:"🦴",pv:[40,52],atq:[7,11],cat:"necrophage",faib:"Brasier",txt:'w.foe.alguire.txt',ints:[{n:'w.foe.alguire.i0n',em:"🦷",d:[7,11]},{n:'w.foe.alguire.i1n',em:"🦘",d:[8,12],fx:"poison"},{n:'w.foe.alguire.i2n',em:"🌙",d:[0,0],fx:"peur"}]},
Noyé:{n:'w.foe.Noyé.name',em:"🧟",pv:[24,32],atq:[5,8],cat:"necrophage",faib:"Brasier",txt:'w.foe.Noyé.txt',ints:[{n:'w.foe.Noyé.i0n',em:"🪝",d:[5,8]},{n:'w.foe.Noyé.i1n',em:"🪝",d:[5,8]},{n:'w.foe.Noyé.i2n',em:"💧",d:[8,12],fx:"poison"}]},
goule:{n:'w.foe.goule.name',em:"👹",pv:[28,36],atq:[6,9],cat:"necrophage",faib:"Brasier",txt:'w.foe.goule.txt',ints:[{n:'w.foe.goule.i0n',em:"🦷",d:[6,9]},{n:'w.foe.goule.i1n',em:"🦷",d:[6,9]},{n:'w.foe.goule.i2n',em:"🩸",d:[9,13]}]},
Fouisseure:{n:'w.foe.Fouisseure.name',em:"👺",pv:[20,26],atq:[4,7],cat:"ogroide",faib:"Onde",txt:'w.foe.Fouisseure.txt',ints:[{n:'w.foe.Fouisseure.i0n',em:"🪝",d:[4,7]},{n:'w.foe.Fouisseure.i1n',em:"🦘",d:[7,10]}]},
loup:{n:'w.foe.loup.name',em:"🐺",pv:[22,30],atq:[5,9],cat:"bete",faib:"Domination",txt:'w.foe.loup.txt',ints:[{n:'w.foe.loup.i0n',em:"🦷",d:[5,9]},{n:'w.foe.loup.i1n',em:"🌙",d:[0,0],fx:"peur"}]},
foglet:{n:'w.foe.foglet.name',em:"🌫️",pv:[30,40],atq:[6,10],cat:"ogroide",faib:"Glyphe",txt:'w.foe.foglet.txt',ints:[{n:'w.foe.foglet.i0n',em:"🪝",d:[6,10]},{n:'w.foe.foglet.i1n',em:"🗡️",d:[9,14]},{n:'w.foe.foglet.i2n',em:"🌫️",d:[0,0],fx:"brume"}]},
brigand:{n:'w.foe.brigand.name',em:"🗡️",pv:[20,28],atq:[5,8],cat:"humain",faib:null,txt:'w.foe.brigand.txt',ints:[{n:'w.foe.brigand.i0n',em:"🗡️",d:[5,8]},{n:'w.foe.brigand.i1n',em:"🩸",d:[8,12]}]},
spectre:{n:'w.foe.spectre.name',em:"👻",pv:[34,44],atq:[7,11],cat:"spectre",faib:"Glyphe",txt:'w.foe.spectre.txt',ints:[{n:'w.foe.spectre.i0n',em:"❄️",d:[7,11]},{n:'w.foe.spectre.i1n',em:"😱",d:[4,6],fx:"peur"},{n:'w.foe.spectre.i2n',em:"🌀",d:[10,15]},{n:'w.foe.spectre.i3n',em:"🌫️",d:[0,0],fx:"brume"}]},
Bête d'Épines:{n:'w.foe.Bête d'Épines.name',em:"🦌",pv:[70,84],atq:[9,14],cat:"relique",faib:"Onde",epic:true,trophy:'fiend_skull',special:{fx:'devour',n:'w.foe.Bête d'Épines.sp',em:'🦴'},txt:'w.foe.Bête d'Épines.txt',ints:[{n:'w.foe.Bête d'Épines.i0n',em:"💥",d:[10,15]},{n:'w.foe.Bête d'Épines.i1n',em:"👁️",d:[0,0],fx:"peur"},{n:'w.foe.Bête d'Épines.i2n',em:"🦶",d:[13,18]}]},
Leshy:{n:'w.foe.Leshy.name',em:"🌲",pv:[66,80],atq:[8,13],cat:"relique",faib:"Brasier",epic:true,trophy:'leshen_bark',txt:'w.foe.Leshy.txt',ints:[{n:'w.foe.Leshy.i0n',em:"🌿",d:[8,12]},{n:'w.foe.Leshy.i1n',em:"🌿",d:[11,16]},{n:'w.foe.Leshy.i2n',em:"☠️",d:[7,10],fx:"poison"}]},
griffon:{n:'w.foe.griffon.name',em:"🦅",pv:[210,210],atq:[12,17],cat:"draconide",faib:"Onde",boss:true,vole:true,epic:true,trophy:'griffon_plume',special:{fx:'swoop',n:'w.foe.griffon.sp',em:'🦅'},txt:'w.foe.griffon.txt',intsVol:[{n:'w.foe.griffon.iV0n',em:"🦅",d:[14,19]},{n:'w.foe.griffon.iV1n',em:"📢",d:[6,9],fx:"peur"}],intsSol:[{n:'w.foe.griffon.iS0n',em:"🪝",d:[12,16]},{n:'w.foe.griffon.iS1n',em:"🦷",d:[15,20]},{n:'w.foe.griffon.iS2n',em:"🌪️",d:[8,12],fx:"sonne"}]},
guerrier_Fouisseur:{n:'w.foe.guerrier_Fouisseur.name',em:"🪓",pv:[60,72],atq:[8,12],cat:"ogroide",faib:"Brasier",epic:true,trophy:'Fouisseur_crown',special:{fx:'rally',n:'w.foe.guerrier_Fouisseur.sp',em:'📯'},txt:'w.foe.guerrier_Fouisseur.txt',ints:[{n:'w.foe.guerrier_Fouisseur.i0n',em:"🪓",d:[8,12]},{n:'w.foe.guerrier_Fouisseur.i1n',em:"🪓",d:[9,13]},{n:'w.foe.guerrier_Fouisseur.i2n',em:"📢",d:[0,0],fx:"peur"}]}
};
const TROPHIES={
Fouisseur_crown:{n:'w.trophy.Fouisseur_crown.name',desc:'w.trophy.Fouisseur_crown.desc',voice:'w.trophy.Fouisseur_crown.voice',img:'v_rune',bonus:{armorStart:2}},
griffon_plume:{n:'w.trophy.griffon_plume.name',desc:'w.trophy.griffon_plume.desc',voice:'w.trophy.griffon_plume.voice',img:'v_glyph',bonus:{paFirst:1}},
leshen_bark:{n:'w.trophy.leshen_bark.name',desc:'w.trophy.leshen_bark.desc',voice:'w.trophy.leshen_bark.voice',img:'v_oil',bonus:{pvFlat:6}},
fiend_skull:{n:'w.trophy.fiend_skull.name',desc:'w.trophy.fiend_skull.desc',voice:'w.trophy.fiend_skull.voice',img:'v_crystal',bonus:{esqFlat:1,dmgCat:{relique:1.15}}}
};
const CATNOMS={necrophage:'w.cat.necrophage',spectre:'w.cat.spectre',bete:'w.cat.bete',ogroide:'w.cat.ogroide',relique:'w.cat.relique',draconide:'w.cat.draconide',humain:'w.cat.humain'};
const HUILES={necrophage:'w.oil.necrophage',spectre:'w.oil.spectre',bete:'w.oil.bete',draconide:'w.oil.draconide'};
function pickRencontre(c,type){
if(type==='taniere'){
 if(c<=3)return{foes:['guerrier_Fouisseur','Fouisseure','Fouisseure'],lead:'guerrier_Fouisseur'};
 if(c<=7)return{foes:['Leshy','loup','loup'],lead:'Leshy'};
 if(c<=9)return{foes:['Bête d'Épines','goule','Charognard'],lead:'Bête d'Épines'};
  return pick([
   {foes:['Bête d'Épines','Fouisseure','Fouisseure'],lead:'Bête d'Épines'},
   {foes:['Leshy','loup','loup'],lead:'Leshy'},
   {foes:['alguire','goule','goule'],lead:'alguire'},
   {foes:['Bête d'Épines','goule','Charognard'],lead:'Bête d'Épines'}
  ]);
 }
 let pool;
 if(c<=2){
  pool=[
   {foes:['chien'],lead:'chien'},
   {foes:['chien','chien'],lead:'chien'},
   {foes:['loup','loup'],lead:'loup'},
   {foes:['Fouisseure','Fouisseure'],lead:'Fouisseure'},
   {foes:['Noyé','Noyé'],lead:'Noyé'}
  ];
 }else if(c<=4){
  pool=[
   {foes:['brigand','brigand'],lead:'brigand'},
   {foes:['Noyé','Charognard'],lead:'Noyé'},
   {foes:['goule','goule'],lead:'goule'},
   {foes:['loup','loup','chien'],lead:'loup'},
   {foes:['Fouisseure','Fouisseure','Fouisseure'],lead:'Fouisseure'}
  ];
 }else if(c<=7){
  pool=[
   {foes:['brigand','brigand','brigand'],lead:'brigand'},
   {foes:['foglet','foglet'],lead:'foglet'},
   {foes:['goule','Charognard','Charognard'],lead:'goule'},
   {foes:['spectre'],lead:'spectre'},
   {foes:['foglet','Noyé','foglet'],lead:'foglet'}
  ];
 }else{
  pool=[
   {foes:['alguire','goule'],lead:'alguire'},
   {foes:['spectre','foglet'],lead:'spectre'},
   {foes:['brigand','brigand','brigand'],lead:'brigand'},
   {foes:['Leshy'],lead:'Leshy'},
   {foes:['Bête d'Épines'],lead:'Bête d'Épines'},
   {foes:['alguire','goule','Charognard'],lead:'alguire'}
  ];
 }
 return pick(pool);
}
function rencontreEvent(key){switch(key){case 'brigand':return{foes:['brigand','brigand','brigand'],lead:'brigand'};case 'Fouisseure':return{foes:['Fouisseure','Fouisseure','Fouisseure'],lead:'Fouisseure'};case 'spectre':return{foes:['spectre'],lead:'spectre'};default:return{foes:[key],lead:key};}}