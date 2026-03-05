document.getElementById("downloadPdf").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "files/NEW_ENERGIES_Beyond_Data_Official.pdf";
    link.download = "NEW_ENERGIES_Beyond_Data_Official.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});