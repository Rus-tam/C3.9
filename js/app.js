var clear = document.getElementById("clear")
var safeRadio = document.getElementById("safeRadio")
var resetSetting = document.getElementById("resetSetting")
var reloadPage = document.getElementById("reloadPage")

cityName.value = localStorage.getItem('cityName')
cityName.oninput = () => {
    localStorage.setItem('cityName', cityName.value)
}

clear.onclick = () => {
    localStorage.removeItem('cityName', cityName.value)
    cityName.value = ""
}

safeRadio.onclick = () => {
    radioValue = []
    var radio = document.getElementsByClassName('rad')
    var value = localStorage.getItem('rad')
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            radioValue.push(radio[i].value)
        }
    }
    localStorage.setItem("rad", JSON.stringify(radioValue))
}

checkedRadio = () => {
    var radio = document.getElementsByClassName('rad')
    var cc = localStorage.getItem('rad')
    var ss = JSON.parse(cc)
    try {
        if (ss.length != 0) {
            for (var i = 0; i < ss.length; i++) {
                for (var y = 0; y < radio.length; y++) {
                    if (ss[i] == radio[y].value) {
                        radio[y].checked = true
                    }
                }
            }
        }
    } catch (error) {
    }       
    } 

resetSetting.onclick = () => {
    localStorage.clear()
    location.reload()
}

reloadPage.onclick = () => {
    location.reload()
}

checkedRadio()

