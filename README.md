**Project Displaying Real-time application (socket.io) with React**

**Project Overview:**

- Displayed data is showing Sport Category as [Volleyball, Tennis and Football]
- Each sport has its list of events with a status to indicate the user whether a main event is active.
- In each list, the user can select by clicking a button and it will be enable depends on the main event active type.
- If the user click, the display '1' shows. In case of main event is not active, the button became disabled. Until the main event is active again, then the user can interact with the button.

Development  
Data is fetched from a server and store in a global state (Redux)
Receiving updated data from a server and dispatch the function action to reducer
Get updated state data from a global state and update any component.

**Start the project**
npm install : install the package file
npm run dev : run this command inside a project folder
In browser open up the address : http://localhost:3000/

**Todo**
Create a development environment mode
Create a helper method & use memorization
Breakdown the state in redux avoid deeply nested data
