const updateTable = (table) => {
    if ($.fn.DataTable.isDataTable(table)) {
        table.DataTable().destroy();
    }
    table.jstable({ buttons: false, searching: true, ordering: false, lengthChange: false });
}