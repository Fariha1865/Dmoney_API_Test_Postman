const newman = require('newman');
const args = process.argv.slice(2);  

if (args.length < 1) {
    console.error("Please specify the environment: 'dev' or 'qa'");
    process.exit(1);
}

const environment = args[0] === 'dev' ? './Environment/dev-environment.json' : './Environment/qa-environment.json';

newman.run({


    collection: require('./Collection/collection.json'),
    environment: require(environment),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function(err){
    if(err) { throw err;}
    console.log('collection run complete!')
}

)