define(['dojo/_base/declare',
  'jimu/BaseWidget',
      'esri/map'

],
function(declare, BaseWidget, map) {
    var clazz = declare([BaseWidget], {
        templateString: '<div> <span style="font-size:14px !important;">Klikněte na tlačítko "Vybrat" a klepnutím vyberte místo na mapě, ve kterém chcete zobrazit 3D panorama. Po otevření se můžete na daném místě pohybovat myší, případně se můžete postupně přesouvat na jiné místo. </span> <br /> ' + '<br /> <input type="button" style="background-color: rgb(125,125,125)!important; background: url(https://cdn0.iconfinder.com/data/icons/miscellaneousness-long-shadow-flat/33/eyes-512.png) no-repeat; background-size: 34px 34px;"  class="jimu-btn" id="btnPict" value=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vybrat" data-dojo-attach-event="click:_EarthClick"> <br /> <br /><br /><input type="button" style="background-color: rgb(125,125,125)!important; background: url(https://cdn0.iconfinder.com/data/icons/miscellaneousness-long-shadow-flat/33/eyes-512.png) no-repeat; background-size: 34px 34px; display:none"  class="jimu-btn" id="btnPict" value=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3D" data-dojo-attach-event="click:_Earth3DClick"> <br /> </div> ',



      

        _EarthClick: function () {
            EarthConfigURL = this.config.configText;
            map = this.map;

            var handlerStreetView;
            //handlers 
            if (handlerStreetView) {
                handlerStreetView.remove();
                handlerStreetView= null;
            } else {



                //map.setMapCursor("url(./widgets/Earth/images/streetview.cur),auto");
                map.setMapCursor('crosshair');
                handlerStreetView = map.on("click", function (evt) {

                    pt = esri.geometry.webMercatorToGeographic(evt.mapPoint);
                    //url = "https://earth.google.com/web/@" + pt.y + "," + pt.x + EarthConfigURL;
                    url = "https://cz-services.tmapserver.cz/tools/panorama.html?y="+ pt.y + "&x="+ pt.x + "+&stat=0;"
                    //ga('send', 'event', 'Panorama', 'click',);
                    let coordinates = "Y=" +pt.y + "X=" +pt.x;
                    ga('send', 'event', 'Panorama',  'click',coordinates , 1, url );


                    window.open(url);

                    ///// remove after one click
                    map.setMapCursor("default");
                    ////remove after one click
                    

                    handlerStreetView.remove();
                });
            };  /// end else for handlerStreetView 


            /////  end of street view widget

            /////
        },

         _Earth3DClick: function () {
            EarthConfigURL = this.config.configText;
            map = this.map;

            var handlerStreetView;
            //handlers 
            if (handlerStreetView) {
                handlerStreetView.remove();
                handlerStreetView= null;
            } else {



                //map.setMapCursor("url(./widgets/Earth/images/streetview.cur),auto");
                map.setMapCursor('crosshair');
                handlerStreetView = map.on("click", function (evt) {

                    pt = esri.geometry.webMercatorToGeographic(evt.mapPoint);
                    //url = "https://en.mapy.cz/zakladni?x="+ pt.x + "&y="+ pt.y + "&z=17&or=0&oc=(" + pt.x + "%2C" + pt.y + ")";
                    
                    url = "https://mapy.cz/zakladni?x="+ pt.x + "&y="+ pt.y + "&z=17&source=pubt&id=15205477";
                    let coordinates = "Y=" +pt.y + "X=" +pt.x;
                    ga('send', 'event', 'Panorama',  '3Dclick',coordinates , 1, url );


                    window.open(url);

                    ///// remove after one click
                    map.setMapCursor("default");
                    ////remove after one click
                    

                    handlerStreetView.remove();
                });
            };  /// end else for handlerStreetView 


            /////  end of street view widget

            /////
        }
});

clazz.hasStyle = false;
clazz.hasUIFile = false;
clazz.hasLocale = false;
clazz.hasConfig = false;
return clazz;
});

