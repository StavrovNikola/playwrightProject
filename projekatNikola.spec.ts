
import { test, expect } from '@playwright/test';

test.describe('Checkout Flow Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://rs.shop.xyz.fashion/');
  });

  test('Adding product to cart', async ({ page }) => {
  await page.getByRole('button', { name: 'Prihvati sve' }).click();
  await page.locator('.banner-item.banner-2868 > a').first().click();
  await expect(page.getByLabel('Brendovi').locator('span')).toContainText('Brendovi');
  await page.getByRole('link', { name: 'Marciano by Guess' }).click();
  await page.waitForTimeout(3500);
  await expect(page.getByLabel('Marciano by Guess').locator('span')).toContainText('Marciano by Guess');
  await expect(page.locator('#maincontent')).toContainText('Brend Marciano, kao deo Guess porodice, predstavlja sinonim za sofisticiranost i luksuz. Poznat po prefinjenim krojevima i modernim detaljima, Marciano kombinuje eleganciju sa smelim stilskim izrazom. Od glamuroznih haljina do besprekorno dizajniranih odela, svaki komad iz kolekcije odiše samopouzdanjem i prestižom. Otkrijte Marciano komade na našem sajtu i unesite dozu glamura u svoj garderober.');
  await page.getByLabel('Sortiraj po').selectOption('/rs/brendovi/guess/filter/product_list_order:price,asc/');
  await expect(page.locator('#maincontent')).toContainText('Marciano - Crna ženska majica 7.190,00 RSD');
  await page.getByRole('link', { name: 'Marciano - Crna ženska majica Marciano - Crna ženska majica' }).click();
  await expect(page.locator('#maincontent')).toContainText('Marciano - Crna ženska majica 7.190,00 RSD Marciano by Guess Candy slim fit, pamučna majica kratkih rukava VeličinaXSSMLXBojaCrnaCrnaX Poslednji komadi Količina - + Dodajte u korpu Molimo sačekajte dok proverimo dostupnost Find in-store Ovaj proizvod je dostupan samo online Raspoloživo Dostupno u više boja');
  await page.getByRole('button', { name: 'Dodajte u korpu' }).click();
  await page.getByRole('button', { name: 'Dodajte u korpu' }).click();
  await page.getByRole('option', { name: 'M' }).click();
  await page.getByRole('button', { name: 'Dodajte u korpu' }).click();
  await expect(page.locator('#maincontent')).toContainText('Marciano - Crna ženska majica je dodat u korpu za kupovinu');
  await page.getByRole('link', { name: '1', exact: true }).click();
  await expect(page.locator('#minicart-content-wrapper')).toContainText('Ukupno: 7.190,00 RSD Idite na korpu Naplata');
  await page.getByRole('button', { name: 'Naplata' }).click();
  await expect(page.locator('#html-body')).toContainText('Zatvorite Platite kao nov kupac Kreirajte korisnički nalog Platite koristeći svoj nalog Email adresa Lozinka Prijava Zaboravili ste lozinku?');
  await page.getByRole('button', { name: 'x Zatvorite' }).click();
  });

  test('Accepting coockies', async ({ page }) => {
    await page.getByText('Marketing').click();
    await page.getByLabel('Cenimo vašu privatnost!').getByText('Ostalo').click();
    await page.getByText('Social media').click();
    await page.getByRole('button', { name: 'Sačuvaj + izađi' }).click();
  });

  test('Asserting front page text', async ({ page }) => {
    await page.getByRole('button', { name: 'Prihvati sve' }).click();
    await expect(page.locator('#ui-id-2')).toContainText('Žene');
    await expect(page.locator('#ui-id-4')).toContainText('Muškarci');
    await expect(page.locator('#footer_block_newsletter_top')).toContainText('Prijava na newsletter');
    await expect(page.locator('#footer_block_newsletter_top')).toContainText('Ostavi nam svoj email i budi u toku sa XYZ dešavanjima!');
    await expect(page.locator('#footer_contact_us')).toContainText('XYZ Facebook XYZ Instagram Bulevar Mihajla Pupina 115b,11070 Novi Beograd support.rs@xyzfashionstore.com +381 11 3532 478 Radnim danima 09:00-17:00h');
    await expect(page.locator('#footer_block_categories')).toContainText('Kategorije Muškarci Žene');
    await expect(page.locator('#footer_block_infomation')).toContainText('Informacije O nama Politika privatnosti Politika kolačića Prodajna mesta Kontakt Privilege');
    await expect(page.locator('#footer_block_quick_link')).toContainText('O prodavnici Opšti uslovi Naručivanje i plaćanje Odustanak od kupovine Reklamacije Najčešća pitanja');
    await expect(page.locator('#footer_block_instagram')).toContainText('Instagram Feed');
    await expect(page.locator('#html-body')).toContainText('© Fashion Company . Sva prava zadržana. Powered by Syncit Group.');
  });

  test('Man looking for t-shirt', async ({ page }) => {
    await page.getByRole('button', { name: 'Prihvati sve' }).click();
    await page.getByRole('menuitem', { name: 'Muškarci' }).click();
    await page.getByRole('heading', { name: 'FEDELI', exact: true }).click();
    await page.getByTitle('Detaljnije: Scotch&Soda brend').click();
    await expect(page.locator('#maincontent')).toContainText('Renomirani italijanski brend Fedeli, osnovan 1934., sinonim je za besprekornu izradu i prefinjenost. Kroz dugu istoriju, brend je ostao veran svojoj tradiciji vrhunske krojačke veštine, pružajući svojim kupcima proizvode koji spajaju inovaciju i beskompromisni kvalitet. Svaka kolekcija je pažljivo dizajnirana kako bi zadovoljila najviše standarde, čineći Fedeli idealnim izborom za one koji traže sofisticiranost i eleganciju u svakom detalju.');
    await page.getByLabel('Sortiraj po').selectOption('/rs/brendovi/fedeli/filter/pol:muskarci/product_list_order:price_asc/');
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Fedeli - Crna muška majica Fedeli - Crna muška majica' }).click();
  });

  test('Versace collection', async ({ page }) => {
    await page.goto('https://xyzfashionstore.com/rs/');
    await page.getByRole('button', { name: 'Prihvati sve' }).click();
    await page.locator('.banner-item.banner-2868 > a').first().click();
    await page.getByRole('img', { name: 'Versace Jeans Couture' }).click();
    await page.getByLabel('Versace Jeans Couture').getByText('Versace Jeans Couture').click();
    await page.locator('.columns').click();
  });

  test('Creating account privacy policy', async ({ page }) => {
    await page.getByRole('button', { name: 'Prihvati sve' }).click();
    await page.locator('div:nth-child(5) > .product.product-item > .product-item-info > .product-top > .product').first().click();
    await expect(page.locator('#maincontent')).toContainText('Boggi Milano - Muški šorts za kupanje');
    await expect(page.locator('#maincontent')).toContainText('11.990,00 RSD');
    await page.getByRole('option', { name: 'M' }).click();
    await page.getByRole('button', { name: 'Dodajte u korpu' }).click();
    await page.getByRole('link', { name: '1', exact: true }).click();
    await page.getByRole('link', { name: 'Idite na korpu' }).click();
    await expect(page.locator('#cart-totals')).toContainText('Ukupno Ukupno 11.990,00 RSD Dostava (City Express - Dostava) 350,00 RSD Ukupno sa PDV-om 12.340,00 RSD ukupno');
    await page.getByRole('paragraph').filter({ hasText: 'Da li imate nalog?' }).locator('span').click();
    await page.getByRole('button', { name: 'Nastavite na plaćanje' }).click();
    await page.getByRole('link', { name: 'Kreirajte korisnički nalog' }).click();
    await page.getByRole('textbox', { name: 'Ime*', exact: true }).click();
    await page.getByRole('textbox', { name: 'Ime*', exact: true }).fill('Test');
    await page.getByRole('textbox', { name: 'Prezime*' }).click();
    await page.getByRole('textbox', { name: 'Prezime*' }).fill('Test123');
    await page.getByRole('textbox', { name: 'email*' }).click();
    await page.getByRole('textbox', { name: 'email*' }).fill('mail@mail.com');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Pristajem na obaveštenja' }).click();
    const page1 = await page1Promise;
    await page.getByRole('checkbox', { name: 'Pristajem na obaveštenja' }).check();
    await page.getByRole('textbox', { name: 'Lozinka*' }).click();
    await page.getByRole('textbox', { name: 'Lozinka*' }).fill('123321123');
    await page.getByRole('textbox', { name: 'Potvrdite lozinku*' }).click();
    await page.getByRole('textbox', { name: 'Potvrdite lozinku*' }).fill('123321123');
    await page.getByRole('button', { name: 'Kreirajte korisnički nalog' }).click();
    await expect(page.locator('[id="amgdpr_agreement[privacy_checkbox]-error"]')).toContainText('Ovo je obavezno polje.');
    await expect(page.locator('[id="amgdpr_agreement[agree]-error"]')).toContainText('Ovo je obavezno polje.');
  });

  
});
