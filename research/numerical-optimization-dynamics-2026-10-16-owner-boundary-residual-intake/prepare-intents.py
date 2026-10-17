from pathlib import Path
import json,re,copy
BASE=Path(__file__).resolve().parent;ROOT=BASE.parents[1]
def read(p):return json.loads(Path(p).read_text())
def save(p,x):Path(p).write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
report=read(BASE/'residual-report.json');index=read(ROOT/'research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/normalized-index.json');owner={x['key']:x for x in index['operations']}
old=read(ROOT/'research/numerical-optimization-dynamics-2026-10-16-owner-boundary-diagnostic-recovery-20261016T111149897777Z/contradicted-candidates.json');oldkeys={(x['item'],x['case'])for x in old['candidates']}
# Exact current reasons are the substantive owner proposals ROOT just applied.
# Prefixes below classify the native trigger; they add no new mathematical claim.
classes={
 'alg-rounded-cholesky-with-failure-status':'The biconditional token belongs to a cited Cholesky supplier identifier, rather than this algorithm\'s own claim.',
 'alg-cross-entropy-pilot-production':'The biconditional describes the assumed exact checker input interface, rather than a theorem proved by the pilot procedure.',
 'lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction':'The exactly-when phrase defines the support graph; it does not assert necessity of strong connectivity for the contraction conclusion.',
 'alg-drift-implicit-euler-sde':'The precisely-when phrase specifies the supplied certificate verifier interface, rather than an additional biconditional theorem.',
 'def-finite-basis-projector-energy-model':'The iff token is inside the linked Cholesky supplier identifier, rather than an asserted equivalence for the energy model.',
 'thm-likelihood-ratio-gradient-identity-on-fixed-support':'The exactly-when phrase is the fixed-support positivity hypothesis, rather than the differentiability or score-identity conclusion.',
 'prop-finite-projector-energy-reality-and-gradient':'The apparent symbolic denominator is derivative notation d/dt, rather than an algebraic division by a freely zero scalar.',
}
rows=[];errors=[]
for candidate in report['contradicted']:
 if candidate['kind']!='retained_na':continue
 id=candidate['id'];case=candidate['case'];key=id+'::'+case;op=owner.get(key)
 if not op:errors.append({'key':key,'problem':'No same-owner source-specific semantic operation'});continue
 current=read(ROOT/candidate['file'])['contracts'][id]['boundaries'][candidate['index']]
 if current!=candidate['row']or current!=op['after']:errors.append({'key':key,'problem':'Current semantic row guard drift'});continue
 reason=current.get('reason','')
 if len(reason.strip())<40:errors.append({'key':key,'problem':'Substantive current specific reason missing'});continue
 if id in classes:classification=classes[id]
 elif case=='zero':classification='The symbolic denominator has an explicit positive or nonzero domain restriction; the current owner reason distinguishes admitted zero intermediate values from excluded zero denominators.'
 else:classification='The family or indexed-aggregate detector does not distinguish this item\'s fixed or explicitly nonempty input indexing from an arbitrary potentially empty input family; the exact owner reason records that distinction.'
 evidence=[{'packet':x['packet'],'packet_index':x['packet_index'],'named_source':'items/'+id+'.md','owner_metadata':x['owner_evidence']}for x in op['inputs']]
 row={'key':key,'file':candidate['file'],'path':['contracts',id,'boundaries',candidate['index']],'current_row_guard':current,'status':'UNAPPLIED_ROOT_REVIEW_INTENT','detector':candidate['why'],'interpretation_candidate':classification,'proposed_scientific_reason':reason,'reason_provenance':'Verbatim exact source-specific semantic reason from the named original-owner packet, already ROOT-applied; no new whole-proof or supplier acceptance is claimed by this residual intake.','original_owner_evidence':evidence,'original_diagnostic_membership':'Original370 contradiction candidate'if(id,case)in oldkeys else'New detector residual after semantic status correction on an original template target','requested_root_action':'Individually adjudicate this exact retained not_applicable row and its named owner reasoning. If accepted, ROOT alone records the native reviewed disposition. No flags or hashes are created here.'}
 rows.append(row)
save(BASE/'retained-na92-ROOT-intents.json',{'status':'RESEARCH_ONLY_UNAPPLIED','count':len(rows),'root_flags_created':False,'hashes_computed':False,'canonical_writes':False,'intents':rows})
save(BASE/'template-collision-inventory.json',{'scope':report['scope'],'clusters':report['templates'],'template_review_intents':[],'reason':'Exact native normalization and >=3 distinct-item rule produce zero residual clusters after semantic rows. No template_review flags are proposed.','hashes_computed':False,'native_gate_invoked':False})
save(BASE/'intent-preparation-errors.json',errors)
# Human navigation: keep every item/case reason visible without generic approval stamps.
lines=['# Current retained-NA review intents','',f'{len(rows)} exact current rows. Each remains UNAPPLIED and requires individual ROOT adjudication. Zero template flags are proposed.','']
for x in rows:
 lines.extend([f"## {x['key']}",'',x['detector'],'',x['interpretation_candidate'],'',x['proposed_scientific_reason'],'','Owner evidence: '+', '.join(y['packet']+' operation '+str(y['packet_index'])for y in x['original_owner_evidence']), ''])
(BASE/'retained-na92-review.md').write_text('\n'.join(lines)+'\n')
print(json.dumps({'intents':len(rows),'template_clusters':len(report['templates']),'preparation_errors':len(errors),'new_detector_residuals':sum(x['original_diagnostic_membership'].startswith('New')for x in rows)},indent=2))
