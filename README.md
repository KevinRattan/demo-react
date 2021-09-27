# This is a very simple react client.
# You will need to create a Dockerfile that:

1. Uses the builder pattern
1. Copies the /build folder and all its contents from the transient builder image to a static web server (e.g. nginx)

# In React, environment variables are set at BUILD time. You will need to ensure that the .env file in the root contains the correct REACT_APP_SERVER variable for the environment for which you are building the application (e.g. the full address of a backend service if the app is deployed to k8s)

