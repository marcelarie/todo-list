# todo-list
It is very common nowadays to have a place to save your notes so you don't forget your tasks, in this project you will have to develop your own Todo list.


### TODO's

### Phase 1

- [x] Create base HTML & CSS of welcome page.
- [  ] Create base HTML & CSS of registration page.
- [  ] Create base HTML & CSS of Tasks page.
- [  ] Create Welcome page registration form.
- [  ] Create Tasks classes.
- [  ] Create profile classes.
- [  ] Create tasks menu.
- [  ] Create tasks functions.
- [  ] Create points functions.
- [  ] Create Choose a Character menu.
- [  ] Create Choose a Character form.
- [  ] Create the search bar.
- [  ] Create add a new task menu.
- [  ] ...

### Requisites

### Phase 1
  
- [ ] The header page should contain the name of the project.  
- [ ] Side bar with the following options:  
    - [ ] Tasks  
        This is the default selected option.  
        This option will show all the tasks that are not in a custom list and are not completed.  
  
        - [ ] The main central container of the screen will contain the title of the current section of tasks (Tasks, Important, Completed).  
        - [ ] You can add new tasks with the button that will always be visible at the bottom right of the screen.  
        - [ ] A modal window will be displayed with the information of the task that has been clicked.  
  
        - [ ] Each task will contain:  
            - [ ] Title (min length 3, max length 50, required)  
            - [ ] Description (max length 500, required)  
            - [ ] Checkbox if the task is completed (optional)  
                The tasks that are marked as completed will be shown in the task list with the task details and title letter crossed out.   
            - [ ] Checkbox if the task is important (optional)  
                In the task list, the tasks that are marked as important will be shown in the list and in the task details with the title letter bold  
            - [ ] Select of the custom lists (optional)  
                If you select a custom list, the task will only display when you access the custom list you have assigned to it  
            - [ ] Color of the task (optional) -> Purple, Green, Yellow, Orange, Grey, Pink, Blue.  
  
    - [ ] Important  
        If you mark tasks as important, you will only see  them by selecting this option.  
    - [ ] Completed  
        If  you mark tasks as completed, you will only see  them by selecting this option.  
  
### Phase 2  
  
- [ ] The sidebar will have a new option, “custom lists”.  
    - [ ] Below this option the lists that you have created manually will be shown.  
        - [ ] In the sidebar there will be a "New list" button that will allow you to create a new list.  
        - [ ] This button will open a modal window that lets you introduce a list name (max length 25).  
        - [ ] The modal must have a button which you can click to close it without creating the list.  
- [ ] When you click in a custom list, the central container will show the tasks that belong to this list.  
- [ ] If you hover over a custom list with the mouse, a button will be displayed to delete the list.  
    - [ ] If the list contains at least 1 task, instead of the list being deleted directly, a modal will open indicating that   
         the list is not empty and if you agree to delete it along with all its tasks.  
    - [ ] You will have two buttons, one to accept and one to cancel.  
  
### Phase 3  
  
- [ ] Filter section in the page header  
    - [ ] In the page header there will be a search bar where you can search all the tasks in the app including completed tasks and those belonging to custom lists:  
        - [ ] The search bar will display the results each time a new letter is entered.  
        - [ ] You will have to check that the name of the task contains the input value that you have entered.  
        - [ ] The tasks found with the search engine will be shown in the central page container.    
- [ ] In each task of the task list, you will have a button to check if the task was completed without opening it, this will apply the crossed out font style in the task title.  
    When you change a task to completed, it will be hidden from the list and you only can see the task in the completed tasks section.    
- [ ] In each task of the task list, you will have a button to check if the task is important without opening it, this will apply the bold font style in the task title.  
- [ ] In the task list, if there is a task that has a color selected, a style with that color will be applied to that task in the list.  
  
### Phase 4 (EXTRAS 💯)  
  
- [ ]  Browser compatibility ( IE11 )  
- [ ] Input validation:  
        All the input validation should be done after users have entered a value, this means that you should only validate the   
        value in the input fields after a value has been entered and not before users interact with the inputs.   
  
            - [ ] The validation should be done when the input field loses focus, that is, users type a value,   
               they change focus to another element, then the field validation runs.  
  
            - [ ] After a validation message is entered and users focus the input element to adjust the value,   
               the validation message and any error styles should be removed until the user has entered a new   
               value and the focus is lost from the input field as before.  
- [ ] Responsive design.  
- [ ] Accessibility.  
  
