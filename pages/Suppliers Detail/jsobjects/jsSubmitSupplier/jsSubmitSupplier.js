export default {
	AddSupplierButtononClick () {
{{ 
    addSuppliers.run(() => {
    fetchSuppliers.run(); // Refresh the table data
    SupplierInput.setValue(""); // Clear HerdNameInput
    SupplierNotesInput.setValue(""); // Clear HerdDescriptionInput
    showAlert("Herd added successfully!", "success"); // Show success notification
  }, (error) => {
    showAlert("Failed to add herd: " + error.message, "error"); // Show error notification
  }) 
}}

	}
}