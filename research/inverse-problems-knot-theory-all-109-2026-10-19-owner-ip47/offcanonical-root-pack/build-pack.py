from pathlib import Path
import json,re,hashlib,datetime,yaml,fitz
base=Path('research/inverse-problems-knot-theory-all-109-2026-10-19-owner-ip47')
dest=base/'offcanonical-root-pack'
pins=json.loads((base/'source-current-final-cycle2-bindings.json').read_text())['sources']
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
# Actual author analyses, not executable tests or native acceptance assertions.
# Six substantive cases + two genuinely inapplicable iff directions per carrier.
D={
'lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions':[
('empty','checked','U may be empty; restriction then has zero Lp gradient norm.','5.1'),
('zero','checked','A constant weak solution has zero gradient and both sides vanish; zero Neumann functional gives the constant quotient solution.','5.1'),
('one','checked','If 1 lies in the ellipticity interval, gamma=1 is included and the harmonic case needs no coefficient derivative.','2.1'),
('degenerate','checked','m=M makes the perturbation ratio k zero; measurable coefficients remain allowed in the general case.','2.1'),
('endpoints','checked','p is selected strictly above2 and below4, and below2d/(d-2) when d>2; no excluded endpoint estimate is asserted.','2.1'),
('nonempty-choice','checked','The supplied solution is the input; the simultaneous L2/Lp Neumann series agrees distributionally and uses the declared AC/CC interfaces.','2.1')],
'lem-ip-ntd-boundary-smoothing-for-fixed-background-collar':[
('empty','not_applicable','The hypothesis supplies a domain and one conductivity, rather than asserting existence for an empty conductivity class.','1.1'),
('zero','checked','Zero flux gives zero total-mean-zero trace; gamma=gamma0 gives zero matrix coefficients.','3.1'),
('one','checked','gamma=1 is the background map; the smoothing difference against itself is zero.','2.2'),
('degenerate','checked','Finite low boundary modes, including additional zero Laplace modes for disconnected boundary, have weights w=1 and are retained by uniform constants.','3.1'),
('endpoints','checked','q=0 is included; arbitrarily large integer collar orders give every positive decay exponent L, without asserting differentiability of gamma in the interior.','2.2'),
('nonempty-choice','checked','All representatives use total boundary mean zero; weak Neumann existence and spectral/trace suppliers retain AC/CC.','1.1')],
'lem-ip-interior-neumann-modes-and-kernel-forward-continuity':[
('empty','checked','If Omega-prime is empty, both conductivities are1 and the difference operator vanishes; interior gradient norms are zero.','4.1'),
('zero','checked','Equal conductivities give zero coefficient norm and zero observation difference through the exact energy identity.','4.1'),
('one','checked','The background gamma=1 is the reference in the dual volume-source argument, with its high-mode gradient decay.','1.1'),
('degenerate','checked','Only measurable positive coefficients are used; the correction is controlled in energy before interior Meyers is applied on a fixed finite ball cover.','3.1'),
('endpoints','checked','r=0 is explicitly allowed for centered differences, and q=p/(p-2)>2 is finite because2<p<4; raw unsmoothed NtD need not be HS in all dimensions.','4.1'),
('nonempty-choice','checked','The auxiliary volume-source weak solution is supplied by Lax–Milgram; all choices of balls are finite and the declared AC/CC hypotheses remain.','1.1')],
'lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound':[
('empty','checked','An empty admissible class makes uniform assertions vacuous, as explicitly stated in the Proof Given paragraph.','1.1'),
('zero','checked','Kernel distance s=0 gives zero weak NtD difference by weighted Cauchy–Schwarz and then zero DN difference.','3.1'),
('one','checked','The unit background is covered whenever admissible; equality of either pair gives zero kernel distance.','4.1'),
('degenerate','checked','For r=0 the smoothing factor is the identity and is not claimed compact; the product is compact by NtD approximation.','1.1'),
('endpoints','checked','The actual dimension-dependent smoothing satisfies strict2(1+r)>n; equality, which would fail the summability argument, is not used.','2.1'),
('nonempty-choice','checked','The unique kernel kills constants in both variables; weak quotient inverse identities avoid any pointwise boundary regularity assumption.','4.1')],
'lem-ip-eit-forward-continuity-and-class-compactness':[
('empty','checked','An empty Xd(R) has empty compact kernel image; no existence of a conductivity is inferred from R.','2.1'),
('zero','checked','For gamma=gamma0 the Lq coefficient distance and kernel distance are zero.','1.3'),
('one','checked','The planar compactness proof subtracts the background1 before zero extension and restores1 after restriction; it never applies FK to the nonintegrable background extension.','1.1'),
('degenerate','checked','Discontinuous BV conductivities in d=2 remain permitted; closure is proved by distributional variation and lower semicontinuity.','1.1'),
('endpoints','checked','Dimension2 uses L1 compactness and uniform boundedness to obtain Lq convergence; d=3 starts the separate C1alpha/Ascoli branch.','1.2'),
('nonempty-choice','checked','The bounded-support family h_gamma is explicitly defined, uniformly L1 bounded and translation controlled; AC/CC cover the stated compactness and subsequence interfaces.','1.1')],
'lem-ip-concave-modulus-hilbert-ball-intersection':[
('empty','checked','For I empty the intersection means H2 and contains zero.','6.1'),
('zero','checked','omega identically zero forces all target centers equal; a zero-radius ball from xi=x is handled directly.','3.1'),
('one','checked','For a singleton index set its target center belongs to its ball, including radius zero; the finite argument covers it.','3.1'),
('degenerate','checked','Nonsmooth concave moduli are treated by polygonal approximation; zero-dimensional affine spans and repeated source points are not excluded.','2.1'),
('endpoints','checked','omega is continuous at0 and may saturate; the truncated function min(t,A) and its squared cone are handled without assuming strict concavity.','1.1'),
('nonempty-choice','checked','AC supplies the countable near-supremum finite-subset sequence; the final argument handles each arbitrary index without enumerating I or importing unproved weak compactness.','5.1')],
'thm-ip-hilbert-map-extension-with-concave-modulus':[
('empty','checked','A may be empty; the initial empty graph is admissible and the ball supplier empty-family case contains zero.','2.1'),
('zero','checked','omega may vanish identically; the same-modulus ball supplier covers this case, and zero EIT kernel distance gives equal conductivities.','3.1'),
('one','checked','A singleton domain extends with the same modulus by the same Zorn one-point argument; no dimension or separability hypothesis appears.','2.1'),
('degenerate','checked','Arbitrary real Hilbert spaces and arbitrary subsets are retained, including zero Hilbert spaces; maximality is over actual graphs.','1.1'),
('endpoints','checked','At the positive cutoff the logarithmic modulus joins continuously to a constant with a derivative drop; at0 it is defined by its zero limit.','1.2'),
('nonempty-choice','checked','The poset is nonempty because it contains g; empty chains have this upper bound, and full AC is expressly used for Zorn.','1.1')],
'lem-ip-stable-extension-of-the-eit-inverse-map':[
('empty','checked','If the exact kernel image is empty, the zero map supplies a whole-space extension.','2.1'),
('zero','checked','Equal exact kernels imply zero DN distance, and logarithmic stability at zero proves equality of conductivity classes.','1.1'),
('one','checked','A one-point exact image gives a well-defined function and is included by the general extension theorem.','1.1'),
('degenerate','checked','Kernel and conductivity representatives are treated as L2 classes; equality of different representatives does not create different inverse outputs.','1.1'),
('endpoints','checked','The positive-distance modulus uses sqrt(s), saturated at t0, and is assigned zero at s=0; its concavity is supplied by the actual preceding theorem.','2.1'),
('nonempty-choice','checked','AC/CC are explicitly inherited for weak solutions, spectral data and arbitrary-Hilbert extension; no independently chosen inverse representative is needed.','1.1')],
'def-ip-generalized-fourier-neural-operator':[
('empty','not_applicable','This architecture Definition has no compact input set C or approximation tolerance; no empty-set approximation assertion belongs to it.','definition'),
('zero','checked','The zero input field is in L2; the zero operator can be realized by the final affine output map with all coefficients zero.','definition'),
('one','checked','When n=d the dimension-reduction layer F is expressly the identity.','definition'),
('degenerate','checked','Finite Fourier multipliers use conjugate-symmetric coefficients to retain real-valued outputs; continuous periodic biases explicitly allow spatial basis channels.','definition'),
('endpoints','checked','The lower dimension endpoint n=d is included and n<d is excluded; the activation remains smooth, globally Lipschitz and nonpolynomial.','definition'),
('nonempty-choice','checked','The chart map E is part of the architecture data; for EIT it may be the given finite chart-pair lifting G. No existence or learning theorem is built into the Definition.','definition')],
'lem-ip-fno-torus-compact-universality':[
('empty','checked','For empty C the zero operator gives the vacuous compact-uniform assertion.','1.1'),
('zero','checked','Zero Fourier coefficients and zero input polynomials remain covered by multiplication, averaging, activation identity passage and output synthesis.','4.1'),
('one','checked','The torus has normalized mass1; zero-mode averaging has norm1 and uniform synthesis error bounds L2 error.','5.1'),
('degenerate','checked','Both sine and cosine components are retained before multiplication by bias basis functions; no impossible translation-invariant cosine-only selector is used.','4.1'),
('endpoints','checked','The error tolerance is strictly positive; n=1 is included, and no zero-error or exact polynomial neural synthesis is asserted.','6.1'),
('nonempty-choice','checked','Least admissible dyadic exponents define continuity radii canonically; only a finite half-radius subcover is chosen. CC enters through the genuine Fourier-completeness supplier.','2.1')],
'thm-ip-generalized-fno-uniform-approximation-on-compact-sets':[
('empty','checked','For empty C the zero generalized FNO suffices.','1.1'),
('zero','checked','Zero extension of the zero function and averaging/restriction of zero fields are zero; all linear lift/reduction maps are bounded.','3.1'),
('one','checked','The chart reconstruction identity LG=I is used to identify the exact target; it is not assumed that G is an isometry.','3.1'),
('degenerate','checked','Finite chart-pair arrays are input channels for the torus operator, and the clarified periodic-bias architecture is retained under composition.','1.1'),
('endpoints','checked','For d=2, T0 is the unit-mass point and the averaging integral is the identity; d>=2 ensures2d-2>=d.','3.1'),
('nonempty-choice','checked','CC remains stated at the chart and Fourier supplier interfaces; no AC is added by finite torus synthesis.','2.1')],
'thm-ip-eit-fno-noise-robust-existence':[
('empty','checked','If either the conductivity class or Kdelta is empty, choose the zero generalized FNO and the assertion is vacuous.','1.1'),
('zero','checked','At delta=0 any included noise is zero and omega_star(0)=0, leaving the arbitrary positive approximation tolerance.','3.1'),
('one','checked','A singleton compact noise set or exact image is covered by the same compact Minkowski-sum argument.','1.1'),
('degenerate','checked','K is any compact subset of the full kernel L2 space, not a finite-dimensional noise ball; its norm-truncated subset is closed and compact.','1.1'),
('endpoints','checked','All delta>=0 are included; the saturated inverse modulus and arbitrary positive epsilon cover large-noise and zero-noise endpoints.','3.1'),
('nonempty-choice','checked','AC/CC supply the actual upstream conductivity and extension interfaces; compact approximation produces a continuum FNO with no training, mesh or sample-size assertion.','2.1')]
}
contracts={};works=[];op=None
for pin in pins:
 p=Path(pin['path']);raw=p.read_bytes();assert hashlib.sha256(raw).hexdigest()==pin['sha256'],str(p)
 text=raw.decode();ident=p.stem;steps=dict(re.findall(r'^(\d+\.\d+) (.*)$',text,re.M))
 if ident.startswith('op-'):
  op=(p,text,pin);continue
 kind='Definition' if ident.startswith('def-') else 'Statement'
 statement=text.split('## '+kind+'\n',1)[1].split('\n## ',1)[0]
 cases=[];anchors=[]
 for case,status,reason,anchor in D[ident]:
  quote=statement if anchor=='definition' else steps[anchor]
  cases.append({'case':case,'status':status,('evidence' if status=='checked' else 'reason'):reason+' '+kind+' anchor.' if anchor=='definition' else reason+' Proof step'+anchor+'.'})
  anchors.append({'case':case,'section':kind if anchor=='definition' else 'Proof','step':None if anchor=='definition' else anchor,'actual_quote':quote})
 for case,direction in [('iff-forward','forward'),('iff-reverse','reverse')]:
  cases.append({'case':case,'status':'not_applicable','reason':('This defines an architecture, without an iff characterization.' if ident.startswith('def-') else 'This Statement asserts constructions or estimates, not an iff characterization; no separate '+direction+' implication is claimed.')})
 assert len(cases)==8
 contracts[ident]={'boundaries':cases}
 works.append({'id':ident,'path':str(p),'raw_sha256':pin['sha256'],'statement_or_definition_sha256':hashlib.sha256(statement.encode()).hexdigest(),'assessment':'Actual author boundary analysis, not tests or a native acceptance verdict.','boundaries':cases,'anchor_receipts':anchors})
