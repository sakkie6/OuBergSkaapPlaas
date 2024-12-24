export default {
  async validateAndUpdateSheep() {
    // Check if a row is selected first:
    if(!Table_Sheep.selectedRow) {
      showAlert("Please select a row to update.", "error");
      return;
    }

    // 1. Validate required fields (using the new 'Upd' widgets)
    if (!TextInput_EarTagNumberUpd.text) {
      showAlert("Ear Tag Number is required!", "error");
      return;
    }

    if (!DatePicker_DateBornUpd.selectedDate) {
      showAlert("Date Born is required!", "error");
      return;
    }

    if (!Select_GenderUpd.selectedOptionValue) {
      showAlert("Gender is required!", "error");
      return;
    }

    if (!Select_HerdUpd.selectedOptionValue) {
      showAlert("Current Herd is required!", "error");
      return;
    }

    if (!Select_BirthStatusUpd.selectedOptionValue) {
      showAlert("Birth Status is required!", "error");
      return;
    }

    if (!Select_OriginUpd.selectedOptionValue) {
      showAlert("Origin is required!", "error");
      return;
    }

    if (!Select_EarTagColourUpd.selectedOptionValue) {
      showAlert("Ear Tag Colour is required!", "error");
      return;
    }

    // OPTIONAL: If "IsAlive" is false, you might require DateDeceased and DeathReasonID:
    
    if (!Checkbox_IsAliveUpd.isChecked) {
      if (!DatePicker_DateDeceasedUpd.selectedDate) {
        showAlert("Date Deceased is required for a deceased sheep!", "error");
        return;
      }
      if (!Select_DeathReasonUpd.selectedOptionValue) {
        showAlert("Death Reason is required for a deceased sheep!", "error");
        return;
      }
    }
    

    // 2. Try updating
    try {
      await UpdateSheep.run();
      showAlert("Sheep updated successfully!", "success");

      // 3. Reset all "Upd" widgets if you want to clear them after updating
      resetWidget("TextInput_EarTagNumberUpd");
      resetWidget("DatePicker_DateBornUpd");
      resetWidget("Select_GenderUpd");
      resetWidget("Select_HerdUpd");
      resetWidget("Select_BirthStatusUpd");
      resetWidget("Checkbox_IsAliveUpd");
      resetWidget("Select_OriginUpd");
      resetWidget("DatePicker_DateDeceasedUpd");
      resetWidget("Select_DeathReasonUpd");
      resetWidget("Select_EarTagColourUpd");

      // 4. Refresh the table data
      GetSheep.run();
    } catch (error) {
      showAlert("Failed to update sheep: " + error.message, "error");
    }
  }
};
