from pathlib import Path
import subprocess,json
r=Path('research/frontier-44-special-representation-examples-28-owner-crash-recovery-20261010T1736/levelone-current-recovery/finite-basis-constructor');files=list((r/'proposals').glob('*.md'));cmd=['node','tools/tsx-run.mjs','tools/precheck.mts',*[str(p) for p in files],'--json'];z=subprocess.run(cmd,capture_output=True,text=True);result=json.loads(z.stdout)
for row in result['results']:
 if row['status']=='repair':
  p=Path(row['file']);s=p.read_text();body=row['proposed_proof'];pos=body.index('**Proof technique:**');body=body[:pos]+'## '+('Verification' if p.name.startswith('def-') else 'Proof')+'\n\n'+body[pos:];s=s[:s.index('## Facts & Assumptions')]+'## Facts & Assumptions\n\n'+body+'\n\n'+s[s.index('## Remarks'):];p.write_text(s)
