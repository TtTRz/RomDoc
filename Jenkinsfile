pipeline {
    agent any

    stages {
        stage('update deploy file') {
            when {
                anyOf {
                  branch 'master';
                  branch 'dev';
                }
            }
            steps {
                sh 'cp /var/lib/jenkins/deploy/deploy-init.sh .'
                sh 'cp /var/lib/jenkins/deploy/rom-doc/deploy.sh .'
            }
        }
        stage('update code and build') {
            when {
                anyOf {
                  branch 'master';
                  branch 'dev';
                }
            }
            steps {
                sh 'chmod 700 ./deploy-init.sh'
                sh './deploy-init.sh'
                sh 'chmod 700 ./deploy.sh'
                sh './deploy.sh ${BRANCH_NAME}'
            }
        }
    }
}