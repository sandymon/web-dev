# Fan Club

## Description
Now that we have a basic understanding of HTML let's create a web page for our favorite music artist. We will use HTML to create the structure of the page and CSS to style it.

## Objectives
- Create a web page using HTML and CSS
- Use HTML to create the structure of the page
- Use CSS to style the page
- Connect multiple HTML files using hyperlinks
- Leverage the class and ID attributes to style elements
- Use the Chrome Developer Tools to inspect and debug a web page
- Use git to manage your code

## Step 0: Set Up Your Project
1. Open Visual Studio Code.
2. Create and open a new folder for your project. You can do this by clicking on the File menu and selecting Open Folder and using the New Folder button to add a folder to your Desktop or a folder of your choice. Save the new folder as `fan-club`. Confirm that the folder is open in Visual Studio Code by looking at the Explorer view on the left side of the window. The name of the folder should be at the top of the Explorer view. If it is not, click file and select Open Folder and navigate to the `fan-club` folder you created.
3. Create a new file called `index.html`. You can do this by clicking the New File button in the Explorer view and typing `index.html` in the file name box. 
4. Create a new file called `styles.css`. You can do this by clicking the New File button in the Explorer view and typing `styles.css` in the file name box.
5. Save both files.
6. Open a new terminal in Visual Studio Code by clicking on the Terminal menu and selecting New Terminal. This will open a terminal at the bottom of the window. You can use this terminal to run git commands.
7. Initialize a new git repository by typing `git init` in the terminal and pressing Enter. This will create a new git repository in the `fan-club` folder. A git repository is a place to store your code and track changes to it. The cycle of adding, committing, and pushing your code to a git repository is a common workflow for developers.
8. Add the files to the git repository you created by typing `git add .` and pressing Enter. This will add all the files in the `fan-club` folder to the git repository. You can see the files that were added by typing `git status` and pressing Enter. This will show you the files that have been added to the git repository and the files that have not been added. All the files in the `fan-club` folder should be green, which means they have been added to the git repository. Any new or modified files will be red, which means they have not been added to the git repository.
8. Create a new git commit by typing `git commit -m "Initial commit"` and pressing Enter. This will create a new commit with the message "Initial commit". Git commits are a way to save your work and track changes to your code. We will use git commits to save our work as we go through the class. Each commit should have a message that describes the changes you made. This will help you and others understand the changes you made to the code. This first commit is called the "Initial commit" because it is the first commit to the git repository with the initial code for the project. To test that the commit was successful, type `git status` and press Enter. You should see a message that says "nothing to commit, working tree clean". This means that Git is tracking the files in the folder but there are no changes to commit.

If you've made it this far send me a message in Slack with the message "I just made my first commit!". If you get stuck, ask for help in the #general channel with a screenshot so our group can help you troubleshoot.

## Step 1: Create the Structure of the Web Page
In this step, we will create the structure of the web page using HTML. We will use HTML tags to create the basic structure of the page, such as the header, main content, and footer. We will also use HTML tags to create links to other pages and images.

1. Open the `index.html` file in Visual Studio Code.
2. Add the following code to the `index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Favorite Music Artist</title>
  </head>
  <body>
      <h1>My Favorite Music Artist</h1>
  </body>
</html>
```

3. Save the file. 

Remember that HTML is written in tags, which are enclosed in angle brackets. Tags usually come in pairs, an opening tag and a closing tag. The closing tag has a forward slash before the tag name. In this code snippet, we have the basic structure of an HTML file. The `<!DOCTYPE html>` line tells the browser that this is an HTML5 document. The `<html>` tag is the root of the HTML document. The `<head>` tag contains meta-information about the HTML document, such as its title. The `<title>` tag sets the title of the page, which is displayed in the browser's title bar or tab. The `<body>` tag contains the content of the HTML document. The `<h1>` tag is a heading tag. There are six levels of headings in HTML, from `<h1>` to `<h6>`. The `<h1>` tag is the most important and the `<h6>` tag is the least important. The `<h1>` tag is often used for the main heading of the page.

4. Right-click anywhere in the `index.html` file and select "Open with Live Server". This will open a new tab in your web browser with the `index.html` file. If you see the text "My Favorite Music Artist" displayed on the page, congratulations! You have successfully created the structure of your web page. If you see an error, make sure you followed the instructions correctly and try again. If you still have trouble, ask for help.

5. Make sure to save your work by creating a new git commit in the terminal with the message "Added the structure of the root HTML page". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Added the structure of the root HTML page"` and press Enter to create a new commit with the message "Added the structure of the root HTML page".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".


