# Batch 16 Step 5a adjudication

Run `frontier-41-ha-dt-29`; group `batch-16`; scope batch 16 only. No agents, judging, stamps, certification, published-item edits or engine transitions.

The pre/post snapshots bind hashes, not full pre-reader item bytes. Historical unbound findings retain that limitation. This dispatch explicitly authorizes historical disposition after independent review of the current producer; it does not establish that the observed historical bytes equal the current bytes.

Sources opened: Lück, https://him-lueck.uni-bonn.de/data/ictp.pdf (author PDF, 197 pages), and Ranicki, https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf (374 pages, printed-to-PDF offset 8). Exact sections read are recorded below.

## Dependency-ordered review

### `lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold`

Read current complete proof 1.1–3.1 and all nine dependency statements. Compact A makes k(A×supp chi) compact inside U, so extension by zero is smooth and the flow complete; the assumed product tube, rather than the tubular theorem alone, supplies the trivialization. Projection dimension dim B<d supplies arbitrarily small w, and the explicit trajectory is k(a,tw); empty A/B cause no difficulty. The original compact-support/trivial-normal-bundle objections are mathematically valid historical defects, now corrected. Opened batch-1 current contract (seven citations, four derivations) and manifest: manifest still omits compact A and the smooth-closeness conclusion and thm-fundamental-theorem-on-flows dependency. Route manifest synchronization to batch 1 / Step 5b; current source proof is sound, not certified by that stale manifest.

Disposition: confirmed_fatal; obligations `reader:16:1`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D001`.

### `lem-the-orientable-double-cover-of-a-smooth-manifold`

Read all current steps 1.1–7.1, remarks, and every dependency statement, including the signed-point convention at dimension zero. The topology from local rays is a two-sheet cover; path lifting from a component proves its surjectivity, hence at most two components. Componentwise smooth structures give the cover structure. A deck transformation permutes each two-point fibre and its permutation is locally constant on the connected nonempty base. A split cover gives a smooth orientation section, establishing connectedness in the nonorientable case. Finite-sheet compactness gives closedness. Empty M correctly has empty cover and trivial deck group. The historical empty-base overclaim is valid, now corrected. Read current batch-8 contract (12 citations, nine derivations) and manifest; the manifest still falsely calls the cover connected for all connected bases and its strategy incorrectly states any cover of a compact base is compact. Route these manifest discrepancies to batch 8 / Step 5b; do not treat them as proof defects in the corrected item.

Disposition: confirmed_fatal; obligations `reader:16:7`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D002`.

### `lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels`

Read every proof step and both exact group-ring suppliers. The free Z-basis forces each signed label coefficient to vanish, or only the coefficient of h to be one. Under r≥2 no opposite pair implies one sign per label: the zero case is impossible and the monomial case would require r=1. Empty r and r=1 are excluded from the asserted pair conclusion; r=2 cannot sum to one monomial. No choice or commutativity of pi is used. Read Ranicki Corollary 7.30, printed p.160 (PDF168), and Lück §§2.1–2.2 transition, printed pp.25–27: coefficientwise pairing agrees with the source geometric application. Reader report identifies source-locator normalization only; the authored proof was retained. Risk review complete.

Disposition: reviewed_no_defect; obligations `touched:16:lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels`.

### `lem-whitehead-classes-are-represented-by-invertible-matrices`

Read every proof step and all five supplier claims, including the complete stable elementary subgroup proof. Two surjective quotient maps show every Whitehead class has one finite invertible representative; stabilize the size-zero representative or use I_1 for zero. Conversely every invertible matrix maps to the quotient and stabilization preserves its stable class. No simultaneous selections or AC are required. The general arbitrary-ring two-sided inverse interface is supplied by the stable-GL definition; no determinant or field-only rank argument is used. Checked Lück Lemma 2.2 and proof, printed pp.25–26, and Ranicki Definitions 8.1–8.6, printed pp.171–172 (PDF179–180). Reader change is source-locator metadata. Risk review complete.

Disposition: reviewed_no_defect; obligations `touched:16:lem-whitehead-classes-are-represented-by-invertible-matrices`.

### `rem-whitehead-group-construction-remains-at-owned`

Read the complete remark and its four actual algebraic suppliers. The right-module stable matrix construction, normal elementary subgroup, quotient by ±g and parity contraction definition remain AT-owned; this item introduces no alternate conventions or new Whitehead computation. The finite contraction definition requires equal parity basis sizes and states automatic IBN for group rings. The C_5 reference is a mention, not a newly computed claim. Checked Lück §2.1 and Ranicki Definitions 8.1–8.6. Untouched carrier: no routed decision is owed. Risk review complete.

No routed decision is owed for this untouched carrier; its required risk review is complete.

### `def-handle-slide-of-one-k-handle-over-another`

Read complete current definition and all five supplier claims; the band side is ∂D^(k−1)×I, which is connected for k≥3, two components for k=2, and empty for k=1. The current k=1 paragraph correctly replaces the chosen first foot by a parallel of the other second-handle foot. The framing rank n−k−1 is the sphere-normal framing modulo the band direction; no uniqueness is claimed. Band range 1≤k≤n−2 in an (n−1)-dimensional connected boundary matches the actual supplier. The historical two-side-components formula was false, now corrected. Read batch-3 contract and manifest: current definition is corrected but manifest still repeats the old component count; route its synchronization to batch 3 / Step 5b. Read Wall Theorem 5.4.5, printed pp.147–149 (PDF155–157), including r=1 disk-push interpretation.

Disposition: confirmed_fatal; obligations `reader:16:12`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D005`.

### `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle`

Read every current step, all 17 dependency statements, current batch-14 citation/boundary entries and manifest. Disk filling gives a based contraction toward the marked boundary point, and a based nullhomotopy descends to the radial quotient. B-arc changes are conjugated to the p-basepoint before multiplication. Compatible labels make equality exactly equivalent to nullhomotopy; the optional flattened smooth disk is not asserted clean or framed. The current torus graph is (1/4)sin(2πx): its values never reach a nonzero integer, and its only zeros modulo Z are x=0,1/2 with derivatives ±π/2. The two chosen arcs project to the degree-one circle, so opposite signs do not imply a filling. The original amplitude-one witness really has extra tangencies at x=1/4,3/4; confirmed historical fatal witness defect, now repaired. Manifest still carries the amplitude-one witness and old unbased contraction / untransported B-loop formula: route synchronization to batch 14 / Step 5b; these are not current proof claims.

Disposition: confirmed_fatal; obligations `reader:16:4`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D006`.

### `lem-handle-slides-preserve-the-relative-diffeomorphism-type`

