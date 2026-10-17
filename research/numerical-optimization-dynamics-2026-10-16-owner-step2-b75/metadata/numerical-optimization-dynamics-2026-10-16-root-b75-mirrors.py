#!/usr/bin/env python3
"""ROOT ONLY; default preview, --apply guarded batch75 contract mirrors only."""
from pathlib import Path
import json,re,sys,difflib
RUN='numerical-optimization-dynamics-2026-10-16'
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
CONTRACT=Path('research')/(RUN+'-batch-75.proof-contracts.json')
for archived in (BASE/'before').rglob('*'):
 if archived.is_file():
  rel=archived.relative_to(BASE/'before')
  assert (ROOT/rel).read_bytes()==archived.read_bytes(),'Input changed: '+str(rel)
original=(ROOT/CONTRACT).read_text();data=json.loads(original)
def section(ident,title):return (ROOT/'items'/(ident+'.md')).read_text().split('## '+title+'\n',1)[1].split('\n## ',1)[0].strip()
changeddefs={'alg-index-one-dae-backward-euler-stepper','alg-index-one-dae-bdf2-stepper'}
for ident,contract in data['contracts'].items():
 for cite in contract.get('citations',[]):
  if cite.get('source') in changeddefs and cite.get('source_section')=='Definition':cite['quote']=section(cite['source'],'Definition')
ident='thm-index-one-dae-finite-budget-solvers-terminate';c=data['contracts'][ident];body=section(ident,'Proof')
steps={m.group(1):(m.group(2),m.group(3).split(', '))for m in re.finditer(r'^(\d+\.\d+) (.*) \[([^\n]*)\](?: ∎)?$',body,re.M)}
assert list(steps)==['1.1','2.1','2.2','3.1']
assert len(c['derivations'])==4
for row,(step,(claim,inputs))in zip(c['derivations'],steps.items()):
 row['id']='step-'+step.replace('.','-');row['step']=step;row['claim']=claim;row['inputs']=inputs
facts=section(ident,'Facts & Assumptions')
for cite in c['citations']:
 source=cite['source'];fact=next((m.group(1)for m in re.finditer(r'^\[([A-Z]\d+)\] (.*)$',facts,re.M)if '[['+source+']]'in m.group(2)),None)
 assert fact,source+' missing actual fact'
 cite['fact']=fact
 cite['quote']=section(source,cite['source_section'])
 cite['uses']=[step for step,(_,tags)in steps.items()if fact in tags]
# Rewrite only literal references to removed wrapper label; other boundary fields retained.
def reference(v):
 if isinstance(v,str):return re.sub(r'(?<![0-9.])2\.3(?![0-9.])','2.2',v)
 if isinstance(v,list):return [reference(x)for x in v]
 if isinstance(v,dict):return {k:(x if k in ['quote','claim','inputs','id','step']else reference(x))for k,x in v.items()}
 return v
data['contracts'][ident]=reference(c)
new=json.dumps(data,indent=2,ensure_ascii=False)+'\n'
if sys.argv[1:]==['--apply']:
 (ROOT/CONTRACT).write_text(new);print('Applied guarded batch75 contract mirrors only.')
else:
 assert len(sys.argv)==1,'Use no arguments or --apply'
 print(''.join(difflib.unified_diff(original.splitlines(True),new.splitlines(True),fromfile=str(CONTRACT),tofile=str(CONTRACT)+' (proposed)')),end='')
