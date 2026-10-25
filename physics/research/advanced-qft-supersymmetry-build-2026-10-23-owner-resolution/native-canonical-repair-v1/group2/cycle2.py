import json,pathlib,re,difflib
r='advanced-qft-supersymmetry-build-2026-10-23';base=pathlib.Path(f'research/{r}-owner-resolution/native-canonical-repair-v1/group2');report=json.loads((base/'report.json').read_text());ids=report['scope'];maps={a['id']:a['numbering'] for a in report['repairs']}
def fix(s,m):return re.sub(r'(?<![\d.])\d+\.\d+(?=\.(?!\d))',lambda a:m.get(a[0],a[0]),s)
for i in ids:
 p=pathlib.Path(f'items/{i}.md');old=p.read_text();a,b=old.split('## Proof\n',1);new=a+'## Proof\n'+fix(b,maps[i]);p.write_text(new)
 before=(base/'before'/p.name).read_text();(base/(i+'.patch')).write_text(''.join(difflib.unified_diff(before.splitlines(True),new.splitlines(True),fromfile=str(p),tofile=str(p))));(base/(i+'.proposed.md')).write_text(new)
p=pathlib.Path(f'research/{r}-batch-8.proof-contracts.json');raw=p.read_text();d=json.loads(raw)
for i in ids:
 c=d['contracts'][i]
 for a in c['derivations']:a['claim']=fix(a['claim'],maps[i])
 for a in c['boundaries']:
  for k in ['evidence','reason']:
   if k in a:a[k]=fix(a[k],maps[i])
assert p.read_text()==raw;p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
for name in ['precheck','proof-layout','strict-contract']:(base/(name+'-after.txt')).rename(base/(name+'-cycle1.txt'))
(base/'checks.json').rename(base/'checks-cycle1.json')
print('Second bounded repair fixes sentence-final step locators missed by initial regex; no argument/content changes.')
