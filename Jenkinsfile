pipeline {
    agent any

    tools { nodejs '16.20.2' }

    stages {

        stage('Check Netlify CLI') {
            steps {
                echo 'Holii'
                bat 'netlify --version'
            }
        }

        stage('Hello') {
            steps {
                echo 'Holii'
                checkout scmGit(
                    branches: [[name: '*/main']],
                    extensions: [],
                    userRemoteConfigs: [[
                        credentialsId: 'GithubToken',
                        url: 'https://github.com/Zhut-source/Proyecto-Jenkins.git'
                    ]]
                )
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
                echo 'Despliegue'
                withCredentials([string(credentialsId: 'NETLIFY_TOKEN', variable: 'NETLIFY_AUTH_TOKEN')]) {
                    bat 'netlify deploy --prod --dir=dist/calculadora-angular --site=16bc5fcb-4b8a-4bcb-8e51-cd17f5120e93 --auth %NETLIFY_AUTH_TOKEN%'
                }
            }
        }
    }

    post {
        success {
            emailext(
                subject: "✅ Build exitoso: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "El build ${env.JOB_NAME} #${env.BUILD_NUMBER} finalizó correctamente.\nRevisa: ${env.BUILD_URL}"
            )
        }
        failure {
            emailext(
                subject: "❌ Build fallido: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "El build ${env.JOB_NAME} #${env.BUILD_NUMBER} falló.\nRevisa: ${env.BUILD_URL}"
            )
        }
    }
}
