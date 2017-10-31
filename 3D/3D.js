// MOTION BLOCKS
let NEW_BLOCK_STRING_rotate = '<block type="motion_rotate" id="motion_rotate">'
+'<value name="DEGREESX"> <shadow type="math_number"><field name="NUM">0</field>'
+'</shadow></value><value name="DEGREESY"><shadow type="math_number">'
+'<field name="NUM">0</field></shadow></value><value name="DEGREESZ">'
+'<shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'

let NEW_BLOCK_STRING_setrotation = '<block type="motion_setrotation" id="motion_setrotation">'
+'<value name="DEGREESX"><shadow type="math_number"><field name="NUM">0</field>'
+'</shadow></value><value name="DEGREESY"><shadow type="math_number"><field name="NUM">0</field>'
+'</shadow></value><value name="DEGREESZ"><shadow type="math_number"><field name="NUM">0</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_gotoxyz = '<block type="motion_gotoxyz" id="motion_gotoxyz">'
+'<value name="X"><shadow id="movex" type="math_number"><field name="NUM">0</field>'
+'</shadow></value><value name="Y"><shadow id="movey" type="math_number">'
+'<field name="NUM">0</field></shadow></value><value name="Z">'
+'<shadow id="movez" type="math_number"><field name="NUM">0</field></shadow></value></block>'

let NEW_BLOCK_STRING_changexby = '<block type="motion_changexby" id="motion_changexby">'
+'<value name="DX"><shadow type="math_number"><field name="NUM">10</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_setx = '<block type="motion_setx" id="motion_setx">'
+'<value name="X"><shadow id="setx" type="math_number"><field name="NUM">0</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_changeyby = '<block type="motion_changeyby" id="motion_changeyby">'
+'<value name="DY"><shadow type="math_number"><field name="NUM">10</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_sety = '<block type="motion_sety" id="motion_sety">'
+'<value name="Y"><shadow id="sety" type="math_number"><field name="NUM">0</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_changezby = '<block type="motion_changezby" id="motion_changezby">'
+'<value name="DZ"><shadow type="math_number"><field name="NUM">10</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_setz = '<block type="motion_setz" id="motion_setz">'
+'<value name="Z"><shadow id="setz" type="math_number"><field name="NUM">0</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_xposition = '<block type="motion_xposition" id="motion_xposition"></block>'

let NEW_BLOCK_STRING_yposition = '<block type="motion_yposition" id="motion_yposition"></block>'

let NEW_BLOCK_STRING_zposition = '<block type="motion_zposition" id="motion_zposition"></block>'

// LOOKS BLOCKS
let NEW_BLOCK_STRING_show = '<block type="looks_show" id="looks_show"></block>'

let NEW_BLOCK_STRING_hide = '<block type="looks_hide" id="looks_hide"></block>'

let NEW_BLOCK_STRING_switchcostumeto = '<block type="looks_switchcostumeto" id="looks_switchcostumeto">'
+'<value name="COSTUME"><shadow type="looks_costume"></shadow></value></block>'

let NEW_BLOCK_STRING_nextcostume = '<block type="looks_nextcostume" id="looks_nextcostume"></block>'

let NEW_BLOCK_STRING_nextbackdrop = '<block type="looks_nextbackdrop" id="looks_nextbackdrop"></block>'

let NEW_BLOCK_STRING_switchbackdropto = '<block type="looks_switchbackdropto" id="looks_switchbackdropto">'
+'<value name="BACKDROP"><shadow type="looks_backdrops"></shadow></value></block>'

let NEW_BLOCK_STRING_switchbackdroptoandwait = '<block type="looks_switchbackdroptoandwait"id="looks_switchbackdroptoandwait">'
+'<value name="BACKDROP"><shadow type="looks_backdrops"></shadow></value></block>'

let NEW_BLOCK_STRING_setscaleto = '<block type="looks_setscaleto" id="looks_setscaleto"><value name="SCALEX">'
+'<shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="SCALEY">'
+'<shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="SCALEZ">'
+'<shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'

