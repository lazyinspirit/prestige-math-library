#!/usr/bin/env python3
"""Evidence-only projection; no canonical writes. Root apply75.py owns optional apply."""
import json,re,pathlib,copy,difflib
B=pathlib.Path(__file__).resolve().parent; ROOT=B.parents[1]; RUN='numerical-optimization-dynamics-2026-10-16'
def load(p): return json.loads(p.read_text())
def dump(p,d): p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
guards={}
def read(rel):
 p=ROOT/rel; raw=p.read_text(); guards[rel]=raw;return raw
def section(raw,title):
 m=re.search(r'^## '+re.escape(title)+r'\s*\n(.*?)(?=^## |\Z)',raw,re.M|re.S); assert m,title;return m[1].strip()
def fm(raw):
 # Use the repository renderer YAML parser, via one helper output prepared below.
 return source_meta[raw.split('\n',2)[1]] if False else None
def steps(raw):
 found={}
 for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |^## |\Z)',raw,re.M|re.S):
  t=m[2].strip(); end=re.search(r'\s+\[([^\]\n]*)\](?:\s*∎)?$',t);assert end,(m[1],t)
  found[m[1]]={'id':'step-'+m[1].replace('.','-'),'step':m[1],'claim':t[:end.start()].strip(),'inputs':[s.strip() for s in end[1].split(',')]}
 return found
rel=f'research/{RUN}-batch-75.proof-contracts.json'; original=read(rel);data=json.loads(original)
# Native metadata parse uses the same YAML implementation as the renderer.
import subprocess
source_meta=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import fs from 'node:fs';import {yaml,split} from './tools/pathway-lib.mjs';const p=JSON.parse(fs.readFileSync(process.argv[1],'utf8'));let o={};for(const page of p)for(const x of page.items??[]){const r=fs.readFileSync('items/'+x.id+'.md','utf8');o[x.id]=yaml().parse(split(r).fm);}console.log(JSON.stringify(o));",f'research/{RUN}-batch-75.pages.json'],cwd=ROOT,text=True))
counts={'quotes':0,'derivations':0,'fact_labels_or_sources':0}
for ident,c in data['contracts'].items():
 raw=read('items/'+ident+'.md'); actual=steps(raw); facts={}
 if '## Facts & Assumptions' in raw:
  f=section(raw,'Facts & Assumptions')
  for m in re.finditer(r'^\[([A-Z]\d+)\]\s+(.*?)(?=^\[[A-Z]\d+\]|\Z)',f,re.M|re.S): facts[m[1]]=m[2]
 # All existing rows retain auxiliary fields, but mirror complete current claims/inputs.
 old=c['derivations']; assert len({r['step'] for r in old})==len(old)
 rows=[]
 for label,s in actual.items():
  row=copy.deepcopy(next((r for r in old if r['step']==label),{}));row.update(s);rows.append(row)
 if rows!=old:counts['derivations']+=1
 c['derivations']=rows
 for cite in c['citations']:
  matches=[label for label,t in facts.items() if re.search(r'\[\['+re.escape(cite['source'])+r'(?:\||\]\])',t)]
  if len(matches)==1:label=matches[0]
  else:
   label=cite['fact'];assert label in facts,(ident,cite)
  suppliers=re.findall(r'\[\[([^]|]+)(?:\|[^]]*)?\]\]',facts[label]);assert suppliers,(ident,label)
  source=cite['source'] if cite['source'] in suppliers else suppliers[0]
  if (label,source)!=(cite['fact'],cite['source']):counts['fact_labels_or_sources']+=1
  cite['fact']=label;cite['source']=source
  supplier=read('items/'+source+'.md')
  if source!=next((oldcite['source'] for oldcite in json.loads(original)['contracts'][ident]['citations'] if oldcite['fact']==label),source) and '## '+cite['source_section']+'\n' not in supplier:
   assert '## Statement\n' in supplier;cite['source_section']='Statement'
  quote=section(supplier,cite['source_section'])
  if cite['quote']!=quote:counts['quotes']+=1
  cite['quote']=quote;cite['uses']=[label_ for label_,s in actual.items() if label in s['inputs']]
 # Reject dangling explicit source step references, including contract auxiliary fields.
 for label,s in actual.items():
  for ref in re.findall(r'\bstep\s+(\d+\.\d+)\b',s['claim']+' '+','.join(s['inputs'])):assert ref in actual,(ident,label,ref)
 # Historical wrapper label was superseded; preserve all unrelated boundary prose.
 if ident=='thm-index-one-dae-finite-budget-solvers-terminate':
  def aux(v):
   if isinstance(v,str):return re.sub(r'(?<![0-9.])2\.3(?![0-9.])','2.2',v)
   if isinstance(v,list):return [aux(x)for x in v]
   if isinstance(v,dict):return {k:aux(x)for k,x in v.items()}
   return v
  for key in c:
   if key not in ['derivations','citations']:c[key]=aux(c[key])
dump(B/'proposed'/pathlib.Path(rel).name,data)
pagesrel=f'research/{RUN}-batch-75.pages.json';pagesoriginal=read(pagesrel);pages=json.loads(pagesoriginal)
for p in pages:
 for item in p.get('items',[]):
  meta=source_meta[item['id']]
  for key in ['kind','title','deps','justified_by','dependency_level']:
   if key in meta:item[key]=meta[key]
   elif key in item and key=='justified_by':del item[key]
dump(B/'proposed'/pathlib.Path(pagesrel).name,pages)
for path,raw in guards.items():
 dest=B/'before'/path;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(raw)
outputs=[rel,pagesrel]
diff=''
for out in outputs:
 new=(B/'proposed'/pathlib.Path(out).name).read_text();old=guards[out]
 diff+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile=out,tofile=out+' (proposed)'))
(B/'batch75.diff').write_text(diff)
dump(B/'projection.json',{'run':RUN,'batch':75,'canonical_writes':False,'scope':'metadata only; all 15 current item carriers and all cited supplier sections','counts':counts,'outputs':outputs,'guards':list(guards),'note':'No source, hashes, native evidence, gates or acceptance changed. Existing mathematical acceptance still belongs to root.'})
print(json.dumps({'counts':counts,'guarded_inputs':len(guards),'diff_lines':len(diff.splitlines())}))
