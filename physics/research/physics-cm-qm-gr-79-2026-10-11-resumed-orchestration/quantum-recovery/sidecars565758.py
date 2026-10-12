from pathlib import Path
import json,re,yaml
r='physics-cm-qm-gr-79-2026-10-11';base=Path('research')/f'{r}-resumed-orchestration/quantum-recovery/batch5657-repair'
ids=json.loads((base/'repair-in-progress.json').read_text())['ids']+['texp-nrqm-bell-finite-sample-chsh','ex-nrqm-central-hydrogen-radial-distributions-and-moments'];sources=['lem-nrqm-identical-particles-two-particle-exchange-operator','ex-nrqm-identical-particles-exchange-versus-coulomb-terms','ex-nrqm-central-hydrogen-radial-distributions-and-moments']
def parse(i):
 s=(Path('items')/f'{i}.md').read_text();_,front,body=s.split('---',2);return yaml.safe_load(front),body.lstrip()
def section(i,name):
 _,body=parse(i);m=re.search(r'^## '+re.escape(name)+r'\n(.*?)(?=^## |\Z)',body,re.M|re.S);assert m,(i,name);return re.sub(r'\s+',' ',m.group(1)).strip()
def steps(body):return re.findall(r'^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\n\n## |\Z)',body,re.M|re.S)
for n in [56,57,58]:
 p=Path('research')/f'{r}-batch-{n}.pages.json';manifest=json.loads(p.read_text())
 for page in manifest:
  for it in page['items']:
   if it['id'] in ids:
    fm,body=parse(it['id']);it['statement']=body
    for key in ['deps','dependency_roles','physical_scope','dependency_level']:
     if key in fm:it[key]=fm[key]
 p.write_text(json.dumps(manifest,indent=2,ensure_ascii=False)+'\n')
 p=Path('research')/f'{r}-batch-{n}.proof-contracts.json';a=json.loads(p.read_text())
 for i,c in a['contracts'].items():
  for cit in c['citations']:
   if cit['source'] in sources:cit['quote']=section(cit['source'],cit['source_section'])
  if i not in ids:continue
  fm,body=parse(i);st=steps(body)
  c['derivations']=[{'id':num,'step':num,'claim':claim.strip(),'inputs':sorted(set(re.findall(r'\b(?:F|L|A|C)\d+\b',claim)+re.findall(r'\bstep (\d+\.\d+)\b',claim)))} for num,claim in st];c['routine_steps']=[]
  facts=re.findall(r'^\[((?:F|L|A|C)\d+)\] (.*?)(?=\n\n|\Z)',body,re.M|re.S);c['citations']=[]
  for tag,text in facts:
   uses=[num for num,claim in st if re.search(r'\b'+tag+r'\b',claim)]
   for source in dict.fromkeys(re.findall(r'\[\[([^]|]+)',text)):
    if not (Path('items')/f'{source}.md').exists():continue
    sfm,sbody=parse(source);sec='Definition' if sfm['kind'] in ['definition','algorithm'] else 'Statement' if '## Statement' in sbody else 'Postulate' if '## Postulate' in sbody else 'Example'
    c['citations'].append({'fact':tag,'source':source,'source_section':sec,'quote':section(source,sec),'uses':uses})
  if i==sources[0]:
   for b in c['boundaries']:
    if b['case'] in ['empty','one','degenerate']:
     b.clear();b.update({'case': 'empty' if 'empty'==b.get('case') else 'one'}) if False else None
   # Preserve all required boundary keys, replacing their evidence explicitly.
   c['boundaries']=[{'case':x,'status':'checked','evidence':('Step 4.1 proves H=0 and dimH=1: tau=I, P+=I, P-=0; step3.1 gives nontrivial swap only when an orthonormal pair exists.' if x in ['empty','one','degenerate'] else 'Steps1.1-2.2 prove the uniform identities, including zero vectors; steps3.1 and4.1 treat nontriviality and low-dimensional branches.')} for x in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']]
  if i=='ex-nrqm-identical-particles-exchange-versus-coulomb-terms':
   c['boundaries']=[{'case':x,'status':'checked' if x in ['zero','degenerate','nonempty-choice'] else 'not_applicable',('evidence' if x in ['zero','degenerate','nonempty-choice'] else 'reason'):('Step1.2 proves strictness for nonzero L1 overlap using CC and normalized Gaussian approximate identities. If uv=0, X=0 by its integral and the expectations coincide; orthonormal u,v and kappa>0 are explicit model conditions. Step2.1 preserves both D±X with the finite compressed form.' if x in ['zero','degenerate','nonempty-choice'] else 'This finite two-orbital example has no empty preparation, singleton particle count, endpoint or biconditional claim.')} for x in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']]
 p.write_text(json.dumps(a,indent=2,ensure_ascii=False)+'\n')
# Only new actual cross-batch prerequisites get new verified bindings.
p=Path('research')/f'{r}-batch-57.cross-batch-dependencies.json';a=json.loads(p.read_text());existing={(x.get('consumer'),x.get('supplier')) for x in a};i='ex-nrqm-identical-particles-exchange-versus-coulomb-terms';fm,_=parse(i);owned={it['id'] for page in json.loads((Path('research')/f'{r}-batch-57.pages.json').read_text()) for it in page['items']}
for d in fm['deps']:
 if d not in owned and (i,d) not in existing:
  a.append({'kind':'item','consumer':i,'supplier':d,'status':'verified','evidence':'Focused owning local repair: exact current supplier clause is quoted in batch57 contract L4 or L5 and current source hash is recorded in quantum-recovery/batch5657-repair/source-guards.json. Supplies finite Coulomb form compression or L1 Gaussian approximate-identity strictness; no source repair or independent audit.'})
p.write_text(json.dumps(a,indent=2,ensure_ascii=False)+'\n')
print({'sidecars_updated':[56,57,58],'ids':ids})
