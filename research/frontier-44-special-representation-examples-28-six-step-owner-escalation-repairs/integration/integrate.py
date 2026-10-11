import json,pathlib,hashlib,re,yaml,subprocess
R='frontier-44-special-representation-examples-28-six-step'; D=pathlib.Path('research/'+R+'-owner-escalation-repairs'); O=D/'integration'; A=O/'before';A.mkdir(exist_ok=True)
sha=lambda b:hashlib.sha256(b).hexdigest()
read=lambda p:json.loads(pathlib.Path(p).read_text())
files=sorted(pathlib.Path('research').glob(R+'-batch-*.pages.json'))+sorted(pathlib.Path('research').glob(R+'-batch-*.proof-contracts.json'))
original={str(p):p.read_bytes() for p in files}
for p,b in original.items():
 q=A/pathlib.Path(p).name
 if q.exists():assert q.read_bytes()==b,'archive already exists with different bytes'
 else:q.write_bytes(b)
docs={p:json.loads(b) for p,b in original.items()}; ownership={}; itemfiles={}; aliases={}
for p in pathlib.Path('items').glob('*.md'):
 t=p.read_text();m=re.match(r'^---\n(.*?)\n---\n?(.*)',t,re.S)
 if not m:continue
 try:f=yaml.safe_load(m[1])
 except:continue
 if not isinstance(f,dict):continue
 itemfiles[p.stem]=(f,m[2],sha(p.read_bytes()))
 for a in f.get('aliases',[]) or []:aliases[a]=p.stem
for p,d in docs.items():
 if p.endswith('.pages.json'):
  for page in d:
   for it in page['items']:ownership[it['id']]=(p,page,it)
groups=['qschur_cellularity','qschur_gram','qschur_blocks','soergel','category-o','affine_bridge','stratifications','equivariant_descent','cyclotomic_isomorphism','cyclotomic_center_trace','cyclotomic_schur_gram','klr_jump','quantum_unsigned_extraction','modular-branching','klr_diagrams','klr_flag_model']
affected=set(); evidence=[]; guards=[]; exceptions=[]
def scan(x,path):
 if isinstance(x,dict):
  ident=x.get('id') or x.get('subject') or x.get('item')
  if isinstance(ident,str) and ident in itemfiles:affected.add(ident)
  for k,v in x.items():
   if k in itemfiles:affected.add(k)
   scan(v,path)
 elif isinstance(x,list):
  for v in x:scan(v,path)
 elif isinstance(x,str) and x in itemfiles:affected.add(x)
for g in groups:
 for p in (D/g).glob('*.json'):
  if any(t in p.name for t in ['proposal','packet','current-hashes','final-bindings','owner-handoff','final-hashes','closure-hashes']):
   x=read(p);scan(x,str(p));evidence.append(str(p))
# Only root-authorized new helpers, never HH18 P-page scope.
new={'lem-q-schur-central-hecke-jm-scalars-give-residue-separation':13,'lem-irreducible-complex-varieties-are-analytically-connected':33,'lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts':23,'lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms':23}
for ident,batch in new.items():
 affected.add(ident)
 if ident not in ownership:
  p=f'research/{R}-batch-{batch}.pages.json';page=next(x for x in docs[p] if x['kind']=='A');f,body,h=itemfiles[ident];it={'id':ident,'kind':f['kind'],'title':f['title']};page['items'].append(it);ownership[ident]=(p,page,it)
updates={}; contracts_changed=set()
def put(ident,fields,proposal):
 if ident not in ownership:exceptions.append({'proposal':proposal,'id':ident,'reason':'not in approved existing inventories'});return
 p=ownership[ident][0].replace('.pages.json','.proof-contracts.json');d=docs[p];entry=d['contracts'].setdefault(ident,{})
 if ident not in d['scope']:d['scope'].append(ident)
 entry.update(fields);contracts_changed.add(ident);updates.setdefault(ident,[]).append(proposal)
def mergefile(rel):
 p=D/rel;x=read(p)
 for ident,fields in x.get('contracts',x.get('per_id',x)).items():
  if ident not in itemfiles or not isinstance(fields,dict):continue
  put(ident,fields.get('replace_fields',fields),str(p))
for rel in ['qschur_cellularity/closure-contract-proposals.json','soergel/round-2-proof-contracts.proposal.json','category-o/round-2/contract-entry-proposals.json','affine_bridge/closure-proposed-contract-entries.json','stratifications/proof-contracts.proposed.json','cyclotomic_isomorphism/proof-contracts.proposed.json','modular-branching/round2/scalar-helper.proof-contracts.proposed.json']:
 mergefile(rel)
