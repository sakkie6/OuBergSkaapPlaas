export default {
	btnUpdateMedicineonClick () {
		{{updateMedicine.run(() => fetchMedicineList.run(), 
		(error) => showAlert("Failed to update medicine", "error"))}}

	}
}