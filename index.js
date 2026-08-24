const PROJECT = "kestrel-file-index-yarn";
const PROFILE = "0014";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
