"use strict";


function twoSum(nums = [], target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }

    return null;
}


function main() {
    const nums = [3,7,8,15,0,1];
    const target = 9;

    console.log("toeSum: ", twoSum(nums, target));
}


// Execution
if (require.main === module) {
    try {
        main();
    }catch (e) {
        console.error("There was an error " + e);
    }
}