assert len(works)==12 and op
(dest/'boundary-worksheets.json').write_text(json.dumps({'version':1,'recorded_at':now,'worksheets':works,'canonical_writes':[],'checks_claimed':[]},indent=2)+'\n')
(dest/'boundary-contract-fragment.json').write_text(json.dumps({'version':1,'scope':list(contracts),'contracts':contracts},indent=2)+'\n')
# The op carrier gets formulation/status/source analysis, never a fabricated proof worksheet.
p,text,pin=op;form=text.split('## Open problem\n')[1].split('\n## ',1)[0];status=text.split('## Source-status note\n')[1]
opcases=[
('empty','The question explicitly assumes Z nonempty and compact and restricts to nonempty model classes; a constant Borel learner then exists.'),
('zero','N is a positive sample count; delta=0 is allowed and removes the deterministic modulus contribution. Square-risk bounds require squaring the reconstruction estimate.'),
('one','s>=1 is explicit; a singleton finite net has a Borel empirical minimizer, but does not itself identify a sharp minimax law.'),
('degenerate','All Borel joint laws on fixed Z are permitted, including atomic laws. Fixed geometric chart maps cannot vary invisibly inside the finite scalar parameter budget.'),
('endpoints','B>0 and nonempty bounded model range are required; no N=0 risk formula or B=0 class claim is included.'),
('nonempty-choice','A fixed element of the assumed nonempty model range defines a constant Borel learner; finite-net ERM chooses the smallest minimizing index, avoiding a measurable-selection gap.'),
('iff-forward','No iff assertion or proved minimax rate is made; the forward direction label is inapplicable.'),
('iff-reverse','No converse characterization is asserted; the reverse direction label is inapplicable.')]
opdonor={'id':p.stem,'path':str(p),'raw_sha256':pin['sha256'],'formulation_sha256':hashlib.sha256(form.encode()).hexdigest(),'formulation_native_byte_preserved':True,'formulation':form,'status_note':status,'dedicated_formulation_cases':[{'case':c,'analysis':a,'anchor_section':'Open problem / Source-status note'} for c,a in opcases],'source_status':'Existing continuum FNO entropy/ERM and operator sampling results are acknowledged. A full elementary finite-net excess-risk baseline and qualitative growth construction are proved offcanon. No global novelty certificate is asserted. The registered request is quantitative matching minimax/budget behavior for this actual noisy EIT joint set.','local_baseline_proof':str(base/'finite-sample-status-review.md'),'provenance_proposal':'statement: ai-altered, as root already adjudicated; proof: not-applicable. No source header write by this author.','no_proof_worksheet':True}
(dest/'open-problem-donor.json').write_text(json.dumps(opdonor,indent=2)+'\n')
opcontract={'open_problem_review':{
 'formulation':{'verdict':'pass','evidence':'Actual compact nonempty joint data set, bounded nonempty Borel model range, square loss and Borel learners are specified. Finite sample and budget assumptions are explicit; actual formulation is native-byte-preserved.'},
 'status':{'verdict':'owner-review','evidence':'Precise author status comparison complete: existing operator entropy/ERM and sampling literature acknowledged, elementary finite-net baseline and qualitative growth supplied offcanon. Inspected sources do not settle matching quantitative EIT minimax/budget behavior. Root retains final classification; no global novelty certification is asserted.'},
 'sources':{'verdict':'pass','evidence':'Actual full relevant deHoop4.8/experiments, FNO AppendixD,2405 main theorem/AppendixE and2503 specified passages read with exact archive receipts. No result silently transferred between different activation, class, measure or risk hypotheses.'}}}
