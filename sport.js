
$(document).ready(function(){
    $(".btn1").click(function(){
        $(this).css({
            "background-color":"lightblue"
        })
        $(".btn2").css({
            "background":"transparent"
        })
        $(".btn3").css({
            "background":"transparent"
        })
        $(".btn4").css({
            "background":"transparent"
        })
        $(".btn5").css({
            "background":"transparent"
        })

        $(".container").css({
            "left":"0"
        })
    })
    $(".btn2").click(function(){
        $(this).css({
            "background-color":"lightblue"
        })
        $(".btn1").css({
            "background":"transparent"
        })
        $(".btn3").css({
            "background":"transparent"
        })
        $(".btn4").css({
            "background":"transparent"
        })
        $(".btn5").css({
            "background":"transparent"
        })

        $(".container").css({
            "left":"-100%"
        })
        



    })
    $(".btn3").click(function(){
        $(this).css({
            "background":"lightblue"
        })
        $(".btn1").css({
            "background":"transparent"
        })
        $(".btn2").css({
            "background":"transparent"
        })
        $(".btn4").css({
            "background":"transparent"
        })
        $(".btn5").css({
            "background":"transparent"
        })
        $(".container").css({
            "left":"-200%"
        })
    })
    $(".btn4").click(function(){
        $(this).css({
            "background":"lightblue"
        })
        $(".btn1").css({
            "background":"transparent"
        })
        $(".btn2").css({
            "background":"transparent"
        })
        $(".btn3").css({
            "background":"transparent"
        })
        $(".btn5").css({
            "background":"transparent"
        })
        $(".container").css({
            "left":"-300%"
        })
    })
    $(".btn5").click(function(){
        $(this).css({
            "background":"lightblue"
        })
        $(".btn1").css({
            "background":"transparent"
        })
        $(".btn2").css({
            "background":"transparent"
        })
        $(".btn3").css({
            "background":"transparent"
        })
        $(".btn4").css({
            "background":"transparent"
        })
       
        $(".container").css({
            "left":"-400%"
        })
    })
   
    $("#load-less").hide();
    $("#load-item").hide();
    $("#load-more").click(function () {
        $("#load-item").show("slow", function() {
            $("#load-more").hide();
            $("#load-less").show();

        });
   
    })
    $("#load-less").click(function ( ){
        $("#load-item").hide("slow", function( ){
            $("#load-more").show();
            $("#load-less").hide();

        });
    })
    $("#tennis").hide()
    $("#othersports").hide();
    $(".menu a ").click(function() {
        event.preventDefault()
        $(".menu a").removeClass("active")

        $(this).addClass("active")
        // xu ly content
        var tab = $(this).attr("href")
        $(".tab-item").hide()
        $(tab).show();
    })

    //Go to top
    $("#gototop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() >=344 )
        $("#gototop").show("slow");
        else
        $("#gototop").hide("slow");


    })
    $("#gototop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },2000)
    })


     //An nut login
     $(".login").hide();
     $("#login").click(function(){
         $(".login").show(500,function() {
             $(".login").css({
                 "position" :"fixed",
                 "top":"16rem",
                 "z-index":"9999"
             })
         })
         
     })
     //Click dau X
     $(".exit").click(function(){
         $(".login").hide("slow")
     })
 
     $(".user").hide();
     $("#thongbao").hide();  
 
     //Click Dang nhap
     $("#enter").click(function(){
         var user=$("#user-name").val()
         $(".user-infor").html(user)
         $("#thongbao").show(500,function(){
             $(".login").hide(4000)
             $(".user").show("slow")
             $("#thongbao").hide(5000);  
         })
 
     })
     //Dang Xuat
     $("#logout").click(function(){
         $(".user").hide("slow")
     })
 
     //Click nut subscribe
     $(".header-button").click(function(){
         $("html,body").animate({
             scrollTop:5000
         },1000)
     })


     
   /*LOAD*/
   window.addEventListener("load",function() {
    var loader = document.querySelector(".loading")
    this.setTimeout(function() {
        loader.style="display:none;"
    },1000)
  })
})
function checkMail()
{
    
       var form=document.getElementById("form");
       var email=document.getElementById("email").value;
       var text=document.getElementById("text");
       var reg= /[a-zA-Z0-9]+@[a-zA-Z0-9]+(.[a-zA-Z]{2,})+$/;
        if(email.match(reg))
        {
         
      
            text.innerHTML="Thank you for your subscribing"
            text.style.color="#00ff00";


        }
        else
        {
          
            text.innerHTML="Please enter your email correctly"
            text.style.color="#ff0000";

        }   

  
}
function init() {

    
    var today = new Date();

    var day = today.getDate();
    var month = (today.getMonth() + 1);
    var year = today.getFullYear();

    var n = (day + 2 * month + (3 * (month + 1)) / 5 + year + (year / 4)) % 7
    n = Math.round(n);
    n = parseInt(n);
    if (n == 7 || n == 0)
        n = 'Saturday'
    if (n == 1)
        n = 'Sunday'
    else if (n == 2)
        n = 'Monday'
    else if (n == 3)
        n = 'Tuesday'
    else if (n == 4)
        n = 'Wednesday'
    else if (n == 5)
        n = 'Thursday'
    else if (n == 6)
        n = 'Friday'




    if (month == 1)
        month = 'January'
    else if (month == 2)
        month = 'February'
    else if (month == 3)
        month = 'March'
    else if (month == 4)
        month = 'April'
    else if (month == 5)
        month = 'May'
    else if (month == 6)
        month = 'June'
    else if (month == 7)
        month = 'July'
    else if (month == 8)
        month = 'August'
    else if (month == 9)
        month = 'September'
    else if (month == 10)
        month = 'October'
    else if (month == 11)
        month = 'November'
    else if (month == 12)
        month = 'December'


    var d1 = document.querySelectorAll('.day');

    for (var i = 0; i < d1.length; i++) {
        var date1 = month + ' ' + day + ' ' + year
        var t1 = document.createTextNode(date1);
        d1[i].appendChild(t1);

    }

   $(".first-contents").addClass("wow animate__bounceIn")
   $(".third-contents").addClass("wow animate__bounceIn")
   $(".second-contents").addClass("wow animate__bounceIn")
   $(".subcontents").addClass("wow animate__bounceIn")
   $(".father-containers").addClass("wow animate__bounceIn")
   


    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
 /**SEARCH */

 $(".box ").click(function ( ){
    $(".box .input ").css({
        "width":"200px"
    })
  })
 $(".box .input").change(function() {
    $(".box .input ").css({
        "width":"0"
    })
 })

  var topics = ["World","War","Us","News","game", "movies"]
  $("#search").keyup(function () {

    let text = $(this).val().toLowerCase();
    let h = ""
    for ( let c of topics)
    {
        if(c.toLowerCase().indexOf(text) >=0 )
        {
            h+= ` <li><a href="javascript:;">${c}</a></li>`
        }
        if(h != "")
            {
                $("#list").html(h);
                $("#list").show()
            }
           $("#list").on("click", "a", function() {
            $(".input").val($(this).text());
            $("#list").hide()

           }) 

    }
  })

   

}
