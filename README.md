# HACKATON BOOKINGS

## Project: Make ODF great again!

With our current framework, ODF, is difficult to really reuse components.

+ Behaviors need to be coded in the application implementing the component. For instance, if we want to set a input text field  as valid, we need to set the status in OneFront. But if SSLP wants to include an input, they need to set the status in their application too. Wouldn’t it be good if we can have a centralized place to set that status?
+ ODF documentation is not very friendly, being too verbose sometimes.
+ And writing the documentation is not very intuitive, we are using a tool called KSS, that generates it based on comments.

By using Storybook as a component library, makes life easy!

+ It uses Component Based frameworks (React, Vue, Angular, Preact…), making it supereasy to reuse them.
+ It has a very clear documentation - Link
+ Components can be tested with unit tests (impossible to do it on ODF) and with a kind of autos, which checks the components are not broken.
+ It can be easily reused. Even outside Odigeo!

## Other links:
https://docs.google.com/presentation/d/1j7nEwaALh5tYKnJhH_Nc-w4emattgQLwz-5cv4K9nnw

http://hackaton-bookings.surge.sh