(dest/'open-problem-contract-fragment.json').write_text(json.dumps({'version':1,'scope':[p.stem],'contracts':{p.stem:opcontract}},indent=2)+'\n')
# Genuine archive/actual-reading receipts; remote fetch times are never invented.
reading=json.loads((base/'author-source-reading-receipts.json').read_text());receipts=[]
for row in reading['sources']:
 q=Path(row['path']);rr=dict(row);assert hashlib.sha256(q.read_bytes()).hexdigest()==row['sha256'];rr['archive_bytes_reverified_at']=now
 if q.suffix=='.pdf':assert len(fitz.open(q))==row['pdf_pages']
 receipts.append(rr)
def receipt(key):return next(r for r in receipts if key in r['path'])
mapping={
'lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions':[('meyers1963','Full Theorems1–2 Statements/proofs, actual scanned PDF11–16 (printed198–203), with interpolation conclusion PDF10; local projection proof is independently authored.')],
'lem-ip-ntd-boundary-smoothing-for-fixed-background-collar':[('dehoop2511','Lemma3.4 PDF16 and complete relevant AppendixA fixed-collar proof PDF53–58; local Rellich and symmetric-matrix proof supplied.')],
'lem-ip-interior-neumann-modes-and-kernel-forward-continuity':[('rondi2008','Theorem4.2 full proof and Remark4.5, PDF9–10/printed405–406. NtD continuity is contextual; stronger fixed-collar HS estimate is a local derivation.')],
'lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound':[('dehoop2511','Lemmas3.4–3.5 PDF16–18, kernel construction18–19, Lemma3.7 PDF21, AppendixA53–58.'),('rondi2008','Theorem4.2/Remark4.5 PDF9–10; contextual NtD convention only.')],
'lem-ip-eit-forward-continuity-and-class-compactness':[('dehoop2511','Cor4.3 PDF24, Lemma4.4 PDF25–26, Lemma4.5/Cor4.6 PDF26–27.'),('rondi2008','Theorem4.2/Remark4.5 PDF9–10; actual Lambda is NtD.')],
'lem-ip-concave-modulus-hilbert-ball-intersection':[('benyamini-lindenstrauss-public-ocr-reading','Actual public OCR lines166–175, printed19–21 general concave argument; damaged formulas and omitted beginning are locally reconstructed, not claimed fully legible.')],
'thm-ip-hilbert-map-extension-with-concave-modulus':[('benyamini-lindenstrauss-public-ocr-reading','Actual public OCR printed19–21 general concave argument; local ball proof and Zorn extension fully supplied.'),('dehoop2511','Proposition3.8 and Theorem3.9 full proofs PDF21–22, with surrounding notation PDF20–23.')],
'lem-ip-stable-extension-of-the-eit-inverse-map':[('dehoop2511','Proposition3.8 and Theorem3.9 full proofs PDF21–22, not stale printed16–18 locator.')],
'def-ip-generalized-fourier-neural-operator':[('dehoop2511','Full relevant generalized architecture and Theorem4.8 proof, PDF31–34, including spatial bias and chart/dimension reduction.')],
'lem-ip-fno-torus-compact-universality':[('kovachki-fno21-0806','Full AppendixD.1–D.4 PDF37–47 and preceding identity passage PDF36–37; finite Fourier coefficient extraction and synthesis.')],
'thm-ip-generalized-fno-uniform-approximation-on-compact-sets':[('dehoop2511','Full Theorem4.8 proof, actual PDF31–34.'),('kovachki-fno21-0806','Full AppendixD.1–D.4 PDF37–47.')],
'thm-ip-eit-fno-noise-robust-existence':[('dehoop2511','Full Theorem4.8 proof PDF31–34 and discussion PDF35; compact-noise reading PDF37–45.')],
'op-ip-finite-sample-generalization-of-neural-inverse-maps':[('dehoop2511','Continuum Theorem4.8 proof PDF31–34, full relevant numerical experiments PDF37–45 and implementation AppendixC68–69; no FE computation claimed.'),('kovachki-fno21-0806','Theorem5 source and full AppendixD proof37–47; not a statistical EIT risk supplier.'),('kovachki-lanthaler-mhaskar2405','Main learning theorem and proof PDF13–16; full AppendixE32–43. Exact inconsistent displayed constants not imported.'),('grohs-lanthaler-trautner2503','Setup15–17,23–24; Theorem3.20 full proof27–28 and Lemma3.21 proof40–41. Status comparison only; finite-dimensional lower-bound dependency closure not fully audited.')]
}
sources=[]
for pin in pins:
 ident=Path(pin['path']).stem
 for key,locator in mapping[ident]:
  rr=receipt(key);pdf=rr['path'].endswith('.pdf')
  sources.append({'title':Path(rr['path']).stem,'url':rr['url'],'kind':'paper' if pdf else 'book-public-ocr','locator':locator,'contents':[{'name':ident+'; '+('research formulation and status, not a theorem' if ident.startswith('op-') else 'actual current local source'),'disposition':'included','item':ident}],'archive_verified':{'at':now,'bytes':rr['bytes'],'sha256':rr['sha256'],'kind':'pdf' if pdf else 'web-tool-reading-response','pages':rr.get('pdf_pages'),'meaning':'Existing archived bytes reverified, not a fresh remote fetch timestamp.'},'author_reading_receipt':{'archive':rr['path'],'actually_read':rr['actually_read'],'limitations':rr['not_claimed']},'actual_source_binding':pin})
