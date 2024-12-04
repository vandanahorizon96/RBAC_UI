# RBAC_UI

## Project Overview
This project implements a basic Role-Based Access Control (RBAC) system with three main management sections:
- User Management
- Role Management
- Permission Management

The project uses HTML, CSS, JavaScript (with jQuery), and Bootstrap for the front-end and employs BrowserSync for live reloading during development. The project was developed using the Eclipse IDE for Java and Web Developers.

---

## Features
### User Management
- Add, edit, and delete users.
- Assign roles to users.
- Display user status (Active/Inactive).

### Role Management
- Add, edit, and delete roles.
- Define permissions for each role.

### Permission Management
- Add, edit, and delete permissions.

---

## Prerequisites
To run this project, ensure you have the following installed:

1. [Node.js](https://nodejs.org/): Required for BrowserSync.
2. BrowserSync: Install via npm.

---

## Setup Instructions
1. Clone or download the project folder to your system.
2. Open PowerShell as an administrator.
3. Navigate to the project folder:
   ```bash
   cd /path/to/project/folder
   ```
4. Install BrowserSync globally (if not already installed):
   ```bash
   npm install -g browser-sync
   ```
5. Start BrowserSync:
   ```bash
   browser-sync start --server --files "*.html, *.css, *.js"
   ```
6. Open the BrowserSync preview link in your browser to view the project.

---

## Folder Structure
```
Role_Based_Access_Control_Prjt/
├── index.html      # Main HTML file
├── style.css       # Custom CSS file
├── script.js       # Main JavaScript file
├── api/mock-api.js # Optional API file (if implemented)
```

---

## Technologies Used
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript**
- **jQuery**
- **BrowserSync**
- **Eclipse IDE for Java and Web Developers**

---

## Modifications for Other Systems
To run this project on another system, follow these steps:
1. Install Node.js and BrowserSync on the new system.
2. Copy the project folder to the desired location.
3. Update file paths if necessary.
4. Repeat the setup instructions provided above.

---

## Known Issues
- Ensure proper permissions are granted when running PowerShell as an administrator.
- Check the BrowserSync installation path and verify `npm` is correctly configured in your system environment.

---

## License
This project is licensed under the MIT License.

---

## Author
**Vandana V Nair**
