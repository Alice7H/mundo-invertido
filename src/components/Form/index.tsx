import './styles.css';

export default function Form() {
  return (
    <section id="section-form" className="container">
      <h2>O Clube Dungeons & Dragons</h2>
      <p>
        Para deter Vecna, os heróis de Stranger Things também precisam de
        você. O Clube de D&D mais famoso de Hawkings está com vagas abertas
        para sua próxima aventura. Se você é destemido, gosta de desafios e
        não tem medo de rodar o D20, chegou a hora de se inscrever para fazer
        parte da nova campanha.
      </p>

      <div className="form-content">
        <h3>Entre para o clube de D&D e tenha experiências de <span>outro mundo</span></h3>

        <div className="form-container">
          <form id="formSubmitSubscriber">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" name="name" id="txtName" required />

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="txtEmail" required />

            <label htmlFor="level">Level</label>
            <input type="number" name="level" id="txtLevel" required />

            <label htmlFor="character">Personagem</label>
            <textarea name="character" cols={30} rows={10} id="txtCharacter" required></textarea>

            <button type="submit" id="btnSubscribe">Me inscrever</button>
          </form>
        </div>
      </div>
    </section>
  )
}
