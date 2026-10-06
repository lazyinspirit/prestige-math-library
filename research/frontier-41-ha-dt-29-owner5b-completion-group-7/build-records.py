import json, hashlib, re
from pathlib import Path
ROOT=Path('.'); OUT=Path('research/frontier-41-ha-dt-29-owner5b-completion-group-7'); RUN='frontier-41-ha-dt-29'; REVIEWER='owner-helper-step5b-completion-g7'
work=json.loads(Path('research/'+RUN+'-owner5b-completion-worklists/group-7.json').read_text())
def raw(i):return Path('items/'+i+'.md').read_bytes()
def sha(i):return hashlib.sha256(raw(i)).hexdigest()
def body(i):return raw(i).decode().split('---',2)[2]
clauses={}
for line in '''cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis|Statement: finite pi1 has finite holonomy image and hence stability; product leaves show the converse fails, under AC_omega.
cor-trivial-holonomy-gives-a-product-foliated-neighbourhood|Statement and F1-F2: a compact smooth leaf with trivial holonomy has arbitrarily small saturated product neighbourhoods; kernel=pi1 gives degree-one holonomy cover.
def-c1-germ-of-a-local-diffeomorphism-at-a-point|Definition: C1 maps with C1 inverses fixing x, modulo equality near x; composition-order multiplication and positive-derivative subgroup.
def-c1-regular-codimension-one-foliation-and-transverse-orientation|Definition: C1 product atlas, intrinsic plaque leaves, signed increasing transverse transitions; it does not assert smooth transverse germs.
def-countable-choice-principle-for-foliation-pair|Definition: a sequence of nonempty sets admits a selection function on N; exactly the published AC_omega sequence principle, not full AC.
def-finite-holonomy-normal-model|Definition: diagonal (holonomy cover × invariant disk)/H, central leaf L, leaf represented by t is cover/H_t with finite faithful stabilizer holonomy.
def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary|Definition: smooth half-space product foliation charts; boundary is saturated; for codimension one boundary plaques have dimension n-1.
def-germ-of-a-local-diffeomorphism-at-a-point|Definition: smooth local diffeomorphisms fixing the specified basepoint modulo equality near it; product is ordinary composition.
def-holonomy-cover-of-a-leaf|Definition: connected kernel covering, obtained as universal cover/ker(rho); kernel is transversal-independent and trivial rho gives degree one.
def-holonomy-groupoid-of-a-foliation|Definition: same-endpoint paths modulo equal transport germs; composition is categorical concatenation; no arrow topology or Hausdorff assertion.
def-holonomy-representation-and-holonomy-group-of-a-leaf|Definition: rho([a])=h_(a^-1) is a homomorphism for traversal-order pi1; image and kernel agree with forward transport, and transversal changes conjugate rho.
def-leafwise-path-and-leafwise-homotopy|Definition: ambient-continuous paths in one leaf and endpoint-fixed leafwise homotopies; AC_omega countable transverse-values clause places connected chart images in one plaque.
def-local-transversal-to-a-regular-foliation|Definition: embedded smooth q-manifold through x with T_xM=TF_x direct-sum T_xT; transversality is initially imposed at x and persists after shrinking.
def-map-transverse-to-a-regular-foliation|Definition: df(TN)+TF=TM, equivalently surjectivity of the differential modulo leaf tangent space.
def-monodromy-groupoid-of-a-foliation|Definition: leafwise paths modulo endpoint-fixed leafwise homotopy with categorical concatenation, constant identities and reversal inverses; set-theoretic groupoid only.
def-saturated-neighbourhood-of-a-leaf|Definition: open neighbourhood which is a union of complete leaves; the union-of-leaves criterion also applies verbatim to an already supplied C1 leaf partition.
def-stable-leaf-of-a-foliation|Definition: every open neighbourhood contains an open saturated neighbourhood; equivalent saturation containment formulation. It does not mean neighbouring leaves have the same diffeomorphism type.
def-suspension-foliation-of-a-group-action|Definition: diagonal deck/representation quotient of universal base cover × fibre; suspension leaves are images of universal-base-cover × {y}, not the fibre slices of a bundle.
def-transversely-oriented-codimension-one-foliation|Definition: smooth kernel form or transverse field coorientation; positive plaque transports; C1 users are explicitly redirected to the separate C1 definition.
lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex|Statement: closed smooth M has finite-CW homotopy type under full AC; proof F6 derives the countable-choice handle input, not conversely.
lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented|Statement: smooth cooriented codimension-one, compact and finite pi1 imply trivial holonomy and saturated product neighbourhoods under AC_omega.
lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle|Statement: nonempty compact connected boundaryless topological one-manifold is a circle; smooth case is diffeomorphic; empty and interval cases are excluded.
lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space|Statement: closed connected nonempty ambient, compact trivial-holonomy leaves of common closed smooth type give Hausdorff circle leaf space and bundle; connection gives whole-fibre return and isotopy-class independence.
lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism|Statement and Proof 1.2/2.1: finite admissible chain constructs endpoint-transversal germ by coordinate matching and composition; existence alone, chain independence comes separately.
lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal|Statement: nonclosed smooth cooriented leaf meets an embedded closed transversal; no arbitrary-neighbourhood localization. The compact-ambient finite-barrier proof is supplied directly in the closedness consumer.
lem-axiom-of-choice-implies-countable-choice|Statement: full AC selects every sequence of nonempty sets, hence AC_omega. Only the forward implication is supplied.
lem-c1-foliated-atlas-preserves-plaque-equivalence-and-transverse-orientation|Statement: compatible C1 atlas/refinement preserves plaque-chain leaves and coorientation; intrinsic topology Hausdorff locally Euclidean and compact leaves second countable.
lem-c1-germs-of-local-diffeomorphisms-form-a-group|Statement: composition-order C1 germ group and positive-derivative subgroup; identity/inverse and chart-sign independence supplied in Proof 1.1-1.3.
lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs|Statement and Proof 3.1: reversed-loop rho into positive C1 germs, independent of chart chains and endpoint-fixed homotopy; no smoothing assertion.
lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface|Statement: intrinsically compact C1 codimension-one leaf in Hausdorff smooth ambient embeds as C1 hypersurface; smoothness is not inferred merely from C1.
lem-compact-c1-leaf-has-finitely-generated-fundamental-group|Statement: compact connected cooriented C1 leaf has finitely generated pi1 under full AC; proof constructs a homeomorphic closed smooth hypersurface before using finite CW.
lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness|Statement: closed connected smooth cooriented ambient and compact finite-pi1 reference leaf imply closed union S and all leaves of common type/trivial holonomy, under full AC.
lem-compact-stable-leaves-form-an-open-saturated-set|Statement: union of compact leaves diffeomorphic to a finite-pi1 reference leaf is open and saturated in smooth cooriented codimension one; separately union of compact finite-holonomy leaves is open for any smooth regular foliation.
lem-countable-choice-sequence-and-product-formulations-are-equivalent|Statement: selection-function existence is equivalent to a nonempty countable product, with no implication to arbitrary-index AC.
lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group|Statement: normal holonomy kernel yields regular cover, Deck=pi1/kernel=Hol, free transitive fibres and degree |H|; left deck action pairs with reversed-loop convention.
lem-finite-holonomy-acts-on-a-small-transverse-disk|Statement and Proof 3.1: finite smooth germ group represented by faithful action on a common invariant disk, conjugate to derivative action by averaged coordinate; arbitrary unrelated representatives are not globally interchangeable.
lem-germs-of-local-diffeomorphisms-form-a-group|Statement: smooth same-basepoint germ composition well-defined, associative, identity and local-inverse operation.
lem-germs-of-orientation-preserving-diffeomorphisms-of-the-line-at-zero-are-torsion-free|Statement: an increasing one-dimensional germ of finite order is identity; therefore every finite subgroup is trivial.
lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism|Statement: boundary diffeomorphism and chosen collars give smooth gluing; foliated gluing additionally requires equality of all signed-collar plane-field jets, not just boundary leaf matching.
lem-holonomy-classes-form-a-groupoid-congruence|Statement: equal same-endpoint germs define a concatenation congruence, coarser than leafwise homotopy; quotient and projection are set-theoretic groupoids.
lem-holonomy-germ-is-independent-of-the-foliation-chart-chain|Statement: path/endpoint-transversal germ unchanged by chart-chain refinement, subdivision, auxiliary transversals; local coordinate-matching comparison, not arbitrary global representative equality.
lem-holonomy-respects-path-concatenation-and-reversal|Statement: h_(a*b)=h_b composed with h_a, h_(a^-1)=h_a^-1, and constant-path identity for identical endpoint transversals.
lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite|Statement: images of generating sets generate homomorphic images; finite groups have finite images. Choice-free algebraic result.
lem-oriented-intersection-detects-nonvanishing-rational-homology|Statement clauses 1-4: smooth cooriented closed oriented ambient dimension>=2 and closed immersed transversal give one-sign intersection, rational homology pairing and outside-span detection for consistently oriented compact leaves/finite unions.
lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional|Statement: closed smooth M has finitely generated integral and finite-dimensional rational homology in every degree, with full AC explicitly propagated through finite CW and free-subgroup inputs.
lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists|Statement: connected kernel covering exists as universal cover/K and is unique over the leaf, with prescribed fundamental-group image.
lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action|Statement: connected-cover deck group has neighbourhoods disjoint from every nonidentity translate; it does not assert fibre transitivity for nonregular covers.
lem-the-normal-model-map-is-a-foliated-local-diffeomorphism|Statement: actual diagonal-invariant smooth transport map descends, maps model leaves into ambient leaves and has invertible differential/local foliated inverse.
lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood|Statement: after invariant shrinking the map is injective and its image is a saturated open neighbourhood, inside any prescribed neighbourhood, with compact finite-holonomy leaves covered by the finite holonomy cover.
lem-the-orientable-double-cover-of-a-smooth-manifold|Statement and Proof 4.1/7.1: orientation-ray double cover is smooth, canonically oriented, two-sheeted over nonempty connected M, and closed if M is closed.
lem-transverse-holonomy-transport-is-well-defined-and-equivariant|Statement: compact smooth finite-holonomy setting with fixed tubular fibres yields actual smooth diagonal-invariant transport family on a common disk; compatible finite representatives are furnished by the explicit external construction F4, not arbitrary germ equality.
lem-trivial-c1-holonomy-gives-a-saturated-product-neighbourhood|Statement: intrinsically compact cooriented C1 leaf with trivial C1 holonomy has saturated C1 product neighbourhood; Proof 3.1 uses finitely many compact overlap agreements.
prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group|Statement: categorical isotropy is isomorphic by forward transport to holonomy image; that image equals reversed-loop representation image. Triviality equivalence uses only image.
prop-mapping-torus-foliations-realize-global-reeb-stable-examples|Statement clauses 1-5 and final paragraph: connected nonempty closed fibre gives closed smooth bundle, fibre leaves with trivial holonomy, positive return f^-1 and bundle classification by conjugacy of mapping classes over the oriented circle.
prop-pullback-foliation-under-a-transverse-map|Statement: transverse smooth f gives rank dimN-q integrable inverse-image distribution; leaf preimages use intrinsic fibre-product manifold topology, not ambient subspace connected components.
prop-quotient-foliation-under-a-free-proper-foliated-action|Statement clauses 1-3: free properly discontinuous smooth foliation-preserving action gives covering/local-diffeomorphism quotient, descended leaf images and tangent distribution; boundaryless smooth carrier required.
prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf|Statement clauses 1-4 and Proof 2.1: smooth boundary-tangent solid-torus foliation, compact boundary torus, plane interior leaves accumulating on it, infinite one-sided contracting holonomy and no stability; zero-extended collar gives actual smooth boundaryless carrier.
prop-suspension-holonomy-is-the-germ-of-the-monodromy-action|Statement: forward path over gamma has rho(gamma)^-1 germ; leaf is universal-cover/stabilizer, pi1=stabilizer, reversed-loop representation has rho(gamma) germ; image/kernel agree.
thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints|Statement: endpoint-fixed leafwise homotopic paths have equal endpoint-transversal germs under AC_omega; finite chart-grid argument includes connected plaque condition.
thm-local-reeb-stability|Statement: intrinsically compact smooth leaf with finite holonomy has arbitrarily small saturated finite normal-model neighbourhoods, compact finite-holonomy nearby leaves, and retraction with finite leaf coverings/transverse disk fibres.
thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable|Statement: every nontrivial finitely generated subgroup of positive C1 interval germs surjects to Z; no conclusion for arbitrary non-finitely-generated groups.'''.splitlines():
 k,v=line.split('|',1);clauses[k]=v
