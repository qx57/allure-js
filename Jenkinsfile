node {
    parameters {
        choice(name: 'ENV', choices: ['test', 'preprod'], description: 'Environment')
    }

    timestamps {
        stage('Checkout') {
            checkout scm
        }

        stage('Java Tests') {
            withEnv(["PATH+NODE=${tool 'node-15'}/bin"]) {
                sh "npm i"
                sh "npm run test"
            }
        }

        stage('Wipe') {
            cleanWs()
        }
    }
}