const { getConfigFileContent } = requireFromRoot('configFileController');
const { post } = requireFromRoot('../http');

exports.command = 'workspace [app]';
exports.desc = 'generates workspace';
exports.aliases = ['ws'];

exports.builder = {};

exports.handler = function (argv) {
  const { forceMode, currentApp } = getConfigFileContent();
  const force = new Boolean(argv.force || argv.f || forceMode);
  const app = argv.app || currentApp;

  if (!app) return console.log('ups, app name is not defined and is needed (check config app)...');

  post(`/Generator/RunWorkspace/${app}`, {
    force
  })
    .then(() => {
      if (app) console.log(`[${app}] Workspace generated.`);
      else console.log('All Workspaces for all outdated Applications generated.');
    })
    .catch(console.error);
};

