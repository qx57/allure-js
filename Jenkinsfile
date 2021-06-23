node('dockerhost') {
    parameters {
        choice(name: 'ENV', choices: ['test', 'preprod'], description: 'Environment')
    }

    timestamps {
        stage('Checkout') {
            checkout scm
        }

        stage('JavaScript Tests') {
            docker.image('docker.art.lmru.tech/npm/mocha-chai-snapshots:latest').inside {
                withEnv(["PATH+NODE=${tool 'node-15'}/bin"]) {
                    withAllureUpload(serverId: 'allure-server', projectId: '1', results: [[path: 'allure-results']]) {
                        sh "npm i"
                        sh "npm test"
                    }
                }
            }
        }

        stage('Wipe') {
            cleanWs()
        }
    }
}