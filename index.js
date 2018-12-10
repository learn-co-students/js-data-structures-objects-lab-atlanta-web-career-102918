// Write your solution in this file!
const driver = {'limo' : 'garry'}

function updateDriverWithKeyAndValue(driver, key, value){
  newDriver = Object.assign({}, driver, {[key]: value})
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  newDriver = Object.assign(driver, {[key]: value})
  return newDriver
}

function deleteFromDriverByKey(driver, key,){
  newDriver = Object.assign({}, driver)
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key,){
  delete driver[key]
  return driver
}
