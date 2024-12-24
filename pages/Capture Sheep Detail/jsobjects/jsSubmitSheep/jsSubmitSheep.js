export default {
  async validateAndInsertSheep() {
    // 1. Validate required fields
    if (!TextInput_EarTagNumber.text) {
      showAlert("Ear Tag Number is required!", "error");
      return;
    }

    if (!DatePicker_DateBorn.selectedDate) {
      showAlert("Date Born is required!", "error");
      return;
    }

    if (!Select_Gender.selectedOptionValue) {
      showAlert("Gender is required!", "error");
      return;
    }

    if (!Select_Herd.selectedOptionValue) {
      showAlert("Current Herd is required!", "error");
      return;
    }

    if (!Select_BirthStatus.selectedOptionValue) {
      showAlert("Birth Status is required!", "error");
      return;
    }

    // IsAlive is a checkbox, so it always has a boolean (default = false if unchecked).
    // If you want to force user to check or uncheck, you can add logic. 
    // E.g. if it's not clicked at all, do something. Usually it's not necessary.

    if (!Select_Origin.selectedOptionValue) {
      showAlert("Origin is required!", "error");
      return;
    }

    if (!Select_EarTagColour.selectedOptionValue) {
      showAlert("Ear Tag Colour is required!", "error");
      return;
    }

    // Additional logic for if the sheep is not alive
    //    If "IsAlive" is false, you might require DateDeceased & DeathReasonID.
    //    Uncomment if that is your requirement:
    
    if (!Checkbox_IsAlive.isChecked) {
      if (!DatePicker_DateDeceased.selectedDate) {
        showAlert("Date Deceased is required for a deceased sheep!", "error");
        return;
      }
      if (!Select_DeathReason.selectedOptionValue) {
        showAlert("Death Reason is required for a deceased sheep!", "error");
        return;
      }
    }
  

    // 3. Now that required fields are validated, run the InsertSheep query.
    //    We can also pass "null" for optional fields if user left them blank.
    try {
      await InsertSheep.run();
      
      showAlert("Sheep inserted successfully!", "success");

      // 4. Reset all widgets to clear the form
      resetWidget("TextInput_EarTagNumber");
      resetWidget("DatePicker_DateBorn");
      resetWidget("Select_Gender");
      resetWidget("Select_Herd");
      resetWidget("Select_BirthStatus");
      resetWidget("Checkbox_IsAlive");
      resetWidget("Select_Origin");
      resetWidget("DatePicker_DateDeceased");
      resetWidget("Select_DeathReason");
      resetWidget("Select_EarTagColour");
      
      // 5. Refresh the table data
      GetSheep.run();

    } catch (error) {
      // 6. Show a more descriptive error message if InsertSheep fails
      showAlert("Failed to insert sheep: " + error.message, "error");
    }
  }
};
