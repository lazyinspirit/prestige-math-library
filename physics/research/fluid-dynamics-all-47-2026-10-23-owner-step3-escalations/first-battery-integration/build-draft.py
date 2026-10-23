# Draft artifact generator only: never writes a live input.
import json,pathlib,hashlib,copy,re,collections
ROOT=pathlib.Path(__file__).resolve().parents[3]
HERE=pathlib.Path(__file__).resolve().parent
RUN='fluid-dynamics-all-47-2026-10-23'
BASE=f'research/{RUN}-owner-step3-escalations'
guards={}; docs={}; operations=[]; stamps=[]; flags=[]; quote_checks=[]; scope_repairs=[]
def sha(b):return hashlib.sha256(b).hexdigest()
def raw(path):
 p=ROOT/path
 assert p.is_file() and p.resolve()==p.absolute(),path
 b=p.read_bytes();guards[path]=sha(b);return b.decode()
def read(path):return json.loads(raw(path))
def doc(path):
 if path not in docs:docs[path]=read(path)
 return docs[path]
def source(id,expected=None):
 path=f'items/{id}.md';text=raw(path)
 if expected:assert guards[path]==expected,('owner source observation stale',id,expected,guards[path])
 return text
owners={}
for b in range(1,48):
 for page in read(f'research/{RUN}-batch-{b}.pages.json'):
  for i in page['items']:
   assert i['id'] not in owners
   owners[i['id']]=b
assert len(owners)==306
def contract(id):
 assert id in owners,id
 path=f'research/{RUN}-batch-{owners[id]}.proof-contracts.json';return path,doc(path)['contracts'][id]
def at(x,ptr):
 for k in ptr.split('/')[1:]:x=x[int(k)] if isinstance(x,list) else x.get(k)
 return x
def add(kind,path,ptr,before,after,authority,**kw):
 assert at(doc(path),ptr)==before,(path,ptr,'current before mismatch')
 assert not any(o['path']==path and o['pointer']==ptr for o in operations),(path,ptr,'duplicate')
 operations.append(dict(kind=kind,path=path,pointer=ptr,before=copy.deepcopy(before),after=copy.deepcopy(after),authority=authority,**kw))
def section(text,name):
 m=re.search(r'^## '+re.escape(name)+r'\s*\n(.*?)(?=^## |\Z)',text,re.M|re.S)
 assert m,('missing public section',name)
 return m.group(1)
selection_path=f'{BASE}/first-battery-boundaries/input-all.json'
selection=read(selection_path)['rows'];assert len(selection)==141
selected={(r['id'],r['case']):r for r in selection};reviews={}
for span in ['1-6','7-12','13-18','19-24','25-30','31-36','43-47']:
 path=f'{BASE}/first-battery-boundaries/review-{span}.json';d=read(path)
 for r in d.get('rows',d.get('reviews',[])):
  key=(r.get('id',r.get('item')),r['case']);assert key in selected and key not in reviews,key
  reviews[key]=(r,path)
assert set(reviews)==set(selected)
supplement=f'{BASE}/first-battery-boundaries/choice-status-supplement-19-24.json'
for correction in read(supplement)['reviews']:
 key=(correction['item'],correction['case']);previous,original_authority=reviews[key]
 amended=copy.deepcopy(previous);amended.update(correction);amended['reason']=correction['proposed_boundary']['evidence'];amended['superseded_authority']=original_authority
 reviews[key]=(amended,supplement)
