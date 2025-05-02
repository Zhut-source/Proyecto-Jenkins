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
                bat 'ng test --watch=false'
            }
        }

        stage('Build'){
            steps{
                echo 'Creando build'
                bat 'ng build'
            }
        }

        stage('Deploy'){
            steps{
                echo 'En proceso'
            }
        }



    }
}