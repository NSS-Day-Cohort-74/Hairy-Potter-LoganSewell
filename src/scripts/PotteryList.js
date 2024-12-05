import { usePottery } from "./PotteryCatalog.js"


export const PotteryList = () => {
    const potteryToSell = usePottery();
    
    let potteryHTML = '';

    for (const potteryItem of potteryToSell) {
        potteryHTML += `
            <section class="pottery" id="pottery--${potteryItem.id}">
                <h2 class="pottery__shape">${potteryItem.shape}</h2>
                <div class="pottery__properties">Item weighs ${potteryItem.weight} grams and is ${potteryItem.height} cm in height</div>
                <div class="pottery__price">Price is ${potteryItem.price}</div>
            </section>
            `;
    }
    return potteryHTML
};

export const renderPotteryToDOM = (potteryHTML) => {
    const potteryList = document.getElementById('potteryList');

    if (potteryList) {
        potteryList.innerHTML = potteryHTML;
    } else {
        console.error('Could not find element with id "potteryList"');
    }
};