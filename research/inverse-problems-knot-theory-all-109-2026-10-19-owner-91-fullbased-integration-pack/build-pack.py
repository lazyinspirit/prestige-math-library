from pathlib import Path
import json,hashlib,re,datetime,shutil
RUN='inverse-problems-knot-theory-all-109-2026-10-19'
OUT=Path('research/'+RUN+'-owner-91-fullbased-integration-pack')
DONORS=Path('research/'+RUN+'-owner-based-endpoint-comparison')
IDS=['lem-odd-cube-oriented-face-parity-and-sign-existence','lem-odd-marked-reidemeister-i-ii-contractions','lem-odd-marked-reidemeister-iii-common-complex','lem-based-odd-barnatan-movie-maps-and-localized-concordances','lem-pointed-odd-barnatan-tensor-product-over-marked-rings','lem-pointed-spherical-recharting-preserves-odd-barnatan-complexes','lem-based-planar-diagrams-admit-spherical-long-endpoint-presentations','lem-marked-knot-isotopies-admit-protected-reidemeister-movies','lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark','lem-smooth-link-cobordisms-admit-finite-generic-movies','lem-odd-khovanov-and-barnatan-localization-foundations','thm-leo-local-equivalence-group-and-concordance-map','def-odd-khovanov-barnatan-and-leo-triple']
EXPECTED=['74ba6a2c8a3173a552e008108f9a2e4058528d5ed107ec7e5b1fff7db284a289','416ca6f5f6b36b221ef19be289f947d987518bd81dd10fcc8c353a5b70dd27fb','4a622ddc206f93118d2c3d6c826e54e00105fed4b2802d78b912dcc6c60be3cf','da8bf3ffe684b64d15b452d0241d7219b83cf8f74874d6981decc7bbb215fc99','d5aef4810cdfc33094a384d7f6e998706652d7c9df5ac56255f96a0efd5e7434','d7655da90c7bf12e08538ef27928bb959954175633536c9002483e7f37c34367','6397b4ceceba3f3d2d9db17e2958853534fdcf9a14dfafd8b7a66da4de3e3ee3','ce36129ecb2c7345aac1ee07bf6331aa0b77d40f3173d781c934be17b9d7874d','9a6deb9eecdac6a893b3cf25e936adc473f2441b8162a44545e9bca872409efe',None,'7065aa09b3fcc40fd41cb05f4a006594a9624bc93118090af9ef1a7d44b4e34f','6a098810fa1b1381e72031125cade501ff3e6e3ab9ef3cd85ed99f197d3295a8','86344abc2f3eaf3a45f4564ed691e6eb863b73fe6e8ed6042412ca14b0d30e6e']
def digest(b):return hashlib.sha256(b).hexdigest()
def binding(p):
 p=Path(p);b=p.read_bytes();return {'path':str(p),'raw_sha256':digest(b),'bytes':len(b)}
def write(name,obj):
 p=OUT/name;p.write_text(json.dumps(obj,indent=2)+'\n');return binding(p)
def section(s,name):
 k='## '+name+'\n'
 if k not in s:return None
 return s.split(k,1)[1].split('\n## ',1)[0]
paths={i:Path('items/'+i+'.md') for i in IDS}
paths[IDS[10]]=DONORS/'foundations-full-based-scope-integration-donor.md'
paths[IDS[11]]=DONORS/'leo-full-based-scope-integration-donor.md'
pins=[];step_sets={};anchors={}
for n,i in enumerate(IDS):
 p=paths[i];s=p.read_text();b=binding(p)
 if EXPECTED[n]:assert b['raw_sha256']==EXPECTED[n],(i,b)
 body=s.split('---',2)[2].lstrip('\n');stem='Definition' if n==12 else 'Statement';stmt=section(s,stem);proof=section(s,'Proof');facts=section(s,'Facts & Assumptions')
 rows=[]
 for m in re.finditer(r'^([0-9]+\.[0-9]+)\s+(.*)$',proof,re.M):
  needle=m.group(0);line=s[:s.index(needle)].count('\n')+1;rows.append({'section':'Proof','step':m.group(1),'line':line,'opening':m.group(2)[:220],'exact_step_sha256':digest(m.group(0).encode())})
 step_sets[i]={x['step'] for x in rows};anchors[i]={'proof':rows}
 if n==12:
  defs=[]
  for label,needle in [('odd-state-data','Let $D$ be a finite regular oriented knot diagram'),('candidate-square-condition','The square condition is'),('bn-frobenius-data','Let $\\mathbb R='),('mod-two-comparison','Put $\\mathbb B='),('leo-conditions','A **local even'),('local-map-conditions','A local map')]:
   k=s.index(needle);defs.append({'section':'Definition','anchor':label,'line':s[:k].count('\n')+1,'opening':s[k:s.find('\n',k)]})
  anchors[i]['definition']=defs
 snapshot=OUT/'snapshots'/('donors' if n in [10,11] else 'items')/(i+'.md');snapshot.parent.mkdir(parents=True,exist_ok=True);snapshot.write_bytes(p.read_bytes())
 pin={'id':i,'role':'new-helper' if n<10 else ('original-full-proof-donor' if n<12 else 'existing-definition'),'carrier':b,'snapshot':binding(snapshot),'canonical_target':'items/'+i+'.md','mathematical_body_sha256':digest(body.encode()),stem.lower()+'_sha256':digest(stmt.encode()),'facts_sha256':digest(facts.encode()),'proof_sha256':digest(proof.encode()),'proof_steps':[x['step'] for x in rows],'proposed_page':'lee-deformation-and-rasmussen-s-invariant','placement_authority':'root only; no page/manifest edit by this pack'}
 if n in [10,11]:
  target=Path('items/'+i+'.md');pin['canonical_preimage']=binding(target);pin['Statement_matches_current_canonical']=section(target.read_text(),'Statement')==stmt;assert pin['Statement_matches_current_canonical']
 pins.append(pin)
