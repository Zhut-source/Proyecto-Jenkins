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
                echo 'En proceso'
            }
        }

    }

    post {
            success {
                emailext(
                subject: '✅ Jenkins Build Satisfactoria: ${JOB_NAME} #${BUILD_NUMBER}',
                body: """<p>La build <b>#${BUILD_NUMBER}</b> del proyecto <b>${JOB_NAME}</b> se completó <b>correctamente</b>.</p>
                         <p>Ver detalles: <a href="${BUILD_URL}">${BUILD_URL}</a></p>""",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                to: 'tu_correo@dominio.com',
                mimeType: 'text/html'
            )
            }

            failure {
                emailext(
                subject: '❌ Jenkins Build Fallida: ${JOB_NAME} #${BUILD_NUMBER}',
                body: """<p>La build <b>#${BUILD_NUMBER}</b> del proyecto <b>${JOB_NAME}</b> <b>falló</b>.</p>
                         <p>Revisar errores: <a href="${BUILD_URL}">${BUILD_URL}</a></p>""",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                to: 'tu_correo@dominio.com',
                mimeType: 'text/html'
            )
            }
        }
}
