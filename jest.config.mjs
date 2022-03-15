const defaultConfig = {
  coverageDirectory:'coverage',
  coverageProvider:'v8',
  coverageReporters:[
    'text',
    'lcov',
  ],
  coverageThreshold:{
    global:{
      branch:100,
      functions:100,
      lines:100,
      statements:100,
    }
  },
  maxWorkers:'50%',
  watchPathIgnorePatterns:[
    "node_modules"
  ],
  transformIgnorePatterns:[
    'node_modules'
  ]
    

}
export default {
  projects:[{
    ...defaultConfig,
    testEnvironment:'node',
    displayName:'backend',
    collectCoverageFrom:[
      'serve/',
      '!server/index.js',
    ],
    transformIgnorePatterns:[
      ...defaultConfig.transformIgnorePatterns,
      'public'
    ],
    testMatch:[
      '**/test/**/server/**/*.test.js'
    ]
  }]
}