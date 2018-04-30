(function buildMainSpindle(){
    for(var mainCt = 1; mainCt<14; mainCt++){
    $('#spindle_table').find('tbody:last').append('<tr class="row">')
        .find('tr:last')
        .append(`<td><input class="col  hook" name="main_seq_${mainCt}" id="seq" type="text"/></td>`)
        .append(`<td><input class="col  hook" name="main_tool_${mainCt}" id="tool" type="text"/></td>`)
        .append(`<td><input class="col  hook" name="main_type_${mainCt}" id="type" type="text"/></td>`)
        .append(`<td><input class="col  hook" name="main_tip_rad_${mainCt}" id="tip_rad" type="text"/></td>`)
        .append(`<td><input class="col  hook" name="main_ins_grade_${mainCt}" id="ins_grade" type="text"/></td>`)
        .append(`<td><input class="col  hook" name="main_main_offset_${mainCt}" id="offset" type="text"/></td>`)
        .append(`<td><input class="col  hook" name="main_op_desc_${mainCt}" id="op_desc" type="text"/></td>`)
        .append(`<td><input class="col  hook" name="main_t_desc_${mainCt}" id="t_desc" type="text"/></td>`)
        // .append(`<td><a onclick='delMainRow(this)' class="deleteSpindleRow"><i class="material-icons">clear</i></a></td>`)
    }

    for(var subCt = 1; subCt<5; subCt++){
        $('#subspindle_table').find('tbody:last').append('<tr class="row">')
            .find('tr:last')
            .append(`<td><input class="col  hook" name="sub_seq_${subCt}" id="seq" type="text"/></td>`)
            .append(`<td><input class="col  hook" name="sub_tool_${subCt}" id="tool" type="text"/></td>`)
            .append(`<td><input class="col  hook" name="sub_type_${subCt}" id="type" type="text"/></td>`)
            .append(`<td><input class="col  hook" name="sub_tip_rad_${subCt}" id="tip_rad" type="text"/></td>`)
            .append(`<td><input class="col  hook" name="sub_ins_grade_${subCt}" id="ins_grade" type="text"/></td>`)
            .append(`<td><input class="col  hook" name="sub_offset_${subCt}" id="offset" type="text"/></td>`)
            .append(`<td><input class="col  hook" name="sub_op_desc_${subCt}" id="op_desc" type="text"/></td>`)
            .append(`<td><input class="col  hook" name="sub_t_desc_${subCt}" id="t_desc" type="text"/></td>`)
    }
})();


var elem = document.querySelector('.datepicker');
var options = {};
var instance = M.Datepicker.init(elem, options);
// Or with jQuery

$(document).ready(function(){
  $('.datepicker').datepicker();
});
        