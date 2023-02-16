pipeline {
   agent any

   tools {nodejs "Node12"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }
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

       }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
