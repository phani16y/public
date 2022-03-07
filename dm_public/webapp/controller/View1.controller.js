sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dmpublic.controller.View1", {
            onInit: function () {
                debugger;
      // OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps
     // this.getView().byId("cc").setSettings({
       // "destinationPath": "/public",  
       // "repositoryId":"145f82b9-2bd6-4975-b163-754a93ab9901",
       // "objectId": "pmPyGBhQcogZX15tYmMlBPhc1dBRBpB2L1EhpQx5aF8",
        //"pubLinkId":"79173294-9729-4abe-bdd6-8d7faa901f82",
       // "forceLoad": false
      //});
        },

          // registered event handler for 'componentCreated' event of Component Container
    onComponentCreated: function(oEvent) {
        debugger;
        this._oDocumentTable = oEvent.getParameter("component");
        // OPTIONAL: set a folder as home folder
        //this._oDocumentTable.setHomeFolder(<OBJECT_ID>);
        // OPTIONAL: request a navigation to a repository & folder during runtime
        this._oDocumentTable.requestNavigationAndOpen("145f82b9-2bd6-4975-b163-754a93ab9901", "pmPyGBhQcogZX15tYmMlBPhc1dBRBpB2L1EhpQx5aF8");
      },

        });
    });
