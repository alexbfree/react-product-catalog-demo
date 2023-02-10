# react-product-catalog-demo

A simple product catalogue / store front end demo using React and MaterialUI 4 - created for a job application.

**Documentation links**:

- [The Assignment](#the-assignment)
- [Installation Instructions](#installation-instructions)
- [Functionality Overview](#functionality-overview)
- [Personal Reflection / Context](#personal-reflection--context)
- [Known Limitations](#known-limitations)
- [Next Steps/Areas for Improvememt](#next-steps--areas-for-improvement)

----
## The Assignment

Please create an app that can display a list of items, price, and discount, and let users add products to a basket and see the total price with discounts applied.

The app should:

- Load the list of products from an API
- Display the list of products in a page which uses a JavaScript based UI library
- Let the user add products to a basket
- Calculate the total cost of the basket, including discounts – the price calculation should be done server-side 
- Have a facility for users to remove items from the basket / update quantity
 
Optional: 

- Have some Material-UI v4 components 
- The site should have a consistent and cohesive brand

The API can use whatever technology you choose, but node.js is preferred.
You can hard code the products into the API or use a json file, whichever you prefer.

----

## Installation Instructions

To install the full functionality version:

1. Download the zip file from the `version-with-discounts` branch [here](https://github.com/alexbfree/react-product-catalog-demo/archive/refs/heads/version-with-discounts.zip)
2. Unzip the zipfile
3. Open the `index.html` file in the root directory in your web browser. This uses bundled Webpack files in the `dist` directory to load the site; since all code is client-side no running server is required.

----

# Checking out and inspecting the code

This repository contains the code I have written for this coding task. There are two branches, with code at different levels, both are fully functional and can be code-inspected:

- [`main` branch](https://github.com/alexbfree/react-product-catalog-demo/tree/main) : This version includes all the functionality except the discounts functionality, and is the preferred version for you to inspect the code.
- [`version-with-discounts` branch](https://github.com/alexbfree/react-product-catalog-demo/tree/version-with-discounts): This version is a more advanced version which includes the discounts functionality, but remains unmerged because in my view it overcomplicates the code, and in a real scenario I would refactor and redesign this functionality before merging into main/production code, which time did not allow in this case.

## To inspect and use the simple version (preferred for code reading):

```
git clone https://github.com/alexbfree/react-product-catalog-demo.git
cd react-product-catalog-demo
git checkout main
git pull
npm install
npm start
```
Then visit http://localhost:8080/ in your browser.

## To inspect and use the advanced version (preferred for testing the maximal feature set):

```
git clone https://github.com/alexbfree/react-product-catalog-demo.git
cd react-product-catalog-demo
git checkout version-with-discounts
git pull
npm install
npm start
```
Then visit http://localhost:8080/ in your browser.

On both branches, code can be rebuilt into the `dist` directory using `npm run build`.

----
## Functionality Overview

The following capabilities are available:

- Browse a list of products (scroll vertically using mouse wheel or scroll bar)
- Click a product to view a modal popup with description and info. 
- Close product info popup with X button or click outside modal.
- View number of items in basket from homepate
- Add to basket from homepage by clicking +/basket button - basket opens automatically
- Click `View Basket` button to view contents of basket in detail, including unit prices, quantity, subtotal and total in a modal popup. 
- Close basket popup with X button or click outside modal.
- Modify quantity of an item in basket by using the dropdown - subtotals and total are updated.
- Remove an item from basket by setting its quantity to `0`.
- Empty basket in one click using `Empty Basket` button.
- (Advanced version only) Be notified about the potential to qualify for discount DVDs if basket total goes above £50.
- (Advanced version only) When basket total is above £50 and no DVDs are in basket, message encouraging user to add DVDs for instant discount.
- (Advanced version only) When basket total is over £50 all DVDs in basket are reduced in price by 15%. Original and discounted price are shown, and subtotal and basket total are updated accordingly to take account of the discount.
- Mockup checkout button shows where checkout facility would be - button does nothing.
- Responsive UI - shrink the screen and it resizes without messing up the interface. (caveat - not perfect, some left-right scrolling required in basket on v narrow screens in portrait mode)
- Using a local font from Google Fonts - Raleway (bundled locally)

**Important note:** Due to limited time, I did not build a REST API to serve up the products data, per the first requirement. Instead I am serving it up within a JS file in the client, which is viable for sample code like this but not for a real-life situation; the implications of this choice are discussed further below.

----
## Personal Reflection / Context

(to be written)

----
## Known Limitations


(to be written)

----

## Next Steps / Areas for Improvement

(to be written)

----


