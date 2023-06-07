import { AllCharacters } from "../types/allCharacters";

type PropsType = {
  item: AllCharacters;
  handleKill: (character: AllCharacters) => Promise<void>;
};

export function Card({ item, handleKill }: PropsType) {
  const renderDifferentClass = (item: AllCharacters) => {
    if ("rulingYears" in item) {
      return <li>Años de reinado: {item.rulingYears.toLocaleString()}</li>;
    }

    if ("weapon" in item) {
      return (
        <>
          <li>Arma: {item.weapon}</li>
          <li>Destreza: {item.skills.toLocaleString()}</li>
        </>
      );
    }

    if ("characterAdvised" in item) {
      return <li>Asesora a: {item.characterAdvised.name}</li>;
    }

    if ("knight" in item) {
      return (
        <>
          <li>Sirve a: {item.knight.name}</li>
          <li>Peloteo: {item.pelotismo.toLocaleString()}</li>
        </>
      );
    }
  };

  function handleClick() {
    handleKill(item);
  }

  return (
    <>
      <li className="character col">
        <div className="card character__card">
          <img
            src={`img/${item.name.toLowerCase()}.jpg`}
            alt={item.name}
            className="character__picture card-img-top"
          />
          <div className="card-body">
            <h2 className="character__name card-title h4">
              {item.name} {item.family}
            </h2>
            <div className="character__info">
              <ul className="list-unstyled">
                <li>Edad: {item.age}</li>
                <li>
                  Estado:
                  <i className="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div className="character__overlay">
              <ul className="list-unstyled">{renderDifferentClass(item)}</ul>
              <div className="character__actions">
                <button
                  data-id={item.name}
                  className="character__action btn speak"
                >
                  habla
                </button>
                <button
                  data-id={item.name}
                  className="character__action btn die"
                  onClick={handleClick}
                >
                  muere
                </button>
              </div>
            </div>
          </div>
          <i className={item.emoji}></i>
        </div>
      </li>
    </>
  );
}
