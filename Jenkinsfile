pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t my-vite-app:latest .'
            }
        }
    }

    post {
        success {
            echo "Build Success!"
        }
        failure {
            echo "Build Failed!"
        }
    }
}
