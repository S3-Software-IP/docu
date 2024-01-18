# Software quality

_Take me back to the [home](../README.md#learning-outcomes) page!_

- [Software quality](#software-quality)
  - [Description](#description)
    - [Learning outcome](#learning-outcome)
    - [Clarification](#clarification)
  - [Implementation](#implementation)
    - [Code snippets](#code-snippets)
  - [Relevant questions](#relevant-questions)
    - [What are the different type of tests?](#what-are-the-different-type-of-tests)
      - [Unit](#unit)
        - [Individual project](#individual-project)
        - [Group project](#group-project)
      - [Integration](#integration)
      - [System](#system)
      - [Acceptance](#acceptance)
    - [What are code reviews?](#what-are-code-reviews)
    - [What is a 'static code analysis'?](#what-is-a-static-code-analysis)
    - [When is something considered of 'high' quality?](#when-is-something-considered-of-high-quality)

## Description

<p align="center">
  <img src=https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/08/levels-of-testing-768x499.png alt="Header image by 'Anamika Kalwan'" width=750 height=500>
</p>

### Learning outcome

You use software tooling and methodology that continuously monitors and improve the software quality during software development.

### Clarification

_Tooling and methodology:_ Carry out, monitor and report on unit integration, regression and system tests, with attention for security and performance aspects, as well as applying static code analysis and code reviews.

## Implementation

Whether working alone or within the group project it is of great importance that the software delivered is of high quality. There are multiple techniques which you apply to ensure the quality of the software which you deliver. A few techniques to name are as such:

- Testing
  - Unit
  - Integration
  - System
  - Acceptance
- Code reviews

Within our project we have currently have unit tests and are planning to develop a comprehensive integration test for the endpoints in regard to the API that is being developed for the backend.

Within both projects unit testing, integration and frontend testing has been implemented to some extent.

- ['TeamFinder' - Group project (Organization page)](https://github.com/S3-IO-Dev)

  - [Unit](https://github.com/S3-IO-Dev/S3_DB_IO/blob/main/back-end/TeamFinderAPI/UnitTestsApi/LocationControllerTests.cs)
  - [Integration](https://github.com/S3-IO-Dev/S3_DB_IO/blob/main/back-end/TeamFinderAPI/UnitTestsApi/Services/CiscoAPITest.cs)

- ["SpottedCharts" - Individual project (Organization page)](https://github.com/S3-Software-IP)
  - [Unit]()
  - [Frontend]()

These tests are executed automatically upon creating a pull request.

---

### Code snippets

<details>
<summary>Integration test to test a specific part of a service.</summary>
<br>

```cs
      [Fact]
        public void RemoveOutdatedData_KeepNew()
        {
            var solutionDirectory = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.Parent.FullName;
            var configuration = new ConfigurationBuilder()
                .SetBasePath(solutionDirectory)
                .AddJsonFile("TeamFinderAPI/appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var serviceCollection = new ServiceCollection();
            serviceCollection.AddSingleton<IConfiguration>(configuration);
            var serviceProvider = serviceCollection.BuildServiceProvider();


            var ciscoApiService = new CiscoAPIService(configuration, serviceProvider);
            ciscoApiService.StartAsync(default).Wait();


            List<CiscoDevice> networkClients = new List<CiscoDevice>();
            CiscoDevice shouldExist = new CiscoDevice("allowed", "email1@example.com", DateTime.Parse("2023-07-18T08:35:34Z"), DateTime.Now, "01", DeviceStatus.Online);
            networkClients.Add(shouldExist);


            List<CiscoDevice> strippedClients = ciscoApiService.StripOutdatedData(networkClients);
            Assert.Contains(shouldExist, strippedClients);
        }
```

</details>

<details>
<summary>Unit test for an API backend.</summary>
<br>

```cs
      [Fact]
        public void CreateLocation_WithInvalidColleagueLocation_ReturnsBadRequestResult()
        {
            // Arrange
            var mockLocationService = new Mock<ILocationService>();
            mockLocationService.Setup(service => service.CreateNew(It.IsAny<ColleagueLocation>())).Returns(true);
            var controller = new LocationController(mockLocationService.Object);

            // Act
            var result = controller.CreateLocation(null) as ObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(400, result.StatusCode);
            Assert.Equal("The provided location is invalid.", result.Value);
        }

```

</details>

## Relevant questions

### What are the different type of tests?

As said earlier in this document, there 4 'levels' of testing. Each with their own scope, responsibility and actors. (Developers, testers, users etc.)

#### Unit

A unit test is made to test a component at code level. Each 'block' of code is tested individually to ensure their functionality and stability. As an example:

- You create a function that should accept 2 numerical values
- It should return the sum of these values
- It should be able to handle negative numbers
- It should be able to handle 0's.

Using this example there are clear rules and expectations regarding the function. They are concise, clear and direct and able to be tested. These test nowadays are automated and ran every time you make a change to the code-base.

##### Individual project

In the individual project we have made unit tests mostly targeted towards the backend, as the frontend is able to handle most null, error or invalid values. Our .NET backend is testing in [xUnit](https://xunit.net/). Here we also implement the [AutoFixture](https://github.com/AutoFixture/AutoFixture) library to generate fake data for our unit tests. Next to those two we also use [Moq](https://github.com/devlooped/moq) which can provide LINQ when mocking services, interfaces & other items.

##### Group project

Within the group project, unit testing is of high importance considering the requirements. Vulnerabilities should be well-covered or discovered during testing considering the data that is transferred using the applications. The unit tests we have written for the backend are automatically executed upon creating a pull request to 'main'. See [CI/CD](4-ci-cd.md) for more information on this.

#### Integration

Integration testing is a level higher than unit testing, it is in regard to testing whether a system or subsystem as a whole is working as expected. It helps identify bugs and issues before they are implemented into other (sub-)modules. Integration testing can be automated.

#### System

System testing is done within a controlled environment containing all the necessary components to test the system as a whole. Here you can test 'flows' (patterns/paths/steps a user may follow) from beginning to end to test if a system works as expected during an implementation. Although more difficult and time-consuming these tests van also be automated using tools.

#### Acceptance

Acceptance testing involves testing both the non-functional as well as the functional requirements of an application. Things you'd be testing can be the security, compatibility, accessability, stability etc. Depending on how large and complex your application (-s) are these _can_ be automated.

### What are code reviews?

Code reviews, also known as peer reviews, is a concept in which another person checks and validates the quality of the code that is to be added to the code-base. It is done to get a 'second opinion' on your code. The reviewer's responsibility is to ensure the to-be-delivered software is of high quality, follows coding standards and to prevent bugs/logic errors. It does not necessarily require a developer to be reviewer, any expert that is involved within the domain the code is developed in is sufficient.

### What is a 'static code analysis'?

[Perforce](https://www.perforce.com/) says the following about static code analysis:[^1]

> "Static analysis is a method of debugging that is done by automatically examining the source code without having to execute the program. This provides developers with an understanding of their code base and helps ensure that it is compliant, safe, and secure.
>
> Static code analysis refers to the operation performed by a static analysis tool, which is the analysis of a set of code against a set (or multiple sets) of coding rules."

Static code analysis is able to find 'code-smells' (a problem in code that might indicate a deeper problem). It attempts to analyze weaknesses in source code which might cause problems/vulnerabilities. It can also apply code rules for things such as classes, functions, objects and how you decide to use them.

### When is something considered of 'high' quality?

'Something' or in this case 'code', is considered high quality when it passes certain, beforehand agreed upon, metrics. Data such as the total percentage of code covered by tests, if there are no security flaws. Essentially it is impossible to create a single metric or a line where something is 'high' quality.

For this reason the company, group, community or team you work with/in create thresholds. If testing is not important for a certain project, the 'test coverage' metric would be lower, thus it'd be a lot easier to consider the project of 'high' quality as the boundary for said term is low.

[^1]: https://www.perforce.com/blog/sca/what-static-analysis
