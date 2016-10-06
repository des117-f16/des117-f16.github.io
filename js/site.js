// json arrow of student name and url
var students = [{"Name":"Chau, Victoria","URL":"vchau2.github.io"},{"Name":"Chen, Silvia","URL":"silviachen96.github.io"},{"Name":"Chin, Shelby","URL":"shelbychiin.github.io"},{"Name":"Han, Kaela","URL":"kaekae13.github.io"},{"Name":"Hu, Annie","URL":"anniehu26.github.io"},{"Name":"Hulley, Shannen","URL":"slhulley.github.io"},{"Name":"Laats, Erik","URL":"konopacz.github.io"},{"Name":"Lager, Melissa","URL":"mellager.github.io"},{"Name":"Li,Tina","URL":"tinali3.github.io"},{"Name":"Love, Allison","URL":"allisluv.github.io"},{"Name":"Macedo, Danielle","URL":"dnmacedo.github.io"},{"Name":"Morris, Aryn","URL":"arynann13.github.io"},{"Name":"Murilla, Carolina","URL":"VCMOX.github.io"},{"Name":"Ng, Gina","URL":"bluemoonchan13.github.io"},{"Name":"Okazaki, Christine","URL":"christineokazaki.github.io"},{"Name":"Pang, Ryan","URL":"ryanjpang.github.io"},{"Name":"Parker-Essig, Tara","URL":"taramakes.github.io"},{"Name":"Pereyra, Kaylee","URL":"kayleedawg.github.io"},{"Name":"Sivaakumar, Nikitaa","URL":"nikisiv.github.io"},{"Name":"Wu, Tsung Yen Wu (Jason)","URL":"s9001848.github.io"}];

var name, link, image, li, a1, a2, img, div, span, nameText;
var ul = document.getElementById('students');

if($('body').is('#page_home')) {
    alert('hello');
    for(var i = 0; i < students.length; i++) {
        name = students[i]['Name'];
        link = 'https://' + students[i]['URL'];

        li = document.createElement('li');
        a1 = document.createElement('a');
        a2 = document.createElement('a');
        img = document.createElement('div');
        div = document.createElement('div');
        span = document.createElement('span');

        image = findImage(img, link);

        div.setAttribute('class', 'inner');
        li.setAttribute('class', 'student');
        a1.setAttribute('class', 'link');
        a1.setAttribute('href', link);
        a1.setAttribute('target','_blank');
        a2.setAttribute('class', 'name');
        a2.setAttribute('href', link);
        a2.setAttribute('target','_blank');
        span.setAttribute('class', 'btn view');

        a2.appendChild(document.createTextNode(name));
        span.appendChild(document.createTextNode('VIEW'));
        a1.appendChild(img);
        a1.appendChild(span);
        div.appendChild(a1);
        div.appendChild(a2);
        li.appendChild(div);
        ul.appendChild(li);
    }

    function findImage(elem, url) {
        var imageUrl;
        $.ajax({
            url: url,
            success: function(data) {
                var html = $.parseHTML( data ),
                    img = $(html).find("img"),
                    len = img.length;
                if(len > 0){
                    var src = img.first().attr("src");
                } else {
                    console.log("Image not found");
                }
                imageUrl = url + '/' + src;
                elem.setAttribute('class', 'bg');
                elem.setAttribute('style', 'background-image: url(' + imageUrl +')');
            }
        });
    }
}

$(document).ready(function() {
    setTimeout(function () {$('header').addClass('active');}, 300);
    setTimeout(function () {$('#students').addClass('active');}, 600);
});
