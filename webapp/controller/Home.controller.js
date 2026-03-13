sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
], (Controller,models) => {
    "use strict";

    return Controller.extend("com.applexus.task.controller.Home", {
        onInit() {
            this.oModel1 = models.createModel("../model/sampledata/Sample1.json");
            // this.getView().setModel(this.oModel1,"firMo");
            this.oModel2 = models.createModel("../model/sampledata/Sample2.json");
            // this.getView().setModel(this.oModel2,"secMo");
        },
        onPress: function(oEvent){
            if (oEvent.getSource().getPressed()){
                this.getView().setModel(this.oModel1,"test");
                // this.getView().byId('in1').bindValue('/empStr/empId')
                // this.getView().byId('in2').bindValue('/empStr/empName')
                // this.getView().byId('in3').bindValue('/empStr/empSal')
                // this.getView().byId('in4').bindValue('/empStr/Currency')
            }
            else {
                this.getView().setModel(this.oModel2,"test");
                // this.getView().byId('in1').bindValue('secMo>/empStr/empId')
                // this.getView().byId('in2').bindValue('secMo>/empStr/empName')
                // this.getView().byId('in3').bindValue('secMo>/empStr/empSal')
                // this.getView().byId('in4').bindValue('secMo>/empStr/Currency')
            }
            
        }
    });
});