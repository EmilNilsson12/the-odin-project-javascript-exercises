export const ftoc = function(far) {
  const cel = ((far - 32) * 5 / 9);
  console.log("cel:", cel);
  return Math.round(cel*10)/10
}

export const ctof = function(cel) {
  const far = (cel * 9 / 5 + 32);
  console.log("far:", far);
  return Math.round(far*10)/10
}
/* 
module.exports = {
  ftoc,
  ctof
} */
