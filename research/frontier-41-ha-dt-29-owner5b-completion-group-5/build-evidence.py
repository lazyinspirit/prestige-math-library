import json,re,hashlib,pathlib
root=pathlib.Path('.'); out=root/'research/frontier-41-ha-dt-29-owner5b-completion-group-5'
p=json.load(open(root/'research/frontier-41-ha-dt-29-owner5b-completion-worklists/group-5.json'))
reviewer='owner-helper-step5b-completion-group5'
def raw(i):return (root/'items'/f'{i}.md').read_text()
def sha(i):return hashlib.sha256((root/'items'/f'{i}.md').read_bytes()).hexdigest()
def body(i):return raw(i).split('---',2)[2]
def paras(i):return [x.strip() for x in re.split(r'\n\s*\n',body(i)) if x.strip() and not x.strip().startswith('##')]
def claim(i):
 t=body(i); m=re.search(r'## (?:Statement|Definition|Example|Statement refuted)\n(.*?)(?=\n## |\Z)',t,re.S)
 return m.group(1).strip() if m else t.strip()
def compact(t):return re.sub(r'\s+',' ',t).strip()
# Exact local proof locations for dependencies retained without an inline wikilink.
local={
'cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation':'2.1 4.1',
'cex-an-immersed-whitney-disk-in-a-four-manifold-does-not-give-the-smooth-trick':'4.1',
'cex-middle-dimensional-surgery-can-change-an-intersection-form':'1.1 1.2 5.1',
'cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly':'1.1 2.1',
'def-local-whitney-move':'Whitney move along a clean framed bigon',
'def-whitehead-torsion-of-an-h-cobordism':'For fixed $H$',
'def-whitney-disk-and-clean-framed-whitney-disk':'boundary',
'ex-a-product-cobordism-is-an-h-cobordism':'3.1',
'ex-handle-slides-change-the-matrix-but-not-whitehead-torsion':'1.1 2.1',
'ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery':'1.1 2.1',
'ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold':'3.1',
'ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing':'1.1 2.1',
'lem-duality-eliminates-top-and-cotop-handles':'2.1 3.1',
'lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere':'3.2',
'lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range':'1.1 2.1',
'lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex':'1.2 2.1',
'lem-group-ring-modification-lemma-for-embedded-spheres':'1.2 2.1 3.1',
'lem-h-cobordisms-admit-two-index-normal-form-presentations':'1.1',
'lem-handle-elimination-by-trading-a-pair':'1.1 2.1 3.1',
'lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion':'2.1',
'lem-homology-lemma-realizes-handle-bases-by-isotopy':'1.1',
'lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation':'2.1 3.1',
'lem-opposite-local-signs-give-the-compatible-whitney-circle-framing':'1.1',
'lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range':'3.1',
'lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle':'1.1 1.2',
'lem-product-h-cobordisms-have-zero-whitehead-torsion':'1.1',
'lem-stable-normal-data-supplies-framings-below-the-middle-dimension':'1.1 4.1',
'lem-the-homotopy-effect-of-a-surgery-killing-a-relative-class-below-the-middle':'1.1 2.1',
'lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves':'2.1 3.1 4.1',
'lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses':'1.1 2.1',
'lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically':'1.1 2.1 2.2',
'lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism':'2.1',
'prop-homology-effect-of-surgery-away-from-the-middle-dimensions':'1.1 2.1 3.1',
'prop-relative-handle-chain-complex-of-a-cobordism':'1.1 3.1 5.1',
'prop-surgery-below-the-middle-dimension-improves-connectivity':'1.1 4.1',
'prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class':'1.1',
' thm-high-dimensional-whitney-trick':'1.1',
 'thm-high-dimensional-whitney-trick':'1.1',
 'thm-vanishing-algebraic-intersection-can-be-realized-by-geometric-disjunction-in-the-simply-connected-stable-range':'1.1 2.1',
 'thm-whitney-move-removes-a-cancelling-pair-of-intersections':'1.1',
 'thm-whitney-trick-in-the-two-dimensional-borderline-case':'1.1 2.1 3.1',
}
context={
'cex-an-embedded-sphere-with-nontrivial-normal-bundle-is-not-valid-framed-surgery-data':'The actual datum is the diagonal S2 in the closed oriented S2xS2. AC is explicit; the two transverse tangent-field zeros each have positive determinant. Only nontriviality of its rank-two normal bundle and the framing equivalence are needed.',
'cex-middle-dimensional-surgery-can-change-an-intersection-form':'The local product gluing identifies the surgery with S4. The two factor classes give the rank-two hyperbolic form under AC; p=q=2 is used only as a degree allowed to change, not as a below-middle killing application.',
'prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class':'The target here is a closed smooth manifold. The chosen trace bundle extension B is an input for the chosen F; it is not inferred from a normal framing and nullhomotopy alone. The p=0 trace framing is orientation-compatible.',
'lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle':'The proof supplies CW models and the specified basepoint path. The dual cell has q>=p+2, so its inclusion is an isomorphism through degree p. This licenses the trace-induced quotient, only for p>=1.',
'lem-stable-normal-data-supplies-framings-below-the-middle-dimension':'The actual cancellation is p<q. The proof compares the stabilized actual frame with the supplied stable frame and constructs B over the finite-CW-target trace locally; it does not apply the smooth-target proposition outside its scope. For p=0 determinant transport is explicitly assumed.',
'prop-surgery-below-the-middle-dimension-improves-connectivity':'The proof treats module degree p>=2, relative degree two after fundamental-group identification, and the p=0 coset case separately. Finite generation comes from finite CW chains and relative Hurewicz, not a Noetherian group-ring assertion. The p=0 target bundle is compatibly oriented.',
'lem-the-homotopy-effect-of-a-surgery-killing-a-relative-class-below-the-middle':'The relative-map cell supplier is applied at dimensions p+1 and q>=p+2. This preserves relative map groups through p+1 from the outgoing face; no stronger absolute inclusion isomorphism in degree q-1 is claimed. Low-degree normal closure and pointed cosets remain explicit.',
'lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range':'The source is a disk with a clean embedded collar, m>=6>4, and incidence dimensions 2-b,2-a are negative. Relative embedding keeps that collar; sufficiently small subsequent perturbations preserve embeddedness.',
'lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses':'The obstruction loop is in SO(m-2). A sheet summand of rank a-1>=2 surjects on it, with complement b-1>=2. The proof changes the admissible choice, fixes corner values, and never extends an arbitrary prescribed full frame.',
'lem-a-clean-framed-whitney-bigon-has-an-adapted-tube':'The tube is constructed for the supplied clean framed bigon with its fixed corner extensions and quotient frame. Its two sheet inverse images are the separate E and H blocks; this is the precise local-model interface.',
' thm-whitney-move-removes-a-cancelling-pair-of-intersections':'The adapted tube supplies separate first- and second-sheet models. The compactly supported v-flow acts on the first image alone; e=h=0 at a possible intersection reduces the endpoint count to g(u)<f(u).',
' thm-high-dimensional-whitney-trick':'Both sheet dimensions are at least three. The null circle is given; clean disk and an adjustable admissible extension feed the local move, fixing other intersections.',
' thm-whitney-trick-in-the-two-dimensional-borderline-case':'The shifted circle lies in X minus B. For r<=2 complement injection contracts it there; disk embedding uses m>=5. The partial frame has complement rank s-1>=2, and r=1 uses its empty-frame interpretation.',
'lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy':'The generic lemma is used only for 2<=q<=n-3. At q=2 the incoming injection is explicit; equal labels are actual middle-level labels because both forward and reverse trace maps induce pi1 isomorphisms.',
'lem-homology-lemma-realizes-handle-bases-by-isotopy':'The generic range is 2<=q<=n-3. The q=2 construction uses the stated incoming injection and the full belt complement; simple connectivity of the outgoing level alone is not substituted for that condition.',
'lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex':'The q=n-2 endpoint is proved using actual original attaching spheres as belts of reversed 2-handles. The inverse auxiliary isotopy moves only A_i, and its tube avoids all other A_l,B_l; this does not use an arbitrary-sphere endpoint of the generic homology lemma.',
'lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically':'The full two-index range is preserved. k=2 uses the actual belt-complement lemma; k=n-2 uses original attaching spheres as reversed 2-handle belts and applies the inverse auxiliary isotopy to the selected attachment.',
'lem-h-cobordisms-admit-two-index-normal-form-presentations':'Only generic homology indices r<=n-3 are used in either direction. Low elimination and reverse elimination preserve the earlier lower bound; the q=n-2 normal form does not invoke the unproved arbitrary-sphere endpoint.',
'lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices':'The elimination loops stop at k-1 and at dual n-k-1, both at most n-3. The q=2 injection follows from the incoming h-cobordism map. Framed triviality one level higher comes from modification, not zero homology.',
'lem-group-ring-modification-lemma-for-embedded-spheres':'Labels are right coefficients: the joining path selects T_gamma^{-1} of the parallel sphere. Core path avoidance uses 1+q<n with q<=n-2. The higher-level disk and band give a framed isotopy and the ambient pi1 remains identified.',
'lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves':'The matrix uses lower rows and upper columns. A new target basis D gives D^{-1}(A plus I); right elementary multiplication adds column i times r to column j. Omit the changed upper handle and retain the other one for the framed modification; all upper indices are at least three.',
'ex-handle-slides-change-the-matrix-but-not-whitehead-torsion':'The direct right-module coordinate calculation gives A prime=P^{-1}A. The inherited integer upper-row matrix convention is not used to infer a group-ring formula. Elementary class zero and the parity sign give equal torsion.',
'prop-realization-of-whitehead-torsion-by-h-cobordisms':'AC is explicit. Standard framed cancelling spheres and labelled framed bands realize every prescribed invertible matrix; n>=5 makes the finitely many 2-spheres disjoint. Incoming and outgoing pi1 maps are isomorphisms, and adjoint-transpose invertibility supplies the second-end criterion.',
'ex-a-group-ring-handle-matrix-and-its-torsion-class':'The target lens space is closed connected oriented with fundamental group C5. The realization supplier explicitly permits the prescribed one-by-one unit matrix, not merely an unspecified representative of its class; AC is retained.',
'lem-duality-eliminates-top-and-cotop-handles':'Simultaneous index exclusion uses low-eliminate/reverse/low-eliminate/reverse. The second low procedure introduces only index three and preserves the upper bound n-1>=4, so both bounds hold in one presentation.',
'lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism':'The null loop is filled in N2 because the correct forward and reverse trace maps induce pi1 isomorphisms. The disk has an embedded prescribed collar and target dimension n>=5. Its tube supplies framed triviality; only index-three handles are introduced.',
'prop-relative-handle-chain-complex-of-a-cobordism':'The chain construction uses the actual index filtration, excision for the core classes, triple connector factorization, and its local projection-to-core calculation. The integer matrix has upper rows; this is explicitly distinguished from the group-ring lower-row convention.',
'lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring':'The fixed finite CW pair is used throughout. A lifted cellular homotopy inverse gives a contractible cone; a degreewise split quotient with contractible kernel gives the relative contraction. The proof does not infer contraction from acyclicity.',
'lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence':'The pi1 isomorphism makes the incoming lifted subspace connected and simply connected. Contractibility gives upstairs relative homology zero; relative Hurewicz and Whitehead are used under explicit AC. The 2/3-handle consequence reverses to indices at least three and an invertible adjoint transpose.',
}
# Remove accidental leading spaces in dictionary authoring.
context={k.strip():v for k,v in context.items()}
context.update({
 'thm-smooth-s-cobordism-theorem':'Both directions retain the oriented n>=5 hypotheses and existential finite presentation. Product uses its empty presentation; the converse applies vanishing-torsion sufficiency to the given presentation, without asserting arbitrary-presentation invariance.',
 'thm-vanishing-torsion-implies-product-cobordism':'Normalize the given presentation at q=2 using only the listed torsion-preserving moves. Algebraic zero yields a unit diagonal; the group-labelled cancellation supplier then gives the empty presentation. The oriented hypothesis is retained.',
 'thm-whitehead-torsion-of-an-h-cobordism-is-well-defined':'Auxiliary choices are compared within the fixed associated CW structure. Only the listed elementary handle modifications compare different presentations; no invariance under arbitrary presentations is consumed.',
 'def-based-handle-chain-complex-over-the-fundamental-group-ring':'The earlier relative-CW supplier provides a finite incoming model and one relative cell per handle. The induced incoming cover need not be universal unless its pi1 map is an isomorphism. The right action T_g^{-1} and lower-row convention are fixed explicitly.',
 'def-whitehead-torsion-of-an-h-cobordism':'The homotopy-equivalent incoming face identifies pi1. A contraction of the fixed presentation complex is supplied, and the parity is (-1)^q. Only fixed-presentation auxiliary independence is recorded.',
 'cor-h-cobordism-theorem-when-the-whitehead-group-vanishes':'The oriented n>=5 normal form supplies one finite presentation. Its class is zero because Wh(pi)=0; the arbitrary-finite-presentation sufficiency theorem gives a product without needing comparison of all presentations.',
 'ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction':'The proof verifies orientability using orientation covers and the incoming homotopy equivalence. Wh(1)=0 kills each indexed class; one finite normal-form presentation licenses the oriented criterion.',
 'lem-relative-handle-complex-torsion-agrees-with-the-inclusion':'This comparison is for the fixed associated finite CW structure. The relative cone is the relative complex, and the sum formula compares it with the absolute inclusion cone. No arbitrary model-change invariance is asserted.',
 'lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion':'Each listed elementary modification is checked on the fixed based complex: a cancelling pair is an elementary expansion, a slide is a lifted monomial basis change, and a transported attaching isotopy preserves the relative core bases. The result compares only this explicit move list.',
 'lem-product-h-cobordisms-have-zero-whitehead-torsion':'Only the empty product presentation is used. It has zero relative complex and the empty parity matrix, hence zero indexed torsion; no equality with arbitrary product presentations is inferred.',
 'cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold':'AC is explicit for the upstairs Hurewicz/Whitehead route. Puncturing gives simply connected faces and a homology equivalence; finite CW models make each end a homotopy equivalence. Boundary dimension n>=5 then permits the h-cobordism theorem and collar regluing.',
 'cex-a-homology-cobordism-need-not-be-an-h-cobordism':'The attaching loop source is S1 disjoint union S1 and the target boundary has dimension five, so relative embedding gives disjoint loops. Positive GL(4) paths frame their oriented normals. Dual cell indices at least three preserve pi1; the resulting nontrivial group contrasts with the sphere end.',
 'cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem':'This is an explicitly recorded dimension-four boundary counterexample. The local high-dimensional theorem is only compared with its n>=5 hypothesis; it is not applied at n=4. The nondiffeomorphic smoothly s-cobordant pair is the cited recorded source example.',
 'thm-smooth-simply-connected-h-cobordism-theorem':'The actual chain is ordered presentation, simultaneous low/high elimination, two-index normal form, integer diagonalization, endpoint-aware Whitney realization, cancellation, and the empty product. Every step retains n>=5 and AComega.',
 'thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary':'The empty list gives the incoming collar directly. The critical-free proof extends f over signed collars and uses a cutoff normalized gradient, so no boundaryless closed-band theorem is misapplied to W.',
 'lem-middle-handle-pairs-with-one-geometric-intersection-cancel':'Acyclicity makes the single-point pairing bijective. Reordering puts each matched pair consecutively; the cancellation tube avoids other belts and transports later attachments, preserving the remaining configurations.',
 'lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group':'Deleting actual belts retracts to the incoming boundary minus attaching cores of codimension at least three. The q=2 incoming injection and reversed indices at least three give complement injection. The disk is filled in the full belt complement, not obtained from simple connectivity alone.',
 'lem-handle-elimination-by-trading-a-pair':'The two supplied full framed isotopies and the common attaching-region complement permit creation, disjoint commutation, and consecutive cancellation. The ambient extension source is the full same-dimensional tube, with stationary endpoint convention.',
 'lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation':'A core-parallel attaching copy bounds an actual outgoing disk one level higher. Embedded framed bands add the signed class and shrink across that disk, proving framed isotopy; zero homology is not substituted for this geometric triviality.',
})
context.update({
 'def-local-whitney-move':'The definition specifies a clean framed bigon as input and an auxiliary compact-support flow applied to its first sheet; existence and cancellation belong to the adapted-tube and local-move supplier, not to this definition.',
 'def-whitney-disk-and-clean-framed-whitney-disk':'The admissible boundary data are adjustable partial frames with fixed corner compatibility. Nullhomotopy, clean embeddedness, and extension of a specified full frame remain separate conditions; the zero-rank convention is only local data.',
 'def-middle-handle-intersection-matrix-of-an-h-cobordism':'The datum is the simply connected two-index presentation, with an orientation constructed by path transport. Its integer intersection matrix has upper rows and acts on row vectors; a transverse representative is read after the indicated attaching isotopy.',
 'def-dual-surgery-sphere':'The product handle fixes the dual sphere of dimension q-1 and its D^(p+1) normal frame. Only the outgoing-face identification and the endpoint q=1 product interpretation are used; no connectedness of the surgered face is presumed.',
 'def-p-surgery-on-a-smooth-m-manifold':'The full product embedding, not a bare normal-frame homotopy class, fixes the boundary gluing. Its image is interior and q>=1; collar gluing preserves the old boundary and is independent of smoothing by the local seam comparison.',
 'def-surgery-trace-cobordism':'The closed starting manifold gives a compact cylinder and the index p+1 handle. This definition fixes the core, cocore and belt data; face identification and relative-cell models are explicitly owed to the upper-boundary theorem.',
 'def-h-cobordism':'The definition asks for both actual face inclusions to be homotopy equivalences in a compact collared triad of dimension at least two. It does not replace that condition by ordinary homology equivalence.',
 'def-degree-one-normal-map-for-the-surgery-program':'The target finite CW complex carries its own bundle and top homology generator; the stable isomorphism and total degree-one equality are data. Smooth-target tangent reformulation is confined to manifold targets and preserves the AComega normal-bundle assumption.',
 'cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly':'Two positive local signs have integer sum two. The proof uses invariance of the oriented count to obstruct an isotopy removing only that pair; the high-dimensional Whitney theorem is contrasted with its opposite-sign hypothesis, not invoked for same signs.',
 'cor-mod-two-evenness-does-not-by-itself-supply-a-whitney-move':'The two-positive-point counterexample has even mod-two count and nonzero integer count. This is only a necessary-data warning: evenness supplies neither opposite signs, null circle, nor an admissible clean framed disk.',
 'cex-an-immersed-whitney-disk-in-a-four-manifold-does-not-give-the-smooth-trick':'The witness is an immersed disk for the trefoil. A smooth proper embedded replacement would give the rationally acyclic double cover and its square-order boundary, contradicting order three. It is explicitly a disk-cleaning obstruction, not invented Whitney sheet data.',
 'cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation':'The joining tube takes a prescribed generator t through the connected-sum neck. The two sheets are S3, so their path changes cannot kill t; compatible labels are 1 and t. Ambient dimension six gives the required arc avoidance and framing, but no disk can contract t.',
 'ex-a-local-whitney-move-in-euclidean-space':'The model has a=b=1 and hence empty normal blocks. Its local framed-disk data are supplied explicitly; the flow comparison is g(u)<u^2-1, applied to the axis while the graph is held fixed.',
 'ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold':'The actual dimensions are a=b=3 in simply connected S6, exactly the stable threshold. The explicit sphere construction gives one positive and one negative intersection; the avoiding arcs and clean/framed disk feed pair removal.',
 'ex-a-product-cobordism-is-an-h-cobordism':'The two face retractions are the explicit linear product homotopies. The compact product has dimension at least two and empty presentation; the later simply connected theorem is only a consistency check under n>=5.',
 'ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery':'The framed knot tube has p=1,q=2 and fixes the meridian-longitude gluing of two solid-torus regions. The boundary trade is k=2 in dimension four. General homology bounds are explanatory rather than a below-middle killing application.',
 'ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing':'The product frame glues the two disk-factor boundary regions into the rounded boundary of D^(p+1)xD^q. The reversal supplier is applied only for connected starting products; p=0 is handled directly rather than invoking its connectedness hypothesis.',
 'ex-zero-surgery-on-the-circle':'This is p=0,q=1. Two chosen framed intervals fix the four-point identification; the square boundary trade and seam gluing verify the specific resulting one-manifold. There is no pi0-group claim.',
 'lem-a-normal-summand-of-rank-at-least-two-surjects-on-the-framing-loop-obstruction':'Projection to the first N-r columns gives a loop in a Stiefel space with complement r>=2. Its relative smooth disk filling and explicit complement transport reduce the loop to the SO(r) block, fixing the prescribed basepoint arc.',
 'lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range':'The choice-free connectivity clause uses complement rank N-k. The Whitney clause first extends E in V_(a-1)(R^(m-2)) with complement b-1>=2, then chooses H; this supplies an admissible choice rather than an arbitrary full boundary class.',
 'lem-opposite-local-signs-give-the-compatible-whitney-circle-framing':'The two opposite signs make endpoint partial frames lie in the same oriented component. Interval transport and a smooth SO(a-1) path match them at the fixed corners; the disk-normal rank is m-2, not the rounded circle-normal rank.',
 'lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial':'For p<q the added trivial-frame map to V_k(R^(q+k)) extends over a ball by the choice-free connectivity clause. Explicit complement projection transport then trivializes E; no triviality of an arbitrary orthogonal complement is inferred.',
 'lem-relative-hurewicz-and-general-position-produce-surgery-spheres':'The target can remain a finite CW complex. Only the source sphere is smoothed and embedded, with m>=2p+2; the supplied target nullhomotopy pulls its target bundle back over a ball. A finite projection construction supplies the stable trivialization without a strong-AC bundle-homotopy theorem.',
 'prop-h-cobordisms-admit-adapted-ordered-handle-decompositions':'The excellent pair supplies the initial presentation. Rearrangement and self-indexing give their own adapted field and common-index levels; the original pair is retained for the first statement clause. Compact modifications preserve collar-extension completeness.',
 'thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold':'The p+1 handle is interior-index in dimension m+1, and its reverse has index q. The explicit cylinder-cell homotopy fixes the indicated face and includes collar paths; raw upper core boundaries are not falsely placed in the lower face.',
 'thm-surgery-is-reversed-by-dual-surgery':'Remove the full framed glued product and reglue D^q x S^p by the same overlap map. Factor exchange restores the original tube, including q=1. The reverse trace uses the product presentation and smoothing comparison.',
 'thm-vanishing-algebraic-intersection-can-be-realized-by-geometric-disjunction-in-the-simply-connected-stable-range':'Compactness of one sheet and closedness of the other give finitely many points. Opposite-sign pairs have null circles in the simply connected ambient manifold; each high-dimensional move fixes the other germs and preserves the surviving signed sum.',
})
pair_context={
 ('ex-handle-slides-change-the-matrix-but-not-whitehead-torsion','def-middle-handle-intersection-matrix-of-an-h-cobordism'):'The older integer middle-matrix definition is a retained non-load-bearing reference: F1 and Proof 1.1 instead use the group-ring lower-row/right-module convention directly. Its simply connected scope is not asserted for this example.',
 ('ex-handle-slides-change-the-matrix-but-not-whitehead-torsion','prop-elementary-matrix-operations-are-realized-by-handle-slides'):'The integer slide formula is non-load-bearing for the current group-ring computation. Proof 1.1 derives P inverse A from right coordinates, and F2 supplies torsion preservation. No integer formula is promoted to a noncommutative group-ring statement.',
 ('lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves','def-middle-handle-intersection-matrix-of-an-h-cobordism'):'The integer simply connected matrix is only retained context. F4 uses the based group-ring complex with lower rows; Proof 2.1 and 3.1 derive its basis transformation and right column additions directly.',
 ('lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves','prop-elementary-matrix-operations-are-realized-by-handle-slides'):'The old integer operation proposition is not load-bearing. Proof 3.1 uses the group-ring modification supplier with one upper handle omitted, proving the right elementary column operation for every finite group-ring coefficient.',
 ('lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves','lem-handle-slides-act-by-elementary-basis-change-on-handle-chains'):'The integer homology slide identity is retained context; Proof 3.1 supplies the lifted group-ring modification and its right coefficient explicitly. It does not infer a group-ring basis formula solely from this integer lemma.',
 ('lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex','def-middle-handle-intersection-matrix-of-an-h-cobordism'):'F2 also cites the integer middle matrix as context, but its load-bearing column convention comes from the based group-ring complex. The simply connected integer definition is not used to define the nontrivial-group matrix.',
 ('lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion','prop-elementary-matrix-operations-are-realized-by-handle-slides'):'The unlinked integer proposition is retained context. F2 and Proof 2.1 calculate the lifted monomial basis change and P inverse A Q directly; torsion zero is supplied by the Whitehead basis-change lemma.',
 ('prop-relative-handle-chain-complex-of-a-cobordism','lem-a-handle-decomposition-gives-a-relative-cw-complex'):'This retained CW comparison is compatible but not needed in the current filtration proof: Proof 1.1–4.1 derives the relative chain homology directly from core-pair excision and triple sequences.',
 ('lem-duality-eliminates-top-and-cotop-handles','prop-dual-elimination-of-top-index-handles'):'The older top-index-only result is compatible retained context; current Proof 1.1–3.1 instead applies the stronger low-index procedure to the reversed h-cobordism and proves simultaneous exclusions explicitly.',
}

