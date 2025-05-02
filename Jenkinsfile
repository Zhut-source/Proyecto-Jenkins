pipeline {
    agent any

    tools {nodejs "16.20.2"}

    stages{

        stage('Install'){
            steps{
                echo 'Instalacion de npm'
                bat 'npm install'
            }
        }

        stage('Test'){
            steps{
                echo 'ejecutando test'
                bat 'npm ng test --watch=false'
            }
        }

        stage('Build'){
            steps{
                echo 'Creando build'
                bat 'npm ng build'
            }
        }

        stage('Deploy'){
            steps{
                echo 'En proceso'
            }
        }



    }
}