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

/*btnLft.onclick = function() {
    modalLft.style.display = "block";
};*/

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

var firstTabButtonClicked = function() {
  document.getElementById("first-tab-button").className = "tab-button tab-button_active";
  document.getElementById("second-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("third-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("forth-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("information-column-left").innerHTML = '<h3 class="information-column-left-heading-title">Програм обухвата:</h3><ul><li>  Књиге, аудио и видео производе;</li><li>Изложбу манастирских производа;</li><li>Традиционалну белоруску колибу;</li><li>Jавно предавање из калиграфије;</li><li>Технику осликавања камених икона;</li><li>и много тога другог...</li></ul><h3 class="information-column-left-footer-text">Безплатан улаз</h3>';
  document.getElementById("information-column-left").style.overflow = "auto";
  document.getElementById("information-column-right").innerHTML = '<img class="first-tab-right-column-picture" src="images/LeftTabPic.jpg"><p class="first-tab-right-column-text">Манастир Свете Јелисавете (Минск, Белорусија) организовао је духовно-просветну међународну добротворну изложбу „Од срца срцу“ 2015. године.</p><p class="first-tab-right-column-text">Лепа традиција међусобног разумевања и јединства различитих култура и генерација чини окосницу нашоj изложби који се већ неколико година одржава у разним европским градовима. Искрено се надамо да ће Вам програм изложбе омогућити да осетите лепоту и богатство културног православног наслеђа, да дођете у додир с традицијом белоруског народног стваралаштва и породичних празника, као и да се упознате са савременим животом Обитељи.</p><p class="first-tab-right-column-text">Дана 24. октобра биће одржан сусрет с духовником манастира Свете Јелисавете протојерејем Андрејем Лемешоноком и презентација серије књига „Шта људи питају“.</p>';
  document.getElementById("information-column-right").style.overflow = "auto";
};

var secondTabButtonClicked = function() {
  document.getElementById("first-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("second-tab-button").className = "tab-button tab-button_active";
  document.getElementById("third-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("forth-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("information-column-left").innerHTML = '<p>Издавачка кућа манастира Свете Јелисавете је једна од водећих црквених издавачких кућа у Белорусији. Њене књиге су више пута добијале награде на престижним домаћим и међународним конкурсима. Љубав читалаца и високу оцену професионалаца издавачка кућа није стекла само захваљујући књижевној продукцији високог квалитета, већ и читалачком односу пуном страхопоштовања према књизи. Запослени у издавачкој кући се према свом послу односе као према служењу Богу и људима, не заборављајући на побољшање својих професионалних умећа – они изучавају теорију издавања књига, одлазе на водеће светске сајмове књига и стварају библиотеку најбољих примерака.</p>';
  document.getElementById("information-column-left").style.overflow = "auto";
  document.getElementById("information-column-right").innerHTML = /*'<img class="second-tab-right-column-picture" src="images/MiddleTabPic.jpg">*/'<iframe class="third-tab-right-column-video" width="560" height="315" src="https://www.youtube.com/embed/2vEtU3ToTJ4" frameborder="0" allowfullscreen></iframe><p>Пажњи читалаца издавачка кућа нуди на стотине наслова књига међу којима нису само Свето Писмо, богослужбена литература, житија светаца, богословски и философски радови, дела светих отаца, литература из историје Цркве, већ и мноштво илустрованих издања за децу, уметничких и публицистичких дела.</p>';
  document.getElementById("information-column-right").style.overflow = "auto";
};

var thirdTabButtonClicked = function() {
  document.getElementById("first-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("second-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("third-tab-button").className = "tab-button tab-button_active";
  document.getElementById("forth-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("information-column-left").innerHTML = '<p>У оквиру 62. Београдског међународног сајма књига биће одржани сусрет с протојерејем Андрејем Лемешоноком – духовником манастира Свете Јелисавете – и презентација три књиге из серије „Реч духовника“. То су књиге које је манастирска издавачка кућа приредила од разговора, проповеди и одговора оца Андреја на најчешћа питања парохијана и која је преведена на српски језик. У књигама, као и у беседама, отац Андреј говори о спасењу и лепоти, о покајању и трпљењу, о љубави и смирењу, а такође дели с читаоцима лично искуство и осећања изазвана грешкама и помоћи Божијом. Жив и јасан језик беседа пун искреног састрадавања и љубави према ближњем, забележен на папиру, по мишљењу издавача наићи ће на одазив у многим срцима.</p>';
  document.getElementById("information-column-left").style.overflow = "auto";
  document.getElementById("information-column-right").innerHTML = '<iframe class="third-tab-right-column-video" width="560" height="315" src="https://www.youtube.com/embed/oPNaeEBlDbE" frameborder="0" allowfullscreen></iframe><br><p><span class="tab-right-column-info">24. септембар од 16:00 до 20:00</span></p><p>У галерији 4. павиљона, Београдски сајам, павиљон 4, Булевар војводе Мишића 14, 11000 Београд, Србија</p>';
  document.getElementById("information-column-right").style.overflow = "auto";
};

var forthTabButtonClicked = function() {
  document.getElementById("first-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("second-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("third-tab-button").className = "tab-button tab-button_passive";
  document.getElementById("forth-tab-button").className = "tab-button tab-button_active";
  document.getElementById("information-column-left").innerHTML = '<p>На јавном предавању из иконописања посетиоци ће моћи да се упознају с радницима иконописне радионице манастира Свете Јелисавете и да сазнају нешто о историји и основама древне технике сликања икона помоћу уситњеног полудрагог камења и минерала и да усвоје извесне методе и технике иконописања под руководством искусног мајстора. Прича уметника о иконопису биће праћена демонстрацијом фаза стварања иконе и завршена приказивањем видеа о раду радионица манастира Свете Јелисавете.</p>';
  document.getElementById("information-column-left").style.overflow = "auto";
  document.getElementById("information-column-right").innerHTML = /*'<img class="second-tab-right-column-picture" src="images/MiddleTabPic.jpg">*/'<iframe class="third-tab-right-column-video" width="560" height="315" src="https://www.youtube.com/embed/2vEtU3ToTJ4" frameborder="0" allowfullscreen></iframe><br><p><span class="tab-right-column-info">Jавно предавање из калиграфије</span></p>';
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
