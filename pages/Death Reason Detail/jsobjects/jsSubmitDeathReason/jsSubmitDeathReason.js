export default {
	AddDeathReasonButtononClick () {
{{ 
    addDeathReason.run(() => {
    fetchDeathReason.run(); // Refresh the table data
    DeathReasonNameInput.setValue(""); // Clear HerdNameInput
    DeathReasonDescInput.setValue(""); // Clear HerdDescriptionInput
    showAlert("Birth Status added successfully!", "success"); // Show success notification
  }, (error) => {
    showAlert("Failed to add origin: " + error.message, "error"); // Show error notification
  }) 
}}

	}
}