special={
('cex-two-nonhomotopic-leaf-loops-can-have-the-same-holonomy-germ','def-leafwise-path-and-leafwise-homotopy'):'Counterexample 1.3/F4 compares loop classes in the intrinsic middle circle; it uses endpoint-fixed homotopy, not ambient null-homotopy.',
('cex-two-nonhomotopic-leaf-loops-can-have-the-same-holonomy-germ','def-suspension-foliation-of-a-group-action'):'Counterexample 1.1 explicitly constructs the diagonal Z action (t,x)->(t+k,(-1)^k x); the horizontal leaves are precisely the suspension leaves.',
('cex-two-nonhomotopic-leaf-loops-can-have-the-same-holonomy-germ','prop-suspension-holonomy-is-the-germ-of-the-monodromy-action'):'Counterexample 1.1 computes the generator reflection directly and invokes the suspension formula in prose; inverse reflection equals reflection.',
('def-finite-holonomy-normal-model','def-saturated-neighbourhood-of-a-leaf'):'Final Definition paragraph refers to modelling F near L; it does not claim an arbitrary model map image is saturated. Actual saturation is deferred to the restriction lemma.',
('def-holonomy-groupoid-of-a-foliation','def-germ-of-a-local-diffeomorphism-at-a-point'):'Definition first paragraph compares equality of same-source/same-target smooth transport germs; changing endpoint transversals multiplies by the same invertible endpoint germs.',
('def-holonomy-representation-and-holonomy-group-of-a-leaf','lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism'):'Definition rho([a])=h_(a^-1) uses finite-chain smooth endpoint transport; existence is the prerequisite for that formula.',
('def-holonomy-representation-and-holonomy-group-of-a-leaf','lem-holonomy-germ-is-independent-of-the-foliation-chart-chain'):'Definition rho([a])=h_(a^-1) needs a path germ independent of auxiliary chart chains; the supplier supplies precisely that independence.',
('ex-finite-holonomy-mobius-normal-model','def-local-transversal-to-a-regular-foliation'):'Verification 1.2 uses the v-interval transverse to the u-circle; their tangent directions are complementary.',
('ex-finite-holonomy-mobius-normal-model','lem-finite-holonomy-acts-on-a-small-transverse-disk'):'Verification 2.1 takes a small reflection-invariant interval D. Reflection already is a faithful linear finite action, so it realizes the supplied invariant-disk clause directly.',
('ex-product-foliation-near-a-compact-trivial-holonomy-leaf','thm-local-reeb-stability'):'Verification 1.2 constructs the saturated product by translation directly and cites the trivial-holonomy corollary; there is no separate direct use of the finite normal model.',
('lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space','lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented'):'Statement assumes trivial holonomy outright and does not assume finite pi1 or coorientation. Proof F1 uses the product corollary. This extra dependency is not load-bearing and no finite-pi1 converse is inferred.',
('lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space','thm-local-reeb-stability'):'F1 uses only its trivial-holonomy product corollary. All leaves are compact and trivial-holonomy by Given, so the finite-holonomy special case is licensed indirectly.',
('lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness','cor-trivial-holonomy-gives-a-product-foliated-neighbourhood'):'F1 uses the open-S supplier, whose F2 invokes the product corollary at compact finite-pi1 leaves. The compact-reference graph argument 1.2-3.1 is supplied locally and does not assume trivial holonomy of an unknown limit.',
('lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness','def-transversely-oriented-codimension-one-foliation'):'Statement/Given require smooth coorientation; Proof 1.1 and 1.2 use a positive transverse collar, 2.2 increasing generator maps. Smooth coorientation implies the C1 signed-atlas condition.',
('lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness','thm-local-reeb-stability'):'F1 openness is supplied by the common-leaf-type lemma/product corollary. Proof 1.2-3.1 constructs the needed compact-limit graph without applying finite-holonomy Reeb stability to an unknown limit.',
('lem-compact-stable-leaves-form-an-open-saturated-set','def-stable-leaf-of-a-foliation'):'Proof 1.2/2.1 obtains saturated neighbourhoods from the product/Reeb suppliers; stability terminology is only the resulting neighbourhood property, not a converse assumption about leaf type.',
('lem-holonomy-germ-is-independent-of-the-foliation-chart-chain','def-leafwise-path-and-leafwise-homotopy'):'Given uses leafwise path a; F1 and Proof 1.1 use the single-plaque chart-segment clause supplied through the finite-chain lemma.',
('lem-transverse-holonomy-transport-is-well-defined-and-equivariant','def-countable-choice-principle-for-foliation-pair'):'Statement explicitly assumes AC_omega. The pair-local principle equals published countable choice and licenses tubular/source-construction inputs; finite cover/domain shrinking adds no stronger choice.',
('lem-transverse-holonomy-transport-is-well-defined-and-equivariant','def-holonomy-cover-of-a-leaf'):'Statement fixes the connected kernel cover p; F2 uses its deck lemma and finite-sheeted conclusion, not the universal cover as the normal-model factor.',
('lem-transverse-holonomy-transport-is-well-defined-and-equivariant','def-local-transversal-to-a-regular-foliation'):'Statement/Proof 1.1 fix tubular projection fibres. Their tangents complement TF along L and remain transverse after shrinking; F1 transport uses exactly these smooth endpoint fibres.',
('prop-gluing-two-reeb-components-gives-a-foliation-of-s-three','def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary'):'Proof 2.1 uses boundary-tangent Reeb foliations from F1; the induced boundary foliation has codimension zero and is the whole torus, not a circle decomposition.',
('prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group','def-local-transversal-to-a-regular-foliation'):'Statement/Given fix smooth endpoint T at x; F2 germs are computed on that same T, not on a global return section.',
('prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group','def-monodromy-groupoid-of-a-foliation'):'F1 uses loop holonomy classes, F2 homotopy invariance ensures their comparison with pi1 representation image; no monodromy-arrow topology is used.',
('prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group','lem-holonomy-classes-form-a-groupoid-congruence'):'F1 relies on the Definition certificate that composition is well defined; F3 supplies the actual multiplicativity for the isomorphism.',
('thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations','cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis'):'Proof F3 uses the stronger cooriented finite-pi1 triviality lemma; this extra direct dependency is not needed for the proof. No converse from stability to finite pi1 is claimed.',
('thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations','def-transversely-oriented-codimension-one-foliation'):'Statement explicitly says smooth transversely oriented; Proof 2.1 uses increasing smooth transverse coordinate changes and 3.1 a smooth transverse connection.'}
repaired={p.stem for p in (OUT/'before').glob('*.md')}
def location(p):
 m=re.match(r'\[(F\d+)\]',p)
 if m:return m.group(1)
 m=re.match(r'(\d+\.\d+) ',p)
 if m:return 'Proof/Verification '+m.group(1)
 return 'Definition/Statement prose'
