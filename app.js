

$(() =>{

    const $socialButton = $('#Id-btn')
    const $popup = $('#social-modal')
    const $closeSBtn = $('#close-social')

    const displayModal = () =>{
        $popup.css('display', 'block')
    }
    $socialButton.on('click', displayModal)
    const reverseModal = () =>{
        $popup.css('display', 'none')
    }
    $closeSBtn.on('click', reverseModal)

    let currentImgIndex = 0
    const numOfImages = $('.my-imgs').children().length - 1

    $('#next').on('click', () => {
        $('.my-imgs').children().eq(currentImgIndex).css('display', 'none')

        if (currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }

        $('.my-imgs').children().eq(currentImgIndex).css('display', 'block')
    })


    $('#prev').on('click', () => {
        $('.my-imgs').children().eq(currentImgIndex).css('display', 'none')

        if (currentImgIndex > 0) {
            currentImgIndex--
        } else {
            currentImgIndex = numOfImages
        }

        $('.my-imgs').children().eq(currentImgIndex).css('display', 'block')   
    })

    const $dropAbt = $('#slide-about')
    const $about = $('.about-me2')


    const $dropPort = $('#slide-portfolio')
    const $port = $('.portfolio2')


    const $dropResume = $('#slide-resume')
    const $resume = $('.resume2')

    const dropDownResume = () =>{
        $resume.slideToggle(2500)
    }

    $dropResume.on('click', dropDownResume)

    const dropDownAbout = () =>{
        $about.slideToggle(2500)
    }

    $dropAbt.on('click', dropDownAbout)

    const dropDownPort = () =>{
        $port.slideToggle(2500)
    }

    $dropPort.on('click', dropDownPort)





})