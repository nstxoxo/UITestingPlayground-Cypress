pipeline {
    agent any
    tools {nodejs "nodejs"}

    stages {
        stage('Build') {
            steps {
                sh 'npm config ls'
                sh 'npm i'
                sh 'npm install lambdatest-cypress-cli'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run cypress:run'
            }
        }
        stage('Report') {
            steps {
                script {
                    allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
    ]) 
    }
            }
        }
    }
}