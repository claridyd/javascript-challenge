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

