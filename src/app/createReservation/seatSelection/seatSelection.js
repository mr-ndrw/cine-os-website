/**
 * Created by andrew on 18/05/15.
 */


angular.module('cineos')
.controller('SeatSelectionController', function($scope, $http){
        $scope.reservedButton = null;

        /*var apiCall = '/api/projection/' + $scope.reservationModel.projection.Id + '/seats';

        $http.get($scope.apiaddress + apiCall)
            .success(function(data){
                $scope.seats = data;
                console.log(data);
            });*/

        $scope.seats = seats;

        $scope.seatButtonOnClick = function($event, seat){
            if($scope.reservedButton != null) {
                removeClass("btn--green", $scope.reservedButton);
                addClass("btn--blue", $scope.reservedButton);

                var i = $($scope.reservedButton).children("i");

                $(i).addClass('mdi-plus');
                $(i).removeClass('mdi-check');
            }

            $scope.reservedButton = $event.currentTarget;

            removeClass("btn--blue", $scope.reservedButton);
            addClass("btn--green", $scope.reservedButton);

            var i = $($scope.reservedButton).children("i");

            $(i).removeClass('mdi-plus');
            $(i).addClass('mdi-check');

            $scope.reservationModel.seat = seat;
    };

});




function createTable(seatMatrix) {
    //  Create A table
    var table = document.createElement('table');
    table.className = 'table';  //  Add bootstrap class to table

    var thead = document.createElement('thead');
    table.appendChild(thead);

    var headerRow = document.createElement('tr');
    thead.appendChild(headerRow);

    headerRow.appendChild(document.createElement('td'));
    //  Above adds an empty cell where column number and row number listings intersect.

    //  Count how many columns there are in the seatMatrix and then insert the first row containing column numbers
    var colCount = seatMatrix[0].length;
    for(var i = 1; i <= colCount; i++)
    {
        var headerColumnNumberCell = document.createElement('td');
        headerColumnNumberCell.innerHTML = i;
        headerColumnNumberCell.className = 'text-center';
        headerRow.appendChild(headerColumnNumberCell);
    }

    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    var rowCount = seatMatrix.length;
    for(var rowNumber = 1; rowNumber <= rowCount; rowNumber++)
    {
        var row = createRow(seatMatrix[rowNumber-1], rowNumber);
        tbody.appendChild(row);
    }


    return table;
}

function createRow(seatRowArray, rowNumber) {
    var tr = document.createElement('tr');

    var seatRowArrayLength = seatRowArray.length;

    var rowNumberCell = document.createElement('td');
    rowNumberCell.innerHTML = rowNumber;
    tr.appendChild(rowNumberCell);
    for(var columnNumber = 1; columnNumber <= seatRowArrayLength; columnNumber ++)
    {
        var td = document.createElement('td');
        var seatButton = createSeatButton(
            {
                row: rowNumber, col: columnNumber
            },
            seatRowArray[columnNumber-1],
            'seat-btn btn btn-default btn-block');
        td.appendChild(seatButton);
        tr.appendChild(td);
    }

    return tr;
}

function createSeatButton(position, isBooked, cssClasses) {
    var button = document.createElement('button');
    button.className = cssClasses;
    button.dataset.position = position.row + '_' + position.col;
    button.dataset.isbooked = isBooked;
    if(isBooked)
    {
        button.setAttribute('disabled', 'disabled');
        button.className += " glyphicon glyphicon-remove";
    }
    else
    {
        button.className += " glyphicon glyphicon-asterisk";
        button.dataset.selected = false;
    }

    button.onclick = function(event){seatButtonOnClick(event)};

    return button;
}

function seatButtonOnClick (event){
    console.log("Hello")
    /*var target = event.target;
    var isSelected = target.dataset.selected;

    if(isSelected === "false")
    {
        addClass(pressedClassName, target);
        removeClass(defaultClassName, target);
        addClass(selectedClassName, target);
        removeClass(availableGIClassName, target);
        addClass(selectedGIClassName, target);
        target.dataset.selected = "true";
    }
    else
    {
        removeClass(pressedClassName, target);
        removeClass(selectedClassName, target);
        addClass(defaultClassName, target);
        addClass(availableGIClassName, target);
        removeClass(selectedGIClassName, target);
        target.dataset.selected = "false"
    }*/
}
/*  Helper definitions  */
var pressedClassName = 'active';
var selectedClassName = 'btn-success';
var defaultClassName = 'btn-default';
var availableGIClassName = 'glyphicon-asterisk';
var selectedGIClassName = 'glyphicon-ok';

/*  End of helper definitions   */

$(document).ready(function(){
    var table = createTable(seats);
    $('#seat-map').append(table);
});