# Clause evidence is retained in full below; notes quote compact concrete slices.
def evidence(a,b):
 ps=paras(a); direct=[x for x in ps if '[['+b in x]
 facts=[x for x in direct if re.match(r'\[(F|L|A)\d+\]',x)]
 fs=[re.match(r'\[([^]]+)\]',x).group(1) for x in facts]
 uses=[x for x in ps if re.match(r'\d+\.\d+',x) and any(re.search(r'\b'+re.escape(f)+r'\b',x.split('[')[-1]) for f in fs)]
 if not direct:
  sel=local.get(a,''); nums=re.findall(r'\d+\.\d+',sel)
  uses=[x for x in ps if any(x.startswith(n+' ') for n in nums)]
  if not uses:uses=[x for x in ps if sel and sel in x]
  if not uses: uses=[claim(a)]
 source=(facts or direct or uses)[0]
 loc='; '.join(fs) or ('Proof '+', '.join(re.match(r'(\d+\.\d+)',x).group(1) for x in uses if re.match(r'\d+\.\d+',x))) or 'Definition/Statement clause'
 proof_loc=', '.join(re.match(r'(\d+\.\d+)',x).group(1) for x in uses if re.match(r'\d+\.\d+',x))
 # The excerpt after a wikilink is usually the exact consumed Fact; preserve its content.
 sq=compact(source)
 tq=compact(claim(b))
 reason=pair_context.get((a,b),context.get(a))
 if not reason:
  # A concrete source clause is the justification for the simple remaining definitional/example uses.
  reason='The consumer retains this concrete datum and conclusion in the quoted clause; the cited interface is used in this displayed setting.'
  numbered=[x for x in ps if re.match(r'\d+\.\d+',x)]
  if uses:reason='Actual application: '+compact(uses[0])
  elif numbered:reason='Local verification: '+compact(numbered[-1])
 note=f'{a}: {loc}'+(f', applied in Proof {proof_loc}' if proof_loc else '')+f' consumes {b}: "{sq[:1100]}". Current supplier '+('Definition' if b.startswith('def-') else 'Statement/recorded clause')+f': "{tq[:1800]}". '+reason
 if not direct:note+=' This is an unlinked retained dependency: the proof location above supplies the use/context; no historical carrier bytes or native review claim is inferred.'
 return dict(from_id=a,to_id=b,consumer_sha256=sha(a),supplier_sha256=sha(b),source_facts=direct,source_proof_clauses=uses,supplier_current_clause=claim(b),note=note)
