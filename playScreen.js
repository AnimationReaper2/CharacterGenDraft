const screen1 = document.getElementById('playScreen');
//INSTRUCTIONS

const modal = document.getElementById("myModal");
const instructionsButton = document.getElementById("instructions");
const span = document.getElementsByClassName("close")[0];

instructionsButton.addEventListener("click", () => {
    modal.style.display = "block";
});
  
span.addEventListener("click", () => {
    modal.style.display = "none";
});
  
window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};

//GAME SLOTS

const modal2 = document.getElementById("gameSlots");
const playBTN = document.getElementById("play");
const span2 = document.getElementsByClassName("back")[0];

playBTN.addEventListener("click", () => {
    modal2.style.display = "block";
});
  
span2.addEventListener("click", () => {
    modal2.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
};

//SLOT SCREENS

const charGen = document.getElementById('main');

const game1 = document.getElementById('s1');
const game2 = document.getElementById('s2');
const game3 = document.getElementById('s3');

game1.addEventListener("click", () => {
    charGen.style.display = 'grid';
    screen1.style.display = 'none';
});
game2.addEventListener("click", () => {
    charGen.style.display = 'grid';
    screen1.style.display = 'none';
});
game3.addEventListener("click", () => {
    charGen.style.display = 'grid';
    screen1.style.display = 'none';
});

//NAME
const save = document.getElementById('savebtn');
save.addEventListener('click', function(){
  var val = document.getElementById('name').value;
  document.getElementById('header').innerHTML = val;
  
  const d = new Date();
  let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  let date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  document.getElementById('right-side').innerHTML = date;
  document.getElementById('footer').innerHTML = time;
});

//CLEAR
const clear = document.getElementById('clearbtn');
clear.addEventListener('click', function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

//CHARACTER GEN
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 625;

const back = document.getElementsByClassName('close2')[0];

back.addEventListener("click", () => {
  charGen.style.display = "none";
  screen1.style.display = 'block';
});

const fem1tbl = document.getElementById('fem1');
const fem2tbl = document.getElementById('fem2');
const fem3tbl = document.getElementById('fem3');
const fem4tbl = document.getElementById('fem4');
const fem5tbl = document.getElementById('fem5');
const fem6tbl = document.getElementById('fem6');
const fem7tbl = document.getElementById('fem7');
const fem8tbl = document.getElementById('fem8');
const fem9tbl = document.getElementById('fem9');
const fem10tbl = document.getElementById('fem10');
const fem11tbl = document.getElementById('fem11');
const fem12tbl = document.getElementById('fem12');
const mal1tbl = document.getElementById('mal1');
const mal2tbl = document.getElementById('mal2');
const mal3tbl = document.getElementById('mal3');
const mal4tbl = document.getElementById('mal4');
const mal5tbl = document.getElementById('mal5');
const mal6tbl = document.getElementById('mal6');
const mal7tbl = document.getElementById('mal7');
const mal8tbl = document.getElementById('mal8');
const mal9tbl = document.getElementById('mal9');
const mal10tbl = document.getElementById('mal10');
const mal11tbl = document.getElementById('mal11');
const mal12tbl = document.getElementById('mal12');
//=======================================================
//HEAD
//=======================================================
const headbtn = document.getElementById('head');
const headtbl = document.getElementById('headOptions');

const sfctbl = document.getElementById('femSkinColor');
const smctbl = document.getElementById('malSkinColor');

const hb = document.getElementsByClassName('headBody');

const ebctbl0 = document.getElementById('ebc');
const ebctbl = document.getElementById('eyebrowcolor');
const ebctbl2 = document.getElementById('eyebrowcolor2');
const ebctbl3 = document.getElementById('eyebrowcolor3');
const ebctbl4 = document.getElementById('eyebrowcolor4');
const ebctbl5 = document.getElementById('eyebrowcolor5');
const ebctbl6 = document.getElementById('eyebrowcolor6');

const efctbl0 = document.getElementById('efc');
const efbntbl1 = document.getElementById('eyeFem1');
const efbntbl2 = document.getElementById('eyeFem2');
const efrtbl3 = document.getElementById('eyeFem3');

const embetbl1 = document.getElementById('eyeMal1');
const embntbl2 = document.getElementById('eyeMal2');
const emrtbl3 = document.getElementById('eyeMal3');

const efctbl1 = document.getElementById('eyef1');
const efctbl2 = document.getElementById('eyef2');
const efctbl3 = document.getElementById('eyef3');
const emctbl1 = document.getElementById('eyem1');
const emctbl2 = document.getElementById('eyem2');
const emctbl3 = document.getElementById('eyem3');

const hctbl0 = document.getElementById('hfc');
const hfbntbl1 = document.getElementById('hairFem1');
const hfbntbl2 = document.getElementById('hairFem2');
const hfrtbl3 = document.getElementById('hairFem3');

const hmbetbl1 = document.getElementById('hairMal1');
const hmbntbl2 = document.getElementById('hairMal2');
const hmrtbl3 = document.getElementById('hairMal3');

const hfctbl0 = document.getElementById('hfc');
const hfctbl1 = document.getElementById('hairf1');
const hfctbl2 = document.getElementById('hairf2');
const hfctbl3 = document.getElementById('hairf3');
const hmctbl1 = document.getElementById('hairm1');
const hmctbl2 = document.getElementById('hairm2');
const hmctbl3 = document.getElementById('hairm3');

//GENDER
  const gfbtn = document.getElementById('genFem');
  const gmbtn = document.getElementById('genMal');
  //GENDER COLOR
    const gfbtn1 = document.getElementById('skinfem1');
    const gfbtn2 = document.getElementById('skinfem2');
    const gfbtn3 = document.getElementById('skinfem3');
    const gfbtn4 = document.getElementById('skinfem4');
    const gfbtn5 = document.getElementById('skinfem5');

    const gmbtn1 = document.getElementById('skinmal1');
    const gmbtn2 = document.getElementById('skinmal2');
    const gmbtn3 = document.getElementById('skinmal3');
    const gmbtn4 = document.getElementById('skinmal4');
    const gmbtn5 = document.getElementById('skinmal5');
//EYEBROWS
  const ebbtn = document.getElementById('eyebrow1');
  const ebbtn2 = document.getElementById('eyebrow2');
  const ebbtn3 = document.getElementById('eyebrow3');
  const ebbtn4 = document.getElementById('eyebrow4');
  const ebbtn5 = document.getElementById('eyebrow5');
  const ebbtn6 = document.getElementById('eyebrow6');
  //EYEBROW COLOR
    const ebblon1btn = document.getElementById('eyebrowBlon1');
    const ebbrow1btn = document.getElementById('eyebrowBrow1');
    const ebred1btn = document.getElementById('eyebrowRed1');
    
    const ebblon2btn = document.getElementById('eyebrowBlon2');
    const ebbrow2btn = document.getElementById('eyebrowBrow2');
    const ebred2btn = document.getElementById('eyebrowRed2');

    const ebblon3btn = document.getElementById('eyebrowBlon3');
    const ebbrow3btn = document.getElementById('eyebrowBrow3');
    const ebred3btn = document.getElementById('eyebrowRed3');

    const ebblon4btn = document.getElementById('eyebrowBlon4');
    const ebbrow4btn = document.getElementById('eyebrowBrow4');
    const ebred4btn = document.getElementById('eyebrowRed4');

    const ebblon5btn = document.getElementById('eyebrowBlon5');
    const ebbrow5btn = document.getElementById('eyebrowBrow5');
    const ebred5btn = document.getElementById('eyebrowRed5');

    const ebblon6btn = document.getElementById('eyebrowBlon6');
    const ebbrow6btn = document.getElementById('eyebrowBrow6');
    const ebred6btn = document.getElementById('eyebrowRed6');
//EYES
  const ef1btn = document.getElementById('eyeFem1');
  const ef2btn = document.getElementById('eyeFem2');
  const ef3btn = document.getElementById('eyeFem3');

  const em1btn = document.getElementById('eyeMal1');
  const em2btn = document.getElementById('eyeMal2');
  const em3btn = document.getElementById('eyeMal3');
  //EYE COLOR
    const efbe1btn = document.getElementById('eyeFemBlue1');
    const efbn1btn = document.getElementById('eyeFemBrown1');
    const efg1btn = document.getElementById('eyeFemGreen1');

    const efbe2btn = document.getElementById('eyeFemBlue2');
    const efbn2btn = document.getElementById('eyeFemBrown2');
    const efg2btn = document.getElementById('eyeFemGreen2');

    const efbe3btn = document.getElementById('eyeFemBlue3');
    const efbn3btn = document.getElementById('eyeFemBrown3');
    const efg3btn = document.getElementById('eyeFemGreen3');

    const embe1btn = document.getElementById('eyeMalBlue1');
    const embn1btn = document.getElementById('eyeMalBrown1');
    const emg1btn = document.getElementById('eyeMalGreen1');

    const embe2btn = document.getElementById('eyeMalBlue2');
    const embn2btn = document.getElementById('eyeMalBrown2');
    const emg2btn = document.getElementById('eyeMalGreen2');

    const embe3btn = document.getElementById('eyeMalBlue3');
    const embn3btn = document.getElementById('eyeMalBrown3');
    const emg3btn = document.getElementById('eyeMalGreen3');
//MOUTH
  const mfbtn1 = document.getElementById('mouthFem1');
  const mfbtn2 = document.getElementById('mouthFem2');
  const mfbtn3 = document.getElementById('mouthFem3');
  const mmbtn1 = document.getElementById('mouthMal1');
  const mmbtn2 = document.getElementById('mouthMal2');
  const mmbtn3 = document.getElementById('mouthMal3');
//HAIR
  const hf1btn = document.getElementById('hairFem1');
  const hf2btn = document.getElementById('hairFem2');
  const hf3btn = document.getElementById('hairFem3');

  const hm1btn = document.getElementById('hairMal1');
  const hm2btn = document.getElementById('hairMal2');
  const hm3btn = document.getElementById('hairMal3');
  //HAIR COLOR
    const hfbe1btn = document.getElementById('hairFemBlon1');
    const hfbn1btn = document.getElementById('hairFemBrown1');
    const hfr1btn = document.getElementById('hairFemRed1');

    const hfbe2btn = document.getElementById('hairFemBlon2');
    const hfbn2btn = document.getElementById('hairFemBrown2');
    const hfr2btn = document.getElementById('hairFemRed2');
    
    const hfbe3btn = document.getElementById('hairFemBlon3');
    const hfbn3btn = document.getElementById('hairFemBrown3');
    const hfr3btn = document.getElementById('hairFemRed3');

    const hmbe1btn = document.getElementById('hairMalBlon1');
    const hmbn1btn = document.getElementById('hairMalBrown1');
    const hmr1btn = document.getElementById('hairMalRed1');

    const hmbe2btn = document.getElementById('hairMalBlon2');
    const hmbn2btn = document.getElementById('hairMalBrown2');
    const hmr2btn = document.getElementById('hairMalRed2');
    
    const hmbe3btn = document.getElementById('hairMalBlon3');
    const hmbn3btn = document.getElementById('hairMalBrown3');
    const hmr3btn = document.getElementById('hairMalRed3');
//NOSE
  const nbtn1 = document.getElementById('nose1');
  const nbtn2 = document.getElementById('nose2');
  const nbtn3 = document.getElementById('nose3');
  const nbtn4 = document.getElementById('nose4');
//=======================================================
//BODY
//=======================================================
const bodybtn = document.getElementById('body');
const bodytbl = document.getElementById('bodyOptions');
//SHIRTS
  const cfs1btn = document.getElementById('clothFemShirt');
  const cfs2btn = document.getElementById('clothFemShirt2');
  const cms1btn = document.getElementById('clothMalShirt');
  const cms2btn = document.getElementById('clothMalShirt2');
//JACKETS
  const cfjbtn = document.getElementById('clothFemJacket');
  const cmjbtn = document.getElementById('clothMalJacket');
//OTHER
  const cfo1btn = document.getElementById('clothFemOther');
  const cmo1btn = document.getElementById('clothMalOther');

//=======================================================
//LEGS
//=======================================================
const legsbtn = document.getElementById('legs');
const legstbl = document.getElementById('legsOptions');
//PANTS
  const cfp1btn = document.getElementById('clothFemPant1');
  const cfp2btn = document.getElementById('clothFemPant2');
  const cmp1btn = document.getElementById('clothMalPant1');
  const cmp2btn = document.getElementById('clothMalPant2');
//SHORTS
  const cfstbtn = document.getElementById('clothFemShort');
  const cmstbtn = document.getElementById('clothMalShort');
//OTHER
  const cfo2btn = document.getElementById('clothFemOther2');
  const cmo2btn = document.getElementById('clothMalOther2');
//SHOES
  const cfssebtn = document.getElementById('clothFemShoe');
  const cmssebtn = document.getElementById('clothMalShoe');

window.onclick = function(event){
  if(event.target == headtbl){
    headtbl.style.display = 'none';
  }
  else if(event.target == legstbl){
    legstbl.style.display = 'none';
  }
  else if(event.target == bodytbl){
    bodytbl.style.display = 'none';
  }
};

//=======================================================
//BUTTON CONTROLS
//=======================================================

//=======================================================
//HEAD
//=======================================================
headbtn.addEventListener('click', function(){
  headtbl.style.display = 'block';
  legstbl.style.display = 'none';
  bodytbl.style.display = 'none';
  //skin
  sfctbl.style.display = 'none';
  smctbl.style.display = 'none';
  //eyebrow
  ebctbl0.style.display = 'none';
  //eye
  efctbl0.style.display = 'none';
  //hair
  hctbl0.style.display = 'none';
})
//GENDER
//FEMALE
gfbtn.addEventListener('click', function(){
  var headbodyfemale = new Image();
  headbodyfemale.src = 'Body-Female.png';

  headbodyfemale.onload = function(){
    ctx.drawImage(headbodyfemale,((400-headbodyfemale.width)/2),50);
  }
  //skin fem
  sfctbl.style.display = 'block';
  //skin mal
  smctbl.style.display = 'none';
  //eyebrow
  ebctbl0.style.display = 'none';
  //eyes
  efctbl0.style.display = 'none';
  //hair
  hctbl0.style.display = 'none';
  //fem
  fem1tbl.style.display = 'block';
  fem2tbl.style.display = 'block';
  fem3tbl.style.display = 'block';
  fem4tbl.style.display = 'block';
  fem5tbl.style.display = 'block';
  fem6tbl.style.display = 'block';
  fem7tbl.style.display = 'block';
  fem8tbl.style.display = 'block';
  fem9tbl.style.display = 'block';
  fem10tbl.style.display = 'block';
  fem11tbl.style.display = 'block';
  fem12tbl.style.display = 'block';
  //mal
  mal1tbl.style.display = 'none';
  mal2tbl.style.display = 'none';
  mal3tbl.style.display = 'none';
  mal4tbl.style.display = 'none';
  mal5tbl.style.display = 'none';
  mal6tbl.style.display = 'none';
  mal7tbl.style.display = 'none';
  mal8tbl.style.display = 'none';
  mal9tbl.style.display = 'none';
  mal10tbl.style.display = 'none';
  mal11tbl.style.display = 'none';
  mal12tbl.style.display = 'none';
});

gfbtn1.addEventListener('click', function(){
  var headbodyfemale2 = new Image();
  headbodyfemale2.src = 'Body-Female-2.png';

  headbodyfemale2.onload = function(){
    ctx.drawImage(headbodyfemale2,((400-headbodyfemale2.width)/2),50);
  }
});

gfbtn2.addEventListener('click', function(){
  var headbodyfemale3 = new Image();
  headbodyfemale3.src = 'Body-Female-3.png';

  headbodyfemale3.onload = function(){
    ctx.drawImage(headbodyfemale3,((400-headbodyfemale3.width)/2.07),50);
  }
});

gfbtn3.addEventListener('click', function(){
  var headbodyfemale4 = new Image();
  headbodyfemale4.src = 'Body-Female-4.png';

  headbodyfemale4.onload = function(){
    ctx.drawImage(headbodyfemale4,((400-headbodyfemale4.width)/2),50);
  }
});

gfbtn4.addEventListener('click', function(){
  var headbodyfemale5 = new Image();
  headbodyfemale5.src = 'Body-Female-5.png';

  headbodyfemale5.onload = function(){
    ctx.drawImage(headbodyfemale5,((400-headbodyfemale5.width)/2.1),47);
  }
});

gfbtn5.addEventListener('click', function(){
  var headbodyfemale6 = new Image();
  headbodyfemale6.src = 'Body-Female-6.png';

  headbodyfemale6.onload = function(){
    ctx.drawImage(headbodyfemale6,((400-headbodyfemale6.width)/2.1),48);
  }
});
//MALE
gmbtn.addEventListener('click', function(){
  var headbodymale = new Image();
  headbodymale.src = 'Body-Male.png';

  headbodymale.onload = function(){
    ctx.drawImage(headbodymale,((400-headbodymale.width)/2),50);
  }
  //skin mal
  smctbl.style.display = 'block';
  //skin fem
  sfctbl.style.display = 'none';
  //eyebrow
  ebctbl0.style.display = 'none';
  //eye
  efctbl0.style.display = 'none';
  //hair
  hctbl0.style.display = 'none';
  //fem
  fem1tbl.style.display = 'none';
  fem2tbl.style.display = 'none';
  fem3tbl.style.display = 'none';
  fem4tbl.style.display = 'none';
  fem5tbl.style.display = 'none';
  fem6tbl.style.display = 'none';
  fem7tbl.style.display = 'none';
  fem8tbl.style.display = 'none';
  fem9tbl.style.display = 'none';
  fem10tbl.style.display = 'none';
  fem11tbl.style.display = 'none';
  fem12tbl.style.display = 'none';
  //mal
  mal1tbl.style.display = 'block';
  mal2tbl.style.display = 'block';
  mal3tbl.style.display = 'block';
  mal4tbl.style.display = 'block';
  mal5tbl.style.display = 'block';
  mal6tbl.style.display = 'block';
  mal7tbl.style.display = 'block';
  mal8tbl.style.display = 'block';
  mal9tbl.style.display = 'block';
  mal10tbl.style.display = 'block';
  mal11tbl.style.display = 'block';
  mal12tbl.style.display = 'block';
});

gmbtn1.addEventListener('click', function(){
  var headbodymale1 = new Image();
  headbodymale1.src = 'Body-Male-2.png';

  headbodymale1.onload = function(){
    ctx.drawImage(headbodymale1,((400-headbodymale1.width)/2.1),49);
  }
});

gmbtn2.addEventListener('click', function(){
  var headbodymale2 = new Image();
  headbodymale2.src = 'Body-Male-3.png';

  headbodymale2.onload = function(){
    ctx.drawImage(headbodymale2,((400-headbodymale2.width)/2.05),52);
  }
});

gmbtn3.addEventListener('click', function(){
  var headbodymale3 = new Image();
  headbodymale3.src = 'Body-Male-4.png';

  headbodymale3.onload = function(){
    ctx.drawImage(headbodymale3,((400-headbodymale3.width)/2.11),51);
  }
});

gmbtn4.addEventListener('click', function(){
  var headbodymale4 = new Image();
  headbodymale4.src = 'Body-Male-5.png';

  headbodymale4.onload = function(){
    ctx.drawImage(headbodymale4,((400-headbodymale4.width)/2.1),52);
  }
});

gmbtn5.addEventListener('click', function(){
  var headbodymale5 = new Image();
  headbodymale5.src = 'Body-Male-6.png';

  headbodymale5.onload = function(){
    ctx.drawImage(headbodymale5,((400-headbodymale5.width)/2.1),50);
  }
});

//EYEBROWS
ebbtn.addEventListener('click', function(){
  var headeyebrows1 = new Image();
  headeyebrows1.src = 'Eyebrows-Blonde.png';

  headeyebrows1.onload = function(){
    ctx.drawImage(headeyebrows1,((400-headeyebrows1.width)/2.24),98);
  }
  //skin fem
  sfctbl.style.display = 'none';
  //skin mal
  smctbl.style.display =  'none';
  //eye
  efctbl0.style.display = 'none';
  //eyebrows
  ebctbl0.style.display = 'block';
  //eyebrow color
  ebctbl.style.display = 'block';
  ebctbl2.style.display = 'none';
  ebctbl3.style.display = 'none';
  ebctbl4.style.display = 'none';
  ebctbl5.style.display = 'none';
  ebctbl6.style.display = 'none';
  hctbl0.style.display = 'none';
});
  ebblon1btn .addEventListener('click', function(){
    var headeyebrowsblon1 = new Image();
    headeyebrowsblon1.src = 'Eyebrows-Blonde.png';

    headeyebrowsblon1.onload = function(){
      ctx.drawImage(headeyebrowsblon1,((400-headeyebrowsblon1.width)/2.24),98);
    }
  });
  ebbrow1btn .addEventListener('click', function(){
    var headeyebrowsbrow1 = new Image();
    headeyebrowsbrow1.src = 'Eyebrows-Brown.png';

    headeyebrowsbrow1.onload = function(){
      ctx.drawImage(headeyebrowsbrow1,((400-headeyebrowsbrow1.width)/2.24),98);
    }
  });
  ebred1btn .addEventListener('click', function(){
    var headeyebrowsred1 = new Image();
    headeyebrowsred1.src = 'Eyebrows-Red.png';

    headeyebrowsred1.onload = function(){
      ctx.drawImage(headeyebrowsred1,((400-headeyebrowsred1.width)/2.24),98);
    }
  });
ebbtn2.addEventListener('click', function(){
  var headeyebrows2 = new Image();
  headeyebrows2.src = 'Eyebrows-Blonde-2.png';

  headeyebrows2.onload = function(){
    ctx.drawImage(headeyebrows2,((400-headeyebrows2.width)/2.24),98);
  }
  sfctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'block';
  ebctbl.style.display = 'none';
  ebctbl2.style.display = 'block';
  ebctbl3.style.display = 'none';
  ebctbl4.style.display = 'none';
  ebctbl5.style.display = 'none';
  ebctbl6.style.display = 'none';
  hctbl0.style.display = 'none';
});
  ebblon2btn .addEventListener('click', function(){
    var headeyebrowsblon2 = new Image();
    headeyebrowsblon2.src = 'Eyebrows-Blonde-2.png';

    headeyebrowsblon2.onload = function(){
      ctx.drawImage(headeyebrowsblon2,((400-headeyebrowsblon2.width)/2.24),98);
    }
  });
  ebbrow2btn .addEventListener('click', function(){
    var headeyebrowsbrow2 = new Image();
    headeyebrowsbrow2.src = 'Eyebrows-Brown-2.png';

    headeyebrowsbrow2.onload = function(){
      ctx.drawImage(headeyebrowsbrow2,((400-headeyebrowsbrow2.width)/2.24),98);
    }
  });
  ebred2btn .addEventListener('click', function(){
    var headeyebrowsred2 = new Image();
    headeyebrowsred2.src = 'Eyebrows-Red-2.png';

    headeyebrowsred2.onload = function(){
      ctx.drawImage(headeyebrowsred2,((400-headeyebrowsred2.width)/2.24),98);
    }
  });
ebbtn3.addEventListener('click', function(){
  var headeyebrows3 = new Image();
  headeyebrows3.src = 'Eyebrows-Blonde-3.png';

  headeyebrows3.onload = function(){
    ctx.drawImage(headeyebrows3,((400-headeyebrows3.width)/2.24),98);
  }
  sfctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'block';
  ebctbl.style.display = 'none';
  ebctbl2.style.display = 'none';
  ebctbl3.style.display = 'block';
  ebctbl4.style.display = 'none';
  ebctbl5.style.display = 'none';
  ebctbl6.style.display = 'none';
  hctbl0.style.display = 'none';
});
  ebblon3btn .addEventListener('click', function(){
    var headeyebrowsblon3 = new Image();
    headeyebrowsblon3.src = 'Eyebrows-Blonde-3.png';

    headeyebrowsblon3.onload = function(){
      ctx.drawImage(headeyebrowsblon3,((400-headeyebrowsblon3.width)/2.24),98);
    }
  });
  ebbrow3btn .addEventListener('click', function(){
    var headeyebrowsbrow3 = new Image();
    headeyebrowsbrow3.src = 'Eyebrows-Brown-3.png';

    headeyebrowsbrow3.onload = function(){
      ctx.drawImage(headeyebrowsbrow3,((400-headeyebrowsbrow3.width)/2.24),98);
    }
  });
  ebred3btn .addEventListener('click', function(){
    var headeyebrowsred3 = new Image();
    headeyebrowsred3.src = 'Eyebrows-Red-3.png';

    headeyebrowsred3.onload = function(){
      ctx.drawImage(headeyebrowsred3,((400-headeyebrowsred3.width)/2.24),98);
    }
  });
ebbtn4.addEventListener('click', function(){
  var headeyebrows4 = new Image();
  headeyebrows4.src = 'Eyebrows-Blonde-4.png';

  headeyebrows4.onload = function(){
    ctx.drawImage(headeyebrows4,((400-headeyebrows4.width)/1.78),98);
  }
  smctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'block';
  ebctbl.style.display = 'none';
  ebctbl2.style.display = 'none';
  ebctbl3.style.display = 'none';
  ebctbl4.style.display = 'block';
  ebctbl5.style.display = 'none';
  ebctbl6.style.display = 'none';
  hctbl0.style.display = 'none';
});
  ebblon4btn .addEventListener('click', function(){
    var headeyebrowsblon4 = new Image();
    headeyebrowsblon4.src = 'Eyebrows-Blonde-4.png';

    headeyebrowsblon4.onload = function(){
      ctx.drawImage(headeyebrowsblon4,((400-headeyebrowsblon4.width)/1.78),98);
    }
  });
  ebbrow4btn .addEventListener('click', function(){
    var headeyebrowsbrow4 = new Image();
    headeyebrowsbrow4.src = 'Eyebrows-Brown-4.png';

    headeyebrowsbrow4.onload = function(){
      ctx.drawImage(headeyebrowsbrow4,((400-headeyebrowsbrow4.width)/1.78),98);
    }
  });
  ebred4btn .addEventListener('click', function(){
    var headeyebrowsred4 = new Image();
    headeyebrowsred4.src = 'Eyebrows-Red-4.png';

    headeyebrowsred4.onload = function(){
      ctx.drawImage(headeyebrowsred4,((400-headeyebrowsred4.width)/1.78),98);
    }
  });
ebbtn5.addEventListener('click', function(){
  var headeyebrows5 = new Image();
  headeyebrows5.src = 'Eyebrows-Blonde-5.png';

  headeyebrows5.onload = function(){
    ctx.drawImage(headeyebrows5,((400-headeyebrows5.width)/1.78),98);
  }
  smctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'block';
  ebctbl.style.display = 'none';
  ebctbl2.style.display = 'none';
  ebctbl3.style.display = 'none';
  ebctbl4.style.display = 'none';
  ebctbl5.style.display = 'block';
  ebctbl6.style.display = 'none';
  hctbl0.style.display = 'none';
});
  ebblon5btn .addEventListener('click', function(){
    var headeyebrowsblon5 = new Image();
    headeyebrowsblon5.src = 'Eyebrows-Blonde-5.png';

    headeyebrowsblon5.onload = function(){
      ctx.drawImage(headeyebrowsblon5,((400-headeyebrowsblon5.width)/1.78),98);
    }
  });
  ebbrow5btn .addEventListener('click', function(){
    var headeyebrowsbrow5 = new Image();
    headeyebrowsbrow5.src = 'Eyebrows-Brown-5.png';

    headeyebrowsbrow5.onload = function(){
      ctx.drawImage(headeyebrowsbrow5,((400-headeyebrowsbrow5.width)/1.78),98);
    }
  });
  ebred5btn .addEventListener('click', function(){
    var headeyebrowsred5 = new Image();
    headeyebrowsred5.src = 'Eyebrows-Red-5.png';

    headeyebrowsred5.onload = function(){
      ctx.drawImage(headeyebrowsred5,((400-headeyebrowsred5.width)/1.78),98);
    }
  });
ebbtn6.addEventListener('click', function(){
  var headeyebrows6 = new Image();
  headeyebrows6.src = 'Eyebrows-Blonde-6.png';

  headeyebrows6.onload = function(){
    ctx.drawImage(headeyebrows6,((400-headeyebrows6.width)/1.78),98);
  }
  smctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'block';
  ebctbl.style.display = 'none';
  ebctbl2.style.display = 'none';
  ebctbl3.style.display = 'none';
  ebctbl4.style.display = 'none';
  ebctbl5.style.display = 'none';
  ebctbl6.style.display = 'block';
  hctbl0.style.display = 'none';
});
  ebblon6btn .addEventListener('click', function(){
    var headeyebrowsblon6 = new Image();
    headeyebrowsblon6.src = 'Eyebrows-Blonde-6.png';

    headeyebrowsblon6.onload = function(){
      ctx.drawImage(headeyebrowsblon6,((400-headeyebrowsblon6.width)/1.78),98);
    }
  });
  ebbrow6btn .addEventListener('click', function(){
    var headeyebrowsbrow6 = new Image();
    headeyebrowsbrow6.src = 'Eyebrows-Brown-6.png';

    headeyebrowsbrow6.onload = function(){
      ctx.drawImage(headeyebrowsbrow6,((400-headeyebrowsbrow6.width)/1.78),98);
    }
  });
  ebred6btn .addEventListener('click', function(){
    var headeyebrowsred6 = new Image();
    headeyebrowsred6.src = 'Eyebrows-Red-6.png';

    headeyebrowsred6.onload = function(){
      ctx.drawImage(headeyebrowsred6,((400-headeyebrowsred6.width)/1.78),98);
    }
  });


//EYES
ef1btn.addEventListener('click', function(){
  var headeyesfemale1 = new Image();
  headeyesfemale1.src = 'Eyes-Female-Blue.png';

  headeyesfemale1.onload = function(){
    ctx.drawImage(headeyesfemale1,((400-headeyesfemale1.width)/2.24),103);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'block';
  efctbl1.style.display = 'block';
  efctbl2.style.display = 'none';
  efctbl3.style.display = 'none';
  emctbl1.style.display = 'none';
  emctbl2.style.display = 'none';
  emctbl3.style.display = 'none';
  hctbl0.style.display = 'none';
});
  efbe1btn.addEventListener('click', function(){
    var headeyesbluefemale1 = new Image();
    headeyesbluefemale1.src = 'Eyes-Female-Blue.png';

    headeyesbluefemale1.onload = function(){
      ctx.drawImage(headeyesbluefemale1,((400-headeyesbluefemale1.width)/2.24),103);
    }
  });
  efbn1btn.addEventListener('click', function(){
    var headeyesbrownfemale1 = new Image();
    headeyesbrownfemale1.src = 'Eyes-Female-Brown.png';

    headeyesbrownfemale1.onload = function(){
      ctx.drawImage(headeyesbrownfemale1,((400-headeyesbrownfemale1.width)/2.24),103);
    }
  });
  efg1btn.addEventListener('click', function(){
    var headeyesgreenfemale1 = new Image();
    headeyesgreenfemale1.src = 'Eyes-Female-Green.png';

    headeyesgreenfemale1.onload = function(){
      ctx.drawImage(headeyesgreenfemale1,((400-headeyesgreenfemale1.width)/2.24),103);
    }
  });
ef2btn.addEventListener('click', function(){
  var headeyesfemale2 = new Image();
  headeyesfemale2.src = 'Eyes-Female-Blue-2.png';
  
  headeyesfemale2.onload = function(){
    ctx.drawImage(headeyesfemale2,((400-headeyesfemale2.width)/2.24),103);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'block';
  efctbl1.style.display = 'none';
  efctbl2.style.display = 'block';
  efctbl3.style.display = 'none';
  emctbl1.style.display = 'none';
  emctbl2.style.display = 'none';
  emctbl3.style.display = 'none';
  hctbl0.style.display = 'none';
});
  efbe2btn.addEventListener('click', function(){
    var headeyesbluefemale2 = new Image();
    headeyesbluefemale2.src = 'Eyes-Female-Blue-2.png';
  
    headeyesbluefemale2.onload = function(){
      ctx.drawImage(headeyesbluefemale2,((400-headeyesbluefemale2.width)/2.24),103);
    }
  });
  efbn2btn.addEventListener('click', function(){
    var headeyesbrownfemale2 = new Image();
    headeyesbrownfemale2.src = 'Eyes-Female-Brown-2.png';
  
    headeyesbrownfemale2.onload = function(){
      ctx.drawImage(headeyesbrownfemale2,((400-headeyesbrownfemale2.width)/2.24),103);
    }
  });
  efg2btn.addEventListener('click', function(){
    var headeyesgreenfemale2 = new Image();
    headeyesgreenfemale2.src = 'Eyes-Female-Green-2.png';
  
    headeyesgreenfemale2.onload = function(){
      ctx.drawImage(headeyesgreenfemale2,((400-headeyesgreenfemale2.width)/2.24),103);
    }
  });
ef3btn.addEventListener('click', function(){
  var headeyesfemale3 = new Image();
  headeyesfemale3.src = 'Eyes-Female-Blue-3.png';
     
  headeyesfemale3.onload = function(){
    ctx.drawImage(headeyesfemale3,((400-headeyesfemale3.width)/2.24),103);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'block';
  efctbl1.style.display = 'none';
  efctbl2.style.display = 'none';
  efctbl3.style.display = 'block';
  emctbl1.style.display = 'none';
  emctbl2.style.display = 'none';
  emctbl3.style.display = 'none';
  hctbl0.style.display = 'none';
});
  efbe3btn.addEventListener('click', function(){
    var headeyesbluefemale3 = new Image();
    headeyesbluefemale3.src = 'Eyes-Female-Blue-3.png';
      
    headeyesbluefemale3.onload = function(){
      ctx.drawImage(headeyesbluefemale3,((400-headeyesbluefemale3.width)/2.24),103);
    }
  });
  efbn3btn.addEventListener('click', function(){
    var headeyesbrownfemale3 = new Image();
    headeyesbrownfemale3.src = 'Eyes-Female-Brown-3.png';
      
    headeyesbrownfemale3.onload = function(){
      ctx.drawImage(headeyesbrownfemale3,((400-headeyesbrownfemale3.width)/2.24),103);
    }
  });
  efg3btn.addEventListener('click', function(){
    var headeyesgreenfemale3 = new Image();
    headeyesgreenfemale3.src = 'Eyes-Female-Green-3.png';
      
    headeyesgreenfemale3.onload = function(){
      ctx.drawImage(headeyesgreenfemale3,((400-headeyesgreenfemale3.width)/2.24),103);
    }
  });
em1btn.addEventListener('click', function(){
  var headeyesmale1 = new Image();
  headeyesmale1.src = 'Eyes-Male-Blue.png';

  headeyesmale1.onload = function(){
    ctx.drawImage(headeyesmale1,((400-headeyesmale1.width)/1.78),101);
  }
  smctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'block';
  efctbl1.style.display = 'none';
  efctbl2.style.display = 'none';
  efctbl3.style.display = 'none';
  emctbl1.style.display = 'block';
  emctbl2.style.display = 'none';
  emctbl3.style.display = 'none';
  hctbl0.style.display = 'none';
});
  embe1btn.addEventListener('click', function(){
    var headeyesbluemale1 = new Image();
    headeyesbluemale1.src = 'Eyes-Male-Blue.png';

    headeyesbluemale1.onload = function(){
      ctx.drawImage(headeyesbluemale1,((400-headeyesbluemale1.width)/1.78),101);
    }
  });
  embn1btn.addEventListener('click', function(){
    var headeyesbrownmale1 = new Image();
    headeyesbrownmale1.src = 'Eyes-Male-Brown.png';

    headeyesbrownmale1.onload = function(){
      ctx.drawImage(headeyesbrownmale1,((400-headeyesbrownmale1.width)/1.78),101);
    }
  });
  emg1btn.addEventListener('click', function(){
    var headeyesgreenmale1 = new Image();
    headeyesgreenmale1.src = 'Eyes-Male-Green.png';

    headeyesgreenmale1.onload = function(){
      ctx.drawImage(headeyesgreenmale1,((400-headeyesgreenmale1.width)/1.78),101);
    }
  });
em2btn.addEventListener('click', function(){
  var headeyesmale2 = new Image();
  headeyesmale2.src = 'Eyes-Male-Blue-2.png';
  
  headeyesmale2.onload = function(){
    ctx.drawImage(headeyesmale2,((400-headeyesmale2.width)/1.78),101);
  }
  smctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'block';
  efctbl1.style.display = 'none';
  efctbl2.style.display = 'none';
  efctbl3.style.display = 'none';
  emctbl1.style.display = 'none';
  emctbl2.style.display = 'block';
  emctbl3.style.display = 'none';
  hctbl0.style.display = 'none';
});
  embe2btn.addEventListener('click', function(){
    var headeyesbluemale2 = new Image();
    headeyesbluemale2.src = 'Eyes-Male-Blue-2.png';
  
    headeyesbluemale2.onload = function(){
      ctx.drawImage(headeyesbluemale2,((400-headeyesbluemale2.width)/1.78),101);
    }
  });
  embn2btn.addEventListener('click', function(){
    var headeyesbrownmale2 = new Image();
    headeyesbrownmale2.src = 'Eyes-Male-Brown-2.png';
  
    headeyesbrownmale2.onload = function(){
      ctx.drawImage(headeyesbrownmale2,((400-headeyesbrownmale2.width)/1.78),101);
    }
  });
  emg2btn.addEventListener('click', function(){
    var headeyesgreenmale2 = new Image();
    headeyesgreenmale2.src = 'Eyes-Male-Green-2.png';
  
    headeyesgreenmale2.onload = function(){
      ctx.drawImage(headeyesgreenmale2,((400-headeyesgreenmale2.width)/1.78),101);
    }
  });
em3btn.addEventListener('click', function(){
  var headeyesmale3 = new Image();
  headeyesmale3.src = 'Eyes-Male-Blue-3.png';
     
  headeyesmale3.onload = function(){
    ctx.drawImage(headeyesmale3,((400-headeyesmale3.width)/1.78),101);
  }
  smctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'block';
  efctbl1.style.display = 'none';
  efctbl2.style.display = 'none';
  efctbl3.style.display = 'none';
  emctbl1.style.display = 'none';
  emctbl2.style.display = 'none';
  emctbl3.style.display = 'block';
  hctbl0.style.display = 'none';
});
  embe3btn.addEventListener('click', function(){
    var headeyesbluemale3 = new Image();
    headeyesbluemale3.src = 'Eyes-Male-Blue-3.png';
      
    headeyesbluemale3.onload = function(){
      ctx.drawImage(headeyesbluemale3,((400-headeyesbluemale3.width)/1.78),101);
    }
  });
  embn3btn.addEventListener('click', function(){
    var headeyesbrownmale3 = new Image();
    headeyesbrownmale3.src = 'Eyes-Male-Brown-3.png';
      
    headeyesbrownmale3.onload = function(){
      ctx.drawImage(headeyesbrownmale3,((400-headeyesbrownmale3.width)/1.78),101);
    }
  });
  emg3btn.addEventListener('click', function(){
    var headeyesgreenmale3 = new Image();
    headeyesgreenmale3.src = 'Eyes-Male-Green-3.png';
      
    headeyesgreenmale3.onload = function(){
      ctx.drawImage(headeyesgreenmale3,((400-headeyesgreenmale3.width)/1.78),101);
    }
  });
  
//MOUTH
mfbtn1.addEventListener('click', function(){
  var headmouthfemale1 = new Image();
  headmouthfemale1.src = 'Mouth-Female.png';

  headmouthfemale1.onload = function(){
    ctx.drawImage(headmouthfemale1,((400-headmouthfemale1.width)/2.22),126);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
mfbtn2.addEventListener('click', function(){
  var headmouthfemale2 = new Image();
  headmouthfemale2.src = 'Mouth-Female-2.png';

  headmouthfemale2.onload = function(){
    ctx.drawImage(headmouthfemale2,((400-headmouthfemale2.width)/2.24),118);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
mfbtn3.addEventListener('click', function(){
  var headmouthfemale3 = new Image();
  headmouthfemale3.src = 'Mouth-Female-3.png';

  headmouthfemale3.onload = function(){
    ctx.drawImage(headmouthfemale3,((400-headmouthfemale3.width)/2.22),122);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
mmbtn1.addEventListener('click', function(){
  var headmouthmale1 = new Image();
  headmouthmale1.src = 'Mouth-Male.png';

  headmouthmale1.onload = function(){
    ctx.drawImage(headmouthmale1,((400-headmouthmale1.width)/1.78),117);
  }
  smctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
mmbtn2.addEventListener('click', function(){
  var headmouthmale2 = new Image();
  headmouthmale2.src = 'Mouth-Male-2.png';

  headmouthmale2.onload = function(){
    ctx.drawImage(headmouthmale2,((400-headmouthmale2.width)/1.78),118);
  }
  smctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
mmbtn3.addEventListener('click', function(){
  var headmouthmale3 = new Image();
  headmouthmale3.src = 'Mouth-Male-3.png';

  headmouthmale3.onload = function(){
    ctx.drawImage(headmouthmale3,((400-headmouthmale3.width)/1.78),117);
  }
  smctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
//HAIR
hf1btn.addEventListener('click', function(){
  var headhairfemale = new Image();
  headhairfemale.src = 'Hair-Female-Blonde.png';

  headhairfemale.onload = function(){
    ctx.drawImage(headhairfemale,((400-headhairfemale.width)/2.4),45);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'block';
  hfctbl1.style.display = 'block';
  hfctbl2.style.display = 'none';
  hfctbl3.style.display = 'none';
  hmctbl1.style.display = 'none';
  hmctbl2.style.display = 'none';
  hmctbl3.style.display = 'none';
});
  hfbe1btn.addEventListener('click', function(){
    var headhairblondefemale1 = new Image();
    headhairblondefemale1.src = 'Hair-Female-Blonde.png';

    headhairblondefemale1.onload = function(){
      ctx.drawImage(headhairblondefemale1,((400-headhairblondefemale1.width)/2.4),45);
    }
  });
  hfbn1btn.addEventListener('click', function(){
    var headhairbrownfemale1 = new Image();
    headhairbrownfemale1.src = 'Hair-Female-Brown.png';

    headhairbrownfemale1.onload = function(){
      ctx.drawImage(headhairbrownfemale1,((400-headhairbrownfemale1.width)/2.3),43);
    }
  });
  hfr1btn.addEventListener('click', function(){
    var headhairredfemale1 = new Image();
    headhairredfemale1.src = 'Hair-Female-Red.png';

    headhairredfemale1.onload = function(){
      ctx.drawImage(headhairredfemale1,((400-headhairredfemale1.width)/2.32),42);
    }
  });
hf2btn.addEventListener('click', function(){
  var headhairfemale2 = new Image();
  headhairfemale2.src = 'Hair-Female-Blonde-2.png';
  
  headhairfemale2.onload = function(){
    ctx.drawImage(headhairfemale2,((400-headhairfemale2.width)/2.16),42);
  }
  sfctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'none';
  hctbl0.style.display = 'block';
  hfctbl1.style.display = 'none';
  hfctbl2.style.display = 'block';
  hfctbl3.style.display = 'none';
  hmctbl1.style.display = 'none';
  hmctbl2.style.display = 'none';
  hmctbl3.style.display = 'none';
});
  hfbe2btn.addEventListener('click', function(){
    var headhairblondefemale2 = new Image();
    headhairblondefemale2.src = 'Hair-Female-Blonde-2.png';
  
    headhairblondefemale2.onload = function(){
      ctx.drawImage(headhairblondefemale2,((400-headhairblondefemale2.width)/2.16),42);
    }
  });
  hfbn2btn.addEventListener('click', function(){
    var headhairbrownfemale2 = new Image();
    headhairbrownfemale2.src = 'Hair-Female-Brown-2.png';
    
    headhairbrownfemale2.onload = function(){
      ctx.drawImage(headhairbrownfemale2,((400-headhairbrownfemale2.width)/2.16),42);
    }
  });
  hfr2btn.addEventListener('click', function(){
    var headhairredfemale2 = new Image();
    headhairredfemale2.src = 'Hair-Female-Red-2.png';
    
    headhairredfemale2.onload = function(){
      ctx.drawImage(headhairredfemale2,((400-headhairredfemale2.width)/2.16),42);
    }
  });
hf3btn.addEventListener('click', function(){
  var headhairfemale3 = new Image();
  headhairfemale3.src = 'Hair-Female-Blonde-3.png';
    
  headhairfemale3.onload = function(){
    ctx.drawImage(headhairfemale3,((400-headhairfemale3.width)/2.09),48);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'block';
  hfctbl1.style.display = 'none';
  hfctbl2.style.display = 'none';
  hfctbl3.style.display = 'block';
  hmctbl1.style.display = 'none';
  hmctbl2.style.display = 'none';
  hmctbl3.style.display = 'none';
});
  hfbe3btn.addEventListener('click', function(){
    var headhairblondefemale3 = new Image();
    headhairblondefemale3.src = 'Hair-Female-Blonde-3.png';
      
    headhairblondefemale3.onload = function(){
      ctx.drawImage(headhairblondefemale3,((400-headhairblondefemale3.width)/2.16),42);
    }
  });
  hfbn3btn.addEventListener('click', function(){
    var headhairbrownfemale3 = new Image();
    headhairbrownfemale3.src = 'Hair-Female-Brown-3.png';
      
    headhairbrownfemale3.onload = function(){
      ctx.drawImage(headhairbrownfemale3,((400-headhairbrownfemale3.width)/2.12),43);
    }
  });
  hfr3btn.addEventListener('click', function(){
    var headhairredfemale3 = new Image();
    headhairredfemale3.src = 'Hair-Female-Red-3.png';
      
    headhairredfemale3.onload = function(){
      ctx.drawImage(headhairredfemale3,((400-headhairredfemale3.width)/2.16),42);
    }
  });
hm1btn.addEventListener('click', function(){
  var headhairmale = new Image();
  headhairmale.src = 'Hair-Male-Blonde.png';
  
  headhairmale.onload = function(){
    ctx.drawImage(headhairmale,((400-headhairmale.width)/1.78),50);
  }
  smctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'none';
  hctbl0.style.display = 'block';
  hfctbl1.style.display = 'none';
  hfctbl2.style.display = 'none';
  hfctbl3.style.display = 'none';
  hmctbl1.style.display = 'block';
  hmctbl2.style.display = 'none';
  hmctbl3.style.display = 'none';
});
  hmbe1btn.addEventListener('click', function(){
    var headhairblondemale1 = new Image();
    headhairblondemale1.src = 'Hair-Male-Blonde.png';
  
    headhairblondemale1.onload = function(){
      ctx.drawImage(headhairblondemale1,((400-headhairblondemale1.width)/1.78),50);
    }
  });
  hmbn1btn.addEventListener('click', function(){
    var headhairbrownmale1 = new Image();
    headhairbrownmale1.src = 'Hair-Male-Brown.png';
  
    headhairbrownmale1.onload = function(){
      ctx.drawImage(headhairbrownmale1,((400-headhairbrownmale1.width)/1.76),50);
    }
  });
  hmr1btn.addEventListener('click', function(){
    var headhairredmale1 = new Image();
    headhairredmale1.src = 'Hair-Male-Red.png';
  
    headhairredmale1.onload = function(){
      ctx.drawImage(headhairredmale1,((400-headhairredmale1.width)/1.76),50);
    }
  });
hm2btn.addEventListener('click', function(){
  var headhairmale2 = new Image();
  headhairmale2.src = 'Hair-Male-Blonde-2.png';
    
  headhairmale2.onload = function(){
    ctx.drawImage(headhairmale2,((400-headhairmale2.width)/1.76),50);
  }
  smctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'none';
  hctbl0.style.display = 'block';
  hfctbl1.style.display = 'none';
  hfctbl2.style.display = 'none';
  hfctbl3.style.display = 'none';
  hmctbl1.style.display = 'none';
  hmctbl2.style.display = 'block';
  hmctbl3.style.display = 'none';
});
  hmbe2btn.addEventListener('click', function(){
    var headhairblondemale2 = new Image();
    headhairblondemale2.src = 'Hair-Male-Blonde-2.png';
    
    headhairblondemale2.onload = function(){
      ctx.drawImage(headhairblondemale2,((400-headhairblondemale2.width)/1.76),50);
    }
  });
  hmbn2btn.addEventListener('click', function(){
    var headhairbrownmale2 = new Image();
    headhairbrownmale2.src = 'Hair-Male-Brown-2.png';
      
    headhairbrownmale2.onload = function(){
      ctx.drawImage(headhairbrownmale2,((400-headhairbrownmale2.width)/1.76),50);
    }
  });
  hmr2btn.addEventListener('click', function(){
    var headhairredmale2 = new Image();
    headhairredmale2.src = 'Hair-Male-Red-2.png';
      
    headhairredmale2.onload = function(){
      ctx.drawImage(headhairredmale2,((400-headhairredmale2.width)/1.76),50);
    }
  });
hm3btn.addEventListener('click', function(){
  var headhairmale3 = new Image();
  headhairmale3.src = 'Hair-Male-Blonde-3.png';
      
  headhairmale3.onload = function(){
    ctx.drawImage(headhairmale3,((400-headhairmale3.width)/1.76),42);
  }
  smctbl.style.display = 'none';
  efctbl0.style.display = 'none';
  ebctbl0.style.display = 'none';
  hctbl0.style.display = 'block';
  hfctbl1.style.display = 'none';
  hfctbl2.style.display = 'none';
  hfctbl3.style.display = 'none';
  hmctbl1.style.display = 'none';
  hmctbl2.style.display = 'none';
  hmctbl3.style.display = 'block';
});
  hmbe3btn.addEventListener('click', function(){
    var headhairblondemale3 = new Image();
    headhairblondemale3.src = 'Hair-Male-Blonde-3.png';
        
    headhairblondemale3.onload = function(){
      ctx.drawImage(headhairblondemale3,((400-headhairblondemale3.width)/1.76),42);
    }
  });
  hmbn3btn.addEventListener('click', function(){
    var headhairbrownmale3 = new Image();
    headhairbrownmale3.src = 'Hair-Male-Brown-3.png';
        
    headhairbrownmale3.onload = function(){
      ctx.drawImage(headhairbrownmale3,((400-headhairbrownmale3.width)/1.76),42);
    }
  });
  hmr3btn.addEventListener('click', function(){
    var headhairredmale3 = new Image();
    headhairredmale3.src = 'Hair-Male-Red-3.png';
        
    headhairredmale3.onload = function(){
      ctx.drawImage(headhairredmale3,((400-headhairredmale3.width)/1.74),42);
    }
  });
//NOSE
nbtn1.addEventListener('click', function(){
  var headnose1 = new Image();
  headnose1.src = 'Nose.png';

  headnose1.onload = function(){
    ctx.drawImage(headnose1,((400-headnose1.width)/2.21),110);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
nbtn2.addEventListener('click', function(){
  var headnose2 = new Image();
  headnose2.src = 'Nose-2.png';

  headnose2.onload = function(){
    ctx.drawImage(headnose2,((400-headnose2.width)/2.21),107);
  }
  sfctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
nbtn3.addEventListener('click', function(){
  var headnose3 = new Image();
  headnose3.src = 'Nose-3.png';

  headnose3.onload = function(){
    ctx.drawImage(headnose3,((400-headnose3.width)/1.78),103);
  }
  smctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});
nbtn4.addEventListener('click', function(){
  var headnose4 = new Image();
  headnose4.src = 'Nose-4.png';

  headnose4.onload = function(){
    ctx.drawImage(headnose4,((400-headnose4.width)/1.78),103);
  }
  smctbl.style.display = 'none';
  ebctbl0.style.display = 'none';
  efctbl0.style.display = 'none';
  hctbl0.style.display = 'none';
});

//=======================================================
//BODY
//=======================================================
bodybtn.addEventListener('click', function(){
  bodytbl.style.display = 'block';
  legstbl.style.display = 'none';
  headtbl.style.display = 'none';
})
//SHIRT
cfs1btn.addEventListener('click', function(){
  var bodyshirtfemale1 = new Image();
  bodyshirtfemale1.src = 'Clothes-Female-Shirt.png';
  
  bodyshirtfemale1.onload = function(){
    ctx.drawImage(bodyshirtfemale1,((400-bodyshirtfemale1.width)/2.3),150);
  }
});
cfs2btn.addEventListener('click', function(){
  var bodyshirtfemale2 = new Image();
  bodyshirtfemale2.src = 'Clothes-Female-Shirt-2.png';
  
  bodyshirtfemale2.onload = function(){
    ctx.drawImage(bodyshirtfemale2,((400-bodyshirtfemale2.width)/2.58),145);
  }
});
cms1btn.addEventListener('click', function(){
  var bodyshirtmale1 = new Image();
  bodyshirtmale1.src = 'Clothes-Male-Shirt.png';
  
  bodyshirtmale1.onload = function(){
    ctx.drawImage(bodyshirtmale1,((400-bodyshirtmale1.width)/1.7),147);
  }
});
cms2btn.addEventListener('click', function(){
  var bodyshirtmale2 = new Image();
  bodyshirtmale2.src = 'Clothes-Male-Shirt-2.png';
  
  bodyshirtmale2.onload = function(){
    ctx.drawImage(bodyshirtmale2,((400-bodyshirtmale2.width)/1.7),145);
  }
});


//JACKET
cfjbtn.addEventListener('click', function(){
  var bodyjacketfemale1 = new Image();
  bodyjacketfemale1.src = 'Clothes-Female-Shirt-4.png';
  
  bodyjacketfemale1.onload = function(){
    ctx.drawImage(bodyjacketfemale1,((400-bodyjacketfemale1.width)/2.48),152);
  }
});
cmjbtn .addEventListener('click', function(){
  var bodyshirtjacket1 = new Image();
  bodyshirtjacket1.src = 'Clothes-Male-Jacket.png';
  
  bodyshirtjacket1.onload = function(){
    ctx.drawImage(bodyshirtjacket1,((400-bodyshirtjacket1.width)/1.68),138);
  }
});


//OTHER
cfo1btn.addEventListener('click', function(){
  var bodyother1female1 = new Image();
  bodyother1female1.src = 'Clothes-Female-Shirt-3.png';
  
  bodyother1female1.onload = function(){
    ctx.drawImage(bodyother1female1,((400-bodyother1female1.width)/2.48),145);
  }
});
cmo1btn.addEventListener('click', function(){
  var bodyother1male1 = new Image();
  bodyother1male1.src = 'Clothes-Male-Sweater.png';
  
  bodyother1male1.onload = function(){
    ctx.drawImage(bodyother1male1,((400-bodyother1male1.width)/1.7),138);
  }
});


//=======================================================
//LEGS
//=======================================================
legsbtn.addEventListener('click', function(){
  legstbl.style.display = 'block';
  bodytbl.style.display = 'none';
  headtbl.style.display = 'none';
});


//PANTS
cfp1btn.addEventListener('click', function(){
  var bodypantsfemale1 = new Image();
  bodypantsfemale1.src = 'Clothes-Female-Pants.png';
  
  bodypantsfemale1.onload = function(){
    ctx.drawImage(bodypantsfemale1,((400-bodypantsfemale1.width)/1.78),261);
  }
});
cfp2btn.addEventListener('click', function(){
  var bodypantsfemale2 = new Image();
  bodypantsfemale2.src = 'Clothes-Female-Pants-2.png';
  
  bodypantsfemale2.onload = function(){
    ctx.drawImage(bodypantsfemale2,((400-bodypantsfemale2.width)/1.72),262);
  }
});
cmp1btn.addEventListener('click', function(){
  var bodypantsmale1 = new Image();
  bodypantsmale1.src = 'Clothes-Male-Pants.png';
  
  bodypantsmale1.onload = function(){
    ctx.drawImage(bodypantsmale1,((400-bodypantsmale1.width)/1.91),280);
  }
});
cmp2btn.addEventListener('click', function(){
  var bodypantsmale2 = new Image();
  bodypantsmale2.src = 'Clothes-Male-Pants-2.png';
  
  bodypantsmale2.onload = function(){
    ctx.drawImage(bodypantsmale2,((400-bodypantsmale2.width)/1.9),281);
  }
});


//SHORTS
cfstbtn.addEventListener('click', function(){
  var bodyshortsfemale1 = new Image();
  bodyshortsfemale1.src = 'Clothes-Female-Shorts.png';

  bodyshortsfemale1.onload = function(){
    ctx.drawImage(bodyshortsfemale1,((400-bodyshortsfemale1.width)/2.17),260);
  }
});
cmstbtn.addEventListener('click', function(){
  var bodyshortsmale1 = new Image();
  bodyshortsmale1.src = 'Clothes-Male-Shorts.png';

  bodyshortsmale1.onload = function(){
    ctx.drawImage(bodyshortsmale1,((400-bodyshortsmale1.width)/1.82),280);
  }
});


//OTHER
cfo2btn.addEventListener('click', function(){
  var bodyother2female1 = new Image();
  bodyother2female1.src = 'Clothes-Female-Skirts.png';

  bodyother2female1.onload = function(){
    ctx.drawImage(bodyother2female1,((400-bodyother2female1.width)/2.17),260);
  }
});
cmo2btn.addEventListener('click', function(){
  var bodyother2male1 = new Image();
  bodyother2male1.src = 'Clothes-Male-Sweats.png';

  bodyother2male1.onload = function(){
    ctx.drawImage(bodyother2male1,((400-bodyother2male1.width)/1.9),285);
  }
});

//SHOES
cfssebtn.addEventListener('click', function(){
  var bodyshoesfemale1 = new Image();
  bodyshoesfemale1.src = 'Clothes-Female-Shoes.png';
  
  bodyshoesfemale1.onload = function(){
    ctx.drawImage(bodyshoesfemale1,((400-bodyshoesfemale1.width)/1.6),563);
  }
});
cmssebtn.addEventListener('click', function(){
  var bodyshoesmale1 = new Image();
  bodyshoesmale1.src = 'Clothes-Male-Shoes.png';
  
  bodyshoesmale1.onload = function(){
    ctx.drawImage(bodyshoesmale1,((400-bodyshoesmale1.width)/2.5),539);
  }
});
