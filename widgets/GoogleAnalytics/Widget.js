define([
  "dojo/_base/declare",
  "dojo/_base/array",
   "dojo/_base/lang",
   "dojo/dom-style",
   "dojo/on",
   "dojo/query",
  "jimu/BaseWidget"
], function(
  declare,
  array,
  lang,
  domStyle,
  on
,  query,
  BaseWidget
) {

  var clazz = declare([BaseWidget], {
    //these two properties are defined in the BaseWiget
    baseClass: 'google-analytics',
    name: 'GoogleAnalytics',
    logMapEvents: false, // defaults to false, gets set from config
    logLayerEvents: false, // defaults to false, gets set from config

    // add additional properties here

    postCreate: function () {
        // summary:
        //      Overrides method of same name in dijit._Widget.
        
        //console.log("Init Google Analytics")
        // This starts the google analytics code (do not delete)
        eval(this.config.code)
        // Event
        //ga('send', 'event', 'Widget', 'Google Analytics', 'postCreate');


        // set whether to log map/layer events
        this.logMapEvents = this.config.logMapEvents;
        this.logLayerEvents = this.config.logLayerEvents;

      // summary:
      //      Overrides method of same name in dijit._Widget.
      // tags:
      //      private
      this.inherited(arguments);
      //console.log('GoogleAnalytics::postCreate', arguments);
      
    },

    // start up child widgets
    startup: function() {
          // summary:
          //      Overrides method of same name in dijit._Widget.
          // tags:
          //      private
          this.inherited(arguments);
          //console.log('GoogleAnalytics::startup', arguments);
        
          // user selected option to log map events
          if (this.logMapEvents){
              
          
         }
     
         // user selected option to log layer events
         if (this.logLayerEvents){
              
         }
         
         // hide the icon in the menu bar  
        this._hideMenuIcon(this.id, this.label);
         //end startup()      
    },

    onOpen: function () {
      // summary:
      //      Overrides method of same name in jimu._BaseWidget.
      
      // add code to execute whenever the widget is opened
    },

    onClose: function() {
      // summary:
      //      Overrides method of same name in jimu._BaseWidget.
      

      // add code to execute whenever the widget is closed
    },
    
    _hideMenuIcon:function(id, label){
        // should work with all themes
        // Usage, takes id and label and selects div element with a matching settingid or title.
        // Some themes use a settingsid, others use title
        //The only items that will have this are the icon divs.
        
        function hide(nodes){
            // run in loop just in case we get more than one node
            array.forEach(nodes, function(node){
                domStyle.set(node, "display", "none");
            });
        }
        
        var byId, byLabel, qryById, qryByLabel;
        
        qryById = "[settingid=\'" + id + "\']";
        nodesById = query(qryById);
        qryByLabel = "[title=\'" + label + "\']";
        nodesByLabel = query(qryByLabel);
        
        if (nodesById.length > 0){
            hide(nodesById);
        }
        else if (nodesByLabel.length > 0){
            hide(nodesByLabel);
        }
        else{
            alert("Google Analytics Widget Failed to Hide it's Icon.  Widget not supported with this theme");
        }
    }

  });

  return clazz;
});