export default {
	SubmitMedicineonClick() {
		{{ 
			addMedicine.run(
				() => {
					fetchMedicineList.run(); // Refresh the medicine list
					
					// Clear the input boxes
					MedicineNameInput.setValue(""); 
					MedicineDescriptionInput.setValue(""); 
					MedicineCostInput.setValue(""); 
					
					// Show a success message
					showAlert("Medicine added successfully!", "success");
				}, 
				(error) => {
					showAlert("Failed to add medicine: " + error.message, "error"); // Show an error message
				}
			) 
		}}
	}
}
