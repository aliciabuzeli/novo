import css from './CardRecomendacoes.module.css'

export default function CardRecomendacoes({imagem, nome, subtitulo}) {
    return(
        <div className={css.card}>
            <div className={css.topo}>
                <img src={imagem} alt="logo" className={css.logo} />
                <div>
                    <h2 className={css.nome}>{nome}</h2>
                    <p className={css.subtitulo}>{subtitulo}</p>
                </div>
            </div>
        </div>
    )
}