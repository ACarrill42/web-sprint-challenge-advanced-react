# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components deal with changing state within the component. While a functional component does not use state at all.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called during the Mounting Phase of the component lifecycle.
componentWillUpdate is called during the Updating Phase of the component lifecycle.

3. Define stateful logic.

stateful logic is any logic that deals with state.

4. What are the three step of creating a successful test? What is done in each phase?

Import - making sure that your testing library of choice is imported.

Arrange - Using the render(), to look for what you want to be tested, and assigning it a variable.

Act - Saying what you want to be tested.

Assert - Making sure that what you are testing is actually happening. Using expect().
