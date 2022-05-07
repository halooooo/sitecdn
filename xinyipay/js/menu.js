;(function(window,document){
    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ['Android', 'iPhone',
            'SymbianOS', 'Windows Phone',
            'iPad', 'iPod'
        ];
        var flag = true;
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) != -1) {
                flag = false;
                break;
            }
        }
        return flag;
    };

    function setHeaderNav(){
        var pc = document.getElementById("pc");
        var mobile = document.getElementById("mobile");
        if(IsPC()){
            pc.style.display = "block";
            mobile.style.display = "none";
        }else{
            pc.style.display = "none";
            mobile.style.display = "block";
        }
    }
    window.onresize = function(){
        setHeaderNav();
    }
    setHeaderNav();
})(window,document);


function menuclick(){
    var menu = document.getElementById("menu");
    var display = menu.style.display;
    menu.style.display = (display=='none' || display=="" )?'block':'none';
}