#!/usr/bin/env python3
"""ROOT ONLY preview/default; --apply applies reviewed canonical metadata after guards."""
from pathlib import Path
import json,re,sys,difflib
RUN='numerical-optimization-dynamics-2026-10-16'
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[1]
for p in (BASE/'before').rglob('*'):
 if p.is_file():
  rel=p.relative_to(BASE/'before');assert (ROOT/rel).read_bytes()==p.read_bytes(),'Changed guarded input '+str(rel)
def section(text,title):
 m=re.search(r'^## '+re.escape(title)+r'\s*\n(.*?)(?=^## |\Z)',text,re.M|re.S)
 assert m,'Missing source section '+title
 return m.group(1).strip()
def steps(text):
 # Phase paragraphs may include displayed equations, but only explicit phase starts delimit them.
 out=[]
 for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |^## |\Z)',text,re.M|re.S):
  body=m.group(2).strip();tag=re.search(r' \[([^\n]*)\](?: ∎)?$',body)
  assert tag,'Missing final tag '+m.group(1)
  out.append((m.group(1),body[:tag.start()],tag.group(1).split(', ')))
 return out
changes={};summary=[]
for b in ['69','71']:
 rel=Path('research')/(RUN+'-batch-'+b+'.proof-contracts.json');original=(ROOT/rel).read_text();j=json.loads(original)
 for ident,c in j['contracts'].items():
  text=(ROOT/'items'/(ident+'.md')).read_text();ss=steps(text);old=c.get('derivations',[])
  if ss:
   bystep={row.get('step'):row for row in old};new=[]
   for label,claim,inputs in ss:
    row=dict(bystep.get(label,{}));row.update(id='step-'+label.replace('.','-'),step=label,claim=claim,inputs=inputs);new.append(row)
   c['derivations']=new
  for cite in c.get('citations',[]):
   src=ROOT/'items'/(cite['source']+'.md')
   if src.exists():cite['quote']=section(src.read_text(),cite['source_section'])
   if ss and cite.get('fact'):cite['uses']=[label for label,_,inputs in ss if cite['fact'] in inputs]
 new=json.dumps(j,indent=2,ensure_ascii=False)+'\n'
 if new!=original:changes[rel]=new;summary.append({'file':str(rel),'kind':'exact current proof derivations/inputs/citation quotes and uses; other fields retained'})
# No manifest mutation is needed for the two published supplier dependency additions: both are outside these native inventories.
for rel,new in changes.items():
 dest=BASE/'proposed'/rel;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(new)
 if sys.argv[1:]==['--apply']:(ROOT/rel).write_text(new)
 else:
  assert len(sys.argv)==1,'Use default preview or --apply'
  print(''.join(difflib.unified_diff((ROOT/rel).read_text().splitlines(True),new.splitlines(True),fromfile=str(rel),tofile=str(rel)+' (proposed)')),end='')
(BASE/'projection.json').write_text(json.dumps({'run':RUN,'canonical_applied':sys.argv[1:]==['--apply'],'changes':summary},indent=2)+'\n')
