//js中級テスト

function changeLang(){

    
        let selectedLaguage = document.getElementById('selectedLanguage').value;
        console.log(selectedLaguage);

        if(selectedLaguage == 'all'){
            document.getElementById('japanese').style.display ="block";
            document.getElementById('english').style.display ="block";

        }else if(selectedLaguage =='jpn'){
            document.getElementById('japanese').style.display ="block";
            document.getElementById('english').style.display ="none";

        }else if(selectedLaguage =='en'){
            document.getElementById('english').style.display ="block";
            document.getElementById('japanese').style.display ="none";
        }
}
