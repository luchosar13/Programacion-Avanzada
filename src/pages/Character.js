import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {

    const id = getHash();
    const  resp= await getData(id);
    const character = resp[0];
    
    try {
        const view = `
            <div class="Character-inner">
                <article class="Character-card">
                    <h2>${character.name}</h2>
                </article>

                <article class="Character-details">
                    <h3>Percent Change 24h: ${character.percent_change_24h}</h3>
                    <h3>Percent Change 1h: $${character.percent_change_1h}</h3>
                    <h3>Percent Change 7d: ${character.percent_change_7d}</h3>
                    <h3>Price BTC: ${character.price_btc}</h3>
                    <h3>Market Cap USD: ${character.market_cap_usd}</h3>
                    <h3>Volume 24: ${character.volume24}</h3>
                    <h3>Volume 24 a: ${character.volume24a}</h3>
                    <h3>Csupply: ${character.csupply}</h3>
                    <h3>Tsupply: ${character.tsupply}</h3>
                    <h3>Msupply: ${character.msupply}</h3>
                </article>
            </div>
        `;
        
        return view;
    } catch (error) {
        console.error('Error:', error);
        return '<div>Error loading data.</div>';
    }
};

export default Character;