function showPopup(symbol, name, atomicNumber, imageUrl) {
    console.log("เปิดป๊อปอัป:", symbol, name, atomicNumber, imageUrl); // Debug

    document.getElementById("popup-title").innerText = "ธาตุ: " + name;
    document.getElementById("popup-symbol").innerText = "สัญลักษณ์: " + symbol;
    document.getElementById("popup-atomicNumber").innerText = "เลขอะตอม: " + atomicNumber;
    
    let imgElement = document.getElementById("popup-image");
    imgElement.src = imageUrl;
    imgElement.style.display = "block"; // แสดงภาพ

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
async function searchFunction() {
    let searchTerm = document.querySelector('.search-box').value.trim();
    
    if (!searchTerm) {
        document.querySelector('.result').innerHTML = "กรุณากรอกชื่อธาตุหรือสัญลักษณ์";
        return;
    }

    // โหลดข้อมูลจาก JSON
    try {
        let response = await fetch("elements.json");
        let elements = await response.json();

        // ค้นหาธาตุจาก JSON
        let element = elements[searchTerm];

        if (element) {
            let resultHTML = `
                <h3>${element.name} (${element.symbol})</h3>
                <p><strong>เลขอะตอม:</strong> ${element.atomicNumber}</p>
                <p><strong>มวลอะตอม:</strong> ${element.atomicMass}</p>
                <p><strong>คุณสมบัติ:</strong> ${element.properties}</p>
                <h4>🔬 ปฏิกิริยาเคมี:</h4>
                <ul>${element.reactions.map(r => `<li>${r}</li>`).join('')}</ul>
            `;
            document.querySelector('.result').innerHTML = resultHTML;
        } else {
            document.querySelector('.result').innerHTML = "ไม่พบข้อมูลของธาตุนี้";
        }
    } catch (error) {
        console.error("Error loading elements.json", error);
        document.querySelector('.result').innerHTML = "เกิดข้อผิดพลาดในการโหลดข้อมูล";
    }
}
