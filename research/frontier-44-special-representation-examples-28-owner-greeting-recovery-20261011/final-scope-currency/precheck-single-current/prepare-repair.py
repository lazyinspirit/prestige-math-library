import json,pathlib,re,hashlib,copy
R='frontier-44-special-representation-examples-28';O=pathlib.Path('research/'+R+'-owner-greeting-recovery-20261011/final-scope-currency/precheck-single-current');sha=lambda x:hashlib.sha256(x if isinstance(x,bytes) else x.encode()).hexdigest();load=lambda p:json.loads(pathlib.Path(p).read_text());f=load(O/'parser-findings.json')['failures'];assert len(f)==1;f=f[0];p=pathlib.Path(f['path']);before=p.read_text();assert sha(before)==f['before_raw_sha256'];newsteps=re.findall(r'^\d+\.\d+ .*$',f['proposed_proof'],re.M);oldsteps=re.findall(r'^\d+\.\d+ .*$',before,re.M);assert len(newsteps)==len(oldsteps);edits=[];after=before
for old,new in zip(oldsteps,newsteps):
 if old!=new:assert after.count(old)==1;after=after.replace(old,new);edits.append({'before':old,'after':new})
assert before.split('## Statement')[1].split('## Facts')[0]==after.split('## Statement')[1].split('## Facts')[0]
pp=O/(f['id']+'.proposed.md');pp.write_text(after);shift={'2.2':'3.1','3.1':'2.2'}
def changerefs(s):return re.sub(r'(steps?\s+)((?:\d+\.\d+)(?:(?:\s*,\s*|\s+and\s+|\s*&\s*)\d+\.\d+)*)',lambda m:m[1]+re.sub(r'\d+\.\d+',lambda n:shift.get(n[0],n[0]),m[2]),s,flags=re.I)
metadata=[]
for q in [pathlib.Path('research/'+R+'-batch-'+f['batch']+'.proof-contracts.json'),pathlib.Path('research/'+R+'-proof-contracts.json')]:
 doc=load(q)
 if f['id'] not in doc['contracts']:continue
 prop=copy.deepcopy(doc);c=prop['contracts'][f['id']];fieldedits=[]
 for cite in c.get('citations',[]):cite['uses']=[shift.get(x,x) for x in cite['uses']]
 # Existing derivations retain their authored input/claim content with the exact phase relabel and actual new ordering.
 for d in c.get('derivations',[]):
  d['step']=shift.get(d['step'],d['step']);d['id']='step-'+d['step'].replace('.','-');d['claim']=changerefs(d['claim']);d['inputs']=[changerefs(x) for x in d['inputs']]
 c['derivations'].sort(key=lambda d:tuple(int(x) for x in d['step'].split('.')))
 for d in c.get('boundaries',[]):
  for k in ['reason','evidence']:
   if k in d:d[k]=changerefs(d[k])
 for field in ['citations','derivations','boundaries']:
  if doc['contracts'][f['id']].get(field)!=c.get(field):fieldedits.append({'pointer':'/contracts/'+f['id']+'/'+field,'before':doc['contracts'][f['id']][field],'after':c[field]})
 dest=O/(q.name+'.proposed.json');dest.write_text(json.dumps(prop,indent=2)+'\n');metadata.append({'path':str(q),'before_raw_sha256':sha(q.read_bytes()),'proposal_path':str(dest),'proposal_raw_sha256':sha(dest.read_bytes()),'edits':fieldedits,'integration_mode':'Exact guarded JSON-field edits only; all original reviewer/risk/boundary statuses preserved'})
plan={'version':1,'run':R,'author':'/root/prepare_gate_metadata','readiness':'READY FOR ROOT GUARDED FORMAT REPAIR','finding':{'id':f['id'],'batch':f['batch'],'page':f['page'],'status':'auto-repair-required','cause':'Normative dependency-layer numbering: old2.2 depends on2.1 and is layer3; independent old3.1 depends on1.1 and is layer2','format_repair':'Adopt exact normative paragraph ordering and phase relabel, with step references updated'},'mechanical_scan':{'selection':875,'proof_carriers':747,'failures':1,'native_gate':False},'item':{'path':str(p),'before_raw_sha256':sha(p.read_bytes()),'proposal_path':str(pp),'proposal_raw_sha256':sha(pp.read_bytes()),'literal_edits':edits,'Statement_unchanged':True,'frontmatter_unchanged':True,'mathematical_paragraph_content_unchanged_except_step_references':True},'metadata':metadata,'parser_evidence':str(O/'parser-findings.json'),'parser_evidence_raw_sha256':sha((O/'parser-findings.json').read_bytes()),'authority':{'wrapper':'tools/precheck.mts','wrapper_raw_sha256':sha(pathlib.Path('tools/precheck.mts').read_bytes()),'normative':'/home/lazyinspirit/Projects/prestige-intelligence/worker/src/precheck.ts','normative_raw_sha256':sha(pathlib.Path('/home/lazyinspirit/Projects/prestige-intelligence/worker/src/precheck.ts').read_bytes())},'canonical_writes':False,'native_writes':False,'gates_attempted':False,'math_audit':False};out=O/'guarded-single-format-repair-plan.json';out.write_text(json.dumps(plan,indent=2)+'\n');print(json.dumps({'path':str(out),'raw_sha256':sha(out.read_bytes()),'literal_edits':len(edits),'metadata':len(metadata)}))
