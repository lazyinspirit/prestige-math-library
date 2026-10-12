import json,subprocess,concurrent.futures,datetime,hashlib
from pathlib import Path
run='physics-cm-qm-gr-79-2026-10-11';e=Path('research/'+run+'-stability-consumer-successor');ids=json.loads((e/'changed-items.json').read_text());cone=json.loads((e/'consumer-cone.json').read_text())['old_current_alias_union'];
subprocess.run(['node',str(e/'reconcile.mjs')],check=True,capture_output=True)
# Refresh proof contracts from actual final carriers only; retain original authored boundary/risk fields.
for b in [3,4,7,20,25,27]:
 bs=[n['id'] for n in cone if n.get('batch')==str(b)]
 if b==7:bs=['prop-cm-oscillator-amplitude-maximum']
 subprocess.run(['node','tools/physics-support/regen-contract-entries.mjs',f'research/{run}-batch-{b}.proof-contracts.json',*bs],check=True,capture_output=True)
paths=['items/'+id+'.md' for id in ids]
jobs=[['node','tools/tsx-run.mjs','tools/physics-support/precheck.mts',*paths,'--json'],['node','tools/physics-support/rendercheck.mjs',*paths],['node','tools/physics-support/proof-layout.mjs',*paths]]
for b in [3,4,7,20,25,27]:
 bs=[n['id'] for n in cone if n.get('batch')==str(b)]
 if b==7:bs=['prop-cm-oscillator-amplitude-maximum']
 p=f'research/{run}-batch-{b}.proof-contracts.json';contracts=json.loads(Path(p).read_text())['contracts'];bs=[i for i in bs if i in contracts and contracts[i].get('derivations')];jobs.append(['node','tools/physics-support/proof-contract.mjs',p,'--items',','.join(bs),'--strict','--json'])
def check(args):
 cp=subprocess.run(args,capture_output=True,text=True);return {'command':args,'exit_code':cp.returncode,'stdout':cp.stdout,'stderr':cp.stderr,'at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as x: rows=list(x.map(check,jobs))
(e/'final-checks.json').write_text(json.dumps({'current_item_raw_hashes':{id:hashlib.sha256(Path('items',id+'.md').read_bytes()).hexdigest() for id in ids},'checks':rows},indent=2)+'\n')
for r in rows: print(r['command'][1],r['exit_code'], (r['stdout']+r['stderr'])[-1400:] if r['exit_code'] else '')
