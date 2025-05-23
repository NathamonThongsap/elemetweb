function searchFunction() {
    let searchTerm = document.querySelector('.search-box').value.toLowerCase();
    let result = '';

    // ตัวอย่างการค้นหาธาตุต่างๆ

    // Hydrogen (H)
 // Hydrogen (H)
if (searchTerm === "h") {
result += `
<h3>ปฏิกิริยาเคมีของไฮโดรเจน (H)</h3>
<img src="images/1.jpg" alt="ไฮโดรเจน" width="200">

<p><strong>1. การเผาไหม้ไฮโดรเจน:</strong></p>
<p>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</p>


<p><strong>2. ไฮโดรเจนกับโลหะอัลคาไล:</strong></p>
<p>2Na + H<sub>2</sub> → 2NaH</p>


<p><strong>3. การเกิดแก๊สไฮโดรเจนจากกรด:</strong></p>
<p>Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</p>


<p><strong>4. ปฏิกิริยากับไนโตรเจน (Haber Process):</strong></p>
<p>N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub> (Fe Catalyst)</p>

`;
}


    // Helium (He)
    if (searchTerm === "he") {
        result += `
            <h3>ข้อมูลเกี่ยวกับธาตุฮีเลียม (He)</h3>
            <img src="images/2.jpg" alt="ฮีเลียม" width="200">
            <p><strong>สัญลักษณ์:</strong> He</p>
            <p><strong>เลขอะตอม:</strong> 2</p>
            <p><strong>มวลอะตอม:</strong> 4.0026 u</p>
            <p><strong>คุณสมบัติ:</strong> เป็นก๊าซเฉื่อย ไม่มีสี ไม่มีกลิ่น ไม่ทำปฏิกิริยากับธาตุอื่น</p>
            <p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
            <p>He เป็นก๊าซเฉื่อยและไม่มีปฏิกิริยาทางเคมี</p>
            <p><strong>🔹 การใช้งาน:</strong></p>
            <ul>
                <li>ใช้เติมในบอลลูนและเรือเหาะ (เบากว่าอากาศ)</li>
                <li>ใช้ในงานเชื่อมโลหะ ป้องกันออกซิเดชัน</li>
                <li>ใช้ใน Cryogenics (การทำความเย็นขั้นสูง)</li>
            </ul>
        `;
    }
// Lithium (Li)
if (searchTerm === "li") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุลิเทียม (Li)</h3>
<img src="images/3.jpg" alt="ลิเทียม" width="200">
<p><strong>สัญลักษณ์:</strong> Li</p>
<p><strong>เลขอะตอม:</strong> 3</p>
<p><strong>มวลอะตอม:</strong> 6.94 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะอัลคาไลที่เบาที่สุด ทำปฏิกิริยากับน้ำและอากาศได้ง่าย</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li><strong>ปฏิกิริยากับน้ำ:</strong> 2Li + 2H<sub>2</sub>O → 2LiOH + H<sub>2</sub>↑</li>
    <li><strong>ปฏิกิริยากับออกซิเจน:</strong> 4Li + O<sub>2</sub> → 2Li<sub>2</sub>O</li>
    <li><strong>ปฏิกิริยากับคลอรีน:</strong> 2Li + Cl<sub>2</sub> → 2LiCl</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้ในแบตเตอรี่ลิเทียมไอออน</li>
    <li>ใช้เป็นสารหล่อลื่นในอุตสาหกรรม</li>
    <li>ใช้เป็นยาในทางการแพทย์ (รักษาโรคไบโพลาร์)</li>
</ul>
`;
}

// Beryllium (Be)
if (searchTerm === "be") {
result += `
<h3>ปฏิกิริยาเคมีของเบริลเลียม (Be)</h3>
<img src="images/4.jpg" alt="เบริลเลียม" width="200">

<p><strong>1. การเกิดออกไซด์ของเบริลเลียม:</strong></p>
<p>2Be + O<sub>2</sub> → 2BeO</p>


<p><strong>2. ปฏิกิริยากับน้ำ:</strong></p>
<p>Be + 2H<sub>2</sub>O → Be(OH)<sub>2</sub> + H<sub>2</sub>↑</p>

`;
}
// Boron (B)
if (searchTerm === "b") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโบรอน (B)</h3>
<img src="images/b.jpg" alt="โบรอน" width="200">
<p><strong>สัญลักษณ์:</strong> B</p>
<p><strong>เลขอะตอม:</strong> 5</p>
<p><strong>มวลอะตอม:</strong> 10.81 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นอโลหะ แข็ง เปราะ และนำไฟฟ้าในบางเงื่อนไข</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li>2B + 3O<sub>2</sub> → B<sub>2</sub>O<sub>3</sub> (เกิดเป็นออกไซด์ของโบรอน)</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้ในอุตสาหกรรมแก้วและเซรามิก</li>
    <li>เป็นส่วนผสมในวัสดุทนไฟและใยแก้ว</li>
    <li>ใช้ในนิวเคลียร์เป็นตัวดูดซับนิวตรอน</li>
</ul>
`;
}

// Carbon (C)
if (searchTerm === "c") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุคาร์บอน (C)</h3>
<img src="images/6.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> C</p>
<p><strong>เลขอะตอม:</strong> 6</p>
<p><strong>มวลอะตอม:</strong> 12.011 u</p>
<p><strong>คุณสมบัติ:</strong> อโลหะ, มีหลายอัญรูป เช่น เพชร กราไฟต์ และฟูลเลอรีน</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>C + O<sub>2</sub> → CO<sub>2</sub></p>
<p>2C + O<sub>2</sub> → 2CO</p>
`;
}

// Nitrogen (N)
if (searchTerm === "n") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุไนโตรเจน (N)</h3>
<img src="images/7.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> N</p>
<p><strong>เลขอะตอม:</strong> 7</p>
<p><strong>มวลอะตอม:</strong> 14.007 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซไม่มีสี ไม่มีกลิ่น ไม่ทำปฏิกิริยาง่าย</p>
<p><strong>🔹 การเกิดออกไซด์:</strong></p>
<p>N<sub>2</sub> + O<sub>2</sub> → 2NO</p>
<p>2NO + O<sub>2</sub> → 2NO<sub>2</sub></p>
`;
}

// Oxygen (O)
if (searchTerm === "o") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุออกซิเจน (O)</h3>
<img src="images/8.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> O</p>
<p><strong>เลขอะตอม:</strong> 8</p>
<p><strong>มวลอะตอม:</strong> 15.999 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซไม่มีสี ไม่มีรส ไม่มีกลิ่น, จำเป็นต่อการหายใจ</p>
<p><strong>🔹 การเกิดออกไซด์กับโลหะ:</strong></p>
<p>4Na + O<sub>2</sub> → 2Na<sub>2</sub>O</p>
<p>2Mg + O<sub>2</sub> → 2MgO</p>
`;
}

// Fluorine (F)
if (searchTerm === "f") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุฟลูออรีน (F)</h3>
<img src="images/9.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> F</p>
<p><strong>เลขอะตอม:</strong> 9</p>
<p><strong>มวลอะตอม:</strong> 18.998 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซสีเหลืองอ่อน มีฤทธิ์กัดกร่อนสูง เป็นธาตุที่มีอิเล็กโตรเนกาติวิตีสูงสุด</p>
<p><strong>🔹 การทำปฏิกิริยากับไฮโดรเจน:</strong></p>
<p>H<sub>2</sub> + F<sub>2</sub> → 2HF</p>
`;
}

