#!/usr/bin/env python3
"""Read-only literal source comparison. No application, gates, hashing or mathematical acceptance."""
from pathlib import Path
import json,re,yaml,collections
base=Path(__file__).resolve().parent;root=base.parent.parent;spec=json.loads((base/'payload.json').read_text());counts=collections.Counter();issues=[]
def section(text,name):
 marker='## '+name+'\n';i=text.find(marker)
 if i<0:return None
 rest=text[i+len(marker):];end=re.search(r'^## ',rest,re.M);return (rest[:end.start()] if end else rest).strip()
def steps(text):
 body=section(text,'Proof')
 if body is None:body=section(text,'Verification')
 if body is None:return []
 lines=body.splitlines();starts=[i for i,line in enumerate(lines) if re.match(r'^\d+\.\d+\s',line)];out=[]
 for num,start in enumerate(starts):
  block=lines[start:starts[num+1] if num+1<len(starts) else len(lines)]
  # Phase labels are not part of the preceding paragraph.
  for j,line in enumerate(block):
   if j and re.match(r'^\*\*[^\n]+\*\*',line):block=block[:j];break
  s='\n'.join(block).strip();m=re.match(r'^(\d+\.\d+)\s+',s);step=m.group(1);s=s[m.end():].strip()
  if s.endswith('∎'):s=s[:-1].rstrip()
  if not s.endswith(']'):raise ValueError('No terminal tag '+step)
  k=s.rfind('[');tag=s[k+1:-1]
  if '[' in tag or ']' in tag:raise ValueError('Nested terminal tag '+step)
  out.append({'step':step,'claim':s[:k].rstrip(),'inputs':[v.strip() for v in tag.split(',')]})
 return out
for rel in spec['guards']:
 counts['raw_guards']+=1
 if (root/rel).read_bytes()!=(base/spec['before_directory']/rel).read_bytes():issues.append({'kind':'raw-guard-drift','path':rel})
for rel in spec['targets']:
 doc=json.loads((base/'proposed'/rel).read_text())
 if rel.endswith('.pages.json'):
  for pg in doc:
   for item in pg['items']:
    counts['manifest_items']+=1;fm=yaml.safe_load((root/'items'/(item['id']+'.md')).read_text().split('---',2)[1])
    if item['deps']!=fm.get('deps',[]):issues.append({'kind':'manifest-deps','item':item['id']})
 elif rel.endswith('.proof-contracts.json'):
  for ident,ct in doc['contracts'].items():
   text=(root/'items'/(ident+'.md')).read_text();ss=steps(text);counts['contracts']+=1;counts['proof_steps']+=len(ss)
   deriv=ct.get('derivations',[])+ct.get('routine_steps',[]);counts['derivation_rows']+=len(ct.get('derivations',[]));counts['routine_rows']+=len(ct.get('routine_steps',[]))
   if len({x.get('step') for x in deriv})!=len(deriv):issues.append({'kind':'duplicate-proof-classification','item':ident})
   if [x['step'] for x in ss]!=[x.get('step') for x in deriv]:issues.append({'kind':'step-inventory','item':ident})
   for step in ss:
    row=next((x for x in deriv if x.get('step')==step['step']),None)
    if row:
     for field in ['claim','inputs']:
      if row.get(field)!=step[field]:issues.append({'kind':'full-proof-'+field,'item':ident,'step':step['step']})
   for cite in ct.get('citations',[]):
    counts['supplier_sections']+=1;s=(root/'items'/(cite['source']+'.md')).read_text();actual=section(s,cite['source_section'])
    if cite['quote']!=actual:issues.append({'kind':'full-supplier-section','item':ident,'supplier':cite['source'],'fact':cite['fact']})
    uses=[x['step'] for x in ss if cite['fact'] in x['inputs']]
    if cite.get('uses')!=uses:issues.append({'kind':'citation-uses','item':ident,'fact':cite['fact'],'supplier':cite['source']})
print(json.dumps({'scope':'Read-only literal source comparison, not mathematical/native/publication acceptance. No canonical writes/hashes/check gates.','counts':dict(counts),'issues':issues,'pass':not issues},indent=2))