for (id,case),sel in selected.items():
 r,authority=reviews[id,case];source(id,sel['current_source_rawsha'])
 observed=r.get('current_source_rawsha',r.get('current_raw_sha256'));assert observed==sel['current_source_rawsha'],(id,case,'review source mismatch')
 path,c=contract(id);indices=[i for i,b in enumerate(c['boundaries']) if b['case']==case];assert len(indices)==1
 i=indices[0];before=c['boundaries'][i];assert before==sel['current_boundary'],(id,case,'input row mismatch')
 proposal=r.get('proposed_boundary',r.get('repair_proposal'))
 after=copy.deepcopy(before)
 if proposal:
  assert proposal['case']==case
  # Retain every historical stamp verbatim. Row wording/status only are owner proposals.
  for field in ['status','reason','evidence','case_scope']:
   if field in proposal:after[field]=copy.deepcopy(proposal[field])
  if 'reason' in proposal and 'evidence' not in proposal:after.pop('evidence',None)
  if 'evidence' in proposal and 'reason' not in proposal:after.pop('reason',None)
 scope=after.get('case_scope')
 if scope:
  public=section(source(id),scope['source_section'])
  if scope['source_excerpt'] not in public:
   assert id=='cex-fd-collision-support' and case in ['iff-forward','iff-reverse','endpoints','nonempty-choice'],(id,case,'unexpected stale scope')
   after['case_scope']={**scope,'source_excerpt':public.strip()}
   scope_repairs.append(dict(item=id,case=case,before=scope,after=after['case_scope'],authority=authority,limit='Exact current public Statement anchor only; same-owner status/reason unchanged.'))
 if after!=before:add('boundary-row',path,f'/contracts/{id}/boundaries/{i}',before,after,authority,item=id,case=case)
 stamps.append(dict(item=id,case=case,path=path,pointer=f'/contracts/{id}/boundaries/{i}',authority=authority,decision=r['decision'],scientific_reason=r['reason'],source_raw_sha256=sel['current_source_rawsha'],original_template_review=before.get('template_review'),proposed_row=after,root_only=['template_review.by','template_review.item_sha256','template_review.row_sha256','template_review.current_scientific_review'],status='PROPOSAL_NOT_A_STAMP'))
# The two source3 corrections are separate actual individual scientific judgments.
p=f'{BASE}/source3/boundary-wording-corrections.json'
for r in read(p)['rows']:
 id=r['item'];source(id,r['current_raw_sha256']);path,c=contract(id);i=next(i for i,b in enumerate(c['boundaries']) if b['case']==r['case']);b=c['boundaries'][i];a=copy.deepcopy(b)
 for field in ['status','reason','evidence','case_scope']:
  if field in r['proposed_boundary']:a[field]=r['proposed_boundary'][field]
 if 'evidence' in r['proposed_boundary']:a.pop('reason',None)
 add('boundary-wording',path,f'/contracts/{id}/boundaries/{i}',b,a,p,item=id,case=r['case'])
 stamps.append(dict(item=id,case=r['case'],path=path,pointer=f'/contracts/{id}/boundaries/{i}',authority=p,scientific_reason=r['reason'],source_raw_sha256=guards[f'items/{id}.md'],original_template_review=b.get('template_review'),proposed_row=a,status='PROPOSAL_NOT_A_STAMP',root_only=['all current template_review fields']))
def citation(id,b,a,authority,pointer=None):
 path,c=contract(id);i=next(i for i,v in enumerate(c['citations']) if v==b)
 ptr=f'/contracts/{id}/citations/{i}';assert pointer is None or pointer==ptr
 assert {k:v for k,v in b.items() if k!='quote'}=={k:v for k,v in a.items() if k!='quote'},(id,'nonquote edit')
 source(id);text=source(a['source']);public=section(text,a['source_section']);assert a['quote'] in public,(id,'proposed quote not exact current public excerpt')
 add('citation-quote',path,ptr,b,a,authority,item=id)
 quote_checks.append(dict(item=id,fact=a['fact'],supplier=a['source'],section=a['source_section'],before_current=b['quote'] in public,after_current=True,authority=authority,semantics='Only quote bytes change; actual consumer compatibility attributed to this same-owner report.'))
def risk(id,after,authority,before=None):
 path,c=contract(id);source(id);actual=c.get('risk_review')
 if before is not None:assert before==actual,(id,'risk before mismatch')
 assert after['status']=='complete' and 'alpha-batch-' not in after['reviewer'],id
 # Missing fields use null preimage and explicit presence to guard absence.
 add('risk-review',path,f'/contracts/{id}/risk_review',actual,after,authority,item=id,before_present='risk_review' in c)
