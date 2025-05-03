pipeline {
    agent any

    tools { nodejs '16.20.2' }

    stages {
        stage('Hello') {
            steps {
                echo 'Holii'
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'GithubToken', url: 'https://github.com/Zhut-source/Proyecto-Jenkins.git']])
            }
        }

        stage('Install') {
            steps {
                echo 'Instalacion de npm'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'ejecutando test'
                bat 'ng test --watch=false'
                
            }
        }

        stage('Build') {
            steps {
                echo 'Creando build'
                bat 'ng build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'El deploy será manejado por Netlify tras el push a GitHub'
            }
        }
    }

    post {
        success {
            emailext(
            subject: "✅ Build exitoso: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            body: "El build ${env.JOB_NAME} #${env.BUILD_NUMBER} finalizó correctamente.\nRevisa: ${env.BUILD_URL}",
            to: 'mmtn74@gmail.com'
        )
        }
        failure {
            emailext(
            subject: "❌ Build fallido: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            body: "El build ${env.JOB_NAME} #${env.BUILD_NUMBER} falló.\nRevisa: ${env.BUILD_URL}",
            to: 'mmtn74@gmail.com'
        )
        }
    }
}
