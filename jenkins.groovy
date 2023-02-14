pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run cypress:run'

            }
        }
        stage('Allure report') {
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