import fs from 'node:fs';
const groups = JSON.parse(fs.readFileSync('research/frontier-13-alpha-a-6c-grouped.json','utf8'));
const from = +process.argv[2]||0, to = +process.argv[3]||groups.length;
const out=[];
groups.slice(from,to).forEach((g,i)=>{
  out.push(`\n${'='.repeat(96)}\n[#${from+i}] TARGET ${g.cited}  (${g.kind})`);
  out.push(`--- STATEMENT (ground truth) ---\n${g.statement.replace(/\n{2,}/g,'\n').trim()}`);
  out.push(`--- ${g.uses.length} RESTATEMENT(S) ---`);
  for (const u of g.uses) out.push(`  * ${u.item} [${u.label}] @steps ${u.steps.join(',')||'-'}\n    ${u.restatement.replace(/\n/g,' ')}`);
});
console.log(out.join('\n'));
