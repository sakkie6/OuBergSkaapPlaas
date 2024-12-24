export default {
	AddBirthStatusButtononClick () {
{{ 
    addBirthStatus.run(() => {
    fetchBirthStatus.run(); // Refresh the table data
    BirthStatusNameInput.setValue(""); // Clear HerdNameInput
    BirthStatusDescriptionInput.setValue(""); // Clear HerdDescriptionInput
    showAlert("Birth Status added successfully!", "success"); // Show success notification
  }, (error) => {
    showAlert("Failed to add origin: " + error.message, "error"); // Show error notification
  }) 
}}

	}
}