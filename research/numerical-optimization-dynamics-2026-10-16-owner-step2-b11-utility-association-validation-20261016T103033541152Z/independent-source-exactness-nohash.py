#!/usr/bin/env python3
"""Read-only metadata mirror verifier. Never imports or executes application utilities.
Prints JSON to stdout; caller may retain it only as new research evidence.
Checks source text mechanically, without mathematical/native/publication acceptance.
"""
from pathlib import Path
import argparse,json,re,collections,yaml
ROOT=Path.cwd();CACHE={}
def digest(b):return b.hex()
def source(ident):
 p=ROOT/'items'/(ident+'.md')
 if p not in CACHE:CACHE[p]=p.read_text()
 return CACHE[p]
def section(text,name):
 m=re.search(r'^##[ \t]+'+re.escape(name)+r'[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|\Z)',text,re.M)
 return m.group(1).strip() if m else None
def phase_steps(text):
 body=section(text,'Proof')
 if body is None:body=section(text,'Verification')
 out=[]
 for m in re.finditer(r'^(\d+\.\d+)[ \t]+([\s\S]*?)(?=^\d+\.\d+[ \t]+|^##[ \t]+|\Z)',body or '',re.M):
  full=m.group(2).strip();tag=re.search(r'[ \t]+\[([^\[\]\n]*)\](?:[ \t]*∎)?[ \t]*$',full)
  if not tag:raise ValueError('Missing terminal phase tag '+m.group(1))
  out.append({'step':m.group(1),'claim':full[:tag.start()].strip(),'inputs':[x.strip() for x in tag.group(1).split(',')]})
 return out
def front(text):return yaml.safe_load(text.split('---',2)[1])
def target(data,op):
 if op['mode']=='manifest-item':return next(i for p in data for i in p.get('items',[]) if i['id']==op['id'])
 c=data['contracts'][op['id']]
 if op['mode']=='contract':return c
 if op['mode']=='boundary':return next(x for x in c['boundaries'] if x['case']==op['case'])
 if op['mode']=='citation':return next(x for x in c['citations'] if all(x.get(k)==op[k] for k in ['fact','source','source_section']))
 raise ValueError(op['mode'])
