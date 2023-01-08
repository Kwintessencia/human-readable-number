module.exports = function toReadable (number) {
    number = number.toString();
    let unit = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty', 'ninety'];
let findDozens= (number) => {
   let str= '';
   if (number.length < 2){
     str = str + unit[number];
   } else if (number.length == 2 && number[0] == 0){
      str = str + unit[number.charAt(1)];
   } else if (number.length == 2 && number[0] == 1){
      str = str + unit[number];
   } else if (number.length == 2 && number[0] == 2 && number[1] == 0){
      str = str + dozens[0];
   } else if (number.length == 2 && number[0] == 2 && number[1] > 0){
      str = str + `${dozens[0]} ${unit[number.charAt(1)]}`;
   } else if (number.length == 2 && number[0] == 3 && number[1] == 0){
      str = str + dozens[1];
   } else if (number.length == 2 && number[0] == 3 && number[1] > 0){
      str = str + `${dozens[1]} ${unit[number.charAt(1)]}`;
   } else if (number.length == 2 && number[0] == 4 && number[1] == 0){
      str = str + dozens[2];
   } else if (number.length == 2 && number[0] == 4 && number[1] > 0){
      str = str + `${dozens[2]} ${unit[number.charAt(1)]}`;
   } else if (number.length == 2 && number[0] == 5 && number[1] == 0){
      str = str + dozens[3];
   } else if (number.length == 2 && number[0] == 5 && number[1] > 0){
      str = str + `${dozens[3]} ${unit[number.charAt(1)]}`;
   } else if (number.length == 2 && number[0] == 6 && number[1] == 0){
      str = str + dozens[4];
   } else if (number.length == 2 && number[0] == 6 && number[1] > 0){
      str = str + `${dozens[4]} ${unit[number.charAt(1)]}`;
   } else if (number.length == 2 && number[0] == 7 && number[1] == 0){
      str = str + dozens[5];
   } else if (number.length == 2 && number[0] == 7 && number[1] > 0){
      str = str + `${dozens[5]} ${unit[number.charAt(1)]}`;
   } else if (number.length == 2 && number[0] == 8 && number[1] == 0){
      str = str + dozens[6];
   } else if (number.length == 2 && number[0] == 8 && number[1] > 0){
      str = str + `${dozens[6]} ${unit[number.charAt(1)]}`;
   } else if (number.length == 2 && number[0] == 9 && number[1] == 0){
      str = str + dozens[7];
   } else if (number.length == 2 && number[0] == 9 && number[1] > 0){
      str = str + `${dozens[7]} ${unit[number.charAt(1)]}`;
   } return str;
}
let findHundred = () => {
   str ='';
   if (number.length <= 2){
      str = str + findDozens(number);
   } else if (number.length == 3 && (number.slice(1) + number.slice(2)) == 0){
      str = str + `${unit[number.charAt(0)]} hundred`;
   } else if (number.length == 3) {
      str = str + `${unit[number.charAt(0)]} hundred ` + `${findDozens(number.slice(1))}`;
   } return str;
}
   return(findHundred());
  }