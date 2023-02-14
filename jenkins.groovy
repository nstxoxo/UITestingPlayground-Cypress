// task_branch = "${TEST_BRANCH_NAME}"
// def branch_cutted = task_branch.contains("origin") ? task_branch.split('/')[1] : task_branch.trim()
// currentBuild.displayName = "$branch_cutted"
// base_git_url = "https://github.com/nstxoxo/UITestingPlayground-Cypress.git"

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}