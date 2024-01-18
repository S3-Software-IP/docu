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

- [Group project organisation](https://github.com/S3-IO-Dev)
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

| **Learning outcome**  | **Proficiency rating**                    | **Elaboration**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web application       | ${\textsf{\color{lightgreen}Proficient}}$ | _User-friendly_ : The develop frontends have gone through a design phase and were tested both internally and externally (classmates/POs).<br><br> _Full-stack_ : The applications in both the team and individual projects have a functional backend using an ORM which implement asynchronous communication. To view the specific tech stacks see [the outcomes](#learning-outcomes).                                                                                                                                                                          |
| Software quality      | ${\textsf{\color{lightgreen}Proficient}}$ | _Tooling and methodology_ : All backend code is tested using xUnit, the frontends are tested using Jest. These are automatically executed upon creating a pull request. Sonarcloud is used to apply static code analysis to ensure low code duplication, no security hotspots nor code smells are present within the code. Next to that we use code reviews to ensure one another's quality upon creating pull request.                                                                                                                                         |
| Agile method          | ${\textsf{\color{lightgreen}Proficient}}$ | _Choose_ : Iterative and in sprints: During the semester, our team overcame challenges in adopting Scrum, including adapting to three-week sprints and using tools like Jira. Through regular reviews, we received valuable feedback, fostering a culture of continuous improvement. Despite initial struggles in defining our "Definition of Done," collaboration with teachers enhanced our understanding. The efficient management of the final sprint demonstrated our team's growth, positioning us well for future projects and further mastery of Scrum. |
| CI/CD                 | ${\textsf{\color{violet}Advanced}}$       | _Design and implement_ : CI/CD was implemented for our project using GitHub Actions and Docker, creating Dockerfiles for NexJs and .NET. Automation was enhanced with GitHub Actions and SonarCloud for code and security checks, complemented by additional workflows for pushing the frontend and backend to DockerHub.                                                                                                                                                                                                                                       |
| Cultural differences  | ${\textsf{\color{lightgreen}Proficient}}$ | _Recognize_ : During the semester we have learned different ways to communicate and how to handle a difference in expectations with regard to deadlines, communication and argeements.<br><br>_Take into account_ : We have learnt how to handle different views and accompany those into the development and eventual result of our application(-s).<br><br>_ACM_ : To address this, ACM 1.2 and 1.6 have been taken into account in the projects. ACM was a valuable source of information and inspiration in regard to ethics & ICT.                         |
| Requirements & Design | ${\textsf{\color{violet}Advanced}}$       | _Multiple types of test techniques_ : The functional/technical requirements set by the product owners were taken into account, analyzed and used in the group project. In the documentation of each project the architectural choices have been explained and documented where deemed neccessary. There are multiple type of tests within each project, mostly in the category of UI, unit and integration. These were made to validate the exisiting requirements and ensures any future ammends to features don't break existing ones.                        |
| Business processes    | ${\textsf{\color{lightgreen}Proficient}}$ | _Simple and related_ : For the group project, a business process was visualised to show the improvement that the app is able to offer with alternative flows for both existing and potential paths.                                                                                                                                                                                                                                                                                                                                                             |
| Professional          | ${\textsf{\color{violet}Advanced}}$       | _Professional manner_ : During the semester we have worked in duos for the individual project, the group project was a group of 6 teammates. The GP was a great place to learn and use agile principles. We learnt the importance of proper communication both in the team aswell as between the team and stakeholder(-s).                                                                                                                                                                                                                                      |

<!---
 <div style="color:Crimson">Undefined</div>
<div style="color:DarkOrange">Orienting</div>
<div style="color:Cyan">Beginning</div>
<div style="color:MediumSpringGreen">Proficient</div>
<div style="color:Violet">Advanced</div>

${\textsf{\color{crimson}Undefined}}$
${\textsf{\color{darkOrange}Orienting}}$
${\textsf{\color{cyan}Beginning}}$
${\textsf{\color{lightgreen}Proficient}}$
${\textsf{\color{violet}Advanced}}$
-->
