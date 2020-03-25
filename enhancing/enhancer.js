module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (isNumber(item.enhancement)) {
   if (item.enhancement < 20) {
    item.enhancement += 1;
    return { ...item };
  } else {
    throw new Error("You cannot gain enhancement level if you are enhancement level 20")
  }
  } else {
    throw new Error("Incorrect enhancement value");
  }
  
  
}

function fail(item) {
  if (isNumber(item.enhancement) && isNumber(item.durability)) {
    if (item.enhancement < 15) {
     item.durability -= 5;
     return { ...item };
     
   } else if (item.enhancement >= 15) {
     item.durability -= 10;
     if (item.enhancement > 16) {
       item.enhancement -= 1;
       return { ...item };
     } else {
       return { ...item };
     }}
     
   } else {
     throw new Error("Incorrect enhancement value");
   }
   
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}


function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}