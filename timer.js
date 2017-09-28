var dayOfOpening = 1508659240000; // Sun Oct 22 2017 11:00:40 GMT+0300 (Беларусь (зима));
var dayOfClosing = 1509300000000; // Sun Oct 29 2017 21:00:00 GMT+0300 (Беларусь (зима));
var deadline;
var today = new Date();
today = today.getTime(); // Convert to milliseconds;

if (today < dayOfOpening) {
  document.getElementById('timer-phrase').innerHTML = 'До изложбе је остало…';
  deadline = dayOfOpening;
} else {
  document.getElementById('timer-phrase').innerHTML = 'До краја изложбе је остало…';
  deadline = dayOfClosing;
};

(function() {
    var _id="ff18bc6e0e3febd6691c97f38c17ff62";
    while(document.getElementById("timer"+_id))_id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:444px;height:86px;'></div>");
    var _t=document.createElement("script");
    _t.src="timer-core.js";
    var _f=function(_k) {
        var l=new MegaTimer(_id, {
            "view":[1, 1, 1, 1], "type": {
                "currentType":"1", "params": {
                    "usertime": true, "tz": "3", "utc": deadline
                }
            }
            , "design": {
                "type":"plate", "params": {
                    "round":"10", "background":"gradient", "background-color":["#666666", "#acb8d1"], "effect":"flipchart", "space":"2", "separator-margin":"20", "number-font-family": {
                        "family": "Comfortaa", "link": "<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }
                    , "number-font-size":"60", "number-font-color":"#ffffff", "padding":"12", "separator-on":false, "separator-text":":", "text-on":true/*, "text-font-family": {
                        "family": "Comfortaa", "link": "<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }*/
                    , "text-font-size":"16", "text-font-color":"black"
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