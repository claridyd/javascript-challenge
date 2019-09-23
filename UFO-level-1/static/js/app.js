// Assign the data from data.js to a variable
var ufo_data = data;

// YOUR CODE HERE!
//Reference for table body
var tbody = d3.select('tbody');

//Append on table row 'tr' for each item in array
ufo_data.forEach((addData) => {
    var row = tbody.append('tr');
    //append cell to the row for each value
    Object.entries(addData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
});

//select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = ufo_data.filter(ufo_data => ufo_data.datetime === inputValue);
    console.log(filteredData);
    tbody.html("");
    filteredData.forEach((data) => {
        
        var row = tbody.append('tr');
        Object.entries(data).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        })
    });
    
  
    
});



