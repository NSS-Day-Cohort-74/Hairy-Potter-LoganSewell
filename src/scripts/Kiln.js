export const firePottery = (potteryItem, temperature) => {
    potteryItem.fired = true;

    potteryItem.cracked = temperature > 2200;

    return potteryItem
};