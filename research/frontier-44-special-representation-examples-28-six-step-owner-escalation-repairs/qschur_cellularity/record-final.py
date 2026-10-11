from pathlib import Path
import re,json,hashlib,subprocess,datetime
base=Path('research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/qschur_cellularity'); original=json.loads((base/'pre-edit.json').read_text()); paths=[r['path'] for r in original]; now=datetime.datetime.now(datetime.timezone.utc).isoformat();sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
commands=[['node','tools/tsx-run.mjs','tools/precheck.mts',*paths,'--json'],['node','tools/rendercheck.mjs',*paths,'--json'],['node','tools/proof-layout.mjs',*paths]]
checks=[]
for i,c in enumerate(commands):
 p=subprocess.run(c,capture_output=True,text=True); name=['precheck','rendercheck','proof-layout'][i];(base/(name+'.txt')).write_text(p.stdout+p.stderr);checks.append({'command':' '.join(c),'exit_code':p.returncode,'output':p.stdout+p.stderr,'date':now,'hashes':{x:sha(x) for x in paths}});assert p.returncode==0
(base/'local-checks.json').write_text(json.dumps(checks,indent=2)+'\n')
contracts=json.load(open('research/frontier-44-special-representation-examples-28-six-step-batch-13.proof-contracts.json'))['contracts']; proposals={}
for p in paths:
 s=Path(p).read_text();id=Path(p).stem; fm=s.split('---',2)[1];body=s.split('---',2)[2]; deps=re.search(r'^deps:\s*\[([^]]*)\]',fm,re.M).group(1); row={'id':id,'raw_sha256':sha(p),'deps':re.findall(r'[a-z][a-z0-9-]+',deps),'dependency_level':int(re.search(r'^dependency_level:\s*(\d+)',fm,re.M).group(1)),'body':body,'source_changed':sha(p)!=next(x['raw_sha256'] for x in original if x['path']==p)}
 if row['source_changed']:
  c=json.loads(json.dumps(contracts[id])); c['derivations']=[]
  for m in re.finditer(r'^(\d+\.\d+) (.*) \[([^\n]+)\](?: ∎)?$',body,re.M):
   step,claim,tags=m.groups();c['derivations'].append({'id':'step-'+step.replace('.','-'),'claim':claim,'step':step,'inputs':[x.strip() for x in tags.split(',')]})
  c['citations']=[]
  for m in re.finditer(r'^\[(F\d+)\] (.*)$',body,re.M):
   fact,text=m.groups(); uses=[d['step'] for d in c['derivations'] if fact in d['inputs']]
   for dep in re.findall(r'\[\[([^]|]+)(?:\|[^]]+)?\]\]',text):
    q=Path('items')/(dep+'.md');d=q.read_text().split('---',2)[2];sect=next((h for h in ['Statement','Definition','Example','Statement refuted','Remarks'] if '\n## '+h+'\n' in d),re.search(r'^## (.+)$',d,re.M).group(1));quote=d.split('## '+sect+'\n',1)[1].split('\n## ',1)[0].strip();c['citations'].append({'fact':fact,'source':dep,'source_section':sect,'quote':quote,'uses':uses})
  c['risk_review']={'status':'open','reviewer':'repair_qschur_cellularity-local-constructor','notes':'Substantive local repair supplied; this proposed contract does not establish native independent acceptance. Source construction and focused validation are recorded in this evidence directory. Remaining external classifier and Gram/Jantzen consumer supplier holds require their own owners.','item_raw_sha256':sha(p)};row['proposed_contract']=c
 proposals[id]=row
(base/'aggregate-proposals.json').write_text(json.dumps({'version':1,'date':now,'root_only_integration':True,'items':proposals,'page_changes':[],'level_note':'New cross-batch48 permutation-basis dependency requires root batch-graph policy and serialized level refresh; item graph acyclic. New definition local level12 follows current supplier11, while downstream old item levels need root integration refresh.'},indent=2)+'\n')
# old/current formal-interface focused consumers, including originally captured deps
inventory=json.loads((base/'consumer-inventory.json').read_text());notes=[]
for r in inventory:
 p=Path(r['path']);s=p.read_text(); lines=s.splitlines(); hits=[{'line':i+1,'text':l} for i,l in enumerate(lines) if 'def-type-a-q-schur-algebra-and-weyl-modules' in l and not l.startswith('deps:')]
 direct='def-type-a-q-schur-algebra-and-weyl-modules' in r['deps'];
 note='The retained ancestor q-Schur interfaces and signed/corner dictionaries are unchanged; explicit nonnegative composition counts make their previously intended zero padding valid. This focused interface check does not certify the independent content of this downstream theorem.'
 if direct: note='Direct use is consistent with retained End_H(sum Mμ), right semistandard maps/cell modules, weight projections/ranks and nonzero heads; weak compositions explicitly allow the zero padding already used. No change to module, form, label or dominance convention. Independent consumer suppliers remain under native/allocated reviews.'
 if r['id'] in ['prop-schur-functor-compares-first-level-branching-with-hecke-restriction','thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction']:note+=' General quantum highest-weight/tensor realization and first-level branching are not consequences of this cellular construction; the modular owner has been notified and this consumer branch remains held as applicable.'
 notes.append({'id':r['id'],'path':r['path'],'raw_sha256':sha(p),'direct':direct,'declared_deps_at_inventory':r['deps'],'actual_interface_occurrences':hits,'check':note,'repair_needed_due_to_this_interface_change':False,'scope':'focused retained-interface/zero-composition compatibility, not whole-consumer mathematical acceptance'})
(base/'consumer-checks.json').write_text(json.dumps({'version':1,'seed':'def-type-a-q-schur-algebra-and-weyl-modules','original_aliases':[],'current_aliases':[],'formal_delta':'Explicit weak-composition and tableau-content zero convention; exact original maps and every richest original module/form/label claim retained. Added proof, no original result weakened.','rows':notes},indent=2)+'\n')
(base/'final-hashes.json').write_text(json.dumps({p:sha(p) for p in paths},indent=2)+'\n')
print('checks',[(c['exit_code'],c['output'].strip()[-85:]) for c in checks]);print('proposal items',len(proposals),'focused consumer rows',len(notes));print(json.dumps({p:sha(p) for p in paths},indent=2))
