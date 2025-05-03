pipeline {
    agent any

    tools { nodejs '16.20.2' }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('nfp_XVu3uoWdn7w71ahGcUo5JAmXmmqQAbLf753a')
        NETLIFY_SITE_ID = '244c20a7-27ff-47c8-b121-e8d77339bff9'
    }

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
                bat 'npm install -g netlify-cli'
                bat 'netlify deploy --prod --dir=dist/calculadora-angular --site=%NETLIFY_SITE_ID% --auth-token=%NETLIFY_AUTH_TOKEN%'
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