// Neon (Ne)
if (searchTerm === "ne") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุนีออน (Ne)</h3>
<img src="images/10.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ne</p>
<p><strong>เลขอะตอม:</strong> 10</p>
<p><strong>มวลอะตอม:</strong> 20.180 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซเฉื่อย, ไม่มีสี ไม่มีกลิ่น, ไม่ทำปฏิกิริยากับธาตุอื่น</p>
<p><strong>🔹 การใช้งาน:</strong></p>
<p>ใช้ในหลอดไฟนีออน</p>
`;
}
// Sodium (Na)
if (searchTerm === "na") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโซเดียม (Na)</h3>
<img src="images/11.jpg" alt="โซเดียม" width="200">
<p><strong>สัญลักษณ์:</strong> Na</p>
<p><strong>เลขอะตอม:</strong> 11</p>
<p><strong>มวลอะตอม:</strong> 22.99 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะอัลคาไลที่ทำปฏิกิริยากับน้ำอย่างรุนแรง</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li><strong>ปฏิกิริยากับน้ำ:</strong> 2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>↑</li>
    <li><strong>ปฏิกิริยากับออกซิเจน:</strong> 4Na + O<sub>2</sub> → 2Na<sub>2</sub>O</li>
    <li><strong>ปฏิกิริยากับคลอรีน:</strong> 2Na + Cl<sub>2</sub> → 2NaCl</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้ในอุตสาหกรรมเคมีและการผลิตสบู่</li>
    <li>เป็นองค์ประกอบหลักของเกลือแกง (NaCl)</li>
    <li>ใช้ในการผลิตกระจกและกระดาษ</li>
</ul>
`;
}

// Magnesium (Mg)
if (searchTerm === "mg") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแมกนีเซียม (Mg)</h3>
<img src="images/12.jpg" alt="แมกนีเซียม" width="200">
<p><strong>สัญลักษณ์:</strong> Mg</p>
<p><strong>เลขอะตอม:</strong> 12</p>
<p><strong>มวลอะตอม:</strong> 24.31 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะที่เบา ติดไฟได้ง่าย และเป็นส่วนสำคัญของร่างกายมนุษย์</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li><strong>ปฏิกิริยากับออกซิเจน:</strong> 2Mg + O<sub>2</sub> → 2MgO</li>
    <li><strong>ปฏิกิริยากับน้ำ:</strong> Mg + 2H<sub>2</sub>O → Mg(OH)<sub>2</sub> + H<sub>2</sub>↑</li>
    <li><strong>ปฏิกิริยากับกรด:</strong> Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>↑</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้ในอุตสาหกรรมโลหะผสม (Magnesium Alloys)</li>
    <li>ใช้ในพลุและไฟแฟลช</li>
    <li>เป็นแร่ธาตุสำคัญในอาหารเสริม</li>
</ul>
`;
}

// Aluminium (Al)
if (searchTerm === "al") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุอะลูมิเนียม (Al)</h3>
<img src="images/16.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Al</p>
<p><strong>เลขอะตอม:</strong> 13</p>
<p><strong>มวลอะตอม:</strong> 26.9815 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะเบา สีเงินเงา ทนทานต่อการกัดกร่อน</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับกรด:</strong></p>
<p>2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Silicon (Si)
if (searchTerm === "si") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุซิลิกอน (Si)</h3>
<img src="images/17.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Si</p>
<p><strong>เลขอะตอม:</strong> 14</p>
<p><strong>มวลอะตอม:</strong> 28.0855 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกึ่งโลหะ, แข็ง เปราะ ใช้ในการผลิตเซมิคอนดักเตอร์</p>
<p><strong>🔹 การเกิดออกไซด์:</strong></p>
<p>Si + O<sub>2</sub> → SiO<sub>2</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับด่าง:</strong></p>
<p>Si + 2NaOH + H<sub>2</sub>O → Na<sub>2</sub>SiO<sub>3</sub> + 2H<sub>2</sub></p>
`;
}

// Phosphorus (P)
if (searchTerm === "p") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุฟอสฟอรัส (P)</h3>
<img src="images/18.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> P</p>
<p><strong>เลขอะตอม:</strong> 15</p>
<p><strong>มวลอะตอม:</strong> 30.9738 u</p>
<p><strong>คุณสมบัติ:</strong> มีหลายอัญรูป เช่น ฟอสฟอรัสขาว (ติดไฟง่าย) และฟอสฟอรัสแดง (เสถียรกว่า)</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>4P + 5O<sub>2</sub> → 2P<sub>2</sub>O<sub>5</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับคลอรีน:</strong></p>
<p>2P + 3Cl<sub>2</sub> → 2PCl<sub>3</sub></p>
`;
}

// Sulfur (S)
if (searchTerm === "s") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุกำมะถัน (S)</h3>
<img src="images/19.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> S</p>
<p><strong>เลขอะตอม:</strong> 16</p>
<p><strong>มวลอะตอม:</strong> 32.06 u</p>
<p><strong>คุณสมบัติ:</strong> อโลหะ สีเหลืองอ่อน มีกลิ่นเฉพาะเจาะจง</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>S + O<sub>2</sub> → SO<sub>2</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับโลหะ:</strong></p>
<p>Fe + S → FeS</p>
`;
}

// Chlorine (Cl)
if (searchTerm === "cl") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุคลอรีน (Cl)</h3>
<img src="images/20.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Cl</p>
<p><strong>เลขอะตอม:</strong> 17</p>
<p><strong>มวลอะตอม:</strong> 35.45 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซสีเขียวอมเหลือง มีกลิ่นฉุน ใช้ในการฆ่าเชื้อและฟอกขาว</p>
<p><strong>🔹 การทำปฏิกิริยากับโซเดียม:</strong></p>
<p>2Na + Cl<sub>2</sub> → 2NaCl</p>
<p><strong>🔹 การทำปฏิกิริยากับไฮโดรเจน:</strong></p>
<p>H<sub>2</sub> + Cl<sub>2</sub> → 2HCl</p>
`;
}

// Argon (Ar)
if (searchTerm === "ar") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุอาร์กอน (Ar)</h3>
<img src="images/21.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ar</p>
<p><strong>เลขอะตอม:</strong> 18</p>
<p><strong>มวลอะตอม:</strong> 39.948 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซเฉื่อย ไม่มีสี ไม่มีกลิ่น ไม่ทำปฏิกิริยาทางเคมีง่าย</p>
<p><strong>🔹 การใช้งาน:</strong></p>
<p>ใช้ในหลอดไฟ หัวเชื่อมโลหะ และการสร้างบรรยากาศเฉื่อยในการทดลองเคมี</p>
`;
}
// Potassium (K)
if (searchTerm === "k") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโพแทสเซียม (K)</h3>
<img src="images/22.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> K</p>
<p><strong>เลขอะตอม:</strong> 19</p>
<p><strong>มวลอะตอม:</strong> 39.0983 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะอ่อน สีเงินอมขาว ทำปฏิกิริยากับน้ำอย่างรุนแรง</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>2K + 2H<sub>2</sub>O → 2KOH + H<sub>2</sub> ↑</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>4K + O<sub>2</sub> → 2K<sub>2</sub>O</p>
`;
}

// Calcium (Ca)
if (searchTerm === "ca") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแคลเซียม (Ca)</h3>
<img src="images/23.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ca</p>
<p><strong>เลขอะตอม:</strong> 20</p>
<p><strong>มวลอะตอม:</strong> 40.078 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินอมเทา ทำปฏิกิริยากับน้ำและออกซิเจน</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ca + 2H<sub>2</sub>O → Ca(OH)<sub>2</sub> + H<sub>2</sub> ↑</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>2Ca + O<sub>2</sub> → 2CaO</p>
`;
}

// Scandium (Sc)
if (searchTerm === "sc") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุสแกนเดียม (Sc)</h3>
<img src="images/21.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Sc</p>
<p><strong>เลขอะตอม:</strong> 21</p>
<p><strong>มวลอะตอม:</strong> 44.9559 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินขาว ทนทานต่อการกัดกร่อน</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>4Sc + 3O<sub>2</sub> → 2Sc<sub>2</sub>O<sub>3</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับกรด:</strong></p>
<p>2Sc + 6HCl → 2ScCl<sub>3</sub> + 3H<sub>2</sub> ↑</p>
`;
}

// Titanium (Ti)
if (searchTerm === "ti") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุไทเทเนียม (Ti)</h3>
<img src="images/25.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ti</p>
<p><strong>เลขอะตอม:</strong> 22</p>
<p><strong>มวลอะตอม:</strong> 47.867 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะเบา แข็งแรง ทนทานต่อการกัดกร่อนสูง</p>
<p><strong>🔹 การเกิดออกไซด์:</strong></p>
<p>Ti + O<sub>2</sub> → TiO<sub>2</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับคลอรีน:</strong></p>
<p>Ti + 2Cl<sub>2</sub> → TiCl<sub>4</sub></p>
`;
}

