// You can reference the input variables using input.NAME
exports.step = function(input) {
    
    var priority;
    if (input.foo.custom_fields[0].enum_value !== null){
        priority = input.foo.custom_fields[0].enum_value.name;
    }else priority = null;
  
    var status;
    if (input.foo.custom_fields[1].enum_value !== null){
        status = input.foo.custom_fields[1].enum_value.name;
    }else status = null;
  
    var type;
    if (input.foo.custom_fields[2].enum_value !== null){
        type = input.foo.custom_fields[2].enum_value.name;
    }else type = null;
  
    var strategic_alignment;
    if (input.foo.custom_fields[3].enum_value !== null){
        strategic_alignment = input.foo.custom_fields[3].enum_value.name;
    }else strategic_alignment = null;
  
    var ebitda_dollars;
    if (input.foo.custom_fields[4].text_value !== null){
        ebitda_dollars = input.foo.custom_fields[4].text_value;
    }else ebitda_dollars = null;
  
    var ebitda_impact_date;
    if (input.foo.custom_fields[5].enum_value !== null){
        ebitda_impact_date = input.foo.custom_fields[5].enum_value.name;
    }else ebitda_impact_date = null;
  
    var ebitda_attainment;
    if (input.foo.custom_fields[6].enum_value !== null){
        ebitda_attainment = input.foo.custom_fields[6].enum_value.name;
    }else ebitda_attainment = null;
  
    var required_capital;
    if (input.foo.custom_fields[7].text_value !== null){
        required_capital = input.foo.custom_fields[7].text_value;
    }else required_capital = null;
  
    var required_man_hours;
    if (input.foo.custom_fields[8].text_value !== null){
        required_man_hours = input.foo.custom_fields[8].text_value;
    }else required_man_hours = null;
  
    var progress_percent;
    if (input.foo.custom_fields[9].enum_value !== null){
        progress_percent = input.foo.custom_fields[9].enum_value.name;
    }else progress_percent = null;

    
    return {
        "priority": priority,
        "status": status,
        "type": type,
        "strategic_alignment": strategic_alignment,
        "ebitda_dollars": ebitda_dollars,
        "ebitda_impact_date": ebitda_impact_date,
        "ebitda_attainment": ebitda_attainment,
        "required_capital": required_capital,
        "required_man_hours": required_man_hours,
        "progress_percent": progress_percent
    };
};