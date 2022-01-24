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
    document.getElementById('question1').innerHTML='Q1.答え: M [MOKU(木曜日)]';
}

function T2(){
    add();
    document.getElementById('question2').innerHTML='Q2.答え: S [six(6)]';
}

function T3(){
    add();
    document.getElementById('question3').innerHTML='Q3.答え: E [Seven-Eleven]';
}

function T4(){
    add();
    document.getElementById('question4').innerHTML='Q4.答え: D [Day(日)]';
}

function T5(){
    add();
    document.getElementById('question5').innerHTML='Q5.答え: S [SHOUWA(昭和)]';
}

function T6(){
    add();
    document.getElementById('question6').innerHTML='Q6.答え: K [KYOU(今日)]';
}

function T7(){
    add();
    document.getElementById('question7').innerHTML='Q7.答え: J [January(１月),June(６月),July(７月)]';
}

function T8(){
    add();
    document.getElementById('question8').innerHTML='Q8.答え: 43 [43県]';
}

function T9(){
    add();
    document.getElementById('question9').innerHTML='Q9.答え: K [Km(キロメートル)]';
}

function T10(){
    add();
    document.getElementById('question10').innerHTML='Q10.答え: Y [YEN(円)]';
}

function HINT1(){
    document.getElementById('hint1').innerHTML='ヒント: 一週間'
}

function HINT2(){
    document.getElementById('hint2').innerHTML='ヒント: １〜１０'
}

function HINT3(){
    document.getElementById('hint3').innerHTML='ヒント: よく見かけるコンビニの名前'
}

function HINT4(){
    document.getElementById('hint4').innerHTML='ヒント: 時間の...'
}

function HINT5(){
    document.getElementById('hint5').innerHTML='ヒント: 今はRです。'
}

function HINT6(){
    document.getElementById('hint6').innerHTML='ヒント: ２日前から３日後を...'
}

function HINT7(){
    document.getElementById('hint7').innerHTML='ヒント: 12ある何かの頭文字'
}

function HINT8(){
    document.getElementById('hint8').innerHTML='ヒント: 日本...'
}

function HINT9(){
    document.getElementById('hint9').innerHTML='ヒント: 距離の単位'
}

function HINT10(){
    document.getElementById('hint10').innerHTML='ヒント: たくさん欲しいよね...。'
}