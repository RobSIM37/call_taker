const allInputsFilledIn=()=> {

    const inputs = document.querySelectorAll("input");

    let errorString = ""

    for (let i=0; i<inputs.length; i++) {

        if (inputs[i].value === "" && inputs[i].id != "need" && inputs[i].id != "PUaptRoom" && inputs[i].id != "DOaptRoom") {

            if (errorString != "") {
                errorString += ", ";
            }

            errorString += inputs[i].id;

        }
    }

    if (errorString != "") {

        errorString = "The following text fields are required: " + errorString;
        alert(errorString);

    }

    return errorString === "";

}

const needsListItemBuilder=(text)=> {

    const needsListItem = document.createElement("li");
    needsListItem.innerText = text;
    needsListItem.addEventListener("click", needsListItemClickEventHandler);

    needs.appendChild(needsListItem);

}

const callListBuilder=()=> {

    callList.innerHTML = "";

    for (let i=0; i<callData.length; i++) {

        const callInfoText = `${callData[i].last_name}, ${callData[i].first_name} DOB: ${callData[i].dob}`
        callDisplayItemBuilder(callInfoText);

    }
}

const callDisplayItemBuilder=callInfo=> {

    const listItem = document.createElement("li");
    listItem.innerText = callInfo;
    listItem.addEventListener("click", callListItemClickEventHandler);

    callList.appendChild(listItem);

}

const clearInputFields=()=> {

    const inputs = document.querySelectorAll("input");
    for (let i=0; i<inputs.length; i++) {
        inputs[i].value = "";
    }

    needs.innerHTML = "";

}

const populateInputFields=callObj=> {

    clearInputFields();

    currentCallId = callObj.call_id;

    lastName.value = callObj.last_name;
    firstName.value = callObj.first_name;
    dob.value = callObj.dob;
    description.value = callObj.description;
    chiefComplaint.value = callObj.chief_complaint;
    const needsArr = callObj.needs;

    PUstreetAddress.value = callObj.pustreet;
    if (callObj.puapt) {
        PUaptRoom.value = callObj.puapt;
    } else {
        PUaptRoom.value = "";
    }
    PUcity.value = callObj.pucity;
    PUstate.value = callObj.pustate;
    PUzip.value = callObj.puzip_code;

    DOstreetAddress.value = callObj.dostreet;
    if (callObj.doapt) {
        DOaptRoom.value = callObj.doapt;
    } else {
        DOaptRoom.value = "";
    }
    DOcity.value = callObj.docity;
    DOstate.value = callObj.dostate;
    DOzip.value = callObj.dozip_code;

    for (let i=0; i<needsArr.length; i++) {

        needsListItemBuilder(needsArr[i].text);

    }

}

needForm.addEventListener("submit", needsFormSubmitEventHandler);
submit.addEventListener("click", submitButtonClickEventHandler);
clear.addEventListener("click", clearButtonClickEventHandler);
window.addEventListener("DOMContentLoaded", DOMcontentLoadedEventHandler);