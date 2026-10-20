#!/usr/bin/env python3
"""Root-only batch81 current-repair integration. Prepared, NOT executed by delegate.
Run: python3 THISFILE --apply. Only own two manifest dependency mirrors; no plan/state/readiness/gate writes.
"""
import pathlib,json,hashlib,sys,copy,datetime,tempfile,os
if sys.argv[1:]!=['--apply']:raise SystemExit('No mutation; root owner must explicitly invoke --apply.')
BASE=pathlib.Path(__file__).resolve().parent
ROOT=BASE.parents[2]
def sha(x):return hashlib.sha256(x).hexdigest()
def read(p):
 assert p.is_file() and not p.is_symlink(),f'Expected regular file: {p}'
 assert p.resolve().is_relative_to(ROOT)
 for a in p.parents:
  if a==ROOT:break
  assert not a.is_symlink(),f'Symlink ancestor: {a}'
 return p.read_bytes()
def unique(pairs):
 d={}
 for k,v in pairs:assert k not in d;d[k]=v
 return d
def parse(raw):return json.loads(raw,object_pairs_hook=unique)
raw=read(BASE/'report.json')
assert sha(raw)=='39ccf59ff6c8f262d97c9cab833c950262bc71fdc2fd6aa4724e5fa6bb1fe306','Frozen cycle1 report changed'
m=parse(raw)
assert m['actual_shared_writes'] is False and m['root_integration_executed'] is False and m['native_execution_or_acceptance_credit'] is False
for p,h in m['context_guards'].items():assert sha(read(ROOT/p))==h,f'Context CAS failed: {p}'
prepared=[]
for row in m['source_proposals']:
 assert row['target'] in ['items/alg-td-zero-prediction.md','items/alg-sarsa-on-policy-control.md','items/alg-monte-carlo-policy-evaluation.md']
 p=ROOT/row['target'];before=read(p);after=read(ROOT/row['proposal'])
 assert sha(before)==row['before_sha256'] and sha(after)==row['after_sha256'],f'Source CAS failed: {p}'
 fm_before=before.decode().split('---',2)[1];fm_after=after.decode().split('---',2)[1]
 if row['target']!='items/alg-monte-carlo-policy-evaluation.md':
  assert fm_after.count('  - thm-ionescu-tulcea-construction-of-a-markov-chain\n')==1
  fm_after=fm_after.replace('  - thm-ionescu-tulcea-construction-of-a-markov-chain\n','',1)
 assert fm_before==fm_after,'Unowned frontmatter field changed'
 prepared.append((p,before,after))
quote_count=0
for row in m['metadata_proposals']:
 assert row['target']==f'research/{m["run"]}-batch-81.proof-contracts.json'
 p=ROOT/row['target'];before=read(p);original=parse(before);new=copy.deepcopy(original)
 assert sha(read(ROOT/row['proposal']))==row['proposal_sha256']
 for op in row['operations']:
  citation=new['contracts'][op['consumer']]['citations'][op['citation_index']]
  assert (citation['fact'],citation['source'],citation['source_section'])==(op['fact'],op['supplier'],op['section'])
  assert citation['quote']==op['before_quote'],f'Quote-field CAS failed: {op["consumer"]}:{op["fact"]}'
  citation['quote']=op['after_quote'];quote_count+=1
 reverted=copy.deepcopy(new)
 for op in row['operations']:reverted['contracts'][op['consumer']]['citations'][op['citation_index']]['quote']=op['before_quote']
 assert reverted==original,'Foreign metadata value changed'
 prepared.append((p,before,(json.dumps(new,indent=2,ensure_ascii=False)+'\n').encode()))
row=m['manifest_dependency_proposal']
assert row['target']==f'research/{m["run"]}-batch-81.pages.json'
p=ROOT/row['target'];before=read(p);original=parse(before);new=copy.deepcopy(original)
assert sha(read(ROOT/row['proposal']))==row['proposal_sha256']
for op in row['operations']:
 pages=[x for x in new if x.get('id')==op['page']];assert len(pages)==1
 entries=[x for x in pages[0]['items'] if x.get('id')==op['item']];assert len(entries)==1
 assert op['field']=='deps' and entries[0]['deps']==op['before'],'Manifest dependency-field CAS failed'
 assert op['after']==op['before']+['thm-ionescu-tulcea-construction-of-a-markov-chain']
 entries[0]['deps']=copy.deepcopy(op['after'])
reverted=copy.deepcopy(new)
for op in row['operations']:
 page=next(x for x in reverted if x.get('id')==op['page']);entry=next(x for x in page['items'] if x.get('id')==op['item']);entry['deps']=copy.deepcopy(op['before'])
assert reverted==original,'Foreign manifest value changed'
prepared.append((p,before,(json.dumps(new,indent=2,ensure_ascii=False)+'\n').encode()))
assert len(prepared)==5 and quote_count==6 and len(row['operations'])==2 and len({str(p) for p,_,_ in prepared})==5
for p,b,a in prepared:assert read(p)==b,'Input moved during complete preflight'
archive=BASE/('root-apply-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));archive.mkdir()
receipt={'kind':'root-batch81-owner-escalation-integration','report_sha256':sha(raw),'native_credit':False,'mathematical_review_cycle':1,'files':[],'foreign_contract_fields_preserved':True,'root_followthrough':['Native owner resolution registration and current interface bindings','Ordinary root current-input readiness and metadata preparation','Outside native drift post-drain pass; no imported old acceptance']}
for p,b,a in prepared:
 rel=p.relative_to(ROOT);q=archive/'before'/rel;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(b);receipt['files'].append({'path':str(rel),'before_sha256':sha(b),'after_sha256':sha(a)})
(archive/'prepared-receipt.json').write_text(json.dumps(receipt,indent=2)+'\n')
for p,b,a in prepared:
 assert read(p)==b,f'Last-moment CAS failed: {p}'
 fd,t=tempfile.mkstemp(prefix='.'+p.name+'.owner-',dir=p.parent)
 try:
  with os.fdopen(fd,'wb') as f:f.write(a);f.flush();os.fsync(f.fileno())
  assert read(p)==b,f'Final CAS failed: {p}'
  os.replace(t,p)
 finally:
  if os.path.exists(t):os.unlink(t)
for p,b,a in prepared:assert read(p)==a
(archive/'receipt.json').write_text(json.dumps(receipt,indent=2)+'\n')
print(json.dumps({'integrated':5,'quote_fields':6,'receipt':str((archive/'receipt.json').relative_to(ROOT))}))