Read complete current proof 1.1–4.1 and all six suppliers, plus batch-3 contract derivations/citations and manifest. Wall Theorem 5.4.5 proof, printed pp.147–149 (PDF155–157), constructs the disk push in the outgoing boundary after the other handle is attached, extends its thickening, and returns the final embedding to the old-boundary summand by shrinking the first handle near its belt. Current proof uses exactly that outgoing disk-and-band isotopy with transported full normal framing, stationary endpoints and later attaching data transported by the resulting diffeomorphism. Disjoint gluing order fixes the lower stage. Checked k=1 foot transport and the allowed codimension. The reported isotopy in the original boundary was historically false and is corrected; no current claim of that kind remains.

Disposition: confirmed_fatal; obligations `reader:16:2`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D007`.

### `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers`

Read all six current phases, remarks, all 20 dependency claims, batch-4 contract citations/derivations and manifest. The actual continuous collapse p_j(x,y)=[x] on the lower handle glues at |x|=1 and extracts its relative core coefficient. Its fibre over [0] is the belt, and the normal-core-first orientation gives the local sign of attaching tangent followed by belt tangent. The pair connector, relative quotient, degree sum and field coefficient map yield the formula. Empty fibre gives zero; k=0 is handled by signed interval endpoints rather than an invalid S^0 degree sum; k=n−1 has zero-dimensional belt. The historical cocore projection inference was invalid and is now replaced by the correct core-coordinate collapse. The manifest omits the current field qualification and explicit compatible belt orientations; route synchronization to batch 4 / Step 5b. This producer has only field coefficients in its main statement; batch-16 uses the independently stated local integral degree construction, not an illicit direct application of that global closed-manifold claim.

Disposition: confirmed_fatal; obligations `reader:16:8`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D008`.

### `prop-dual-elimination-of-top-index-handles`

Read current complete proof, all seven cited suppliers, and batch-1 current contract/manifest. The substantive reverse-zero-handle argument is valid and connecting dual (n−1)-handles come last. However current step 1.1 still asserts that every presentation has the same embedded handle bodies. A product collar has the empty list, while insertion of a cancelling pair gives a presentation with two handle bodies, refuting that sentence. The assertion is unnecessary but false, so a fatal false claim cannot be accepted as polish. A sound local correction would restrict the equality of bodies to a chosen presentation and its dual (or remove this sentence); the producer is outside batch-16 edit scope. Missing prerequisite: a corrected current producer proof/contract from batch 1. Attempted closure: checked the exact duality and no-zero-handle suppliers, which support only a chosen presentation/dual comparison. Required owner action: have batch 1 repair the sentence and its stale begins-versus-ends manifest wording, then resolve this escalation. Neither this report nor a proposed correction certifies the producer.

Disposition: escalated; obligations `reader:16:5`, `refuter:16:1`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D009`.

### `prop-relative-handle-chain-complex-of-a-cobordism`

Read all current proof steps 1.1–5.1, all 17 supplier statements, batch-15 contract and manifest. Excision across collar seams gives integral free core groups, with the correct k=0 initial collar. The connector factorization ∂_k=p_(k−1)δ_k and exactness δ_(k−1)p_(k−1)=0 prove ∂²=0; the two connectors are not claimed to be consecutive in one triple sequence. Induction and triple naturality embed H_k(W_k,M_0) as ker ∂_k; the next stage quotients by im ∂_(k+1), and higher stages do not change H_k. The local core-coordinate degree proof supplies integral incidences for relative triads; row versus transposed column matrices are explicit. Historical consecutive-triple exactness claim was invalid and is now repaired. Manifest still omits C_−1=0/∂_0=0 and the row-coordinate qualification; route synchronization to batch 15 / Step 5b.

Disposition: confirmed_fatal; obligations `reader:16:9`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D011`.

### `def-based-handle-chain-complex-over-the-fundamental-group-ring`

Read the complete Definition, all 13 dependency statements, and the actual relative-CW/finite-model interfaces. The fixed finite pair (X,K) transfers the handle presentation from a finite incoming model, so no unstated finite CW structure on M_0 is assumed. Empty incoming face uses K=empty; nonempty connected W supplies one ambient pi_1 and the induced incoming cover need not be universal. Integral lifted cellular chains acquire the right action c·g=T_(g^−1)c and one lift per relative cell gives finite R-rank, rather than using a duplicated homology coefficient. The independently described core collapse and local degree sum supply integral coefficients in each lift; the global field-only incidence supplier is contextual, not directly extended without proof. Compact attaching data meet finitely many lifted handles. Lower rows/upper columns multiply coordinate columns on the left. Changes of order/orientation/lift are monomial basis changes. Empty handle list gives zero; degree zero has d_0=0. AC_omega is explicit; arbitrary presentation/model invariance is not claimed. Checked Ranicki Definitions 8.14/8.16 and Proposition 8.17 with complete proof, printed pp.176–178 (PDF184–186). Reader repair closes missing incoming finite-model and right-coordinate/cover conventions. Risk review complete.

Disposition: accepted_repair; obligations `touched:16:def-based-handle-chain-complex-over-the-fundamental-group-ring`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D012`.

### `prop-elementary-matrix-operations-are-realized-by-handle-slides`

Independently checked current steps 1.1–3.1 and eight exact suppliers, current batch-3 contract and manifest. Substitution c_jprime=c_j+epsilon c_i gives inverse target coordinates: the unslid column changes by minus epsilon times the slid column. Upper slides act directly on rows. The integral core-collapse/local-degree calculation and the mod-two reduction justify the coefficient interpretation. The upper-slide range k+1<=n-2 is explicit; absent handle pairs assert no slide. The historical same-column addition was false; current proof repairs it. Lück Lemma 1.8 and the source handle-move conventions agree. Historical observed bytes remain unbound.

Disposition: confirmed_fatal; obligation `reader:16:3`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D013`.

### `lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation`

Independently read all four current steps, eight supplier statements, batch-15 contract and manifest, and Lück Lemma 1.23 full argument, printed pp.15–16 (PDF22–23). The actual band supplier allows q<=n-2, including q=n-2. Connected middle boundary gives a connected complement of upper core tubes. Parallel outgoing disks and their collars give an actual one-level-higher isotopy with transported framing; pair-of-pants chains add the signed relative core class. Zero coefficients and empty lists give the original sphere. The historical stricter F2 wording was an immediate citation-range gap, now corrected. No edit of this producer was made.

