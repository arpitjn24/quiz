/**
 * Created by arpit on 21/8/16.
 */

var dat,i=0;
      console.log('helo');

//$("#start").click(function () {
function start() {
//getElementsByClassName('main').style.display=true;
    document.getElementById('main').style.display='block';

    console.log('helo');

    $.get('/getdata', function (dat, status) {
        console.log(dat.question);
        document.getElementById('ques').innerHTML = '<li>' + dat[i].question + '</li>';
        document.getElementById('A').innerHTML = '<li>' + dat[i].option1 + '</li>';
        document.getElementById('B').innerHTML = '<li>' + dat[i].option2 + '</li>';
        document.getElementById('C').innerHTML = '<li>' + dat[i].option3 + '</li>';
        document.getElementById('D').innerHTML = '<li>' + dat[i].option4 + '</li>';
        check = function (op) {
            console.log(op.id + "  " + dat[i].answer);
            if (dat[i].answer == op.id) {
                $("#result").innerHTML ='<li> correct answer <br>Lorem ipsum dolor sit amet, consectetur adipisicing ' +
                    ' enim esse exercitationem nulla officiis quam quia quo soluta ullam unde veritatis vero. Ducimus iusto minus quod? </li>';
                window.prompt('correct answer');
            }
            else
                window.prompt('wrong answer');

            i++;
 start();       }
    })
}