# Boundaries are deliberately hand-authored, source-specific evidence, not generic placeholders.
B={
IDS[0]:[
('empty','checked','Proof5.1 explicitly starts at cube dimension n=0. This is the empty crossing set, not an empty marked knot.'),
('zero','checked','Proof1.1 computes both vanishing split–merge composites on an alternating-endpoint face; Proof4.2–4.3 include those zero faces in the six-face parity calculation.'),
('one','checked','Proof5.1 treats n=1 by assigning its only edge sign1; every subsequent vertical edge is then assigned1 in the finite induction.'),
('degenerate','checked','Proof2.2 treats disconnected configurations and two-edge cuts; Proof3.1 reduces the no-cut three-vertex case to its explicit finite doubled-triangle list.'),
('endpoints','checked','Proof5.1 separately fixes the lower and upper v_n faces and derives upper-face products from the whole three-cube boundary; no geometric knot endpoint is involved.'),
('nonempty-choice','checked','Proof5.1 constructs signs by finite cube induction, and Proof6.1 constructs vertex comparisons by finite monotone-path products; neither uses an infinite choice family.')],
IDS[1]:[
('empty','checked','Proof4.1 works with the exterior cube at any resolution, including no exterior crossings. A marked component remains required by the Statement.'),
('zero','checked','Proof1.1 proves the actual cancellation identity E=1-dh-hd; Proof2.1 and3.1 also retain the zero-differential survivor in the merge and split curls.'),
('one','checked','Proof1.1 requires an actual invertible pivot; Proof2.2 uses the identity/signed-identity RII pivots, not a rank-only cancellation.'),
('degenerate','checked','Proof1.2 orders crossings by their geometric smoothing pairs (I,U),(U,I), independently of oriented crossing signs; this is the repaired orientation case.'),
('endpoints','checked','Proof2.1/3.1 give RI survivor inclusions/projections, and Proof2.2 gives both RII cancellations with homotopies. Proof4.1 retains arbitrary fixed exterior closures and an exterior mark.'),
('nonempty-choice','checked','Proof1.1 gives a finite matrix formula and Proof4.1 uses finite vertex-sign comparison; the Statement introduces no choice axiom.')],
IDS[2]:[
('empty','checked','Proof5.1 compares the common residual complex times the exterior cube, including a zero-dimensional exterior cube; this does not allow an absent marked component.'),
('zero','checked','Proof5.1 explicitly compares the residual square prescriptions even when both saddle composites vanish; no weak square-zero comparison is substituted.'),
('one','checked','Proof2.1 and3.1 cancel the two actual signed identity pivots in the 121 cube; their inverses are used in the finite contraction maps.'),
('degenerate','checked','Proof7.1 handles the other admissible height/orientation RIII variants by the displayed braid identities and RII, rather than inferring them from one drawing.'),
('endpoints','checked','Proof1.1 fixes all six labelled boundary ports and retained located saddles; Proof6.1 retains their exterior marked module structure and grading shifts.'),
('nonempty-choice','checked','Proof4.1–5.1 use finite statewise sign alignment and monotone paths on the residual two-square complex; no infinite selection is made.')],
IDS[3]:[
('empty','not_applicable','Statement requires a continuously marked component that never dies; an empty marked link is excluded. A movie with zero exceptional moves has the identity composite by Proof5.1.'),
('zero','checked','Proof4.1/5.1 verify the common reduction at2=h=0; Proof6.1 uses Euler characteristic zero only for the complete concordance, not for individual birth/death maps.'),
('one','checked','Proof3.2 identifies the two knot orientation lines with ONE regular rank-one marked localized module through idempotents X/h and1-X/h; it is not a one-dimensional S-vector-space assertion.'),
('degenerate','checked','Proof2.2 contracts enhanced-state Boolean cubes with a free coordinate and Proof3.2 retains the singleton states. All maps and contractions are marked-ring linear.'),
('endpoints','checked','Proof5.1 composes maps for a supplied protected movie; Proof6.1 proves invertibility for the connected concordance composite and its actual endpoint retractions. Movie existence/independence is not asserted.'),
('nonempty-choice','checked','Proof1.1–1.2 construct integral Morse signs finitely; Proof2.2 and6.1 use finite cube contractions and explicit idempotent inverses. No choice axiom is added.')],
IDS[4]:[
('empty','checked','Proof1.1 allows the reduced group ker(aug) to have rank0, as for a single marked circle. This is not an empty knot; the marked A-factor remains present.'),
('zero','checked','Proof2.1 balances the marked factors, including X-times-X=0, and makes the sign depend on REDUCED wedge degree so the output right action remains linear.'),
('one','checked','Proof1.1 retains one regular marked A-factor. Proof4.1 merges the two marked circles, with the specified quantum shift{-1}, including the zero-crossing pointed unknot factor.'),
('degenerate','checked','Proof3.1 verifies internal and mixed full face products, including alternating-endpoint zero-composite faces in the connected-sum cube.'),
('endpoints','checked','Proof2.1 identifies the marked generators at the connected-sum neck, and Proof4.1 checks the BN marked multiplication and normalized cochain vertex sign.'),
('nonempty-choice','checked','Proof1.1–4.1 use a finite difference basis, finite graded signs and finite vertex comparison; no choice axiom is used.')],
IDS[5]:[
('empty','checked','Proof4.1 applies to a zero-crossing cube using its lowest vertex sign1; a mark and its component are still required by the Statement.'),
('zero','checked','Proof1.1 gives all four endpoint-germ placements with kappa=-chi, and Proof2.1 includes the simultaneous inside/outside swap and bounded-side orientation reversal. Proof7.1 checks reduction modulo2 and(2,h).'),
('one','checked','Proof5.1 sends the marked generator to the same spherical marked circle and preserves the specified right X-action; Proof4.1 vertex coefficients are units±1.'),
('degenerate','checked','Statement excludes poles on the diagram or crossing disks. Proof1.1 handles both outer-face placements without assuming a label-fixing planar isotopy between them.'),
('endpoints','checked','Proof4.1 and6.1 give exact inverse odd and BN relabellings with zero inverse homotopies. Proof7.1 asserts LEO local maps only when the endpoint triples meet the LEO hypotheses; it does not give arbitrary links rank-one localization.'),
('nonempty-choice','checked','Proof4.1 uses a finite monotone-path vertex-sign construction, and Proof7.1 records that all operations are finite and choice-free.')],
IDS[6]:[
('empty','not_applicable','Statement prescribes a finite regular KNOT diagram and a mark away from crossings; there is no empty marked input.'),
('zero','checked','Proof4.1 explicitly has E(z,0)=T(z,0) with identical first jets; Proof5.1 makes the exterior arc height zero by a supported vertical translation.'),
('one','checked','Proof2.1 uses exactly one SU2 spherical rotation. Proof3.1 proves that the disk cuts exactly one exterior marked arc at the two parameters±c.'),
('degenerate','checked','Proof3.1 uses strict epsilon/r/R bounds and a strictly decreasing squared-radius function to prove the two cuts are transverse; no tangential cut is admitted.'),
('endpoints','checked','Proof4.1 supplies the actual Euclidean/product-collar chart bridge and determinant-one S3 lift. Proof5.1 supplies product cut collars; endpoint coordinate identifications are recorded rather than treated as identities.'),
('nonempty-choice','checked','Proof1.1–3.1 choose only finitely many small radii/parameters. Statement retains AC_omega for branch compatibility but Proof5.1 adds no further choice principle.')],
IDS[7]:[
('empty','not_applicable','Statement concerns an isotopy of marked knots with a common standard oriented arc; an absent knot or mark is outside that domain.'),
('zero','checked','Proof3.1 makes the spatial coordinates exactly identity in BOTH time end collars; Proof4.1 keeps time a submersion and introduces no Morse critical point.'),
('one','checked','Proof1.1–3.1 protect one common parametrized marked interval, and Proof5.1–6.1 give the finite R1/R2/R3 list with no birth, saddle or death.'),
('degenerate','checked','Proof2.1 contracts the center/tangent loop by omitted-point charts; Proof5.1 excludes higher and coincident projection strata with the actual relative finite-jet construction.'),
('endpoints','checked','Proof4.1 uses the explicit disk automorphisms with pole p/u and ambient extension supported away from the marked germ. Proof6.1 prepends/appends these protected planar endpoint comparisons while retaining the recorded spatial identifications.'),
('nonempty-choice','checked','A1 and Proof3.1/5.1 retain AC_omega only for the extension/genericity suppliers; the two loop omitted points and finite coordinate parameters do not require full AC.')],
IDS[8]:[
('empty','not_applicable','Statement requires an embedded ANNULUS between two marked knots and a specified proper marked arc. Empty-surface cases belong to the separate unmarked movie supplier.'),
('zero','checked','Proof1.1 replaces the marked height by u and Proof3.1 has height derivative1 along the protected strip; Proof5.1 makes Morse perturbations only off that strip.'),
('one','checked','Proof2.1 straightens the one specified embedded marked arc using its actual eight-parameter family; Proof7.1 keeps the resulting mark alive in every frame.'),
('degenerate','checked','Proof2.1 checks derivative and collision strata in dimensions2/3 against codimension4 and supplies the near-diagonal bound; arbitrary height-critical tracks are not presumed already monotone.'),
('endpoints','checked','Proof2.1 fixes smaller end collars, Proof3.1 records the spatial endpoint coordinates, and Proof7.1 compares the actual trace after undoing those coordinates. Statement explicitly limits prescribed endpoints to compatible long presentations.'),
('nonempty-choice','checked','A1 and Proof2.1/5.1/6.1 use AC_omega for the actual transversality and extension suppliers; compact support covers and all remaining choices are finite.')],
IDS[9]:[
('empty','checked','Proof1.1 starts with the empty surface and its empty movie; Proof6.1 separately treats empty incoming/outgoing links and closed surface components.'),
('zero','checked','Proof2.1 keeps h=t on product collars with no collar critical points. If there are no critical intervals, Proof4.1–5.1 supply only regular slabs and their projection events.'),
('one','checked','Proof3.1 isolates one Morse critical picture in its own interval, and Proof6.1 separates its time from all Reidemeister events; it imposes no single-component boundary restriction.'),
('degenerate','checked','Proof3.1 uses injective spatial derivative at a Morse height critical point and excludes other projected branches from its support disk. Proof5.1 uses the actual genericity supplier to exclude higher projection events.'),
('endpoints','checked','Proof1.1 fixes smaller prescribed collars; Proof4.1 makes stationary product cuts by the embedding interpolation with time coordinate unchanged; Proof6.1 retains prescribed regular endpoint diagrams and boundary parametrizations.'),
('nonempty-choice','checked','A1 and Proof2.1/5.1/6.1 name AC_omega only for Sard/transversality/flows/extension. No full AC or movie-move classification is invoked.')],
IDS[10]:[
('empty','checked','Proof1.1 uses the finite sign construction including its zero-crossing base cube. The Statement still requires a based oriented knot, so an absent marked component is excluded.'),
('zero','checked','Proof1.2 checks the actual comparison at2=h=0. Proof1.3 localizes by h alone and contracts torsion Boolean summands; it does not invert2 or assert odd concordance equivalences.'),
('one','checked','Proof1.3 identifies the TWO knot orientation S-lines with ONE regular rank-one localized coefficient module in degree0 and odd quantum parity.'),
('degenerate','checked','Proof3.1 compares only full admissible assignments, including zero-face data. It does not assert independence for every weak square-compatible candidate from the Definition.'),
('endpoints','checked','Proof1.5 normalizes an arbitrary finite endpoint pair with common r/epsilon/R and actual pole/closure comparison. Proof2.1 uses R-only movies for odd homotopy equivalence, while Proof4.1 uses the full marked annulus movie only for local concordance maps.'),
('nonempty-choice','checked','Proof4.1 retains exactly AC_omega for the geometric extension/genericity branch; Proof1.1–1.4 and3.1 are finite algebra. The common endpoint and marked-arc selections are finite.')],
IDS[11]:[
('empty','not_applicable','Definition LEO conditions require a nonzero localized rank-one BN object; the triple with D=0 is excluded. The Statement is not a group of arbitrary empty/zero complexes.'),
('zero','checked','Proof3.1 checks the reduced evaluation square using the homotopy ell on C for gf-id; the separate H on D for fg-id is used only for coevaluation. The chain-map evaluation signs cancel with the stated Hom differential.'),
('one','checked','Proof2.1 gives the unknot A{1},R{1} unit, and Proof3.1 uses the shifted dual{2} and rank-one localized evaluation/coevaluation to produce its actual inverse local maps.'),
('degenerate','checked','Proof3.1 works for finite free complexes with arbitrary acyclic complements using actual Hom/tensor homotopies over the marked rings; it does not assume the localized coefficient algebra is a field.'),
('endpoints','checked','Proof4.1 returns from common long presentations to arbitrary based diagrams, and Proof5.1 composes degree-zero marked annulus maps with endpoint isomorphisms. Only the complete connected BN concordance composite is required invertible.'),
('nonempty-choice','checked','A1 and Proof4.1–5.1 retain AC_omega for the smooth concordance/movie inputs. Proof1.1–3.1 is finite algebra. F4 uses only the smooth group clause proved by its supplier Proof1.1–2.1; the supplier TOP branch is not accepted here.')],
IDS[12]:[
('empty','not_applicable','Definition:odd-state-data requires a finite regular based knot diagram and its marked circle. A zero-crossing knot is allowed, but an empty based knot is not defined.'),
('zero','checked','Proof3.1 checks d squared using the GIVEN square-compatible signs and checks the odd right action X squared=0. Definition:mod-two-comparison retains B=F2[X]/X squared, rather than setting X=0.'),
('one','checked','Proof1.1 uses the monic relation to obtain the explicit1,X bases; Proof2.1 checks both counit identities on1 and X.'),
('degenerate','checked','Definition:candidate-square-condition calls weak square-compatible data candidate input and defers existence/invariance. Proof3.1 proves only its stipulated chain equation and marked linearity, not a missing global sign theorem.'),
('endpoints','not_applicable','Definition:local-map-conditions specifies algebraic maps and reduced squares, not geometric movie endpoints. Its actual based/concordance realization is supplied separately by the two full proof donors.'),
('nonempty-choice','not_applicable','Definition:candidate-square-condition treats epsilon as supplied data; Proof3.1 expressly defers existence of admissible assignments. No choice or sign-existence theorem is asserted here.')]
}
contracts={}
for i in IDS:
 rows=[]
 for case,status,msg in B[i]:rows.append({'case':case,'status':status,('evidence' if status=='checked' else 'reason'):msg})
 for case in ['iff-forward','iff-reverse']:
  text={
IDS[0]:'Statement asserts sign existence and comparison, not an iff predicate; Proof6.1 constructs vertex-sign comparison for the prescribed full face data.',
IDS[1]:'Statement asserts RI/RII chain homotopy equivalences, not an iff criterion. Proof1.1 supplies inverse/homotopy identities and Proof4.1 checks marked linearity and reduction.',
IDS[2]:'Statement asserts the RIII common-complex equivalence for all variants, not an iff predicate. Proof7.1 gives the finite variant reductions and Proof6.1 their marked grading compatibility.',
IDS[3]:'Statement constructs maps for a supplied movie and a localized inverse for a connected concordance, not an iff criterion. Proof6.1 inverts only that complete BN composite.',
IDS[4]:'Statement constructs the pointed tensor isomorphisms rather than characterizing a predicate in two directions. Proof4.1 checks the BN inverse, normalized sign and degree shift.',
IDS[5]:'Statement constructs recharting chain isomorphisms and conditional LEO local maps, not an iff test. Proof7.1 checks both reduced squares while retaining the LEO-object hypothesis.',
IDS[6]:'Statement is existence of a long endpoint presentation, not an iff characterization. Proof3.1 proves the exterior arc and Proof5.1 its protected long-end compatibility.',
IDS[7]:'Statement is existence of a protected R-only movie with relative endpoint comparison, not an iff theorem. Proof6.1 assembles the finite list and returns the prescribed diagrams.',
IDS[8]:'Statement is protected marked-annulus movie existence with recorded endpoint coordinates, not an iff criterion. Proof7.1 compares its actual trace and states no arbitrary planar comparison.',
IDS[9]:'Statement asserts a finite generic movie and its actual trace comparison, not movie equivalence. Proof6.1 glues the constructed pieces, including empty and closed components.',
IDS[10]:'Statement establishes the candidate complex, comparison, localization, invariance and tensor identifications, not an iff predicate. Proof2.1 and4.1 provide the actual based/concordance directions used later.',
IDS[11]:'Statement establishes a group and well-defined homomorphism, not an iff predicate. Proof3.1 gives inverse local maps and Proof5.1 gives both concordance directions.',
IDS[12]:'Definition:leo-conditions and Definition:local-map-conditions specify data and equivalence, not a proved iff criterion. Proof3.1 defers the separate knot realization.'}[i]
  rows.append({'case':case,'status':'not_applicable','reason':text})
 contracts[i]={'boundaries':rows}
