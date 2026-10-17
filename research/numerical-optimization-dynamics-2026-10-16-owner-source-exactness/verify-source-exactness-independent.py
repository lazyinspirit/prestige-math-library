#!/usr/bin/env python3
"""Independent read-only verifier: line-based sections/paragraphs and rightmost tag parsing.
Does not import the first verifier, preparation code, or apply utilities.
"""
import argparse,json,re,hashlib,collections
from pathlib import Path
import yaml
ap=argparse.ArgumentParser();ap.add_argument('projection');a=ap.parse_args();D=Path(a.projection);P=json.loads((D/'projection.json').read_text());R=P['run'];errors=[];count=collections.Counter();seen={}
def read(id):
 f=Path('items')/(id+'.md');raw=f.read_bytes();seen[str(f)]=hashlib.sha256(raw).hexdigest();return raw.decode()
def sections(text):
 result={};name=None;body=[]
 for line in text.splitlines():
  if line.startswith('## '):
   if name is not None:result[name]='\n'.join(body).strip()
   name=line[3:].strip();body=[]
  elif name is not None:body.append(line)
 if name is not None:result[name]='\n'.join(body).strip()
 return result
def paragraphs(text):
 sec=sections(text);body=sec.get('Proof',sec.get('Verification',''));groups=[];label=None;lines=[]
 for line in body.splitlines():
  m=re.match(r'^(\d+\.\d+)\s(.*)$',line)
  if m:
   if label:groups.append((label,'\n'.join(lines).strip()))
   label=m[1];lines=[m[2]]
  elif label:lines.append(line)
 if label:groups.append((label,'\n'.join(lines).strip()))
 rows=[]
 for label,body in groups:
  tail=body.rstrip().removesuffix('∎').rstrip();start=tail.rfind('[')
  if start<0 or not tail.endswith(']'):errors.append({'kind':'phase-final-tag','step':label});continue
  rows.append({'step':label,'claim':tail[:start].rstrip(),'inputs':[x.strip() for x in tail[start+1:-1].split(',')]})
 return rows
for b in P['batches']:
 pf=f'research/{R}-batch-{b}.pages.json';cf=f'research/{R}-batch-{b}.proof-contracts.json';pages=json.loads((D/'proposed'/pf).read_text());contracts=json.loads((D/'proposed'/cf).read_text())['contracts']
 for page in pages:
  for item in page.get('items',[]):
   text=read(item['id']);fm=yaml.safe_load(text.split('---',2)[1]);count['manifest_items']+=1
   if item.get('deps',[])!=fm.get('deps',[]):errors.append({'kind':'deps','id':item['id']})
 for id,c in contracts.items():
  text=read(id);ss=paragraphs(text);count['contracts']+=1;count['full_phase_paragraphs']+=len(ss)
  mirror=[{k:x.get(k) for k in ['step','claim','inputs']} for x in c.get('derivations',[])]
  if mirror!=ss:errors.append({'kind':'whole-phase-claim-tag-list','id':id})
  for cite in c.get('citations',[]):
   actual=sections(read(cite['source'])).get(cite['source_section']);count['supplier_sections']+=1
   if cite.get('quote')!=actual:errors.append({'kind':'whole-supplier-section','id':id,'fact':cite.get('fact'),'source':cite['source']})
   expected=[x['step'] for x in ss if cite.get('fact') in x['inputs']]
   if ss and cite.get('uses')!=expected:errors.append({'kind':'uses','id':id,'fact':cite.get('fact'),'source':cite['source']})
  facts=sections(text).get('Facts & Assumptions','');tag=None;group=[];pairs=[]
  for line in facts.splitlines()+['[END]']:
   m=re.match(r'^\[([FA]\d+)\]',line)
   if m or line=='[END]':
    if tag:
     for supplier in dict.fromkeys(re.findall(r'\[\[([^\]|#]+)','\n'.join(group))):pairs.append((tag,supplier))
    tag=m[1] if m else None;group=[line]
   elif tag:group.append(line)
  for fact,supplier in pairs:
   if not any(x.get('fact')==fact and x.get('source')==supplier for x in c.get('citations',[])):errors.append({'kind':'fact-coverage','id':id,'fact':fact,'source':supplier})
guard_errors=[]
for g in P['source_guards']:
 h=hashlib.sha256(Path(g['path']).read_bytes()).hexdigest()
 if h!=g['raw_sha256']:guard_errors.append({'path':g['path'],'actual':h,'expected':g['raw_sha256']})
metadata_field_drift=[]
for op in P['operations']:
 obj=json.loads(Path(op['file']).read_text())
 if op['mode']=='manifest-item':obj=next(x for pg in obj for x in pg['items'] if x['id']==op['id'])
 else:obj=obj['contracts'][op['id']]
 if obj.get(op['field']) not in [op['before'],op['after']]:metadata_field_drift.append({k:op[k] for k in ['file','id','field']})
print(json.dumps({'version':1,'method':'Independent line-based section and full phase paragraph parser; rightmost final bracket tag; no shared parser/application code','projection':str(D),'counts':dict(count),'source_exact':not errors,'errors':errors,'source_guard_drift':guard_errors,'metadata_field_drift':metadata_field_drift,'inspected_source_sha256':seen,'canonical_writes':False,'published_ordinary_receipts_accepted':False,'native_acceptance_or_gates':False},indent=2,ensure_ascii=False))
