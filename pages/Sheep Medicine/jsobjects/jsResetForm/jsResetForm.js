export default {
	bntResetonClick () {
		{{
  resetWidget("inpSheepID", true);
  resetWidget("inpMedicineID", true);
  resetWidget("inpMedicineDate", true);
  resetWidget("inpIndDosage", true);
  resetWidget("inpIndMedNotes", true);
  resetWidget("inpMedUnitCost", true);
  resetWidget("inpDosageCost", true);
}}
GetIndMedData.run()
	}
}