export default {
	AddHerdButtononClick () {
{{ 
    addHerd.run(() => {
    fetchHerds.run(); // Refresh the table data
    HerdNameInput.setValue(""); // Clear HerdNameInput
    HerdDescriptionInput.setValue(""); // Clear HerdDescriptionInput
    showAlert("Herd added successfully!", "success"); // Show success notification
  }, (error) => {
    showAlert("Failed to add herd: " + error.message, "error"); // Show error notification
  }) 
}}

	}
}