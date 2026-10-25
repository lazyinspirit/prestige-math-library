#!/usr/bin/env python3
"""Private independent checks only; no source, authority, state or native writes."""
from pathlib import Path
import subprocess,json,hashlib,sys,datetime
physics=Path.cwd(); build=physics.parent
out=physics/'research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/terminal-remarks-heading-audit-v2'
boundary=Path(sys.argv[1]).resolve()
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
data=json.loads(boundary.read_text())
guards={str(boundary):sha(boundary)}
for row in data['files']:
 p=build/row['path']; expected=row['sha256']
 if sha(p)!=expected:raise SystemExit('Frozen code mismatch '+str(p))
 guards[str(p)]=expected
checks=[]
def run(name,argv,cwd):
 started=datetime.datetime.now(datetime.timezone.utc).isoformat()
 with (out/(name+'.stdout.log')).open('wb') as stdout,(out/(name+'.stderr.log')).open('wb') as stderr:
  result=subprocess.run(argv,cwd=cwd,stdout=stdout,stderr=stderr)
 checks.append(dict(name=name,argv=argv,cwd=str(cwd),started_at=started,completed_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),exit=result.returncode,stdout_sha256=sha(out/(name+'.stdout.log')),stderr_sha256=sha(out/(name+'.stderr.log'))))
run('focused-tests',['node','--test',*[f'tools/physics-support/{n}.test.mjs' for n in ['original-maintenance','original-rendering-maintenance','original-presentation-maintenance','physics-imports-category-projection','original-proof-support-consolidation','original-definition-display-layout','original-terminal-remarks-heading']]],build)
run('independent-probes',['node',str(out/'probes.mjs')],physics)
run('existing89-golden',['node',str(out/'golden89.mjs')],physics)
drift=[p for p,h in guards.items() if sha(p)!=h]
result=dict(kind='Independent private frozen code audit execution; no native gate or authority acceptance',boundary_path=str(boundary),boundary_sha256=guards[str(boundary)],checks=checks,input_guards=guards,input_changes=drift,passed=not drift and all(c['exit']==0 for c in checks))
(out/'execution.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(dict(passed=result['passed'],checks=[dict(name=c['name'],exit=c['exit'])for c in checks],input_changes=drift)))
sys.exit(0 if result['passed'] else 1)
