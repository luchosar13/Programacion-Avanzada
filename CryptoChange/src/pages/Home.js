import getData from '../utils/getData';

const Home = async () => {
    try {
        const { data: cryptocurrencies } = await getData();

        const view = `
            <div class="Cryptocurrencies">
                ${cryptocurrencies.map(crypto => `
                    <article class="Crypto-item">
                        <a href="#/${crypto.id}/">
                            <h2>${crypto.name}</h2>
                            <p>Name: ${crypto.name}</p>
                            <p>Symbol: ${crypto.symbol}</p>
                            <p>Price: $${crypto.price_usd}</p>
                            <p>NameID: $${crypto.nameid}</p>
                            <p>Rank: $${crypto.rank}</p>
                        </a>
                    </article>
                `).join('')}
            </div>
        `;

        return view;
    } catch (error) {
        console.error('Error:', error);
        return '<div>Error loading data.</div>';
    }
};

export default Home;