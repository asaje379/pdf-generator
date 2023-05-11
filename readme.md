# pdf-generator

Easy pdf generator from HTML based on puppeteer.

## Installation

```sh
npm i @asaje/pdf-generator
```

or

```sh
yarn add @asaje/pdf-generator
```

## Usage

```ts
import { generatePdf, PrintPdfOptions } from '@asaje/pdf-generator';

async function generate(data: { html: string; options: PrintPdfOptions }) {
  const path = randomUUID() + '.pdf';
  const pdfBuffer = await generatePdf({
    html: data.html,
    options: { ...data.options, path },
  });
}
```