## Step 2: Assignment: Add Content to the Web Page

In this step, we will add content to the web page using HTML. We will use HTML tags to add text, images, and links to the page.

1. Open the `index.html` file in Visual Studio Code.

2. Your Turn: Update your `h1` to say `Welcome to the _____ fan club` replacing the ______ with your favorite artist or show. Add an image of the artist or show underneath.

3. Save the file and give it a look in the browser. If you see the text "Welcome to the _____ fan club" and an image of your favorite artist or show displayed on the page, congratulations! You have successfully added content to your web page. If you see an error, make sure you followed the instructions correctly and try again. If you still have trouble, ask for help.

4. Make sure to save your work by creating a new git commit in the terminal with the message "Added content to the root HTML page". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Added heading and image to the root HTML page"` and press Enter to create a new commit with the message "Added content to the root HTML page".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 3: Create 3 New HTML Pages
In this step you will create 3 new HTML pages for your fan club website. You will create a page called `about.html` which should contain a description of the artist or show, a page called `hits.html` page for your perspective of this artist/show's top work, and a page called `join.html` where you will invite others to join the fan club.

1. Create a new file called `about.html`. You can do this by clicking the New File button in the Explorer view and typing `about.html` in the file name box.
2. Create a new file called `hits.html`. You can do this by clicking the New File button in the Explorer view and typing `hits.html` in the file name box.
3. Create a new file called `join.html`. You can do this by clicking the New File button in the Explorer view and typing `join.html` in the file name box.
4. Save all the files.

## Step 4: Add Content to the New HTML Pages
1. Open the `about.html` file in Visual Studio Code.
2. Add a description of the artist or show to the `about.html` file using HTML tags. You can use the `<p>` tag to create a paragraph of text. You can also use the `<img>` tag to add an image of the artist or show.
3. Save the file.
4. Open the `hits.html` file in Visual Studio Code.
5. Add a list of the artist or show's top work to the `hits.html` file using HTML tags. You can use the `<ul>` tag to create an unordered list and the `<li>` tag to create list items.
6. Save the file.
7. Open the `join.html` file in Visual Studio Code.
8. Add an invitation to join the fan club to the `join.html` file using HTML tags. You can use the `<p>` tag to create a paragraph of text and use the `form` tag to create a form for people to join the fan club. You can use the `input` tag to create input fields for the form and the `button` tag to create a button to submit the form. For now, you can use the `mailto` attribute to create a link to an email address where people can join the fan club. We will learn more about forms and how to submit them in a later class.
9. Save the file.
10. Make sure to save your work by creating a new git commit in the terminal with the message "Added content to the about, hits, and join HTML pages". Remember the steps to create a new git commit are:
    - Type `git status` it will show you the files that have been added to the git repository and the files that have not been added. Since we just created new files, you should see the new files in red, which means they have not been added to the git repository.
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Added content to the about, hits, and join HTML pages"` and press Enter to create a new commit with the message "Added content to the about, hits, and join HTML pages".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 5: Create a Navigation Menu
In this step, you will create a navigation menu for your fan club website. The navigation menu will contain links to the `index.html`, `about.html`, `hits.html`, and `join.html` pages.

1. Open the `index.html` file in Visual Studio Code.
2. Add the following code to the `index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Favorite Music Artist</title>
  </head>
  <body>
      <nav>
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="hits.html">Hits</a></li>
        <li><a href="join.html">Join</a></li>
      </ul>
    </nav>
          <h1>Welcome to the _____ fan club</h1>
          <img src="image.jpg" alt="Image of the artist or show">
  </body>
</html>
```

Now I know what you're thinking. This list of links looks nothing like a navigation menu. That's because we haven't added any CSS to style it yet. We will do that in the next step.

3. Save the file.

4. Make sure to save your work by creating a new git commit in the terminal with the message "Added a navigation menu to the root HTML page". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Added a navigation menu to the root HTML page"` and press Enter to create a new commit with the message "Added a navigation menu to the root HTML page".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 6: Style the Navigation Menu
In this step, you will style the navigation menu using CSS. You will use CSS to change the appearance of the navigation menu.

1. Open the `styles.css` file in Visual Studio Code.
2. Add the following code to the `styles.css` file:

