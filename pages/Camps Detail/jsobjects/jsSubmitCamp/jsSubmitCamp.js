export default {
	AddCampButtononClick () {
{{ 
    addCamp.run(() => {
    fetchCamps.run(); // Refresh the table data
    CampInput.setValue(""); // Clear HerdNameInput
    CampNotesInput.setValue(""); // Clear HerdDescriptionInput
    showAlert("Herd added successfully!", "success"); // Show success notification
  }, (error) => {
    showAlert("Failed to add herd: " + error.message, "error"); // Show error notification
  }) 
}}

	}
}