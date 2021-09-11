$(function (e) {
    // close modal on click dimLayer
    $(document).on("click", "#dimLayer", function (e) {
        closeModal();
    });

    // 모달 닫기(공통)
    $(".close_modal").on("click", function () {
        closeModal();
    });

    // 반응형 이미지맵
    $('img[usemap]').rwdImageMaps();

    newVideoPos();
    $(window).resize(function () {
        newVideoPos();
    }).resize();

    setTimeout(function(){
        document.body.scrollTop = document.body.scrollHeight;
    }, 1000);

    // 영상팝업 클릭 이벤트(PC)
    $("#video_area, .academy_video").on("click", function () {
        $(".video_modal").addClass("active");
        addnDimLayer();
    });

    // 영상팝업 클릭 이벤트(Mobile)
    $("#video_area_m, .academy_video_m").on("click", function () {
        $(".video_modal").addClass("active");
        addnDimLayer();
    });

    // 영상팝업 날짜 받아오기(서버시간 X)
    var nowDate = new Date();
    var Year = nowDate.getFullYear();
    var Month = nowDate.getMonth() + 1;
    var Day = nowDate.getDate();
    var Today = Year + "-" + Month + "-" + Day;

    // PC 학회 영상
    var videoMain = {
        "2021-4-21" : "https://www.youtube.com/embed/tCyUB9poFso?autoplay=1&mute=1&controls=0&playlist=tCyUB9poFso&loop=1",
        "2021-4-22" : "https://www.youtube.com/embed/t17chd2SgcQ?autoplay=1&mute=1&controls=0&playlist=t17chd2SgcQ&loop=1",
        "2021-4-23" : "https://www.youtube.com/embed/hgfTzUxsGOU?autoplay=1&mute=1&controls=0&playlist=hgfTzUxsGOU&loop=1",
        "2021-4-24" : "https://www.youtube.com/embed/Fi4cy8XmVeo?autoplay=1&mute=1&controls=0&playlist=Fi4cy8XmVeo&loop=1",
    }

    if(videoMain[Today]) {
        if(document.getElementById("videoMain") != null) {
            document.getElementById("videoMain").src = videoMain[Today];
        }
    }

    // PC, Mobile 영상 팝업
    var videoPop = {
        "2021-4-21" : "https://www.youtube.com/embed/tCyUB9poFso?autoplay=1&mute=1&playlist=tCyUB9poFso&loop=1",
        "2021-4-22" : "https://www.youtube.com/embed/t17chd2SgcQ?autoplay=1&mute=1&playlist=t17chd2SgcQ&loop=1",
        "2021-4-23" : "https://www.youtube.com/embed/hgfTzUxsGOU?autoplay=1&mute=1&playlist=hgfTzUxsGOU&loop=1",
        "2021-4-24" : "https://www.youtube.com/embed/Fi4cy8XmVeo?autoplay=1&mute=1&playlist=Fi4cy8XmVeo&loop=1",
    }

    if(videoPop[Today]) {
        if(document.getElementById("videoPop") != null) {
            document.getElementById("videoPop").src = videoPop[Today];
        }
    }
});

// addnDimLayer
function addnDimLayer() {
    var createDiv = "<div id='dimLayer'></div>";
    $("body").append(createDiv).addClass("fixed");
}

// closeModal
function closeModal() {
    $(".modal_wrap").removeClass("active");
    $("#dimLayer").remove();
    $("body").removeClass("fixed");
}

// PC 학회 영상 위치 계산
function newVideoPos() {
    if($("#video_area").length > 0){
        setTimeout(() => {
            var newPos = $("#video_area").attr("coords")
            var newPosArr = newPos.split(",");
            var newWidth = Math.abs(newPosArr[2] - newPosArr[0]);
            var newHeight = Math.abs(newPosArr[3] - newPosArr[1]);
            $("#log").text(newPos);
            $(".academy_video").css({
                width: newWidth + "px",
                height: newHeight + "px",
                left: newPosArr[0] + "px",
                top: newPosArr[1] + "px",
            });
        }, 10);
    }
}