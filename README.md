# MyVinyl -- A Record Collection App

### [Live App](https://colekins.github.io/myvinyl/) | [Deployed API](https://gentle-fjord-76168.herokuapp.com/) | [API Repository](https://github.com/colekins/myvinyl_api)

MyVinyl is an app for music fans and record collectors. It allows users to digitally store their record collections. Once a record is added to your collection, users are able to add their notes on the release, which can be altered at anytime. The app also works with the [Last.fm API](https://www.last.fm/api) to automatically populate album covers for all entries in the user's collection. This capability relies on the user entering valid data into the album title and artist fields.

## Technologies

- HTML
- CSS/SASS
- Bootstrap
- Javascript
- jQuery
- AJAX
- Handlebars
- Ruby on Rails
- last.fm API
- Heroku/Github Pages

## Planning

### User Stories
- As a user, I want to store and categorize my music collection.
- As a user, I want to be able to securely log in and out.
- As a user, I would like to store notes or ratings for specific records.
- As a user, I would like to see the album art of the records in my collection.
- As a user, I would like to share my music collection with others.

### Wireframes & ERD

- [Wireframes](https://i.imgur.com/Au76j7m.jpg)
- [Entity Relationship Diagram](https://i.imgur.com/CUu7krU.jpg)

## Development
After high-level planning and project set-up, I began development on the API side. Working methodically through this portion was crucial, as it would be laying the groundwork for the rest of my project. I made sure to work slowly and deliberately in this stage so that I could make sure I was setting myself up for success down the road. I made sure to test all authentication and resource endpoints using CURL scripts. Once I was sure that all routes were functioning for both my 'users' and 'albums' models, I was able to create the 'one to many' relationship between them.

For the front-end, I tried to rely on bootstrap's column system as much as possible to keep the design clean and responsive. Bootstrap's panel classes ended up being a good tool to display my resources. I ultimately was able to integrate those into my handlebars templates so that the app would update dynamically. Creating and testing the AJAX calls and corresponding front-end updates took quite a bit of time. Again during this phase it was important to work slowly and methodically, tackling one issue at a time. I worked through all my API actions one at a time: Create, Get, Delete, and then Update.

After reaching the point of meeting the project's basic requirements, I decided to shift my focus on integrating a third party API. A big goal of mine was to integrate album covers into the front-end dynamically. I used bootstrap panels to display my resources in a clean grid for this very reason. Ultimately I found an npm package that integrated with last.fm's API. With a few custom edits to their script, I was finally able to successfully integrate its functionality into my front end. Upon user sign-in, or upon the creation of a new album resource, the app fetches the album art URL and creates a new image element within seconds. I was really pleased to have this feature integrated, after working on it for the better part of my weekend.

### Goals for Future Versions
- More album info (potentially populated from the same API)
- Sorting options
- Sharing capabilities
- Better mobile responsiveness