Disposition: confirmed_nonfatal; obligation `reader:16:10`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D014`.

### `lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence`

Read every step, all 17 prerequisite statements, Ranicki Proposition 8.17(iii) full proof, printed pp.177–178 (PDF185–186), and Proposition 8.30. The pi-one isomorphism makes the induced incoming cover connected and simply connected. Vanishing relative homology and relative Hurewicz inductively kill every relative homotopy group, with full AC explicitly inherited; covering sphere/disk lifts and Whitehead descend the equivalence. Amended step 6.1 to use the actual finite incoming model K and derive its connectedness from H0, rather than an unstated CW structure on M0. Corrected the attaching and handle normal disk factors in step 7.1 to n+1-i. Dual indices n-2,n-1 are >=3, and the orientation-twisted adjoint of an invertible two-term differential remains invertible. No Statement change or consumer repair is necessary. Reader full-AC correction is retained.

Disposition: amended_repair; obligation `touched:16:lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D015`.

### `lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy`

Read all four current steps and every actual supplier statement, plus Lück Lemma 1.22 complete proof pp.14–15 and Ranicki Theorem 7.27/Corollary 7.30 pp.157–160. Fixed right coefficients are signed label sums; equality of labels is checked in the actual middle-level group using forward and reverse handle indices >=3. Since W is connected and handles have index >=2, M0 and this middle level are connected. Coefficient pairing reduces the finite intersection count. The current q=2 statement explicitly assumes incoming injection, and the actual handle-belt complement lemma supplies clean framed disks avoiding every belt and additional 2-spheres; higher q uses codimension >=3. The arbitrary-sphere range is correctly q<=n-3; the q=n-2 two-index application is reserved for the separate reversed-handle argument. Finite diagonal families preserve already arranged spheres. Accepted the reader right-module repair together with current owner geometric-range qualification, and synchronized the owned manifest; no further mathematical edit needed.

Disposition: amended_repair; obligation `touched:16:lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy`. 

### `lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring`

Read all five steps, its twelve exact supplier statements and the complete current published lifted-cone proof. Cellular chains use the fixed finite models of the handle-complex definition. The published proof uses mapping-cylinder strong deformation retracts and based lifts, so right-linearity does not assume arbitrary deck transformations are linear. The cone-to-relative quotient kernel is Cone(1), with contraction (a,b)->(0,a); a graded section corrected using that contraction is a chain section, and composing cone contraction with section and quotient contracts the relative complex. This uses the actual split pair structure, never acyclicity alone. Full cone/split-sequence evidence checked against Lück §2.2 pp.29–31. AC_omega is retained from finite manifold model construction. The cited published section locator remains an external citation issue, separately routed as reader:16:13, not a defect in this contraction.

Disposition: accepted_repair; obligation `touched:16:lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring`. 

### `cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion`

Read all three counterexample steps and six exact suppliers. For commutative Z[C5], multiplication x->xu is right-linear and is inverted by u inverse. The right-linear contraction remains an abelian contraction after forgetting coefficients; this proves the actual written false claim, independently of augmentation. The odd-to-even q=1 convention gives +[u], while augmentation gives differential -1 and contraction -1. The supplied unit inverse and commutative determinant witness make [u] nonzero modulo all ±t powers. Both underlying and augmented complexes were distinguished; the reader repaired the original conflation. Checked Ranicki Example 8.8 pp.173 and Lück equation 2.7 p.28.

Disposition: accepted_repair; obligation `touched:16:cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion`. 

### `lem-handle-elimination-by-trading-a-pair`

Independently read all three current steps, all nine supplier statements, batch-15 contract/manifest and Lück Elimination Lemma 1.16 complete proof (printed pp.8–9, PDF15–16). Current hypotheses explicitly require full framed attaching-region isotopies. Create the pair after the old upper handles, transport its lower full attachment to the common-part alpha, reorder the genuinely disjoint old upper attachments, and then cancel the selected lower handle against the new upper handle. Later data travel by the stated diffeomorphisms. q=n-2 still leaves valid pair indices q+1,q+2 in dimension n+1; disconnected stages use the affected component. No decomposition of arbitrary isotopy into lower-level slides is assumed. The historical unframed and isotopy-decomposition gaps were fatal and are now repaired outside this scope.

Disposition: confirmed_fatal; obligation `reader:16:11`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D016`.

### `lem-group-ring-modification-lemma-for-embedded-spheres`

Read all five current steps and fifteen supplier statements, plus Lück Lemma 1.23 complete pp.15–16. Connected W with no 0/1-handles forces connected incoming collar; surgery in codimension >=3 keeps N connected. Reverse and remaining forward indices >=3 identify pi1(N) with pi1(W). Removing upper attaching cores of codimension >=2 preserves connectedness and surjects on pi1, allowing every prescribed monomial label. Relative arc embedding uses 2<n, and avoiding q-spheres uses 1+q<n, including q=n-2. Parallel copies bound genuine outgoing disks disjoint from the common-part starting sphere, so the band-sum isotopy is geometric and carries any frame. Lifts T_gamma-inverse give right addition d[varphi_j] x_j, not left multiplication. C_q rank is the lower-handle count, and empty upper list/zero/negative coefficients are handled. Reader rebuild is sound; no further item edit.

Disposition: accepted_repair; obligation `touched:16:lem-group-ring-modification-lemma-for-embedded-spheres`. 

### `lem-relative-handle-complex-torsion-agrees-with-the-inclusion`

Read all four proof steps and ten exact supplier claims. All cellular notation uses the fixed finite incoming/total models of the definition. Apply the pairs formula to (i,id):(K,K)->(X,K): the relative source is zero and its cone is exactly the relative handle complex with the original bases, while the boundary identity is simple with zero torsion. The formula yields contractibility for any incoming equivalence, not only an h-cobordism. Group-ring IBN gives equal parity basis counts. In adjacent degrees q,q+1, odd-to-even convention is (-1)^q[A]; q=2 gives +[A], q=3 gives -[A]. Reader explicitly retained that sign and propagated AC_omega. Ranicki Proposition 8.19 p.178 and Lück exact-sequence sum argument pp.29–31 agree. No additional repair needed.

Disposition: accepted_repair; obligation `touched:16:lem-relative-handle-complex-torsion-agrees-with-the-inclusion`. 

### `def-whitehead-torsion-of-an-h-cobordism`

Read complete Definition and eight actual supplier statements. Connected h-cobordism and the chosen finite presentation/model give a bounded contractible finite right group-ring complex; IBN supplies equal parity ranks, contraction independence supplies a well-defined contraction class, and quotienting by ±g gives Wh(pi). The definition keeps H indexed and makes no arbitrary-presentation comparison. Two-term parity is (-1)^q[A] and matches the inclusion for associated models. AC_omega is explicit and inherited only from finite smooth/CW inputs. Checked Ranicki Definition 8.18 and Proposition 8.19 p.178. Reader hypothesis propagation is sound.

Disposition: accepted_repair; obligation `touched:16:def-whitehead-torsion-of-an-h-cobordism`. 

### `lem-duality-eliminates-top-and-cotop-handles`

Read all three current steps, all seven supplier statements, the exact low-index supplier step 5.1 and batch-15 contract/manifest. Reversal merely exchanges face labels; it is not a diffeomorphism exchanging arbitrary faces. To obtain both exclusions in one presentation, eliminate original 0/1, reverse to maximum n-1, and apply the actual reverse low-index procedure, which deletes 0/1 and introduces only 3. Since n>=5, that procedure preserves maximum n-1. Reversal back leaves exactly indices 2 through n-1. This repairs the historical invalid combination of independent presentations. The outside manifest still describes composing independently found diffeomorphisms, so route synchronization to batch 15/Step 5b; no producer edit or certification was made. Lück Normal Form Lemma 1.24 pp.16–18 supports the successive dual procedure.

