# react-product-catalog-demo

A simple product catalogue / store front end demo using React and MaterialUI 4 - created for a job application.

## Screenshot:

![screenshot](https://user-images.githubusercontent.com/1473244/218172327-364f6e58-d1f5-464b-b3f5-bf399577ef09.png)


## Documentation links:

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

To install the full functionality "advanced" version:

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
- (Advanced version only) When discounts have been applied in basket, user is notified of the total saving.
- Mockup checkout button shows where checkout facility would be - button does nothing.
- Responsive UI - shrink the screen and it resizes without messing up the interface. (caveat - not perfect, some left-right scrolling required in basket on v narrow screens in portrait mode)
- Using a local font from Google Fonts - Raleway (bundled locally)

**Important note:** Due to limited time, I did not build a REST API to serve up the products data, per the first requirement. Instead I am serving it up within a JS file in the client, which is viable for sample code like this but not for a real-life situation; the implications of this choice are discussed further below.

----
## Personal Reflection / Context

Coming into this task, I am an experienced web developer with ~10 years Javascript/node experience, but I had used material UI only for its icons, and only bug-fixed React code (at both Zooniverse and Hestia.ai), but had not written a React app from scratch. So for me this task was largely about learning how to build a React app, how to integrate Material UI 4 components, and using those with my existing web app development knowledge to build a functional app that meet the functionality. As a web developer and software engineer I am often required to pick up new libraries and languages, this is a routine part of the job. Given the learning element, I did not take this task as an opportunity to "show off" in terms of design or perfect modular code design etc; I focused on functionality robustness. 

----
## Known Limitations

In this section I will review some of the known limitations / weaknesses in the code.

### 1. Client-side code only

The biggest limitation is created by my decision not to build the REST API. As well as meaning I didn't actually use node.js proper (ie. on the server-side), this necessitates hosting the product data and discount calculations on the client-side, which is a Really Bad Idea in real life, as product prices and discounts could easily be modified in browser to defraud the retailer. It would be important in a real implementation to ensure that all prices were returned from the server, and that all decisions and calculations about current offers and discounts would be handled on the server side, with the client side being strictly read only when it comes to product data, prices, and discounts. Only basket management would be handled locally, and when it came to actually buying products, the client would only pass product IDs - the server would handle the real charged basket pricing billed to the credit card - this would mean any client side modifications to pricing or discount code would have no effect on the transaction.

The choice to handle product information client side had implications on the code for discount calculations, leading to my choice to present two separate branches. Since the discount information is needed across multiple parts of the UI, the discount handling logic actually has become quite cumbersome. It would have been an option to move some of this logic out to a utility function, but since discount code should not really be on the client side anyway, I did not do this. So, the discount code is consolidated within the main product catalogue page. Which I don't like. Which is one of the reasons I left the discount code on a separate branch for now.

### 2. Remotely hosted product images not in my control

To save time, I used product images that are directly hosted by Amazon, and am accessing them via Amazon-hosted URLs (again, not something you would do in a real product situation - for both technical and copyright reasons). Implications of this are that if you view the app while offline, the images will not load, and if/when Amazon changes their URLs for these products, those products will no longer display properly in this app. Since this app is only needed for a few days, I'm crossing my fingers this will be fine.

### 3. No search, filtering, or pagination

Given I chose a limited product set of 30 products, I did not implement any pagination, searching or filtering capability. The products are presented in a static but random order.

### 4. No product categories, product ordering or product taxonomy

The products are a mixture of board games, computer games and DVDs - but are not categorised in any way, either in the data or in the UI. Normally we would expect products to have a category field, and then to offer this browsable taxonomy in the UI somehow (e.g. view only DVDs or only board games). As a workaround to their being no DVD category, I detect which products are eligible for discount simply by them starting with `"DVD:"`. Of course, this is susceptible to exploitation if the logic remains on clientside. With a proper server side products API this would not be needed. 

### 5. Messy CSS

I am aware that there is some redundancy in my CSS styling - both between classes, between components, and between the custom CSS file vs the React CSS component. I did not have time to consolidate this. Consolidating this into one place would also help with having a consistent layout and visual style, as mentioned below.

----

## Next Steps / Areas for Improvement

Here are some things I would tackle if I were developing this further.

### 1. Set up a REST API to serve product data, and create appropriate endpoints

I would create a REST API in node.js, which would run separately and be contacted by the web app code using AJAX calls to retrieve product data. This would include loading the thumbnail images from files stored within the server, and all pricing, discount calculations and basket totals would be handled entirely on the server, and be entirely read-only on the client side, to ensure prices cannot be modified though local Javascript manipulation. I would create custom endpoints such as:

  - `https://<myserver>/api/v1.0/products/list` which could take query parameters such as a product category, number of items to return, page number within results - if absent would return all
  - `https://<myserver>/api/v1.0/products/search` which could take a keyword string as well as number of items to return, page number within results
  - `https://<myserver>/api/v1.0/products/<product-id>` which would return a specific product ID's details
  - `https://<myserver>/api/v1.0/offers/list` which would return a list of any current discount rules in effect (for clientside display/promotion purposes only, as all calculations would be done serverside)

### 2. Consolidation of, and better standardisation of, CSS / layout design

As mentioned above, the CSS needs work. I did not design a consistent style, font size, borders, etc for the page, I just 'eyeballed it' for the purposes of this sample app and made sure there were no unsightly issues (e.g. if page is resized, number of products is different etc). I added some very rough changes to change the size of the modal shopping basket according to number of products - this can definitely be improved.

### 3. Cross browser and cross platform testing, and better mobile UI styling with media queries etc

I have not tested the product on multiple browsers or on multiple devices. (I developed on Brave/Chrome on macOS). In a normal product cycle this would be needed.

### 4. Adding better search, pagination, filtering and category navigation features

These would present a better user experience to the user, for any sizable catalogue of products. In this context of just 30 products, it was not needed.

### 5. Brand styling

I did the bare minimum when it came to branding, simply choosing a mock brand (Danube, instead of Amazon, picking a different big river!) and jokey strapline ('Small catalogue, small prices'). In a real situation, we would need to think about getting a graphic designer and/or marketers to come up with things like a logo, colour scheme, consistent font choices, layout style guide, etc. 

### 6. Better UI feedback when interacting with buttons

With more time, I would add briefly visible popup messages (probably using Material UI's `Snackbar` component) to notify the user when something has been done (e.g. `Item added to basket`, `Basket emptied`, `Quantity updated` etc.). This is particularly needed when adding to basket from the main page, as the change to the basket is not evident. For now, I circumvented this by opening the basket automatically when you add to basket from the main page. A better approach would be to temporarily change the add icon to something like a green tick, and popup a snack bar message for 2-3 seconds.

Something else I would do that is important, is make sure that during any slow operations (such as DB reads, API access, file loads etc), the mouse pointer temporarily changes to an hourglass pointer, so that the system does not appear unresponsive when you click and things don't happen straight away.

## 7. General code cleanup and commenting

I didn't spend as long as I normally would on commenting and cleaning up code. It's quite possible I've left some debug code somewhere or not properly commented certain methods. With more time, I would do a thorough review, ensure no debug statements in the code, and ensure all methods are documented in a consistent format.

## 8. User management, translation, checkout, user reviews, ratings, etc

These are just some of the features that would likely be needed to deliver a complete shopping cart experience. Not to mention the backend payment processing and order delivery/stock management logistics.

----


