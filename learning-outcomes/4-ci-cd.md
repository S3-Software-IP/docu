# CI/CD

_Take me back to the [home](../README.md#learning-outcomes) page!_

- [CI/CD](#cicd)
  - [Description](#description)
    - [Learning outcome](#learning-outcome)
  - [Clarification](#clarification)
  - [Implementation](#implementation)
  - [Relevant questions](#relevant-questions)
    - [What is the primary purpose of CI/CD in software development?](#what-is-the-primary-purpose-of-cicd-in-software-development)
    - [How do tools like Github Actions and Docker enhance the automation of the software release process, and what specific roles do they play in ensuring a smooth deployment?](#how-do-tools-like-github-actions-and-docker-enhance-the-automation-of-the-software-release-process-and-what-specific-roles-do-they-play-in-ensuring-a-smooth-deployment)
    - [What are the key components involved in a CI/CD pipeline, and how do they work together?](#what-are-the-key-components-involved-in-a-cicd-pipeline-and-how-do-they-work-together)
      - [Build](#build)
    - [Push frontend to Dockerhub](#push-frontend-to-dockerhub)
    - [How does a (semi)automated release process adapt to different project contexts?](#how-does-a-semiautomated-release-process-adapt-to-different-project-contexts)

## Description

<img src=https://mlops-guide.github.io/MLOps/CICDML/ci-cd.png alt="Header image by 'MLOps Guide'" width=750 height=400>

### Learning outcome

> You design and implement a (semi)automated software release process that matches the needs of the project context.

## Clarification

_Design and implement:_ You design a release process and implement a continuous integration and deployment solution (using e.g. Github actions and Docker).

## Implementation

We have implemented CI/CD using github actions and docker. I setup dockerfiles for our frontend that runs on NexJs, and for our backend that runs on dot net. A compose file is used to run everything in 1 container and where the DB is setup. So u can easily run the whole application just by running that compose file. for more info about [Docker](https://docs.docker.com/docker-hub/quickstart/)

Next up was automation. We used github action and sonar cloud to setup up a code check/security check. for more detailed [explanation](#sonarcloud)

And after that we added 2 more workflows for pushing the frontend and backend to dockerhub. for a more detailed explaination about those 2 workflows. We refer to [here](#what-are-the-key-components-involved-in-a-cicd-pipeline-and-how-do-they-work-together)

## Relevant questions

<details>
<summary>What is CI/CD?</summary>
<br>
CI/CD stands for Continuous Integration and Continuous Deployment. It's a set of practices that automate the building, testing, and deployment of software changes, ensuring a more efficient and reliable development process.
<br><br>
</details>
<details>
<summary>Why is CI/CD important?</summary>
<br>
CI/CD improves development speed, reliability, and collaboration by automating repetitive tasks. It catches bugs early, enhances code quality, and allows for faster and more frequent releases.
<br><br>
</details>
<details>
<summary>How does CI differ from CD?</summary>
<br>
Continuous Integration (CI) focuses on automating code integration and testing. Continuous Deployment (CD) extends CI by automating the release and deployment of code changes to production environments.
<br><br>
</details>
<details>
<summary>What is a CI/CD pipeline?</summary>
<br>
A CI/CD pipeline is a series of automated steps that code changes go through, including building, testing, and deploying. It ensures a systematic and repeatable process for delivering software.
<br><br>
</details>
<details>
<summary>Which tools are commonly used for CI/CD?</summary>
<br>
Popular CI/CD tools include Jenkins, GitLab CI/CD, Travis CI, and GitHub Actions. These tools integrate with version control systems and automate various stages of the software development lifecycle.
<br><br>
</details>

### What is the primary purpose of CI/CD in software development?

CI/CD allows organizations/teams and/or individuals to easily ship software quickly and efficiently. The CI (Continuous Integration) involves developers making small step-like changes. Due to the code automatically being checked, tested, built etc. it is very easy to find (security-) issues. By automating all these steps it leaves developers with more time to continue developing. CD (Continuous Delivery) is a practice that involves with automated software, releasing and infrastructure. It is the actions such as, but not limited to, automatically deploying the code to a live/test/acceptation server.

By saving time with important yet time consuming tasks, both developers, testers and users can spend as time working/using a newly deliver application.

### How do tools like Github Actions and Docker enhance the automation of the software release process, and what specific roles do they play in ensuring a smooth deployment?

Tools like Github Actions allows developers to automatically run tests, deployments and other pipelines when certain parameters are passed. In the case of the individual project this is a build, static code analysis, creating & uploading a docker image to docker hub. Here Docker works as our release system, as there are no servers to pass the content to. Using Docker allows you to prevent issues regarding differences in machines, runtimes, system/extension versions etc. This creates a more streamlined approach to developing which can save time.

### What are the key components involved in a CI/CD pipeline, and how do they work together?

Understanding the essence of a CI/CD pipeline involves dissecting its key components and comprehending how they collaborate. Consider the pipeline stages - from code integration to deployment. Each phase, including testing, building, and Docker image creation, plays a pivotal role. For instance, tools like Github Actions automate testing and deployments based on specified parameters. Docker acts as the release system, streamlining development by circumventing compatibility issues across different environments. This orchestration ensures a cohesive and reliable release process. Can you identify specific stages that resonate with your experience or that you find particularly significant?

Understanding the essence of a CI/CD pipeline involves dissecting its key components and comprehending how they collaborate. In the context of the individual project, Github Actions are being used at the time of writing, as the code is stored on Github. Currently there are 3 'work-flows', an automated set of steps to complete a task often to achieve a goal. These workflows are as such:

- [DockerHub Build and Push Frontend](#dockerhub-build-and-push-Frontend)
- [DockerHub Build and Push Backend](#dockerhub-build-and-push-backend)
- [Sonarcloud](#sonarcloud)

### DockerHub Build and Push Frontend

The 'DockerHub Build and Push Frontend' workflow will, upon pushing the main branch, check out the code, log into DockerHub, build and then push the newly created image to DockerHub.

<details>
<summary>The 'DockerHub Build and Push Frontend' pipeline</summary>
<br>

```yaml
name: DockerHub Build and Push Frontend

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 16

      - name: Install dependencies
        run: |
          cd frontend
          npm install

      - name: Build project
        run: |
          cd frontend
          npm run build

      - name: Run Jest tests
        run: |
          cd frontend
          npm test

      - name: Build Docker image
        run: docker build -t ${{ secrets.DOCKER_USERNAME }}/spottedcharts:latest -f frontend/Dockerfile frontend

      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Push Docker image
        run: docker push ${{ secrets.DOCKER_USERNAME }}/spottedcharts:latest

      - name: Archive artifacts
        uses: actions/upload-artifact@v2
        with:
          name: build
          path: frontend/.next
```

</details>

### DockerHub Build and Push Backend

The 'DockerHub Build and Push Backend' workflow will, upon pushing the main branch. it will build the backend using the dockerfile provided. After it has succcesfully build the image will be pushed to dockerhub where it can be accessed.

<details>
<summary>implementation 'DockerHub Build and Push Backend'</summary>
<br>

```yaml
name: SonarCloud Scan
on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

</details>

### Sonarcloud

The 'Sonarcloud' workflow will, upon pushing the main branch, not only build the suggested change for the 'main' branch, but also run some analyses using SonarCloud. This involves a static code analysis, revealing security issues, 'code smells' (improvements to readability/maintainability) & will reveal a code coverage metric.

The results of the Sonarcloud analysis is shown within the pull request it is started from, next to that you can also review the results from both individual requests and the total project [here](https://sonarcloud.io/organizations/s3-software-ip/projects).

<details>
<summary>implementation 'Sonarcloud'</summary>
<br>

```yaml
name: SonarCloud Scan
on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

</details>

### How does a (semi)automated release process adapt to different project contexts?

In real-world scenarios, the adaptability of a (semi-)automated solution is mostly determined by tailoring it to the requirements on a project-to-project basis. Every project is different, consider a project with various external dependencies and/or multiple environments. The release process must be adapted to ensure a smooth deployment and/or integration across all the different systems. The adaptability of this process is what gives it it's power, it allows for a similar concept to be tailored to many projects, allowing you to re-use knowledge and information.