Disposition: confirmed_fatal; obligation `reader:16:6`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D017`.

### `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`

Read every step and seventeen exact prerequisite claims. Actual slide isotopy takes place after the second handle is attached, whose parallel attaching sphere bounds the outgoing disk; no original-boundary isotopy is asserted. Lifting the band gives e_j+e_i(±g). Right coordinate columns transform A by P inverse A Q, so both supplier/target elementary operations have zero K1 class. Cancelling-pair pivot ±g isolates an elementary two-term summand up to elementary chain basis changes, and the sum formula preserves contraction torsion. Reorderings, orientation/lift changes vanish only after the Wh quotient as stated. The 1-handle case uses the published foot replacement convention, and finite sequences suffice. Scope stays at listed moves, with no arbitrary-presentation assertion. Accepted the reader repaired inverse basis action and correct outgoing-boundary isotopy. Published cell-slide formatting finding is separately recorded.

Disposition: accepted_repair; obligation `touched:16:lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`. 

### `lem-product-h-cobordisms-have-zero-whitehead-torsion`

Read all three steps and nine suppliers. The projection height has no critical points and the chosen relative finite pair is (K,K), so its relative complex, contraction and parity matrix are zero/empty and its torsion is zero. This is only the model presentation H0; arbitrary product presentations are not compared. Ranicki Proposition 8.21 p.179 confirms this route. Added nonempty to M0 in Statement/Given: under the repository empty-connected convention, the old hypothesis allowed an empty base with undefined pi1(M0). This is the smallest domain correction. Direct consumers are checked at their ordered review; none may use the omitted empty case. The reader source normalization was retained.

Disposition: amended_repair; obligation `touched:16:lem-product-h-cobordisms-have-zero-whitehead-torsion`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D018`.

### `prop-realization-of-whitehead-torsion-by-h-cobordisms`

Read all four steps and twelve exact prerequisites, Ranicki Proposition 8.22 p.179 complete proof, and duality Proposition 8.17 pp.177–178. Standard cancelling upper spheres, rather than the 2-handle belts themselves, provide framed generators. Null attaching circles leave pi unchanged, and full actual belt-complement isomorphism supplies arbitrary band labels. Signed monomials assemble column i into sum_j e_j a_ji in right coordinates. Dimensions n>=5 give 4-n<0 for disjoint column spheres and 3-n<0 for band-core avoidance. Glued copy/band framings supply actual 3-handle attaching regions. Invertible A contracts both relative complexes, with orientation-twisted adjoint at the reverse end; full AC is stated for Hurewicz/Whitehead. Differential degree 3 gives +[A]. Added nonempty to the incoming M hypothesis because pi1 of the allowed empty-connected manifold was undefined; the matrix example is its sole direct consumer and is checked at its level. Reader coefficient/choice repair and current owner framed-generator repair are retained.

Disposition: amended_repair; obligation `touched:16:prop-realization-of-whitehead-torsion-by-h-cobordisms`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D019`.

### `rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned`

Read complete remark and all five exact suppliers. Fixed-H handle torsion equals the inclusion torsion for its associated finite models, so the AT-owned iff criterion applies. It does not assert equality across arbitrary presentations or arbitrary CW models, and introduces no second simple-homotopy definition. Source-locator changes are metadata; the published criterion final-tag formatting issue is reader:16:15 and remains separate. Lück Theorem 2.21 pp.37–38 gives the same finite-CW criterion. No mathematical repair needed.

Disposition: reviewed_no_defect; obligation `touched:16:rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned`. 

### `rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign`

Read complete oriented/nonorientable remark and its three prerequisite statements. In common transported Wh group, reversal gives conjugate-transpose involution and sign (-1)^boundary dimension. Lück Lemma 2.16(2) pp.32–33 is the oriented identity; §3.1 pp.50–51 replaces g inverse by w(g)g inverse in the nonorientable setting. Ranicki Proposition 8.17(iii) pp.177–178 gives the handle adjoint calculation. The reader added the essential oriented qualification and orientation-twisted caveat; these are correct. This is a recorded source formula, without an independently claimed proof.

Disposition: accepted_repair; obligation `touched:16:rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign`. 

### `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined`

Read all four proof steps and thirteen exact prerequisites. The comparison identifies fixed-presentation class with the inclusion torsion for the fixed associated finite models; AT independence handles compatible cover/basepath transport and cellular representatives. Contraction independence is algebraic; monomial/permutation changes vanish in Wh and elementary handle modifications were independently checked below. No inference to arbitrary presentation or arbitrary finite-model invariance occurs. The change since the reader pre-snapshot is source-locator metadata only, as its report records. Checked Lück §2.2 pp.30–33 and Ranicki Proposition 8.19 p.178. Risk review complete.

Disposition: reviewed_no_defect; obligation `touched:16:thm-whitehead-torsion-of-an-h-cobordism-is-well-defined`. 

### `ex-a-group-ring-handle-matrix-and-its-torsion-class`

Read all five verification steps and nine supplier claims. C5 unit/nonzero class and q=1 abstract complex contraction use the exact AT computation. The explicit free scalar C5 action on S5 supplies nonempty compact connected smooth Hausdorff second-countable quotient with cover charts; S5 is simply connected and deck uniqueness gives pi1=C5. Complex-linear rotations preserve sphere boundary orientation. Thus the realization supplier nonempty/oriented/full-AC hypotheses hold, and its arbitrary prescribed matrix clause realizes the exact 1x1 (u), with degree-3 torsion +[u]. Corrected the undefined S^p in step 2.1 to S5. No Statement change; the realization consumer needs no further repair. Read Ranicki Example 8.8 p.173 and Proposition 8.22 p.179.

Disposition: amended_repair; obligation `touched:16:ex-a-group-ring-handle-matrix-and-its-torsion-class`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D020`.

### `lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex`

Read all four steps, sixteen actual prerequisite claims and the complete handle-belt complement proof. For q<=n-3, incoming injection follows from h-cobordism plus later indices >=3; the supplier now has precisely this range. At q=n-2 the arbitrary attaching sphere complement is not assumed injective: these actual attaching spheres are the reversed 2-handle belts, whose full complement has an isomorphic pi1. Exchange sheets to move each original 2-dimensional belt using that handle complement, avoid all other attaching spheres and 2-belts, then use the inverse auxiliary ambient isotopy on only the original attaching sphere. H inverse(A) intersection B equals H inverse(A intersection H(B)), so the same pair disappears with all other data fixed. Signs survive exchange since 2(n-2) is even; labels invert with compatible whiskers. Finite coefficient pairing leaves the single diagonal intersections. Equal-index reorderings make each designated cancellation consecutive; cancelling and carrying remaining data gives the empty presentation, including c=0. Checked Ranicki 7.27–7.30 pp.157–160. Reader right-module changes and the owner endpoint repair are mathematically sound; full normal-form range is retained.

