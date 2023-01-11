const testObject = {
  "background-color": "red",
  color: "black",
};

const objectToStyle = (styleObject) => {
  let styleString = "";
  Object.keys(styleObject).forEach((key) => {
    styleString += key + ": " + styleObject[key] + "; ";
  });
  return styleString;
};