def check(directory):
 d=Path(directory);p=json.loads((d/'projection.json').read_text());files={};issues=[];counts=collections.Counter();guards=[];nonliteral=[];ops=p.get('operations',[])
 if ops:
  for op in ops:
   f=op['file']
   if f not in files:files[f]=json.loads((ROOT/f).read_text())
   obj=target(files[f],op);current=obj.get(op['field']);counts['operation_fields']+=1
   if current!=op['before'] and current!=op['after']:issues.append({'kind':'metadata-field-drift','file':f,'id':op['id'],'field':op['field']})
   obj[op['field']]=op['after']
   if op['field'] not in ['deps','derivations','citations','quote','uses']:
    val=op['after'];literal=isinstance(val,str) and (val in source(op['id']) or (val.startswith('Definition: ') and val[12:] in source(op['id'])))
    nonliteral.append({'file':f,'id':op['id'],'field':op['field'],'case':op.get('case'),'literal_source_excerpt':literal,'value':val,'disposition':'exact source excerpt' if literal else 'nonliteral operation: root semantic review required; no acceptance inferred'})
  for x in p.get('source_guards',[]):
   path=ROOT/x['path'];actual=digest(path.read_bytes());guards.append({'path':x['path'],'match':actual==x['raw_raw_hex'],'expected_raw_hex':x['raw_raw_hex'],'actual_raw_hex':actual})
 else:
  for proposed in (d/'proposed').rglob('*.json'):
   rel=str(proposed.relative_to(d/'proposed'));files[rel]=json.loads(proposed.read_text())
  for before in (d/'before').rglob('*'):
   if before.is_file():
    rel=str(before.relative_to(d/'before'));actual=digest((ROOT/rel).read_bytes());expected=digest(before.read_bytes());guards.append({'path':rel,'match':actual==expected,'expected_raw_hex':expected,'actual_raw_hex':actual})
 # Verify full selected native inventories, retaining current values for untouched files.
 batches=sorted(set(p.get('batches',[])) | set(re.search(r'-batch-(\d+)\.',f).group(1) for f in files))
 for b in batches:
  cf=f'research/{p["run"]}-batch-{b}.proof-contracts.json';pf=f'research/{p["run"]}-batch-{b}.pages.json'
  contracts=files.get(cf,json.loads((ROOT/cf).read_text()));pages=files.get(pf,json.loads((ROOT/pf).read_text()))
  for page in pages:
   for item in page.get('items',[]):
    ident=item['id'];text=source(ident);counts['manifest_items']+=1
    if item.get('deps',[])!=front(text).get('deps',[]):issues.append({'kind':'manifest-deps','batch':b,'id':ident,'metadata':item.get('deps',[]),'source':front(text).get('deps',[])})
  for ident,c in contracts['contracts'].items():
   text=source(ident);ss=phase_steps(text);counts['contracts']+=1;counts['full_phase_paragraphs']+=len(ss);actual=c.get('derivations',[])
   if [x['step'] for x in ss]!=[x.get('step') for x in actual]:issues.append({'kind':'phase-step-inventory','id':ident,'source':[x['step'] for x in ss],'metadata':[x.get('step') for x in actual]})
   for step in ss:
    old=next((x for x in actual if x.get('step')==step['step']),None)
    if old:
     for field in ['claim','inputs']:
      if old.get(field)!=step[field]:issues.append({'kind':'proof-'+field,'id':ident,'step':step['step'],'source':step[field],'metadata':old.get(field)})
   for cite in c.get('citations',[]):
    counts['supplier_sections']+=1;src=source(cite['source']);quote=section(src,cite['source_section'])
    if quote is None or cite.get('quote')!=quote:issues.append({'kind':'supplier-section-quote','id':ident,'fact':cite.get('fact'),'source':cite['source'],'section':cite['source_section'],'expected_raw_hex':digest((quote or '').encode()),'actual_raw_hex':digest(cite.get('quote','').encode())})
    uses=[x['step'] for x in ss if cite.get('fact') in x['inputs']]
    if ss and cite.get('uses')!=uses:issues.append({'kind':'citation-uses','id':ident,'fact':cite.get('fact'),'source':cite['source'],'expected':uses,'actual':cite.get('uses')})
   # Facts and Assumptions can supply logical citations; cover actual linked identities.
   facts=section(text,'Facts & Assumptions') or ''
   for fm in re.finditer(r'^\[([FA]\d+)\][ \t]+([\s\S]*?)(?=^\[[FA]\d+\]|^##[ \t]+|\Z)',facts,re.M):
    for supplier in dict.fromkeys(re.findall(r'\[\[([^\]|#]+)',fm.group(2))):
     if not any(x.get('fact')==fm.group(1) and x.get('source')==supplier for x in c.get('citations',[])):issues.append({'kind':'missing-fact-citation','id':ident,'fact':fm.group(1),'source':supplier})
 return {'nonproof_manifest_items_without_contract':[item['id'] for b in batches for pg in files.get(f'research/{p["run"]}-batch-{b}.pages.json',json.loads((ROOT/f'research/{p["run"]}-batch-{b}.pages.json').read_text())) for item in pg.get('items',[]) if item['id'] not in files.get(f'research/{p["run"]}-batch-{b}.proof-contracts.json',json.loads((ROOT/f'research/{p["run"]}-batch-{b}.proof-contracts.json').read_text()))['contracts']], 'projection_directory':str(d),'batches':batches,'counts':dict(counts),'source_exact':not issues,'issues':issues,'guard_checks':guards,'guard_drift':[x for x in guards if not x['match']],'compact_nonliteral_operations':nonliteral,'canonical_writes':False,'utility_executed':False,'mathematical_acceptance':False,'native_acceptance':False,'published_ordinary_receipt_acceptance':False}
ap=argparse.ArgumentParser(description=__doc__);ap.add_argument('projection',nargs='+');args=ap.parse_args();out={'version':1,'purpose':'Read-only exact source/metadata mirror check, not a gate or mathematical review','results':[check(x) for x in args.projection]};out['inspected_source_raw_hex']={str(p.relative_to(ROOT)):digest(s.encode()) for p,s in CACHE.items()};print(json.dumps(out,indent=2,ensure_ascii=False))
