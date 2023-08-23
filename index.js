const employee = {
    name: "John",
    streetAddress: "123 Main",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey() {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name
    return employee
}