// Vanadium (V)
if (searchTerm === "v") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุวาเนเดียม (V)</h3>
<img src="images/26.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> V</p>
<p><strong>เลขอะตอม:</strong> 23</p>
<p><strong>มวลอะตอม:</strong> 50.9415 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินอมเทา แข็งแรงและทนทานต่อการกัดกร่อน</p>
<p><strong>🔹 การเกิดออกไซด์:</strong></p>
<p>4V + 5O<sub>2</sub> → 2V<sub>2</sub>O<sub>5</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับกรด:</strong></p>
<p>V + 6HCl → VCl<sub>3</sub> + 3H<sub>2</sub> ↑</p>
`;
}

// Chromium (Cr)
if (searchTerm === "cr") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโครเมียม (Cr)</h3>
<img src="images/27.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Cr</p>
<p><strong>เลขอะตอม:</strong> 24</p>
<p><strong>มวลอะตอม:</strong> 51.9961 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินเงา แข็งและทนต่อการกัดกร่อนสูง</p>
<p><strong>🔹 การเกิดออกไซด์:</strong></p>
<p>4Cr + 3O<sub>2</sub> → 2Cr<sub>2</sub>O<sub>3</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับกรด:</strong></p>
<p>2Cr + 6HCl → 2CrCl<sub>3</sub> + 3H<sub>2</sub> ↑</p>
`;
}

// Manganese (Mn)
if (searchTerm === "mn") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุมังกานีส (Mn)</h3>
<img src="images/28.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Mn</p>
<p><strong>เลขอะตอม:</strong> 25</p>
<p><strong>มวลอะตอม:</strong> 54.938 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเทา แข็ง ใช้ในการผลิตเหล็กกล้าและแบตเตอรี่</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>3Mn + 2O<sub>2</sub> → Mn<sub>3</sub>O<sub>4</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับกรด:</strong></p>
<p>Mn + 2HCl → MnCl<sub>2</sub> + H<sub>2</sub> ↑</p>
`;
}

// Iron (Fe)
if (searchTerm === "fe") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเหล็ก (Fe)</h3>
<img src="images/29.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Fe</p>
<p><strong>เลขอะตอม:</strong> 26</p>
<p><strong>มวลอะตอม:</strong> 55.845 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินอมเทา แข็งแรง และเป็นส่วนประกอบสำคัญในการผลิตเหล็กกล้า</p>
<p><strong>🔹 การเกิดสนิม:</strong></p>
<p>4Fe + 3O<sub>2</sub> + 6H<sub>2</sub>O → 4Fe(OH)<sub>3</sub></p>
<p><strong>🔹 การทำปฏิกิริยากับกรด:</strong></p>
<p>Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub> ↑</p>
`;
}

// Cobalt (Co)
if (searchTerm === "co") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโคบอลต์ (Co)</h3>
<img src="images/30.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Co</p>
<p><strong>เลขอะตอม:</strong> 27</p>
<p><strong>มวลอะตอม:</strong> 58.933 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินอมฟ้า ทนต่อการกัดกร่อน ใช้ในแบตเตอรี่และแม่เหล็กถาวร</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>4Co + 3O<sub>2</sub> → 2Co<sub>2</sub>O<sub>3</sub></p>
`;
}

// Nickel (Ni)
if (searchTerm === "ni") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุนิกเกิล (Ni)</h3>
<img src="images/31.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ni</p>
<p><strong>เลขอะตอม:</strong> 28</p>
<p><strong>มวลอะตอม:</strong> 58.6934 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินเงา ทนทานต่อการกัดกร่อน ใช้ในการชุบโลหะและผลิตแบตเตอรี่</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>2Ni + O<sub>2</sub> → 2NiO</p>
`;
}

// Copper (Cu)
if (searchTerm === "cu") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุทองแดง (Cu)</h3>
<img src="images/32.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Cu</p>
<p><strong>เลขอะตอม:</strong> 29</p>
<p><strong>มวลอะตอม:</strong> 63.546 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีแดงอมส้ม นำไฟฟ้าและความร้อนได้ดีเยี่ยม</p>
<p><strong>🔹 การเกิดสนิมเขียว:</strong></p>
<p>2Cu + O<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O → Cu(OH)<sub>2</sub>·CuCO<sub>3</sub></p>
`;
}
// Zinc (Zn)
if (searchTerm === "zn") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุสังกะสี (Zn)</h3>
<img src="images/33.jpg" alt="สังกะสี" width="200">
<p><strong>สัญลักษณ์:</strong> Zn</p>
<p><strong>เลขอะตอม:</strong> 30</p>
<p><strong>มวลอะตอม:</strong> 65.38 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะสีเทาเงิน ทนต่อการกัดกร่อน</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li>Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</li>
    <li>2Zn + O<sub>2</sub> → 2ZnO</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong> ใช้ชุบกันสนิมและในอุตสาหกรรมแบตเตอรี่</p>
`;
}

// Gallium (Ga)
if (searchTerm === "ga") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแกลเลียม (Ga)</h3>
<img src="images/34.jpg" alt="แกลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ga</p>
<p><strong>เลขอะตอม:</strong> 31</p>
<p><strong>มวลอะตอม:</strong> 69.72 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะอ่อน หลอมเหลวที่อุณหภูมิต่ำ</p>
<p><strong>🔹 การใช้งาน:</strong> ใช้ในอุปกรณ์อิเล็กทรอนิกส์ เช่น LED และเซมิคอนดักเตอร์</p>
`;
}

// Germanium (Ge)
if (searchTerm === "ge") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเจอร์เมเนียม (Ge)</h3>
<img src="images/35.jpg" alt="เจอร์เมเนียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ge</p>
<p><strong>เลขอะตอม:</strong> 32</p>
<p><strong>มวลอะตอม:</strong> 72.63 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นกึ่งตัวนำที่มีคุณสมบัติเหมาะกับอุปกรณ์อิเล็กทรอนิกส์</p>
<p><strong>🔹 การใช้งาน:</strong> ใช้ในทรานซิสเตอร์ เส้นใยนำแสง และอุปกรณ์อินฟราเรด</p>
`;
}

// Arsenic (As)
if (searchTerm === "as") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุอาร์เซนิก (As)</h3>
<img src="images/36.jpg" alt="อาร์เซนิก" width="200">
<p><strong>สัญลักษณ์:</strong> As</p>
<p><strong>เลขอะตอม:</strong> 33</p>
<p><strong>มวลอะตอม:</strong> 74.92 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นอโลหะ มีพิษสูง และใช้ในการทำยาฆ่าแมลง</p>
<p><strong>🔹 การใช้งาน:</strong> ใช้ในการผลิตเซมิคอนดักเตอร์และวัสดุทนไฟ</p>
`;
}

// Selenium (Se)
if (searchTerm === "se") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุซีลีเนียม (Se)</h3>
<img src="images/37.jpg" alt="ซีลีเนียม" width="200">
<p><strong>สัญลักษณ์:</strong> Se</p>
<p><strong>เลขอะตอม:</strong> 34</p>
<p><strong>มวลอะตอม:</strong> 78.96 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นอโลหะที่นำไฟฟ้าในที่มีแสง</p>
<p><strong>🔹 การใช้งาน:</strong> ใช้ในเซลล์แสงอาทิตย์และอุตสาหกรรมแก้ว</p>
`;
}

