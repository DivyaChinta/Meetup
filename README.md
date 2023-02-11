The goal of this coding exam is to quickly get you off the ground with **React Context**.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/meetup-output-v0.gif" alt="meetup" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Home Route</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/meetup-lg-home-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home Registered View](https://assets.ccbp.in/frontend/content/react-js/meetup-lg-home-registered-output.png)

</details>

<details>
<summary>Register Route</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Register](https://assets.ccbp.in/frontend/content/react-js/meetup-lg-register-output-.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Register Failure](https://assets.ccbp.in/frontend/content/react-js/meetup-lg-register-error-output.png)

</details>

<details>
<summary>Not Found Route</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/meetup-lg-not-found-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- **Home Route**
  - Initially, when the **Register** button in the Home Route is clicked, then the page should be navigated to Register Route
  - When the **Register Now** button in the Register Route is clicked, then the input name and selected topic in the Register Route should be displayed in the Home Route

- **Register Route**

  - Initially, the value in the input element should be empty and the selected value in the select element should be the first item in the given **topicsList**
  - When the **Register Now** button is clicked with an empty input value, then the respective error message should be displayed and page should not be navigated to Home Route
  - When the values are provided for both the input and select elements and the **Register Now** button is clicked, then the page should be navigated to Home Route

- **Not Found Route**
  - When a random path is provided as the URL, then the page should be navigated to the Not Found Route
- Use `styled-components` for styling elements
- The `App` component is provided with **topicsList**. It consists of a list of topic objects with the following properties in each topic object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |     id      |  String   |
  | displayText |  String   |


</details>


### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

 - Home Route should consist of `/` in the URL path
 - Register Route should consist of `/register` in the URL path

</details>

### Resources

<details>
<summary>Image URLs</summary>

 - [https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png](https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png) alt should be **website logo**
 - [https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png](https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png) alt should be **website register**
 - [https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png](https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png) alt should be **meetup**
 - [https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png](https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png) alt should be **not found**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #334155; width: 150px; padding: 10px; color: black">Hex: #334155</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: black">Hex: #475569</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: black">Hex: #3b82f6</div>
<div style="background-color: #2563eb; width: 150px; padding: 10px; color: black">Hex: #2563eb</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: black">Hex: #64748b</div>
<div style="background-color: #7b8794; width: 150px; padding: 10px; color: black">Hex: #7b8794</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: black">Hex: #ff0b37</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
