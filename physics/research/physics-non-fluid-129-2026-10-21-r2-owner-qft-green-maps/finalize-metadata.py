from pathlib import Path
import yaml,json,re,os,shutil
run='physics-non-fluid-129-2026-10-21-r2';base=Path(f'research/{run}-owner-qft-green-maps')
(base/'initial-checks').mkdir(exist_ok=True)
for p in base.glob('*.log'):shutil.copyfile(p,base/'initial-checks'/p.name)
if (base/'checks.json').exists():shutil.copyfile(base/'checks.json',base/'initial-checks/checks.json')
def atomic(p,x):
 t=p.with_suffix('.new');t.write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n');os.replace(t,p)
man=Path(f'research/{run}-batch-68.pages.json');pages=json.loads(man.read_text())
for page in pages:
 for row in page.get('items',[])+page.get('examples',[]):
  s=Path('items',row['id']+'.md').read_text();_,fm,b=s.split('---',2);m=yaml.safe_load(fm)
  for key in ['deps','dependency_roles','dependency_level']:row[key]=m[key]
  heading='Definition' if m['kind']=='definition' else 'Statement';row['statement']=re.search(r'^## '+heading+r'\n\n(.*?)(?=\n## |\Z)',b,re.M|re.S).group(1).strip()
atomic(man,pages)
p=Path(f'research/{run}-batch-68.proof-contracts.json');d=json.loads(p.read_text())
for id,mp in {'lem-qftx-smooth-scalar-cauchy-evolution':{'2.3':'3.1','3.1':'4.1','4.1':'5.1'},'thm-qftx-green-hyperbolic-existence':{'1.2':'2.1','2.1':'3.1','3.1':'4.1'}}.items():
 for row in d['contracts'][id]['boundaries']:
  if 'evidence' in row:row['evidence']=re.sub(r'\b\d+\.\d+\b',lambda m:mp.get(m[0],m[0]),row['evidence'])
atomic(base/'contracts.staged.json',d)
# minimal missing prerequisite proposal, no edit of canonical plan
plan=json.loads(Path('research/plan-spec.json').read_text());idx={p['id']:p for p in plan['pages']}
def closure(id):
 seen=set();todo=[id]
 while todo:
  j=todo.pop()
  if j in seen:continue
  seen.add(j);todo+=idx.get(j,{}).get('requires',[])
 return seen
missing=['gr-causal-and-initial-value-boundaries','gr-framework-and-geometry','compactness','gr-gr13-convex-normal-neighborhoods','gr-gr14-full-high-regularity-symmetric-hyperbolic-proof','gr-tensors-and-observers','gr-connections-and-free-fall']
proposals=[p for p in missing if not any(p!=q and p in closure(q) for q in missing)]
atomic(base/'page-requires-proposal.json',{'page':'qftx-local-algebras','current':idx['qftx-local-algebras']['requires'],'missing_supplier_homes':missing,'minimal_additions_among_missing':proposals,'authority':'proposal only; root owns canonical plan/page requires'})