p=f'{BASE}/first-battery-contracts/weak-pressure-review.json';weak=read(p)
for r in weak['quote_replacements']:
 source(r['item'],r['consumer_guard']['raw_sha256']);source(r['after']['source'],r['source_guard']['raw_sha256']);citation(r['item'],r['before'],r['after'],p,r['json_pointer'])
for r in weak['risk_review_replacements']:source(r['item'],r['consumer_guard']['raw_sha256']);risk(r['item'],r['after'],p,r['before'])
p=f'{BASE}/first-battery-contracts/statistical-review.json';stats=read(p);q=stats['F10_quote_repair'];citation(q['consumer'],q['before'],q['after'],p)
for r in stats['bootstrap_derivation_input_repairs']:
 id=r['id'];path,c=contract(id);source(id);i=next(i for i,v in enumerate(c['derivations']) if v['id']==r['contract_row_id']);assert c['derivations'][i]==r['before'];assert {k:v for k,v in r['before'].items() if k!='inputs'}=={k:v for k,v in r['after'].items() if k!='inputs'};assert r['exact_current_proof_step'] in source(id)
 add('derivation-inputs',path,f'/contracts/{id}/derivations/{i}',r['before'],r['after'],p,item=id)
p=f'{BASE}/first-battery-boundaries/review-25-30.json'
for r in read(p)['citation_quote_proposals']:
 source(r['consumer'],r['consumer_source_rawsha']);source(r['supplier'],r['supplier_source_rawsha']);citation(r['consumer'],r['current_citation'],r['proposed_citation'],p)
p=f'{BASE}/first-battery-contracts/phasefield-review.json';phase=read(p);q=phase['citation_row'];id=q['json_pointer'].split('/')[2];citation(id,q['before'],q['after'],p,q['json_pointer']);q=phase['risk_row'];risk(q['json_pointer'].split('/')[2],q['after_proposal'],p,q['before'])
p=f'{BASE}/source3/current-risk-review-px01-x01.json'
for r in read(p)['reviews']:source(r['item'],r['current_raw_sha256']);risk(r['item'],r['proposed_risk_review'],p)
p=f'{BASE}/first-battery-boundaries/review-1-6.json'
for r in read(p)['risk_review_proposals']:source(r['id'],r['current_source_rawsha']);risk(r['id'],r['proposed_risk_review_for_root_adoption'],p,r['existing_risk_review'])
counts=collections.Counter(o['kind'] for o in operations)
assert counts['citation-quote']==12 and counts['derivation-inputs']==4 and counts['risk-review']==7
assert len(stamps)==143
plan=dict(version=1,run=RUN,status='DRAFT_ROOT_ADOPTION_REQUIRED_NO_APPLY_PERFORMED',scope='Only current selected batch contracts. No merged aggregate/source/FM/manifest/plan/decisions/frozen scope/native/import write.',operations=operations,root_only_boundary_review_proposals=stamps,preimage_guards=guards,quote_checks=quote_checks,literal_scope_anchor_repairs=scope_repairs,flags=flags,required_root_followup=['Review/adopt individual scientific judgments and stamp exact current boundary guards separately; this helper never writes a current review stamp.','Native aggregate regeneration only after coherent batch-contract integration; never replace aggregate from this draft.','Current source3 lemma contract changes require native owner recertification; root owns all routing/ledger/decisions/gates.'],history='Root execution archives complete original raw batch worksheets before any write; all existing template_review fields remain verbatim historical fields in proposed rows.')
(HERE/'plan.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n')
report=dict(run=RUN,status=plan['status'],selection_rows=len(selection),individual_boundary_proposals=len(stamps),operations=dict(counts),operation_total=len(operations),changed_batch_contracts=sorted({o['path'] for o in operations}),guards=len(guards),quote_checks=quote_checks,literal_scope_anchor_repairs=scope_repairs,flags=flags,unresolved_semantics=[],pending_final_authority=['Root adoption/current-boundary stamps for all143 judgments, not granted by this draft.','Root native recertification of changed source3 lemma contract and native aggregate regeneration.'],preservation=plan['scope'],no_apply=True)
(HERE/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:report[k] for k in ['selection_rows','individual_boundary_proposals','operations','operation_total','guards','flags']},indent=2))
