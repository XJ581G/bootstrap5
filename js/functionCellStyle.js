function cellStyle(value, row, index, field) {
  if (field == 'text2') {
    return {classes: 'warning'};
  }
  else {
    return {};
  }
}


var data = [{"text1": "text1", "text2": "text2"}];

$(function () {
  $('#table').bootstrapTable({
    columns: [
      {
        field: 'text1',
        title: 'TEXT 1',
      },
      {
        field: 'text2',
        title: 'TEXT 2',
        cellStyle: cellStyle,
      }
    ],
    data: data
  });
});

var $table = $('#table'),
    $button = $('#button');
$(function () {
  $button.click(function () {
    $table.bootstrapTable('insertRow', {
      index: 0,
      row: {
        text2: 'new text'
      }
    });
  });
});