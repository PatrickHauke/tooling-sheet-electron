$(document).ready(function(){
    $('.datepicker').datepicker();
});
var mainCt = 1, subCt = 1; // only because we already have one element present

$(document).ready(() => {
    
    $("#addSpindleRow").on("click", () => {
        $('#spindle_table').find('tbody:last').append('<tr class="row">')
            .find('tr:last')
            .append(`<td><input class="col s6 hook" data-index='${mainCt}' id='${mainCt}' name="spindle_seq_${mainCt}" data-index=${mainCt} id="seq" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${mainCt}' id='${mainCt}' name="spindle_tool_${mainCt}" id="tool" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${mainCt}' id='${mainCt}' name="spindle_type_${mainCt}" id="type" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${mainCt}' id='${mainCt}' name="spindle_tip_rad_${mainCt}" id="tip_rad" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${mainCt}' id='${mainCt}' name="spindle_ins_grade_${mainCt}" id="ins_grade" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${mainCt}' id='${mainCt}' name="spindle_offset_${mainCt}" id="offset" type="text"/></td>`)
            .append(`<td><input class="col s8 hook" data-index='${mainCt}' id='${mainCt}' name="spindle_op_desc_${mainCt}" id="op_desc" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${mainCt}' id='${mainCt}' name="spindle_t_desc_${mainCt}" id="t_desc" type="text"/></td>`)
            .append(`<td><a onclick='delMainRow(this)' class="deleteSpindleRow"><img class='clear-icon' src='./assets/icons/ic_clear_black_24dp_2x.png'></img></a></td>`)
        mainCt++;
    });

    $("#addSubSpindleRow").on("click", () => {
        $('#subspindle_table').find('tbody:last').append('<tr class="row">')
            .find('tr:last')
            .append(`<td><input class="col s6 hook" data-index='${subCt}' id='${subCt}' name="sub_seq_${subCt}" id="seq" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${subCt}' id='${subCt}' name="sub_tool_${subCt}" id="tool" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${subCt}' id='${subCt}' name="sub_type_${subCt}" id="type" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${subCt}' id='${subCt}' name="sub_tip_rad_${subCt}" id="tip_rad" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${subCt}' id='${subCt}' name="sub_ins_grade_${subCt}" id="ins_grade" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${subCt}' id='${subCt}' name="sub_offset_${subCt}" id="offset" type="text"/></td>`)
            .append(`<td><input class="col s8 hook" data-index='${subCt}' id='${subCt}' name="sub_op_desc_${subCt}" id="op_desc" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" data-index='${subCt}' id='${subCt}' name="sub_t_desc_${subCt}" id="t_desc" type="text"/></td>`)
            .append(`<td><a onclick='delSubRow(this)' class="deleteSpindleRow"><img class='clear-icon' src='./assets/icons/ic_clear_black_24dp_2x.png'></img></a></td>`)
        subCt++;
    });
})
function delMainRow(el) {
    var tr = $(el).closest('tr');
    tr.remove();
    mainCt--;
    return false;
}

function delSubRow(el) {
    var tr = $(el).closest('tr');
    tr.remove();
    subCt--;
    return false;
}