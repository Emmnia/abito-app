import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export const Product = () => {
  const { products } = useOutletContext();
  const { id } = useParams();
  const findProduct = products.find((p) => p.id === +id);

  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          {findProduct ? (
            <div className="content-product">
              <div className="content-product__left">
                <h2 className="content-product__title">{findProduct.title}</h2>
                <img
                  className="content-product__img"
                  src={findProduct.img}
                  alt="scooter"
                />
                <p className="content-product__text">
                  {findProduct.description}
                </p>
              </div>
              <div className="content-product__right">
                <h2 className="content-product__price">{findProduct.price}</h2>
                <button className="btn btn-primary content-product__button">
                  Показать телефон
                </button>
              </div>
            </div>
          ) : (
            <h2 className="content-product__title">Такого товара нет</h2>
          )}

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
