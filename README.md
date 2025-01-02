1.Create a react-app using vite
2. Install dependencies
3.Install tailwind css
4.Added Favicon for youtube clone
5.Created Component Folder and pages folder 
6.In pages folder created Home.js and Video.js files
7.To ignore the no used react var error add these following commands in the eslint file in riles section

///---Add these commands ----///
"react/react-in-jsx-scope": "off", // Disables the rule for React in scope
      "no-unused-vars": [
        "warn", // Prevents error for unused React
        { varsIgnorePattern: "^React$" }, // Ignores unused 'React' specifically
      ],

8.Install react-router dom