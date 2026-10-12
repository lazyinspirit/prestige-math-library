from pathlib import Path
import json,re,yaml
root=Path(__file__).resolve().parents[2]
evidence=Path(__file__).resolve().parent
run='physics-cm-qm-gr-79-2026-10-11'
ids=['thm-nrqm-coulomb-'+x for x in ['transported-radial-endpoint-realization','jost-volterra-solution','continuum-spectral-density','onto-radial-continuum-transform','kummer-recurrence-and-termination','laguerre-bound-energy-exhaustion','ground-radial-probability-and-units','atomic-dipole-matrix-element-domain']]
ids.append('thm-nrqm-orbital-and-spin-dipole-angular-selection-rules')
meta={};texts={};statements={}
for i in ids:
 s=(root/'items'/f'{i}.md').read_text();texts[i]=s;meta[i]=yaml.safe_load(s.split('---',2)[1])
 statements[i]=re.search(r'## Statement\n(.*?)(?=\n## |\Z)',s,re.S).group(1).strip()

for batch in ['38','39']:
 p=root/'research'/f'{run}-batch-{batch}.pages.json'; before=evidence/'native-holds'/f'{p.name}.before-focused-radial-mirrors'
 if not before.exists():before.write_bytes(p.read_bytes())
 d=json.loads(p.read_text())
 for page in d:
  for row in page.get('items',[])+page.get('examples',[]):
   if not isinstance(row,dict) or row.get('id') not in meta:continue
   i=row['id'];m=meta[i]
   for key in ['id','kind','domain','title','dependency_level','deps','dependency_roles','aliases','provenance','sources']:
    if key in m:row[key]=m[key]
   row['statement']=statements[i]
 p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
 p=root/'research'/f'{run}-batch-{batch}.proof-contracts.json';before=evidence/'native-holds'/f'{p.name}.before-focused-radial-mirrors'
 if not before.exists():before.write_bytes(p.read_bytes())
 d=json.loads(p.read_text())
 for i,c in d['contracts'].items():
  for cite in c.get('citations',[]):
   if cite.get('source') in statements and cite.get('source_section')=='Statement':cite['quote']=statements[cite['source']]
  if i not in texts:continue
  proof=texts[i].split('## Proof',1)[1]
  rows=[]
  for match in re.finditer(r'(?m)^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\n\n## |\Z)',proof,re.S):
   num,body=match.groups();tags=re.search(r'\[([^\]]+)\](?:\s*∎)?\s*$',body)
   assert tags,(i,num)
   rows.append({'id':'step-'+num.replace('.','-'),'claim':body[:tags.start()].strip(),'step':num,'inputs':[x.strip() for x in tags.group(1).split(',')]})
  c['derivations']=rows
  c['focused_repair']={'reviewer':'/root/physics_cc_spectral_prerequisite','cycle':'distinct-radial-and-angular-repair-1-of-2','evidence':'research/'+evidence.name+'/','scope':'Actual local supplier and affected consumer corrections; original author and native history retained; no independent acceptance.'}
  if i.endswith('transported-radial-endpoint-realization'):
   for b in c.get('boundaries',[]):
    if b.get('case')=='zero':b['evidence']='The zero vector and gamma=0 free branch are included; explicit free multiplier, uniformly coercive shifted radial form and actual square-summable block domain are proved.'
  if i.endswith('jost-volterra-solution'):
   known={(x.get('fact'),x.get('source')) for x in c['citations']}
   for src in ['thm-morera-triangle-theorem','cor-locally-uniformly-convergent-holomorphic-series']:
    if ('F7',src) not in known:
     q=(root/'items'/f'{src}.md').read_text();q=re.search(r'## Statement\n(.*?)(?=\n## |\Z)',q,re.S).group(1).strip()
     c['citations'].append({'fact':'F7','source':src,'source_section':'Statement','quote':q,'uses':['4.1']})
 p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')

p=root/'research'/f'{run}-batch-39.coverage.json';before=evidence/'native-holds'/f'{p.name}.before-focused-radial-mirrors'
if not before.exists():before.write_bytes(p.read_bytes())
d=json.loads(p.read_text());d['focused_radial_repair']={'cycle':'distinct-radial-repair-1-of-2','items':ids[:-1],'evidence':'research/'+evidence.name+'/','status':'local repairs and checks; CC research and owning acceptance not transcribed as readiness'}
p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
(evidence/'changed-production-ids.json').write_text(json.dumps(ids,indent=2)+'\n')
print('Owned38/39 metadata and current exact proof quotes mirrored; no native acceptance')
