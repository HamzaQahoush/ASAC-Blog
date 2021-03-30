'use strict';
let formId= document.getElementById('formId');
let table =document.getElementById('table');
let InputAll= [];
let img = document.getElementById('img');

function InputData (name , title , subject, content , day , month , year , img ){
  this.name=name;
  this.title=title;
  this.subject=subject;
  this.content=content;
  this.day=day;
  this.month=month;
  this.year=year;
  this.randomlikes= this.likes();
  this.img= `./img/asac.jpg`;
  InputAll.push(this);
}


formId.addEventListener('submit' , handler);

function handler (event){
  event.preventDefault();
  let name = event.target.name.value;
  let title = event.target.title.value;
  let subject = event.target.subject.value;
  let content = event.target.content.value;
  let day = event.target.day.value;
  let month = event.target.month.value;
  let year = event.target.year.value;

  let newInputData= new InputData (name , title , subject, content , day , month , year );
  Savetolocal();
  newInputData.render();
}

//function of random likes
InputData.prototype.likes=function(){
  return Math.floor(Math.random() * 500);
};

InputData.prototype.render=function(){
  let tr=document.createElement('tr');
  table.appendChild(tr);
  let tdTitle=document.createElement('td');
  tr.appendChild(tdTitle);
  tdTitle.innerHTML= this.title;


  let trImg=document.createElement('tr');
  table.appendChild(trImg);
  let tdTImg=document.createElement('td');
  tr.appendChild( tdTImg);
  let img = document.createElement('img');
  img.setAttribute('src' , this.img);
  tdTImg.appendChild(img);
//   tdTImg.innerHTML=this.img;


  let trFooter=document.createElement('tr');
  table.appendChild(trFooter);
  let tdFooter=document.createElement('td');
  trFooter.appendChild(tdFooter);

  tdFooter.innerHTML=`Author : ${this.name} \n Date ${this.day } - ${this.month}- ${this.year} \n
  ${this.randomlikes} likes ${this.subject} \n ${this.content}
  } `;

};



function render2(){
  for (let i = 0 ; i<InputAll.length ; i++){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let tdTitle=document.createElement('td');
    tr.appendChild(tdTitle);
    tdTitle.innerHTML= InputAll[i].title;


    let trImg=document.createElement('tr');
    table.appendChild(trImg);
    let tdTImg=document.createElement('td');
    tr.appendChild( tdTImg);
    let img = document.createElement('img');
    img.setAttribute('src' , this.img);
    tdTImg.appendChild(img);
    tdTImg.innerHTML=this.img;

    let trFooter=document.createElement('tr');
    table.appendChild(trFooter);
    let tdFooter=document.createElement('td');
    trFooter.appendChild(tdFooter);

    tdFooter.innerHTML=`Author : ${InputAll[i].name} \n Date ${InputAll[i].date } - ${InputAll[i].month}- ${InputAll[i].year} \n
  ${InputAll[i].randomlikes} likes ${InputAll[i].subject} \n ${InputAll[i].content}
  } `;

  }
}


function Savetolocal(){
  localStorage.setItem('data' , JSON.stringify(InputAll));
}

function getInfo(){
  let getInfo= localStorage.getItem('data');
  if (getInfo){
    InputAll=JSON.parse(getInfo);
    render2();
  }

}



getInfo();