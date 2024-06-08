let bomb = []
let jikkou = false
let jikkoutyuu = false
let jikkoumati = []
let firstmasu = []
let firstclick = true
let bombkazu = 0
let flagkazu = 10
let openkazu = 0
let jikkoumasu
let jikkoux
let jikkouy
let xkari
let ykari
let masukari
let masukari1
let masukari2
let masukari3
let masukari4
let masukari6
let masukari7
let masukari8
let masukari9

$('#new').click(function(){
    $('.masu').removeClass('open flag bomb a b c d e f g h')
    $('.masu').text('')
    $('#newbutton').css('display','none')
    $('#flagbutton').css('display','block')
    $('#flagbutton').prop('checked',false)
    $('#clear').css('display','none')
    $('#gameover').css('display','none')
    bomb = []
    jikkou = true
    firstclick = true
    flagkazu = 10
    openkazu = 0
    $('#flagkazu').text(flagkazu)
})

$('.masu').click(function(){
    if(jikkou  && !jikkoutyuu){
        jikkoutyuu = true
        jikkoumasu = $(this).prop('id')

        if($('#' + jikkoumasu).hasClass('flag')){
            $('#'+jikkoumasu).removeClass('flag')
            $('#'+jikkoumasu).html('')
            flagkazu ++
        }else if($('#flag').prop('checked') && !$('#'+jikkoumasu).hasClass('open')){
            if(flagkazu > 0){
                $('#'+jikkoumasu).addClass('flag')
                $('#'+jikkoumasu).html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 100" style="height: 24px;"><path d="M 7 100 L 0 100 L 0 0 L 82 33 L 7 66 Z" fill="#FFFFFF"/></svg>')
            flagkazu --
            }
        }else{
            jikkoumati.push(jikkoumasu)
            while (jikkoumati.length > 0){
                bombkazu = 0
                masukari1 = ''
                masukari2 = ''
                masukari3 = ''
                masukari4 = ''
                masukari6 = ''
                masukari7 = ''
                masukari8 = ''
                masukari9 = ''

                if (jikkoumati[0].slice(1,2) === '-') {
                    jikkoux = parseInt(jikkoumati[0].slice(0,1))
                    jikkouy = parseInt(jikkoumati[0].slice(2))
                } else {
                    jikkoux = parseInt(jikkoumati[0].slice(0,2))
                    jikkouy = parseInt(jikkoumati[0].slice(3))
                }

                if (jikkoux !== 1) {
                    xkari = jikkoux - 1
                    masukari2 = xkari + '-' + jikkouy
                    if (jikkouy !== 1) {
                        ykari = jikkouy - 1
                        masukari1 = xkari + '-' + ykari
                    }
                    if (jikkouy !== 10) {
                        ykari = jikkouy + 1
                        masukari3 = xkari + '-' + ykari
                    }
                }
                if (jikkouy !== 1) {
                    ykari = jikkouy - 1
                    masukari4 = jikkoux + '-' + ykari
                }
                if (jikkouy !== 10) {
                    ykari = jikkouy + 1
                    masukari6 = jikkoux + '-' + ykari
                }
                if (jikkoux !== 10) {
                    xkari = jikkoux + 1
                    masukari8 = xkari + '-' + jikkouy
                    if (jikkouy !== 1) {
                        ykari = jikkouy - 1
                        masukari7 = xkari + '-' + ykari
                    }
                    if (jikkouy !== 10) {
                        ykari = jikkouy + 1
                        masukari9 = xkari + '-' + ykari
                    }
                }

                if (firstclick) {
                    firstmasu.push(masukari1,masukari2,masukari3,masukari4,jikkoumati[0],masukari6,masukari7,masukari8,masukari9)
                    while (bomb.length < 10) {
                        xkari = Math.floor(Math.random()*10) + 1
                        ykari = Math.floor(Math.random()*10) + 1
                        masukari = xkari + '-' + ykari
                        if (!firstmasu.includes(masukari) && !bomb.includes(masukari)) {
                            bomb.push(masukari)
                        }
                    }
                    firstclick = false
                }

                if (bomb.includes(jikkoumati[0])) {
                    jikkou = false
                    jikkoumati = []
                    bomb.forEach(function(masukari){
                        if (!$('#'+masukari).hasClass('flag')) {
                            $('#'+masukari).addClass('bomb')
                            $('#'+masukari).text('●')
                        }
                    })
                    $('#newbutton').css('display','block')
                    $('#flagbutton').css('display','none')
                    $('#gameover').css('display','block')
                } else {
                    if (bomb.includes(masukari1)) {
                        bombkazu ++
                    }
                    if (bomb.includes(masukari2)) {
                        bombkazu ++
                    }
                    if (bomb.includes(masukari3)) {
                        bombkazu ++
                    }
                    if (bomb.includes(masukari4)) {
                        bombkazu ++
                    }
                    if (bomb.includes(masukari6)) {
                        bombkazu ++
                    }
                    if (bomb.includes(masukari7)) {
                        bombkazu ++
                    }
                    if (bomb.includes(masukari8)) {
                        bombkazu ++
                    }
                    if (bomb.includes(masukari9)) {
                        bombkazu ++
                    }

                    if (!bombkazu == 0) {
                        $('#'+jikkoumati[0]).text(bombkazu)
                    }

                    $('#'+jikkoumati[0]).addClass('open')
                    openkazu ++
                    switch (bombkazu) {
                        case 0:
                            if (masukari1 !== '') {
                               if (!$('#'+masukari1).hasClass('flag') && !$('#'+masukari1).hasClass('open') && !jikkoumati.includes(masukari1)) {
                                    jikkoumati.push(masukari1)
                                }
                            }
                            if (masukari2 !== '') {
                               if (!$('#'+masukari2).hasClass('flag') && !$('#'+masukari2).hasClass('open') && !jikkoumati.includes(masukari2)) {
                                    jikkoumati.push(masukari2)
                                }
                            }
                            if (masukari3 !== '') {
                               if (!$('#'+masukari3).hasClass('flag') && !$('#'+masukari3).hasClass('open') && !jikkoumati.includes(masukari3)) {
                                    jikkoumati.push(masukari3)
                                }
                            }
                            if (masukari4 !== '') {
                               if (!$('#'+masukari4).hasClass('flag') && !$('#'+masukari4).hasClass('open') && !jikkoumati.includes(masukari4)) {
                                    jikkoumati.push(masukari4)
                                }
                            }
                            if (masukari6 !== '') {
                               if (!$('#'+masukari6).hasClass('flag') && !$('#'+masukari6).hasClass('open') && !jikkoumati.includes(masukari6)) {
                                    jikkoumati.push(masukari6)
                                }
                            }
                            if (masukari7 !== '') {
                               if (!$('#'+masukari7).hasClass('flag') && !$('#'+masukari7).hasClass('open') && !jikkoumati.includes(masukari7)) {
                                    jikkoumati.push(masukari7)
                                }
                            }
                            if (masukari8 !== '') {
                               if (!$('#'+masukari8).hasClass('flag') && !$('#'+masukari8).hasClass('open') && !jikkoumati.includes(masukari8)) {
                                    jikkoumati.push(masukari8)
                                }
                            }
                            if (masukari9 !== '') {
                               if (!$('#'+masukari9).hasClass('flag') && !$('#'+masukari9).hasClass('open') && !jikkoumati.includes(masukari9)) {
                                    jikkoumati.push(masukari9)
                                }
                            }
                            break;
                        
                        case 1:
                            $('#'+jikkoumati[0]).addClass('a')
                            break;
                        
                        case 2:
                            $('#'+jikkoumati[0]).addClass('b')
                            break;
                        
                        case 3:
                            $('#'+jikkoumati[0]).addClass('c')
                            break;
                        
                        case 4:
                            $('#'+jikkoumati[0]).addClass('d')
                            break;
                        
                        case 5:
                            $('#'+jikkoumati[0]).addClass('e')
                            break;
                        
                        case 6:
                            $('#'+jikkoumati[0]).addClass('f')
                            break;
                        
                        case 7:
                            $('#'+jikkoumati[0]).addClass('g')
                            break;
                        
                        case 8:
                            $('#'+jikkoumati[0]).addClass('h')
                            break;
                    }
                }
                jikkoumati.splice(0,1)
            }
        }
        $('#flagkazu').text(flagkazu)
        if (openkazu == 90) {
            jikkou = false
            $('#clear').css('display','block')
            $('#newbutton').css('display','block')
            $('#flagbutton').css('display','none')
        }
        jikkoutyuu = false
    }
})
