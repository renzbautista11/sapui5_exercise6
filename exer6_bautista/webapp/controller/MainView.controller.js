sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.training.exer6_bautista.controller.MainView", {
        onInit: function () 
            {

            },

        onAddItem: function ()
            {
                // Comment this code for now
                // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                // var sMsg = oTextBundle.getText("addButtonMsg");
                // this.fnDisplayMsg(sMsg);

                // Instantiate the fragment

                // create dialog lazily
                if (!this.oDialog) {
                    // By using loadFragment, we are adding the fragment as a dependent to the View
                    // By doing so, we can use the functions inside the view's controller
                    this.oDialog = this.loadFragment({
                        name: "com.training.exer6_bautista.fragment.ProductDialog"
                    });
                //this.fnDisplayMsg("Add button pressed1");
                } 
                
                this.oDialog.then(function(oDialog) {
                    oDialog.open();
                });
                //this.fnDisplayMsg("Add button pressed");
            },

            fnDisplayMsg: function (sMsg){
                MessageToast.show(sMsg);
            },
        
		toggleVisibility: function () {
			this._Page.setShowFooter(!this._Page.getShowFooter());
		},
		toggleFooter: function () {
			this._Page.setFloatingFooter(!this._Page.getFloatingFooter());
		},            

        onChangeMOP: function (oEvent) 
            {
                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
                var sSelectedText = oEvent.getParameter("selectedItem").getProperty("text");

                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");
                var oCCDtlLabel = this.getView().byId("idLblCCDtl");
                var oCCDtlInput = this.getView().byId("idInputCCDtl");

                if (sSelectedKey === "GCASH")
                {
                    // show the mobile field
                    oMobileLabel.setVisible(true);
                    oMobileInput.setVisible(true);
                    oCCDtlLabel.setVisible(false);
                    oCCDtlInput.setVisible(false);
                }
                else if(sSelectedKey === "CC")
                {
                    // show the cc detail field
                    oCCDtlLabel.setVisible(true);
                    oCCDtlInput.setVisible(true);
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);

                }
                else 
                {
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);
                    oCCDtlLabel.setVisible(false);
                    oCCDtlInput.setVisible(false);
                }
                sap.m.MessageToast.show("Selected Payment Method: " + sSelectedText);
            }, 
 
        onPressCheckout: function ()
            {
                var oInputFName = this.getView().byId("idInptFName");
                var oInputLName = this.getView().byId("idInptLName");
                var oInputFNameValue = oInputFName.getValue();
                var oInputLNameValue = oInputLName.getValue();
                var oRouter = this.getOwnerComponent().getRouter();

                // Check if first name and last name is blank
                if (oInputFNameValue === "" || oInputLNameValue === ""){
                   
// set value state to Error
                    oInputFName.setValueState("Error");
                    oInputLName.setValueState("Error");
                } else {
                    oInputFName.setValueState("None");
                    oInputLName.setValueState("None");
                    
                    //Navigate to review page passing first
                    oRouter.navTo("RouteReviewPage", { firstName: oInputFNameValue  });

                }

            },
        onCloseDialog: function (){
                    this.getView().byId("idProductDialog").close();
                },

    });
});