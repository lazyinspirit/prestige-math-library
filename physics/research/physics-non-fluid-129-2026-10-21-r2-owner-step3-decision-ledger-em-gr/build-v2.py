import pathlib,json,copy,hashlib
R='physics-non-fluid-129-2026-10-21-r2';D=pathlib.Path('research')/(R+'-owner-step3-decision-ledger-em-gr');L=pathlib.Path('research/defect-ledger.jsonl')
def load(p):return json.loads(pathlib.Path(p).read_text())
def sha(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def jh(x,sort=False):return hashlib.sha256(json.dumps(x,sort_keys=sort,separators=(',',':'),ensure_ascii=False).encode()).hexdigest()
p=load(D/'proposal.json');q=copy.deepcopy(p);rows=[json.loads(l) for l in L.read_text().splitlines() if l];lookup={r['defect_id']:r for r in rows};successors=[];mapping={}
tax={R+'-3a-batch-14-degree-zero-false-positive':{'location':'proof-step'},R+'-3a-batch-14-projector-title':{'subclass':'false-or-overstrong-title'},R+'-3a-batch-14-curvature-radial-sign':{'subclass':'arithmetic-error','location':'proof-step'},R+'-3a-batch-28-unsupported-gauge-title':{'subclass':'false-or-overstrong-title'},R+'-3a-batch-28-constitutive-fragment':{'subclass':'ill-formed'}}
for id,changes in tax.items():
 old=lookup[id];new=copy.deepcopy(old);nid=id+'-taxonomy-v2';assert nid not in lookup;new['defect_id']=nid
 for key,val in changes.items():assert new[key]!=val;new[key]=val
 new['supersedes']=[id];new['metadata_correction']={'kind':'taxonomy-only','original_defect_id':id,'original_row_sha256':jh(old),'corrected_fields':list(changes)}
 successors.append({'kind':'ledger_append_taxonomy_successor','original_row':old,'original_row_sha256_json_stringify':jh(old),'row':new,'reason':'WORKFLOW267 append-only correction. Clone exact original substantive content, including original historical timestamp and adjudication references; change only the named taxonomy fields plus lineage/unique ID. No historical row mutation.'});mapping[id]=nid
q.pop('ledger_row_replacements',None);q['ledger_appends']=successors
q['supersedes_research_proposal']={'path':str(D/'proposal.json'),'sha256':sha(D/'proposal.json'),'qualification':'Preserved earlier proposal is not authorized for application: v2 replaces every proposed in-place ledger edit with append-only taxonomy lineage or no action.'}
# Preserve actual original decisions. Compose alias changes and exact new ownership refs once per obligation.
replacements={};appendactions=[]
for a in q['decision_actions']:
 if a['kind']=='decision_fields_replacement':replacements[(a['path'],a['obligation'])]=a
 elif a['kind']=='ledger_append_proposal':q['ledger_appends'].append(a)
 else:appendactions.append(a)
for path in sorted({g['path'] for g in q['guards'] if g['path'].endswith('-3a-decisions.json')}):
 for d in load(path)['decisions']:
  if not any(id in mapping for id in d.get('defect_ids',[])):continue
  k=(path,d['obligation']);a=replacements.get(k)
  if a is None:
   a={'kind':'decision_fields_replacement','path':path,'obligation':d['obligation'],'before':d,'after':copy.deepcopy(d),'guard':{'decision_canonical_sha256':jh(d,True)},'reason':'Retarget current decision to exact append-only taxonomy successor; original frozen row and finding are retained. Native taxonomyOwnership can also resolve original ID through this same guarded lineage.'};replacements[k]=a
  a['after']['defect_ids']=[mapping.get(id,id) for id in a['after']['defect_ids']]
for a in appendactions:
 if a['kind']=='supplemental_decision_append':
  d=a['decision_without_current_carrier_hash'];d['defect_ids']=[mapping.get(id,id) for id in d['defect_ids']];d['obligation']='gate:'+d['defect_ids'][0]
  a['ledger_reference_transition']='References append-only taxonomy successor where one exists; no original ledger adjudication_ref is changed.'
q['decision_actions']=list(replacements.values())+appendactions
q['taxonomy_id_resolution']=mapping
q['counts']['append_only_taxonomy_successors']=sum(a['kind']=='ledger_append_taxonomy_successor' for a in successors);q['counts']['in_place_ledger_edits']=0;q['counts']['new_consumer_defect_rows']=1
q['application_limits']=[x for x in q['application_limits'] if not x.startswith('Root must guard')]+['Preserve all original ledger bytes and adjudication_ref arrays. Append five exact taxonomy successors plus the separate consumer row. Root supplies only the actual new consumer-row application timestamp; taxonomy clones retain original at because native lineage compares all substantive fields.','Supplemental decisions reference existing closed row or its exact taxonomy successor; no ledger adjudication_ref mutation is necessary or proposed.','Current decisions explicitly retarget the five new taxonomy IDs; the native resolveDefectId lineage is verified independently. Original frozen source observations stay unchanged.']
q['correction_to_prior_proposal']='v2 replaces all eight ledger-row-replacement proposals with five append-only taxonomy successors and no adjudication_ref edits. Different-subject batch28 consumer still gets its own genuine new row; producer historical refs remain intact.'
q['guards']=[g for g in q['guards'] if g['path']!='research/defect-ledger.jsonl']+[{'path':str(L),'sha256':sha(L)},{'path':'WORKFLOW.md','sha256':sha('WORKFLOW.md')},{'path':'tools/physics-support/defect-ledger-taxonomy.mjs','sha256':sha('tools/physics-support/defect-ledger-taxonomy.mjs')}]
(D/'proposal.v2.json').write_text(json.dumps(q,indent=2,ensure_ascii=False)+'\n')
c=load(D/'conditional-touched-refuter.json');c['taxonomy_id_resolution']=mapping;c['supersedes_research_appendix']={'path':str(D/'conditional-touched-refuter.json'),'sha256':sha(D/'conditional-touched-refuter.json')}
for a in c['actions']:
 a['after']['defect_ids']=[mapping.get(id,id) for id in a['after']['defect_ids']]
 assert a['before']['defect_ids']==a['after']['defect_ids'] # actual3/35 IDs unaffected by five14/28 successors
(D/'conditional-touched-refuter.v2.json').write_text(json.dumps(c,indent=2,ensure_ascii=False)+'\n')
lines=['# Append-only EM/GR ownership proposal v2','','This successor replaces the earlier proposed ledger mutations. All original ledger rows, timestamps, evidence, severity/disposition and historical adjudication references remain byte-for-byte intact. No removal of the historical batch28 consumer reference from the producer row is proposed. Current decisions establish actual current ownership.','','Append five taxonomy-only successors under WORKFLOW267 and the actual native taxonomyOwnership API. Each unique successor copies the full original substantive row, retains its original at, changes only invalid taxonomy fields, supersedes exactly one original ID and binds JSON.stringify-order original_row_sha256. The native resolver maps old references to the active successor; the proposed current decision refs explicitly use the successor IDs.','','| Original defect ID | New active taxonomy ID |','|---|---|']
for old,new in mapping.items():lines.append('| '+old+' | '+new+' |')
lines+=['','The separate nonfatal batch28 conditional-flux facts-block defect still requires its own append and current touched-decision reference. Root supplies that new row’s actual application timestamp. This does not alter or downgrade the fatal supplier-title defect.','','The four supplemental gate decisions refer to actual previously recorded repairs, with the batch14 sign row using its taxonomy successor. No historical adjudication_ref edit is needed. Root binds their exact canonical current carrier hashes.','','Seven supported reader/flagged aliases remain immediately applicable after guarded lineage appends. Four touched/refuter3/35 aliases remain separately conditional on the validator decision; these IDs are unaffected by the five taxonomy successors. No fake distinct defects, false clean-change classification, source repair, stamp, gate pass or proof acceptance is asserted.','','Original proposal.json and conditional-touched-refuter.json remain preserved. Adopt only proposal.v2.json and conditional-touched-refuter.v2.json under seal.v2.json.','']
(D/'review.v2.md').write_text('\n'.join(lines))
print(json.dumps(q['counts']))
