/**
 * Created by sunqiang on 2017/5/27.
 */
function formatData(e, type) {
    var timerule = {
    //     y: {
    //         at: null,
    //         l: 0
    //     },
    //     M: {
    //         at: null,
    //         l: 0
    //     },
    //     d: {
    //         at: null,
    //         l: 0
    //     }
    }
    //
    // for (var i = 0; i < type.length; i++) {
    //     if ('yMdhms'.indexOf(type[i])>=0) {
    //         timerule[type[i]].at = (timerule[type[i]].at == null ? i : timerule[type[i]].at)
    //         timerule[type[i]].l += 1
    //     }else {
    //         timerule[type[i]] = {at:i}
    //     }
    // }
    //
    // return timerule;
    timerule['y'] = type.split('y').length-1
    timerule['M'] = type.split('M').length-1
    timerule['d'] = type.split('d').length-1
    console.log(timerule)
    return reverse(new Date(),timerule,type)
}

function getRepeatInString(e,reg) {
    return e.split(reg).length
}

function reverse(date, timerule,type) {
    if(timerule['y']&&(timerule['y']==2||timerule['y']==4)){
        console.log('has y: '+timerule['y'])
        type = timerule['y'] == 4?type.replace('yyyy',date.getFullYear()):type.replace('yyyy',date.getYear())
    }

    if(timerule['M']&&(timerule['M']==2||timerule['M']==4)){
        console.log('has M: '+timerule['M'])
        type = timerule['M'] == 2?type.replace('yyyy',date.getFullYear()):type.replace('yyyy',date.getYear())
    }

    return type
}

function test(e) {
    if(e&&(e==2||e==4)){
        return 'true'
    }
}