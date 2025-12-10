// script.js

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop(); 
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPageData = link.getAttribute('data-page');
        if (
            (linkHref && currentPath === linkHref.split('/').pop()) ||
            (linkPageData && currentPath.includes(linkPageData)) || 
            (currentPath === '' && linkHref === 'index.html') 
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); 
        }
    });

    const hamburger = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburger.classList.toggle('open'); 
        });

        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { 
                    mainNav.classList.remove('active');
                    hamburger.classList.remove('open');
                }
            });
        });
    }

    if (window.location.pathname.split('/').pop() === 'innovations.html') {
        const innovationsData = [
            {
                id: 1,
                title: 'Продукт Альфа',
                image: 'images/innovation_product1.jpg', 
                description: 'Краткое описание первого продукта. Он решает проблему X и приносит пользу Y.',
                price: '99$',
                category: 'Категория A'
            },
            {
                id: 2,
                title: 'Проект Бета',
                  image: 'images/innovation_product2.jpg',
                description: 'Описание второго проекта, который направлен на улучшение Z.',
                price: '199$',
                category: 'Категория B'
            },
            {
                id: 3,
                title: 'Технология Гамма',
                image: 'images/innovation_product3.jpg',
                description: 'Описание инновационной технологии, которая открывает новые возможности.',
                price: '499$',
                category: 'Категория C'
            },
            {
                id: 4,
                title: 'Решение Дельта',
                image: 'images/innovation_product4.jpg',
                description: 'Это решение помогает оптимизировать процессы и экономить ресурсы.',
                price: '299$',
                category: 'Категория A'
            },
            {
                id: 5,
                title: 'Разработка Эпсилон',
                image: 'images/innovation_product5.jpg',
                description: 'Новое приложение или сервис, который делает жизнь проще.',
                price: '149$',
                category: 'Категория D'
            },
             {
                id: 6,
                title: 'Продукт Дзета',
                image: 'images/innovation_product6.jpg',
                description: 'Еще один пример продукта, который демонстрирует последние достижения.',
                price: '89$',
                category: 'Категория B'
            }
        ];

        const innovationsGrid = document.querySelector('.innovations-grid');
        if (innovationsGrid) {
            innovationsData.forEach(item => {
                const innovationItem = document.createElement('div');
                innovationItem.className = 'innovation-item';

                innovationItem.innerHTML = `
                    <div class="item-image-wrapper">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="item-content">
                        <div class="item-title">${item.title}</div>
                        <div class="item-category">Категория: ${item.category}</div>
                        <div class="item-description">${item.description}</div>
                        <div class="item-price">${item.price}</div>
                        <a href="#" class="item-button">Подробнее</a>
                    </div>
                `;
                innovationsGrid.appendChild(innovationItem);
            });
        }
    }

});