# Supplier-first topological order within the assigned source scope.
owned=set(p['write_scope_item_ids']);done=set();ordered=[]
def visit(i):
 if i in done:return
 done.add(i)
 for dep in p['manifest_entries'][i]['entry'].get('deps',[]):
  if dep in owned:visit(dep)
 ordered.append(i)
for i in sorted(owned):visit(i)
rank={i:j for j,i in enumerate(ordered)}
cache={}
def ev(a,b):
 if (a,b) not in cache:cache[a,b]=evidence(a,b)
 return cache[a,b]
rows=[]
for e in sorted(p['pending_edges'],key=lambda e:(rank[e['from']],e['to'])):
 x=ev(e['from'],e['to']);rows.append(dict(kind='edge',from_sha256=x['consumer_sha256'],to_sha256=x['supplier_sha256'],verdict='accurate',defect_ids=[],note=x['note'],reviewer=reviewer,**{'from':e['from'],'to':e['to']}))
d=[]
for c in sorted(p['pending_direct_consumers'],key=lambda c:rank[c['id']]):
 ns=[ev(c['id'],s)['note'] for s in c['changed_suppliers']]
 d.append(dict(id=c['id'],status='still-licensed',reviewer=reviewer,consumer_sha256=sha(c['id']),changed_suppliers=c['changed_suppliers'],notes='\n\n'.join(ns)))
(out/'edge-verdicts.jsonl').write_text(''.join(json.dumps(x,ensure_ascii=False)+'\n' for x in rows))
(out/'impact-dispositions.json').write_text(json.dumps(dict(run=p['run'],group=5,dispositions=d),indent=2,ensure_ascii=False)+'\n')
(out/'interface-checks.json').write_text(json.dumps(dict(run=p['run'],group=5,reviewer=reviewer,checks=list(cache.values()),supplier_first_source_order=ordered),indent=2,ensure_ascii=False)+'\n')
(out/'defect-proposals.json').write_text('[]\n');(out/'carrier-deltas.json').write_text('[]\n')
print('edges',len(rows),'consumers',len(d),'distinct interfaces',len(cache),'hashes current')
print('fallback contexts:',[i for i in p['write_scope_item_ids'] if i not in context])
