pipeline {
    agent any

    tools {nodejs "16.20.2"}

    stages{

        stage('Install'){
            steps{
                echo 'Instalacion de npm'
                sh 'npm install'
            }
        }

        stage('Test'){
            steps{
                echo 'ejecutando test'
                sh 'npm ng test --watch=false'
            }
        }

        stage('Build'){
            steps{
                echo 'Creando build'
                sh 'npm ng build'
            }
        }

        stage('Deploy'){
            steps{
                echo 'En proceso'
            }
        }



    }
}