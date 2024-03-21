# Assignment 4 - Working With The Camera

* Author: David Rodriguez
* Class: CS402 Section 1
* Semester: Spring 2024

## Overview

This is a camera mobile application that allows you to take, share, and delete pictures.

## Reflection

One of the most interesting parts of this project was developing the main `App.js` file similarly to how web development frameworks set up routers. This is because I separated the camera, gallery, and full-sized photo components into different modules, each with their own view. I used a `useState` to manage the "routing", called `view`. The code that checked the `view` was a simple boolean operator that mapped the `view` value with its appropriate module. I can see how this type of organization will be beneficial in collaborative projects.

The hardest part about this project was getting the `GalleryView.js` code to correctly render a list of photographs. There were many factors to consider such as the difference between clicking to select photographs and expand photographs. To fix this issue, I created a 'Select' button that communicated with a `useState` variable to notify the program when the user was in "selecting" mode. Towards the end of development, I also noticed that `VirtualList`s, the list type I was using for the gallery, can not render multiple columns. `FlatList`s, however, can render multiple columns by using the `numColumns` prop.

## Compiling and Using

Before compiling, make sure you have the following dependencies installed:

1. [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
2. [Expo Sharing](https://docs.expo.dev/versions/latest/sdk/sharing/)

Use one of the two following ways to compile and run the application:

1. Make sure Node.js and the [expo library](https://www.npmjs.com/package/expo) is installed in your machine as well as the *Expo Go* app on your mobile device. In the terminal, `cd` into the main directory and run `npx expo start`. With your mobile device, scan the given QR code to render the program on the Expo Go app.
2. Head to the [Expo snack](https://snack.expo.dev/) platform online and upload the source code files. This will render the application on the web-player on the right side of the screen.

The initial render displays your camera. You can flip the camera with the 'flip' button on the right, capture photos with centered circle button, and navigate to the gallery with the button on the left. The app will prompt you to enable your camera permissions in order to use the camera. 

Find all your taken photos in the gallery section. Tap on any thumbnail to expand the image. In the bottom, you can share your photo to you phone's gallery or to external applications using the 'Share' button. To go back to the gallery, click the 'Back' button in the top left corner. Similarly, you can use the same 'Back' button in the gallery to navigate back to your camera. In the gallery, you can also select and delete photos using the 'Select` and 'Delete' buttons, respectively. To stop selecting, click the 'Cancel' button in the top left corner.