```css
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
  text-align: center;
}

nav ul li {
  display: inline;
  margin: 0 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-size: 20px;
}
```
This code snippet uses CSS to style the navigation menu. Remember that CSS is used to style the appearance of HTML elements. CSS is written in rules, which are made up of selectors and declarations. Selectors are used to select the HTML elements you want to style, and declarations are used to set the style of the selected elements. Declarations are made up of properties and values. Properties are the style you want to change, and values are the new style you want to set. In this code snippet, we have three selectors: `nav ul`, `nav ul li`, and `nav ul li a`. Each selector selects a different part of the navigation menu and sets its style. Highlight over each selector in VS Code and it will show you what element will be targeted. 

The `nav ul` selector selects the unordered list inside the navigation menu. The `list-style-type` property sets the type of bullet point for the list items to none. The `padding` and `margin` properties set the padding and margin of the list to 0. The `background-color` property sets the background color of the list to #f2f2f2. The `text-align` property sets the text alignment of the list to center. The `nav ul li` selector selects the list items inside the navigation menu. The `display` property sets the display of the list items to inline. The `margin` property sets the margin of the list items to 0 on the top and bottom and 10 pixels on the left and right. The `nav ul li a` selector selects the links inside the list items. The `text-decoration` property sets the text decoration of the links to none. The `color` property sets the color of the links to #333. The `font-size` property sets the font size of the links to 20 pixels.


3. Save the file.

4. Make sure to save your work by creating a new git commit in the terminal with the message "Styled the navigation menu". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Styled the navigation menu"` and press Enter to create a new commit with the message "Styled the navigation menu".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 7: Connect our HTML page to our CSS file
1. Open the `index.html` file in Visual Studio Code.
2. Add the following code to the `index.html` head tag under the title tag:

```html
<link rel="stylesheet" href="styles.css">
```

This code snippet uses the `link` tag to connect the `index.html` file to the `styles.css` file. The `link` tag is used to link an external resource to an HTML document. In this case, we are linking the `styles.css` file to the `index.html` file. The `rel` attribute sets the relationship between the HTML document and the linked resource. The `href` attribute sets the URL of the linked resource. In this case, the URL is the `styles.css` file in the same folder as the `index.html` file.

3. Save the file. If you see the navigation menu change to a light gray color in the browser, congratulations! You have successfully connected the `index.html` file to the `styles.css` file. If you see an error, make sure you followed the instructions correctly and try again. If you still have trouble, ask for help.

4. Make sure to save your work by creating a new git commit in the terminal with the message "Connected the root HTML page to the CSS file". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Connected the root HTML page to the CSS file"` and press Enter to create a new commit with the message "Connected the root HTML page to the CSS file".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 8: Assignment: Style the Web Page
In this step, you will style the web page using CSS. You will use CSS to change the appearance of the web page.

1. Open the `styles.css` file in Visual Studio Code.
2. Add the following code to the `styles.css` file:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  color: #333;
  margin-top: 20px;
}


ul {
  text-align: center;
  color: #333;
  margin-top: 20px;
}

form {
  text-align: center;
  color: #333;
  margin-top: 20px;
}

input {
  margin: 10px;
}

button {
  margin: 10px;
}
```

This code snippet uses CSS to style the web page. It sets the font family of the body to Arial, sans-serif, the background color to #f2f2f2, the margin to 0, and the padding to 0. It sets the text alignment of the `h1`, `p`, `ul`, and `form` tags to center, the color to #333, and the margin top to 20 pixels. It sets the display of the `img` tag to block, the margin to 0 auto, the width to 50%, the height to auto, and the margin top and bottom to 20 pixels. It sets the margin of the `input` and `button` tags to 10 pixels. 

You can change the values of the properties to see how they affect the appearance of the web page. For example, you can change the font family to a different font, the background color to a different color, the margin to a different value, and the text alignment to a different value. You can also add new properties to style other parts of the web page, such as the links in the navigation menu or the form fields in the form. You can use the Chrome Developer Tools to inspect the web page and see how the styles are applied to the HTML elements.

3. Save the file. Take a look at your web page in the browser. If you see the text, images, and form fields change appearance, congratulations! You have successfully styled the web page. If you see an error, make sure you followed the instructions correctly and try again. If you still have trouble, ask for help.

4. Make sure to save your work by creating a new git commit in the terminal with the message "Styled the web page". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Styled the web page"` and press Enter to create a new commit with the message "Styled the web page".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 9: Assignment: Use the Class and ID Attributes to Style Elements

In this step, you will use the class and ID attributes to style elements using CSS. You will use the class attribute to style multiple elements and the ID attribute to style a single element.

