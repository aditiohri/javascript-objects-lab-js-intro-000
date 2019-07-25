var recipes = {
oats: '1 cup',
raspberries: '1 cup',
flaxseeds: '1 cup',
almondmilk: '1 cup',
}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, obj, {[key]:value});
}
