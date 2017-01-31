/**
 * Created by Администратор on 11.09.2015.
 */
var shirts = document.getElementById("T-Shirts");
var menu = document.getElementById("content");
var butpic = document.getElementById("butpic");
var txtitems = document.getElementById("txtitems");
var pluse = document.getElementsByClassName("plus");
var total = document.getElementById("total");
var minus = document.getElementsByClassName("minus");
var pic = document.getElementsByClassName("pic");
var caps = document.getElementById("Caps");
var cards = document.getElementById("Cards");
var toys = document.getElementById("Toys");
var magnets = document.getElementById("Magnets");
var penspencils = document.getElementById("Pens & Pencils");
var bags = document.getElementById("Bags");
var notebooks = document.getElementById("Notebooks");
var scrum = document.getElementById("Scrum cards")

window.onload = function(){
    var sum = 0, n = 0, count = 0, sum = 0;

    butpic.onclick = function(){
        caps.style.display = "none";
        shirts.style.display = "none";
        cards.style.display = "none";
        toys.style.display = "none";
        magnets.style.display = "none";
        bags.style.display = "none";
        penspencils.style.display = "none";
        notebooks.style.display = "none";
        scrum.style.display = "none";
        menu.style.display = "block";
        butpic.style.display = "none";
        txtitems.innerText = "Shopping Cart — Make Purchases Now!";
    }

    for(var i = 0; i < pic.length; i++)
    {
        pic[i].onclick = function(){
            var namecategor = this.getAttribute("name");
            var namecat = document.getElementById(namecategor);
            namecat.style.display = "block";
            butpic.style.display = "block";
            var n = this.getAttribute("name");
            txtitems.innerText = n;
            menu.style.display = "none";
            console.log(namecategor);

        }
    }
    for(var i=0; i < pluse.length; i++)
    {
        pluse[i].onclick = function(){
            var nitem = this.parentNode.parentNode.firstChild.nextElementSibling;
            nextitem = nitem.getAttribute("name");
            var nam = this.getAttribute("name");
            var pr = this.parentNode.previousElementSibling.lastChild.previousElementSibling.innerHTML;
            pr = pr.substr(1);
            n += parseInt(pr);
            total.innerHTML = "$" + n;
            var sp = this.previousElementSibling;
            count = sp.lastElementChild.innerHTML;
            count = parseInt(count) + 1;
            sp.lastElementChild.innerHTML = count;
            console.log(nextitem);
            console.log(sum);
            nextitem = nitem.getAttribute("name");
        }
    }
    for(var i=0; i < minus.length; i++)
    {
        minus[i].onclick = function(){
             if(n > 0)
             {
                 var nam = this.getAttribute("name");
                 var pr = this.parentNode.previousElementSibling.lastChild.previousElementSibling.innerHTML;
                 var sp = this.nextElementSibling;
                 count = sp.lastElementChild.innerHTML;
                 if(count > 0)
                 {
                     pr = pr.substr(1);
                     n -= parseInt(pr);
                     total.innerHTML = "$" + n;
                     count = parseInt(count) - 1;
                     sp.lastElementChild.innerHTML = count;
                 }

             }
        }
    }
}