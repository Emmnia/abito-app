import { useOutletContext } from "react-router-dom";
import { Card } from "../components/Card/Card";

export const Home = () => {
  const { products } = useOutletContext();

  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main__title">Рекомендации для вас</h2>
            <div className="content-main__list">
              {products.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  address={card.address}
                  date={card.date}
                  img={card.img}
                />
              ))}
            </div>
          </div>
          <div className="content-side">
            <h3 className="content-side__title">Сервисы и услуги</h3>
            <div className="content-side__list">
              <a href="#!" className="content-side__item">
                <img
                  className="content-side__item--img"
                  src="/image/delivery.svg"
                  alt="delivery"
                />
                <h5 className="content-side__item--title">Доставка</h5>
                <p className="content-side__item--desc">
                  Проверка при получении и возможность бесплатно вернуть товар
                </p>
              </a>
              <a href="#!" className="content-side__item">
                <img
                  className="content-side__item--img"
                  src="/image/sedan.svg"
                  alt="car"
                />
                <h5 className="content-side__item--title">Автотека</h5>
                <p className="content-side__item--desc">
                  Отчёт с историей авто: пробег, владельцы, сведения о залоге,
                  ДТП и ремонтах
                </p>
              </a>
              <a href="#!" className="content-side__item">
                <img
                  className="content-side__item--img"
                  src="/image/house.svg"
                  alt="house"
                />
                <h5 className="content-side__item--title">
                  Онлайн-бронирование жилья
                </h5>
                <p className="content-side__item--desc">
                  Посуточная аренда квартир и домов: большой выбор вариантов для
                  поездок по России
                </p>
              </a>
            </div>
            <div className="content-side__footer">
              <p className="content-side__footer--item">
                © ООО «Абито», 2011–2021
              </p>
              <a href="#!" className="content-side__footer--item">
                Политика конфиденциальности
              </a>
              <a href="#!" className="content-side__footer--item">
                Обработка данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
