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
                this.fnDisplayMsg("Add button pressed");
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
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();
                var oInputLNameValue = this.getView().byId("idInptLName").getValue();
                
                // Check if first name is blank
                if (oInputFNameValue === ""|| oInputLNameValue === "") {
                    sap.m.MessageToast.show("Required Field is blank"); 
                }
            },



    });
});