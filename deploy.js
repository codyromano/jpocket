const fs = require('fs');
const copy = require('recursive-copy');
const path = require('path');
const rmdir = require('rimraf');
const archiver = require('archiver');

const BUILD_DIR = path.join(__dirname, './build');
const LAMBDA_ZIP_FILE_NAME = 'jpocketForLambdaDeployment.zip';

async function deploy() {
  try {
    await cleanBuildDir();
    await copyFiles(['./src', 'node_modules', 'index.js', 'credentials.json']);
    await createZip(LAMBDA_ZIP_FILE_NAME);
  } catch (error) {
    console.log('Deployment error');
    console.log(error);
  }
}

async function cleanBuildDir() {
  rmdir.sync(BUILD_DIR, {}, () => {
    throw new Error('Problem cleaning build directory!');
  });
  console.log(`Removed ${BUILD_DIR}`);
  return Promise.resolve();
}

async function createZip(targetZip) {
  const output = fs.createWriteStream(targetZip);
  const archive = archiver('zip');

  return new Promise((resolve, reject) => {
    output.on('close', function () {
      resolve('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error', function(err){
      reject(err);
    });

    archive.pipe(output);
    archive.directory('build', '.');
    archive.finalize();
  });
}


async function copyFiles(filesToCopy) {
  const fileCopyOperations = [];

  for (const file of filesToCopy) {
    const targetPath = path.join(BUILD_DIR, file);
    const promise = copy(file, targetPath, { overwrite: true })
      .on(copy.events.ERROR, function(error, copyOperation) {
        console.error('Unable to copy ' + copyOperation.dest);
      })
      .then(function(results) {
        console.info(`${results.length} file(s) copied: ${file} => ${BUILD_DIR}/${file}`);
      })
      .catch(function(error) {
        return console.error('Copy failed: ' + error);
      });

    fileCopyOperations.push(promise);
  }

  return Promise.all(fileCopyOperations);
}

deploy();
