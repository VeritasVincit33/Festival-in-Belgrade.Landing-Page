(function() {
    var _id="ff18bc6e0e3febd6691c97f38c17ff62";
    while(document.getElementById("timer"+_id))_id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:444px;height:86px;'></div>");
    var _t=document.createElement("script");
    _t.src="http://megatimer.ru/timer/timer.min.js";
    var _f=function(_k) {
        var l=new MegaTimer(_id, {
            "view":[1, 1, 1, 0], "type": {
                "currentType":"1", "params": {
                    "usertime": true, "tz": "3", "utc": 1505988000000
                }
            }
            , "design": {
                "type":"plate", "params": {
                    "round":"10", "background":"gradient", "background-color":["#666666", "#acb8d1"], "effect":"flipchart", "space":"2", "separator-margin":"20", "number-font-family": {
                        "family": "Comfortaa", "link": "<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }
                    , "number-font-size":"60", "number-font-color":"#ffffff", "padding":"12", "separator-on":false, "separator-text":":", "text-on":false, "text-font-family": {
                        "family": "Comfortaa", "link": "<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }
                    , "text-font-size":"12", "text-font-color":"red"
                }
            }
            , "designId":3, "theme":"white", "width":444, "height":86
        }
        );
        if(_k!=null)l.run();
    }
    ;
    _t.onload=_f;
    _t.onreadystatechange=function() {
        if(_t.readyState=="loaded")_f(1);
    }
    ;
    var _h=document.head||document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}

).call(this);