import pathlib,json,hashlib,copy,re
run='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path('research/'+run+'-owner-step5-kept-presentation-concerns')
ids=['cex-it-expected-random-code-error-does-not-give-maximal-error','ex-it-dmc-one-shot-error-bound','ex-it-meta-converse-binary-channel','lem-it-classical-wiretap-auxiliary-cardinality']
sha=lambda b:hashlib.sha256(b).hexdigest()
jguard=lambda v:sha(json.dumps(v,ensure_ascii=False,separators=(',',':')).encode())
guards={r['id']:r for r in json.load(open(out/'input-item-guards.json'))};baseline_path=pathlib.Path('research/'+run+'-step5-v2/baseline.json');baseline=json.load(open(baseline_path))
verdict_path=pathlib.Path('research/'+run+'-step5-v2/step4-verdicts.json');verdicts=json.load(open(verdict_path))
(out/'before').mkdir(exist_ok=True);(out/'proposed').mkdir(exist_ok=True)
source_ops={};proposals={};mathematics={
ids[0]:'Confirmed heading discrepancy. Complete source read: for M>=2 the channel has M-1>=1 symbols. A deterministic code need not have injective encoder, so messages 1 and M may share codeword 1. Proof 1.1 defines valid maps; 2.1 obtains message errors (0,...,0,1), average 1/M and maximal 1. A point-mass ensemble has that same expected average. The separation persists as M grows. No scientific claim needs narrowing.',
ids[1]:'Confirmed heading discrepancy. Complete source read: uniform BSC input gives uniform output; information density is ln1.8 with mass 9/10 and ln0.2 with mass 1/10. The threshold is ln(1/2). The positive-part exponential is 5/18 on the first event and 1 on the second, so its expectation is (9/10)(5/18)+1/10=7/20. There are no threshold ties here. This is an exact evaluation of an upper bound, not a claim that optimal error is 7/20.',
ids[2]:'Confirmed heading discrepancy. Complete source read: true correct-pair masses are (1-p)/2 and crossover masses p/2, versus four auxiliary masses 1/4. Acceptance psi must satisfy (1-p)s+pt>=2(1-p). For s<2, t>=(1-p)(2-s)/p yields s+t>=2 because (1-p)/p>1; for s=2 it is immediate. Accepting exactly the correct pairs attains the 1/2 auxiliary objective with true acceptance 1-p. This proves the claimed beta orientation and randomized optimum.',
ids[3]:'Confirmed presentation reversal in otherwise sound support reduction. Complete source read: 1.1 proves entropy continuity at zero and singleton X, 2.1 gives the objective F(qbar)-sum lambda F(q_u), 3.1 uses a finite null direction to preserve all input coordinates and total weight, 4.1 removes support points, and 5.1 uses compact finite-dimensional parameterization to attain the maximum. For t_-<0<t_+, set alpha=t_+/(t_+-t_-), in (0,1). Then 0=alpha t_-+(1-alpha)t_+ and affinity gives G(0)=alpha G(t_-)+(1-alpha)G(t_+). Both endpoints strictly above G(0) are impossible. The word smaller is required; the selected inequality and objective direction are already correct.'}
refuted='Expected average error tending to zero for singleton random-code ensembles on finite DMCs forces the corresponding maximal errors to tend to zero.'
for id in ids:
 p=pathlib.Path('items/'+id+'.md');raw=p.read_bytes();txt=raw.decode();assert '\nstatus: draft\n' in txt
 oldver=[(i,v) for i,v in enumerate(verdicts) if v.get('id')==id];assert len(oldver)==1
 i,v=oldver[0];assert v['keep'] is True and v['item_sha256']==guards[id]['current_item_judge_hash'];assert baseline[id]==guards[id]['current_item_guard']
 ops=[];new=txt
 if id==ids[0]:
  affirmative=txt.split('## Statement\n\n',1)[1].split('\n\n## Facts & Assumptions',1)[0]
  old='## Statement\n\n'+affirmative;replacement='## Statement refuted\n\n'+refuted
  ops.append({'op':'replace-once','old':old,'new':replacement})
  ops.append({'op':'replace-once','old':'## Proof\n','new':'## Counterexample\n\n'+affirmative+'\n\n'})
 elif id in ids[1:3]:
  ops=[{'op':'replace-once','old':'## Statement\n','new':'## Example\n'},{'op':'replace-once','old':'## Proof\n','new':'## Verification\n'}]
 else:
  ops=[{'op':'replace-once','old':'otherwise zero, a convex combination of $t_-$ and $t_+$, would have a larger value than both endpoints.','new':'otherwise zero, a convex combination of $t_-$ and $t_+$, would have a smaller value than both endpoints.'}]
 for op in ops:assert new.count(op['old'])==1;new=new.replace(op['old'],op['new'],1)
 if id==ids[0]:assert affirmative in new and txt.split('1.1 Use blocklength',1)[1]==new.split('1.1 Use blocklength',1)[1]
 elif id in ids[1:3]:assert new.replace('## Example\n','## Statement\n').replace('## Verification\n','## Proof\n')==txt
 else:assert new.split('## Statement',1)[1].split('## Proof',1)[0]==txt.split('## Statement',1)[1].split('## Proof',1)[0]
 (out/'before'/p.name).write_bytes(raw);(out/'proposed'/p.name).write_text(new)
 source_ops[id]=ops
 proposals[id]={'id':id,'source':str(p),'source_raw_sha256':sha(raw),'input_item_guard':guards[id]['current_item_guard'],'input_judge_hash':guards[id]['current_item_judge_hash'],'baseline_path':str(baseline_path),'baseline_entry':baseline[id],'baseline_raw_sha256':sha(baseline_path.read_bytes()),'native_original_verdict':{'path':str(verdict_path),'json_pointer':'/'+str(i),'exact_row':v,'exact_row_guard':jguard(v)},'source_operations':ops,'before_file':str(out/'before'/p.name),'proposed_file':str(out/'proposed'/p.name),'mathematical_review':mathematics[id],'body_statement_interface_changed':id!=ids[3],'statement_literal_unchanged':id==ids[3],'claims_preserved':True,'admission_required':True}
