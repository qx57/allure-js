node {
    parameters {
        choice(name: 'ENV', choices: ['test', 'preprod'], description: 'Environment')
    }

    timestamps {
        stage('Checkout') {
            checkout scm
        }

        stage('JavaScript Tests') {
            withEnv(["PATH+NODE=${tool 'node-15'}/bin"]) {
                withAllureUpload(projectId: '2', tags: 'regular', results: [[path: 'allure-results']]) {
                    sh "npm i"
                    sh "npm test"
                }
            }
        }

        stage('Wipe') {
            cleanWs()
        }
    }
}