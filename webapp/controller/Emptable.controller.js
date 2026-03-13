sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
], (Controller,models) => {
    "use strict";

    return Controller.extend("com.applexus.task.controller.Emptable", {
        onInit() {
            this.oModel = models.createModel("../model/sampledata/Sample3.json");
            this.getView().setModel(this.oModel,"fiMo");
        }
    });
});