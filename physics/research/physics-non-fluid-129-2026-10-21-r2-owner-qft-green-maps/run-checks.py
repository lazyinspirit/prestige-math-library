from pathlib import Path
import json,subprocess,datetime,hashlib,concurrent.futures
run='physics-non-fluid-129-2026-10-21-r2';base=Path(f'research/{run}-owner-qft-green-maps');man=f'research/{run}-batch-68.pages.json';pages=json.loads(Path(man).read_text());ids=[i['id'] for p in pages for i in p.get('items',[])+p.get('examples',[])];paths=['items/'+i+'.md' for i in ids];(base/'items.json').write_text(json.dumps(ids,indent=2)+'\n');(base/'pages.json').write_text(json.dumps([p['id'] for p in pages])+'\n')
checks={
'proof-layout':['node','tools/physics-support/proof-layout.mjs',*paths],
'precheck':['node','tools/tsx-run.mjs','tools/physics-support/precheck.mts',*paths],
'rendercheck':['node','tools/physics-support/rendercheck.mjs',*paths,'library/quantum-field-theory-mathematics/qftx-local-algebras.md','library/quantum-field-theory-mathematics/qftx-local-algebras-examples.md'],
'proof-contract':['node','tools/physics-support/proof-contract.mjs',f'research/{run}-batch-68.proof-contracts.json','--strict'],
'content-policy':['node','tools/physics-support/content-policy.mjs',man],
'depcheck':['node','tools/physics-support/depcheck.mjs','--items-file',str(base/'items.json'),'--json'],
'validate-plan':['node','tools/physics-support/validate-plan.mjs','research/plan-spec.json','--pages-file',str(base/'pages.json')],
'source-fetch':['node','tools/physics-support/source-fetch-check.mjs','--coverage',f'research/{run}-batch-68.coverage.json'],
}
def check(row):
 name,cmd=row;start=datetime.datetime.now(datetime.timezone.utc).isoformat();r=subprocess.run(cmd,capture_output=True,text=True);out=r.stdout+r.stderr;f=base/(name+'.log');f.write_text(out);return dict(name=name,command=cmd,started_at=start,completed_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),exit_code=r.returncode,output_path=str(f),output_sha256=hashlib.sha256(out.encode()).hexdigest())
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:results=list(pool.map(check,checks.items()))
(base/'checks.json').write_text(json.dumps(results,indent=2)+'\n')
for r in results:print(r['name'],r['exit_code']);print(Path(r['output_path']).read_text()[-3500:])