# Validate every explicitly named local Proof step in boundary evidence before serializing.
for i,c in contracts.items():
 for row in c['boundaries']:
  text=row.get('evidence',row.get('reason',''))
  for step in re.findall(r'Proof\s*([0-9]+\.[0-9]+)',text):assert step in step_sets[i],(i,step)
contract_pin=write('proof-contract-fragment.json',{'version':1,'scope':IDS,'contracts':contracts})
write('proof-contract-empty-array-stubs.json',{'version':1,'scope':IDS,'contracts':{i:{'citations':[],'derivations':[],'routine_steps':[]} for i in IDS}})
anchor_pin=write('exact-proof-and-definition-anchors.json',{'version':1,'scope':IDS,'anchors':anchors,'note':'Line numbers refer to the exact pinned offcanonical carrier; root metadata insertion may shift lines. Section/step labels, opening text and step hashes identify the mathematical anchors.'})
write('pin-inventory.json',{'version':1,'run':RUN,'owner':'/root/knot_lee_odd_localization','scope':IDS,'eligible_source_count':13,'new_unplaced_helper_count':10,'pins':pins,'originals_preserved':True,'root_only_actions':['place10helpers on91A','canonical donor integration','actualFacts dependency deltas','source metadata and dependency levels','page/plan/manifest/contracts reconciliation','coverage/readiness and native transitions'],'no_canonical_mutations_by_pack':True})
print(json.dumps({'sources':len(pins),'new_helpers':10,'proof_rows':sum(len(x['proof']) for x in anchors.values()),'contract':contract_pin,'anchors':anchor_pin},indent=2))
# Exact boundary worksheets: all quotes are literal substrings of the pinned carrier.
worksheets={}
for i in IDS:
 s=paths[i].read_text();proof=section(s,'Proof');proof_rows={m.group(1):m.group(0) for m in re.finditer(r'^([0-9]+\.[0-9]+)\s+(.*)$',proof,re.M)}
 entries=[]
 for row in contracts[i]['boundaries']:
  text=row.get('evidence',row.get('reason',''));m=re.search(r'Proof\s*([0-9]+\.[0-9]+)',text);dm=re.search(r'Definition:([a-z-]+)',text)
  if dm and i==IDS[12]:
   a=next(x for x in anchors[i]['definition'] if x['anchor']==dm.group(1));k=s.index(a['opening']);q=s[k:].split('\n\n',1)[0];sec='Definition';step=dm.group(1)
  else:
   step=m.group(1) if m else list(proof_rows)[-1];q=proof_rows[step];sec='Proof'
  assert q in s
  entries.append({'case':row['case'],'section':sec,'step':step,'actual_quote':q,'status':row['status'],'assessment':text,'carrier_raw_sha256':binding(paths[i])['raw_sha256']})
 worksheets[i]=entries