// Bromine (Br)
if (searchTerm === "br") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโบรมีน (Br)</h3>
<img src="images/38.jpg" alt="โบรมีน" width="200">
<p><strong>สัญลักษณ์:</strong> Br</p>
<p><strong>เลขอะตอม:</strong> 35</p>
<p><strong>มวลอะตอม:</strong> 79.90 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นของเหลวสีแดง ระเหยง่าย</p>
<p><strong>🔹 การใช้งาน:</strong> ใช้ในสารหน่วงไฟและอุตสาหกรรมเคมี</p>
`;
}


// Krypton (Kr)
if (searchTerm === "kr") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุคริปทอน (Kr)</h3>
<img src="images/39.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Kr</p>
<p><strong>เลขอะตอม:</strong> 36</p>
<p><strong>มวลอะตอม:</strong> 83.798 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซเฉื่อย ไม่มีสี ไม่มีกลิ่น ไม่ทำปฏิกิริยาเคมีง่าย</p>
<p><strong>🔹 การใช้งาน:</strong></p>
<p>ใช้ในหลอดไฟและเลเซอร์ความเข้มสูง</p>
`;
}
// Rubidium (Rb)
if (searchTerm === "rb") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุรูบิเดียม (Rb)</h3>
<img src="images/53.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Rb</p>
<p><strong>เลขอะตอม:</strong> 37</p>
<p><strong>มวลอะตอม:</strong> 85.4678 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะอ่อน สีเงินขาว ทำปฏิกิริยากับน้ำอย่างรุนแรง</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>2Rb + 2H<sub>2</sub>O → 2RbOH + H<sub>2</sub> ↑</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>4Rb + O<sub>2</sub> → 2Rb<sub>2</sub>O</p>
`;
}

// Strontium (Sr)
if (searchTerm === "sr") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุสตรอนเทียม (Sr)</h3>
<img src="images/40.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Sr</p>
<p><strong>เลขอะตอม:</strong> 38</p>
<p><strong>มวลอะตอม:</strong> 87.62 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะอ่อน สีเงินอมเหลือง ทำปฏิกิริยากับน้ำและอากาศได้ง่าย</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Sr + 2H<sub>2</sub>O → Sr(OH)<sub>2</sub> + H<sub>2</sub> ↑</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>2Sr + O<sub>2</sub> → 2SrO</p>
`;
}

// Yttrium (Y)
if (searchTerm === "y") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุอิตเทรียม (Y)</h3>
<img src="images/41.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Y</p>
<p><strong>เลขอะตอม:</strong> 39</p>
<p><strong>มวลอะตอม:</strong> 88.9058 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินเงา ทนทานต่อการกัดกร่อน ใช้ในอุตสาหกรรมอิเล็กทรอนิกส์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>4Y + 3O<sub>2</sub> → 2Y<sub>2</sub>O<sub>3</sub></p>
`;
}

// Zirconium (Zr)
if (searchTerm === "zr") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเซอร์โคเนียม (Zr)</h3>
<img src="images/42.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Zr</p>
<p><strong>เลขอะตอม:</strong> 40</p>
<p><strong>มวลอะตอม:</strong> 91.224 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเทาเงิน ทนทานต่อการกัดกร่อนสูง ใช้ในอุตสาหกรรมนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>Zr + O<sub>2</sub> → ZrO<sub>2</sub></p>
`;
}

// Niobium (Nb)
if (searchTerm === "nb") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุนีโอเบียม (Nb)</h3>
<img src="images/43.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Nb</p>
<p><strong>เลขอะตอม:</strong> 41</p>
<p><strong>มวลอะตอม:</strong> 92.9064 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเทาเงิน ทนทานต่อการกัดกร่อน ใช้ในการผลิตเหล็กกล้า</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>2Nb + 5O<sub>2</sub> → Nb<sub>2</sub>O<sub>5</sub></p>
`;
}

// Molybdenum (Mo)
if (searchTerm === "mo") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโมลิบดีนัม (Mo)</h3>
<img src="images/44.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Mo</p>
<p><strong>เลขอะตอม:</strong> 42</p>
<p><strong>มวลอะตอม:</strong> 95.95 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเทาเงิน ทนความร้อนสูง ใช้ในการผลิตเหล็กกล้าและอุปกรณ์อิเล็กทรอนิกส์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>2Mo + 3O<sub>2</sub> → 2MoO<sub>3</sub></p>
`;
}

// Technetium (Tc)
if (searchTerm === "tc") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเทคนีเทียม (Tc)</h3>
<img src="images/45.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Tc</p>
<p><strong>เลขอะตอม:</strong> 43</p>
<p><strong>มวลอะตอม:</strong> 98 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินอมเทา กัมมันตรังสี ใช้ในการแพทย์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>4Tc + 7O<sub>2</sub> → 2Tc<sub>2</sub>O<sub>7</sub></p>
`;
}

// Ruthenium (Ru)
if (searchTerm === "ru") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุรูทีเนียม (Ru)</h3>
<img src="images/46.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ru</p>
<p><strong>เลขอะตอม:</strong> 44</p>
<p><strong>มวลอะตอม:</strong> 101.07 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินเงา ทนทานต่อการกัดกร่อนสูง ใช้ในอุตสาหกรรมอิเล็กทรอนิกส์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>Ru + O<sub>2</sub> → RuO<sub>2</sub></p>
`;
}

// Rhodium (Rh)
if (searchTerm === "rh") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโรเดียม (Rh)</h3>
<img src="images/47.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Rh</p>
<p><strong>เลขอะตอม:</strong> 45</p>
<p><strong>มวลอะตอม:</strong> 102.9055 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินเงา ทนต่อการกัดกร่อนสูง ใช้ในตัวเร่งปฏิกิริยารถยนต์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>4Rh + 3O<sub>2</sub> → 2Rh<sub>2</sub>O<sub>3</sub></p>
`;
}
// Palladium (Pd)
if (searchTerm === "pd") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแพลเลเดียม (Pd)</h3>
<img src="images/48.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Pd</p>
<p><strong>เลขอะตอม:</strong> 46</p>
<p><strong>มวลอะตอม:</strong> 106.42 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ขาว ทนทานต่อการกัดกร่อน ใช้ในอุตสาหกรรมและการผลิตเครื่องประดับ</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Pd + H<sub>2</sub>O → ไม่มีปฏิกิริยา</p>
`;
}

// Silver (Ag)
if (searchTerm === "ag") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเงิน (Ag)</h3>
<img src="images/50.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ag</p>
<p><strong>เลขอะตอม:</strong> 47</p>
<p><strong>มวลอะตอม:</strong> 107.868 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีขาว มีความมันวาวสูง ใช้ในการผลิตเครื่องประดับและเงินตรา</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ag + H<sub>2</sub>O → ไม่มีปฏิกิริยา</p>
`;
}

// Cadmium (Cd)
if (searchTerm === "cd") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแคดเมียม (Cd)</h3>
<img src="images/49.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Cd</p>
<p><strong>เลขอะตอม:</strong> 48</p>
<p><strong>มวลอะตอม:</strong> 112.41 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีขาวเงิน ใช้ในอุตสาหกรรมแบตเตอรี่และการชุบโลหะ</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Cd + 2H<sub>2</sub>O → Cd(OH)<sub>2</sub> + H<sub>2</sub></p>
`;
}

// Indium (In)
if (searchTerm === "in") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุอินเดียม (In)</h3>
<img src="images/51.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> In</p>
<p><strong>เลขอะตอม:</strong> 49</p>
<p><strong>มวลอะตอม:</strong> 114.82 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีขาวเงิน นิ่ม ใช้ในการผลิตอุปกรณ์อิเล็กทรอนิกส์และหลอดไฟ</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>In + 3H<sub>2</sub>O → In(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Tin (Sn)
if (searchTerm === "sn") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุตะกั่ว (Sn)</h3>
<img src="images/52.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Sn</p>
<p><strong>เลขอะตอม:</strong> 50</p>
<p><strong>มวลอะตอม:</strong> 118.71 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีขาวเงิน ใช้ในการผลิตเครื่องใช้โลหะและในอุตสาหกรรมเคมี</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Sn + 2H<sub>2</sub>O → Sn(OH)<sub>2</sub> + H<sub>2</sub></p>
`;
}

// Antimony (Sb)
if (searchTerm === "sb") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุตะกั่ว (Sb)</h3>
<img src="images/54.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Sb</p>
<p><strong>เลขอะตอม:</strong> 51</p>
<p><strong>มวลอะตอม:</strong> 121.76 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีขาวเงิน ใช้ในการผลิตโลหะผสมและในการผลิตเครื่องประดับ</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Sb + 3H<sub>2</sub>O → Sb(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Tellurium (Te)
if (searchTerm === "te") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเทลลูเรียม (Te)</h3>
<img src="images/55.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Te</p>
<p><strong>เลขอะตอม:</strong> 53</p>
<p><strong>มวลอะตอม:</strong> 127.60 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุครึ่งโลหะ ใช้ในอุปกรณ์อิเล็กทรอนิกส์และอุปกรณ์เซมิคอนดักเตอร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Te + 2H<sub>2</sub>O → Te(OH)<sub>2</sub> + H<sub>2</sub></p>
`;
}

