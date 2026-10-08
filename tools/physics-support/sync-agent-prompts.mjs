#!/usr/bin/env node
// Keep physics worker instructions aligned with the current mathematics briefs.
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = fileURLToPath(new URL('../../', import.meta.url));
const source = join(repo, 'briefs');
const target = join(repo, 'physics/briefs');
const check = process.argv.includes('--check');
const model = readFileSync(join(repo, 'PHYSICS-CONTENT-MODEL.md'), 'utf8');
const section = model.split('## Concise physics agent instructions\n')[1]?.split('\n## ')[0];
const guidance = section?.slice(section.indexOf('Read `CLAUDE.md`')).trim();
if (!guidance?.startsWith('Read `CLAUDE.md`')) throw Error('Missing physics agent guidance');
const prefix = `# Mandatory physics instructions\n\n${guidance}\n\n---\n\n`;
let count = 0;
const mismatches = [];
function sync(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const input = join(dir, entry.name);
    if (entry.isDirectory()) { sync(input); continue; }
    const path = relative(source, input);
    const output = join(target, path);
    let text = readFileSync(input, 'utf8');
    // This shared template also contains mathematics run notes. Mirror its
    // instructions without importing historical evidence into physics prompts.
    if (path === 'tasks/frontier-dependency-ledger.md') {
      const start = text.indexOf('The unified ledger is ');
      if (start < 0) throw Error('Missing dependency ledger instructions');
      const end = text.indexOf('\n## ', start);
      text = '# Same-frontier dependency record\n\n' + text.slice(start, end < 0 ? undefined : end).trimEnd() + '\n';
    }
    if (!path.startsWith('schemas/')) {
      text = prefix + text.replace(/tools\/(autopilot\/)?/g,
        (_, engine) => engine ? 'tools/physics-autopilot/' : 'tools/physics-support/');
    }
    count++;
    if (existsSync(output) && readFileSync(output, 'utf8') === text) continue;
    if (check) mismatches.push(path);
    else { mkdirSync(dirname(output), { recursive: true }); writeFileSync(output, text); }
  }
}
sync(source);
if (mismatches.length) {
  console.error(`Physics prompts differ from mathematics: ${mismatches.join(', ')}`);
  process.exitCode = 1;
} else console.log(`${check ? 'Verified' : 'Synchronized'} ${count} physics prompt and schema files.`);
