pipeline {
    agent any
    // tools {nodejs "nodejs"}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
                }
                // sh 'npm config ls'
                // sh 'npm i'
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