// Iodine (I)
if (searchTerm === "i") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุไอโอดีน (I)</h3>
<img src="images/56.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> I</p>
<p><strong>เลขอะตอม:</strong> 52</p>
<p><strong>มวลอะตอม:</strong> 126.90 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซสีม่วง ใช้ในการรักษาความเป็นพิษและในการผลิตยา</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>I + H<sub>2</sub>O → ไม่มีปฏิกิริยา</p>
`;
}

// Xenon (Xe)
if (searchTerm === "xe") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุซีนอน (Xe)</h3>
<img src="images/57.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Xe</p>
<p><strong>เลขอะตอม:</strong> 54</p>
<p><strong>มวลอะตอม:</strong> 131.293 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซเฉื่อย ไม่มีสี ไม่มีกลิ่น ใช้ในหลอดไฟและเลเซอร์ความเข้มสูง</p>
<p><strong>🔹 การเกิดสารประกอบ:</strong></p>
<p>Xe + F<sub>2</sub> → XeF<sub>2</sub></p>
`;
}
// Cesium (Cs)
if (searchTerm === "cs") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุซีเซียม (Cs)</h3>
<img src="images/58.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Cs</p>
<p><strong>เลขอะตอม:</strong> 55</p>
<p><strong>มวลอะตอม:</strong> 132.905 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะอ่อน สีเงินทอง ทำปฏิกิริยากับน้ำอย่างรุนแรงมาก</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>2Cs + 2H<sub>2</sub>O → 2CsOH + H<sub>2</sub> ↑</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>4Cs + O<sub>2</sub> → 2Cs<sub>2</sub>O</p>
`;
}

// Barium (Ba)
if (searchTerm === "ba") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแบเรียม (Ba)</h3>
<img src="images/59.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ba</p>
<p><strong>เลขอะตอม:</strong> 56</p>
<p><strong>มวลอะตอม:</strong> 137.327 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะอ่อน สีเงินขาว ทำปฏิกิริยากับน้ำและอากาศได้ง่าย</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ba + 2H<sub>2</sub>O → Ba(OH)<sub>2</sub> + H<sub>2</sub> ↑</p>
<p><strong>🔹 การเผาไหม้ในอากาศ:</strong></p>
<p>2Ba + O<sub>2</sub> → 2BaO</p>
`;
}
// Hafnium (Hf)
if (searchTerm === "hf") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุฮาฟเนียม (Hf)</h3>
<img src="images/60.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Hf</p>
<p><strong>เลขอะตอม:</strong> 72</p>
<p><strong>มวลอะตอม:</strong> 178.49 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเทาเงา ทนต่อการกัดกร่อนสูง ใช้ในอุตสาหกรรมนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>Hf + O<sub>2</sub> → HfO<sub>2</sub></p>
`;
}

// Tantalum (Ta)
if (searchTerm === "ta") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแทนทาลัม (Ta)</h3>
<img src="images/61.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ta</p>
<p><strong>เลขอะตอม:</strong> 73</p>
<p><strong>มวลอะตอม:</strong> 180.9479 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเทาเงิน ทนทานต่อการกัดกร่อนสูง ใช้ในการผลิตอุปกรณ์อิเล็กทรอนิกส์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>2Ta + 5O<sub>2</sub> → Ta<sub>2</sub>O<sub>5</sub></p>
`;
}

// Tungsten (W)
if (searchTerm === "w") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุทังสเตน (W)</h3>
<img src="images/62.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> W</p>
<p><strong>เลขอะตอม:</strong> 74</p>
<p><strong>มวลอะตอม:</strong> 183.84 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเทาเงิน มีจุดหลอมเหลวสูงมาก ใช้ในหลอดไฟและอุปกรณ์ทนความร้อน</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>3W + 2O<sub>2</sub> → W<sub>3</sub>O<sub>8</sub></p>
`;
}

// Rhenium (Re)
if (searchTerm === "re") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุรีเนียม (Re)</h3>
<img src="images/63.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Re</p>
<p><strong>เลขอะตอม:</strong> 75</p>
<p><strong>มวลอะตอม:</strong> 186.207 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินเงา ทนทานต่อความร้อนสูง ใช้ในอุตสาหกรรมเครื่องยนต์เจ็ต</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>4Re + 3O<sub>2</sub> → 2Re<sub>2</sub>O<sub>3</sub></p>
`;
}

// Osmium (Os)
if (searchTerm === "os") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุออสเมียม (Os)</h3>
<img src="images/64.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Os</p>
<p><strong>เลขอะตอม:</strong> 76</p>
<p><strong>มวลอะตอม:</strong> 190.23 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินน้ำเงิน หนาแน่นสูงสุดในบรรดาธาตุ ใช้ในหัวปากกาหมึกซึม</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>Os + O<sub>2</sub> → OsO<sub>4</sub></p>
`;
}

// Iridium (Ir)
if (searchTerm === "ir") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุอิริเดียม (Ir)</h3>
<img src="images/65.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ir</p>
<p><strong>เลขอะตอม:</strong> 77</p>
<p><strong>มวลอะตอม:</strong> 192.217 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินอมขาว ทนทานต่อการกัดกร่อนสูง ใช้ในอุปกรณ์วิทยาศาสตร์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>Ir + O<sub>2</sub> → IrO<sub>2</sub></p>
`;
}

// Platinum (Pt)
if (searchTerm === "pt") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแพลทินัม (Pt)</h3>
<img src="images/66.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Pt</p>
<p><strong>เลขอะตอม:</strong> 78</p>
<p><strong>มวลอะตอม:</strong> 195.084 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงินเงา ทนทานต่อการกัดกร่อนสูง ใช้ในการทำเครื่องประดับและตัวเร่งปฏิกิริยา</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>Pt + O<sub>2</sub> → PtO<sub>2</sub></p>
`;
}

// Gold (Au)
if (searchTerm === "au") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุทองคำ (Au)</h3>
<img src="images/67.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Au</p>
<p><strong>เลขอะตอม:</strong> 79</p>
<p><strong>มวลอะตอม:</strong> 196.966569 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีทอง ไม่ทำปฏิกิริยากับออกซิเจนได้ง่าย ใช้ในการทำเครื่องประดับและการลงทุน</p>
<p><strong>🔹 การละลายในน้ำราชสภาพ:</strong></p>
<p>Au + HNO<sub>3</sub> + 3HCl → HAuCl<sub>4</sub> + NO + 2H<sub>2</sub>O</p>
`;
}

// Mercury (Hg)
if (searchTerm === "hg") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุปปรอท (Hg)</h3>
<img src="images/68.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Hg</p>
<p><strong>เลขอะตอม:</strong> 80</p>
<p><strong>มวลอะตอม:</strong> 200.59 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะเหลวที่อุณหภูมิห้อง ใช้ในเครื่องวัดอุณหภูมิและบารอมิเตอร์</p>
<p><strong>🔹 การทำปฏิกิริยากับออกซิเจน:</strong></p>
<p>2Hg + O<sub>2</sub> → 2HgO</p>
`;
}// Thallium (Tl)
if (searchTerm === "tl") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแทลเลียม (Tl)</h3>
<img src="images/69.jpg" alt="แทลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Tl</p>
<p><strong>เลขอะตอม:</strong> 81</p>
<p><strong>มวลอะตอม:</strong> 204.38 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะหนัก อ่อน และเป็นพิษ</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li>2Tl + O<sub>2</sub> → 2Tl<sub>2</sub>O (เกิดออกไซด์ของแทลเลียม)</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้ในอุตสาหกรรมอิเล็กทรอนิกส์</li>
    <li>เป็นส่วนผสมในเครื่องตรวจจับรังสี</li>
    <li>เคยใช้เป็นสารกำจัดศัตรูพืช (แต่ถูกจำกัดการใช้งาน)</li>
</ul>
`;
}

