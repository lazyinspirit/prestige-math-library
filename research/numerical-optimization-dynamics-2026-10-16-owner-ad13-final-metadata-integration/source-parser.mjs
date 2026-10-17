// Source-only projection helpers: no filesystem access, mutation, review verdict, or gate.
export function sectionMap(text) {
  const heads=[...text.matchAll(/^##[ \t]+([^\r\n]+)\r?\n/gm)];
  return new Map(heads.map((m,i)=>[m[1].trim(),text.slice(m.index+m[0].length,heads[i+1]?.index??text.length).trim()]));
}
export function proofRows(text,subject='source') {
  const rows=[];
  for(const [section,body] of sectionMap(text)) {
    if(!['Proof','Verification','Refutation','Counterexample'].includes(section))continue;
    const starts=[...body.matchAll(/^(\d+\.\d+)[ \t]+/gm)];
    for(let i=0;i<starts.length;i++) {
      const start=starts[i],whole=body.slice(start.index+start[0].length,starts[i+1]?.index??body.length).trim();
      // Consume complete consecutive trailing tag groups, excluding BOTH brackets.
      // Proof text may contain arbitrary earlier [fact] references and multiline $$ displays.
      const suffix=whole.match(/\s+((?:\[[^\[\]\r\n]+\][ \t\r\n]*)+)(?:∎)?\s*$/);
      if(!suffix)throw Error(`${subject} ${section} ${start[1]}: no unambiguous final tag suffix`);
      const tagGroups=[...suffix[1].matchAll(/\[([^\[\]]+)\]/g)].map(m=>m[1]);
      const inputs=tagGroups.flatMap(s=>s.split(',').map(t=>t.trim()));
      if(inputs.some(t=>!t||/[\[\]]/.test(t)))throw Error(`${subject} ${start[1]}: malformed tag token`);
      rows.push({section,step:start[1],claim:whole.slice(0,suffix.index),inputs});
    }
  }
  const keys=rows.map(r=>r.step);
  if(new Set(keys).size!==keys.length)throw Error(`${subject}: repeated step labels across proof sections`);
  return rows;
}
export function labelledFactUses(text,rows=proofRows(text)) {
  const sections=sectionMap(text);
  const explicit=[...sections].find(([name])=>name.startsWith('Facts'))?.[1];
  const body=explicit??(sections.get('Verification')??'').split(/^\d+\.\d+\s/m)[0];
  const labels=[...body.matchAll(/^\[([FALC]\d+)\][ \t]*/gm)],out=[];
  for(let i=0;i<labels.length;i++) {
    const m=labels[i],paragraph=body.slice(m.index+m[0].length,labels[i+1]?.index??body.length).trim();
    const sources=[...new Set([...paragraph.matchAll(/\[\[([^\]|#]+)/g)].map(x=>x[1]))];
    const uses=rows.filter(r=>r.inputs.includes(m[1])||r.claim.includes(`[${m[1]}]`)).map(r=>r.step);
    for(const source of sources)out.push({fact:m[1],source,uses});
  }
  return out;
}
