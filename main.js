var name = prompt('Введіть ваше ім\'я', 'Павло Бондар');
var position = prompt('Введіть вашу посаду', 'computer engineering');
var phone = prompt('Введіть ваш телефон', '067-888-88-88');


var visitcard = '<table class="visit-card-inner">' +
    '<tr>' +
        '<td><img src="images/Знімок екрана 2026-04-23 120337.png" width="50" alt="лого"></td>' +
        '<td>' +
            '<b>' + name + '</b><br>' +
            '<i>' + position + '</i><br>' +
            '<span style="color: blue;">' + phone + '</span>' +
        '</td>' +
    '</tr>' +
'</table>';


document.write('<table>');

for (var y = 0; y < 12; y++) { // 12 рядків
    document.write('<tr>');
    for (var x = 0; x < 3; x++) { // 3 стовпці
        document.write('<td>' + visitcard + '</td>');
    }
    document.write('</tr>');
}

document.write('</table>');