// Lead (Pb)
if (searchTerm === "pb") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุตะกั่ว (Pb)</h3>
<img src="images/70.jpg" alt="ตะกั่ว" width="200">
<p><strong>สัญลักษณ์:</strong> Pb</p>
<p><strong>เลขอะตอม:</strong> 82</p>
<p><strong>มวลอะตอม:</strong> 207.2 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะหนัก อ่อน และเป็นพิษ</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li>2Pb + O<sub>2</sub> → 2PbO (เกิดออกไซด์ของตะกั่ว)</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้ในการผลิตแบตเตอรี่</li>
    <li>ใช้ในอุตสาหกรรมก่อสร้างและสี</li>
    <li>ใช้เป็นวัสดุป้องกันรังสี</li>
</ul>
`;
}

// Bismuth (Bi)
if (searchTerm === "bi") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุบิสมัท (Bi)</h3>
<img src="images/71.jpg" alt="บิสมัท" width="200">
<p><strong>สัญลักษณ์:</strong> Bi</p>
<p><strong>เลขอะตอม:</strong> 83</p>
<p><strong>มวลอะตอม:</strong> 208.98 u</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะที่มีความเปราะและมีจุดหลอมเหลวต่ำ</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li>2Bi + 3O<sub>2</sub> → 2Bi<sub>2</sub>O<sub>3</sub> (เกิดออกไซด์ของบิสมัท)</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้ในเครื่องสำอางและยารักษาโรคกระเพาะ</li>
    <li>ใช้ในอุตสาหกรรมโลหะผสม</li>
    <li>เป็นทางเลือกแทนตะกั่วในบางผลิตภัณฑ์</li>
</ul>
`;
}

// Polonium (Po)
if (searchTerm === "po") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโพโลเนียม (Po)</h3>
<img src="images/72.jpg" alt="โพโลเนียม" width="200">
<p><strong>สัญลักษณ์:</strong> Po</p>
<p><strong>เลขอะตอม:</strong> 84</p>
<p><strong>มวลอะตอม:</strong> [209] u (ประมาณการ)</p>
<p><strong>คุณสมบัติ:</strong> เป็นโลหะกัมมันตรังสีที่มีความเป็นพิษสูง</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li>เป็นธาตุกัมมันตรังสีและทำปฏิกิริยาได้ง่ายกับออกซิเจน</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้เป็นแหล่งพลังงานสำหรับเครื่องมือในอวกาศ</li>
    <li>ใช้ในอุตสาหกรรมการผลิตไฟฟ้าแบบเทอร์โมอิเล็กทริก</li>
</ul>
`;
}

// Astatine (At)
if (searchTerm === "at") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแอสทาทีน (At)</h3>
<img src="images/73.jpg" alt="แอสทาทีน" width="200">
<p><strong>สัญลักษณ์:</strong> At</p>
<p><strong>เลขอะตอม:</strong> 85</p>
<p><strong>มวลอะตอม:</strong> [210] u (ประมาณการ)</p>
<p><strong>คุณสมบัติ:</strong> เป็นอโลหะกัมมันตรังสีและหายาก</p>
<p><strong>🔹 ปฏิกิริยาทางเคมี:</strong></p>
<ul>
    <li>สามารถทำปฏิกิริยากับไฮโดรเจนได้เป็น AtH</li>
</ul>
<p><strong>🔹 การใช้งาน:</strong></p>
<ul>
    <li>ใช้ในงานวิจัยทางการแพทย์ โดยเฉพาะด้านมะเร็ง</li>
</ul>
`;
}


// Radon (Rn)
if (searchTerm === "rn") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเรดอน (Rn)</h3>
<img src="images/74.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Rn</p>
<p><strong>เลขอะตอม:</strong> 86</p>
<p><strong>มวลอะตอม:</strong> 222 u</p>
<p><strong>คุณสมบัติ:</strong> ก๊าซเฉื่อย กัมมันตรังสี ไม่มีสี ไม่มีกลิ่น ใช้ในการรักษามะเร็งบางประเภท</p>
<p><strong>🔹 การเกิดสารประกอบ:</strong></p>
<p>Rn + F<sub>2</sub> → RnF<sub>2</sub></p>
`;
}
// Francium (Fr)
if (searchTerm === "fr") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแฟรงเซียม (Fr)</h3>
<img src="images/75.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Fr</p>
<p><strong>เลขอะตอม:</strong> 87</p>
<p><strong>มวลอะตอม:</strong> 223 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะอัลคาไลที่หายากมาก มีความเป็นพิษสูง ใช้ในการศึกษาทางวิทยาศาสตร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Fr + H<sub>2</sub>O → FrOH + H<sub>2</sub> ↑</p>
`;
}

// Radium (Ra)
if (searchTerm === "ra") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเรเดียม (Ra)</h3>
<img src="images/76.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ra</p>
<p><strong>เลขอะตอม:</strong> 88</p>
<p><strong>มวลอะตอม:</strong> 226 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะอัลคาไลน์เอิร์ธ เรืองแสงในที่มืดและมีความกัมมันตรังสีสูง</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ra + 2H<sub>2</sub>O → Ra(OH)<sub>2</sub> + H<sub>2</sub> ↑</p>
<p><strong>🔹 การเกิดสารประกอบ:</strong></p>
<p>Ra + O<sub>2</sub> → RaO<sub>2</sub></p>
`;
}
// Rutherfordium (Rf)
if (searchTerm === "rf") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุรูเธอร์ฟอร์เดียม (Rf)</h3>
<img src="images/77.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Rf</p>
<p><strong>เลขอะตอม:</strong> 104</p>
<p><strong>มวลอะตอม:</strong> 267 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ในกลุ่มทรานซิชัน มีความไม่เสถียรสูง</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Rf + H<sub>2</sub>O → RfOH + H<sub>2</sub></p>
`;
}

// Dubnium (Db)
if (searchTerm === "db") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุดับเนียม (Db)</h3>
<p><strong>สัญลักษณ์:</strong> Db</p>
<p><strong>เลขอะตอม:</strong> 105</p>
<p><strong>มวลอะตอม:</strong> 270 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ มีการใช้งานในงานวิจัยที่เกี่ยวข้องกับฟิสิกส์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Db + H<sub>2</sub>O → DbOH + H<sub>2</sub></p>
`;
}

// Seaborgium (Sg)
if (searchTerm === "sg") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุซีบอร์เกียม (Sg)</h3>
<p><strong>สัญลักษณ์:</strong> Sg</p>
<p><strong>เลขอะตอม:</strong> 106</p>
<p><strong>มวลอะตอม:</strong> 271 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการศึกษาด้านนิวเคลียร์และฟิสิกส์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Sg + H<sub>2</sub>O → SgOH + H<sub>2</sub></p>
`;
}

// Bohrium (Bh)
if (searchTerm === "bh") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโบเรียม (Bh)</h3>
<p><strong>สัญลักษณ์:</strong> Bh</p>
<p><strong>เลขอะตอม:</strong> 107</p>
<p><strong>มวลอะตอม:</strong> 270 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ มีการใช้งานในงานวิจัยด้านฟิสิกส์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Bh + H<sub>2</sub>O → BhOH + H<sub>2</sub></p>
`;
}

// Hassium (Hs)
if (searchTerm === "hs") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแฮสเซียม (Hs)</h3>
<p><strong>สัญลักษณ์:</strong> Hs</p>
<p><strong>เลขอะตอม:</strong> 108</p>
<p><strong>มวลอะตอม:</strong> 277 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการวิจัยด้านฟิสิกส์นิวเคลียร์และเคมี</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Hs + H<sub>2</sub>O → HsOH + H<sub>2</sub></p>
`;
}

// Meitnerium (Mt)
if (searchTerm === "mt") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุไมต์เนอร์เรียม (Mt)</h3>
<p><strong>สัญลักษณ์:</strong> Mt</p>
<p><strong>เลขอะตอม:</strong> 109</p>
<p><strong>มวลอะตอม:</strong> 278 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการวิจัยทางฟิสิกส์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Mt + H<sub>2</sub>O → MtOH + H<sub>2</sub></p>
`;
}

// Darmstadtium (Ds)
if (searchTerm === "ds") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุดาร์มสตัดติอัม (Ds)</h3>
<p><strong>สัญลักษณ์:</strong> Ds</p>
<p><strong>เลขอะตอม:</strong> 110</p>
<p><strong>มวลอะตอม:</strong> 281 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการวิจัยด้านฟิสิกส์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ds + H<sub>2</sub>O → DsOH + H<sub>2</sub></p>
`;
}

