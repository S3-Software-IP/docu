# Requirements & design

_Take me back to the [home](../README.md#learning-outcomes) page!_

- [Requirements \& design](#requirements--design)
  - [Description](#description)
    - [Learning outcome](#learning-outcome)
    - [Clarification](#clarification)
  - [Implementation](#implementation)
  - [Relevant questions](#relevant-questions)
    - [What is the key difference between a functional and a non-functional requirement?](#what-is-the-key-difference-between-a-functional-and-a-non-functional-requirement)
    - [What is user acceptance testing?](#what-is-user-acceptance-testing)
    - [How do you evaluate the quality of a design?](#how-do-you-evaluate-the-quality-of-a-design)

## Description

<p align="center">
  <img src=https://cdn.dribbble.com/users/729829/screenshots/3088470/galshir-pen-tool-creation.gif alt="Header gif by 'Clever Harvey'" width=500 height=500>
</p>

### Learning outcome

> You analyze (non-functional) requirements, elaborate (architectural) designs and validate them using multiple types of test techniques.

### Clarification

_Multiple types of test techniques:_ You apply user acceptance testing and stakeholder feedback to validate the quality of the requirements. You evaluate the quality of the design (e.g., by testing or prototyping) taking into account the formulated quality properties like security and performance.

## Implementation

When developing an application it is of utmost importance to validate the concepts, ideas and designs to ensure that their eventual implementation is in accordance with the functional and non-functional requirements. These requirements are determined by the stakeholder which is then communicated to the team by the PO.

In the odd case of the individual project both of us were all roles at the same time, PO, stakeholder, technical architects and software engineers. This in turn meant we had to be strict to one another to ensure both the quality of the application and ensure we follow on our rule-set.

For both projects elaborate designs were created, in both the sense of architectural choices as well as aesthetics such as the TeamFinder mobile application.

---

Individual project

- [SpottedCharts designs](../static/diagrams/ip/SpottedCharts.pdf)
- [Architectural designs](../static/diagrams/ip/diagrams.drawio) _(Contains C4 model visualization and an ERD)_
  - [C4 system context](../static/diagrams/C4-system-context.svg)
  - [C4 container context](../static/diagrams/C4-container-context.svg)

Group project

- [TeamFinder designs](../static/diagrams/gp/Application%20UI%20and%20UX/)
  - [Account creation screen](../static/diagrams/gp/Application%20UI%20and%20UX/TF-app-account.jpg)
  - [Login screen](../static/diagrams/gp/Application%20UI%20and%20UX/TF-app-login.jpg)
  - [Pinned colleagues screen](../static/diagrams/gp/Application%20UI%20and%20UX/TF-app-pinned.jpg)
  - [Startup screen](../static/diagrams/gp/Application%20UI%20and%20UX/TF-app-pre-login.jpg)
  - [Search colleague screen](../static/diagrams/gp/Application%20UI%20and%20UX/TF-app-search.jpg)
  - [Settings screen](../static/diagrams/gp/Application%20UI%20and%20UX/TF-app-setting.jpg)
- [Architectural designs](../static/diagrams/gp/Data-transformations.drawio) _(Contains C4 model visualization, flow-charts for data handling etc.)_

---

To ensure we validate these designs we implement other's feedback: classmates, teachers, stakeholders and other developers comment on our functionality and/or design. This feedback is then used to improve said applications. The architectural and frontend designs in the group project were discussed with both POs, as they have field-experience which is valuable to improving and iterating on the designs before their final implementation.

## Relevant questions

### What is the key difference between a functional and a non-functional requirement?

The key difference between functional and non-functional requirements is as the name says, their functionality. A functional requirement encompasses a basic facility a component, system or application should be able to provide. Essentially they are the basis for all actions executed by a user/role in a system. Examples could be things such as:

- The system must allow passwords to be reset.
- The system should allow users to login using external authenticators.

Non functional requirements, also called non-behavioral requirements deal with issues that do not relate to a single behavior of a system/component, but rather a more global approach/area to work on. Things such as:

- Security
- Maintainability
- Performance

| **Functional Requirements**                                                         | **Non Functional Requirements**                                                                |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| A functional requirement defines a system or its component.                         | A non-functional requirement defines the quality attribute of a software system.               |
| It specifies “What should the software system do?”                                  | It places constraints on “How should the software system fulfill the functional requirements?” |
| It is mandatory.                                                                    | It is not mandatory.                                                                           |
| It is captured in use case.                                                         | It is captured as a quality attribute.                                                         |
| Defined at a component level.                                                       | Applied to a system as a whole.                                                                |
| Helps you verify the functionality of the software.                                 | Helps you to verify the performance of the software.                                           |
| Functional Testing like System, Integration, End to End, API testing, etc are done. | Non-Functional Testing like Performance, Stress, Usability, Security testing, etc are done.    |
| Usually easy to define.                                                             | Usually more difficult to define.                                                              |

_Table contents provided by GeeksForGeeks[^1]_

### What is user acceptance testing?

User acceptance testing (UAT) is the final step in testing before a product/release is published. UAT is often performed by end-users, they are an effective group to test on as they understand the problems which a system is attempting to solve/improve. They will know the details and daily problems a user can encounter. This is also at times done by an internal group of appointed beta testers, this set-up is more common larger, enterprise solutions.[^2]

<p align="center">
  <img src=../static/img/Release%20diagram.png alt="Overview release-testing diagram">
</p>

The core of UAT is to find (or confirm the lack of-) issues which have not been discovered by the previous means of testing. E.g requirements for a story not matching the intended behavior, bugs etc. Without UAT the, although thoroughly tested, software may work perfectly fine, yet not meet their actual requirements, the software can be released with bugs. This can then lead to frustrating behavior, unhappy customers and PO's, these issues can be costly and damaging to the reputation of the development team.

### How do you evaluate the quality of a design?

This can be done by consistently discussing- and showing changes to relevant parties. E.g developers, POs and stakeholders. With the feedback provided, the team goes back to the design, make the necessary changes, discuss again and keep doing that until they receive a 'green-light'. After agreeing the team will then go back to developing up until all parties involved agree the developed implementation is of high quality, matches the design and contains all the requirements.

[^1]: https://www.geeksforgeeks.org/functional-vs-non-functional-requirements/
[^2]: https://www.techtarget.com/searchsoftwarequality/definition/user-acceptance-testing-UAT
