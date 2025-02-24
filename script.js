function handleSpecialActivity() {
    clearResult();

    const specialActivity = document.getElementById("specialActivity").value;
    const fixedPartSection = document.getElementById("fixedPartSection");
    const criterion1Section = document.getElementById("criterion1Section");
    const criterion2Section = document.getElementById("criterion2Section");
    const criterion3Section = document.getElementById("criterion3Section");
    const criterion4Section = document.getElementById("criterion4Section");
    const criterion5Section = document.getElementById("criterion5Section");
    const criterion6Section = document.getElementById("criterion6Section");

    fixedPartSection.style.display = "none";
    criterion1Section.style.display = "none";
    criterion2Section.style.display = "none";
    criterion3Section.style.display = "none";
    criterion4Section.style.display = "none";
    criterion5Section.style.display = "none";
    criterion6Section.style.display = "none";

    if (specialActivity === "default") {
        return;
    }

    if (specialActivity === "Special1" || specialActivity === "Special2") {
        fixedPartSection.style.display = "block";
    }

    if (specialActivity === "No") {
        criterion1Section.style.display = "block";
        criterion2Section.style.display = "block";
        criterion3Section.style.display = "block";
        criterion4Section.style.display = "block";
        criterion5Section.style.display = "block";
        criterion6Section.style.display = "block";
    } else if (specialActivity === "Special1") {
        fixedPartSection.style.display = "block";
    } else if (specialActivity === "Special2") {
        criterion6Section.style.display = "block";
    }
}

function generateCode() {
    clearResult();

    const specialActivity = document.getElementById("specialActivity").value;
    const fixedPart = document.getElementById("fixedPart").value;
    const activity = document.getElementById("activity").value;

    if (!activity) {
        alert("Please enter a description of the activity.");
        return;
    }

    let fullCode;

    if (specialActivity === "No") {
        const criterion1 = document.getElementById("criterion1").value;
        const criterion2 = document.getElementById("criterion2").value;
        const criterion3 = document.getElementById("criterion3").value;
        const criterion4 = document.getElementById("criterion4").value;
        const criterion5 = document.getElementById("criterion5").value;
        const criterion6 = document.getElementById("criterion6").value;
        fullCode = `${criterion1}.${criterion2}.${criterion3}.${criterion4}.${criterion5}.${criterion6}`;
    } else if (specialActivity === "Special1") {
        fullCode = `${fixedPart}.SpecialCode1`;
    } else if (specialActivity === "Special2") {
        const criterion6 = document.getElementById("criterion6").value;
        fullCode = `${fixedPart}.SpecialCode2.${criterion6}`;
    }

    displayGeneratedCode(fullCode, activity);
}

function displayGeneratedCode(code, activityDescription) {
    const output = `Generated Code: ${code}<br>Activity: ${activityDescription}`;
    document.getElementById("generatedCode").innerHTML = output;
}

function clearResult() {
    document.getElementById("generatedCode").innerText = "";
}
