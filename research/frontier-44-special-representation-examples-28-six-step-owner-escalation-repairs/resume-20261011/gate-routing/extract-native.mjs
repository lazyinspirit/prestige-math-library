import fs from 'node:fs';import path from 'node:path';import {pathToFileURL} from 'node:url';
const root=process.cwd(), run='frontier-44-special-representation-examples-28-six-step',base=path.join(root,'research',`${run}-owner-escalation-repairs/resume-20261011/gate-routing`);
let code=fs.readFileSync(path.join(root,'tools/step3-scope.mjs'),'utf8');code=code.replace(/from '\.\/([^']+)'/g,(_,s)=>`from '${pathToFileURL(path.join(root,'tools',s))}'`);code=code.replace('fail(`step3-scope: unknown command ${JSON.stringify(command)}`);','export { manifestItems, manifestPages, groups, liveFingerprints, currentDecisionCarrier, stabilizedObligations, pageCarrier, hashValue };');const file=path.join(base,'native-readonly-functions.mjs');fs.writeFileSync(file,code);
process.argv=['node',file,'inspect-readonly','--run',run,'--root',root];const m=await import(pathToFileURL(file));const results=[];
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
for(const entry of fs.readdirSync(path.join(root,'research')).filter(x=>x.startsWith(run+'-alpha-')&&x.endsWith('-3a-decisions.json'))){
 const file=path.join(root,'research',entry),doc=read(file),targets=[];
 const groups=await import(pathToFileURL(path.join(root,'tools/step3-adjudicators.mjs')));const group=groups.step3Adjudicators(root,run,m.groups().rows).find(x=>x.label===doc.group);
 if(!group)throw Error('missing group '+doc.group);
 for(const batch of group.covers){const scope=read(path.join(root,'research',`${run}-step3-scope-${batch}.json`));
  targets.push(...(scope.touched??[]).map(id=>({obligation:`touched:${batch}:${id}`,id,batch,route:'touched',added:(scope.added??[]).includes(id)})));
  targets.push(...(scope.pages_touched??[]).map(id=>({obligation:`page:${batch}:${id}`,id,batch,route:'page',order_anchor:scope.page_order_anchors?.[id]??[]})));
  targets.push(...m.stabilizedObligations(batch,scope));targets.push(...(scope.reader_findings??[]).map(x=>({...x,route:'reader'})));targets.push(...(scope.refuter_findings??[]).map(x=>({...x,route:'flagged'})));
 }
 const live=new Map(group.covers.map(b=>[b,m.liveFingerprints(b)]));
 for(const d of doc.decisions){const target=targets.find(t=>t.obligation===d.obligation);if(!target)throw Error('missing target '+d.obligation);const cur=m.currentDecisionCarrier(d,target,live.get(target.batch));let before=null,after=null;
  if(['touched','page'].includes(target.route)){const labels=target.stabilized?['post','pre-3a']:['pre','post'];const key=target.route==='page'?'page_hashes':'hashes';const snapshots=labels.map(label=>read(path.join(root,'research',`${run}-step3-hash-${target.batch}-${label}.json`))[key]?.[target.id]);[before,after]=snapshots.map(v=>target.route==='page'?m.pageCarrier(v,target.order_anchor):v);}
  results.push({decision_file:path.relative(root,file),group:doc.group,decision:d,target,current:cur,before,reader_result:after,current_sha256:m.hashValue(cur),target_sha256:m.hashValue(target),stale:d.subject_sha256!==m.hashValue(cur)});
 }
}
fs.writeFileSync(path.join(base,'native-carrier-inventory.json'),JSON.stringify({version:1,run,rows:results},null,2)+'\n');console.log('Extracted exact native current carriers and immutable targets for '+results.length+' decisions.');
