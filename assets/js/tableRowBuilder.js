$(document).ready(function(){
    $('.datepicker').datepicker();
});
var mainCt = 1, subCt = 1; // only because we already have one element present

$(document).ready(() => {
    
    $("#addSpindleRow").on("click", () => {
        $('#spindle_table').find('tbody:last').append('<tr class="row">')
            .find('tr:last')
            .append(`<td><input class="col s6 hook" name="seq_${mainCt}" id="seq" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="tool_${mainCt}" id="tool" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="type_${mainCt}" id="type" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="tip_rad_${mainCt}" id="tip_rad" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="ins_grade_${mainCt}" id="ins_grade" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="offset_${mainCt}" id="offset" type="text"/></td>`)
            .append(`<td><input class="col s8 hook" name="op_desc_${mainCt}" id="op_desc" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="t_desc_${mainCt}" id="t_desc" type="text"/></td>`)
            .append(`<td><a onclick='delMainRow(this)' class="deleteSpindleRow"><i class="material-icons">clear</i></a></td>`)
        mainCt++;
    });

    $("#addSubSpindleRow").on("click", () => {
        $('#subspindle_table').find('tbody:last').append('<tr class="row">')
            .find('tr:last')
            .append(`<td><input class="col s6 hook" name="sub_seq_${mainCt}" id="seq" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="sub_tool_${mainCt}" id="tool" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="sub_type_${mainCt}" id="type" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="sub_tip_rad_${mainCt}" id="tip_rad" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="sub_ins_grade_${mainCt}" id="ins_grade" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="sub_offset_${mainCt}" id="offset" type="text"/></td>`)
            .append(`<td><input class="col s8 hook" name="sub_op_desc_${mainCt}" id="op_desc" type="text"/></td>`)
            .append(`<td><input class="col s6 hook" name="sub_t_desc_${mainCt}" id="t_desc" type="text"/></td>`)
            .append(`<td><a onclick='delSubRow(this)' class="deleteSpindleRow"><i class="material-icons">clear</i></a></td>`)
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