let NEW_BLOCK_STRING_costumeorder = '<block type="looks_costumeorder" id="looks_costumeorder"></block>'

let NEW_BLOCK_STRING_backdroporder = '<block type="looks_backdroporder" id="looks_backdroporder"></block>'

let NEW_BLOCK_STRING_backdropname = '<block type="looks_backdropname" id="looks_backdropname"></block>'

let NEW_BLOCK_STRING_setcamerato = '<block type="looks_setcamerato" id="looks_setcamerato"><value name="X">'
+'<shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number">'
+'<field name="NUM">50</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">500</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_changecameraxby = '<block type="looks_changecameraxby" id="looks_changecameraxby">'
+'<value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_changecamerayby = '<block type="looks_changecamerayby" id="looks_changecameraxby">'
+'<value name="DY"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_changecamerazby = '<block type="looks_changecamerazby" id="looks_changecameraxby">'
+'<value name="DZ"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_turncameraaroundx = '<block type="looks_turncameraaroundx" id="looks_changecameraxby">'
+'<value name="DEGREES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_turncameraaroundy = '<block type="looks_turncameraaroundy" id="looks_changecameraxby">'
+'<value name="DEGREES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_turncameraaroundz = '<block type="looks_turncameraaroundz" id="looks_changecameraxby">'
+'<value name="DEGREES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

// SOUND BLOCKS
let NEW_BLOCK_STRING_play = '<block type="sound_play" id="sound_play"><value name="SOUND_MENU">'
+'<shadow type="sound_sounds_menu"></shadow> </value></block>'

let NEW_BLOCK_STRING_playuntildone = '<block type="sound_playuntildone" id="sound_playuntildone">'
+'<value name="SOUND_MENU"><shadow type="sound_sounds_menu"></shadow></value></block>'

let NEW_BLOCK_STRING_stopallsounds = '<block type="sound_stopallsounds" id="sound_stopallsounds"></block>'

let NEW_BLOCK_STRING_playdrumforbeats = '<block type="sound_playdrumforbeats" id="sound_playdrumforbeats">'
+'<value name="DRUM"> +<shadow type="sound_drums_menu"></shadow> +</value> +<value name="BEATS">'
+'<shadow type="math_number"><field name="NUM">0.25</field></shadow></value></block>'

let NEW_BLOCK_STRING_restforbeats = '<block type="sound_restforbeats" id="sound_restforbeats">'
+'<value name="BEATS"><shadow type="math_number"><field name="NUM">0.25</field></shadow></value></block>'

let NEW_BLOCK_STRING_playnoteforbeats = '<block type="sound_playnoteforbeats" id="sound_playnoteforbeats">'
+'<value name="NOTE"><shadow type="math_number"><field name="NUM">60</field></shadow></value>'
+'<value name="BEATS"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>'

let NEW_BLOCK_STRING_setinstrumentto = '<block type="sound_setinstrumentto" id="sound_setinstrumentto">'
+'<value name="INSTRUMENT"> +<shadow type="sound_instruments_menu"></shadow> +</value> +</block>'

let NEW_BLOCK_STRING_changeeffectby = '<block type="sound_changeeffectby" id="sound_changeeffectby"> +'
+'<value name="VALUE"> +<shadow type="math_number"><field name="NUM">10</field></shadow></value> +</block> +'

let NEW_BLOCK_STRING_seteffectto = '<block type="sound_seteffectto" id="sound_seteffectto"> +'
+'<value name="VALUE"> +<shadow type="math_number"><field name="NUM">100</field></shadow></value> +</block> +'

let NEW_BLOCK_STRING_cleareffects = '<block type="sound_cleareffects" id="sound_cleareffects"></block> +'

let NEW_BLOCK_STRING_changevolumeby = '<block type="sound_changevolumeby" id="sound_changevolumeby">'
+'<value name="VOLUME"><shadow type="math_number"><field name="NUM">-10</field></shadow></value></block>'

let NEW_BLOCK_STRING_setvolumeto = '<block type="sound_setvolumeto" id="sound_setvolumeto"><value name="VOLUME">'
+'<shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'

