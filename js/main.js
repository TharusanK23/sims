$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$(window).load(function() {
    $(".preloader").removeClass("loader");
    $(".preloader").css("display","none");
});


var sys = {
    users: [
        {username: "kilinochchi@uki.life",password: "Uki@ch01"},
        {username: "ram727456@gmail.com",password: "Uki@ch02"},
        {username: "k.tharusan@gmail.com",password: "Uki@ch03"},
        {username: "tharusank23@gmail.com",password: "Uki@ch04"},
        {username: "kiribay@gmail.com",password: "Uki@ch05"}
    ],
    addUser: function() {
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value

        var check = this.users.some(function(e) {
            return e.username == email && e.password == password
        });

        document.getElementById('').innerHTML =check ? swal("Login Successful!", "You clicked the button go to your page!", "success") :
            +sweetAlert("Oops... Login failed !!", "Email or password is wrong!", "error");
    }
};
document.getElementById("myButton").addEventListener("click", sys.addUser.bind(sys));

