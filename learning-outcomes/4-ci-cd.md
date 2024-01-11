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

## Relevant questions

### What is the primary purpose of CI/CD in software development?

CI/CD allows organizations/teams and/or individuals to easily ship software quickly and efficiently. The CI (Continuous Integration) involves developers making small step-like changes. Due to the code automatically being checked, tested, built etc. it is very easy to find (security-) issues. By automating all these steps it leaves developers with more time to continue developing. CD (Continuous Delivery) is a practice that involves with automated software, releasing and infrastructure. It is the actions such as, but not limited to, automatically deploying the code to a live/test/acceptation server.

By saving time with important yet time consuming tasks, both developers, testers and users can spend as time working/using a newly deliver application.

### How do tools like Github Actions and Docker enhance the automation of the software release process, and what specific roles do they play in ensuring a smooth deployment?

Tools like Github Actions allows developers to automatically run tests, deployments and other pipelines when certain parameters are passed. In the case of the individual project this is a build, static code analysis, creating & uploading a docker image to docker hub. Here Docker works as our release system, as there are no servers to pass the content to. Using Docker allows you to prevent issues regarding differences in machines, runtimes, system/extension versions etc. This creates a more streamlined approach to developing which can save time.

### What are the key components involved in a CI/CD pipeline, and how do they work together?

Understanding the essence of a CI/CD pipeline involves dissecting its key components and comprehending how they collaborate. Consider the pipeline stages - from code integration to deployment. Each phase, including testing, building, and Docker image creation, plays a pivotal role. For instance, tools like Github Actions automate testing and deployments based on specified parameters. Docker acts as the release system, streamlining development by circumventing compatibility issues across different environments. This orchestration ensures a cohesive and reliable release process. Can you identify specific stages that resonate with your experience or that you find particularly significant?

Understanding the essence of a CI/CD pipeline involves dissecting its key components and comprehending how they collaborate. In the context of the individual project, Github Actions are being used at the time of writing, as the code is stored on Github. Currently there are 2 'work-flows', an automated set of steps to complete a task often to achieve a goal. These workflows are as such:

- Build
- Push frontend to Dockerhub

#### Build

The 'build' workflow will, upon pushing the main branch, not only build the suggested change for the 'main' branch, but also run some analyses using SonarCloud. This involves a static code analysis, revealing security issues, 'code smells' (improvements to readability/maintainability) & will reveal a code coverage metric.

The results of the Sonarcloud analysis is shown within the pull request it is started from, next to that you can also review the results from both individual requests and the total project [here](https://sonarcloud.io/organizations/s3-software-ip/projects).

<details>
<summary> The 'build' pipeline</summary>
<br>

```yaml
name: Build
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
          fetch-depth: 0 # Shallow clones should be disabled for a better relevancy of analysis
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # Needed to get PR information, if any
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

</details>

### Push frontend to Dockerhub

The 'push frontend to Dockerhub' workflow will, upon pushing the main branch, check out the code, log into DockerHub, build and then push the newly created image to DockerHub.

<details>
<summary>The 'push frontend to Dockerhub' pipeline</summary>
<br>

```yaml
name: Push Frontend to Dockerhub

on:
  push:
    branches: ["main"]

jobs:
  push_frontend:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Log in to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Extract metadata (tags, labels) for Docker
        id: meta_frontend
        uses: docker/metadata-action@v5
        with:
          images: theartcher/spottedcharts-frontend

      - name: Build and push Docker image for frontend
        uses: docker/build-push-action@v5
        with:
          context: .
          file: ./frontend/Dockerfile
          push: true
          tags: ${{ steps.meta_frontend.outputs.tags }}
          labels: ${{ steps.meta_frontend.outputs.labels }}""
```

</details>

### How does a (semi)automated release process adapt to different project contexts?

In real-world scenarios, the adaptability of a (semi-)automated solution is mostly determined by tailoring it to the requirements on a project-to-project basis. Every project is different, consider a project with various external dependencies and/or multiple environments. The release process must be adapted to ensure a smooth deployment and/or integration across all the different systems. The adaptability of this process is what gives it it's power, it allows for a similar concept to be tailored to many projects, allowing you to re-use knowledge and information.
