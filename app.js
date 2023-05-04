$(()=>{
    const $navMenu = $('.nav-menu')
    const $toggleIcon = $('.nav-icon')
    const $closeIcon = $('.close-icon')


    $toggleIcon.on('click', ()=>{
        $navMenu.addClass('show')
    })

    $closeIcon.on('click', ()=>{
        $navMenu.removeClass('show')
    })

    $('.nav-item').on('click', ()=>{
        $navMenu.removeClass('show')
    })

    const $skillsFrontHeader = $('.front')
    const $skillsBackHeader = $('.back')
    const $skillsBack = $('#skills-back')
    const $skillsFront = $('#skills-front')
    $skillsFrontHeader.on('click', ()=>{
        $skillsFront.slideToggle(1000)
    })
    $skillsBackHeader.on('click', ()=>{
        $skillsBack.slideToggle(1000)
    })
    
})