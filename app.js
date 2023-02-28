

$(() => {
    const $pushAbt = $('.about')
    const $slideAbt = $('.about2')

    const $pushPort = $('.portfolio')
    const $slidePort = $('.portfolio2')

    const $pushResume = $('.resume')
    const $slideResume = $('.resume2')

    const showPort = () => {
        $slidePort.slideToggle(2500)
        $slideAbt.slideUp(2500)
        $slideResume.slideUp(2500)
    }

    $pushPort.on('click', showPort)

    const showAbt = () => {
        $slideAbt.slideToggle(2500)
        $slidePort.slideUp(2500)
        $slideResume.slideUp(2500)
    }
    $pushAbt.on('click', showAbt)

    const showResume = () =>{
        $slideResume.slideToggle(2500)
        $slideAbt.slideUp(2500)
        $slidePort.slideUp(2500)
    }

    $pushResume.on('click', showResume)

    let currentNumDiv = 0
    const numOfDivs = $('.my-projects').children().length-1

    $('#next').on('click', () => {
        $('.my-projects').children().eq(currentNumDiv).css('display', 'none')
        if(currentNumDiv < numOfDivs){
            currentNumDiv++
        }else{
            currentNumDiv = 0
        }
        $('.my-projects').children().eq(currentNumDiv).css('display', 'block')
    })

    $('#previous').on('click', () => {
        $('.my-projects').children().eq(currentNumDiv).css('display', 'none')
        if(currentNumDiv > 0){
            currentNumDiv--
        }else{
            currentNumDiv = numOfDivs
        }
        $('.my-projects').children().eq(currentNumDiv).css('display', 'block')
    })



})