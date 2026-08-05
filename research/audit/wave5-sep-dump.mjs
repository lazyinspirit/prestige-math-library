// Audit-Beta helper (wave 5, topology-separation): print the licensing section of
// cited items, so every [F#]/[A#]/[L#] fact can be checked against the target's own text.
import fs from 'fs';

const SECTIONS = ['Statement refuted', 'Statement', 'Definition', 'Example'];
const limit = Number(process.env.LIMIT || 3000);

for (const id of process.argv.slice(2)) {
  const text = fs.readFileSync(`items/${id}.md`, 'utf8');
  const body = text.split(/\n---\n/).slice(1).join('\n---\n');
  let out = null;
  for (const name of SECTIONS) {
    const re = new RegExp(`^## ${name}\\s*$([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, 'm');
    const m = body.match(re);
    if (m) { out = `## ${name}\n${m[1]}`; break; }
  }
  const title = (text.match(/^title: (.*)$/m) || [])[1] || '';
  console.log(`=========== ${id}  ${title}`);
  console.log((out || body).slice(0, limit).trim());
  console.log('');
}