let NEW_BLOCK_STRING_volume = '<block type="sound_volume" id="sound_volume"></block>'

let NEW_BLOCK_STRING_changetempoby = '<block type="sound_changetempoby" id="sound_changetempoby">'
+'<value name="TEMPO"><shadow type="math_number"><field name="NUM">20</field></shadow></value></block>'

let NEW_BLOCK_STRING_settempotobpm = '<block type="sound_settempotobpm" id="sound_settempotobpm">'
+'<value name="TEMPO"><shadow type="math_number"><field name="NUM">60</field></shadow></value></block>'

let NEW_BLOCK_STRING_tempo = '<block type="sound_tempo" id="sound_tempo"></block>'

// PEN BLOCKS
let NEW_BLOCK_STRING_clear = '<block type="pen_clear" id="pen_clear"></block>'

let NEW_BLOCK_STRING_stamp = '<block type="pen_stamp" id="pen_stamp"></block>'

let NEW_BLOCK_STRING_pendown = '<block type="pen_pendown" id="pen_pendown"></block>'

let NEW_BLOCK_STRING_penup = '<block type="pen_penup" id="pen_penup"></block>'

let NEW_BLOCK_STRING_setpencolortocolor = '<block type="pen_setpencolortocolor" id="pen_setpencolortocolor">'
+'<value name="COLOR"><shadow type="colour_picker"></shadow></value></block>'

let NEW_BLOCK_STRING_changepencolorby = '<block type="pen_changepencolorby" id="pen_changepencolorby">'
+'<value name="COLOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_setpencolortonum = '<block type="pen_setpencolortonum" id="pen_setpencolortonum">'
+'<value name="COLOR"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'

let NEW_BLOCK_STRING_changepenshadeby = '<block type="pen_changepenshadeby" id="pen_changepenshadeby">'
+'<value name="SHADE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_setpenshadeto = '<block type="pen_setpenshadeto" id="pen_setpenshadeto">'
+'<value name="SHADE"><shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'

let NEW_BLOCK_STRING_changepensizeby = '<block type="pen_changepensizeby" id="pen_changepensizeby">'
+'<value name="SIZE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'

let NEW_BLOCK_STRING_setpensizeto = '<block type="pen_setpensizeto" id="pen_setpensizeto">'
+'<value name="SIZE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'

let NEW_BLOCK_STRING_sphere = '<block type="pen_sphere" id="pen_sphere"><value name="RADIUS">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'

let NEW_BLOCK_STRING_box = '<block type="pen_box" id="pen_box"><value name="WIDTH">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="HEIGHT">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="DEPTH">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'

let NEW_BLOCK_STRING_arc = '<block type="pen_arc" id="pen_box"><value name="WIDTH">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value>'
+'<value name="HEIGHT"><shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'

let NEW_BLOCK_STRING_cylinder = '<block type="pen_cylinder" id="pen_box"><value name="TOP">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BOTTOM">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="HEIGHT">'
+'<shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'

// CONTROL BLOCKS
let NEW_BLOCK_STRING_wait = '<block type="control_wait" id="control_wait"><value name="DURATION">'
+'<shadow type="math_positive_number"><field name="NUM">1</field></shadow></value></block>'

let NEW_BLOCK_STRING_repeat = '<block type="control_repeat" id="control_repeat"><value name="TIMES">'
+'<shadow type="math_whole_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_forever = '<block type="control_forever" id="control_forever"></block>'

let NEW_BLOCK_STRING_if = '<block type="control_if" id="control_if"></block>'

let NEW_BLOCK_STRING_if_else = '<block type="control_if_else" id="control_if_else"></block>'

let NEW_BLOCK_STRING_wait_until = '<block type="control_wait_until" id="control_wait_until"></block>'

let NEW_BLOCK_STRING_repeat_until = '<block type="control_repeat_until" id="control_repeat_until"></block>'

let NEW_BLOCK_STRING_stop = '<block type="control_stop" id="control_stop"></block>'