// Copernicium (Cn)
if (searchTerm === "cn") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโคเพอร์นิซียม (Cn)</h3>
<p><strong>สัญลักษณ์:</strong> Cn</p>
<p><strong>เลขอะตอม:</strong> 112</p>
<p><strong>มวลอะตอม:</strong> 285 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการวิจัยฟิสิกส์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Cn + H<sub>2</sub>O → CnOH + H<sub>2</sub></p>
`;
}

// Nihonium (Nh)
if (searchTerm === "nh") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุนิโฮเนียม (Nh)</h3>
<p><strong>สัญลักษณ์:</strong> Nh</p>
<p><strong>เลขอะตอม:</strong> 113</p>
<p><strong>มวลอะตอม:</strong> 284 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการศึกษาด้านฟิสิกส์และเคมี</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Nh + H<sub>2</sub>O → NhOH + H<sub>2</sub></p>
`;
}

// Flerovium (Fl)
if (searchTerm === "fl") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเฟลอโรเวียม (Fl)</h3>
<p><strong>สัญลักษณ์:</strong> Fl</p>
<p><strong>เลขอะตอม:</strong> 114</p>
<p><strong>มวลอะตอม:</strong> 289 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการศึกษาด้านเคมีและฟิสิกส์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Fl + H<sub>2</sub>O → FlOH + H<sub>2</sub></p>
`;
}

// Moscovium (Mc)
if (searchTerm === "mc") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุมอสโกเวียม (Mc)</h3>
<p><strong>สัญลักษณ์:</strong> Mc</p>
<p><strong>เลขอะตอม:</strong> 115</p>
<p><strong>มวลอะตอม:</strong> 288 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการวิจัยด้านฟิสิกส์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Mc + H<sub>2</sub>O → McOH + H<sub>2</sub></p>
`;
}

// Livermorium (Lv)
if (searchTerm === "lv") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุลิเวอร์โมเรียม (Lv)</h3>
<p><strong>สัญลักษณ์:</strong> Lv</p>
<p><strong>เลขอะตอม:</strong> 116</p>
<p><strong>มวลอะตอม:</strong> 293 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการวิจัยฟิสิกส์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Lv + H<sub>2</sub>O → LvOH + H<sub>2</sub></p>
`;
}

// Tennessine (Ts)
if (searchTerm === "ts") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเทนเนสซีน (Ts)</h3>
<p><strong>สัญลักษณ์:</strong> Ts</p>
<p><strong>เลขอะตอม:</strong> 117</p>
<p><strong>มวลอะตอม:</strong> 294 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ ใช้ในการศึกษาด้านเคมีและฟิสิกส์นิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ts + H<sub>2</sub>O → TsOH + H<sub>2</sub></p>
`;
}

// Oganesson (Og)
if (searchTerm === "og") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโอกาเนสซีน (Og)</h3>
<p><strong>สัญลักษณ์:</strong> Og</p>
<p><strong>เลขอะตอม:</strong> 118</p>
<p><strong>มวลอะตอม:</strong> 294 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุสังเคราะห์ที่มีความเสถียรต่ำที่สุดในบรรดาธาตุทั้งหมด</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Og + H<sub>2</sub>O → OgOH + H<sub>2</sub></p>
`;
}





    // ปฏิกิริยาอื่น ๆ ที่คล้ายกันสำหรับธาตุอื่นๆ สามารถเพิ่มตามความต้องการ

    // แสดงผลลัพธ์
    document.querySelector('.result').innerHTML = result ? result : "ไม่พบผลลัพธ์";
}
// Lanthanum (La)
if (searchTerm === "la") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแลนทานัม (La)</h3>
<img src="images/119.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> La</p>
<p><strong>เลขอะตอม:</strong> 57</p>
<p><strong>มวลอะตอม:</strong> 138.905 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะที่มีสีเงิน, ใช้ในอุปกรณ์อิเล็กทรอนิกส์และหลอดไฟ</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>La + 3H<sub>2</sub>O → La(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Cerium (Ce)
if (searchTerm === "ce") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเซอเรียม (Ce)</h3>
<img src="images/78.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ce</p>
<p><strong>เลขอะตอม:</strong> 58</p>
<p><strong>มวลอะตอม:</strong> 140.116 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะมีสีเงิน เป็นหนึ่งในธาตุที่ใช้ในคอนเวอร์เตอร์ไอเสีย</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ce + 2H<sub>2</sub>O → Ce(OH)<sub>2</sub> + H<sub>2</sub></p>
`;
}

