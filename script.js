function submitComplaint() {

    let fullname =
        document.getElementById("fullname").value;

    let category =
        document.getElementById("category").value;

    let details =
        document.getElementById("details").value;

    let complaintID =
        "QC-" + Date.now();

    let complaint = {
        complaintID: complaintID,
        fullname: fullname,
        category: category,
        details: details,
        status: "Under Review"
    };

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push(complaint);

    localStorage.setItem(
        "complaints",
        JSON.stringify(complaints)
    );

    alert(
        "Complaint Submitted!\n\nReference Number: "
        + complaintID
    );}

function trackComplaint() {

    let reference =
        document.getElementById("reference").value;

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    let found =
        complaints.find(
            complaint =>
            complaint.complaintID === reference
        );

    if(found) {

        document.getElementById("complaintID").innerHTML =
            "<b>Reference Number:</b> " +
            found.complaintID;

        document.getElementById("complainant").innerHTML =
            "<b>Name:</b> " +
            found.fullname;

        document.getElementById("complaintType").innerHTML =
            "<b>Category:</b> " +
            found.category;

        document.getElementById("complaintDescription").innerHTML =
            "<b>Details:</b> " +
            found.details;

        document.getElementById("complaintStatus").innerHTML =
            "<b>Status:</b> " +
            found.status;

    } else {

        document.getElementById("complaintID").innerHTML =
            "Complaint not found.";

        document.getElementById("complainant").innerHTML = "";

        document.getElementById("complaintType").innerHTML = "";

        document.getElementById("complaintDescription").innerHTML = "";

        document.getElementById("complaintStatus").innerHTML = "";
    }
}
