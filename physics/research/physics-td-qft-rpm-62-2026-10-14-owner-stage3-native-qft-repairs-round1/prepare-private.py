import json,re,pathlib,copy
R='physics-td-qft-rpm-62-2026-10-14'; base=pathlib.Path('research/'+R+'-owner-stage3-native-qft-repairs-round1'); docs={};partial={};sources={}
def archive(p):
 p=pathlib.Path(p); q=base/'before'/p;q.parent.mkdir(parents=True,exist_ok=True)
 if not q.exists():q.write_bytes(p.read_bytes())
 return str(q)
def source(id):
 p=pathlib.Path('items/'+id+'.md');sources[str(p)]={'before_file':archive(p)};return p.read_text()
def section(id,s):
 t=source(id);m=re.search(r'^## '+re.escape(s)+r'\s*$',t,re.M)
 if not m:raise ValueError((id,s))
 end=re.search(r'^## ',t[m.end():],re.M);return t[m.end():m.end()+end.start() if end else len(t)].strip()
for p in pathlib.Path('research').glob(R+'-batch-*.proof-contracts.json'):
 d=json.loads(p.read_text())
 for id,c in d.get('contracts',{}).items():docs[id]=(str(p),c)
def field(id,f,v):
 path,c=docs[id]; partial.setdefault(path,{'before_file':archive(path),'contracts':{}})['contracts'].setdefault(id,{})[f]=v;source(id)
def citations(id):return copy.deepcopy(partial.get(docs[id][0],{}).get('contracts',{}).get(id,{}).get('citations',docs[id][1].get('citations',[])))
quote_repairs=[]
text=pathlib.Path('research/'+R+'-owner-stage3-native-battery-1f350534-failures/proof-contract.txt').read_text()
for id,fact,provider,s in re.findall(r'ERROR citation-quote-mismatch \[([^]]+)\]: (\S+) quote does not occur in ([^\s]+)\x27s (.+)',text):
 if 'qft' not in id:continue
 cs=citations(id);match=[c for c in cs if c['fact']==fact and c['source']==provider and c['source_section']==s]
 if len(match)!=1:raise ValueError((id,fact,provider,len(match)))
 c=match[0];old=c['quote'];c['quote']=section(provider,s);quote_repairs.append({'id':id,'fact':fact,'provider':provider,'section':s,'old_quote':old,'new_quote':c['quote']});field(id,'citations',cs)
id='def-qft-free-dirac-model';cs=citations(id)
c=next(c for c in cs if c['fact']=='F3' and c['source']=='lem-qft-free-dirac-car-locality');c['quote']=section(c['source'],'Statement');c['uses']=['1.2','2.1'];field(id,'citations',cs)
proof_use_evidence={'id':id,'fact':'F3','provider':'lem-qft-free-dirac-car-locality','use':'1.2','reason':'The current supplier Statement explicitly fixes the antisymmetric Fock/CAR conventions and defines the bounded field on the same F_a(H_+ direct-sum conjugate H_-) used in consumer1.2. F3 is the grouped concrete Fock/CAR interface, not solely the spinor seminorm paragraph. The literal complete Statement quote now binds that actual use; no new assertion or source edit.'}
risks={
'lem-qft-photon-smeared-potential':'The native Alpha44 complete four-step proof/prerequisite review includes the countable norm-dense projected family, Fourier decay, integrable apex and common finite-sector bounds. Its only remaining supplier norm-separability hold is now resolved by the original-owner CCR definition repair and root44 adoption; the mathematical proof and Countable Choice scope are unchanged.',
'lem-qft-photon-local-weyl-observables':'The native Alpha44 complete four-step proof/prerequisite review checks CCR, Segal sqrt2 normalization, zero imaginary pairing, bounded Weyl products and closures, including the empty region. The original-owner CCR->published norm-separability definition now supplies the Segal closure; root44 adopted that actual supplier hold. No new physical or algebraic claim is added.',
'post-qft-free-photon-model':'The completed native Alpha52 formulation/supplier review checks positive H_T, the null quotient, SI energy and the constructed finite-instrument Born interpretation, with no interacting empirical claim. The only outstanding Lorentz matrix-topology/strong-continuity supplier hold was repaired supplier-first and adopted by root52; the original-owner18-consumer receipt verifies the same public interpretation.',
'pthm-qft-photon-physical-properties':'The completed native Alpha52 full three-step/prerequisite review checks rank-two positive closed ranges, null radical, second quantization, domains and vacuum. Its remaining topology44 hold is now resolved by the original-owner explicit matrix-topology and quotient/Fock continuity repair, with all actual consumer uses covered by the frozen18-consumer receipt.',
'pthm-qft-free-observable-domain-limits':'The completed native Alpha58 full eight-step/direct-prerequisite review checks domains, variance, locality including empty regions, SI scaling, DCT for nonnegative Schwartz families, annular mass growth, Dirac norm lower bound and Countable Choice. Its two remaining holds (the generic point-mass family43 and historical carrier binding) were resolved by the original-owner rich-family proof and the root Hhistory/58 adoption. No stronger point operator is inferred.',
'cex-qft-point-operator-assumption':'The completed native Alpha58 full two-step/direct-prerequisite review checks the normalized nonnegative Gaussian Schwartz witness, DCT, the explicit positive width sequence and divergence of vacuum norm including mass zero, within its conditional model scope. Its43 generic-family supplier and unknown-history metadata holds are resolved by the original-owner repair and root Hhistory/58 adoption; the original witness and qualification remain unchanged.'}
for id,reason in risks.items():
 rr=copy.deepcopy(docs[id][1]['risk_review']);historical=copy.deepcopy(rr);historical.pop('prior_reviews',None);rr.setdefault('prior_reviews',[]).append(historical);rr['status']='complete';rr['reviewer']='original QFT prerequisite owner /root/resolve_pending_inputs_5_60';rr['notes']=reason;rr['owner_completion_evidence']=['research/'+R+'-owner-stage3-qft43-44-final-repair-round1/final-scientific-release.json','research/'+R+'-owner-stage3-native-battery-1f350534-failures/risk-report.txt'];field(id,'risk_review',rr)
