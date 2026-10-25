from pathlib import Path
import re,json,hashlib,difflib
r='advanced-qft-supersymmetry-build-2026-10-23'
base=Path(f'research/{r}-owner-resolution/native-canonical-repair-v1/group3');base.mkdir(parents=True,exist_ok=True)
maps={
'pthm-aqft-smeft-as-restricted-heft-branch':{'1.1':'1.1','1.2':'2.1','1.3':'1.2','1.4':'2.2','1.5':'3.1','1.6':'4.1'},
'ex-aqft-smeft-heft-observable-map':{'1.1':'1.1','1.2':'2.1','1.3':'3.1','1.4':'2.2','1.5':'4.1'},
'lem-qftx-coherent-analytic-module-calculus':{'1.1':'1.1','2.1':'2.1','3.1':'2.2','4.1':'3.1','4.2':'4.1'},
 'thm-qftx-gaga-analytic-oka-coherence':dict(zip(['1.1','1.2','1.3','1.4','2.1','2.2','2.3','2.4','3.1','3.2','4.1','4.2'],['1.1','2.1','3.1','4.1','5.1','6.1','7.1','8.1','9.1','10.1','10.2','11.1'])),
'lem-qftx-gaga-algebraic-analytic-local-completions':{'1.1':'1.1','1.2':'2.1','1.3':'1.2','1.4':'1.3','1.5':'2.2','1.6':'3.1','2.1':'4.1'},
 'thm-qftx-gaga-analytic-local-ring-flatness':{'1.1':'1.1','1.2':'2.1','2.1':'3.1','2.2':'3.2','3.1':'4.1','3.2':'5.1','4.1':'6.1'},
'ex-qftx-gaga-analytic-nonreduced-quotient':{'1.1':'1.1','1.2':'2.1','2.1':'3.1'}}
def sub(s,m):return re.sub(r'(?<![\d.])(\d+\.\d+)(?!\d|\.\d)',lambda x:m.get(x[0],x[0]),s)
rows=[]
for id,m in maps.items():
 p=Path('items')/(id+'.md');raw=p.read_bytes();s=raw.decode();(base/(id+'.before.md')).write_bytes(raw)
 match=re.search(r'(?m)^\d+\.\d+ ',s);start=match.start();end=s.find('\n## ',start);end=len(s) if end<0 else end
 proof=s[start:end];parts=re.split(r'\n\n(?=\d+\.\d+ )',proof);assert len(parts)==len(m),(id,len(parts))
 keyed=[]
 for part in parts:
  old=re.match(r'\d+\.\d+',part)[0];new=sub(part,m);keyed.append((tuple(map(int,m[old].split('.'))),new.rstrip()))
 after=s[:start]+'\n\n'.join(p for _,p in sorted(keyed))+'\n'+s[end:]
 # Canonical argument text, equations and tags survive exactly up to step locator replacements and paragraph reorder.
 assert sorted(sub(p,m).strip() for p in parts)==sorted(p.strip() for _,p in keyed)
 (base/(id+'.proposed.md')).write_text(after)
 (base/(id+'.patch')).write_text(''.join(difflib.unified_diff(s.splitlines(True),after.splitlines(True),fromfile=str(p),tofile=str(p))))
 rows.append({'id':id,'before_sha256':hashlib.sha256(raw).hexdigest(),'mapping':m,'proposal_sha256':hashlib.sha256(after.encode()).hexdigest(),'preserved_argument_paragraphs':True})
for b in [27,63,64]:
 p=Path(f'research/{r}-batch-{b}.proof-contracts.json');(base/(p.name+'.before')).write_bytes(p.read_bytes())
(base/'preparation.json').write_text(json.dumps({'run':r,'authorization':'Parent relayed explicit Root write release: readiness round2 completed 2026-10-24T05:19:44Z; snapshot writer drained and no other source/contract writers active.','scope':rows},indent=2)+'\n')
