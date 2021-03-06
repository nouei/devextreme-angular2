var bundleName = "devextreme-angular2";

module.exports = {
    tools: {
        srcFilesPattern: ['tools/src/**/*.ts'],
        distPath: 'tools/dist',
        metadataGenerator: {
            importFrom: './tools/dist/metadata-generator',
            sourceMetadataFilePath: './metadata/StrongMetaData.json',
            outputFolderPath: './metadata/generated'
        },
        componentGenerator: {
            importFrom: './tools/dist/dot-generator',
            templateFilePath: './templates/component.tst',
            metadataFolderPath: './metadata/generated/',
            outputFolderPath: './src/ui/'
        },
        facadeGenerator: {
            importFrom: './tools/dist/facade-generator',
            facades: {
                './src/index.ts': {
                    sourceDirectories: [
                        './src/core',
                        './src/ui'
                    ]
                }
            }
        },
        tsc: {
            "target": "ES5",
            "module": "commonjs",
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "sourceMap": true,
            "removeComments": true,
            "declaration": true
        }
    },
    components: {
        srcFilesPattern: ['src/**/*.ts'],
        tsConfigPath: 'src/tsconfig.json',
        tsTestSrc: ['tests/src/*.spec.ts'],
        testsPath: 'tests/dist',
        bundleName: bundleName,
        outputPath: 'dist'
    },
    examples: {
        srcFilesPattern: ['examples/**/*.ts', '!examples/**/*.d.ts'],
        path: 'examples',
        appPath: 'examples/app',
        tsc: {
            "target": "ES5",
            "module": "system",
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "sourceMap": true,
            "removeComments": true,
            "declaration": true
        }
    },
    tests: {
        tsc: {
            "target": "ES5",
            "module": "system",
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "sourceMap": true,
            "removeComments": true,
            "declaration": true
        }
    },
    npm: {
        distPath: "npm/dist",
        sourcesTargetFolder: "ts",
        content: [ "LICENSE", "npm/package.json", "npm/README.md" ]
    }
}