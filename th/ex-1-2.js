/* 
ให้เขียน Function ที่ชื่อว่า findTargetStudent ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ studentsInfo และ targetStudent
        1. studentsInfo เป็น Array ของ Object ที่บรรจุรายชื่อนักเรียน โดย Object แต่ละอันจะมี Key 4 ตัวได้แก่ name , age, classNumber และ favoriteSubject
        2. targetStudent เป็น String ที่บรรจุชื่อนักเรียนที่ต้องการค้นหา
    - Function นี้จะค้นหาว่า studentsInfo มี targetStudent อยู่หรือไม่ และ Return ค่าออกมาดังนี้:
        - หากพบให้ Return หมายเลข Index ของ targetStudent
        - หากไม่พบให้ Return -1
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here

function findTargetStudent(studentsInfo, targetStudent) {
  let left = 0;
  let right = studentsInfo.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (studentsInfo[mid].name === targetStudent) {
      return mid;
    } else if (studentsInfo[mid].name < targetStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const studentsInfo = [
  { name: "Alice", age: 14, classNumber: 8, favoriteSubject: "Math" },
  { name: "Bob", age: 13, classNumber: 7, favoriteSubject: "Science" },
  { name: "Charlie", age: 15, classNumber: 9, favoriteSubject: "History" },
  { name: "Diana", age: 14, classNumber: 8, favoriteSubject: "English" },
  { name: "Ethan", age: 13, classNumber: 7, favoriteSubject: "Art" },
];

console.log(findTargetStudent(studentsInfo, "Charlie")); // 2
console.log(findTargetStudent(studentsInfo, "Jenny")); // -1
