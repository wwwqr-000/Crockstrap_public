if (document.body.querySelector("crockstrap")) {
    document.body.querySelector("crockstrap").hidden = true;
    if (document.body.querySelector("crockstrap").querySelector("credits")) {
        if (document.body.querySelector("crockstrap").querySelector("credits").innerText == "by wwwqr") {
            CrocksTrap = () => {
                let x = window.innerWidth;
                let m1 = 320;
                let m2 = 375;
                let m3 = 425;
                let t = 768;
                let l1 = 1024;
                let l2 = 1440;
                let hd4k = 2560;
                let BodyElemCount = document.body.children.length;
                if (document.body.querySelector("crockstrap") && document.body.querySelector("crockstrap").querySelector("stylevalue")) {
                    if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m1")) {
                        if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m1").getAttribute("val") && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m1").getAttribute("val") != null && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m1").getAttribute("val") != "") {
                            m1 = parseFloat(document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m1").getAttribute("val"));
                        }
                    }
                    if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2")) {
                        if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2").getAttribute("val") && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2").getAttribute("val") != null && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2").getAttribute("val") != "") {
                            m2 = parseFloat(document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2").getAttribute("val"));
                        }
                    }
                    if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2")) {
                        if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2").getAttribute("val") && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2").getAttribute("val") != null && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2").getAttribute("val") != "") {
                            m2 = parseFloat(document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m2").getAttribute("val"));
                        }
                    }
                    if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m3")) {
                        if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m3").getAttribute("val") && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m3").getAttribute("val") != null && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m3").getAttribute("val") != "") {
                            m3 = parseFloat(document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("m3").getAttribute("val"));
                        }
                    }
                    if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("t")) {
                        if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("t").getAttribute("val") && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("t").getAttribute("val") != null && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("t").getAttribute("val") != "") {
                            t = parseFloat(document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("t").getAttribute("val"));
                        }
                    }
                    if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l1")) {
                        if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l1").getAttribute("val") && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l1").getAttribute("val") != null && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l1").getAttribute("val") != "") {
                            l1 = parseFloat(document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l1").getAttribute("val"));
                        }
                    }
                    if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l2")) {
                        if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l2").getAttribute("val") && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l2").getAttribute("val") != null && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l2").getAttribute("val") != "") {
                            l1 = parseFloat(document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("l2").getAttribute("val"));
                        }
                    }
                    if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("hd4k")) {
                        if (document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("hd4k").getAttribute("val") && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("hd4k").getAttribute("val") != null && document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("hd4k").getAttribute("val") != "") {
                            hd4k = parseFloat(document.body.querySelector("crockstrap").querySelector("stylevalue").querySelector("hd4k").getAttribute("val"));
                        }
                    }
                }
            
            
                let MSArrElem = [];
                let MSArrClass = [];
                let MSOriginClass = [];
                
                let MMArrElem = [];
                let MMArrClass = [];
                let MMOriginClass = [];
                
                let MLArrElem = [];
                let MLArrClass = [];
                let MLOriginClass = [];
                
                let TArrElem = [];
                let TArrClass = [];
                let TOriginClass = [];
            
                let L1ArrElem = [];
                let L1ArrClass = [];
                let L1OriginClass = [];
        
                let L2ArrElem = [];
                let L2ArrClass = [];
                let L2OriginClass = [];
        
                let hd4kArrElem = [];
                let hd4kArrClass = [];
                let hd4kOriginClass = [];
            
            
                for (let i = 0; i < BodyElemCount; i++) {
                    let tmpElem = document.body.children[i];
            
                    let tmpMS = tmpElem.getAttribute("m1");
                    let tmpMM = tmpElem.getAttribute("m2");
                    let tmpML = tmpElem.getAttribute("m3");
                    let tmpT = tmpElem.getAttribute("t");
                    let tmpL1 = tmpElem.getAttribute("l1");
                    let tmpL2 = tmpElem.getAttribute("l2");
                    let tmphd4k = tmpElem.getAttribute("4k");
            
                    if (tmpMS != null) {
                        MSArrElem.push(tmpElem);
                        MSArrClass.push(tmpMS);
            
                        MSOriginClass.forEach((c) => {
                            if (c != tmpElem.classList.value) {
                                MSOriginClass.push(tmpElem.classList.value);
                            }
                        });
                    }
                    if (tmpMM != null) {
                        MMArrElem.push(tmpElem);
                        MMArrClass.push(tmpMM);
            
                        MMOriginClass.forEach((c) => {
                            if (c != tmpElem.classList.value) {
                                MMOriginClass.push(tmpElem.classList.value);
                            }
                        });
                    }
                    if (tmpML != null) {
                        MLArrElem.push(tmpElem);
                        MLArrClass.push(tmpML);
                        
                        MLOriginClass.forEach((c) => {
                            if (c != tmpElem.classList.value) {
                                MLOriginClass.push(tmpElem.classList.value);
                            }
                        });
                    }
                    if (tmpT != null) {
                        TArrElem.push(tmpElem);
                        TArrClass.push(tmpT);
                        
                        TOriginClass.forEach((c) => {
                            if (c != tmpElem.classList.value) {
                                TOriginClass.push(tmpElem.classList.value);
                            }
                        });
                    }
                    if (tmpL1 != null) {
                        L1ArrElem.push(tmpElem);
                        L1ArrClass.push(tmpL1);
                        
                        L1OriginClass.forEach((c) => {
                            if (c != tmpElem.classList.value) {
                                L1OriginClass.push(tmpElem.classList.value);
                            }
                        });
                    }
                    if (tmpL2 != null) {
                        L2ArrElem.push(tmpElem);
                        L2ArrClass.push(tmpL2);
                        
                        L2OriginClass.forEach((c) => {
                            if (c != tmpElem.classList.value) {
                                L2OriginClass.push(tmpElem.classList.value);
                            }
                        });
                    }
                    if (tmphd4k != null) {
                        hd4kArrElem.push(tmpElem);
                        hd4kArrClass.push(tmphd4k);
                        
                        hd4kOriginClass.forEach((c) => {
                            if (c != tmpElem.classList.value) {
                                hd4kOriginClass.push(tmpElem.classList.value);
                            }
                        });
                    }
                }
        
                if (x <= m1) {
                    for (let i = 0; i < MSArrElem.length; i++) {
                        MSArrElem[i].classList = "";
                        MSArrElem[i].classList.add(MSArrClass[i]);
                    }
                }
                if (x >= m2) {
                    for (let i = 0; i < MMArrElem.length; i++) {
                        MMArrElem[i].classList = "";
                        MMArrElem[i].classList.add(MMArrClass[i]);
                    }
                }
                if (x >= m3) {
                    for (let i = 0; i < MLArrElem.length; i++) {
                        MLArrElem[i].classList = "";
                        MLArrElem[i].classList.add(MLArrClass[i]);
                    }
                }
                if (x >= t) {
                    for (let i = 0; i < TArrElem.length; i++) {
                        TArrElem[i].classList = "";
                        TArrElem[i].classList.add(TArrClass[i]);
                    }
                }
                if (x >= l1) {
                    for (let i = 0; i < L1ArrElem.length; i++) {
                        L1ArrElem[i].classList = "";
                        L1ArrElem[i].classList.add(L1ArrClass[i]);
                    }
                }
                if (x >= l2) {
                    for (let i = 0; i < L2ArrElem.length; i++) {
                        L2ArrElem[i].classList = "";
                        L2ArrElem[i].classList.add(L2ArrClass[i]);
                    }
                }
                if (x >= hd4k) {
                    for (let i = 0; i < hd4kArrElem.length; i++) {
                        if (hd4kArrElem[i].classList != hd4kArrClass[i]) {
                            hd4kArrElem[i].classList = "";
                            hd4kArrElem[i].classList.add(hd4kArrClass[i]);
                        }
                    }
                }
            }
            CrocksTrap();
            window.addEventListener("resize", () => {CrocksTrap();});
            console.info('%cCrocksTrap has been loaded', 'font-size: 1.2vw; color: white; text-shadow: 0.15vw 0.15vw 0.15vw green;');
        }
        else {
            console.error("CrockTraps error:\n\nCrocksTrap did not initialize in the right way. See the documentation.");
        }
    }
    else {
        console.error("CrockTraps error:\n\nCrocksTrap did not initialize in the right way. See the documentation.");
    }
}
else {
    console.error("CrockTraps error:\n\nCrocksTrap did not initialize in the right way. See the documentation.");
}