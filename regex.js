const Coding = 
            'Coding is Love and everything i could of dream of, even tho sometimes its overwheelming, but i learn something and its that good things take a lot of efford to be achieved thus why i try to give my 100% everytime' 

const CodingRegex = /Love/gi;

let result = CodingRegex.test(Coding);

console.log(result);