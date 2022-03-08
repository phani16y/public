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
              this.oPage = this.getView().byId("page");
               //
      // OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps
     // this.getView().byId("cc").setSettings({
       // "destinationPath": "/public",  
       // "repositoryId":"145f82b9-2bd6-4975-b163-754a93ab9901",
       // "objectId": "pmPyGBhQcogZX15tYmMlBPhc1dBRBpB2L1EhpQx5aF8",
        //"pubLinkId":"79173294-9729-4abe-bdd6-8d7faa901f82",
       // "forceLoad": false
      //});
          this.getComponentContainer().setSettings(this.getComponentSettings());
        },

        getComponentSettings: function() {
          return  {
            destinationPath: "/public",
            publicLinkId: "f8eda9ed-6646-4692-8142-c4b40d64e9d5"
          };
        },

        getComponentContainer: function () {
          return this.oPage.getContent()[0];
      },

          // registered event handler for 'componentCreated' event of Component Container
    onComponentCreated: function(oEvent) {
        
      this._oDocumentTable = oEvent.getParameter("component");
      this._loadRepositoryAndObjectId();
      },

      _loadRepositoryAndObjectId: function () {
        this._oDocumentTable.requestNavigationAndOpen("9eb7c007-f60b-40ce-b949-7eba32b9fa81", "7RGM4yS1C2CLx_pzUiLm6fh58EzyCrG73M9pQZnYCvA");
    }

        });
    });