# Exact original concerns and current completed reports, all preserved as immutable inputs.
native=[]
for b,indices in [(14,[0,1,2]),(20,[0])]:
 p=pathlib.Path('research/'+run+f'-batch-{b}-step5-context.json');j=json.load(open(p))
 rp=pathlib.Path('research/'+run+f'-step5-v2/step5-v2-initial-r1-u{b}.json');r=json.load(open(rp))
 for ix in indices:
  concern=j['concerns'][ix];assert concern['id'] in ids
  assert concern['id'] not in {d['id'] for d in r['decisions']}
  native.append({'id':concern['id'],'digest_path':str(p),'digest_raw_sha256':sha(p.read_bytes()),'concern_pointer':'/concerns/'+str(ix),'exact_concern':concern,'concern_row_guard':jguard(concern),'completed_initial_report':str(rp),'report_raw_sha256':sha(rp.read_bytes()),'not_assigned_in_initial_report':True,'report_outside_scope_note':r['repair_notes'][-1] if isinstance(r['repair_notes'],list) else r['repair_notes']['existing_digest_concern']})
# Exact contract field proposals, retaining all other content and annotations.
metadata=[]
for b,bids in [(14,ids[:3]),(20,ids[3:])]:
 for cp in [f'research/{run}-batch-{b}.proof-contracts.json',f'research/{run}-proof-contracts.json']:
  p=pathlib.Path(cp);j=json.load(open(p))
  for id in bids:
   c=j['contracts'][id]
   if id==ids[3]:
    for ix,d in enumerate(c['derivations']):
     if d.get('step')=='3.1':
      assert 'would have a larger value than both endpoints.' in d['claim']
      metadata.append({'file':cp,'source_id':id,'json_pointer':'/contracts/'+id+'/derivations/'+str(ix)+'/claim','op':'replace-field','old':d['claim'],'new':d['claim'].replace('would have a larger value than both endpoints.','would have a smaller value than both endpoints.'),'old_value_guard':jguard(d['claim'])})
   else:
    first='Counterexample' if id==ids[0] else 'Example';last='Counterexample' if id==ids[0] else 'Verification'
    for ix,r in enumerate(c['boundaries']):
     for key in ['reason','evidence']:
      old=r.get(key)
      if not isinstance(old,str):continue
      new=old.replace('Statement',first).replace('Proof',last)
      if new!=old:metadata.append({'file':cp,'source_id':id,'json_pointer':'/contracts/'+id+'/boundaries/'+str(ix)+'/'+key,'op':'replace-field','old':old,'new':new,'old_value_guard':jguard(old),'exact_current_row_guard':jguard(r)})
 # Manifest statement fields are mathematical synopsis, not section names.
 if b==14:
  cp=f'research/{run}-batch-14.pages.json';j=json.load(open(cp))
  for pi,page in enumerate(j):
   for ii,x in enumerate(page.get('items',[])):
    if x['id']==ids[0]:
     metadata.append({'file':cp,'source_id':ids[0],'json_pointer':f'/{pi}/items/{ii}/statement','op':'replace-field','old':x['statement'],'new':refuted,'old_value_guard':jguard(x['statement']),'rationale':'Align the counterexample manifest synopsis to its new Statement refuted. Original positive witness paragraph is preserved verbatim in Counterexample; all original M>=2 existence/separation content remains.'})
