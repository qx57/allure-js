node {
    parameters {
        choice(name: 'ENV', choices: ['test', 'preprod'], description: 'Environment')
    }

    timestamps {
        stage('Checkout') {
            checkout scm
        }

        stage('Java Tests') {
            def npm = tool 'node-15'

            sh "${npm}/bin/npm i"
//             sh "node_modules/mocha/bin/mocha --opts mocha.opts --reporter allure-mocha || exit 0"
        }

        stage('Wipe') {
            cleanWs()
        }
    }
}