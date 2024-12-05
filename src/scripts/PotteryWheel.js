let item = 1;

export const makePottery = (shape, weight, height) => 
     ({
        shape,
        weight,
        height,
        id: item++
    });