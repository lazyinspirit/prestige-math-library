import fs from 'node:fs';
const rows = JSON.parse(fs.readFileSync('research/frontier-13-alpha-a-6c-bundle.json','utf8'));
const by = new Map();
for (const r of rows) {
  if (!by.has(r.cited)) by.set(r.cited, { cited: r.cited, kind: r.citedKind, statement: r.citedStatement, uses: [] });
  by.get(r.cited).uses.push({ item: r.item, batch: r.batch, label: r.label, restatement: r.restatement, steps: r.usedAtSteps, sigs: r.sigs });
}
const groups = [...by.values()].sort((a,b)=> b.uses.length - a.uses.length);
fs.writeFileSync('research/frontier-13-alpha-a-6c-grouped.json', JSON.stringify(groups,null,1));
console.log(`distinct published targets: ${groups.length}`);
console.log(`total load-bearing edges:   ${groups.reduce((s,g)=>s+g.uses.length,0)}`);
console.log(`targets cited once:         ${groups.filter(g=>g.uses.length===1).length}`);
console.log(`top targets by fan-in:`);
for (const g of groups.slice(0,12)) console.log(`  ${g.uses.length}  ${g.cited}`);