Disposition: amended_repair; obligation `touched:16:lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex`. 

### `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`

Additional consumer-driven amendment: the normal-form construction also uses full attaching isotopies with later data transported. Added that move explicitly to the invariance Statement and proved it in step 3.1: the isotopy filtration comparison sends each oriented lifted core generator to the corresponding one and commutes with cellular boundaries, hence gives identical based complexes. This follows from the already declared attaching-isotopy supplier F4; no arbitrary presentation or unframed isotopy claim was added. Checked the direct consumers actual uses: the well-definedness theorem, normal-form, diagonalization and handle-slide example use the listed-move invariance, so extending the list invalidates none of them. Their current proofs are reviewed in their ordered scope. The earlier inverse-basis and outgoing-disk evidence above remains in force.

Disposition: amended_repair; obligation `touched:16:lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D021`.

### `lem-h-cobordisms-admit-two-index-normal-form-presentations`

Read all four steps and every original cited prerequisite. Independently checked Lück Lemmas 1.21–1.24 complete pp.12–18, and Ranicki Proposition 8.31 pp.183–184. Low 1-handles are traded using a framed embedded null disk after the 2-handles; added the common-part avoidance of upper attaching circles by 1+1<n. For r=2 through q-1, contraction and C_(r-1)=0 give sum_j d[varphi_j] x_j=e, and modification/homology preserve the full framed higher-level triviality required by elimination. The largest such r is n-3, within the corrected arbitrary-sphere range. Reverse elimination indices r<=n-q-1 create original indices n-r-1>=q, and dual 1 trades create original n-2>=q, preserving the entire q=n-2 endpoint. Augmentation of the two-term isomorphism proves equal finite ranks without a field-rank argument over a noncommutative ring. Removed unused/overrestricted citations to the simply-connected duality and integer middle-matrix items, and removed the currently escalated top-elimination producer: the proof supplies its own general dual argument using handle duality. Its escalation remains open independently. Corrected the F3 unit to right notation. Explicit attaching-isotopy invariance was added to the earlier owned move lemma so every actual transformation is covered. No normal-form Statement change or withdrawal.

Disposition: amended_repair; obligation `touched:16:lem-h-cobordisms-admit-two-index-normal-form-presentations`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D022`.

### `lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves`

Read all four current steps and fifteen exact suppliers. Wh-zero means stable K1 class equals a finite sum of ±g unit classes, represented by a finite diagonal D; finite identity padding puts (A+I)D inverse in a finite elementary group. Target relifts/orientations change right-column matrix to D inverse B, also stably elementary by normality. Right multiplication by e_ij(r) is column j plus column i r. The modification supplier with upper handle j omitted is applicable: retained/omitted upper indices q+1>=3 leave pi unchanged, f is in the common part, and its finite monomial framed bands realize upper slides, including q=n-2 where their codimension is two. Applying the inverse factors yields identity at stabilized size c+b, with stabilization retained through geometric cancellation. No unstabilized elementary-generation claim or incorrect direct core-to-belt transfer is made. AC_omega and zero-size possibility are explicit/inherited. Checked Lück Lemma 1.27 pp.19–20 and Ranicki Proposition 8.32 pp.184–185. Reader corrected range, inverse order and stable size; current proof is sound.

Disposition: accepted_repair; obligation `touched:16:lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves`. 

### `ex-handle-slides-change-the-matrix-but-not-whitehead-torsion`

Read all three verification steps and seven supplier statements. New lower basis columns P give inverse target action P inverse A; on right-module matrices it is row i minus r times row j, with r on the left of row coefficients. The explicit 2x2 identity/upper-unitriangular witness differs, and invertibility proves every nonzero signed-monomial slide changes A. The elementary class vanishes, hence multiplying by the two-term parity sign preserves torsion. A single slide uses one monomial; finite group-ring sums require finitely many slides. The move-invariance supplier extension to attaching isotopies does not alter this actual use. Reader inverse-coordinate correction is accepted.

Disposition: accepted_repair; obligation `touched:16:ex-handle-slides-change-the-matrix-but-not-whitehead-torsion`. 

Consumer-driven clarification: the vanishing theorem uses normal form from its given arbitrary H. Read the complete current Morse correspondence, constructive rearrangement and zero-handle spanning-tree proofs. The rearrangement consists of level isotopies and swaps after the crossing spheres are made disjoint; zero-handle absorption is a geometric 0/1 cancellation. Added disjoint-attachment commutation to the owned move-invariance list and its identity-on-core-cell proof. The normal-form first step now starts from the given H using these exact procedures, with the two direct Morse supplier dependencies and full F1 explanation. This closes the every-presentation passage without asserting arbitrary-presentation invariance. Removed the extraneous simply-connected integer-matrix citation from the vanishing theorem. The original external top-elimination escalation remains open.

### `thm-vanishing-torsion-implies-product-cobordism`

Read all four steps and eleven original supplier interfaces. The oriented h-cobordism transfers the orientation to its outgoing face. Constructive normal form now applies to its given arbitrary H, using verified Morse rearrangement into disjoint commutations/attaching isotopies, 0/1 cancellations, and the framed trades already checked; the owned invariance lemma explicitly covers those moves. At q=2 torsion equals +[A], so Wh-zero gives stabilized diagonalization, group-labelled Whitney cancellation and the empty product presentation. n>=5 gives valid indices and all complement hypotheses. Removed the redundant simply-connected integer middle-matrix citation from F2/deps: the right group-ring differential and parity are supplied by the based complex and torsion definition. Checked Lück Lemma 1.27 pp.19–20 and Ranicki 8.31–8.34 pp.183–185. The proof applies to every finite H without pretending arbitrary presentations share the same class.

Disposition: amended_repair; obligation `touched:16:thm-vanishing-torsion-implies-product-cobordism`. 

Explicit nonempty domain amendment to the single-group-ring h-cobordism carriers: `def-whitehead-torsion-of-an-h-cobordism`, `lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring`, `lem-relative-handle-complex-torsion-agrees-with-the-inclusion`, `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`, `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined`, `lem-h-cobordisms-admit-two-index-normal-form-presentations`, `lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex`, `lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves`, `thm-vanishing-torsion-implies-product-cobordism`, `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes`, `thm-smooth-s-cobordism-theorem`. The repository permits empty connected manifolds; the pi1/basepoint construction requires nonempty W and hence nonempty M0 for an h-cobordism. All direct item/reference consumers were computed from current files and lie within this batch; their actual nonempty/based uses are preserved. One missing-domain row per carrier is appended (D030–D040); prior repair rows and uncertainty remain.

### `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes`

Read all three steps and eight actual supplier claims. Wh(pi)=0 makes every presentation class zero; a presentation exists by the full two-index normal form, so one suffices for productness. No arbitrary-presentation independence is used. Wh(1)=0 follows by Euclidean elementary reduction of primitive columns and induction, using Bezout and the division algorithm; permutations contribute only [-1], so determinant classifies K1(Z) and the ±1 quotient vanishes. n>=5, orientation and AC_omega are stated. Amended the domain to nonempty W, so the group-ring class is defined even under the repository empty-connected convention; all consumers are in batch 16 and their nonempty h-cobordism/simply-connected uses are verified. Reader orientation/choice propagation retained.

Disposition: amended_repair; obligation `touched:16:cor-h-cobordism-theorem-when-the-whitehead-group-vanishes`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D039`.

