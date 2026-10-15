import json
from pathlib import Path
r='physics-td-qft-rpm-62-2026-10-14';b=Path(f'research/{r}-owner-stage3-format-round1-qft');guards=json.loads((b/'source-guards.json').read_text());ids=[x['id'] for x in guards];by={};archives={};deltas=[]
def section(id,title):return Path('items/'+id+'.md').read_text().split('## '+title+'\n',1)[1].split('\n## ',1)[0].strip()
(b/'shared-before').mkdir(exist_ok=True)
for n in range(1,65):
 p=Path(f'research/{r}-batch-{n}.proof-contracts.json');raw=p.read_bytes();d=json.loads(raw);part={}
 for id,c in d['contracts'].items():
  patch={};cit=json.loads(json.dumps(c.get('citations',[])))
  for q in cit:
   if q['source'] in ids and '\\quad\nD(O_H' in q.get('quote',''):
    old=q['quote'];q['quote']=old.replace('\\quad\nD(O_H','\\quad D(O_H').strip();assert q['quote'] in section(q['source'],q['source_section']),(id,q['fact']);deltas.append({'id':id,'source':q['source'],'fact':q['fact'],'before':old,'after':q['quote']})
  if cit!=c.get('citations',[]):patch['citations']=cit
  bounds=json.loads(json.dumps(c.get('boundaries',[])))
  for row in bounds:
   scope=row.get('case_scope')
   if not scope:continue
   matching=[z for z in guards if z['before_raw_sha256']==scope.get('current_raw_sha256')]
   if matching:
    z=matching[0];assert id==z['id'];scope['current_raw_sha256']=z['final_raw_sha256'];scope['source_excerpt']=scope['source_excerpt'].replace('\\quad\nD(O_H','\\quad D(O_H');assert scope['source_excerpt'].strip() in section(id,scope['source_section'])
  if bounds!=c.get('boundaries',[]):patch['boundaries']=bounds
  if patch:part[id]=patch
 if part:
  by[str(p)]={'contracts':part};a=b/'shared-before'/p.name;a.write_bytes(raw);archives[str(p)]=str(a)
mf=Path(f'research/{r}-batch-40.pages.json');pages=json.loads(mf.read_text());mirrors=[{'id':id,'page':next(p['id'] for p in pages if any(z['id']==id for z in p['items'])),'fields':{'statement':section(id,'Definition' if id.startswith('def-') else 'Postulate')}} for id in ids]
for p in [mf,Path('research/plan-spec.json')]: (b/'shared-before'/p.name).write_bytes(p.read_bytes())
(b/'contract-partials.proposal.json').write_text(json.dumps({'run':r,'by_path':by,'before_byte_archives':archives,'source_guards':guards,'quote_deltas':deltas,'manual_status_finite_risk_fields_preserved':True},indent=2)+'\n');(b/'mirrors.proposal.json').write_text(json.dumps({'run':r,'mirrors':mirrors},indent=2)+'\n');print({'targets':list(by),'deltas':[{k:z[k] for k in ['id','source','fact']} for z in deltas]})
