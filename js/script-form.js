function showInput() {
            var reasonForMsg = document.getElementById("reasonForMsg");
            
            var opts = reasonForMsg.options;
            var si = reasonForMsg.selectedIndex;
            var sel = opts[si];
            
            hidePID();
            
            if (sel.index == 0) {
                // No option selected
                reasonForMsg.style.borderColor = "red";
                
            } else if (sel.index == 3) {
                //Product Info
                showPID();
                reasonForMsg.style.borderColor = "green";
            } else {
                reasonForMsg.style.borderColor = "green";
            }
        }
        
        function hidePID() {
            var pID = document.getElementById("pID");
            var pLabel = document.getElementById("pLabel");
            
            pLabel.style.display = "none";
            pID.style.display = "none";
        }
        function showPID() {
            var pID = document.getElementById("pID");
            var pLabel = document.getElementById("pLabel");
            
            pLabel.style.display = "block";
            pID.style.display = "block";
        }
        
        function checkName() {
            var namebox = document.getElementById("namebox");
            var name = namebox.value;
            
            var success = true;
            
            for (var i = 0; i < name.length; i++) {
                var ascii = name.charCodeAt(i);
                if (isNumber(ascii)) {
                    success = false;
                } else {
                    sucess = true;
                }
            }
            
            if (name.length >= 4 && success == true) {
                //Valid.
                namebox.style.borderColor = "green";
            } else {
                //Invalid.
                namebox.style.borderColor = "red";
            }
        }
        function checkEmail() {
            var emailbox = document.getElementById("emailbox");
            var email = emailbox.value;
            
            var pattern = /^.+[\@].+[\.].+$/;
            
            if (pattern.test(email)) {
                //Valid.
                emailbox.style.borderColor = "green";
            } else {
                //Invalid.
                emailbox.style.borderColor = "red";
            }
        }
        function checkPID() {
            var pIDbox = document.getElementById("pID");
            var pID = pIDbox.value;
            
            var pattern = /^([A-Za-z]\d)([e]\d)[s](\d{2})$/;
            
            if (pID.length == 7) {
                if (pattern.test(pID)) {
                    //Valid.
                    pIDbox.style.borderColor = "green";
                } else {
                    //Invalid.
                    pIDbox.style.borderColor = "red";
                }
            } else {
                pIDbox.style.borderColor = "red";
            }
        }
        function checkMsg() {
            var msgbox = document.getElementById("messagebox");
            var msg = msgbox.value;
            
            if (msg.length < 30) {
                if (msg.length > 10) {
                    msgbox.style.borderColor = "green";
                } else {
                    msgbox.style.borderColor = "red";
                }
            } else {
                msgbox.style.borderCOlor = "red";
            }
        }
        
        function isLetter(ch) {
            //true if letter
            if (ch >= 65 && ch <= 90) {
                return true;
            } else if (ch >= 97 && ch <= 122) {
                return true;
            } else {
                return false;
            }
        }
        function isNumber(ch) {
            //true if number
            if (ch >= 48 && ch <= 57) {
                return true;
            } else {
                return false;
            }
        }