### `thm-smooth-s-cobordism-theorem`

Read all three steps and eight prerequisite claims. Productness relative to M0 pulls the empty height-function presentation back to W, giving zero relative handle complex and zero class. Conversely the given H with zero class is covered by the arbitrary-H vanishing theorem checked above. Quantifier is existence of a presentation, not equality of all presentation torsions; both iff directions and n=5 endpoint are valid. Oriented, AC_omega and explicit nonempty W hypotheses match the proof route and the amended product supplier; M0 is nonempty by incoming equivalence. No four-dimensional or orientation-free assertion is introduced. Lück Theorem 1.1(1) p.1 and its proof via Lemma 1.27/2.16 pp.19–20,33 support the result.

Disposition: amended_repair; obligation `touched:16:thm-smooth-s-cobordism-theorem`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D040`.

### `ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction`

Read all three verification steps and twelve exact supplier statements. Simply connected means nonempty, so M0 and W meet every newly explicit domain condition. The orientation-cover contradiction supplies an orientation on M0 and simply-connected W (collars extend its interior orientation to the boundary); M1 inherits the compatible boundary orientation. Euclidean/Bezout reduction yields Wh(1)=0, so each presentation class vanishes. The now-reviewed normal-form supplier supplies one finite presentation, and the oriented criterion supplies productness. No equality of arbitrary presentation classes is needed. The repaired orientation-cover producer nonempty qualification is met, so its historical empty-cover finding has no current impact here. n=5 and all choice hypotheses are checked. Reader orientation and finite-presentation evidence repair is accepted.

Disposition: accepted_repair; obligation `touched:16:ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction`. 

### `lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone`

Read complete current published cone proof and every direct supplier statement. Its two mapping-cylinder strong deformation retracts yield compatible equivariant right-linear lifted homotopies; the finite cone argument is valid. The source metadata still says Lück section 3.1 pp.27–31. The exact author PDF places algebraic torsion in section 2.2 pp.27–31, with the lifted equivalence paragraph across pp.30–31; section 3.1 starts at printed p.50 and concerns Poincare duality. Thus the historical and current citation defect is confirmed fatal, but published text is read-only in this dispatch. Missing closure is a corrected published citation carrier, not a new mathematical lemma. Attempted closure: independently read author PDF sections 2.2 and 3.1, locating the actual statement and checking the current local cone proof. Required owner decision is authorization/disposition of the published title/locator correction to section 2.2; the open defect is retained. This escalation does not reject the mathematically sound current cone argument.

Disposition: escalated; obligation `reader:16:13`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D023`.

### `lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices`

Read full current eight-step cell-slide proof and all nine declared dependency statements. Finite pinch-and-whisker column additions are compared by homotopic attaching collars after omitting the changed upper cell. Stable normality supplies finite padding for left operations, and the wedge-relative homotopy decomposition removes extra pairs without asserting unstabilized normality. This routed finding is solely final-step syntax: 7.1 still ends with the tombstone before the justification tags. SCHEMA requires tags followed by tombstone. Confirmed nonfatal and recorded for the published owner; no mathematical refutation and no published edit. Minimal repair moves that one tombstone after the tags and runs proof-layout.

Disposition: confirmed_nonfatal; obligation `reader:16:14`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D024`.

### `thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes`

Read full four-step current proof and all nine declared dependencies. The forward direction uses simple-zero; the reverse uses cellular approximation, the simple target cylinder inclusion, composition formula and source inclusion geometric converse. Retraction transports Wh isomorphically and finite component sequences concatenate; the empty pair case is vacuous. The routed issue is precisely final step 3.1, whose tombstone still precedes its tags, violating SCHEMA trailing-chip syntax. Confirmed nonfatal, recorded for the published owner without editing or claiming repaired mathematical content. Move the tombstone after the final tags; proof-layout then checks it.

Disposition: confirmed_nonfatal; obligation `reader:16:15`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D025`.

### `whitehead-torsion-and-the-s-cobordism-theorem`

Read the complete A-page prose and item-order frontmatter, checked both batch manifests and current owned carriers. The summary accurately states fixed-presentation torsion and elementary-move invariance, the oriented boundary-dimension>=5 product criterion, AC_omega for geometric inputs, and full AC for realization/Hurewicz. Its normal-form/modification/homology/Whitney chain is valid with current corrected right-column conventions and the separate reversed actual-handle endpoint. No arbitrary-presentation torsion equality is claimed. Both A/B item lists preserve scope and stable IDs; no added page or withdrawal. The reader change propagated the full Choice requirement to page prose; accepted as supported mathematical hypothesis repair. External published citation escalation and formatting follow-up remain listed above, without claiming whole-run closure.

