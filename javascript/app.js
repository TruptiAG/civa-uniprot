function ShowHideDiv() {
    var dvGene = document.getElementById("dvGene");
    var dvUniprot = document.getElementById("dvUniprot");
    var dvFindGene=document.getElementById("dvFindGene");
    var dvFindUni=document.getElementById("dvFindUni")

    dvGene.style.display = RGene.checked ? "block" : "none";
    dvFindGene.style.display = RGene.checked ? "block" : "none";
    dvUniprot.style.display = RUniprot.checked ? "block" : "none";
    dvFindUni.style.display = RUniprot.checked ? "block" : "none";
    d3.select("tbody").html("");
    d3.select("p").classed('noresults', true).html("");
}
//reference for the function : https://levelup.gitconnected.com/building-a-simple-website-that-outputs-results-from-a-csv-using-users-input-bfcb782ced45


d3.csv("data/civ_data_7Jan.csv").then(function (civdata)
{
    var civ = civdata;
    var buttonG = d3.select("#buttonGene");
    var buttonU = d3.select("#buttonUni");
    var form = d3.select("#query_form");
    buttonG.on("click", runEnter);
    buttonU.on("click", runEnter);
    form.on("submit", runEnter);
// Defining the function

    function runEnter() {
        document.addEventListener('readystatechange', function() {
            if (document.readyState === "complete") {

                ShowHideDiv();

            }

        })

        d3.select("tbody").html("")

        var inputValue;
        if (document.getElementById('RGene').checked){
            inputValue=document.getElementById('RGene').value;
        }
        else{
            inputValue=document.getElementById('RUniprot').value;
        }
        if (inputValue==='gene') {

            var inputElementGene = d3.select("#user-input-gene");
            var inputValueGene = inputElementGene.property("value").toUpperCase().trim();

            var filteredGene = civ.filter(civ => civ.Gene_Symbol === inputValueGene); // checks datatype

            if (filteredGene.length === 0 && inputValueGene !=="") {
                d3.select("p").classed('noresults', true).html("<strong>No record to match this gene symbol. Please contact to add this to the database</strong>")
            }
            console.log(filteredGene[0]['N_Hom_gnomAD'])
            console.log(filteredGene)
            for (var k = 0; k < filteredGene.length; k++) {
                d3.select("tbody").insert("tr").html(
                    "<td>" + [k + 1] + "</td>"+
                    "<td>" + (filteredGene[k]['Transcript_ID']) + "</td>" +
                    "<td>" + (filteredGene[k]['Protein_position']) + "</td>" +
                    "<td>" + (filteredGene[k]['Amino_acids']) + "</td>"+
                    "<td>" + (filteredGene[k]['AF_ELGH']) + "</td>" +
                   "<td>" + (filteredGene[k]['N_Het_ELGH']) + "</td>" +
                    "<td>" + (filteredGene[k]['N_Hom_ELGH']) + "</td>" +
                    "<td>" + (filteredGene[k]['AF_BiB']) + "</td>" +
                    "<td>" + (filteredGene[k]['N_Het_BiB']) + "</td>" +
                    "<td>" + (filteredGene[k]['N_Hom_BiB']) + "</td>" +
                    "<td>" + (filteredGene[k]['AF_Birm']) + "</td>" +
                   "<td>" + (filteredGene[k]['N_Het_Birm']) + "</td>" +
                   "<td>" + (filteredGene[k]['N_Hom_Birm']) + "</td>" +
                    "<td>" + (filteredGene[k]['N_Cosmic']) + "</td>" +
                    "<td>" + (filteredGene[k]['Cancer_tissues']) + "</td>" +
                    "<td>" + (filteredGene[k]['AF_gnomAD']) + "</td>" +
                    "<td>" + (filteredGene[k]['N_Het_gnomAD']) + "</td>" +
                    "<td>" + (filteredGene[k]['N_Hom_gnomAD']) + "</td>"
                )}

        }
        if (inputValue==='uniprot'){

            var inputElementUniprot = d3.select("#user-input-uniprot");
            var inputValueUniprot = inputElementUniprot.property("value").toUpperCase().trim();

            var filteredUniprot = civ.filter(civ => civ.Uniprot_ID===inputValueUniprot); // checks datatype

            if (filteredUniprot.length === 0 && inputValueUniprot !==""){
                d3.select("p").classed('noresults', true).html("<strong>No record to match this uniprot id. Please contact to add this to the database</strong>")
            }
            console.log(filteredUniprot[0]['N_Hom_gnomAD'])
            console.log(filteredUniprot)
            for (var i = 0; i < filteredUniprot.length; i++) {
                d3.select("tbody").insert("tr").html(
                    "<td>" + [i + 1] + "</td>" +
                    "<td>" + (filteredUniprot[i]['Transcript_ID']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['Protein_position']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['Amino_acids']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['AF_ELGH']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Het_ELGH']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Hom_ELGH']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['AF_BiB']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Het_BiB']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Hom_BiB']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['AF_Birm']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Het_Birm']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Hom_Birm']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Cosmic']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['Cancer_tissues']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['AF_gnomAD']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Het_gnomAD']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Hom_gnomAD']) + "</td>")}


        }

    }

    //d3.event.preventDefault();






});
