const buildCallObj=(id)=> {

    const needsArr = [];
    for (let i=0; i<needs.children.length; i++) {

        needsArr.push({text: needs.children[i].innerText});

    }

    console.log("in buildCallObj, currentCallID: ", id);
    let callObj = null;
    if (id) {

        callObj = {call_id: id,
            last_name: lastName.value,
            first_name: firstName.value,
            dob: dob.value,
            description: description.value,
            chief_complaint: chiefComplaint.value,
            needs: needsArr,
            pustreet: PUstreetAddress.value,
            puapt: PUaptRoom.value,
            pucity: PUcity.value,
            pustate: PUstate.value,
            puzip_code: PUzip.value,
            dostreet: DOstreetAddress.value,
            doapt: DOaptRoom.value,
            docity: DOcity.value,
            dostate: DOstate.value,
            dozip_code: DOzip.value}

    } else {

        callObj = {last_name: lastName.value,
                first_name: firstName.value,
                dob: dob.value,
                description: description.value,
                chief_complaint: chiefComplaint.value,
                needs: needsArr,
                pustreet: PUstreetAddress.value,
                puapt: PUaptRoom.value,
                pucity: PUcity.value,
                pustate: PUstate.value,
                puzip_code: PUzip.value,
                dostreet: DOstreetAddress.value,
                doapt: DOaptRoom.value,
                docity: DOcity.value,
                dostate: DOstate.value,
                dozip_code: DOzip.value}

    }

    console.log("callObj built: ", callObj)
    return callObj;

}

const removeCallObj=(idText)=> {

    let removeIndex = -1;
    for (let i=0; i<callData.length; i++) {

        if (idText === `${callData[i].last_name}, ${callData[i].first_name} DOB: ${callData[i].dob}`) {
            removeIndex = i;
        }
    }

    if (removeIndex != -1) {

        return callData.splice(removeIndex, 1)[0];

    }

}