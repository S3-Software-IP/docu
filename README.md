# Portfolio

_By [Joris Brugman](https://github.com/theartcher) & [Morris Hannessen](https://github.com/MorrisHannessen)_

## Overview

- [Portfolio](#portfolio)
  - [Overview](#overview)
  - [Introduction](#introduction)
  - [Project organizations](#project-organizations)
  - [Learning outcomes](#learning-outcomes)
  - [Research documents](#research-documents)
  - [Learning outcome rating table](#learning-outcome-rating-table)

## Introduction

This document serves as the guide through semester 3 demand-based software. Here we shall connect all our documentation to our learning outcomes. The goal here is to demonstrate the skills necessary to pass this semester.

## Project organizations

- [Individual project repository](https://github.com/S3-Software-IP/monorepo)

  - [Frontend](https://github.com/S3-Software-IP/monorepo/tree/main/frontend)
  - [Backend](https://github.com/S3-Software-IP/monorepo/tree/main/backend)
  - [Portfolio](README.md#project-organizations)

- [Group project repository](https://github.com/S3-IO-Dev/S3_DB_IO)
  - [Frontend](https://github.com/S3-IO-Dev/S3-DB-IO-Front-end#s3_db_io)
  - [Backend](https://github.com/S3-IO-Dev/S3_DB_IO#project-name)
  - [One-drive documentation](https://stichtingfontys-my.sharepoint.com/:f:/r/personal/504943_student_fontys_nl/Documents/Sem3/Proftaak?csf=1&web=1&e=ZxcpN5)

## Learning outcomes

- [1. Web Application](./learning-outcomes/1-web-application.md)
- [2. Software Quality](./learning-outcomes/2-software-quality.md)
- [3. Agile Method](./learning-outcomes/3-agile-method.md)
- [4. CI/CD](./learning-outcomes/4-ci-cd.md)
- [5. Cultural differences & ethics](./learning-outcomes/5-cultural-differences-and-ethics.md)
- [6. Requirements & design](./learning-outcomes/6-requirements-and-design.md)
- [7. Business processes](./learning-outcomes/7-business-processes.md)
- [8. Professional](./learning-outcomes/8-professional.md)

## Research documents

- [Security](./research/security.md)
- [Privacy research](./research/privacy.md)

## Learning outcome rating table

| **Learning outcome**  | **Proficiency rating**                                | **Elaboration**                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web application       | <div style="color:MediumSpringGreen">Proficient</div> | _User-friendly_ : Within the individual project, we discuss changes and the best option regarding UI & UX. We ask feedback from others to ensure the quality of the product.<br><br>_Full-stack_ : We've designed a frontend in Next.js and a backend API. We also implement an external API (Spotify API). In the group project we are using 2 external APIs (CISCO/ Office 365) within our own API, next to that we have a frontend using React Native.                                |
| Software quality      | <div style="color:cyan"> Beginning </div>             | _Tooling and methodology_ : We run static code analysis on all PRs using Sonar cloud, and the API contains unit tests. In the individual project, we require code reviews before merging a PR. There are plans to work on more tests such as integration and frontend tests.                                                                                                                                                                                                             |
| Agile method          | <div style="color:cyan"> Beginning </div>             | We work according to agile principles with tooling such as JIRA and GitHub projects/issues in order to work in SCRUM. We've learnt and applied sprints, stand-ups, retrospectives & more.                                                                                                                                                                                                                                                                                                |
| CI/CD                 | <div style="color:MediumSpringGreen">Proficient</div> | We have set up a CI/CD pipeline. Upon creating a PR, a static code analysis is done, and the project is built. Our tests are not yet automatically run when creating a PR.                                                                                                                                                                                                                                                                                                               |
| Cultural differences  | <div style="color:DarkOrange">Orienting</div>         | _Recognize_ : During the semester, we've taken the time to look at the differences between ourselves and others in projects. This can include things such as biases, expectations & assumptions.<br><br>_Take into account_ : Within the individual project, we've discussed our differences in regard to development and working as a team. In the group project, we've discussed what both parties (PO's/team) value when working on a project. We've taken these wishes into account. |
| Requirements & Design | <div style="color:MediumSpringGreen">Proficient</div> | _Multiple types of test techniques_ : In the group project we have work using prototypes, POCs, UI wireframes etc. These methods we apply in a SCRUM manner using JIRA. The project's architectural overview is documented with guides on how to run it, C4 diagrams regarding the overview. Our software is tested using unit tests. Integration and frontend tests are yet to come.                                                                                                    |
| Business processes    | <div style="color:Cyan">Beginning</div>               | _Simple_ : We've had points where we needed to make a choice where either had a (near-) equal amount of pros and cons. Here we allowed our stakeholder to decide how to continue forward.<br><br>_Related_ : We've created a flow diagram and C4 visualization with regard to complex system/components/algorithms.                                                                                                                                                                      |
| Professional          | <div style="color:Cyan">Beginning</div>               | _Professional manner_ : We actively communicate and work together in both the individual and group project. Here we advise the stakeholders on their choices & inform them about our choices. We create solutions for encountered problems.                                                                                                                                                                                                                                              |

<div style="color:Crimson">Undefined</div>
<div style="color:DarkOrange">Orienting</div>
<div style="color:Cyan">Beginning</div>
<div style="color:MediumSpringGreen">Proficient</div>
<div style="color:Violet">Advanced</div>