def note(i,s):
 t=body(i);pars=t.split('\n\n'); linked=[p.strip() for p in pars if '[['+s in p]
 facts=[p for p in linked if re.match(r'\[F\d+\]',p)]
 if (i,s) in special:use=special[i,s]
 elif facts:
  p=facts[0];use=location(p)+': '+re.sub(r'\s+',' ',p)
 elif linked:
  p=linked[0];use=location(p)+': '+re.sub(r'\s+',' ',p)
 else:raise Exception(('missing exact mapping',i,s))
 given=next((re.sub(r'\s+',' ',p.strip()) for p in pars if '**Given:**' in p),'')
 return f'{s}: {clauses[s]} Consumer {i} consumes: {use}'+(' Context: '+given if given else '')
rows=[]
for e in work['pending_edges']:
 i,s=e['from'],e['to'];row=dict(kind='edge',from_sha256=sha(i),to_sha256=sha(s),verdict='accurate',defect_ids=[],note=note(i,s),reviewer=REVIEWER);row['from']=i;row['to']=s
 if i in repaired:
  row['defect_ids']=([ 'owner5b-g7-mapping-fibre-interface' ] if i.startswith('prop-mapping') else [ 'owner5b-g7-choice-carrier' ] if i.startswith('cex-a-compact') else [ 'owner5b-g7-boundary-interface' ]);row['note']+=' Current owner repair closes this use; no native verdict is fabricated.'
 rows.append(row)
(OUT/'edge-verdicts.jsonl').write_text(''.join(json.dumps(r,ensure_ascii=False)+'\n' for r in rows))
dis=[]
for c in work['pending_direct_consumers']:
 i=c['id'];ns=[note(i,s) for s in c['changed_suppliers']]
 dis.append(dict(id=i,status='repaired' if i in repaired else 'still-licensed',reviewer=REVIEWER,consumer_sha256=sha(i),changed_suppliers=c['changed_suppliers'],notes='\n\n'.join(ns)))
(OUT/'impact-dispositions.json').write_text(json.dumps(dict(run=RUN,group=7,dispositions=dis),indent=2,ensure_ascii=False)+'\n')
print('records',len(rows),len(dis),'supplier interfaces',sum(len(c['changed_suppliers']) for c in work['pending_direct_consumers']))
