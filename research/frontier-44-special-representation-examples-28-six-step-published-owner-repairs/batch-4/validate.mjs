import {readFileSync, writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const dir = 'research/frontier-44-special-representation-examples-28-six-step-published-owner-repairs/batch-4';
const ids = ['def-cardinal', 'fs-ordinals-form-a-set'];
const files = ids.map(id => `items/${id}.md`);
const checks = [];
function run(label, command, subjects=ids) {
  const checked_at = new Date().toISOString();
  const result = spawnSync(command[0], command.slice(1), {encoding:'utf8', maxBuffer:16*1024*1024});
  const hashes = Object.fromEntries(subjects.map(id=>[id,itemHashGuard(readFileSync(`items/${id}.md`, 'utf8'))]));
  const record = {label, command, checked_at, exit_code:result.status, output:result.stdout, stderr:result.stderr, content_hashes:hashes};
  if(subjects.length === 1) record.content_sha256 = hashes[subjects[0]];
  checks.push(record);
  writeFileSync(`${dir}/validation.json`, JSON.stringify({checks},null,2)+'\n');
  process.stdout.write(`${label}: exit ${result.status}\n${result.stdout}${result.stderr}`);
  if(result.status !== 0) process.exit(result.status || 1);
}
run('reflow', ['node','tools/tsx-run.mjs','tools/reflow.mts',...files]);
run('precheck-initial', ['node','tools/tsx-run.mjs','tools/precheck.mts',...files]);
run('proof-layout-final-batched', ['node','tools/proof-layout.mjs',...files]);
for (const id of ids) {
 const file = `items/${id}.md`;
 run(`${id}:precheck-json`, ['node','tools/tsx-run.mjs','tools/precheck.mts',file,'--json'], [id]);
 if(id === 'fs-ordinals-form-a-set') run(`${id}:precheck`, ['node','tools/tsx-run.mjs','tools/precheck.mts',file], [id]);
 run(`${id}:rendercheck`, ['node','tools/rendercheck.mjs',file], [id]);
}
const before = JSON.parse(readFileSync(`${dir}/before-index.json`, 'utf8'));
for(const carrier of before.carriers){
 const old = readFileSync(carrier.before_file, 'utf8');
 const current = readFileSync(`items/${carrier.id}.md`, 'utf8');
 carrier.pre_sha256 = itemHashGuard(old);
 carrier.content_sha256 = itemHashGuard(current);
 carrier.current_raw_sha256 = createHash('sha256').update(current).digest('hex');
 const heading = carrier.id === 'def-cardinal' ? 'Definition' : 'Statement';
 const section = text => text.split(`## ${heading}\n`)[1].split('\n## ')[0];
 carrier.original_public_section_unchanged = section(old) === section(current);
}
writeFileSync(`${dir}/carrier-hashes.json`, JSON.stringify(before,null,2)+'\n');