write('boundary-worksheets.json',{'version':1,'scope':IDS,'worksheets':worksheets,'quote_policy':'Literal full pinned proof step or exact Definition paragraph; not generated paraphrase. All104quotes verified against their exact carriers.'})
# Primary reading is distinct from existing local-file fetch identity pins.
primary_specs=[
 ('ors','https://arxiv.org/pdf/0710.4300','/tmp/lee-odd-sources/ors.pdf','/tmp/lee-odd-sources/ors.txt','Full textual §§1–3 and reduced-complex discussion§4 read; figures2,4,8–12 inspected as rendered PDF pages. Figure2 was re-inspected at high resolution for the spherical endpoint-germ table. No article-wide image or whole-paper review claimed.',[IDS[k] for k in [0,1,2,3,4,5,10,12]],'Cube face classification, full edge signs, RI–III and reduced exterior-module context. The local finite parity/cancellation/tensor/spherical calculations remain actual local proofs, not blanket imported theorems.'),
 ('putyra','https://arxiv.org/pdf/1310.1895','/tmp/lee-odd-sources/putyra.pdf','/tmp/lee-odd-sources/putyra.txt','Numbered passages3.12–5.8 read in full in the authoring receipt, especially Proposition4.10/Table2 and Proposition5.1; rendered Table2 inspected. No whole-paper claim.',[IDS[k] for k in [0,1,2,3,10,12]],'Planar chronological coefficient/interchange configurations and marked action context; local proofs expand the finite integer identities explicitly.'),
 ('dls','https://arxiv.org/pdf/2312.09114v3','/tmp/lee-odd-sources/dls.pdf','/tmp/lee-odd-sources/dls.txt','Full textual§2.2 including Lemma2.6, Theorem2.10, Lemma2.13 and Corollary2.14, plus§3.1–3.4 group/concordance proof, read. Actual Proposition3.4 basepoint/through-infinity passage was re-read. No whole-article claim.',[IDS[k] for k in [3,4,10,11,12]],'LEO definitions, dual/group/concordance and pointed tensor context. The local new donors supply based endpoint geometry, full module-linear maps and corrected reduced tensor signs instead of assuming the source assertion is itself a local proof.'),
 ('ls','https://arxiv.org/pdf/2109.09018v3','/tmp/lee-odd-sources/ls.pdf','/tmp/lee-odd-sources/ls.txt','Full textual Proposition2.1 and beginning of§3 through Lemma3.1 read; no whole-paper claim.',[IDS[k] for k in [3,10]],'Localized enhanced-state orientation basis; the local source constructs actual marked-ring Boolean contractions and the connected-composite inverse.'),
 ('queffelec','https://arxiv.org/pdf/2406.18203v1','research/'+RUN+'-owner-cobordism-movies-round-1/queffelec.pdf','research/'+RUN+'-owner-cobordism-movies-round-1/queffelec.txt','This owner directly read the COMPLETE actual PDF pages5–10, §§3.1–3.6, during preparation of this pack. Geometry author/review receipts separately record their own extents; this owner makes no new whole11-page claim.',[IDS[k] for k in [6,7,8,9]],'Generic regular projections and RI/RII/RIII event context only. Relative finite jets, deleted-diagonal control, SU2/collar normalization, marked-arc contraction, protected endpoint extension and Morse surface assembly are supplied in the actual local proofs.')]
