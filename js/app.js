date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
// Add year month and day to all the elements with the class "date"
document.querySelectorAll('.current_date').forEach(function(element) {
    element.innerHTML ="Ùltima modificaciòn: " + day + "/" + month + "/" + year;
}
);