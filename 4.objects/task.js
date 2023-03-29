function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks = [...this.marks, ...marks];
    } 
}

Student.prototype.getAverage = function () {
  let avgMarks = 0;
  if (this.marks === undefined || this.marks.length === 0 ) {
    return avgMarks;
    } else {
      let sumMarks = (this.marks.reduce((acc, item) => acc + item, 0));
      avgMarks = sumMarks / this.marks.length;
  }
  return avgMarks;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
