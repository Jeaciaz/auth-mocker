export const getFormElementValue = (el) => {
    switch (el.type) {
        case 'checkbox':
        case 'radio':
            return el.checked;
        case 'file':
            return el.files;
        default:
            return el.value;
    }
}

export const getFormData = (submitEvent, elements) => Object.keys(submitEvent.target.elements)
    .filter((key) => elements.includes(key))
    .map((key) => ({ key, value: getFormElementValue(submitEvent.target.elements[key]) }))
    .reduce((acc, { key, value}) => ({...acc, [key]: value}), {})

// Remove nullish properties from object
export const clarifyObject = (obj) => Object.fromEntries(
    Object.entries(obj).filter(([, val]) => val != null)
);