fetch=[];coverage=[];reading_primaries=[]
for key,url,pdf,txt,extent,items,role in primary_specs:
 pb=binding(pdf);tb=binding(txt)
 fetch.append({'key':key,'source_url':url,'pdf':pb,'extracted_text':tb,'fetch_status':'existing local source verified; NO new network fetch performed by this pack','fetched_at':None})
 coverage.append({'key':key,'source_url':url,'supported_items_add':items,'actual_reading_receipt_key':'primary:'+key,'mathematical_coverage':role,'content_rows':[{'name':role,'item':i,'disposition':'included','reason':'Read source context plus the exact local proof anchors pinned for this item; source extent is limited by the separate actual-reading receipt.'} for i in items],'limitations_replacement':extent+' No source-wide completeness, unproved cited theorem or original91-other12 acceptance follows.'})
 reading_primaries.append({'receipt_key':'primary:'+key,'reader':'/root/knot_lee_odd_localization','source_url':url,'pdf_raw_sha256':pb['raw_sha256'],'text_raw_sha256':tb['raw_sha256'],'actually_read':extent,'proof_role':role,'fetch_stamp_is_not_reading':True})
write('source-fetch-pins.json',{'version':1,'kind':'existing-primary-file-identity-pins','sources':fetch,'note':'These are file identity/fetch provenance pins only; they make no reading or proof-coverage assertion. See separate actual-reading-receipt-fragments.json.'})
write('primary-coverage-fragments.json',{'version':1,'kind':'offcanonical-primary-coverage-donor-fragments','scope':IDS,'historical_native_reading_unchanged':True,'fragments':coverage,'local_original_proof_coverage':{'items':IDS,'covered_by':'13 exact complete source/donor bodies and85 Proof rows, separately recorded below; no generic citation substitutes for any row.'},'references_not_newly_read_here':[{'url':'https://arxiv.org/pdf/math/0410495v2','scope':'Bar-Natan§9.3 remains context-only for the Definition; no fresh full-text reading claimed. The integral Z[h] identities are verified locally in Definition Proof2.1–3.1 and are not attributed to its characteristic-two tangle theory.'},{'url':'https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf','scope':'No whole-book reading. Unmarked movie Morse/regular-band inputs are used through named proved local suppliers and its explicit six-row construction.'}],'not_covered':'No analytic Floer, numerical Whitehead, TOP concordance-group, movie independence or other12 original91 acceptance.'})
# Bind the exact independent reviews already adopted by root, without expanding their scope.
evidence_paths=[
 'research/'+RUN+'-owner-odd-established-prerequisites-authoring/authorship-and-focused-review.json',
 'research/'+RUN+'-owner-odd-five-independent-review-cycle1.json',
 'research/'+RUN+'-owner-odd-five-independent-review-cycle2.json',
 'research/'+RUN+'-owner-spherical-recharting-independent-review-cycle1.json',
 'research/'+RUN+'-owner-spherical-recharting-independent-review-cycle2.json',
 'research/'+RUN+'-owner-based-endpoint-geometry-independent-review-cycle1.json',
 'research/'+RUN+'-owner-based-endpoint-geometry-independent-review-cycle2/report.json',
 str(DONORS/'full-consumer-integration-bindings.json')]
