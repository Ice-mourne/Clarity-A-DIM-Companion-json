repeat ()
let i = 0
function repeat () {
    setTimeout(() => {
        document.getElementById('aim').style.cssText = `width:${250 - i / 2}px; left:${125 + i / 4}px;`
        document.getElementById('accuracy').style.cssText = `width:${150 + i}px; left:${225 - i / 2}px;`
        if (i > 250) {i = 0}
        i += 0.3
        let aim_top = document.getElementById('aim').getBoundingClientRect().top
        let aim_bottom = document.getElementById('aim').getBoundingClientRect().bottom
        let aim_right = document.getElementById('aim').getBoundingClientRect().right
        let aim_length = document.getElementById('aim').offsetHeight

        let acc_top = document.getElementById('accuracy').getBoundingClientRect().top
        let acc_bottom = document.getElementById('accuracy').getBoundingClientRect().bottom
        let acc_right = document.getElementById('accuracy').getBoundingClientRect().right
        let acc_length = document.getElementById('accuracy').offsetHeight

        let player_left = document.getElementById('accuracy').getBoundingClientRect().left
        let player_top = document.getElementById('aim').offsetTop + document.getElementById('aim').offsetHeight / 2;

        let dot_1_t = document.getElementById('t1').offsetTop + 5
        let dot_1_r = document.getElementById('t1').offsetLeft + 5

        let dot_2_t = document.getElementById('t2').offsetTop + 5
        let dot_2_r = document.getElementById('t2').offsetLeft + 5

        let dot_3_t = document.getElementById('t3').offsetTop + 5
        let dot_3_r = document.getElementById('t3').offsetLeft + 5

        let dot_4_t = document.getElementById('t4').offsetTop + 5
        let dot_4_r = document.getElementById('t4').offsetLeft + 5

        let dot_5_t = document.getElementById('t5').offsetTop + 5
        let dot_5_r = document.getElementById('t5').offsetLeft + 5

        let dot_6_t = document.getElementById('t6').offsetTop + 5
        let dot_6_r = document.getElementById('t6').offsetLeft + 5

        let dot_7_t = document.getElementById('t7').offsetTop + 5
        let dot_7_r = document.getElementById('t7').offsetLeft + 5

        function name(id) {
            let dot_t = document.getElementById(id).offsetTop + 5
            let dot_r = document.getElementById(id).offsetLeft + 5 - player_left

            let aim_dot = aim_length / 100 * (aim_length - dot_t)
            ((aim_bottom - aim_top) / 2) / 100 * aim_dot
        }






        if (i > 40 && i < 160) {document.getElementById('t1').style.cssText = `background-color: red;`}
        if (i > 160) {document.getElementById('t1').style.cssText = `background-color: yellow;`}
        if (i < 40) {document.getElementById('t1').style.cssText = `background-color: red;`}
        //if (i > 100) {document.getElementById('t1').style.cssText = `background-color: red;`}

        repeat()
    },1)
}

