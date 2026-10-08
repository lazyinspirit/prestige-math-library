from pathlib import Path
import json,re,yaml,hashlib
out=Path('research/frontier-43-complex-representation-15-late-prereq-cstar');ids=['lem-local-analytic-separation-and-saturated-borel-quotients','lem-separable-group-c-star-type-i-and-smooth-dual-criteria']
def read(id):
 t=Path('items',id+'.md').read_text();m=re.match(r'^---\n(.*?)\n---\n(.*)$',t,re.S);assert m,id;return yaml.safe_load(m[1]),m[2]
def sec(t,h):
 m=re.search(r'^## '+re.escape(h)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S);return m[1].strip() if m else ''
def quote(id,h=None):
 f,t=read(id)
 for s in ([h] if h else ['Statement','Definition','Example','Remark']):
  if sec(t,s):return s,sec(t,s)
 raise Exception(id)
base='research/frontier-43-complex-representation-15-batch-1.';pages=json.load(open(base+'pages.json'));oldcs=json.load(open(base+'proof-contracts.json'));rows=[];cs={'version':1,'scope':ids,'contracts':{}}
for id in ids:
 f,t=read(id);row=next(r for p in pages for r in p['items'] if r['id']==id).copy();row['deps']=f['deps'];row['statement']=sec(t,'Statement');row['axiom_use']=f.get('axiom_use',row.get('axiom_use'));row['provenance']=f['provenance'];row['sources']=f['sources'];rows.append(row)
 facts=[]
 for b in re.split(r'\n\s*\n',sec(t,'Facts & Assumptions')):
  m=re.match(r'\[([FAL]\d+)\]\s*(.*)',b,re.S)
  if m:facts.append((m[1],re.findall(r'\[\[([^\]|]+)',m[2])))
 steps=[(m[1],m[2].strip()) for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',sec(t,'Proof'),re.M|re.S)];cit=[]
 for fact,links in facts:
  for src in links:
   h,q=quote(src,'Remark' if id==ids[0] and fact=='F7' and src=='lem-closed-witness-codings-and-measured-projections' else None)
   cit.append(dict(fact=fact,source=src,source_section=h,quote=q,uses=[n for n,s in steps if re.search(r'\b'+fact+r'\b',s)]))
 der=[]
 for n,s in steps:
  inputs=[]
  for a,b in re.findall(r'\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b',s):
   token='step '+a if a else b
   if token not in inputs:inputs.append(token)
  der.append(dict(id='derivation-'+n,claim=re.sub(r'\s*\[[^\]\n]+\]\s*(?:∎)?\s*$','',s).strip(),step=n,inputs=inputs))
 cs['contracts'][id]=dict(citations=cit,derivations=der,routine_steps=[],boundaries=oldcs['contracts'][id]['boundaries'])
 print(id,len(f['deps']),len(cit),len(steps))
(out/'proposed-rows.json').write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n');(out/'proof-contracts.json').write_text(json.dumps(cs,indent=2,ensure_ascii=False)+'\n')
used=[('lem-local-analytic-separation-and-saturated-borel-quotients','lem-closed-witness-codings-and-measured-projections',['F1','F7'],['1.1','2.1']),('lem-separable-group-c-star-type-i-and-smooth-dual-criteria','thm-tychonoff',['F6'],['2.1','3.1'])]
(out/'actual-source-use.json').write_text(json.dumps([{'consumer':a,'supplier':b,'facts':c,'steps':d,'supplier_sha256':hashlib.sha256(Path('items',b+'.md').read_bytes()).hexdigest(),'source_sections':['Statement','Remark'] if a==ids[0] else ['Statement'],'review':'Complete published/local supplier proof independently read; original consumer Statement unchanged.'} for a,b,c,d in used],indent=2)+'\n')