evidence=[binding(x) for x in evidence_paths]
readings=[]
for n,i in enumerate(IDS):
 scope=('Full current unmarked Statement/Facts and all6 proof rows read directly during this pack preparation; empty-surface/link, Morse critical disks, stationary regular slabs, actual trace interpolation and collar gluing were all read.' if n==9 else 'Complete body previously read during this assignment, including full Statement/Definition, Facts and every Proof row; exact unchanged current carrier verified and its actual step/Definition anchors re-inspected for this pack.')
 if n in [10,11]:scope='Complete exact frozen donor Statement/Facts/full proof re-read against accepted final algebra/spherical/geometry supplier interfaces; unchanged donor bytes and identical canonical Statement verified. Root separately stated its own full reading of both donors.'
 readings.append({'receipt_key':'local:'+i,'reader':'/root/knot_lee_odd_localization','item':i,'carrier':binding(paths[i]),'complete_mathematical_body_read':True,'actual_extent':scope,'proof_steps':[x['step'] for x in anchors[i]['proof']],'definition_anchors':anchors[i].get('definition',[]),'not_a_fetch_stamp':True})
group=Path('items/thm-knot-concordance-is-an-abelian-group.md');gs=group.read_text();gproof=section(gs,'Proof');smooth_quotes=[m.group(0) for m in re.finditer(r'^(?:1\.1|2\.1)\s+.*$',gproof,re.M)]
write('actual-reading-receipt-fragments.json',{'version':1,'run':RUN,'scope':IDS,'local_readings':readings,'primary_readings':reading_primaries,'adopted_review_evidence_pins':evidence,'smooth_group_supplier_only':{'carrier':binding(group),'used_statement_clause':section(gs,'Statement').split(' Separately,',1)[0],'used_Proof_steps':['1.1','2.1'],'actual_quotes':smooth_quotes,'owner_reading':'Complete current carrier read; mathematical use restricted to the first smooth clause and Proof1.1–2.1. Proof3.1 records the unresolved TOP connected-sum compatibility. No TOP group conclusion or whole-carrier readiness is asserted.','eligible_13_inventory_member':False},'recursive_audit_limit':'This pack binds actual complete eligible carriers and the stated read primary passages. It does not claim a new recursive whole-library audit of every transversality/Morse/tensor supplier; those used interfaces have their own existing source/review receipts, and root has stated its adopted readings.','canonical_or_native_reading_records_modified':False})
OTHER12=['def-lee-deformed-khovanov-complex','lem-lee-filtered-spectral-sequence-and-two-orientation-classes','thm-lee-filtered-homology-is-an-oriented-link-invariant','thm-lee-homology-of-a-knot-has-two-generators','def-rasmussen-s-invariant','lem-lee-cobordism-filtration-genus-bound','cor-rasmussen-s-for-positive-knots','lem-rasmussen-s-mirror','thm-rasmussen-s-bounds-smooth-four-ball-genus','rem-leo-refined-s-current-computations','ex-knot-kt-38-worked-cases','cex-knot-kt-38-boundary-case']
write('scope-and-root-integration-note.json',{'version':1,'run':RUN,'exact_eligible_items':IDS,'excluded_other12_original91':OTHER12,'root_stated_target_counts':{'page_A':23,'page_B':2,'total':25},'new_unplaced_helpers':IDS[:10],'root_intended_target_page':'lee-deformation-and-rasmussen-s-invariant','source_dependency_and_metadata_action':'Root owns actual Facts-link dependency deltas, metadata/levels, source integration, pages/plans/manifests/contracts and all native coverage/readiness. Donor headers deliberately remain frozen original metadata. No source edit in this pack.','mathematical_scope_limits':{'definition':'Weak square-compatible epsilon is candidate data; no original Definition change or blanket independence claimed. Foundations uses a coherent FULL admissible family.','sphere':'All link chain isomorphisms remain; LEO local-map conclusion only applies to actual LEO triples.','R_only':'Use only for isotopic knot representatives, to infer odd chain homotopy equivalence.','annulus':'Use for concordance local maps with localized BN composite equivalence; no odd concordance equivalence or individual birth/death inverse claimed.','geometric_coordinates':'Common directed germ, finite common r/epsilon/R, explicit E/T collar bridge, and mark-fixed disk-automorphism endpoint extension retained.','smooth_domain':'LEO donorF4 uses only the smooth group clause/Proof1.1–2.1 of its mixed smooth/TOP supplier; TOP held.','other_original91':'The listed other12 are neither newly accepted nor covered by this integration operation.'},'mutations':{'canonical_sources':0,'canonical_metadata':0,'native_transitions':0,'native_gates':0}})
# Verify every worksheet anchor/quote, every exact pin and the empty-array requirement.
assert len(worksheets)==13 and sum(map(len,worksheets.values()))==104
assert sum(len(x['proof']) for x in anchors.values())==85
for i in IDS:
 assert set(contracts[i])=={'boundaries'}
 for x in worksheets[i]:assert x['section'] in ['Proof','Definition'] and x['actual_quote'] in paths[i].read_text()
