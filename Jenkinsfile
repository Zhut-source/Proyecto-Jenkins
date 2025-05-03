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
                bat 'netlify deploy --prod --dir=dist/calculadora-angular --site=244c20a7-27ff-47c8-b121-e8d77339bff9 --auth-token=nfp_6r997ojSrAtHF5cpLzK6AYvgyfvaM7vna073'
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
