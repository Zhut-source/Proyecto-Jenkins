pipeline {
    agent any

    tools { nodejs '16.20.2' }

    stages {

        //Estado de comprobacion Netlify CLI
        stage('Check Netlify CLI') {
            steps {
                echo 'Check version'
                bat 'netlify --version'
            }
        }

        stage('Hello') {
            steps {
                echo 'Hola, Check que jenkins este conectado a repositorio GITHub'
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
        /*version antigua
        stage('Test') {
            steps {
                echo 'ejecutando test'
                bat 'ng test --watch=false --browsers=ChromeHeadless'
            }
        }*/

        stage('Test') {
            steps {
                script {
                    try {
                        echo 'ejecutando test'
                        bat 'ng test --watch=false --browsers=ChromeHeadless'
            } catch (e) {
                        emailext(
                    subject: "❌ Falla en etapa de test: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: "El build ${env.JOB_NAME} #${env.BUILD_NUMBER} falló en la etapa de *test*.\nRevisa: ${env.BUILD_URL}"
                )
                        error('Fallaron los tests') // detiene el pipeline
                    }
                }
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
