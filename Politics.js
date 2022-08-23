$(document).ready(function () {

    /*SEARCH*/
    $(".box ").click(function () {
        $(".box .input ").css({
            "width": "200px"
        })
    })
    $(".box .input").change(function () {
        $(".box .input ").css({
            "width": "0"
        })
    })



    var topics = ["World", "War", "Us", "News", "game", "movies"]
    $("#search").keyup(function () {

        let text = $(this).val().toLowerCase();
        let h = ""
        for (let c of topics) {
            if (c.toLowerCase().indexOf(text) >= 0) {
                h += ` <li><a href="javascript:;">${c}</a></li>`
            }
            if (h != "") {
                $("#list").html(h);
                $("#list").show()
            }
            $("#list").on("click", "a", function () {
                $(".input").val($(this).text());
                $("#list").hide()

            })

        }
    })

    $("#gototop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 344)
            $("#gototop").show("slow");
        else
            $("#gototop").hide("slow");


    })
    $("#gototop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })
    $(".inside-content").addClass("wow animate__fadeIn")
    $(".content2-1").addClass("wow animate__fadeIn")
    $(".content2-2").addClass("wow animate__fadeIn")

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animate__animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();


    /*LOAD*/
    window.addEventListener("load", function () {
        var loader = document.querySelector(".loading")
        this.setTimeout(function () {
            loader.style = "display:none;"
        }, 1000)
    })

})

function init() {

    var months
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


    var d1 = document.querySelector('.day');

    var date1 = n + ', ' + month + ' ' + day + ', ' + year;
    var t1 = document.createTextNode(date1);
    /* tạo nội dung văn bản  */
    d1.appendChild(t1);
    /* gắn vào cái cuối cùng */


}