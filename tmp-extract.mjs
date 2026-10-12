import fs from 'fs';
import { factParagraphs, numberedProofSteps } from './tools/facts-block.mjs';
const ids = JSON.parse(process.argv[2]);
const out = {};
for (const id of ids) {
  const src = fs.readFileSync(`items/${id}.md`, 'utf8');
  const m = src.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  const body = m ? m[1] : src;
  out[id] = {
    facts: [...factParagraphs(body).values()].map(f => ({label: f.label, links: f.links})),
    steps: numberedProofSteps(body).map(s => ({id: s.id, text: s.text})),
  };
}
console.log(JSON.stringify(out));
