from pathlib import Path
import json,runpy,copy,difflib,re
B=Path(__file__).resolve().parent;ROOT=B.parents[1];R='numerical-optimization-dynamics-2026-10-16'
report=json.loads((ROOT/f'research/{R}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json').read_text());prior=json.loads((B/'packet-v1/operations.json').read_text())['operations'];skip={(x['id'],x['case'])for x in prior};maps={}
for name in ['template78.py','template79.py','template81_84.py']:maps.update(runpy.run_path(str(B/name))['M'])
ids={}
for n in [78,79,81,84]:
 for id in json.loads((ROOT/f'research/{R}-batch-{n}.proof-contracts.json').read_text())['contracts']:ids[id]=n
clusterrows={(r['id'],r['case']):r for c in report['templates']for r in c['rows']if r['id']in ids}
# Explicit correction of source-contradictory boilerplate. Other statuses retained.
overrides={
('cex-small-residual-does-not-certify-positivity','one'):'checked',('cex-small-residual-does-not-certify-positivity','degenerate'):'checked',
('lem-modified-patankar-euler-positive-tube-local-error-and-stability','endpoints'):'checked',('thm-zero-compatible-modified-patankar-euler-admissibility','endpoints'):'checked',
('alg-age-cohort-characteristic-quadrature','empty'):'checked',('thm-age-cohort-quadrature-weak-consistency','empty'):'checked',
('ex-constant-mortality-and-age-localized-fertility','degenerate'):'not_applicable',
('alg-gauss-newton-qr-svd-step-with-rank-safeguard','endpoints'):'checked'
}
ops=[];intents=[];P=B/'template-own-packet-v2'
for n in [78,79,81,84]:
 rel=Path('research')/f'{R}-batch-{n}.proof-contracts.json';raw=(ROOT/rel).read_bytes();doc=json.loads(raw);new=copy.deepcopy(doc)
 for id,c in new['contracts'].items():
  for idx,row in enumerate(c['boundaries']):
   key=id,row['case']
   if key not in clusterrows or key in skip:continue
   assert id in maps and row['case']in maps[id],key
   text=maps[id][row['case']]
   phasefile=ROOT/f'research/{R}-owner-render-precheck-diagnostics-20261016T111118455346Z/phase-preservation-review.json'
   phases={x['path']:x['old_to_final_step_labels']for x in json.loads(phasefile.read_text())}
   stepmap=phases.get('items/'+id+'.md',{})
   text=re.sub(r'(?<![0-9.])(\d+\.\d+)(?![0-9.])',lambda m:stepmap.get(m[1],m[1]),text)
   if id=='thm-mprk22-1-positive-conservative' and row['case']=='degenerate':text='The Statement permits zero transfer rates. '+text
   before=copy.deepcopy(row);after=copy.deepcopy(row);after.pop('reason',None);after.pop('evidence',None);status=overrides.get(key,row['status']);after['status']=status;after['reason'if status=='not_applicable'else'evidence']=text
   # Preserve historical adjudication fields; root owns actual future guard rebinding.
   c['boundaries'][idx]=after
   ops.append({'batch':n,'id':id,'case':row['case'],'before':before,'after':after})
   intents.append({'batch':n,'id':id,'case':row['case'],'reviewer':'num_remaining_triage','kind':'source-specific-boundary-replacement','reason':text,'root_only':'After final source application, bind current resulting row and actual source for any remaining legitimate template cluster; no guard hashes generated here.'})
  p=P/'source-before/items'/f'{id}.md';p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes((ROOT/'items'/f'{id}.md').read_bytes())
 for kind,data in [('before',raw),('proposed',(json.dumps(new,indent=2,ensure_ascii=False)+'\n').encode())]:
  p=P/kind/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data)
 (P/f'batch-{n}.diff').write_text(''.join(difflib.unified_diff(raw.decode().splitlines(True),(json.dumps(new,indent=2,ensure_ascii=False)+'\n').splitlines(True),fromfile=str(rel),tofile=str(rel)+' (proposed)')))
(P/'operations.json').write_text(json.dumps({'canonical_writes':False,'operations':ops,'excludes': 'All53prior contradiction/anchor operations and all helper template71-77/80/82/83 fields; root merges field-wise.'},indent=2)+'\n');(P/'template-review-intents.json').write_text(json.dumps(intents,indent=2)+'\n');print(len(ops),'templatefields',len(set(x['id']for x in ops)),'items')
