# Image Processing API

## Description

App is designed to handle image processing requests in an Express.js application. It accepts a query string with parameters for filename, width, and height, and returns a resized JPEG image based on the provided dimensions.

## Usage

Install library: `npm install`

Start app: `npm start`

To use api, make a GET request to the appropriate endpoint with the following query parameters:

-   `filename`: The name of the image file to be processed.
-   `width`: The desired width of the resized image.
-   `height`: The desired height of the resized image.

## Example

```typescript
// Sample request
GET http://localhost:3000/api/images?filename=vietnam&width=200&height=200
```
