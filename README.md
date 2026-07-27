# Автомобільні ключі — Тернопіль

Односторінковий сайт на Astro з чистими CSS і JavaScript.

## Запуск

```sh
npm install
npm run dev
```

Локальна адреса з урахуванням GitHub Pages base path:

```text
http://localhost:4321/key-car-house/
```

## Фотографії робіт

Додайте WebP-зображення у `public/images/work/` з назвами:

- `work-1.webp`
- `work-2.webp`
- `work-3.webp`
- `work-4.webp`

Якщо файлів немає, галерея автоматично показує акуратні заповнювачі.

## Публікація на GitHub Pages

Сайт налаштований для адреси:

```text
https://kostia-hospodarysko.github.io/key-car-house/
```

Публікація запускається автоматично після кожного push у гілку `main`.

Після першого push:

1. Відкрийте репозиторій на GitHub.
2. Перейдіть у **Settings → Pages**.
3. У секції **Build and deployment** виберіть **GitHub Actions** як джерело.
4. Відкрийте вкладку **Actions** і дочекайтеся завершення workflow
   **Deploy to GitHub Pages**.
5. Перейдіть за опублікованою адресою.

Workflow також можна запустити вручну через **Actions → Deploy to GitHub
Pages → Run workflow**.
