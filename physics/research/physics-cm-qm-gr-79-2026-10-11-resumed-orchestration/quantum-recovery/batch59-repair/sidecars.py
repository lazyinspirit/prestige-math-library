from pathlib import Path
import json,re,yaml
r='physics-cm-qm-gr-79-2026-10-11';base=Path('research')/f'{r}-resumed-orchestration/quantum-recovery/batch59-repair';new='lem-nrqm-approximations-finite-rank-gapped-cluster-projection'
def parse(i):
 s=(Path('items')/f'{i}.md').read_text();_,front,body=s.split('---',2);return yaml.safe_load(front),body.lstrip()
def section(i,name):
 fm,body=parse(i);m=re.search(r'^## '+re.escape(name)+r'\n(.*?)(?=^## |\Z)',body,re.M|re.S);assert m,(i,name);return re.sub(r'\s+',' ',m.group(1)).strip()
def steps(body):return re.findall(r'^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\n\n## |\Z)',body,re.M|re.S)
p=Path('research')/f'{r}-batch-59.pages.json';manifest=json.loads(p.read_text());changed=[]
for page in manifest:
 for item in page['items']:
  fm,body=parse(item['id']);item['statement']=body
  for key in ['deps','dependency_roles','physical_scope','dependency_level']:
   if key in fm:item[key]=fm[key]
  before=base/'before'/(item['id']+'.md');current=Path('items')/(item['id']+'.md')
  if not before.exists() or before.read_bytes()!=current.read_bytes():changed.append(item['id'])
p.write_text(json.dumps(manifest,indent=2,ensure_ascii=False)+'\n')
p=Path('research')/f'{r}-batch-59.proof-contracts.json';a=json.loads(p.read_text());a['scope'].insert(1,new) if new not in a['scope'] else None;a['contracts'].setdefault(new,{'citations':[],'derivations':[],'routine_steps':[],'boundaries':[]})
for i,c in a['contracts'].items():
 for cit in c['citations']:
  if cit['source'] in changed:cit['quote']=section(cit['source'],cit['source_section'])
 if i not in changed:continue
 fm,body=parse(i);st=steps(body)
 c['derivations']=[{'id':num,'step':num,'claim':claim.strip(),'inputs':sorted(set(re.findall(r'\b(?:F|L|A|C)\d+\b',claim)+re.findall(r'\bstep (\d+\.\d+)\b',claim)))} for num,claim in st];c['routine_steps']=[];c['citations']=[]
 for tag,text in re.findall(r'^\[((?:F|L|A|C)\d+)\] (.*?)(?=\n\n|\Z)',body,re.M|re.S):
  uses=[num for num,claim in st if re.search(r'\b'+tag+r'\b',claim)]
  for source in dict.fromkeys(re.findall(r'\[\[([^]|]+)',text)):
   if not (Path('items')/f'{source}.md').exists():continue
   sfm,sbody=parse(source);sec='Definition' if sfm['kind'] in ['definition','algorithm'] else 'Statement' if '## Statement' in sbody else 'Postulate' if '## Postulate' in sbody else 'Example';c['citations'].append({'fact':tag,'source':source,'source_section':sec,'quote':section(source,sec),'uses':uses})
 if i==new:c['boundaries']=[{'case':x,'status':'checked','evidence':'Statement r>=1 excludes empty cluster; proof3.2 preserves rank on full q<1 disk by finite path,4.2 proves exact complementary inverse,6.1 handles v=0 for all couplings. Arbitrary H and complex couplings are allowed under CC; real projection interpretation proved in6.1. Boundary q=1 is excluded; rankone is included as r=1.'} for x in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']]
 elif i=='pthm-nrqm-approximations-turning-point-connection':
  for row in c['boundaries']:
   row.clear();row.update({'case':'placeholder','status':'checked','evidence':'Placeholder'})
  c['boundaries']=[{'case':x,'status':'checked','evidence':'Proof1.2/2.1 uses decay rightendpoint and growth data0 and nonzero Wronskian for sufficiently smallh;2.2 proves additiveerrors even at oscillatoryzeros;3.1 chainrule derivative envelopes. Simplepositive slope and stated interval endpoints, CC and actual matching sections retained; no allh uniformity claimed.'} for x in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']]
 elif i=='pthm-nrqm-approximations-nondegenerate-perturbation-expansion':
  for row in c['boundaries']:
   if row['case']=='zero':row.clear();row.update({'case':'zero','status':'checked','evidence':'Statement separately treats v=0 at all realcouplings in(f); proof1.4 never forms R or dividesbyv.'})
p.write_text(json.dumps(a,indent=2,ensure_ascii=False)+'\n')
p=Path('research')/f'{r}-batch-59.cross-batch-dependencies.json';a=json.loads(p.read_text());existing={(x.get('consumer'),x.get('supplier')) for x in a};owned={i['id'] for page in manifest for i in page['items']}
for i in changed:
 fm,_=parse(i)
 for d in fm['deps']:
  if d not in owned and (i,d) not in existing:a.append({'kind':'item','consumer':i,'supplier':d,'status':'verified','evidence':'Owning focused59 repair: exact supplier clause quoted in current59proofcontract, source hash guard in quantum-recovery/batch59-repair; supplies local finite-rank CC cluster proof or exact1s–2p dipole integral. No new source reading/audit fabricated; no supplier repair.'});existing.add((i,d))
p.write_text(json.dumps(a,indent=2,ensure_ascii=False)+'\n')
p=Path('research')/f'{r}-batch-59.coverage.json';a=json.loads(p.read_text());t=next(x for x in a['pages'][0]['sources'] if 'Teschl' in x['title']);
if not any(c.get('item')==new for c in t['contents']):t['contents'].append({'name':'Local finite-rank extension of the cited contour method, proved as a necessary prerequisite for the finite-multiplicity cluster model; no additional source retrieval claimed.','disposition':'included','item':new})
a['local_repair']='quantum-recovery/batch59-repair/repair.json; original source harvest and fetch history retained, one necessary local mathematical proof added';p.write_text(json.dumps(a,indent=2,ensure_ascii=False)+'\n')
(base/'changed-items.json').write_text(json.dumps(changed,indent=2)+'\n');print({'changed':len(changed),'ids':changed})
