Favorite Repos

  * Layout is up to you but follow the requirements.
  * User Redux to manage the GLOBAL state of your app.
    Ex.: List of repositories;

  * LEAVE IT FOR THE LAST IMPLEMENTATION.
    - Install react-beforeunload.
    - Using the HOOK provided by react-beforeunload, save all the repositories full_name in localStorage when the user leaves the app.
    - Restore from localStorage all the repositories saved when the app starts.

  Styles
    Create a Global Style and add to your project.
      Ex.: Font size, font, color, ...
    Create at least one Styled Component and use it in all pages.
      Ex.: input, button

  Page RepositoryList
    - Add an input field where the user will type the github repository name.
      ex.: facebook/react, google/kotlin, microsoft/vscode
    - Add a button Add which when tapped will fetch data about that repository specified.
      ex.: https://api.github.com/repos/facebook/react
      - If the repository doesn't exists:
        - Change the input border color to red.
        - As soon as the user changes the input value, restore the original color.
      - If the repository exists, add it the a list visible for the user, clear the input field and set the focus back.
    - The list must display the repositories added.
      - For each repository added you need to display name, full_name, owner.login, owner.avatar_url, description.
      - The user needs to have a way to remove one repository added to the list.
    - Add an option to ordenate the list created Ascendent or Descendent by name.
      Ex.: Two buttons and a combobox.

  Page RepositoryDetails
    - Display in addition to the information previously visible in the grid, forks_count, open_issues, watchers, default_branch.
    - Add a button to allow the user navigate back.
