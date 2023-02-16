pipeline {
   agent any

   tools {nodejs "Node12"}

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
               sh 'apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
            //    sh 'npm install lambdatest-cypress-cli'
               sh 'npm install'
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
