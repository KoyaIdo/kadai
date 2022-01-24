function nazo1(){
    if(document.getElementById('answer1').value=='M'){
        alert('あたり!');T1();}
else if(document.getElementById('answer1').value=='m'){
    alert('あたり!');T1();}
else if(document.getElementById('answer1').value=='M'){
    alert('あたり!');T1();}
else if(document.getElementById('answer1').value=='m'){
    alert('あたり!');T1();}
else{alert('はずれ!');}
}

function nazo2(){
    if(document.getElementById('answer2').value=='S'){
        alert('あたり!');T2();}
else if(document.getElementById('answer2').value=='s'){
    alert('あたり!');T2();}
else if(document.getElementById('answer2').value=='S'){
    alert('あたり!');T2();}
else if(document.getElementById('answer2').value=='s'){
    alert('あたり!');T2();}
else{alert('はずれ!');}
}

function nazo3(){
    if(document.getElementById('answer3').value=='E'){
        alert('あたり!');T3();}
else if(document.getElementById('answer3').value=='e'){
    alert('あたり!');T3();}
else if(document.getElementById('answer3').value=='E'){
    alert('あたり!');T3();}
else{alert('はずれ!');}
}

function nazo4(){
    if(document.getElementById('answer4').value=='D'){
        alert('あたり!');T4();}
else if(document.getElementById('answer4').value=='d'){
    alert('あたり!');T4();}
else if(document.getElementById('answer4').value=='D'){
    alert('あたり!');T4();}
else if(document.getElementById('answer4').value=='d'){
    alert('あたり!');T4();}
else{alert('はずれ!');}
}

function nazo5(){
    if(document.getElementById('answer5').value=='S'){
        alert('あたり!');T5();}
else if(document.getElementById('answer5').value=='s'){
    alert('あたり!');T5();}
else if(document.getElementById('answer5').value=='S'){
    alert('あたり!');T5();}
else if(document.getElementById('answer5').value=='s'){
    alert('あたり!');T5();}
else{alert('はずれ!');}
}

function nazo6(){
    if(document.getElementById('answer6').value=='K'){
        alert('あたり!');T6();}
else if(document.getElementById('answer6').value=='k'){
    alert('あたり!');T6();}
else if(document.getElementById('answer6').value=='K'){
    alert('あたり!');T6();}
else if(document.getElementById('answer6').value=='k'){
    alert('あたり!');T6();}
else{alert('はずれ!');}
}

function nazo7(){
    if(document.getElementById('answer7').value=='J'){
        alert('あたり!');T7();}
else if(document.getElementById('answer7').value=='j'){
    alert('あたり!');T7();}
else if(document.getElementById('answer7').value=='J'){
    alert('あたり!');T7();}
else if(document.getElementById('answer7').value=='j'){
    alert('あたり!');T7();}
else{alert('はずれ!');}
}

function nazo8(){
    if(document.getElementById('answer8').value=='43'){
        alert('あたり!');T8();}
else if(document.getElementById('answer8').value=='４３'){
    alert('あたり!');T8();}
else{alert('はずれ!');}
}

function nazo9(){
    if(document.getElementById('answer9').value=='K'){
        alert('あたり!');T9();}
else if(document.getElementById('answer9').value=='k'){
    alert('あたり!');T9();}
else if(document.getElementById('answer9').value=='K'){
    alert('あたり!');T9();}
else if(document.getElementById('answer9').value=='k'){
    alert('あたり!');T9();}
else{alert('はずれ!');}
}

function nazo10(){
    if(document.getElementById('answer10').value=='Y'){
        alert('あたり!');T10();}
else if(document.getElementById('answer10').value=='y'){
    alert('あたり!');T10();}
else if(document.getElementById('answer10').value=='Y'){
    alert('あたり!');T10();}
else if(document.getElementById('answer10').value=='y'){
    alert('あたり!');T10();}
else{alert('はずれ!');}
}

function T1(){
    add();
    document.getElementById('question1').innerHTML='<p class="kotae">答え: M [MOKU(木曜日)]</p>';
}

function T2(){
    add();
    document.getElementById('question2').innerHTML='<p class="kotae">答え: S [six(6)]</p>';
}

function T3(){
    add();
    document.getElementById('question3').innerHTML='<p class="kotae">答え: E [Seven-Eleven]</p>';
}

function T4(){
    add();
    document.getElementById('question4').innerHTML='<p class="kotae">答え: D [Day(日)]</p>';
}

function T5(){
    add();
    document.getElementById('question5').innerHTML='<p class="kotae">答え: S [SHOUWA(昭和)]</p>';
}

function T6(){
    add();
    document.getElementById('question6').innerHTML='<p class="kotae">答え: K [KYOU(今日)]</p>';
}

function T7(){
    add();
    document.getElementById('question7').innerHTML='<p class="kotae">答え: J [January(１月),June(６月),July(７月)]</p>';
}

function T8(){
    add();
    document.getElementById('question8').innerHTML='<p class="kotae">答え: 43 [43県]</p>';
}

function T9(){
    add();
    document.getElementById('question9').innerHTML='<p class="kotae">答え: K [Km(キロメートル)]</p>';
}

function T10(){
    add();
    document.getElementById('question10').innerHTML='<p class="kotae">答え: Y [YEN(円)]</p>';
}

function HINT1(){
    document.getElementById('hint1').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 一週間</span></div>';
}

function HINT2(){
    document.getElementById('hint2').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> １〜１０</span></div>'
}

function HINT3(){
    document.getElementById('hint3').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> よく見かけるコンビニの名前</span></div>'
}

function HINT4(){
    document.getElementById('hint4').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 時間の...</span></div>'
}

function HINT5(){
    document.getElementById('hint5').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 今はRです。</span></div>'
}

function HINT6(){
    document.getElementById('hint6').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> ２日前から３日後を...</span></div>'
}

function HINT7(){
    document.getElementById('hint7').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 12ある何かの頭文字</span></div>'
}

function HINT8(){
    document.getElementById('hint8').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 日本...</span></div>'
}

function HINT9(){
    document.getElementById('hint9').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 距離の単位</span></div>'
}

function HINT10(){
    document.getElementById('hint10').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> たくさん欲しいよね...。</span></div>'
}