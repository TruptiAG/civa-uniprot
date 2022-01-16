---
layout: default
---
<html language="en">
<head>
    <title>CIVa Database</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name=”viewport” content=”width=device-width, initial-scale=1.0">
    <!-- to prevent caching -->

    <link rel=”stylesheet” href="css/bootstrap.css">
    <link rel=”stylesheet” href="css/bootstrap-responsive.css">
    <link rel=”stylesheet” href="css/bootstrap-grid.css">
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <link type="text/css" rel="stylesheet" href="style.css">

</head>
<body id="page_body">

<br>
<form id=”form”>

        <div id="radio-button">
        <p>Select Search Criteria</p>
        <input type="radio" id="RGene" name="chkCriterion" value="gene" onclick="ShowHideDiv()" />
        Gene Symbol
        <input type="radio" id="RUniprot" name="chkCriterion" value ="uniprot" onclick="ShowHideDiv()" />
        Uniprot ID
    </div>

    <div id="dvGene" style="display:none">
        <label for="user-input-gene"></label><input class="form-control" id="user-input-gene" placeholder="Enter Gene Symbol" aria-describedby="submit-button">
    </div>
    <div id="dvUniprot" style="display:none">
        <label for="user-input-uniprot"></label><input class="form-control" id="user-input-uniprot" placeholder="Enter Uniprot ID" aria-describedby="submit-button">
    </div>

    <div id="dvFindGene" style="display:none" >
        <br>

        <button class="btn btn-secondary" type="button" id="buttonGene">Find </button>
    </div>
    <div id="dvFindUni" style="display:none" >
        <br>
        <button class="btn btn-secondary" type="button" id="buttonUni">Find </button>
    </div>


</form>

<div class="container">
    <div class="row justify-content-center">
            <table class="table  table-striped" id="vertical">

                <thead class="thead-dark">
                     <th>#</th>
                     <th>Transcript ID</th>
                     <th>Protein Position</th>
                     <th>Amino Acids</th>
                     <th>AF_ELGH</th>
                     <th>N_Het_ELGH</th>
                     <th>N_Hom_ELGH</th>
                     <th>AF_BiB</th>
                     <th>N_Het_BiB</th>
                     <th>N_Hom_BiB</th>
                     <th>AF_Birm</th>
                     <th>N_Het_Birm</th>
                     <th>N_Hom_Birm</th>
                     <th>N_Cosmic</th>
                     <th>Cancer tissues</th>
                     <th>AF_gnomAD</th>
                     <th>N_Het_gnomAD</th>
                     <th>N_Hom_gnomAD</th>






                </thead>

                <tbody>



            </table>

            <p class="noresults">
            </p>


        </div>

    </div>


<div class="visitor-count"> <?php include 'counter.php'; ?>
<p>Visitor count: </p>
    <?php include 'counter.php'; ?>
</div>
<script src="javascript/app.js"></script>
<script src="javascript/count.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/underscore@1.12.0/underscore-min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!--<script src ="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"></script>-->
<script crossorigin="anonymous"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script crossorigin="anonymous"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

</body>
</html>







