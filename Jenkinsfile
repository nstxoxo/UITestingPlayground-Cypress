pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
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