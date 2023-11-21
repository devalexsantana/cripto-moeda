import { useEffect, useState } from 'react';
import styles from './details.module.css';
import { useParams } from 'react-router-dom';

interface coinProps {

    name: string;
    delta_24h: string;
    price: string;
    symbol: string;
    volume_24h: string;
    market_cap: string;
    low_24h: string;
    high_24h: string;
    total_volume_24h: string;
    formatedPrice: string;
    formatedMarket: string;
    error?: string


}

export function Details() {
    const { cripto } = useParams();
    const [detail, setDetail] = useState<coinProps>();
    const [loading, setLoadgin] = useState(true);

    useEffect(() => {
        function getData() {
            fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=5ad51734f8020e33&pref=BRL&symbol=${cripto}`)
                .then(response => response.json())
                .then((data: coinProps) => {

                    setDetail(data);
                    setLoadgin(false);
                })
        }

        getData();

    }, [cripto])

    if (loading) {
        return (
            <div className={styles.container}>
                <h4 className={styles.center}>Carregando informacoes</h4>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.center}>Details {detail?.name}</h1>
            <p className={styles.center}>{detail?.symbol}</p>

            <section className={styles.content}>
                <p>
                    <strong>Preco:</strong> {detail?.price}
                </p>

                <p>
                    <strong>Delta 24h:</strong> 
                     <span className={detail?.delta_24h >= "0" ? styles.profit:styles.loss}>
                         {detail?.delta_24h}
                     </span>
                </p>

            </section>
        </div>
    )
}