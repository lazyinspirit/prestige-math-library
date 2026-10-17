from pathlib import Path
import json,copy,re,difflib
R='numerical-optimization-dynamics-2026-10-16';P=Path(__file__).resolve().parent;O=P/'final-current'
assert not O.exists(), 'New immutable packet only'
O.mkdir()
notes=json.loads((P/'template-item-notes.json').read_text())
core=json.loads((P/'core/proposal.json').read_text())
diag=json.loads(Path('research',R+'-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json').read_text())
phase=json.loads(Path('research',R+'-owner-format-direct-remap-v2-20261016T111752339572Z/phase-preservation-review.json').read_text())
maps={Path(x['path']).stem:x['old_to_final_step_labels'] for x in phase if Path(x['path']).stem in notes}
def finaltext(id,t):
 m=maps.get(id,{})
 t=re.sub(r'(?<![\d.])\d+\.\d+(?![\d.])',lambda q:m.get(q[0],q[0]),t)
 t=re.sub(r'\b(Proof|Verification)(?=\d)',r'\1 step ',t)
 return t
finalnotes={id:finaltext(id,t) for id,t in notes.items()}
flags={(r['id'],r['case']) for t in diag['templates'] for r in t['rows']}
cores={(x['file'],tuple(x['pointer'])):x for x in core['boundary_field_operations']}
# These admitted empty/zero configurations were specifically inspected; they contradict the old blanket exclusions.
empty_checked={'def-real-and-complex-schur-forms','lem-compact-spectral-multiplier-is-well-defined','lem-compact-gram-operator-is-positive-and-has-kernel','lem-tikhonov-bias-converges-for-minimum-norm-solution','alg-rkc2-linear-chebyshev','def-hopf-weighted-trajectory-space','lem-hopf-weighted-trajectory-space-is-banach','thm-hyperbolic-local-map-stability','lem-local-center-manifold-for-a-simple-hopf-point','alg-validate-local-hopf-certificate','thm-hopf-local-branch-and-stability','thm-local-hopf-certificate-is-sound','ex-hopf-interval-enclosure-containing-zero','ex-supercritical-hopf-cubic-normal-form','ex-subcritical-hopf-cubic-normal-form','lem-characteristic-roots-stay-in-separated-neighborhoods'}
ops=[];covered=[];carriers=[];changed_status=[];anchor_issues=[]
for b in range(29,43):
 path=Path('research',R+f'-batch-{b}.proof-contracts.json');raw=path.read_bytes();doc=json.loads(raw);pro=copy.deepcopy(doc)
 for id,c in doc['contracts'].items():
  for i,row in enumerate(c.get('boundaries',[])):
   ptr=['contracts',id,'boundaries',i];key=(str(path),tuple(ptr));is_template=(id,row['case']) in flags
   if key not in cores and not is_template:continue
   assert id in finalnotes,id
   src=Path('items',id+'.md');source=src.read_text();primary=next((h for h in ['Statement','Definition','Example','Counterexample','Statement refuted'] if re.search(r'^## '+re.escape(h)+r'\s*$',source,re.M)),None);assert primary,id
   if key in cores:
    after=copy.deepcopy(cores[key]['after'])
    for k in ['evidence','reason']:
     if k in after:after[k]=finaltext(id,after[k])
   else:
    after=copy.deepcopy(row)
    if row['case']=='empty' and id in empty_checked:after['status']='checked'
    if row['case'] in ['zero','one'] and id=='def-real-and-complex-schur-forms':after['status']='checked'
    if row['case']=='zero' and id in {'def-hopf-weighted-trajectory-space','lem-hopf-weighted-trajectory-space-is-banach'}:after['status']='checked'
    if row['case']=='degenerate' and id in {'def-hopf-normal-form-data','lem-hopf-first-lyapunov-coefficient-from-multilinear-data','lem-local-center-manifold-for-a-simple-hopf-point'}:after['status']='checked'
    after.pop('reason' if after['status']=='checked' else 'evidence',None)
    after['evidence' if after['status']=='checked' else 'reason']=row['case']+' case, actual '+primary+': '+finalnotes[id]
   for k in ['reviewed','template_review']:after.pop(k,None)
   if row['status']!=after['status']:changed_status.append({'id':id,'case':row['case'],'before':row['status'],'after':after['status']})
   pro['contracts'][id]['boundaries'][i]=after
   dst=O/'source-context'/src;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_text(source)
   evidence=after.get('evidence',after.get('reason',''))
   labels=set(re.findall(r'^\s*(\d+\.\d+)\s+',source,re.M))
   # All explicit numbered references must name final existing source rows.
   for ref in re.findall(r'(?<![\d.])\d+\.\d+(?![\d.])',evidence):
    if ref not in labels:anchor_issues.append({'id':id,'case':row['case'],'reference':ref})
   ops.append(dict(file=str(path),pointer=ptr,before=row,after=after,source=str(src),basis='Actual full source case-group inspection; final source phase labels bound using root-applied V2 paragraph-preservation map.',diagnostics=(['template'] if is_template else [])+(['proof-contract-or-contradicted'] if key in cores else [])))
   if is_template:covered.append((id,row['case']))
 if pro!=doc:
  carriers.append(str(path))
  for pre,data in [('before',raw),('proposed',(json.dumps(pro,indent=2,ensure_ascii=False)+'\n').encode())]:
   dst=O/pre/path;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(data)
  diff=''.join(difflib.unified_diff(raw.decode().splitlines(True),(json.dumps(pro,indent=2,ensure_ascii=False)+'\n').splitlines(True),fromfile=str(path),tofile=str(path)+' proposed'))
  dst=O/'diffs'/(path.name+'.diff');dst.parent.mkdir(exist_ok=True);dst.write_text(diff)
assert len(covered)==957,len(covered)
assert len(set(id for id,c in covered))==179
(O/'item-case-review-map.json').write_text(json.dumps(finalnotes,indent=2,ensure_ascii=False)+'\n')
(O/'anchor-reference-inspection.json').write_text(json.dumps({'missing_final_source_step_references':anchor_issues,'phase_maps_applied':maps},indent=2)+'\n')
(O/'proposal.json').write_text(json.dumps(dict(run=R,status='research-only-final-boundary-proposal',batches=list(range(29,43)),field_operations=ops,carriers=carriers,covered_template_rows=len(covered),covered_template_items=179,covered_proof_contract_errors=core['covered_proof_contract_errors'],covered_detector_occurrences=core['covered_detector_occurrences'],status_corrections=changed_status,source_edits=False,canonical_applied=False,hashes_generated=False,unresolved_mathematical_gaps=[],supersedes=['core/proposal.json','templates/proposal.json'],exclusions=['All finite_smoke fields: delegated to adaptive30; batch41 existing four checks untouched.','Derivation inputs: central reconciler owns.','Root owns native gates, source binding hashes and adjudication.'],limits='Source-specific worksheet proposal only. No native checks executed. Before/after guards are per whole boundary row; unrelated carrier fields, citations, derivations and finite smoke remain byte-value identical. Initial packets and old source snapshots remain preserved.'),indent=2,ensure_ascii=False)+'\n')
print(json.dumps(dict(operations=len(ops),templates=len(covered),carriers=len(carriers),status_corrections=len(changed_status),anchor_issues=anchor_issues),indent=2))
