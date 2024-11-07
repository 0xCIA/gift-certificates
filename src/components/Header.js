// src/components/Header.js
import React from 'react';
import '../style.css';
import logo from '../Logo-SY.svg';
const Header = () => {
  return (
    <>
      <header className="header-new">
        <div className="header-new__shadow-mask"></div>
        <div className="header-new__container">
          <div className="header-new__logo">
            <a href="https://sycret.ru/" className="custom-logo-link" rel="home" aria-current="page">
              <img width="153" height="40" src={logo} className="custom-logo" alt="Sycret CRM – ПО для управления и роста вашего бизнеса" />
            </a>
          </div>

          <div className="header-new__nav">
            <div className="menu-header-container">
              <ul>
                <li className="navigation-item">
                  <a href="https://sycret.ru/products/salon-krasoty">Салон красоты</a>
                </li>
                <li className="navigation-item">
                  <a href="https://sycret.ru/products/medtsentr">Медклиника</a>
                </li>
                <li className="navigation-item">
                  <a href="https://sycret.ru/products/stomatologiya">Стоматология</a>
                </li>
                <li className="navigation-item">
                  <a href="https://sycret.ru/prices/kategorii">Цены</a>
                </li>
                <li className="navigation-item">
                  <a href="https://sycret.ru/blog">Блог</a>
                </li>
                <li className="navigation-item">
                  <a href="https://sycret.ru/kontakty">Контакты</a>
                </li>
                <li className="navigation-item">
                  <a href="tel:+74993722231">+7 499 372-22-31</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-new__buttons">
            <div className="header-new__desctop">
              <div className="menu-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-container">
                <ul>
                  <li className="navigation-item">
                    <a href="https://sycret.ru/service/web/#/">Войти</a>
                  </li>
                  <li className="navigation-item">
                    <a href="https://sycret.ru/registraciya">Зарегистрироваться</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header-new__mobile">
              <span id="entry-menu"></span>
              <span id="nav-menu">
                <span className="line"></span>
              </span>
            </div>
          </div>
        </div>

        <div className="header-new__entry-menu">
          <div className="menu-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-container">
            <ul>
              <li className="navigation-item">
                <a href="https://sycret.ru/service/web/#/">Войти</a>
              </li>
              <li className="navigation-item">
                <a href="https://sycret.ru/registraciya">Зарегистрироваться</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-new__nav-menu">
          <div className="menu-header-container">
            <ul>
              <li className="navigation-item">
                <a href="https://sycret.ru/products/salon-krasoty">Салон красоты</a>
              </li>
              <li className="navigation-item">
                <a href="https://sycret.ru/products/medtsentr">Медклиника</a>
              </li>
              <li className="navigation-item">
                <a href="https://sycret.ru/products/stomatologiya">Стоматология</a>
              </li>
              <li className="navigation-item">
                <a href="https://sycret.ru/prices/kategorii">Цены</a>
              </li>
              <li className="navigation-item">
                <a href="https://sycret.ru/blog">Блог</a>
              </li>
              <li className="navigation-item">
                <a href="https://sycret.ru/kontakty">Контакты</a>
              </li>
              <li className="navigation-item">
                <a href="tel:+74993722231">+7 499 372-22-31</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
