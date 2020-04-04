# Blogging Application Using React-Native (with Redux store from scratch)

## Deployment 
Application is not deployed to iOS nor Android store. Application was made for pure developmental experience purposes. 

Home:                      |          Preview:         |           Edit:           |     Create:
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
 <img width="200" height="400" alt="blog" src="https://user-images.githubusercontent.com/52672474/78414132-5bb60100-75e0-11ea-8fb9-bb65b921711d.png"> |  <img width="200" height="400" height alt="preview blog" src="https://user-images.githubusercontent.com/52672474/78414186-9029bd00-75e0-11ea-8493-4ee128581852.png"> |  <img width="200" height="400" alt="edit blog" src="https://user-images.githubusercontent.com/52672474/78414278-09291480-75e1-11ea-85d9-3fa54e88198e.png"> |  <img width="200" height="400" alt="create blog" src="https://user-images.githubusercontent.com/52672474/78414296-1c3be480-75e1-11ea-80f1-eb4fe5f6f68d.png">


## Why Was It Made
As people are going through the rough times right now, I felt it was only important to build something that had some relativity to what's going on in the world. 

## How Was It Made
Utilizing the MVC model structure, in this case it's the V, components are rendered onto the page using Parent and Child relationships.
What makes this application awesome, was getting to work with Context. Using React's useContext I was able to not only pass down parameters, like React normally does through props from Parent to Child, 
but skip the Parent to the n-th Child. Context is used as a wrapper for the application and stores global values that any Child component can access. Almost like using a Redux store. 

## User Interaction
Using CRUD (Create, Read, Update, Delete) operations the use make a new blog post and store it for a later time. If the user is unhappy or would like to add upon what they have already blogged about, they can certainly edit the post or delete it.

## Future Implications
I would like to add images to blogs. So that the user can instantly add photos to their blogs, almost like a story-line.
