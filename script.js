/*document.getElementById('left-modal-window').style.display = "block";*/

/*Test tools area starts*/

var applyFont = function() {
  var fontString = document.getElementById('font-selector').options[document.getElementById('font-selector').selectedIndex].value;
  document.body.style.fontFamily = fontString;
  /*document.getElementById("testTitle").style.fontFamily = fontString;*/
};

/*Test tools area finishes*/

/*Modal windows area starts*/

var modalLft = document.getElementById('left-modal-window');
var modalRght = document.getElementById('right-modal-window');
var btnLft = document.getElementById("left-bottom-slide-show-button");
var btnRght = document.getElementById("right-bottom-slide-show-button");
var closerLft = document.getElementById("left-modal-window-closer");
var closerRght = document.getElementById("right-modal-window-closer");

btnLft.onclick = function() {
    modalLft.style.display = "block";
};

btnRght.onclick = function() {
    modalRght.style.display = "block";
};

closerLft.onclick = function() {
    modalLft.style.display = "none";
};

closerRght.onclick = function() {
    modalRght.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modalLft) {
        modalLft.style.display = "none";
        modalRght.style.display = "none";
    };
};

/*Modal windows area ends*/

var leftTabButtonClicked = function() {
  document.getElementById("left-tab-button").className = "tab-button tab-button_active";
  document.getElementById("middle-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("right-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("information-column-left").innerHTML = '<h3 class="information-column-left-heading-title">Im Programm des Festivals:</h3><ul><li>Konzerte des Schwesternchores und Aufführungen der inklusiven Theatergruppe JOY und des Puppentheaters „Batlejka“;</li><li>Präsentationen, Filmvorführungen und Fotoausstellungen über die Geschichte des Klosters und seine soziale Tätigkeit, über das Leben und Engagement der Heiligen Elisabeth;</li><li>Workshops zu Ikonenmalerei und Strohflechten unter der professionellen Leitung;</li><li>Spannendes und abwechslungsreiches Kinderprogramm.</li></ul><h3 class="information-column-left-footer-text">Der Eintritt ist frei!</h3>';
  document.getElementById("information-column-left").style.overflow = "auto";
  document.getElementById("information-column-right").innerHTML = '<img class="festival-tab-right-column-picture" src="images/LeftTabPic.jpg"><p class="festival-tab-right-column-text">Im Jahre 2015 startete das Kloster der Heiligen Elisabeth aus Minsk, Weißrussland, mit dem Segen von Seiner Eminenz Pawel, Metropoliten von Minsk und Sluzk, das kulturelle und geistliche Festival „Von Herz zu Herz“. Es findet jährlich in verschiedenen Städten Europas statt.</p><p class="festival-tab-right-column-text">Das Ziel des Projektes besteht darin, die Schönheit und den Reichtum des orthodoxen Glaubens und der Kultur sowie der slawischen Volkstraditionen zu zeigen und die Beziehungen zwischen Christen zu fördern und zu stärken.</p>';
  document.getElementById("information-column-right").style.overflow = "auto";
};

var middleTabButtonClicked = function() {
  document.getElementById("left-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("middle-tab-button").className = "tab-button tab-button_active";
  document.getElementById("right-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("information-column-left").innerHTML = '<p><b>Konzerte des Schwesternchors</b> machen die Zuhörer mit den Traditionen des orthodoxen Kirchengesanges bekannt. Das Zentrum dieser Gesänge bildet die Einheit von Leben, Gebet und Gottesdienst. Im ersten Teil des Konzertes werden religiöse Gesänge vorgeführt. Der zweite Teil widmet sich den Pilger – und Volksliedern.</p><p>Der Schwesternchor des Klosters der Hl. Elisabeth wurde aus dem Amateur-Chor von den Schwestern der Barmherzigkeit gebildet. Nach der offiziellen Gründung des Klosters im Jahre 1999, wurden viele Chorteilnehmerinnen zu Klosterschwestern. So entstand der Schwesternchor, welcher derzeit 20-25 Personen zählt.</p>';
  document.getElementById("information-column-left").style.overflow = "auto";
  document.getElementById("information-column-right").innerHTML = /*'<img class="choir-tab-right-column-picture" src="images/MiddleTabPic.jpg">*/'<iframe class="prince-tab-right-column-video" width="560" height="315" src="https://www.youtube.com/embed/2vEtU3ToTJ4" frameborder="0" allowfullscreen></iframe><br><table class="choir-tab-right-column-table"><tr><td><p>Das Russische Haus<br>der Wissenshaft und Kultur</p><p><b>Friedrichstrasse 176 – 179</b>,<br>10117 Berlin</p></td><td><p>Vorhalle, 1 Stock</p><p><b>um 19 Uhr</b></p></td></tr></table>';
  document.getElementById("information-column-right").style.overflow = "auto";
};

var rightTabButtonClicked = function() {
  document.getElementById("left-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("middle-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("right-tab-button").className = "tab-button tab-button_active";
  document.getElementById("information-column-left").innerHTML = '<p>Schon seit mehr als 10 Jahren bringt das erste in Minsk <b>inklusive Theater „JOY“</b> Kinder und Erwachsene mit geistigen und körperlichen Beeinträchtigungen, die in speziellen Heimen wohnen, und Berufsschauspieler auf einer Bühne zusammen. Geleitet wird das Theater vom berühmten weißrussischen Schauspieler und TV-Moderator Alexander Žhdanowitsch.</p><p>Das Stück „Der kleine Prinz“ stellt mit seinen besonderen Schauspielenden keine weitere Interpretation des beliebten Werkes von Antoine de Saint-Exupéry dar, sondern ermöglicht es, die Welt mal anders anzusehen.</p><p>Die Kinder, die nie erwachsen werden, spielen den <b>«Kleinen Prinzen»</b> für Erwachsene, die einst Kinder waren.</p>';
  document.getElementById("information-column-left").style.overflow = "auto";
  document.getElementById("information-column-right").innerHTML = '<iframe class="prince-tab-right-column-video" width="560" height="315" src="https://www.youtube.com/embed/qcfoIpkf6Zc" frameborder="0" allowfullscreen></iframe><br><table class="prince-tab-right-column-table"><tr><td><p><span class="time-and-date">am 22. september 2017</span></p><p><span class="time-and-date">um 10 Uhr</span></p><p>Piccolo Theater</p><p>Erich Kästner Platz,</p><p>Cottbus</p></td><td><p><span class="time-and-date">am 23. September 2017</span></p><p><span class="time-and-date">um 19 Uhr</span></p><p>Das Russische Haus</p><p>der Wissenschaft und Kultur</p><p>Friedrichstrasse 176-179,</p><p>10117 Berlin</p></td></tr></table>';
  document.getElementById("information-column-right").style.overflow = "auto";
};

/*Analytics realm starts*/

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-96625821-3', 'auto');
    ga('send', 'pageview');


(function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
              try {
                  w.yaCounter45374403 = new Ya.Metrika({
                      id:45374403,
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                  });
              } catch(e) { }
          });
  
          var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script"),
              f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://mc.yandex.ru/metrika/watch.js";
  
          if (w.opera == "[object Opera]") {
              d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
      })(document, window, "yandex_metrika_callbacks");

/*Analytics realm ends*/