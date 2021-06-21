// 1> for one function exports

// const add = (a,b)=>{

// return a+b;
// }


// module.exports = add;

// 2> multiple file exports

const add = (a,b) => {
    return a+b
}

const sub = (a,b) =>{

    return a-b;
}

const name = "arif"

// module.exports.add = add;
// module.exports.sub = sub;

module.exports = {add , sub , name}