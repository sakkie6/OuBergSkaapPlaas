export default {
	AddOriginButtononClick () {
{{ 
    addOrigin.run(() => {
    fetchOrigin.run(); // Refresh the table data
    OriginNameInput.setValue(""); // Clear HerdNameInput
    OriginDescriptionInput.setValue(""); // Clear HerdDescriptionInput
    showAlert("Origin added successfully!", "success"); // Show success notification
  }, (error) => {
    showAlert("Failed to add origin: " + error.message, "error"); // Show error notification
  }) 
}}

	}
}