sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
], (Controller,models) => {
    "use strict";

    return Controller.extend("com.applexus.task.controller.Emptable", {
        onInit() {
            this.oModel = models.createModel("../model/sampledata/Sample3.json");
            this.getView().setModel(this.oModel,"fiMo");
        },
        onSelect: function(oEvent) {
            var _rContext = oEvent.getParameter("rowContext");
            var _sPath = _rContext.getPath();
            var _sF = this.getView().byId('f1');
            _sF.bindElement({
                path: _sPath,
                model: "fiMo"
            });
        }
    });
});