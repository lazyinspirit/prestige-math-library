from pathlib import Path
import json,hashlib,subprocess,datetime,concurrent.futures,re,shutil
r='physics-non-fluid-129-2026-10-21-r2';b=Path(f'research/{r}-owner-hawking-metadata/stress-followup');d=b/'final121';d.mkdir(exist_ok=True);ids=['def-tgrx-hadamard-stress-contract','post-tgrx-semiclassical-equation','pthm-tgrx-state-difference-stress','ex-tgrx-quasistatic-is-not-backreaction'];files=['items/'+id+'.md' for id in ids]
for p in files+[f'research/{r}-batch-121.pages.json',f'research/{r}-batch-121.proof-contracts.json']:
 q=d/p;q.parent.mkdir(parents=True,exist_ok=True);assert not q.exists();shutil.copyfile(p,q)
checks={'precheck':['node','tools/tsx-run.mjs','tools/physics-support/precheck.mts',*files],'proof-layout':['node','tools/physics-support/proof-layout.mjs',*files],'rendercheck':['node','tools/physics-support/rendercheck.mjs',*files],'contracts':['node','tools/physics-support/proof-contract.mjs',f'research/{r}-batch-121.proof-contracts.json','--strict']}
def run(row):
 name,cmd=row;at=datetime.datetime.now(datetime.timezone.utc).isoformat();res=subprocess.run(cmd,capture_output=True,text=True);out=res.stdout+res.stderr;q=d/(name+'.log');q.write_text(out);return {'name':name,'command':cmd,'at':at,'exit_code':res.returncode,'output':str(q),'sha256':hashlib.sha256(out.encode()).hexdigest()}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:rows=list(pool.map(run,checks.items()))
(d/'checks.json').write_text(json.dumps(rows,indent=2)+'\n')
for row in rows:print(row['name'],row['exit_code'],Path(row['output']).read_text())
# Exact current manifested interfaces and physical qualifiers must match the carrier.
man=json.loads(Path(f'research/{r}-batch-121.pages.json').read_text());mrows={row['id']:row for p in man for row in p.get('items',[])+p.get('examples',[]) if isinstance(row,dict)}
for id in ids:
 txt=Path('items',id+'.md').read_text();h='Definition' if id.startswith('def-') else 'Postulate' if id.startswith('post-') else 'Statement' if id.startswith('pthm-') else 'Example';actual=re.search(r'^## '+h+r'\n\n(.*?)(?=\n## |\Z)',txt,re.S|re.M).group(1).strip();assert mrows[id]['statement']==actual,id
print('Four exact source/manifest interface mirrors match.')
