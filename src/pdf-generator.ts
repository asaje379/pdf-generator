import { PDFOptions, PaperFormat, executablePath } from 'puppeteer';
import puppeteer from 'puppeteer-core';

export type PrintPaperFormat = PaperFormat;
export type PrintPdfOptions = PDFOptions;

export interface PrintOptions {
  html: string;
  options?: PrintPdfOptions;
  executablePath?: string;
}

export async function generatePdf(args: PrintOptions) {
  console.log('[executable-path]:', executablePath());
  const browser = await puppeteer.launch({
    executablePath: args.executablePath ?? executablePath(),
  });
  const page = await browser.newPage();

  page.setContent(args.html, { waitUntil: 'domcontentloaded' });

  await page.emulateMediaType('screen');

  const pdf = await page.pdf(args.options);

  await browser.close();

  return pdf.buffer;
}
