import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

(async () => {
  console.log('Script started');
  let browser;
  try {
    browser = await puppeteer.connect({
      browserURL: 'http://localhost:9222',
    });
    console.log('Connected to existing browser instance');
  } catch (error) {
    console.error('Failed to connect to browser:', error);
    return;
  }
  
  try {
    const page = await browser.newPage();
    console.log('Navigating to the Shopee flash sale page...');
    await page.goto('https://shopee.co.id/flash_sale', { waitUntil: 'networkidle2' });
    
    console.log('Waiting for flash sale items to load...');
    await page.waitForSelector('.zs1fUu');
    
    console.log('Clicking the first item "Beli" button...');
    const firstItemLink = await page.$('.sGJRNY a');
    await firstItemLink.click();
    
    console.log('Waiting for the item page to load...');
    await page.waitForSelector('.fnrLi4');
    
    console.log('Selecting the variant if available...');
    const variantButtons = await page.$$('.sApkZm.SkhBL1.selection-box-unselected');
    if (variantButtons.length > 0) {
      console.log('Selecting the first variant...');
      await variantButtons[0].click();
    } else {
      console.log('No variants available, skipping variant selection...');
    }
    
    console.log('Clicking "Beli Sekarang"...');
    await page.waitForSelector('button.btn.btn-solid-primary.btn--l.YuENex.eFAm_w');
    const beliSekarangButton = await page.$('button.btn.btn-solid-primary.btn--l.YuENex.eFAm_w');
    await page.evaluate(button => button.scrollIntoView(), beliSekarangButton);
    await beliSekarangButton.click();
    
    console.log('Waiting for the checkout page to load...');
    await page.waitForSelector('.yn6AIc');
    
    console.log('Clicking the "Checkout" button...');
    await page.click('.shopee-button-solid--primary');
    
    console.log('Waiting for the order confirmation page to load...');
    await page.waitForSelector('.yHG0SE');
    
    console.log('Clicking the "Buat Pesanan" button...');
    await page.click('.stardust-button--primary');
    
    console.log('Order placed successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await browser.disconnect();
  }
})();
