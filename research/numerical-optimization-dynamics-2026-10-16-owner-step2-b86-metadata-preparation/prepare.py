"""Research-only projection builder. This file never writes canonical carriers."""
from pathlib import Path
import json,re,hashlib,copy,yaml,difflib
P=Path(__file__).resolve().parent; ROOT=P.parent.parent; R='numerical-optimization-dynamics-2026-10-16'
contract='research/'+R+'-batch-86.proof-contracts.json'; pages='research/'+R+'-batch-86.pages.json'
raws={};guards={};operations=[];issues=[]
def read(path):
 data=(ROOT/path).read_bytes();raws[path]=data;guards[path]=hashlib.sha256(data).hexdigest();return data.decode()
def section(text,name):
 m=re.search(r'^## '+re.escape(name)+r'\s*\n(.*?)(?=^## |\Z)',text,re.M|re.S)
 return m.group(1).strip() if m else None
def source(id):
 path='items/'+id+'.md';t=read(path);return t,yaml.safe_load(t.split('---',2)[1])
def steps(t):
 s=section(t,'Proof') or section(t,'Verification')
 if s is None:return []
 matches=list(re.finditer(r'^(\d+\.\d+)\s+',s,re.M));result=[]
 for i,m in enumerate(matches):
  block=s[m.start():matches[i+1].start() if i+1<len(matches) else len(s)].strip()
  # Capture only the final justification list; intermediate [F#] references belong to the full claim.
  end=re.search(r'\[([^\[\]\n]+)\]\s*(?:∎)?\s*$',block,re.S)
  if not end:raise ValueError('Missing final justification '+m.group(1))
  claim=re.sub(r'\s+',' ',block[:end.start()].strip())
  result.append(dict(step=m.group(1),claim=claim,inputs=[v.strip() for v in end.group(1).split(',')]))
 return result
def citations(t,ss,old):
 f=section(t,'Facts & Assumptions') or '';matches=list(re.finditer(r'^\[(F\d+)\]\s*',f,re.M));result=[]
 for i,m in enumerate(matches):
  block=f[m.end():matches[i+1].start() if i+1<len(matches) else len(f)]
  ids=list(dict.fromkeys(re.findall(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]',block)))
  for id in ids:
   st,fm=source(id);prior=next((x for x in old if x.get('fact')==m.group(1) and x.get('source')==id),{})
   preferred=prior.get('source_section'); choices=[preferred] if preferred else []
   choices+=['Statement','Definition','Example']
   name=next((n for n in choices if n and section(st,n) is not None),None)
   if name is None:raise ValueError('No actual supplier section '+id)
   cit=copy.deepcopy(prior);cit.update(fact=m.group(1),source=id,source_section=name,quote=section(st,name),uses=[s['step'] for s in ss if m.group(1) in s['inputs']]);result.append(cit)
 return result
def op(file,pointer,before,after,sourcepaths):
 if before!=after:operations.append(dict(file=file,pointer=pointer,before_present=True,before=before,after=after,source_guards=list(dict.fromkeys(sourcepaths))))
c=json.loads(read(contract));newc=copy.deepcopy(c)
for id,old in c['contracts'].items():
 t,fm=source(id);ss=steps(t);oldclass={v['step']:('derivations',v) for v in old.get('derivations',[])}
 for v in old.get('routine_steps',[]):
  if not isinstance(v,dict) or 'step' not in v:raise ValueError('Unsupported routine classification; preserve and root-review '+id)
  oldclass[v['step']]=('routine_steps',v)
 arrays={'derivations':[],'routine_steps':[]}
 for s in ss:
  classification,prior=oldclass.get(s['step'],('derivations',{}));v=copy.deepcopy(prior);v.update(id=prior.get('id','step-'+s['step'].replace('.','-')),**s);arrays[classification].append(v)
 cs=citations(t,ss,old.get('citations',[]));newc['contracts'][id]['citations']=cs
 context=['items/'+id+'.md']+['items/'+v['source']+'.md' for v in cs]
 op(contract,['contracts',id,'citations'],old.get('citations',[]),cs,context)
 for field,values in arrays.items():
  newc['contracts'][id][field]=values;op(contract,['contracts',id,field],old.get(field,[]),values,['items/'+id+'.md'])
pg=json.loads(read(pages));newpg=copy.deepcopy(pg)
for a,page in enumerate(pg):
 for i,item in enumerate(page['items']):
  t,fm=source(item['id'])
  for field in ['deps','justified_by']:
   # Projection only: preserve dependency levels and every nondeclaration field.
   after=fm.get(field,[]);before=item.get(field,[])
   newpg[a]['items'][i][field]=after
   op(pages,[a,'items',i,field],before,after,['items/'+item['id']+'.md'])
# No existing outside citations to any86 subject: record truthful zero-edit navigation only.
outside=[]
for path in (ROOT/'research').glob(R+'-batch-*.proof-contracts.json'):
 if path.name==Path(contract).name:continue
 doc=json.loads(path.read_text())
 for consumer,value in doc.get('contracts',{}).items():
  for cit in value.get('citations',[]):
   if cit.get('source') in c['scope']:outside.append(dict(file=str(path.relative_to(ROOT)),consumer=consumer,citation=cit))
if outside:issues.append('Existing outside quotes discovered; root needs guarded focused preparation: '+repr(outside))
authority='research/'+R+'-owner-step2-b86-continuation/cycle2-application-20261016T095530932369Z/completion.json';read(authority)
for path,data in raws.items():
 dest=P/'before'/path;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data)
for path,doc in [(contract,newc),(pages,newpg)]:
 dest=P/'proposed'/path;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(json.dumps(doc,indent=2,ensure_ascii=False)+'\n')
manifest=dict(version=1,run=R,prepared_only=True,authority=authority,scope=c['scope'],issues=issues,guards=[dict(path=k,raw_sha256=v) for k,v in guards.items()],field_operations=operations,outside_existing_quote_entries=outside,batch65_rattle_quote_entries=0,limits='Metadata preparation only. No source edit, mathematical review, native collection, check/gate/hash recertification. Root applied final status phase numbering after actual original86 completion; full actual final source guards bind that version. All unprojected contract fields/classification/history preserved.')
(P/'proposal.json').write_text(json.dumps(manifest,indent=2,ensure_ascii=False)+'\n')
diff=[]
for path in [contract,pages]:diff.extend(difflib.unified_diff((P/'before'/path).read_text().splitlines(True),(P/'proposed'/path).read_text().splitlines(True),fromfile=path,tofile='proposed/'+path))
(P/'full-metadata.diff').write_text(''.join(diff))
print(json.dumps(dict(fields=len(operations),source_guards=len(guards),outside_quotes=len(outside),issues=issues)))
