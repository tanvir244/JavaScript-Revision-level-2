
// problem - 2
const friendsArr = ['Saad', 'Zubayer', 'Mashrafee', 'Maruf', 'Tahsin', 'Shibly'];
let evenLengthName = [];

const evenLengthChecker = () => {
    for(const friends of friendsArr){
        const friend = [...friends];
        let countIteration;
        for(let i = 0; i <= friend.length; i++){
            countIteration = i;
        }
        if(countIteration % 2 === 0){
            evenLengthName.push(friends);
        }
    }
}
evenLengthChecker();
console.log(evenLengthName);


