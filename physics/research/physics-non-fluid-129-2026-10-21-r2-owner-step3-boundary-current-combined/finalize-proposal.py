import json,pathlib,hashlib,copy
R='physics-non-fluid-129-2026-10-21-r2';root=pathlib.Path('.');D=pathlib.Path('research')/(R+'-owner-step3-boundary-current-combined')
def sha(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def load(p):return json.loads(pathlib.Path(p).read_text())
original=D/'proposal.json';p=load(original);original_sha=sha(original)
qpath=pathlib.Path('research')/(R+'-owner-step3-boundary-current-qsm_boundary/proposal-final-current.json');apath=pathlib.Path('research')/(R+'-owner-step3-qsm102-flatness-prerequisite/combined-v2/application/receipt.json');mpath=pathlib.Path('research')/(R+'-owner-step3-root-adoption/source-metadata-round2/receipt.json')
assert sha(qpath)=='9ae11e2121757543bc09716d18d62ae73e533e57479e967b9485bf29de6c84c6'
assert sha(apath)=='597a04fa36e2de0d13210b4ec3ec8a4b1e5e5810c531b38428897d5a0a048431'
q=load(qpath);a=load(apath);m=load(mpath);change=m['changes'][0];id='lem-qsmx-filtered-spectral-generator'
assert change['path']==a['source'] and change['before_sha256']==a['after_raw_sha256'] and change['after_sha256']==sha(a['source'])
assert change['after_sha256']=='9c438c7f5b532fdce5c5beef0b7ec02e7c4ec48f81b11d6b6b7a305de8166b8c'
assert sha(a['after'])==a['after_raw_sha256']
def body(path):return pathlib.Path(path).read_bytes().split(b'\n---\n',1)[1]
assert body(a['source'])==body(a['after']), 'metadata transition changed scientific body'
transition={'proof_repair_receipt':{'path':str(apath),'sha256':sha(apath)},'final_owner_case_proposal':{'path':str(qpath),'sha256':sha(qpath)},'root_metadata_receipt':{'path':str(mpath),'sha256':sha(mpath)},'owner_read_raw_sha256':a['after_raw_sha256'],'current_raw_sha256':change['after_sha256'],'receipt_body_sha256':change['body_sha256'],'verification':'Exact post-frontmatter body bytes equal between archived owner-read successor and current source. Root receipt declares deps/dependency_roles-only transition; no fresh whole-proof reading is asserted by this aggregation.'}
qmap={(i,c['case']):(item,c) for i,item in q['items'].items() for c in item['cases']};assert len(qmap)==26
for r in p['rows']:
 if r['owner']!='qsm_boundary':continue
 item,c=qmap[(r['id'],r['case'])];assert c['original_row']==r['original_row'];assert c['disposition']=='uphold' and c['after_row_needed']==False
 r['owner_proposal']=str(qpath);r['owner_case_evidence']=c;r['owner_reading_limits']={'reading_limits':q['reading_limits']};r['proposed_after_row']=copy.deepcopy(r['original_row']);r['semantic_after_row']={k:v for k,v in r['original_row'].items() if k not in ['reviewed','template_review']}
 b=r['source_binding'];b['reviewed_sha256']=item['source_raw_sha256'];b['observed_current_sha256']=sha(item['source']);b['binding_status']='matches-reviewed-body'
 if r['id']==id:b.update(binding_status='owner-read-body-bound-through-metadata-only-transition',metadata_only_transition=transition)
 else:assert b['reviewed_sha256']==b['observed_current_sha256']
 p['source_bindings'][r['id']]=b
p['previous_combined_proposal']={'path':str(original),'sha256':original_sha,'unchanged':True}
p['owner_input_guards'] += [{'path':str(x),'sha256':sha(x)} for x in [qpath,apath,mpath]]
p['pending_bindings']=[];p['qsm_final_metadata_transition']=transition;p['successor_output']=str(D/'merged.semantic-proposal.round2.final.json')
p['limits']=[x for x in p['limits'] if not x.startswith('QSM filtered-generator')]+['Final QSM owner evidence binds the repaired body; root metadata transition preserves that body exactly. Root still owns hashes and certification on its fresh transcription.']
p['validation']['qsm_final_owner_26_cases_bound']=True;p['validation']['qsm_current_body_exactly_matches_owner_read_successor']=True
for b in p['source_bindings'].values():assert sha(b['path'])==b['observed_current_sha256']
base=load(p['immutable_base_guard']['path']);assert sha(p['immutable_base_guard']['path'])==p['immutable_base_guard']['sha256']
for r in p['rows']:
 rows=base['contracts'][r['id']]['boundaries'];n=next(n for n,x in enumerate(rows) if x['case']==r['case']);assert rows[n]==r['original_row'];rows[n]=copy.deepcopy(r['semantic_after_row'])
(D/'proposal.final.json').write_text(json.dumps(p,indent=2,ensure_ascii=False)+'\n');(D/'merged.semantic-proposal.round2.final.json').write_text(json.dumps(base,indent=2,ensure_ascii=False)+'\n')
(D/'seal.final.json').write_text(json.dumps({'proposal':{'path':str(D/'proposal.final.json'),'sha256':sha(D/'proposal.final.json')},'research_successor':{'path':str(D/'merged.semantic-proposal.round2.final.json'),'sha256':sha(D/'merged.semantic-proposal.round2.final.json')},'qualification':'153 exact rows; owner final QSM body and metadata-only transition bound. Root certification not performed.'},indent=2)+'\n')
text=(D/'review.md').read_text().replace('pending-owner-final-receipt','owner-read-body-bound-through-metadata-only-transition');text=text.split('Pending source bindings:')[0]
text+='Final QSM proposal supplies all 26 upheld cases against the repaired body. Root metadata receipt changes only deps/dependency_roles. Archived owner-read successor and current post-frontmatter body bytes were compared and match exactly. No pending source bindings remain. The original combined proposal is preserved; proposal.final.json and seal.final.json are the successor authority for this research table.\n'
(D/'review.final.md').write_text(text)
assert sha(original)==original_sha
print(json.dumps({'rows':len(p['rows']),'pending':p['pending_bindings'],'seal':load(D/'seal.final.json')}))