# Consumer examination: source/section search over every actual item, not prior reports.
consumers={};page_refs={}
for id in ids:
 rr=[]
 for p in pathlib.Path('items').glob('*.md'):
  t=p.read_text()
  if p.stem!=id and id in t:rr.append({'id':p.stem,'source':str(p),'source_raw_sha256':sha(p.read_bytes()),'reference_lines':[i for i,l in enumerate(t.splitlines(),1) if id in l]})
 consumers[id]=rr
 page_refs[id]=[str(p) for p in pathlib.Path('library').rglob('*.md') if id in p.read_text()]
assert all(not consumers[id] for id in ids[:3])
assert {x['id'] for x in consumers[ids[3]]}=={'thm-it-finite-classical-wiretap-auxiliary-capacity','thm-it-degraded-wiretap-secrecy-capacity'}
for r in consumers[ids[3]]:
 r['complete_current_body_read']=True
 r['disposition']='No repair needed; the cardinality/attainment/continuity supplier Statement remains literal unchanged. Consumer uses only that interface, never the reversed explanatory word in supplier proof.'
 r['used_interface']=('F10 and Proof 1.1,1.2,2.2 use dominated finite auxiliary and attained maximum.' if r['id']=='thm-it-finite-classical-wiretap-auxiliary-capacity' else 'F5 and Proof 3.1 use attained auxiliary maximum and continuous finite-simplex objective.')
# Record actual necessary supplier reads; no whole-closure audit is claimed.
context_ids=['def-discrete-memoryless-channel','def-fixed-length-channel-code','def-fixed-length-channel-code-errors','thm-it-one-shot-decision-threshold-achievability','thm-it-one-shot-meta-converse','def-finite-hypothesis-testing-beta','def-it-wiretap-channel']
context=[{'id':x,'source':'items/'+x+'.md','source_raw_sha256':sha(pathlib.Path('items/'+x+'.md').read_bytes()),'read':'Complete current source body, including complete Proof where present. Code encoder may repeat words; average vs maximal error, dependence-testing threshold, beta null-rejection orientation and finite wiretap marginals inspected directly.'} for x in context_ids]
# Every original code numerical witness is independently recomputed with exact rationals.
from fractions import Fraction
assert Fraction(9,10)*Fraction(5,18)+Fraction(1,10)==Fraction(7,20)
packet={'run':run,'cycle':1,'kind':'isolated proposal for reader-concern admission at paused/drained Step 5.1; no preapplied repairs','native_findings_unchanged':True,'proposals':list(proposals.values()),'native_reader_concerns':native,'metadata_field_operations':metadata,'consumer_examination':consumers,'page_placements_and_references':page_refs,'context_reads':context,'interface_disposition':'The three kind-heading migrations change parsed source section interfaces. The counterexample replaces the old positive Statement with an explicit refuted convergence implication and preserves its full original witness paragraph in Counterexample. The two examples retain their mathematical paragraph bytes under Example, with Proof renamed Verification. All three have zero actual item consumers. Wiretap Statement/Facts unchanged and its two direct consumers were fully read, requiring no changes.','root_followthrough':['Use proper existing reader-concern admission before freezing impact; original keep=true verdicts remain immutable.','Install only guarded source/field operations via authorized native 5.2 repair admission. Do not overwrite shared contract files.','Regenerate/rebind final item and boundary annotation hashes for changed sources; old annotation seals are historical, not current acceptance.','Rebuild affected parser-derived source quotations/manifest metadata using current sections; existing fact citations to other suppliers stay unchanged.','Run required scoped proof-layout/metadata/checks and native certification/rejudgment through the proper workflow; no gate credit is asserted here.'],'local_consistency':'Input itemHashGuard matched actual baseline entries and itemHashJudge matched each original keep=true row. All exact replacements matched once; example body math paragraphs preserved byte-for-byte; wiretap Statement/Facts unchanged; 7/20 independently checked by exact rational arithmetic. No gates/validators run.','new_items':[],'canonical_edits':[]}
(out/'proposal.json').write_text(json.dumps(packet,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'out':str(out/'proposal.json'),'confirmed_concerns':4,'source_proposals':4,'metadata_field_ops':len(metadata),'native_keep_rows_preserved':4,'canonical_edits':0}))
