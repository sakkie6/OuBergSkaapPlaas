export default {
	AddETCButtononClick () {
{{ 
    addEarTagColour.run(() => {
    fetchEarTagColour.run(); // Refresh the table data
    ETCNameInput.setValue(""); // Clear HerdNameInput
    ETCDescInput.setValue(""); // Clear HerdDescriptionInput
    showAlert("Birth Status added successfully!", "success"); // Show success notification
  }, (error) => {
    showAlert("Failed to add origin: " + error.message, "error"); // Show error notification
  }) 
}}

	}
}