let string = "JavaScript";
let ans = "";
for(let i = 0; i<string.length; i++){
    let char = string[i];
    if(char === char.toUpperCase()){
        ans += char.toLowerCase();
    }
    else{
        ans += char.toUpperCase();
    }
}
console.log(ans);
