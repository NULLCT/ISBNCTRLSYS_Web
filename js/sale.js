//isbnを格納
var isbn_list = [];

function addISBN() {
  var input_isbn = document.getElementById("input_isbn").value;

  $(".list-add").append("<a href=\"#\" class=\"list-group-item list-group-item-action\">" + input_isbn + "</a>");

  isbn_list.push(input_isbn);
}

function rmAllISBN() {
  $(".list-add").remove();
  isbn_list.splice(9);
}

function sale() {
  var input_coupon = document.getElementById("input_coupon").value;
  
  var time = new Date();
  console.log(
    time.getMonth() + "/" +
    time.getDate() + "_" +
    time.getHours() + ":" +
    time.getMinutes() + ":" +
    time.getSeconds()
  );
  console.log(isbn_list);
  console.log(input_coupon);
}

function saveFile() {
  var resurt = isbn_list.join();
  console.log(resurt);
  let blob = new Blob(resurt,{type:"text/plan"});
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  var time = new Date();
  link.download = "ISBNCTRLSYS_" + time.getMonth() + "/" + time.getDate() + "_" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ".txt";
  link.click();

}