empty={
'def-qft-framework-units':'Definition fixes four spacetime and three spatial coordinate indices. Its evolution family U(t), t in supplied I, is model input, not a sum or normalized optional family: if I is empty, time-indexed conjugation statements are vacuous and the coordinate/unit dictionary still applies. There is no empty aggregate denominator or state construction asserted.',
'def-qft-example-data':'Definition fixes Minkowski four-vectors and sums over coordinate indices0..3 in that fixed dimension. These are finite coordinate contractions, not optional families from which every member may be removed. The row excludes replacing the stipulated coordinate model with an empty-index aggregate and does not omit a normalization boundary.',
 'thm-qft-example-massive-tree-annihilation':'Statement requires two incoming and two outgoing positive-energy shell vectors and strict s>4max(m^2,M^2), and the auxiliary finite matrix has d>=1. Spin sums run over the specified finite spin-label pairs; repeated Lorentz sums run over0..3. No possibly empty family is quantified, and no empty shell or zero-size matrix coefficient is claimed.',
'lem-qft-example-dirac-pauli-square':'Statement fixes spatial indices1..3, four-component spinors and the common domain C_c^infty(R^3;C^4), which contains the zero test and is nonempty. The displayed sums are fixed coordinate expressions, not a variable possibly empty family. The hypothesis m>0 and that concrete common domain are retained; no operator claim on an empty replacement core is made.'}
for id,reason in empty.items():
 bs=copy.deepcopy(docs[id][1]['boundaries']);b=next(b for b in bs if b['case']=='empty');b['reviewed']={'upheld':True,'by':'original QFT prerequisite owner /root/resolve_pending_inputs_5_60','reason':reason};field(id,'boundaries',bs)
for id,fact,provider,reason in [
 ('lem-qft-scalar-causal-commutator','F7','lem-smooth-bump-between-concentric-euclidean-balls','The actual Statement and Proof use a spatial mollifier on R^3. Apply the supplier with n=3 and positive concentric radii (for example1/2 and1), then translate/rescale and divide by its positive compact integral. No n=0 or unrestricted dimension theorem is asserted by this fixed spatial-use clause.'),
 ('pthm-qft-free-observable-domain-limits','F4','def-qft-free-field-observables','The cited Definition defines scalar and Dirac compact tests and their unital bounded local algebras for every open O, including empty O, exactly as used in1.1/1.3. Its later n>=1 restriction belongs to the nonvacuum particle-number domain sum, not to the open-region quantifier. F4 does not infer a number-domain formula for an arbitrary region index.')]:
 cs=citations(id);c=next(c for c in cs if c['fact']==fact and c['source']==provider);c['reviewed']={'upheld':True,'by':'original QFT prerequisite owner /root/resolve_pending_inputs_5_60','reason':reason};source(provider);field(id,'citations',cs)
(base/'contracts.partial.proposal.json').write_text(json.dumps({'version':1,'run':R,'by_path':partial},indent=2)+'\n')
(base/'source-byte-guards.json').write_text(json.dumps(sources,indent=2)+'\n')
(base/'metadata-evidence.json').write_text(json.dumps({'quote_repairs':quote_repairs,'dirac_grouped_fact_use':proof_use_evidence,'risk_completion':risks,'boundary_upheld':empty,'science_source_changes':[],'no_new_scientific_review':'Reuse the completed native reviews and original-owner scientific interface dispositions; only the actual failed literal quote, use, held risk and detector candidate records are completed.'},indent=2)+'\n')
print('prepared',len(partial),'docs',sum(len(p['contracts']) for p in partial.values()),'subjects',len(quote_repairs),'quote refreshes',len(sources),'source byte snapshots; no hashes or shared writes')
