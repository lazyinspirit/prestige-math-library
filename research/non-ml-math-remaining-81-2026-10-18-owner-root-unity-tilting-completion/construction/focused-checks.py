from pathlib import Path
import json,subprocess,concurrent.futures,hashlib,datetime
run='non-ml-math-remaining-81-2026-10-18';r=Path('research')/(run+'-owner-root-unity-tilting-completion');prefix=Path('research')/(run+'-batch-68');inv=json.loads((r/'construction/integrated-item-inventory.json').read_text());items=['items/'+i+'.md'for i in inv['ids']];proofs=['items/'+i+'.md'for i in inv['proof_bearing']];pages=['library/quantum-groups-and-crystal-bases/quantum-groups-at-roots-of-unity-and-tilting-quotients.md','library/quantum-groups-and-crystal-bases/quantum-groups-at-roots-of-unity-and-tilting-quotients-examples.md'];inputs=items+pages+[str(prefix)+'.pages.json',str(prefix)+'.proof-contracts.json'];hashes={p:hashlib.sha256(Path(p).read_bytes()).hexdigest()for p in inputs};(r/'checks/inputs.before.json').write_text(json.dumps(hashes,indent=2)+'\n')
commands={
'precheck':['node','tools/tsx-run.mjs','tools/precheck.mts',*items],
'render':['node','tools/rendercheck.mjs',*items,*pages],
'proof-layout':['node','tools/proof-layout.mjs',*proofs],
'contracts':['node','tools/proof-contract.mjs',str(prefix)+'.proof-contracts.json','--strict'],
'manifest-deps':['node','tools/manifest-deps.mjs',str(prefix)+'.pages.json'],
'content-policy':['node','tools/content-policy.mjs',str(prefix)+'.pages.json'],
'depcheck':['node','tools/depcheck.mjs','--items-file',str(prefix)+'.item-scope.json','--json'],
}
def check(k,cmd):
 start=datetime.datetime.now(datetime.timezone.utc).isoformat();x=subprocess.run(cmd,text=True,capture_output=True);(r/'checks'/(k+'.stdout')).write_text(x.stdout);(r/'checks'/(k+'.stderr')).write_text(x.stderr);return {'name':k,'command':cmd,'started_at':start,'ended_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'exit_code':x.returncode,'stdout':str(r/'checks'/(k+'.stdout')),'stderr':str(r/'checks'/(k+'.stderr'))}
with concurrent.futures.ThreadPoolExecutor(max_workers=7)as e:results=list(e.map(lambda kv:check(*kv),commands.items()))
after={p:hashlib.sha256(Path(p).read_bytes()).hexdigest()for p in inputs};changed=[p for p in inputs if hashes[p]!=after[p]];receipt={'scope_items':len(items),'proof_items':len(proofs),'rendered_files':len(items)+len(pages),'results':results,'input_hashes':after,'changed_during_checks':changed,'readiness_or_gate_claim':False};(r/'checks/focused-checks.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps({'results':[(x['name'],x['exit_code'])for x in results],'changed':changed}));
for x in results:
 if x['exit_code']:print(x['name'],Path(x['stdout']).read_text()[-5000:],Path(x['stderr']).read_text()[-2000:])