1. Open the `index.html` file in Visual Studio Code.
2. Add the following code to the `index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Favorite Music Artist</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
      <nav>
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="hits.html">Hits</a></li>
        <li><a href="join.html">Join</a></li>
      </ul>
    </nav>
          <h1>Welcome to the _____ fan club</h1>
          <img src="image.jpg" alt="Image of the artist or show" class="image">
          <p class="description">This is a description of the artist or show.</p>
  </body>
</html>
```

This code snippet uses the class attribute to style the image and description of the artist or show. The class attribute is used to apply a class to an HTML element. Classes are used to style multiple elements with the same style. In this case, we are applying the `image` class to the image and the `description` class to the description. We will use the `image` class to style the image and the `description` class to style the description.

3. Open the `styles.css` file in Visual Studio Code.
4. Add the following code to the `styles.css` file:

```css
.image {
  display: block;
  margin: 0 auto;
  width: 50%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.description {
  text-align: center;
  color: #333;
  margin-top: 20px;
}
```

What we've done here is we've created a class called `image` and a class called `description` in the CSS file. We then used the `.` to target the class and apply the styles we want to the elements with that class. This is a great way to apply styles to multiple elements without having to write the same styles over and over again.

5. Save the file. Take a look at your web page in the browser. If you see the image and description change appearance, congratulations! You have successfully used the class attribute to style elements. If you see an error, make sure you followed the instructions correctly and try again. If you still have trouble, ask for help.

6. Make sure to save your work by creating a new git commit in the terminal with the message "Used the class attribute to style elements". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Used the class attribute to style elements"` and press Enter to create a new commit with the message "Used the class attribute to style elements".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 10: Assignment: Use the ID Attribute to Style an Element

In this step, you will use the ID attribute to style an element using CSS. You will use the ID attribute to style a single element.

1. Open the `index.html` file in Visual Studio Code.
2. Add the following code to the `index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Favorite Music Artist</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
      <nav>
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="hits.html">Hits</a></li>
        <li><a href="join.html">Join</a></li>
      </ul>
    </nav>
          <h1>Welcome to the _____ fan club</h1>
          <img src="image.jpg" alt="Image of the artist or show" class="image">
          <p class="description">This is a description of the artist or show.</p>
          <p id="join">Join the fan club by entering your email address below:</p>
          <form>
            <input type="email" placeholder="Enter your email address">
            <button type="submit">Join</button>
          </form>
  </body>
</html>
```

We added a new paragraph with the ID of `join` and a form with an input and a button. We will use the `join` ID to style the paragraph and the `input` and `button` tags to style the form.

3. Open the `styles.css` file in Visual Studio Code.
4. Add the following code to the `styles.css` file:

```css
#join {
  text-align: center;
  color: #333;
  margin-top: 20px;
}

input {
  margin: 10px;
}

button {
  margin: 10px;
}
```

This code snippet uses the ID attribute to style the paragraph and the form. The ID attribute is used to apply an ID to an HTML element. IDs are used to style a single element with a unique style. In this case, we are applying the `join` ID to the paragraph and the `input` and `button` tags to the form. By using the `#` we are targeting the ID and applying the styles we want to the elements with that ID. In this case we will be able to change that paragraph without affecting the other elements on the page.

5. Save the file. Take a look at your web page in the browser. If you see the paragraph and form change appearance, congratulations! You have successfully used the ID attribute to style an element. If you see an error, make sure you followed the instructions correctly and try again. If you still have trouble, ask for help.

6. Make sure to save your work by creating a new git commit in the terminal with the message "Used the ID attribute to style an element". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Used the ID attribute to style an element"` and press Enter to create a new commit with the message "Used the ID attribute to style an element".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 11: Connect the other HTML pages to the CSS file
1. Open the `about.html`, `hits.html`, and `join.html` files in Visual Studio Code.
2. Add the following code to the `head` tag of each file:

```html
<link rel="stylesheet" href="styles.css">
```

Because we want to apply the same styles to all of our pages, we can link the CSS file to each of them. This will allow us to make changes to the CSS file and have those changes apply to all of our pages.

Let's make sure we style our paragraphs and forms in the other pages as well. In the `about.html` file, give the paragraph a class of `description` and do the same in the `join.html` file. This way we can apply the same styles to the paragraphs in each of the pages.

In the `styles.css` file, add the following code to style the forms in the `index.html` and `join.html` files:


```css
form {
  text-align: center;
  color: #333;
  margin-top: 20px;
}
```

This code snippet uses the `form` tag to style the form. It sets the text alignment of the form to center, the color to #333, and the margin top to 20 pixels. This will style the form in the `index.html` and `join.html` files.

