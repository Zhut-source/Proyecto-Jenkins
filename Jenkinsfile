pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:$PATH" // Asegúrate de que Node esté en PATH
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
                sh 'npx ng test --watch=false --browsers=ChromeHeadless'
            }
        }

        stage('Build') {
            steps {
                echo 'Construyendo la aplicación...'
                sh 'npx ng build --configuration=production'
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