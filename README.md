# Background Remover

 Стильний та швидкий сервіс для **видалення фону з фото**.  
Фронтенд на **React**, бекенд на **FastAPI**, використовується **Rembg** для обробки зображень.

---

## Функціонал

- Завантаження фото через інтерфейс.
- Попередній перегляд оригінального зображення.
- Видалення фону та відображення результату.
- Скачування обробленого зображення.
- Перевірка стану бекенду через `/health`.

---

## Технології

### Frontend

- React + Hooks
- CSS glassmorphism + відео з блюром на фоні
- Сучасний та комфортний UI/UX

### Backend

- Python 3.11+
- FastAPI
- rembg (для видалення фону)
- Pillow (для роботи із зображеннями)
- CORS middleware для роботи з фронтендом
- Uvicorn (ASGI сервер)

---

## Як запустити проект
### Backend (FastAPI)
 ```bash
git clone <URL_REPOSITORY>
cd background-remover
cd backend
# Створення віртуального середовища
python -m venv env

# Активація (Windows)
source env/Scripts/activate

# Встановлення залежностей
pip install fastapi uvicorn rembg pillow
```
Запуск сервера:
```bash
python -m uvicorn api.main:app --reload
```

### Frontend (React)

Перейдіть у папку фронтенду:

```cd frontend```


Встановіть залежності:

```npm install```


Запустіть локально:

```npm run dev```

Переконайтесь, що API в App.jsx вказує на бекенд
