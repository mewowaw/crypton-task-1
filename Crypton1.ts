interface Student{
    name: string; // Имя студента
    avgMark: number; // Средний балл студента
}

interface Statistics{
    avgMark: number; // Средняя оценка всех студентов
    highestMark: string; // Имя студента с самым высоким среднима баллом
    lowestMark: string; // Имя студента с самым низким средним баллом
}

function getStatistics(marks: Student[]): Statistics {
    var markCount = 0;
    var avgMark = 0;

    var highestMark = marks[0].name;
    var hMarkInt = marks[0].avgMark;

    var lowestMark = marks[0].name;
    var lMarkInt = marks[0].avgMark;

    for (let mark of marks){
        markCount+=1;
        avgMark += mark.avgMark;
        if (hMarkInt<mark.avgMark){
            hMarkInt = mark.avgMark;
            highestMark = mark.name;
        }
        if (lMarkInt>mark.avgMark){
            lMarkInt = mark.avgMark;
            lowestMark = mark.name;
        }
    }
    avgMark = avgMark / markCount;
    return {avgMark: avgMark, highestMark: highestMark, lowestMark: lowestMark};
}

const testMarks = [
    {
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }
]
console.log(getStatistics(testMarks))
