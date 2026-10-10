from pathlib import Path
import json,hashlib,subprocess,concurrent.futures,datetime
base=Path('physics/research');run='physics-em-sr-40-2026-10-08';prefix=str(base/run);paths=sorted(base.glob(run+'-batch-*.proof-contracts.json'));scope=[];entries={};pins={};commands=[]
for p in paths:
 raw=p.read_bytes();pins[str(p)]=hashlib.sha256(raw).hexdigest();d=json.loads(raw);scope.extend(d['scope']);entries.update(d['contracts'])
frozen={'version':1,'scope':scope,'contracts':entries};assert frozen==json.loads(Path(prefix+'-gate-contract-final-after.json').read_text())
Path(prefix+'-gate-contract-final-frozen.json').write_text(json.dumps(frozen,indent=2)+'\n')
def strict(p):
 cmd=['node','tools/physics-support/proof-contract.mjs',str(p),'--strict','--json'];r=subprocess.run(cmd,capture_output=True,text=True);d=json.loads(r.stdout);return {'command':cmd,'exit_code':r.returncode,'file':str(p),'errors':d['errors'],'warnings':d['warnings'],'checked':len(d['checked']),'scope':len(d['scope'])}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:strict_results=list(pool.map(strict,paths))
Path(prefix+'-gate-contract-final-local-strict.json').write_text(json.dumps(strict_results,indent=2)+'\n');print('actual strict',sum(len(r['errors'])for r in strict_results),'errors',sum(r['checked']for r in strict_results),'checked',sum(r['exit_code']!=0 for r in strict_results),'failed files')
for name,cmd in [
 ('citation',['node','tools/physics-support/citation-fidelity.mjs',*map(str,paths),'--items-dir','physics/items','--json','--fail-on-missing-quote']),
 ('boundary',['node','tools/physics-support/boundary-audit.mjs',*map(str,paths),'--items-dir','physics/items','--json','--fail-on-contradicted','--fail-on-template']),
 ('finite',['node','tools/physics-support/finite-smoke.mjs',prefix+'-gate-contract-final-frozen.json'])]:
 r=subprocess.run(cmd,capture_output=True,text=True);Path(prefix+'-gate-contract-final-local-'+name+('.txt'if name=='finite'else'.json')).write_text(r.stdout);commands.append({'name':name,'command':cmd,'exit_code':r.returncode,'stderr':r.stderr});print(name,'exit',r.returncode)
for p in paths:assert hashlib.sha256(p.read_bytes()).hexdigest()==pins[str(p)],'post-check contract drift'
Path(prefix+'-gate-contract-final-frozen-hashes.json').write_text(json.dumps(pins,indent=2)+'\n');Path(prefix+'-gate-contract-final-local-command-results.json').write_text(json.dumps(commands,indent=2)+'\n')
print('40 contract pins stable after actual checks')