for x in pins:assert binding(x['carrier']['path'])==x['carrier'] and Path(x['snapshot']['path']).read_bytes()==Path(x['carrier']['path']).read_bytes()
write('validation.json',{'scope_items':13,'new_helpers':10,'proof_rows':85,'boundary_cases':104,'all_source_pins_match':True,'all_snapshots_match':True,'all_worksheet_actual_quotes_literal':True,'all_contracts_boundaries_only':True,'all_empty_array_stubs_empty':True,'Statement_preservation_for_both_original_donors':True,'canonical_source_metadata_writes':0,'native_gates_attempted':0,'validation_kind':'Bounded research-pack identity, scope and anchor checks only; not a native gate or whole-corpus validator.'})
artifacts=[binding(p) for p in sorted(OUT.glob('*.json')) if p.name!='report.json']
write('report.json',{'version':1,'run':RUN,'owner':'/root/knot_lee_odd_localization','recorded_utc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'OFFcanonical13eligible-source integration fragments only','scope':IDS,'source_count':13,'new_unplaced_helpers':10,'proof_rows':85,'boundary_cases':104,'exact_source_inventory':'pin-inventory.json','native_contract_fragment':'proof-contract-fragment.json','explicit_empty_array_stubs':'proof-contract-empty-array-stubs.json','boundary_quote_worksheets':'boundary-worksheets.json','actual_reading_receipts':'actual-reading-receipt-fragments.json','source_file_fetch_identity_only':'source-fetch-pins.json','primary_coverage_fragments':'primary-coverage-fragments.json','scope_limits':'scope-and-root-integration-note.json','validation':'validation.json','artifacts':artifacts,'authority':'Root requested these exact13eligible sources and owns their integration/placement; this pack supplies pins and bounded evidence only. It changes no canonical source/metadata, native reading/coverage/readiness record or gate. Other12original91 and TOP remain outside acceptance.'})
print(json.dumps({'report':binding(OUT/'report.json'),'inventory':binding(OUT/'pin-inventory.json'),'boundaries':binding(OUT/'proof-contract-fragment.json'),'worksheets':binding(OUT/'boundary-worksheets.json')},indent=2))
