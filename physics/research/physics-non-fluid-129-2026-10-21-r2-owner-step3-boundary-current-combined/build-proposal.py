import json,hashlib,pathlib,copy,collections
R='physics-non-fluid-129-2026-10-21-r2'
OUT=pathlib.Path('research')/(R+'-owner-step3-boundary-current-combined')
BASE=pathlib.Path('research')/(R+'-owner-step3-root-adoption/contracts/merged.semantic-proposal.json')
def sha(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def canon(x):return hashlib.sha256(json.dumps(x,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode()).hexdigest()
def semantic(x):return {k:v for k,v in x.items() if k not in ['reviewed','template_review']}
base=json.loads(BASE.read_text());records=[];inputs=[];sources={};pending=[]
OWNERS=['boundary_1','boundary_2','csm_boundary','drift_materialization','qft_graph_scaling','qft_green_maps','qsm_boundary','supplier_cycle']
for owner in OWNERS:
 folder=pathlib.Path('research')/(R+'-owner-step3-boundary-current-'+owner);p=folder/'proposal.json';d=json.loads(p.read_text());scope=json.loads((folder/'scope.json').read_text())
 inputs += [{'path':str(q),'sha256':sha(q)} for q in [p,folder/'scope.json',folder/'review.md']]
 scopes={x['id']:x for x in scope['items']};entries=[]
 its=d.get('items',[])
 if isinstance(its,dict):
  for id,item in its.items():
   for c in item.get('selected_cases',item.get('cases',[])): entries.append((id,c,'selected'))
 else:
  for item in its:
   for c in item.get('cases',[]):entries.append((item['id'],c,'selected'))
 for c in d.get('cases',d.get('rows',[])):entries.append((c['id'],c,'selected'))
 for c in d.get('supplemental_rows',[]):entries.append((c['id'],c,'batch85-choice-reason'))
 for c in d.get('incidental_rows_outside_assigned_candidates',[]):entries.append((c['id'],c,'CSM-incidental'))
 for id,c,kind in entries:
  current=next(x for x in base['contracts'][id]['boundaries'] if x['case']==c['case'])
  old=c.get('original_row',c.get('original',current));assert old==current,(owner,id,c['case'],'original mismatch')
  after=None
  for key in ['after_row','exact_after','after_if_needed','exact_after_semantic_row','suggested_semantic_row']:
   if isinstance(c.get(key),dict):after=c[key];break
  after=after or old
  dis=c.get('disposition',c.get('decision',c.get('adjudication','correct')))
  source=scopes.get(id,{}).get('source','items/'+id+'.md');expected=scopes.get(id,{}).get('source_raw_sha256')
  if expected is None:
   matching=next((g for g in d.get('guards',[]) if g.get('path')==source),None);expected=matching.get('sha256') if matching else None
  assert expected,(owner,id,'no reviewed source guard')
  actual=sha(source);status='matches-reviewed-body' if expected==actual else 'pending-owner-final-receipt'
  if expected!=actual: pending.append({'id':id,'reviewed_sha256':expected,'observed_current_sha256':actual,'required':'Final owner receipt and explicit row revalidation; do not adopt this body silently.'})
  sources[id]={'path':source,'reviewed_sha256':expected,'observed_current_sha256':actual,'binding_status':status}
  records.append({'id':id,'case':c['case'],'owner':owner,'review_kind':kind,'disposition':dis,'semantic_changed':semantic(old)!=semantic(after),'original_row':old,'original_full_row_sha256':canon(old),'proposed_after_row':after,'semantic_after_row':semantic(after),'source_binding':sources[id],'owner_proposal':str(p),'owner_case_evidence':c,'owner_reading_limits':{k:v for k,v in d.items() if 'limit' in k or 'reading' in k},'adoption_status':'pending-root-current-binding-and-certification'})
keys=[(r['id'],r['case']) for r in records];assert len(keys)==len(set(keys)),'duplicate case proposals'
proposal={'run':R,'purpose':'Combined research-only exact boundary adoption table; no proof acceptance or certification.','immutable_base_guard':{'path':str(BASE),'sha256':sha(BASE)},'successor_output':str(OUT/'merged.semantic-proposal.round2.json'),'owner_input_guards':inputs,'source_bindings':sources,'counts':{'owners':len(OWNERS),'reviewed_cases':len(records),'changed_semantics':sum(r['semantic_changed'] for r in records),'unchanged_semantics':sum(not r['semantic_changed'] for r in records),'review_kinds':dict(collections.Counter(r['review_kind'] for r in records))},'pending_bindings':list({x['id']:x for x in pending}.values()),'rows':records,'limits':['Every row preserves its exact original, exact proposed after and attributed owner evidence. Exact owner-proposed annotations are preserved as evidence only; the projection strips reviewed/template_review from projected rows, creating no acceptance stamps.','Root alone decides adoption, refreshes current item/row hashes and certifications. No worksheet stamps are emitted or refreshed.','All boundary cases outside this table and all non-boundary contract fields are unchanged in the research successor.','QSM filtered-generator repair receipt must be explicitly bound before successor is eligible for production transcription.'],'production_edits':False}
(OUT/'proposal.json').write_text(json.dumps(proposal,indent=2,ensure_ascii=False)+'\n')
# This is a distinct research-only successor. No base or native contract is written.
result=copy.deepcopy(base)
for r in records:
 rows=result['contracts'][r['id']]['boundaries'];n=next(n for n,x in enumerate(rows) if x['case']==r['case']);rows[n]=copy.deepcopy(r['semantic_after_row'])
(OUT/'merged.semantic-proposal.round2.json').write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n')
lines=['# Combined boundary adoption table','',f"{len(records)} exact item/case rows from eight owners, including seven CSM incidental rows and the batch85 choice-reason correction. The distinct round2 JSON is research-only; the immutable base is untouched. No current acceptance stamp is generated.",'','| Item | Case | Owner | Review | Semantic change | Source binding |','|---|---|---|---|---|---|']
for r in records:lines.append('| '+' | '.join([r['id'],r['case'],r['owner'],r['disposition'],str(r['semantic_changed']),r['source_binding']['binding_status']])+' |')
lines+=['','Owner evidence and reading limits are retained verbatim inside each proposal row. This aggregation does not claim new mathematical readings. Root must review exact rows, bind current bodies and refresh row certification.','', 'Pending source bindings: '+json.dumps(proposal['pending_bindings'],ensure_ascii=False),'']
(OUT/'review.md').write_text('\n'.join(lines));print(json.dumps(proposal['counts']));print(json.dumps(proposal['pending_bindings']))