let NEW_BLOCK_STRING_start_as_clone = '<block type="control_start_as_clone" id="control_start_as_clone"></block>'

let NEW_BLOCK_STRING_create_clone_of = '<block type="control_create_clone_of" id="control_create_clone_of">'
+'<value name="CLONE_OPTION"><shadow type="control_create_clone_of_menu"></shadow></value></block>'

let NEW_BLOCK_STRING_delete_this_clone = '<block type="control_delete_this_clone" id="control_delete_this_clone"></block>'

// MOTION VM FUNCTIONS
vm.runtime._primitives.motion_rotate = function (args, util) {
    let x = Number(args.NUM_X);
    let y = Number(args.NUM_Y);
    let z = Number(args.NUM_Z);
}

vm.runtime._primitives.motion_setrotation = function (args, util) {

}

vm.runtime._primitives.motion_gotoxyz = function (args, util) {

}

vm.runtime._primitives.motion_changexby = function (args, util) {

}

vm.runtime._primitives.motion_setx = function (args, util) {

}

vm.runtime._primitives.motion_changeyby = function (args, util) {

}

vm.runtime._primitives.motion_sety = function (args, util) {

}

vm.runtime._primitives.motion_changezby = function (args, util) {

}

vm.runtime._primitives.motion_setz = function (args, util) {

}

vm.runtime._primitives.motion_xposition = function (args, util) {
    return Number(args.NUM_X);
}

vm.runtime._primitives.motion_yposition = function (args, util) {
    return Number(args.NUM_Y);
}

vm.runtime._primitives.motion_zposition = function (args, util) {
    return Number(args.NUM_Z);
}

// LOOKS VM FUNCTIONS
vm.runtime._primitives.looks_show = function (args, util) {

}

vm.runtime._primitives.looks_hide = function (args, util) {

}

vm.runtime._primitives.looks_switchcostumeto = function (args, util) {

}

vm.runtime._primitives.looks_nextcostume = function (args, util) {

}

vm.runtime._primitives.looks_nextbackdrop = function (args, util) {

}

vm.runtime._primitives.looks_switchbackdropto = function (args, util) {

}

vm.runtime._primitives.looks_switchbackdroptoandwait = function (args, util) {

}

vm.runtime._primitives.looks_setscaleto = function (args, util) {

}

vm.runtime._primitives.looks_costumeorder = function (args, util) {

}

vm.runtime._primitives.looks_backdroporder = function (args, util) {

}

vm.runtime._primitives.looks_backdropname = function (args, util) {

}

vm.runtime._primitives.looks_setcamerato = function (args, util) {

}

vm.runtime._primitives.looks_changecameraxby = function (args, util) {

}

vm.runtime._primitives.looks_changecamerayby = function (args, util) {

}

vm.runtime._primitives.looks_changecamerazby = function (args, util) {

}

vm.runtime._primitives.looks_turncameraaroundx = function (args, util) {

}

vm.runtime._primitives.looks_turncameraaroundy = function (args, util) {

}

vm.runtime._primitives.looks_turncameraaroundz = function (args, util) {

}

// SOUND VM FUNCTIONS
vm.runtime._primitives.sound_play = function (args, util) {

}

vm.runtime._primitives.sound_playuntildone = function (args, util) {

}

vm.runtime._primitives.sound_stopallsounds = function (args, util) {

}

vm.runtime._primitives.sound_playdrumforbeats = function (args, util) {

}

vm.runtime._primitives.sound_restforbeats = function (args, util) {

}

vm.runtime._primitives.sound_playnoteforbeats = function (args, util) {

}

vm.runtime._primitives.sound_setinstrumentto = function (args, util) {

}

vm.runtime._primitives.sound_changeeffectby = function (args, util) {

}

vm.runtime._primitives.sound_seteffectto = function (args, util) {

}

vm.runtime._primitives.sound_cleareffects = function (args, util) {

}

vm.runtime._primitives.sound_changevolumeby = function (args, util) {

}

vm.runtime._primitives.sound_setvolumeto = function (args, util) {

}

vm.runtime._primitives.sound_volume = function (args, util) {

}

