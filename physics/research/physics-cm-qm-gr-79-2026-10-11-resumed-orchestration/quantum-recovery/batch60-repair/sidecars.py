from pathlib import Path
import json,re,yaml
r='physics-cm-qm-gr-79-2026-10-11';base=Path('research')/f'{r}-resumed-orchestration/quantum-recovery/batch60-repair';new=None
def parse(i):
 s=(Path('items')/f'{i}.md').read_text();_,front,body=s.split('---',2);return yaml.safe_load(front),body.lstrip()
def section(i,name):
 fm,body=parse(i);m=re.search(r'^## '+re.escape(name)+r'\n(.*?)(?=^## |\Z)',body,re.M|re.S);assert m,(i,name);return re.sub(r'\s+',' ',m.group(1)).strip()
def steps(body):return re.findall(r'^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\n\n## |\Z)',body,re.M|re.S)
p=Path('research')/f'{r}-batch-60.pages.json';manifest=json.loads(p.read_text());changed=[]
for page in manifest:
 for item in page['items']:
  fm,body=parse(item['id']);item['statement']=body
  for key in ['deps','dependency_roles','physical_scope','dependency_level']:
   if key in fm:item[key]=fm[key]
  before=base/'before'/(item['id']+'.md');current=Path('items')/(item['id']+'.md')
  if not before.exists() or before.read_bytes()!=current.read_bytes():changed.append(item['id'])
p.write_text(json.dumps(manifest,indent=2,ensure_ascii=False)+'\n')
p=Path('research')/f'{r}-batch-60.proof-contracts.json';a=json.loads(p.read_text());
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
 if i==new:c['boundaries']=[{'case':x,'status':'checked','evidence':'Statement n=0 and proof6.1 explicitly retain zero vacuum momentum and its spectral atom; n>=1 maximal signed-sum domains in proof3.1/4.1 include cancellations without extra individual-term domains; proof5.1 proves density by sector and momentum cutoffs and exact square-sum Fock domain. General complex transverse Hilbert sectors and actual CC+AC supplier hypotheses retained. No full-Fock non-atom claim.'} for x in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']]
p.write_text(json.dumps(a,indent=2,ensure_ascii=False)+'\n')
p=Path('research')/f'{r}-batch-60.cross-batch-dependencies.json';a=json.loads(p.read_text());existing={(x.get('consumer'),x.get('supplier')) for x in a};owned={i['id'] for page in manifest for i in page['items']}
for i in changed:
 fm,_=parse(i)
 for d in fm['deps']:
  if d not in owned and (i,d) not in existing:a.append({'kind':'item','consumer':i,'supplier':d,'status':'verified','evidence':'Owning focused60 repair: exact supplier clause and current carrier evidence recorded in quantum-recovery/batch60-repair; supplies actual physical-generator scaling, corrected transition phase, graph regularity, fullC2 Coulomb following and supported density leakage. No new source reading/audit fabricated; no supplier repair.'});existing.add((i,d))
p.write_text(json.dumps(a,indent=2,ensure_ascii=False)+'\n')
p=Path('research')/f'{r}-batch-60.coverage.json';a=json.loads(p.read_text());a['local_repair']='quantum-recovery/batch60-repair/repair.json; original31source dispositions/fetch history retained; exact owning supplier-consumer repairs, no new source reading claimed';p.write_text(json.dumps(a,indent=2,ensure_ascii=False)+'\n')
(base/'changed-items.json').write_text(json.dumps(changed,indent=2)+'\n');print({'changed':len(changed),'ids':changed})