3. Save the files. Take a look at your web pages in the browser. If you see the text, images, and form fields change appearance, congratulations! You have successfully connected the other HTML pages to the CSS file. If you see an error, make sure you followed the instructions correctly and try again. If you still have trouble, ask for help.

4. Make sure to save your work by creating a new git commit in the terminal with the message "Connected the other HTML pages to the CSS file". Remember the steps to create a new git commit are:
    - Type `git add .` and press Enter to add the files to the git repository.
    - Type `git commit -m "Connected the other HTML pages to the CSS file"` and press Enter to create a new commit with the message "Connected the other HTML pages to the CSS file".
    - Type `git status` and press Enter to check that the commit was successful. You should see a message that says "nothing to commit, working tree clean".

## Step 12: Assignment: Use the Chrome Developer Tools to Inspect and Debug a Web Page

Open your web page in the browser and right-click on the page. Select "Inspect" from the context menu. This will open the Chrome Developer Tools. The Chrome Developer Tools are a set of web authoring and debugging tools built into Google Chrome. You can use the Chrome Developer Tools to inspect and debug a web page. You can use the Elements panel to inspect the HTML and CSS of the web page, the Console panel to log messages and run JavaScript, the Sources panel to debug JavaScript, the Network panel to inspect network activity, the Performance panel to analyze runtime performance, the Memory panel to analyze memory usage, the Application panel to inspect and debug web applications, and the Security panel to analyze security issues.

Check out your page on the Elements panel. You can see the HTML and CSS of your web page. You can use the Elements panel to inspect the HTML and CSS of the web page. You can use the Styles pane to inspect and change the styles of the web page. Hovering over the element in the body should highlight the same element on the page! This is a helpful way to troubleshoot your code and see how the styles are being applied to the HTML elements.

## Step 13: Make it your own
Continue to play around with the HTML and CSS of this site. Try adding new elements to the different pages and using some of the CSS properties we've learned about to style them. If you're feeling really adventurous, try adding a new page to your site and linking it to the other pages. You should also add your navigation menu to the other pages so that users can easily navigate between them.

Make one more commit with the message "Made the site my own".


<!-- ## Review
At this point your index file should look something like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Favorite Music Artist</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
      <nav>
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="hits.html">Hits</a></li>
        <li><a href="join.html">Join</a></li>
      </ul>
    </nav>
          <h1>Welcome to the _____ fan club</h1>
          <img src="image.jpg" alt="Image of the artist or show" class="image">
          <p class="description">This is a description of the artist or show.</p>
          <p id="join">Join the fan club by entering your email address below:</p>
          <form>
            <input type="email" placeholder="Enter your email address">
            <button type="submit">Join</button>
          </form>
  </body>
</html>
```

Your styles file should look something like this:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  color: #333;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
  text-align: center;
}

nav ul li {
  display: inline;
  margin: 0 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-size: 20px;
}

.image {
  display: block;
  margin: 0 auto;
  width: 50%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.description {
  text-align: center;
  color: #333;
  margin-top: 20px;
}

#join {
  text-align: center;
  color: #333;
  margin-top: 20px;
}

input {
  margin: 10px;
}

button {
  margin: 10px;
}
```

Your about, hits, and join files should look similar to this:

```html
<!DOCTYPE html>

<html>
  <head>
    <title>About</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="hits.html">Hits</a></li>
        <li><a href="join.html">Join</a></li>
      </ul>
    </nav>
    <h1>About</h1>
    <p>This is a description of the artist or show.</p>
  </body>

</html>
```

```html
<!DOCTYPE html>

<html>
  <head>
    <title>Hits</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="hits.html">Hits</a></li>
        <li><a href="join.html">Join</a></li>
      </ul>
    </nav>
    <h1>Hits</h1>
    <ul>
      <li>Hit 1</li>
      <li>Hit 2</li>
      <li>Hit 3</li>
    </ul>
  </body>

</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Join</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="hits.html">Hits</a></li>
        <li><a href="join.html">Join</a></li>
      </ul>
    </nav>
    <h1>Join</h1>
    <p>Join the fan club by entering your email address below:</p>
    <form>
      <input type="email" placeholder="Enter your email address">
      <button type="submit">Join</button>
    </form>
  </body>

</html>
```
 -->

## Submission
Once you've made your final commit, run the command `git shortlog` in your terminal. This will show you a list of all the commits you've made. Take a screenshot of this list and submit it to me in Slack. You can also submit a screenshot or screen recording of your web page in the browser if you'd like to show off your work. 



