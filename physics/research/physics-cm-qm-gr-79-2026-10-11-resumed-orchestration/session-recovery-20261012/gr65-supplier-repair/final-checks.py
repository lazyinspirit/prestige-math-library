from pathlib import Path
import json,subprocess,datetime
p=Path('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/session-recovery-20261012/gr65-supplier-repair');j=json.load(open(p/'metadata-updates.json'));items=['items/'+i+'.md' for i in j['changed_carriers']];commands=[['node','tools/physics-support/tsx-run.mjs','tools/physics-support/precheck.mts',*items],['node','tools/physics-support/rendercheck.mjs',*items,'library/general-relativity/gr-framework-and-geometry.md'],['node','tools/physics-support/proof-layout.mjs',*items]]
for n in range(65,80):
 c=f'research/physics-cm-qm-gr-79-2026-10-11-batch-{n}.proof-contracts.json'
 if c in j['metadata_files']:commands.append(['node','tools/physics-support/proof-contract.mjs',c,'--strict'])
for n in [65,67,70]:
 commands.extend([['node','tools/physics-support/manifest-deps.mjs',f'research/physics-cm-qm-gr-79-2026-10-11-batch-{n}.pages.json'],['node','tools/physics-support/content-policy.mjs',f'research/physics-cm-qm-gr-79-2026-10-11-batch-{n}.pages.json']])
results=[]
for cmd in commands:
 r=subprocess.run(cmd,text=True,capture_output=True);results.append({'command':' '.join(cmd),'exit_code':r.returncode,'output':r.stdout+r.stderr,'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat()});print(cmd[1],r.returncode,(r.stdout+r.stderr).splitlines()[-1] if r.stdout+r.stderr else '')
(p/'local-checks.json').write_text(json.dumps(results,indent=2)+'\n')
raise SystemExit(any(r['exit_code'] for r in results))
