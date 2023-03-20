pipeline {
   agent any

   tools {nodejs "Node12"}

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('e2e Tests') {
           steps {
               sh 'npm run cypress:run'
           }
       }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
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