Disposition: accepted_repair; obligation `page:16:whitehead-torsion-and-the-s-cobordism-theorem`. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D026`.

Current producer follow-up: `prop-dual-elimination-of-top-index-handles` has concurrently been corrected. Its step 1.1 fixes one chosen reversed presentation; the false universal sentence is gone. All four corrected steps, seven exact interfaces and current producer contract are independently sound. The previous reader/refuter escalation D009 remains open because no owning batch-1 resolution record is present; this report does not apply the old counterexample to the corrected proof. Normal form now supplies its own dual procedure and removes this unused prerequisite. Required next action: batch-1 owner records the completed repair and durable escalation resolution.

Final exact-interface correction in F6: the cited orientation-cover theorem is stated for boundaryless smooth manifolds, while W has boundary. Push the supplied collar coordinates inward to obtain int(W) homotopy equivalent to W; the interior is therefore simply connected, its orientation follows from the exact cover theorem, and its collar-product orientation extends to W. This is an elementary collar derivation with no new result or choice assumption. The Statement and every consumer use remain unchanged. No appeal to the boundaryless theorem on W itself is retained. Ledger: `frontier-41-ha-dt-29-5a-batch-16-D056`.

## Final carrier comparison and checks

The pre/post snapshots were compared to current bytes. They supply immutable raw hashes, not missing historical observed bytes. Current item hashes below are evidence only; no decision subject hash or judge stamp was written. The synchronized manifest and contracts amend the carrier even when the authored item body matches the reader postimage.

| Item | Pre raw SHA-256 | Reader post raw SHA-256 | Current raw SHA-256 | Current item relation |
|---|---|---|---|---|
| `def-based-handle-chain-complex-over-the-fundamental-group-ring` | `62159e6c1ff2f043464e9b74cfd94a0867d4c9a815e4d52cb062f2f687340fc7` | `b568cc11f9dfa31fc9b79b6017c9103a4b5679e5ecdca16b683a73ad5db26aad` | `b568cc11f9dfa31fc9b79b6017c9103a4b5679e5ecdca16b683a73ad5db26aad` | reader postimage |
| `lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring` | `d0c151110cc6c1b1ccf161b64b889c34dd980c1a4ecf02f8d12d25075ef49def` | `0e8098d32345c548f0f9a2ff2aa30ffcd484e2ae49b835883318ae26b4ae1497` | `4623aa91adbb9ca0c060a7f956143a6b74618898383b98f387e2ba3ab62323b2` | locally amended or concurrently corrected |
| `lem-relative-handle-complex-torsion-agrees-with-the-inclusion` | `1f3254cc3d2d1c857bcbc046d380ecbb9e302a8797eb40482b10155d2dec09c9` | `210f875f02c32a91a73521f789877d2e06100b0e0386a1a26fe1164c47407971` | `e5dcb005fe218e48906df00a5da879700c7339ebb006cc8b8e1d4653536c4a81` | locally amended or concurrently corrected |
| `def-whitehead-torsion-of-an-h-cobordism` | `ae82b25081cc88260ed41b8665e00443035484052073717a28bee352a4258ccb` | `9fcc15d35d44502f5b35e5cc6555988b9a25c5e48bb17c7d10336614afdfa301` | `498da3ffdc522ace3f45b664f906c0adfae4e2e9854e63fe3ce94720cfa5ca8a` | locally amended or concurrently corrected |
| `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion` | `4540b24acf515083762aa70f5f6e538f97a5c776c9c821b52cc160c5fe8d6a6f` | `8aba8d34311244cf1d7178ee5c9e0954c70e2ee5a2a8d449e65d5dbca8750cdc` | `bdc8ab2270aba1bbbc66b68d3795a8ca609e880a7efaf05fa6d8ce557f907b5f` | locally amended or concurrently corrected |
| `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined` | `7919b2ea53335d2ac2fbd243dd9515a41593162364ccf1833fd9c568540141f9` | `3e73a596c9cbbbf66161cb98358764ffde9a5e5d14bcfb68f025d4cd70c67d16` | `a7079bc2efe2a9502ca06f52b78e88a92b233996d7eaf5709cfa5f780735a00b` | locally amended or concurrently corrected |
| `lem-product-h-cobordisms-have-zero-whitehead-torsion` | `322fe38afb3c23719d97d1369b81d5014dd01af51e24803f3286537895f25cb0` | `1e48ebb819a1667171397b14131dd924f888eb00efb04f31ecf26779bf97778a` | `10610ab51dd6b35b9ac926218760b7ae4170c6305f617583dacdc67fc7918ad4` | locally amended or concurrently corrected |
| `lem-h-cobordisms-admit-two-index-normal-form-presentations` | `236156806faab0d31f26766c9579fb8d08ef4cef630908fc07a9a6b9967c0a3f` | `0f64d00b189210066a204bab23df456cc0121a0ad1d266a7650638ddd3782736` | `346db389f615b51507483e36d48421129b9a2b2df4132db9874e11bb1cc8ed60` | locally amended or concurrently corrected |
| `lem-group-ring-modification-lemma-for-embedded-spheres` | `92f92af872ae01a04f925faf892ec5d8a009b7c96afd9f455ca68538f50833cf` | `b4326595657af5eeb6fdcff02812ac0ef4ac7872a19b79dad7571c6526979cd3` | `b4326595657af5eeb6fdcff02812ac0ef4ac7872a19b79dad7571c6526979cd3` | reader postimage |
| `lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels` | `f7c49ccb4db38e79140ba9d661c7acb2082f5718fabb51fba1b515273c077d14` | `0cc69716db01fd15dc16c9a9bbc386b19a9f031b3427a050716b011f576a23e1` | `0cc69716db01fd15dc16c9a9bbc386b19a9f031b3427a050716b011f576a23e1` | reader postimage |
| `lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy` | `8d3653ed3fec9bc5b22c45a5cc3764ddb49094bd67aee303f3d244b4f7cb3205` | `74d3d930d1beae22319b59fc66922e8d8530e043140af968dc893c2e5fa66d93` | `74d3d930d1beae22319b59fc66922e8d8530e043140af968dc893c2e5fa66d93` | reader postimage |
| `lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves` | `be105516e5184a7a2b8248338cd29417bd27a2c55add846fe755775a6dd677de` | `b45672d3566dc7d43c99097b5ed0ded2ea315be5a18e4783bf1a174a0c7e7b34` | `1e9c308c16d5060646b52a7aecf6cec4ee6d8dbf1083fb007dd63fae51b2081f` | locally amended or concurrently corrected |
| `lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex` | `6bec1e8281bb6f67b7271d69e887cbe274037bb7e6c516277feb94e12c091d3e` | `54a20e53576faf1bccd0fb48d9858a01c4e1ce432a97124193b5f1ce4c4e7609` | `099b72ef1b34496e52b37b9007dde4c823712166f9b0b125a61ff785f85bbc53` | locally amended or concurrently corrected |
| `lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence` | `a44f79093bc370276f5e82d24c4c82efd892261f3e056f3bcdbe364af5f47ed3` | `62621e54a8624104949348601075ef5efefbbbaef9ca16ffa6f77a7177d7b82b` | `b6327d13a6fc9e3af8d1ebd1cbeec378452db4d6e4b7879852d746000c226252` | locally amended or concurrently corrected |
| `thm-vanishing-torsion-implies-product-cobordism` | `fab2fc8ddf5cee6bc5569c39b7eb6f38e2049ccd12ed1f00e050693f1c34eafe` | `16b5e9c137a73a376f9d369b7b9af64d2586e5e858668995c11db4ebdb86bedd` | `e79ca92808d659fe212f6a065306fbfc7002d5437814a9dd2b8267f9d48b652f` | locally amended or concurrently corrected |
| `thm-smooth-s-cobordism-theorem` | `fa818f41bd549ae96b41e7a015a65afea7736228471b3adefc37913e3c77a493` | `96eb0265d9fce5cd862719c46b5aab93142936ad2e5e202ed8af89ce9c617bb5` | `16f9ca3413d1eb7df7c0101696f17f148e9d70189602bdf734ff5b67dec2d6b0` | locally amended or concurrently corrected |
| `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes` | `3562e1e2cf39ce24ec34e9be78a1d463dd3d2aab8dbd40f1e509d8be03434804` | `a22d06971251e4fe1a85137a015388dc24808f09c4fd98d3611239205979f4c2` | `f9330e07c6c22fcb520293da3b44d73ad69fd8a66cf67deead50c4230dfe2d2b` | locally amended or concurrently corrected |
| `lem-whitehead-classes-are-represented-by-invertible-matrices` | `8029c8d9d8b8713d2fd9183b3df5a50502eae0345a0050e761cd489e4a8b79f2` | `f6df25b901902244599b71006a5b96796aba37ff4f30978bd3d011b41dee1e82` | `f6df25b901902244599b71006a5b96796aba37ff4f30978bd3d011b41dee1e82` | reader postimage |
| `prop-realization-of-whitehead-torsion-by-h-cobordisms` | `62340fabc52b16f4afa6b4e991c14411568bbfa6c90e2a8d8e7d26406c443fe7` | `d772dc309b352ea141ba8dc1bea206616c906e54208bfdbc230fac8c426580cf` | `000708f0d4eff2e39069e229a5e3dac268a8741d6a254a5309e66e35036e67f6` | locally amended or concurrently corrected |
| `rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned` | `496049f4dc6789f72b5821b7a0d7d87ab5900829e45545dc49c33a0954c7f999` | `6ede1f6d497b9ddbf5899bf88c273d84ff5cf2c523d0cde08d74a36520093af3` | `6ede1f6d497b9ddbf5899bf88c273d84ff5cf2c523d0cde08d74a36520093af3` | reader postimage |
| `rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign` | `22e801384b89399fcbc1dd6bf63c87c1122b50ad2aafac6c24ccc413af905dc9` | `f1e2ffd86365e3914b9be116862cd9f460fa881e562db0cfdb90e058962be001` | `f1e2ffd86365e3914b9be116862cd9f460fa881e562db0cfdb90e058962be001` | reader postimage |
| `rem-whitehead-group-construction-remains-at-owned` | `4394d9f5d8aaccbc4fe2d4f8cc6b8b21087266ad3bbb9fc2820bee5f36b82ef8` | `4394d9f5d8aaccbc4fe2d4f8cc6b8b21087266ad3bbb9fc2820bee5f36b82ef8` | `4394d9f5d8aaccbc4fe2d4f8cc6b8b21087266ad3bbb9fc2820bee5f36b82ef8` | reader postimage |
| `ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction` | `f8689b1e6f6d8fddb91718611aa5785bb57764699e8121d1e8a92d78ab6d6633` | `cfe8d734199409a7e89ad4a282acece635964f9c2472e28a8cd401e956935d3d` | `f9994f33194af7b16deb173fa61b5c27f33218c63afdbdf9dbf4921c7f8a2acf` | locally amended or concurrently corrected |
| `ex-a-group-ring-handle-matrix-and-its-torsion-class` | `9b97d15943099ecb284d1455f688e29d59703b1d7f875c01de0681aed9306f66` | `50f145ce552060d2cb78af4cd1798d5a2a2109b0fcacd65b86c896ee1fdcdeee` | `f637f8155d24f6d726e21534d1907457c469cf9bb44f80fb83c0888019b9a03c` | locally amended or concurrently corrected |
| `ex-handle-slides-change-the-matrix-but-not-whitehead-torsion` | `13f557385b7267c1b425924778f75fbde5b516701d216fc4e76b7a35f793c350` | `88c43054ffd75bfb9141854497facca77e05f4b5dc1c812fc161e55ef3d65914` | `88c43054ffd75bfb9141854497facca77e05f4b5dc1c812fc161e55ef3d65914` | reader postimage |
| `cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion` | `6ea79a264a0879739fc59e9086e6cdf79156ee8ab759bbb55a483a6c36fd45e2` | `6a7a8fb6ea4f824fe74bff18f91c34690a2af77bf71be4fbf7a532a87f7df1fc` | `6a7a8fb6ea4f824fe74bff18f91c34690a2af77bf71be4fbf7a532a87f7df1fc` | reader postimage |

Completed continuity rechecks cover the coefficient-pairing and finite stable-matrix lemmas, AT convention remark, compact-support sphere proof, orientation-cover proof including signed dimension zero, torus label witness, actual outgoing disk-and-band slide proof, integral incidence collapse and relative-chain connector argument. Their earlier decisions and historical limitations are retained. The original outside manifest alerts are not producer repair certificates: current statements remain unsynchronized in batches 1 (sphere), 8 (orientation cover), 3 (slide definition) and 4 (incidence); batch-14 label, batch-15 relative-chain/elimination/duality statements now match current sources. Their owners/Step 5b must reconcile the remaining manifest drift.

The batch-3 producer `prop-elementary-matrix-operations-are-realized-by-handle-slides` has a sound corrected source proof but its current manifest still says the slid lower handle changes its own belt column by addition. The actual inverse target-basis transformation changes the other column by subtraction. This exact stale manifest finding is routed to the batch-3 owner/Step 5b, with the historical source finding retained as reader:16:3; the manifest is not proof certification. The batch-15 integer modification manifest now agrees with the full current proof and connected-middle-boundary condition.

Final local checks (all exit 0): strict proof contracts, 26/26 items, zero errors or warnings; risk-report with --require-reviewed, all 25 HIGH/CRITICAL items have specific complete reviews; scoped graph, 1,935 reachable dependencies, no missing target or cycle; reflow on the locally changed carriers (no textual change); precheck, 15 proof-bearing items checked and one Definition not applicable; rendercheck, 25 touched items plus the A page, 26 files with valid renderer YAML/KaTeX; final batched proof-layout, 25 items, 84 steps, zero defects. The initial focused contract check found two missing direct Morse dependency declarations, which were added and rechecked successfully; no mechanical defect row was created. The final checks are local validation, not a judge verdict or engine gate. No item was edited after the final batched proof-layout.

Exactly 42 obligations are decided: 25 touched carriers, one A page, 15 reader findings and one refuter finding. The untouched AT-convention remark has a complete risk review and owes no decision. Every completed repair has repair_confidence 1 and closed owned rows; reader/refuter decisions retain exact producer/consumer routing and immutable snapshots. Published formatting findings D024/D025 are nonfatal-recorded and remain pending in the canonical A-P index. Published citation D023 remains open/escalated. Prior dual-elimination escalation D009 remains open despite the now corrected proof pending explicit owner resolution. The original historical observations and unbound-byte uncertainty are preserved. Both reports and decisions are written; no agents, judge/stamps, certification, publication or engine transition were initiated.

Handoff: the engine owns current decision hashes and its gate battery. Batch-1 owner must durably resolve D009 for reader:16:5/refuter:16:1; the published owner must correct/disposition D023 and the two final-tag findings. Outside producers own the remaining manifest discrepancies listed above. The narrowed arbitrary-sphere homology endpoint remains explicitly qualified in current content; the full approved two-index h-cobordism normal-form and cancellation range q<=n-2 is proved by actual reversed-handle complements, so no page or two-index claim is withdrawn.
