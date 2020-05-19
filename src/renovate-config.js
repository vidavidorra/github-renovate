const branchName = 'github-renovate';

module.exports = {
  branchPrefix: `${branchName}/`,
  enabledManagers: ['github-actions', 'regex'],
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  logLevel: 'debug',
  masterIssueTitle: 'Update Dependencies (Renovate Bot - GitHub)',
  onboarding: true,
  onboardingBranch: `${branchName}/configure`,
  platform: 'github',
  regexManagers: [
    {
      datasourceTemplate: 'github-tags',
      fileMatch: ['^\\.github/workflows/[^/]+\\.ya?ml$'],
      matchStrings: ['uses: (?<depName>.*?)@(?<currentValue>.*?)\\s'],
    },
  ],
  repositories: [
    'vidavidorra/docker-linux-images',
    'vidavidorra/github-renovate',
    'vidavidorra/global-linters',
    'vidavidorra/homebrew-caboodle',
    'vidavidorra/next-standard-version',
    'vidavidorra/repo-template',
    'vidavidorra/rigol-csv-analyser',
    'vidavidorra/tools',
  ],
};