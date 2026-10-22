import json,pathlib,hashlib,copy,datetime
P=pathlib.Path('research');R='physics-non-fluid-129-2026-10-21-r2';O=P/f'{R}-owner-step3-decision-ledger36-57';H=lambda b:hashlib.sha256(b).hexdigest();canon=lambda x:H(json.dumps(x,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode())
B=[36,39,41,46,53,56,57];Ds={b:json.loads((P/f'{R}-alpha-batch-{b}-3a-decisions.json').read_text()) for b in B};Ss={b:json.loads((P/f'{R}-step3-scope-{b}.json').read_text()) for b in B};ledgerpath=P/'defect-ledger.jsonl';ledgerbytes=ledgerpath.read_bytes();rows=[json.loads(x) for x in ledgerbytes.splitlines()];byid={x['defect_id']:x for x in rows};changes=[];adds=[];claims=[]
def edit(b,ob,reason,mut):
 before=next(x for x in Ds[b]['decisions'] if x['obligation']==ob);after=copy.deepcopy(before);mut(after);changes.append(dict(batch=b,path=str(P/f'{R}-alpha-batch-{b}-3a-decisions.json'),obligation=ob,before=copy.deepcopy(before),before_canonical_sha256=canon(before),after=after,reason=reason));return after
def extra(b,d,reason):
 adds.append(dict(batch=b,path=str(P/f'{R}-alpha-batch-{b}-3a-decisions.json'),before=None,after=d,reason=reason))
def row(id):return byid[f'{R}-3a-batch-{id}']
newrows=[]
def ledgernew(old,tail,disposition,correction,refs,subclass=None):
 z=copy.deepcopy(old);z.update(defect_id=f'{R}-3a-batch-{tail}',at=datetime.datetime.now(datetime.timezone.utc).isoformat(),disposition=disposition,correction=correction,adjudication_ref=refs)
 z['evidence']=copy.deepcopy(old.get('evidence',[]))+[{'path':str(O/'review.md'),'note':correction}]
 if disposition=='false-positive':z['supersedes']=[old['defect_id']];z.pop('repair_confidence',None)
 if subclass:z['subclass']=subclass
 newrows.append(z);return z
# 36: independent coordinate derivation repair remains owned by touched; time convention exclusively flagged.
edit(36,'touched:36:lem-gr-fx-schwarzschild-gaussian-beam-concentration','Remove only duplicate time-coordinate ownership; independent coordinate-derivations fixed row remains. Existing repair narrative and history retained.',lambda z:z.update(defect_ids=[x for x in z['defect_ids'] if not x.endswith('-time-coordinate')]))
# 41 and56 exact original same-carrier/same-taxonomy findings, no alias across different defects.
for b in [41,56]:
 for a,f in zip(Ss[b]['reader_findings'],Ss[b]['refuter_findings']):
  assert all(a[k]==f[k] for k in ['id','defect','severity','observed_sha256'])
  e=f"Same original {a['id']} carrier {a['observed_sha256']}; same {a['defect']} taxonomy and {a['severity']} severity. Reader locus {a['location']!r}; refuter locus {f['location']!r}. Both independently describe the same local omitted convention/construction/inference, not a different defect in a shared file. Original findings and closed correction remain unchanged."
  after=edit(b,f['obligation'],'Exact frozen source/taxonomy/carrier comparison supports the one existing repair row for both independent findings.',lambda z,a=a,e=e:z.update(same_defect_as=a['obligation'],same_defect_evidence=e))
  claims.append({'batch':b,'reader':a,'refuter':f,'same_id':True,'same_taxonomy':True,'same_severity':True,'same_observed_carrier':True})
# 39: false policy premise, preserve all original rows by append-only supersession.
policy='Actual run retains physics-six-step-v1-construction-scope. No research/'+R+'-statement-first.json exists; readStatementPolicy returns null without that marker; WORKFLOW says existing runs retain original policy after restart. Mere inline links do not establish a defect here. Original observation, historical reading limits and original edits remain preserved; this is owner policy adjudication, not a claim of source repair or new native review.'
for oldtail,obs in [('fixed-gauge-inline-link',['reader:39:1','refuter:39:1']),('conformal-historical-links',['reader:39:2'])]:
 old=row('39-'+oldtail);newid=f'{R}-3a-batch-39-{oldtail}-policy-false-positive';refs=[{'path':str(P/f'{R}-alpha-batch-39-3a-decisions.json'),'obligation':x} for x in obs]
 new=ledgernew(old,'39-'+oldtail+'-policy-false-positive','false-positive',policy,refs)
 for ob in obs:
  def m(z,newid=newid,ob=ob):
   z.update(verdict='false_positive',defect_ids=[newid],evidence=z['evidence']+' Owner policy correction: '+policy)
   z.pop('repair_confidence',None)
   if ob=='refuter:39:1':z.update(same_defect_as='reader:39:1',same_defect_evidence='Same def-gr-fx-fixed-gauge-data-topology original source, ill-formed taxonomy, nonfatal severity and frozen observed carrier 25d84d50e289dbea0dae32bac8c71b23ea364210128e7f92a53417bbe5c426f2. Both alleged only the identical Definition inline-link policy violation; that policy is inapplicable to this run.')
  edit(39,ob,'Reclassify inapplicable editorial-policy finding without erasing original observation. Exactly one authentic append-only successor row remains referenced.',m)
old=row('39-diagnostic-inline-links');ob='touched:39:def-gr-fx-constraint-residual-diagnostic';newid=f'{R}-3a-batch-39-diagnostic-inline-links-policy-false-positive';gate='gate:'+newid
ledgernew(old,'39-diagnostic-inline-links-policy-false-positive','false-positive',policy,[{'path':str(P/f'{R}-alpha-batch-39-3a-decisions.json'),'obligation':gate}])
def med(z):
 z.update(verdict='reviewed_no_defect',change_kind='audit_enrichment',defect_ids=[],evidence=z['evidence']+' Owner policy correction: retained reader link relocation is reversible editorial enrichment under the active construction policy, not a content-defect repair. '+policy);z.pop('repair_confidence',None);z.pop('owner_current_carrier_successor',None)
edit(39,ob,'Only recorded change removes Definition links while preserving exact content/references. Classify actual editorial change honestly; original fixed history preserved by false-positive successor.',med)
extra(39,dict(obligation=gate,id=old['subject'],route='gate',verdict='false_positive',defect_ids=[newid],evidence=policy),'Supplemental exact-ID ownership of append-only policy correction; no new native finding.')
# 46 distinct authentic bibliography repairs, separate from refuter-confirmed heading defects.
for subject,headtail,newtail,description in [
 ('cex-nrqmx-wigner-negative','counterexample-headings','negative-wigner-locator','Native reader46 Repairs records limiting Nonnenmacher to Definition 3.10; original full reader output at lines9061 onward has locator §3.3, Weyl quantization and Wigner representation, pp16–18. This was replaced by Definition3.10, pp16–17, explicitly limiting the comparison: negative Wigner calculation remains local. Native Alpha46 authenticates the pre-reader raw hash by reversing locator and Gaussian-line-break edits. This distinct citation correction is already performed; no new source edit or external retrieval is claimed.'),
 ('ex-nrqmx-gaussian-wigner-flow','example-headings','gaussian-egorov-locator','Native reader46 scoped the Nonnenmacher comparison to Definition3.10 and Theorem4.14; native Alpha46 independently retrieved and corrected the Egorov locator from printed pp40–42 to38–39. Authenticated exact pre-reader source and existing raw diff in owner-step3-nrqm46-preimages document this distinct bibliography correction; the full mathematical text/Facts/argument is unchanged modulo whitespace. This is already performed, distinct from the separately retained example-heading repair. No new PDF retrieval is claimed.')]:
 old=row('46-'+headtail);ob='touched:46:'+subject;new=ledgernew(old,'46-'+newtail,'fixed',description,[{'path':str(P/f'{R}-alpha-batch-46-3a-decisions.json'),'obligation':ob}],'citation-inaccurate');new['location']='frontmatter';new.pop('supersedes',None)
 # New bibliography finding must not copy the distinct heading observation as evidence.
 new['evidence']=[{'path':str(P/f'{R}-reader-46.md'),'note':description},{'path':str(P/f'{R}-alpha-batch-46-3a.md'),'note':'Original source comparison, actual repair and original external-source reading attestations; not a new review.'}]
 edit(46,ob,'Keep actual amended repair, give it its authentic distinct citation row; existing heading defect remains exclusively owned by the flagged finding.',lambda z,new=new,description=description:z.update(defect_ids=[new['defect_id']],evidence=z['evidence']+' Ownership clarification: '+description))
# Existing risk-only repairs: schema ownership only, no counterfeit missing routed finding.
for b,tail,subject,verdict,e in [
 (53,'coefficient-variable-order','lem-nrqmx-landau-form-diagonalization','confirmed_nonfatal','Original native Alpha53 risk review discovered Remarks F(k,dot) although F has coordinates(xi,k), and actually repaired this to F(dot,k), coefficient pairing in xi at fixed k. Current Remarks and Proof2.1 agree on that order. Existing closed fixed nonfatal row records this exact repair; original report also records Fourier/shear/coefficient unitarity, positive-energy weighted closure and direct supplier checks. Statement, form domain, dependencies and diagram were unchanged by this remark correction. This supplemental decision only assigns ownership to the authentic existing risk-discovered repair; it does not invent a reader/refuter finding or repeat a native risk review.'),
 (57,'creator-transpose','pthm-nrqmx-beam-splitter-count-statistics','confirmed_fatal','Original native Alpha57 discovered S=C^T gives creator column C, with first component t a1* - conjugate(r) a2*, contradicting the claimed t a1*+r a2* (real nonzero r witnesses failure). It actually repaired Proof1.1 to S=C, giving creator column C^T, and Proof2.1 to justify finite-particle invariance via polynomial creators on the fixed vacuum and inverse identities. Current full source has those corrections; Proof3.1 then yields the stated t^k r^(n-k) coefficient, and Proof5.1 retains coherent product phases by norm-convergent occupation series. Native report records complete actual loss-channel/single-photon consumer reviews and unchanged public interface. Existing fatal fixed row is preserved verbatim. This supplemental decision binds that already-recorded repair, without a new native review or new obligation claim.')]:
 old=row(str(b)+'-'+tail);assert old['subject']==subject and old['disposition']=='fixed'
 extra(b,dict(obligation='gate:'+old['defect_id'],id=subject,route='gate',verdict=verdict,defect_ids=[old['defect_id']],evidence=e,repair_confidence=1),'Existing risk-only native discovery had a ledger repair but no 3a reference. Exact-ID supplemental gate route supplies ownership.')
# Guard all inputs actually used, plus native reports and source paths for original observations.
paths=set()
for b in B:
 for suffix in [f'alpha-batch-{b}-3a-decisions.json',f'step3-scope-{b}.json',f'alpha-batch-{b}-3a.md',f'reader-{b}.md',f'refute-{b}.md',f'step3-hash-{b}-pre.json',f'step3-hash-{b}-post.json']:
  p=P/f'{R}-{suffix}'
  if p.exists():paths.add(p)
for c in changes+adds:
 p=pathlib.Path('items')/(c['after']['id']+'.md')
 if p.exists():paths.add(p)
for p in [pathlib.Path('WORKFLOW.md'),pathlib.Path('../tools/statement-first-policy.mjs'),pathlib.Path('../tools/physics-support/step3-scope.mjs'),P/f'{R}-owner-step3-nrqm46-preimages/proposal.json',P/f'{R}-owner-step3-nrqm46-preimages/review.md',P/f'{R}-owner-step3-nrqm46-preimages/evidence/pre-reader/ex-nrqmx-gaussian-wigner-flow.md',P/f'{R}-owner-step3-nrqm46-preimages/evidence/ex-nrqmx-gaussian-wigner-flow.diff',P/f'{R}-dispatch/reader-reader-46.log']:
 if p.exists():paths.add(p)
paths.update([O/'cex-pre-reader.md',O/'cex-preimage.json',P/f'{R}-owner-step3-root-adoption/scope-current-diagnostic.stderr'])
refs=set()
for c in changes:
 refs.update(c['before'].get('defect_ids',[]))
for c in adds:refs.update(x for x in c['after']['defect_ids'] if x in byid)
for n in newrows:refs.update(n.get('supersedes',[]))
proposal={'version':1,'run':R,'cycle':1,'status':'research-only proposal; root adoption and recertification required','scope':'Current decision/ledger schema ownership batches36..57, excluding52 native continuation; no full mathematical audit','production_edits':False,'new_native_reviews':False,'statement_policy':'physics-six-step-v1-construction-scope','guards':{'files':[{'path':str(p),'sha256':H(p.read_bytes()),'bytes':p.stat().st_size} for p in sorted(paths)],'ledger':{'path':str(ledgerpath),'prefix_bytes':len(ledgerbytes),'prefix_sha256':H(ledgerbytes),'allow_append_only_growth':True},'absent_paths':[str(P/f'{R}-statement-first.json')],'original_ledger_rows':[{'defect_id':x,'row':byid[x],'canonical_sha256':canon(byid[x])} for x in sorted(refs)]},'decision_replacements':changes,'supplemental_decisions':adds,'ledger_appends_proposed':newrows,'shared_finding_checks':claims,'science_gaps_confirmed':[],'reading_limits':['This proposal reads schema, frozen findings, decision and ledger records, original native report repair/supplier/consumer attestations and current targeted source passages. It is not an independent rereview of every repaired proof or supplier.','Native original evidence remains authoritative and unchanged; report attestations are not upgraded to new actual full-read outputs. No outside PDF newly retrieved.','Current carrier seals copied in exact before/after replacements are pre-existing values, not new stamps. Supplemental decisions intentionally have no subject_sha256; root must bind current inputs and recertify after adoption.','Original native process/receipts, frozen scope observations and closed history are never edited. Proposed false-positive successors correct actual inactive policy, not source content.']}
(O/'proposal.json').write_text(json.dumps(proposal,ensure_ascii=False,indent=2)+'\n')
print('proposal',len(changes),'replacements',len(adds),'supplemental',len(newrows),'ledger appends',len(paths),'file guards')
