const needsFormSubmitEventHandler=evt=> {

    evt.preventDefault();

    const needText = need.value;
    needsListItemBuilder(needText);

    need.value = "";

}

const needsListItemClickEventHandler=evt=> {

    needs.removeChild(evt.target);

}

const submitButtonClickEventHandler=evt=> {

    if (allInputsFilledIn()) {

        if (currentCallId != -1) {

            console.log("heading into update, currentCallID: ", currentCallId);
            updateCall(buildCallObj(currentCallId));

        } else {

            postCall(buildCallObj());

        }
        
        clearInputFields();
        currentCallId = -1;

    }

}

const clearButtonClickEventHandler=evt=> {

    if (currentCallId != -1) {
        deleteCall(currentCallId);
        currentCallId = -1
    }

    clearInputFields();

}

const callListItemClickEventHandler=evt=> {

    const itemText = evt.target.innerText;

    const removedCall = removeCallObj(itemText);
    callListBuilder();
    populateInputFields(removedCall);

}

const DOMcontentLoadedEventHandler=evt=> {

    getAllCalls();

}