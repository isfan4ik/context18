import React from 'react';

const App = () => {
  return (
    <>
  <div>
  <header>
    <div>
      <img className="img" src="./img/logo.png" alt />
    </div>
    <div>
      <button type="button" className="button_div">Каталог</button>
      <img className="menu" src="./img/menu.svg" alt />
      <div>
        <input className="inp" type="text" placeholder="Найти товар" />
      </div>
      <div>
        <img className="heart" src="./img/heart.svg" alt />
        <p className="Избранное">Избранное</p>
      </div>
      <div>
        <img className="pack" src="./img/pack.svg" alt />
        <p className="продукты">продукты</p>
      </div>
      <div>
        <img className="cart" src="./img/shopping-cart.svg" alt />
        <p className="hey">Корзина</p>
      </div>
      <div>
        <img className="usrr" src="./img/UserMenu.png" alt />
      </div>
    </div>
  </header>
  <main>
    <div className="div-1 container">
      <div className="card-div">
        <img src="./img/colbasa.png" alt />
        <p className="rubl">599,99 ₽</p>
        <p className="past">Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
        <img className="rating" src="./img/rating.png" alt />
        <button className="hls">В корзину</button>
      </div>
      <div className="card-div">
        <img src="./img/kltrkhd.png" alt />
        <p className="rubl">44,50 ₽</p>
        <p className="past">Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
        <img className="rating" src="./img/rating.png" alt />
        <button className="hls">В корзину</button>
      </div>
      <div className="card-div">
        <img src="./img/gost.png" alt />
        <p className="rubl">159,99 ₽</p>
        <p className="past">Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
        <img className="rating" src="./img/rating.png" alt />
        <button className="hls">В корзину</button>
      </div>
      <div className="card-div">
        <img src="./img/prosto.png" alt />
        <p className="rubl">49,39 ₽</p>
        <p className="past">Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
        <img className="rating" src="./img/rating.png" alt />
        <button className="hls">В корзину</button>
      </div>
      <div className="card-div">
        <img src="./img/ux.png" alt />
        <p className="rubl">77,99 ₽</p>
        <p className="past">Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
        <img className="rating" src="./img/rating.png" alt />
        <button className="hls">В корзину</button>
      </div>
      <div className="card-div">
        <img src="./img/gost.png" alt />
        <p className="rubl">159,99 ₽</p>
        <p className="past">Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
        <img className="rating" src="./img/rating.png" alt />
        <button className="hls">В корзину</button>
      </div>
      <div className="card-div">
        <img src="./img/colbasa.png" alt />
        <p className="rubl">599,99 ₽</p>
        <p className="past">Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
        <img className="rating" src="./img/rating.png" alt />
        <button className="hls">В корзину</button>
      </div>
      <div className="card-div">
        <img src="./img/prosto.png" alt />
        <p className="rubl">49,39 ₽</p>
        <p className="past">Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
        <img className="rating" src="./img/rating.png" alt />
        <button className="hls">В корзину</button>
      </div>
    </div>
    <img className="pagin" src="./img/pagination.png" alt />
  </main>
</div>

    </>
  )
}

export default App