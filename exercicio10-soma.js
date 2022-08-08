(function(win,doc){
    'use strict';

    doc.querySelector('#classe').addEventListener('click',function(evt){
        evt.preventDefault();
        let allInputs=doc.querySelectorAll('input[type=text]');
        let sum=0;
        let arr=[];

        for(let i=0; i < allInputs.length; i++){
            let value=allInputs[i].value;
            sum+=parseInt(value);
            arr.push(value);
        }
        doc.querySelector('.result').classList.remove('d-none');
        doc.querySelector('.sum').innerHTML=`Soma: ${sum}`;
    },false);
})(window,document);
      
        