vm.runtime._primitives.sound_changetempoby = function (args, util) {

}

vm.runtime._primitives.sound_settempotobpm = function (args, util) {

}

vm.runtime._primitives.sound_tempo = function (args, util) {

}

// PEN VM FUNCTIONS
vm.runtime._primitives.pen_clear = function (args, util) {

}

vm.runtime._primitives.pen_stamp = function (args, util) {

}

vm.runtime._primitives.pen_pendown = function (args, util) {

}

vm.runtime._primitives.pen_penup = function (args, util) {

}

vm.runtime._primitives.pen_setpencolortocolor = function (args, util) {

}

vm.runtime._primitives.pen_changepencolorby = function (args, util) {

}

vm.runtime._primitives.pen_setpencolortonum = function (args, util) {

}

vm.runtime._primitives.pen_changepenshadeby = function (args, util) {

}

vm.runtime._primitives.pen_setpenshadeto = function (args, util) {

}

vm.runtime._primitives.pen_changepensizeby = function (args, util) {

}

vm.runtime._primitives.pen_setpensizeto = function (args, util) {

}

vm.runtime._primitives.pen_sphere = function (args, util) {

}

vm.runtime._primitives.pen_box = function (args, util) {

}

vm.runtime._primitives.pen_arc = function (args, util) {

}

vm.runtime._primitives.pen_cylinder = function (args, util) {

}

// CONTROL VM FUNCTIONS
vm.runtime._primitives.control_wait = function (args, util) {

}

vm.runtime._primitives.control_repeat = function (args, util) {

}

vm.runtime._primitives.control_forever = function (args, util) {

}

vm.runtime._primitives.control_if = function (args, util) {

}

vm.runtime._primitives.control_if_else = function (args, util) {

}

vm.runtime._primitives.control_wait_until = function (args, util) {

}

vm.runtime._primitives.control_repeat_until = function (args, util) {

}

vm.runtime._primitives.control_stop = function (args, util) {

}

vm.runtime._primitives.control_start_as_clone = function (args, util) {

}

vm.runtime._primitives.control_create_clone_of = function (args, util) {

}

vm.runtime._primitives.control_delete_this_clone = function (args, util) {

}


