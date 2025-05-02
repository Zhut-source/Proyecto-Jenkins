pipeline {
    agent any

    environment {
        NODE_VERSION = '16.20.2'
    }

    tools {
        nodejs "${NODE_VERSION}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Clonando repositorio...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Ejecutando pruebas unitarias...'
                sh 'ng test --watch=false --browsers=ChromeHeadless'
            }
        }

        stage('Build') {
            steps {
                echo 'Construyendo la aplicación...'
                sh 'ng build --configuration=production'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completado con éxito.'
        }
        failure {
            echo 'El pipeline falló.'
        }
    }
}