for ident,fields in read(D/'qschur_gram/escalation-resolution-packet.json')['proof_contract_replacements'].items():put(ident,fields,'qschur_gram packet')
for row in read(D/'qschur_blocks/escalation-resolution-packet.json')['contract_replacements']:put(row['id'],row['replacement_contract'],'qschur_blocks packet')
for ident,row in read(D/'cyclotomic_schur_gram/root-metadata-proposals.json')['contract_changes'].items():
 if row['item_raw_sha256']!=itemfiles[ident][2]:exceptions.append({'id':ident,'reason':'proposal source guard mismatch','expected':row['item_raw_sha256'],'actual':itemfiles[ident][2]})
 else:put(ident,row['replacement_fields'],'cyclotomic_schur_gram proposal')
for ident,row in read(D/'cyclotomic_center_trace/root-metadata-proposals.json')['items'].items():
 put(ident,{'derivations':row['replace_derivations'],'citations':row['citations']},'cyclotomic_center_trace proposal')
for row in read(D/'equivariant_descent/escalation-resolution-packet.json')['contract_proposals']:
 _,_,ident,field=row['json_pointer'].split('/');put(ident,{field:row['proposed_value']},'equivariant_descent packet')
for ident,row in read(D/'cyclotomic_isomorphism/escalation-resolution-packet.json')['risk_review_replacement_proposals'].items():put(ident,{'risk_review':row['replace_risk_review_after_root_validation']},'cyclotomic_isomorphism packet risk')
# Match exact current source sections, preserve manifest identity/display titles.
def sections(body):
 return {m.group(1):m.group(2).strip() for m in re.finditer(r'^## ([^\n]+)\n(.*?)(?=^## |\Z)',body,re.M|re.S)}
for ident in sorted(affected & ownership.keys()):
 f,body,h=itemfiles[ident];p,page,it=ownership[ident];s=sections(body)
 for head in ['Statement','Definition','Example','Statement refuted']:
  if head in s:it['statement']=s[head];break
 if 'Proof' in s:it['strategy']=s['Proof']
 elif 'Verification' in s:it['strategy']=s['Verification']
 elif f.get('proof_strategy'):it['strategy']=f['proof_strategy']
 it['deps']=f.get('deps',[]) or []
 for k in ['provenance','sources']:
  if k in f:it[k]=f[k]
 # Preserve genuinely unresolved supplier risks; aggregate historical bytes are archived.
 if ident.startswith(('lem-minimal-parabolic-polynomial-flag-model','lem-minimal-parabolic-diagram-category-has','thm-minimal-parabolic-diagram')):
  cp=p.replace('.pages.json','.proof-contracts.json');e=docs[cp]['contracts'].get(ident)
  if e and e.get('risk_review',{}).get('status')=='open':e['risk_review']['notes']+=' Current actual flag comparison, second adjunction, and resulting PBW/cap closure remain unresolved; no mathematical acceptance is recorded.'
# Native-style aliases resolve only for level graph, original deps spelling is retained.
allitems={it['id']:it for p,d in docs.items() if p.endswith('.pages.json') for page in d for it in page['items']};level={};visiting=set()
def visit(i):
 if i in level:return level[i]
 assert i not in visiting,'cycle '+i
 visiting.add(i);v=0
 for dep in allitems[i].get('deps',[]):
  dep=aliases.get(dep,dep)
  if dep in allitems:v=max(v,visit(dep)+1)
 visiting.remove(i);level[i]=v;return v
labels=[]
for ident,it in allitems.items():
 v=visit(ident);it['dependency_level']=v
 if ident in itemfiles and itemfiles[ident][0].get('dependency_level')!=v:labels.append({'id':ident,'path':'items/'+ident+'.md','old':itemfiles[ident][0].get('dependency_level'),'new':v})
# Archive all prior contract/risk data and bind exact source bytes before guarded writes.
source_hashes={i:itemfiles[i][2] for i in sorted(affected & ownership.keys())}
for i,h in source_hashes.items():assert sha(pathlib.Path('items/'+i+'.md').read_bytes())==h
for p,b in original.items():assert pathlib.Path(p).read_bytes()==b,'aggregate changed concurrently '+p
changed={}
for p,d in docs.items():
 b=(json.dumps(d,ensure_ascii=False,indent=2)+'\n').encode()
 if b!=original[p]:pathlib.Path(p).write_bytes(b);changed[p]={'before_sha256':sha(original[p]),'after_sha256':sha(b)}
report={'run':R,'status':'guarded-consolidated-merge-completed','changed_files':changed,'source_hashes':source_hashes,'source_dependency_label_changes':labels,'contract_proposals_merged':updates,'exceptions':exceptions,'preserved_history_directory':str(A),'unresolved':['unrestricted quasi-R','arbitrary-root quantum modular package','KLR actual flag comparison / second adjunction / PBW cap'],'acceptance_claimed':False}
(O/'integration-report.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({'changed_files':len(changed),'source_bindings':len(source_hashes),'source_label_deltas':len(labels),'exceptions':exceptions}))