let toolboxDOM = (new DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml')
let newBlockDOM_rotate = (new DOMParser).parseFromString(NEW_BLOCK_STRING_rotate, 'text/xml')
let newBlockDOM_setrotation = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setrotation, 'text/xml')
let newBlockDOM_gotoxyz = (new DOMParser).parseFromString(NEW_BLOCK_STRING_gotoxyz, 'text/xml')
let newBlockDOM_changexby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changexby, 'text/xml')
let newBlockDOM_setx = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setx, 'text/xml')
let newBlockDOM_changeyby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changeyby, 'text/xml')
let newBlockDOM_sety = (new DOMParser).parseFromString(NEW_BLOCK_STRING_sety, 'text/xml')
let newBlockDOM_changezby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changezby, 'text/xml')
let newBlockDOM_setz = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setz, 'text/xml')
let newBlockDOM_xposition = (new DOMParser).parseFromString(NEW_BLOCK_STRING_xposition, 'text/xml')
let newBlockDOM_yposition = (new DOMParser).parseFromString(NEW_BLOCK_STRING_yposition, 'text/xml')
let newBlockDOM_zposition = (new DOMParser).parseFromString(NEW_BLOCK_STRING_zposition, 'text/xml')
let newBlockDOM_show = (new DOMParser).parseFromString(NEW_BLOCK_STRING_show, 'text/xml')
let newBlockDOM_hide = (new DOMParser).parseFromString(NEW_BLOCK_STRING_hide, 'text/xml')
let newBlockDOM_switchcostumeto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_switchcostumeto, 'text/xml')
let newBlockDOM_nextcostume = (new DOMParser).parseFromString(NEW_BLOCK_STRING_nextcostume, 'text/xml')
let newBlockDOM_nextbackdrop = (new DOMParser).parseFromString(NEW_BLOCK_STRING_nextbackdrop, 'text/xml')
let newBlockDOM_switchbackdropto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_switchbackdropto, 'text/xml')
let newBlockDOM_switchbackdroptoandwait = (new DOMParser).parseFromString(NEW_BLOCK_STRING_switchbackdroptoandwait, 'text/xml')
let newBlockDOM_setscaleto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setscaleto, 'text/xml')
let newBlockDOM_costumeorder = (new DOMParser).parseFromString(NEW_BLOCK_STRING_costumeorder, 'text/xml')
let newBlockDOM_backdroporder = (new DOMParser).parseFromString(NEW_BLOCK_STRING_backdroporder, 'text/xml')
let newBlockDOM_backdropname = (new DOMParser).parseFromString(NEW_BLOCK_STRING_backdropname, 'text/xml')
let newBlockDOM_setcamerato = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setcamerato, 'text/xml')
let newBlockDOM_changecameraxby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changecameraxby, 'text/xml')
let newBlockDOM_changecamerayby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changecamerayby, 'text/xml')
let newBlockDOM_changecamerazby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changecamerazby, 'text/xml')
let newBlockDOM_turncameraaroundx = (new DOMParser).parseFromString(NEW_BLOCK_STRING_turncameraaroundx, 'text/xml')
let newBlockDOM_turncameraaroundy = (new DOMParser).parseFromString(NEW_BLOCK_STRING_turncameraaroundy, 'text/xml')
let newBlockDOM_turncameraaroundz = (new DOMParser).parseFromString(NEW_BLOCK_STRING_turncameraaroundz, 'text/xml')
let newBlockDOM_play = (new DOMParser).parseFromString(NEW_BLOCK_STRING_play, 'text/xml')
let newBlockDOM_playuntildone = (new DOMParser).parseFromString(NEW_BLOCK_STRING_playuntildone, 'text/xml')
let newBlockDOM_stopallsounds = (new DOMParser).parseFromString(NEW_BLOCK_STRING_stopallsounds, 'text/xml')
let newBlockDOM_playdrumforbeats = (new DOMParser).parseFromString(NEW_BLOCK_STRING_playdrumforbeats, 'text/xml')
let newBlockDOM_restforbeats = (new DOMParser).parseFromString(NEW_BLOCK_STRING_restforbeats, 'text/xml')
let newBlockDOM_playnoteforbeats = (new DOMParser).parseFromString(NEW_BLOCK_STRING_playnoteforbeats, 'text/xml')
let newBlockDOM_setinstrumentto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setinstrumentto, 'text/xml')
let newBlockDOM_changeeffectby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changeeffectby, 'text/xml')
let newBlockDOM_seteffectto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_seteffectto, 'text/xml')
let newBlockDOM_cleareffects = (new DOMParser).parseFromString(NEW_BLOCK_STRING_cleareffects, 'text/xml')
let newBlockDOM_changevolumeby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changevolumeby, 'text/xml')
let newBlockDOM_setvolumeto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setvolumeto, 'text/xml')
let newBlockDOM_volume = (new DOMParser).parseFromString(NEW_BLOCK_STRING_volume, 'text/xml')
let newBlockDOM_changetempoby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changetempoby, 'text/xml')
let newBlockDOM_settempotobpm = (new DOMParser).parseFromString(NEW_BLOCK_STRING_settempotobpm, 'text/xml')
let newBlockDOM_tempo = (new DOMParser).parseFromString(NEW_BLOCK_STRING_tempo, 'text/xml')
let newBlockDOM_clear = (new DOMParser).parseFromString(NEW_BLOCK_STRING_clear, 'text/xml')
let newBlockDOM_stamp = (new DOMParser).parseFromString(NEW_BLOCK_STRING_stamp, 'text/xml')
let newBlockDOM_pendown = (new DOMParser).parseFromString(NEW_BLOCK_STRING_pendown, 'text/xml')
let newBlockDOM_penup = (new DOMParser).parseFromString(NEW_BLOCK_STRING_penup, 'text/xml')
let newBlockDOM_setpencolortocolor = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setpencolortocolor, 'text/xml')
let newBlockDOM_changepencolorby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changepencolorby, 'text/xml')
let newBlockDOM_setpencolortonum = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setpencolortonum, 'text/xml')
let newBlockDOM_changepenshadeby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changepenshadeby, 'text/xml')
let newBlockDOM_setpenshadeto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setpenshadeto, 'text/xml')
let newBlockDOM_changepensizeby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changepensizeby, 'text/xml')
let newBlockDOM_setpensizeto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setpensizeto, 'text/xml')
let newBlockDOM_sphere = (new DOMParser).parseFromString(NEW_BLOCK_STRING_sphere, 'text/xml')
let newBlockDOM_box = (new DOMParser).parseFromString(NEW_BLOCK_STRING_box, 'text/xml')
let newBlockDOM_arc = (new DOMParser).parseFromString(NEW_BLOCK_STRING_arc, 'text/xml')
let newBlockDOM_cylinder = (new DOMParser).parseFromString(NEW_BLOCK_STRING_cylinder, 'text/xml')
let newBlockDOM_wait = (new DOMParser).parseFromString(NEW_BLOCK_STRING_wait, 'text/xml')
let newBlockDOM_repeat = (new DOMParser).parseFromString(NEW_BLOCK_STRING_repeat, 'text/xml')
let newBlockDOM_forever = (new DOMParser).parseFromString(NEW_BLOCK_STRING_forever, 'text/xml')
let newBlockDOM_if = (new DOMParser).parseFromString(NEW_BLOCK_STRING_if, 'text/xml')
let newBlockDOM_if_else = (new DOMParser).parseFromString(NEW_BLOCK_STRING_if_else, 'text/xml')
let newBlockDOM_wait_until = (new DOMParser).parseFromString(NEW_BLOCK_STRING_wait_until, 'text/xml')
let newBlockDOM_repeat_until = (new DOMParser).parseFromString(NEW_BLOCK_STRING_repeat_until, 'text/xml')
let newBlockDOM_stop = (new DOMParser).parseFromString(NEW_BLOCK_STRING_stop, 'text/xml')
let newBlockDOM_start_as_clone = (new DOMParser).parseFromString(NEW_BLOCK_STRING_start_as_clone, 'text/xml')
let newBlockDOM_create_clone_of = (new DOMParser).parseFromString(NEW_BLOCK_STRING_create_clone_of, 'text/xml')
let newBlockDOM_delete_this_clone = (new DOMParser).parseFromString(NEW_BLOCK_STRING_delete_this_clone, 'text/xml')

toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_rotate.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_setrotation.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_gotoxyz.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_changexby.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_setx.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_changeyby.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_sety.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_changezby.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_setz.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_xposition.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_yposition.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_zposition.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_show.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_hide.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_switchcostumeto.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_nextcostume.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_nextbackdrop.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_switchbackdropto.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_switchbackdroptoandwait.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_setscaleto.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_costumeorder.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_backdroporder.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_setcamerato.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_changecameraxby.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_changecamerayby.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_changecamerazby.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_turncameraaroundx.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_turncameraaroundy.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_turncameraaroundz.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_play.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_playuntildone.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_stopallsounds.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_playdrumforbeats.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_restforbeats.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_playnoteforbeats.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_setinstrumentto.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_changeeffectby.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_seteffectto.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_cleareffects.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_changevolumeby.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_setvolumeto.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_volume.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_changetempoby.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_settempotobpm.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_tempo.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_clear.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_stamp.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_pendown.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_penup.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_setpencolortocolor.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_changepencolorby.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_setpencolortonum.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_changepenshadeby.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_setpenshadeto.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_changepensizeby.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_setpensizeto.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_sphere.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_box.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_arc.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_cylinder.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_wait.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_repeat.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_forever.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_if.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_if_else.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_wait_until.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_repeat_until.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_stop.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_start_as_clone.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_create_clone_of.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_delete_this_clone.children[0])

let toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM)
Blockly.getMainWorkspace().updateToolbox(toolboxXML)