const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('contact');

const data = [

    {

        "contact name": "nameCtt",
        "contact email": "emailCtt",
        "contact msg": "msgCtt"
        
    }

];

const headingColumnNames = [    

    "nome",
    "email",
    "msg"    

];

let headingColumnIndex = 1;
headingColumnNames.forEach(heading => {
    ws.cell(1, headingColumnIndex++).string(heading);
});

let rowIndex = 2;
data.forEach(record => {
    let columnIndex = 1;
    Object.keys(record).forEach(columnName => {
        ws.cell(rowIndex, columnIndex++).string(record[columnName])
    });
    rowIndex++;
});

wb.write('contact.xlsx')
wb.
