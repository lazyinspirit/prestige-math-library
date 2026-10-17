#!/usr/bin/env python3
"""Independent line-oriented source-exactness verification, no canonical writes."""
import json,re,yaml
from pathlib import Path
b=Path(__file__).resolve().parent;repo=Path.cwd();d=json.loads((b/'integration.json').read_text());errors=[];counts=dict(manifest_items=0,proof_paragraphs=0,supplier_quotes=0,page_placements=0)
def sect(t,name):
 lines=t.splitlines();start=lines.index('## '+name)+1;end=next((i for i in range(start,len(lines))if lines[i].startswith('## ')),len(lines));return '\n'.join(lines[start:end]).strip()
def paragraphs(t):
 lines=t.splitlines();out={};n=None;buf=[]
 for line in lines+['## END']:
  m=re.match(r'^(\d+\.\d+) (.*)',line)
  if m or line.startswith('## '):
   if n:
    s='\n'.join(buf).strip();s=s.removesuffix('∎').rstrip();z=s.rfind('[');end=s.rfind(']');assert end==len(s)-1 and z>=0 and not any(v in s[z+1:end]for v in '[]');out[n]=(s[:z].rstrip(),[x.strip()for x in s[z+1:end].split(',')]);n=None
   if m:n=m[1];buf=[m[2]]
  elif n:buf.append(line)
 return out
for rel in d['canonical_targets']:
 p=b/'proposed'/rel
 if rel.endswith('.pages.json'):
  for page in json.loads(p.read_text()):
   for row in page['items']:
    f=yaml.safe_load((repo/f'items/{row["id"]}.md').read_text().split('---',2)[1]);counts['manifest_items']+=1
    # Existing97 unrelated entries intentionally preserved, not re-reviewed.
    if '-batch-3.'in rel or row['id']in d['new_items'] or row['id']in ['alg-relaxed-density-mixing-with-finite-budget','alg-undamped-scf-with-gap-and-residual-status']:
     if row['deps']!=f.get('deps',[]):errors.append([rel,row['id'],'deps'])
     if row.get('justified_by',[])!=f.get('justified_by',[]):errors.append([rel,row['id'],'justified_by'])
 elif rel.endswith('.proof-contracts.json'):
  for i,c in json.loads(p.read_text())['contracts'].items():
   for q in c['citations']:
    # Outside contracts preserve unrelated historical quote fields.
    main='-batch-3.'in rel or i in d['new_items'];owed={z['supplier']for z in d['existing_quote_operations']if z['consumer']==i}
    if main or q['source']in owed:
     actual=sect((repo/f'items/{q["source"]}.md').read_text(),q['source_section']);counts['supplier_quotes']+=1
     if q['quote']!=actual:errors.append([rel,i,q['source'],'quote'])
   if '-batch-3.'in rel or i in d['new_items']:
    actual=paragraphs((repo/f'items/{i}.md').read_text());der=c['derivations'];
    if set(actual)!={z['step']for z in der}:errors.append([rel,i,'step-set'])
    for z in der:
     counts['proof_paragraphs']+=1
     if actual[z['step']]!=(z['claim'],z['inputs']):errors.append([rel,i,z['step'],'claim/tags'])
for x in d['page_placements']:
 f=yaml.safe_load((b/'proposed'/x['page_path']).read_text().split('---',2)[1]);j=f['items'].index(x['insert_after']);counts['page_placements']+=1
 if f['items'][j+1]!=x['id']or f['items'].count(x['id'])!=1:errors.append([x['page_path'],x['id'],'placement'])
report=dict(status='PASS'if not errors else 'FAIL',counts=counts,mismatches=errors,batch100=json.loads((b/'batch100-pending.json').read_text())['status'],canonical_writes=False)
(b/'source-exactness-report.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
