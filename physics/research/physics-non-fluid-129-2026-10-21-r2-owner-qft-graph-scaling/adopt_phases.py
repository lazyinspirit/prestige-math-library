import json,re
from pathlib import Path
root=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-qft-graph-scaling')
data=json.loads((root/'precheck-before-format.json').read_text())
for row in data['results']:
 if row['status']!='repair':continue
 p=Path(row['file']);s=p.read_text();a=s.index('## Proof\n'); nxt=re.search(r'^## ',s[a+len('## Proof\n'):],re.M);b=a+len('## Proof\n')+nxt.start() if nxt else len(s)
 body=s[a:b];start=re.search(r'^\d+\.\d+ ',body,re.M).start();header=body[:start]
 oldblocks=[(m.group(1),m.group(2).strip()) for m in re.finditer(r'(?ms)^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',body)]
 proposed=[(m.group(1),m.group(2).strip()) for m in re.finditer(r'(?ms)^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',row['proposed_proof'])]
 assert len(oldblocks)==len(proposed),(p,len(oldblocks),len(proposed))
 mapping={};order=[]
 for nid,txt in proposed:
  matched=[(oid,bod) for oid,bod in oldblocks if re.sub(r'\b[Ss]tep \d+\.\d+','STEP',re.sub(r'\s+',' ',bod))[:90]==re.sub(r'\b[Ss]tep \d+\.\d+','STEP',re.sub(r'\s+',' ',txt))[:90]]
  assert len(matched)==1,(p,nid,txt[:90]);oid,bod=matched[0];mapping[oid]=nid;order.append((oid,bod))
 blocks=[]
 for oid,bod in order:
  bod=re.sub(r'\b([Ss]tep) (\d+\.\d+)',lambda m:m[1]+' '+mapping.get(m[2],m[2]),bod)
  blocks.append(mapping[oid]+' '+bod)
 s=s[:a]+header+'\n\n'.join(blocks)+'\n\n'+s[b:];p.write_text(s)
 (root/(p.stem+'-phase-map.json')).write_text(json.dumps(mapping,indent=2)+'\n')