// Praseodymium (Pr)
if (searchTerm === "pr") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุพราเซโอไดมียม (Pr)</h3>
<img src="images/79.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Pr</p>
<p><strong>เลขอะตอม:</strong> 59</p>
<p><strong>มวลอะตอม:</strong> 140.907 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในอุปกรณ์อิเล็กทรอนิกส์และอุตสาหกรรมไฟฟ้า</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Pr + 3H<sub>2</sub>O → Pr(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Neodymium (Nd)
if (searchTerm === "nd") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุนีโอไดมียม (Nd)</h3>
<img src="images/80.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Nd</p>
<p><strong>เลขอะตอม:</strong> 60</p>
<p><strong>มวลอะตอม:</strong> 144.242 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะที่ใช้ในแม่เหล็กชนิดแรงสูง และในเครื่องมือที่ต้องการสนามแม่เหล็กแรง</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Nd + 3H<sub>2</sub>O → Nd(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Promethium (Pm)
if (searchTerm === "pm") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโพรมีเธียม (Pm)</h3>
<img src="images/81.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Pm</p>
<p><strong>เลขอะตอม:</strong> 61</p>
<p><strong>มวลอะตอม:</strong> 145 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในแหล่งพลังงานขนาดเล็ก</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Pm + 3H<sub>2</sub>O → Pm(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Samarium (Sm)
if (searchTerm === "sm") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุซามาเรียม (Sm)</h3>
<img src="images/82.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Sm</p>
<p><strong>เลขอะตอม:</strong> 62</p>
<p><strong>มวลอะตอม:</strong> 150.36 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะมีสีเงิน ใช้ในแม่เหล็กและอุปกรณ์อิเล็กทรอนิกส์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Sm + 3H<sub>2</sub>O → Sm(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Europium (Eu)
if (searchTerm === "eu") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุยูโรเปียม (Eu)</h3>
<img src="images/83.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Eu</p>
<p><strong>เลขอะตอม:</strong> 63</p>
<p><strong>มวลอะตอม:</strong> 151.984 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะมีสีเงิน ใช้ในแสงไฟฟ้าและในงานวิจัยด้านนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Eu + 3H<sub>2</sub>O → Eu(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Gadolinium (Gd)
if (searchTerm === "gd") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุกาดอลิเนียม (Gd)</h3>
<img src="images/84.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Gd</p>
<p><strong>เลขอะตอม:</strong> 64</p>
<p><strong>มวลอะตอม:</strong> 157.25 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในอุปกรณ์การแพทย์และฟิสิกส์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Gd + 3H<sub>2</sub>O → Gd(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Terbium (Tb)
if (searchTerm === "tb") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเทอร์เบียม (Tb)</h3>
<img src="images/85.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Tb</p>
<p><strong>เลขอะตอม:</strong> 65</p>
<p><strong>มวลอะตอม:</strong> 158.925 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในแหล่งพลังงานและวัสดุเรืองแสง</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Tb + 3H<sub>2</sub>O → Tb(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Dysprosium (Dy)
if (searchTerm === "dy") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุดิสโพรเซียม (Dy)</h3>
<img src="images/86.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Dy</p>
<p><strong>เลขอะตอม:</strong> 66</p>
<p><strong>มวลอะตอม:</strong> 162.5 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในอุปกรณ์แม่เหล็กและวัสดุแม่เหล็ก</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Dy + 3H<sub>2</sub>O → Dy(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Holmium (Ho)
if (searchTerm === "ho") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโฮลเมียม (Ho)</h3>
<img src="images/87.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ho</p>
<p><strong>เลขอะตอม:</strong> 67</p>
<p><strong>มวลอะตอม:</strong> 164.930 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในการวิจัยฟิสิกส์และวัสดุทางการแพทย์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ho + 3H<sub>2</sub>O → Ho(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Erbium (Er)
if (searchTerm === "er") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเออร์เบียม (Er)</h3>
<img src="images/88.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Er</p>
<p><strong>เลขอะตอม:</strong> 68</p>
<p><strong>มวลอะตอม:</strong> 167.259 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในเครื่องมือแพทย์และแหล่งพลังงานเลเซอร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Er + 3H<sub>2</sub>O → Er(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Thulium (Tm)
if (searchTerm === "tm") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุธูเลียม (Tm)</h3>
<img src="images/89.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Tm</p>
<p><strong>เลขอะตอม:</strong> 69</p>
<p><strong>มวลอะตอม:</strong> 168.934 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในการวิจัยฟิสิกส์และเป็นส่วนหนึ่งของอุปกรณ์เลเซอร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Tm + 3H<sub>2</sub>O → Tm(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Ytterbium (Yb)
if (searchTerm === "yb") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุอิตเทอร์เบียม (Yb)</h3>
<img src="images/90.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Yb</p>
<p><strong>เลขอะตอม:</strong> 70</p>
<p><strong>มวลอะตอม:</strong> 173.04 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในการวิจัยทางฟิสิกส์และเครื่องมือในอุตสาหกรรมไฟฟ้า</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Yb + 3H<sub>2</sub>O → Yb(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Lutetium (Lu)
if (searchTerm === "lu") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุลูทีเทียม (Lu)</h3>
<img src="images/91.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Lu</p>
<p><strong>เลขอะตอม:</strong> 71</p>
<p><strong>มวลอะตอม:</strong> 174.966 u</p>
<p><strong>คุณสมบัติ:</strong> โลหะสีเงิน ใช้ในการวิจัยฟิสิกส์และการผลิตอุปกรณ์การแพทย์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Lu + 3H<sub>2</sub>O → Lu(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}
// Actinium (Ac)
if (searchTerm === "ac") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแอคทินีอัม (Ac)</h3>
<img src="images/92.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Ac</p>
<p><strong>เลขอะตอม:</strong> 89</p>
<p><strong>มวลอะตอม:</strong> 227 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในแหล่งพลังงานนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Ac + 3H<sub>2</sub>O → Ac(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Thorium (Th)
if (searchTerm === "th") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุธอเรียม (Th)</h3>
<p><strong>สัญลักษณ์:</strong> Th</p>
<p><strong>เลขอะตอม:</strong> 90</p>
<p><strong>มวลอะตอม:</strong> 232.038 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในแหล่งพลังงานนิวเคลียร์และหลอดไฟ</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Th + 3H<sub>2</sub>O → Th(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Protactinium (Pa)
if (searchTerm === "pa") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุโปรแทคทิเนียม (Pa)</h3>
<img src="images/93.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Pa</p>
<p><strong>เลขอะตอม:</strong> 91</p>
<p><strong>มวลอะตอม:</strong> 231.035 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในวิจัยทางนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Pa + 3H<sub>2</sub>O → Pa(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Uranium (U)
if (searchTerm === "u") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุยูเรเนียม (U)</h3>
<img src="images/94.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> U</p>
<p><strong>เลขอะตอม:</strong> 92</p>
<p><strong>มวลอะตอม:</strong> 238.028 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในพลังงานนิวเคลียร์และอาวุธนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>U + 2H<sub>2</sub>O → UO<sub>2</sub> + 2H<sub>2</sub></p>
`;
}

// Neptunium (Np)
if (searchTerm === "np") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุนีปทูเนียม (Np)</h3>
<img src="images/95.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Np</p>
<p><strong>เลขอะตอม:</strong> 93</p>
<p><strong>มวลอะตอม:</strong> 237 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในแหล่งพลังงานนิวเคลียร์และในการวิจัย</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Np + 3H<sub>2</sub>O → Np(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Plutonium (Pu)
if (searchTerm === "pu") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุพลูโทเนียม (Pu)</h3>
<img src="images/96.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Pu</p>
<p><strong>เลขอะตอม:</strong> 94</p>
<p><strong>มวลอะตอม:</strong> 244 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในพลังงานนิวเคลียร์และอาวุธนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Pu + 3H<sub>2</sub>O → Pu(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Americium (Am)
if (searchTerm === "am") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุอเมอริเซียม (Am)</h3>

<p><strong>สัญลักษณ์:</strong> Am</p>
<p><strong>เลขอะตอม:</strong> 95</p>
<p><strong>มวลอะตอม:</strong> 243 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในเครื่องตรวจจับควัน</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Am + 3H<sub>2</sub>O → Am(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Curium (Cm)
if (searchTerm === "cm") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุคูเรียม (Cm)</h3>
<img src="images/97.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Cm</p>
<p><strong>เลขอะตอม:</strong> 96</p>
<p><strong>มวลอะตอม:</strong> 247 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในการวิจัยนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Cm + 3H<sub>2</sub>O → Cm(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Berkelium (Bk)
if (searchTerm === "bk") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเบอร์เคเลียม (Bk)</h3>
<p><strong>สัญลักษณ์:</strong> Bk</p>
<p><strong>เลขอะตอม:</strong> 97</p>
<p><strong>มวลอะตอม:</strong> 247 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในการวิจัยนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Bk + 3H<sub>2</sub>O → Bk(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Californium (Cf)
if (searchTerm === "cf") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุแคลิฟอร์เนียม (Cf)</h3>
<p><strong>สัญลักษณ์:</strong> Cf</p>
<p><strong>เลขอะตอม:</strong> 98</p>
<p><strong>มวลอะตอม:</strong> 251 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในอุปกรณ์นิวเคลียร์และการตรวจจับสารเคมี</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Cf + 3H<sub>2</sub>O → Cf(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Einsteinium (Es)
if (searchTerm === "es") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุไอน์สไตนียม (Es)</h3>
<p><strong>สัญลักษณ์:</strong> Es</p>
<p><strong>เลขอะตอม:</strong> 99</p>
<p><strong>มวลอะตอม:</strong> 252 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในงานวิจัยทางนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Es + 3H<sub>2</sub>O → Es(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Fermium (Fm)
if (searchTerm === "fm") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเฟอร์เมียม (Fm)</h3>
<p><strong>สัญลักษณ์:</strong> Fm</p>
<p><strong>เลขอะตอม:</strong> 100</p>
<p><strong>มวลอะตอม:</strong> 257 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในการวิจัยฟิสิกส์และนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Fm + 3H<sub>2</sub>O → Fm(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Mendelevium (Md)
if (searchTerm === "md") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุเมนเดลีเวียม (Md)</h3>
<img src="images/98.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Md</p>
<p><strong>เลขอะตอม:</strong> 101</p>
<p><strong>มวลอะตอม:</strong> 258 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในการวิจัยนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Md + 3H<sub>2</sub>O → Md(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Nobelium (No)
if (searchTerm === "no") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุนอบีเลียม (No)</h3>
<img src="images/99.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> No</p>
<p><strong>เลขอะตอม:</strong> 102</p>
<p><strong>มวลอะตอม:</strong> 259 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในการวิจัยนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>No + 3H<sub>2</sub>O → No(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}

// Lawrencium (Lr)
if (searchTerm === "lr") {
result += `
<h3>ข้อมูลเกี่ยวกับธาตุลอว์เรนเซียม (Lr)</h3>
<img src="images/100.jpg" alt="เบริลเลียม" width="200">
<p><strong>สัญลักษณ์:</strong> Lr</p>
<p><strong>เลขอะตอม:</strong> 103</p>
<p><strong>มวลอะตอม:</strong> 262 u</p>
<p><strong>คุณสมบัติ:</strong> ธาตุกัมมันตรังสี ใช้ในการวิจัยทางนิวเคลียร์</p>
<p><strong>🔹 การทำปฏิกิริยากับน้ำ:</strong></p>
<p>Lr + 3H<sub>2</sub>O → Lr(OH)<sub>3</sub> + 3H<sub>2</sub></p>
`;
}