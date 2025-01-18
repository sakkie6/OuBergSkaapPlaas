export default {
  submitData: () => {
    // Retrieve values from input widgets
    const sheepID = inpHerdID.selectedOptionValue;
    const medicineID = inpMedicineID.selectedOptionValue;
    const medicineDate = inpMedicineDate.selectedDate;
    const indDosage = inpHerdDosage.text;

    // Initialize an array to collect missing fields
    let missingFields = [];

    // Check each required field and add to missingFields if empty
    if (!sheepID) missingFields.push("EartagD");
    if (!medicineID) missingFields.push("Medicine given");
    if (!medicineDate) missingFields.push("Date Medicine Given");
    if (!indDosage) missingFields.push("Dosage given (g/ml)");

    // If there are missing fields, show an error message
    if (missingFields.length > 0) {
      const errorMessage = `Please fill in the following required fields: ${missingFields.join(", ")}.`;
      showAlert(errorMessage, "error");
      return; // Stop further execution
    }

    // If all validations pass, execute the insert query
    InsertHerdMed.run(
      () => {
        // On success of InsertIndMed
        GetHerdMedData.run(
          () => showAlert("Data submitted successfully!", "success"),
          (error) => showAlert(`Error refreshing data: ${error.message}`, "error")
        );
      },
      (error) => showAlert(`Error inserting data: ${error.message}`, "error")
    );
  },
		
  }
 
