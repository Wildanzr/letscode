
# LetsCode

LetsCode is a web-based application designed to assist in learning basic programming. It adopts the pair programming learning model, allowing users to learn by collaborating and working with their study partners. In LetsCode, basic programming learning material is presented in the form of problems that must be solved together by the learning pair. The application allows users to learn the basics of programming in an interactive and enjoyable way.


## Demo

Try LetsCode here  
https://letscode.wildanzr.my.id/


## Installation

To install LetsCode, make sure you have installed Docker on system. Docker is a platform for running and managing containers, which are lightweight and portable units that encapsulate an application and its dependencies.

Once Docker is installed, follow these steps to install LetsCode:  

1. Create an `.env` file:
    - Create a new file named `.env` in the same directory as your `.env.sample` file.
    - Copy the contents of the `.env.sample` file and replace the placeholders with the actual values that you want to use.
    - Save the `.env` file.

2. Build the application with Docker Compose:
    - Open a terminal or command prompt in the same directory as your `docker-compose.yml` file.
    - Run the command `docker-compose build`. This will build all the Docker images defined in the `docker-compose.yml` file.

3. Run the application with Docker Compose:
    - In the terminal or command prompt, run the command `docker-compose up -d`. This will start the containers and run the application in detach mode.
    - You can see the log of containers by executing the command `docker logs letscode-nameofimage`

## 🚀 Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform