# build app download page

The easier way to build your app download page with webpack.

![screenshot](https://raw.github.com/joaner/build-app-download/master/screenshot.png)

## Start

Follow the steps below to create an APP download page

### 1. Clone repository

```bash
git clone https://github.com/joaner/build-app-download.git
```

### 2. Start editing

```bash
npm install
npm run dev
```

open the http://localhost:8080 then you can see the demo.

### 3. Customization

1. edit the `template/index.html` page, replacing titles and descriptions.
2. screenshots for your app, save to `template/imgs/screenshot.jpg`.
3. replace with the `.details > footer` content about you company.
4. fill the app download url to `.details > article > .downloads`.

You can customize anything!

### 4. Got!

```bash
npm run build
```

In the `dist` directory there is a static resource that webpack generates.

## Contributing

Reference design on the https://getbitesnap.com/, they do better.