excluded=[{'url':'https://doi.org/10.1307/mmj/1028999906','status':'Original Grunbaum–Zarantonello article not retrieved/read. Attribution from BL historical note only; not a logical proof supplier.'},{'url':'https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf','status':'No archived full reading claimed for this additional architecture reference. Actual FNO proof reading uses21-0806 AppendixD and deHoop4.4.'},{'url':'https://arxiv.org/pdf/2108.08481','status':'No archived full reading claimed for this additional architecture reference.'}]
(dest/'coverage-harvest-fragment.json').write_text(json.dumps({'version':1,'run':'inverse-problems-knot-theory-all-109-2026-10-19','pages':[{'page':'neural-operator-eit-inverse-map','sources':sources}],'coverage_limitations':excluded,'note':'OFFcanonical donor. Exact actual reading extents and archive hashes; no independent acceptance, fresh fetch, or whole-book reading asserted. Root owns actual coverage schema and regeneration.'},indent=2)+'\n')
(dest/'archive-reading-receipts.json').write_text(json.dumps({'recorded_at':now,'receipts':receipts,'additional_screened_only':'2026 statistical/optimal/holomorphic papers in sources were screened first3 pages only; no proof reading or logical supplier use claimed.'},indent=2)+'\n')
(dest/'final-hash-pins.json').write_text(json.dumps({'recorded_at':now,'sources':pins,'scope':'Exact final cycle2 raw source pins before root canonical integration. Root header-only provenance/levels successors must be recorded separately.'},indent=2)+'\n')
outputs={p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in dest.glob('*.json') if p.name!='inventory.json'}
(dest/'inventory.json').write_text(json.dumps({'at':now,'carriers':13,'boundary_worksheets':12,'boundary_cases':96,'open_problem_dedicated_cases':8,'coverage_source_rows':len(sources),'actual_reading_archives':len(receipts),'outputs':outputs,'source_writes':[],'canonical_writes':[],'checks_claimed':[]},indent=2)+'\n')
print(json.dumps({'worksheets':12,'boundary_cases':96,'op_dedicated_cases':8,'coverage_rows':len(sources),'archives':len(receipts),'inventory_sha256':hashlib.sha256((dest/'inventory.json').read_bytes()).hexdigest()},indent=2))
