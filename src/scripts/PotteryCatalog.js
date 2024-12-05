let sellPottery = [];

export const toSellOrNotToSell = (newItem) => {

    if (newItem.cracked === false) {
        if (newItem.weight >= 6) {
            newItem.price = 40;
        } else {
            newItem.price = 20;
        }
        sellPottery.push(newItem)
    }
    return newItem
};

export const usePottery = () => {
    return structuredClone(sellPottery)
};