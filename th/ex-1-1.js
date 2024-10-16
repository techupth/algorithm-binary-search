/* 
ให้เขียน Function ที่ชื่อว่า findNumberIndex ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ numbers และ targetNumber
        1. numbers เป็น Array ที่บรรจุตัวเลข
        2. targetNumber เป็น Number ที่บรรจุตัวเลขที่ต้องการค้นหา
    - Function นี้จะค้นหาว่า numbers มี targetNumber อยู่หรือไม่ และ Return ค่าออกมาดังนี้:
        - หากพบให้ Return หมายเลข Index ของ targetNumber
        - หากไม่พบให้ Return -1
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here

const sortedNumbers = [5, 12, 18, 23, 34, 45, 56, 67, 78, 89];
console.log(findNumberIndex(sortedNumbers, 67)); // 7
console.log(findNumberIndex(sortedNumbers, 10)); // -1
