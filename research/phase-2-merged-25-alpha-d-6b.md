# Group d — Step 6B

## Batch 8

Local authored-content review only; no independent certification or scheduling transition. Batch 9 is unassigned. Decisions are checkpointed after each item. No authored-content repair or shared-plan amendment was needed. Source: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf, definitions 1.1–1.2 and results 1.8–1.11, 2.1–2.6. Checked compact Hausdorff test domains and CG source hypotheses against the authored arguments.

### def-compactly-generated-conventions-for-based-homotopy

Accepted. The Definition separates CG from WH and uses compact Hausdorff tests, consistently with Strickland definitions 1.1–1.2. The mapping subbasis uses test images, avoiding an unsupported identification with arbitrary compact subsets. Cubical classes on arbitrary spaces are explicitly separated from CGWH categorical constructions. No choice selection occurs.

### lem-kification-compact-tests-and-finite-constructions

Accepted. Proof 1.1–5.1 checked: identical compact tests give idempotence and the CG-source mapping criterion; quotient finality proves CG quotients; closed-test restrictions prove closed subspaces. The cylinder proof uses a closed interval neighbourhood and projection of a compact closed set onto Hausdorff K, including endpoints. Product embeddings follow from the CG mapping property on the closed subspace. Empty and zero-dimensional domains are covered. Dependencies F1–F8 have the stated compactness, quotient and coordinate roles; Strickland 1.8–1.11 and 2.1–2.6 agree.

### lem-compact-test-exponential-law-and-products-of-quotients

Accepted. Proof 1.1 evaluation uses a closed neighbourhood in the compact Hausdorff test domain, making the test-image subbasic open valid even without WH. Step 1.2 applies the tube lemma only to compact fibres and lifts via the CG-source property. Double currying gives inverse continuous mapping-space maps. Step 3.2 factors the transpose through q and explicitly constructs the inverse on Q times Y; the relation retains the Y coordinate. This avoids circular use of WH quotient separation and makes both quotient factors in 4.1 legitimate. Empty products and no choice of fibre representatives checked.

### lem-weak-hausdorff-diagonals-and-closed-quotients

Accepted. Steps 1.1 and 2.2 use compact Hausdorff regularity/normality on test domains and WH closed images; disjoint fibre neighbourhoods prove test images Hausdorff. Conversely the closed diagonal pulls back to a compact equality set whose projection is closed in the Hausdorff test domain, proving WH by CG. The quotient equivalence uses the already proved product-of-quotients lemma. Factor diagonals and evaluation diagonals justify products and mapping spaces; basepoint/endpoint constraints are closed. Empty mapping domain and coproduct checked. No ordinary-product diagonal assumption is substituted.

### lem-compact-generation-preserves-the-cylinder-and-closed-pushouts

Accepted. The four clopen components of the pushout relation in 1.2 include exactly the graph, transpose graph, diagonal and equal-f-image relation. Closedness follows from closed A and the WH k-diagonal, then the reviewed quotient criterion. Step 3.1 tests every closed subset to prove the embedding, and the pullback topology follows from the ordinary subspace property. Closed tracks and finite unions satisfy the hypotheses, including A empty and A=X. The statement does not require the attaching map to be injective.

### lem-interval-exponential-law-and-quotient-homotopies

Accepted. The ordinary compact-open evaluation proof uses compact interval neighbourhoods including endpoints; tube lemma establishes transposition for arbitrary X. Quotient descent applies to all targets, with the explicit Sierpinski characteristic-function argument proving the ordinary quotient topology. The CG specialization uses the established cylinder and exponential results, and closed based/endpoint subspaces follow from WH of the target. Relative homotopies preserve equations pointwise; no locally compact hypothesis is imposed on X or Y.

### def-higher-homotopy-group-by-based-cubes

Accepted. The quotient is by boundary-fixed homotopy, supplied by the declared equivalence-relation result. The first-coordinate traversal, inverse and unit match the based-loop convention in degree one. Degree zero is explicitly only a pointed component set. No group laws are assumed before their suppliers.

### lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes

Accepted. The affine half-cube pieces agree at the constant seam, preserve every exterior face, and paste on a finite closed cover. Applying the same construction to homotopies preserves the seam for all parameters. The n=1 case removes the unused coordinates without changing the proof; other fixed-face coordinates follow by permutation.

### thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one

Accepted. Checked all explicit formulas: the associativity reparametrization maps breakpoints 1/2,3/4 to 1/4,1/2; inverse contraction has matching middle values and constant exterior boundary. Unit reparametrizations fix endpoints and are jointly continuous with the remaining coordinates. The four-quarter interchange identity has the correct ordering and common unit, giving commutativity only for n>=2. Dependencies provide pasting and the group definition; the formulas supply the argument rather than merely citing loop laws.

### prop-cubical-and-spherical-models-of-higher-homotopy-agree

Accepted. Coordinatewise v/(1-|v|) is an interior homeomorphism with boundary tending to infinity; the displayed inverse stereographic formula gives the based sphere identification with chosen compatible orientation. Quotient-times-I justifies descent of actual homotopies for arbitrary targets. Positive rescaling of both half-cubes makes the specified pinch agree with concatenation. Degree one and the collapsed-boundary point satisfy the same formulas.

### prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant

Accepted. Postcomposition carries boundary-fixed homotopies to boundary-fixed homotopies and commutes pointwise with concatenation. The formula H(a(u),t) is a based homotopy because H fixes the target basepoint along the entire source basepoint track. Functorial composition and based inverse homotopies yield inverse group maps, with a pointed bijection only in degree zero. No claim for unbased homotopies is used.

### def-relative-homotopy-group

Accepted. The distinguished face is last-coordinate zero; the other faces are fixed. Relative homotopy is an equivalence relation by time reversal/pasting. For n=1 paths run from variable A endpoint to x0, consistent with the later boundary map; no relative pi0 or relative pi1 group is asserted. With A a singleton the conditions become exactly absolute cubical conditions.

### lem-relative-cubical-disk-model-and-compression

Accepted. The explicit half-space compactification maps the distinguished face to the disk boundary and J to its marked point, including n=1. Quotient-times-I supplies model equivalence on homotopies. In 3.1 v=z/max(1/2,r) and h=min(1,2-2r) are continuous at r=0 and 1/2; R_s fixes the rim, and its endpoint lies in top union side. Composing with a relative nullhomotopy thus compresses into A with full boundary fixed. Conversely convex contraction to b stays in A and fixes b; both implications are proved without cofibration assumptions on A.

### lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees

Accepted. Coordinate 1 is fixed on both faces exactly for n>=2; coordinate 2 is independently available exactly for n>=3. The reviewed unit/reversal/associativity homotopies preserve the distinguished last-coordinate face in A, making their reuse valid. Restriction commutes with concatenation for n>=2 and records only the initial component for n=1. Pair homotopies preserve the required conditions, establishing naturality in all stated degrees.

### thm-long-exact-sequence-of-relative-homotopy-groups

Accepted. Each eligible term is checked in 1.1–1.5. Compression into A fixes the full boundary for the absolute kernel. The collar formula has common seam h, parameters in range, denominator at least 1/2, and a continuous extension at lambda=t=0 because both arguments approach h. It converts a null boundary into an absolute cube. An X-nullhomotopy supplies the next relative cube. The degree-one path prefix moves only its initial endpoint in A; the component tail is exact without terminal surjectivity. All group assertions respect the already established degree ranges.

### def-cofibration-and-homotopy-extension-property

Accepted. The universal HEP quantifiers include arbitrary compatible initial maps and homotopies with no uniqueness. Based HEP fixes the basepoint track throughout, and well-pointedness uses the unbased singleton inclusion. These are kept distinct and the CGWH categorical convention is explicit.

### prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip

Accepted. The universal target R is CGWH by attachment along the closed cylinder end even before i is known injective. HEP produces sc=id, so c embeds as the closed equalizer of cs and id. The free A endpoint is a closed embedded subspace and recovers i at height one. For based HEP the reduced free endpoints remain closed embeddings: saturation of a closed endpoint set only adds the closed collapsed track when it contains the basepoint. Thus the based test also establishes closedness rather than presupposing it. The converse is composition with compatible quotient data.

### def-mapping-cylinder-and-mapping-cone

Accepted. The mapping-cylinder quotient attaches height zero to f and leaves the free height-one end. The retraction formula is fibre-constant and continuous by quotient finality. The unreduced cone collapses only the free end, and the empty-domain convention explicitly adds no new point. Reduced constructions are deferred and not conflated with this quotient.

### thm-mapping-cylinder-factorization

Accepted. Height contraction is compatible with the attaching relation, fixes Y, and descends by quotient-times-I. For HEP, the square retraction has denominator >=1/2, its maximal-term cases land on bottom or side, and lambda=1 on all prescribed sides. Pasted data agree at corners and along Y attachments. Commuting-square naturality is pointwise. Based collapse preserves all formulas; reflecting the side retraction supplies cone-base HEP. Empty X checked.

### lem-pushouts-and-products-preserve-the-cofibrations-used-here

Accepted. The strip-retraction proof of product HEP uses the established quotient product topology. The extracted u=max(t-r2) is continuous by compact-time uniform control, vanishes exactly on closed A, and u<1 forces h(x,1) into A. The two product homotopy formulas agree at u=v>0, fix the union when one function is zero, and compact-time control proves continuity at u=v=0. The final strip retraction agrees at t=w, fixes bottom/side, and positive height requires w<1. The disk formula has bounded denominator and includes m=0. No arbitrary-index choices are used.

### def-reduced-cone-suspension-and-cofiber-sequence

Accepted. The cone base is height zero and tip height one; suspension also collapses the base. Reflection reverses height, and the alternating suspension signs are stated as a convention pending the rotation proof. Based and unreduced cone notations are explicitly distinguished. The definition makes no covariant exactness assertion.

### lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient

Accepted. The based strip retraction produces R(x,0)=x and R(a,t)=[a,t], so R(-,1) factors through X/A. The first inverse homotopy descends because psi R is constant on A at every time. On the cone the second homotopy max(s,t) agrees with R at s=0, fixes tip/track, starts at identity and ends at phi psi. Thus both inverse identities hold by explicit based homotopies with quotient-times-I justification; no contractibility-of-subspace shortcut is used.

### lem-iterated-cofibers-rotate-with-suspension-reflection

Accepted. The well-pointed product-pair cofibration and its pushout justify i being a cofibration before applying the quotient equivalence. Cone/suspension interchange respects all ends, tracks and attachments. In 2.1 both formulas agree at the attached base and send tips to the suspension basepoint; t=0 gives the next cofiber quotient and t=1 gives reflected Sigma f after psi. The orthogonal path from coordinate swap to reflection preserves norms uniformly, so the infinity-fixed homotopy is continuous with X as parameter. The interchange sign is retained rather than silently identified with identity.

### lem-suspension-homotopy-classes-have-natural-group-structures

Accepted. Pasting in the suspension coordinate preserves both endpoints and the basepoint track, including pasted representative homotopies. The explicitly supplied cubical group-law homotopies are jointly continuous with arbitrary X as parameter and descend by quotient-times-I. Double-suspension interchange has the common constant unit. Substitution f(x) commutes with concatenation, proving precomposition is a homomorphism; reversal gives the inverse.

### thm-puppe-sequence-is-exact-after-mapping-into-a-based-space

Accepted. Cone extension and based nullhomotopy are inverse constructions for the distinguished fibre at [Y,Z]. Iterated cofiber equivalences transport this calculation to every adjacent pair, with reflection checked in the supplier. The text correctly identifies inversion as an antihomomorphism for single suspensions. Omitting signs preserves kernels and subgroup images, and only double-suspended degrees are asserted abelian. No covariant homotopy exactness is inferred.

### prop-loop-suspension-adjunction-on-based-homotopy-classes

Accepted. The three suspension quotient equations transpose exactly to loops with both endpoints y0 and constant loop at x0. The reviewed interval exponential law supplies continuity into the kified subspace and continuity of inverse evaluation, also with a homotopy parameter. Naturality is pointwise pre/postcomposition, so the bijection is on based homotopy classes, not merely sets of functions.

### cor-higher-homotopy-groups-are-iterated-loop-components

Accepted. Iterating the established continuous interval transpose identifies all boundary constraints with iterated based-loop constraints. The additional time parameter identifies boundary-fixed homotopies exactly with paths in the iterated loop space. Evaluating coordinate-one concatenation reproduces the cubical group product; naturality follows from postcomposition. No arbitrary pi0 set is given an unsupported group operation.

### prop-higher-homotopy-basepoint-transport-and-moving-homotopies

Accepted. Radial core/shell values agree at radius 1/2 and outer boundary is x0. Nested shells trace eta then gamma outward, matching first-gamma path concatenation after positive radial reparametrization; constant shells and retracing paths remove by endpoint-fixed homotopies. The moving-boundary formula K has the correct seam gamma(t) and constant exterior. The reverse-track homotopy in 4.1 starts at a constant shell and ends at transport; applying the moving-boundary identity after pasting proves multiplicativity without assuming it. In n=1 the shells give gamma*a*reverse(gamma), fixing the variance convention.

### def-n-connected-space-and-n-connected-map

Accepted. Nonemptiness is explicit for spaces, avoiding vacuous path-connectedness on the empty space. Map connectivity includes surjectivity on components independently of relative groups, preventing components outside the image from being ignored. Relative degree one is required to be a singleton pointed set. Higher degrees use the cylinder pair at every source basepoint, and degree minus one is a stated convention.

### lem-finite-cw-basepoints-have-explicit-homotopy-extension

Accepted. The zero-skeleton homotopy is explicitly prescribed, and each finite cell extension composes the existing bottom/side data with the proved disk-cylinder retraction. Attaching quotient-times-I guarantees continuity on the next skeleton. Finite dimension-ordered iteration yields the vertex HEP, including dimension zero. There is no selection of infinitely many cell extensions or dependence on a general published CW HEP proof.

### thm-lower-dimensional-sphere-maps-are-based-nullhomotopic

Accepted. The Householder formula is orthogonal and takes e1 to the prescribed basepoint, including the identity exception. Finite simplicial pair approximation applies with singleton target subcomplex, so its homotopy really fixes the basepoint. Image dimension <=k<r omits an explicit top-simplex barycenter distinct from b. The punctured-sphere stereographic formulas are inverse with positive denominators, and affine contraction fixes q(b). The argument also proves the k=0 path assertion. The published finite-pair approximation statement and full proof were read; its hypotheses match exactly.

### lem-based-sphere-maps-have-finite-affine-bubble-normal-forms

Accepted. The doubled finite cube triangulation has a separate center in each copy; radial inversion identifies the second copy with the exterior and its center with infinity. Pair approximation fixes the whole boundary because the target subcomplex is the singleton infinity. Only onto r-simplices meet the chosen small target cube, so inverse images are finitely many disjoint interior parallelepipeds with invertible affine parts. Translation extends uniformly at infinity. Q_R,t is continuous at its moving pole and at infinity, including t=0, since finite output norm dominates input norm. Empty onto-simplex family yields the constant map.

### lem-finite-affine-bubbles-represent-signed-cubical-sums

Accepted. Finite Gram–Schmidt gives QR with positive triangular diagonal; triangular interpolation and finitely many plane rotations give paths within the appropriate determinant component (r=1 treated separately). Uniform inverse bounds on each compact matrix path let every changing support stay inside a private ball. Small center motions and further shrinkage give distinct first-coordinate support intervals without collisions. The slab expansion remains boundary-constant; radial and coordinatewise compactifications interpolate with a maximal-coordinate component diverging uniformly. Positive bubbles are the fixed generator and reflection is its inverse. The ordered product is a power of one element even in degree one; no abelianness in degree one is assumed.

### thm-based-sphere-maps-are-classified-by-geometric-degree

Accepted. Read the actual published finite-pair approximation, suspension-homology shift and local/global degree proofs. The finite-vertex HEP supplies well-pointedness at every chosen sphere point. Reduced H0(S0) is the augmentation kernel generated by [p]-[q]; swapping points acts by -1. The two-apex cone-cover connecting map depends only on height, so changing the auxiliary basepoint permits its naturality for the swap and all subsequent sphere maps. Suspension preserves the integer multiplier, proving reflection degree -1. Normalized bubbles have a finite zero fibre and their punctured-pair homotopies preserve the isolated center, so the local/global theorem supplies the signed count. The independently proved bubble class is the same signed power of the identity, giving injectivity, all integer degrees, and additivity without circular use of degree classification.

### ex-higher-homotopy-groups-of-a-product

Accepted. Projection and pairing give explicit mutually inverse class maps; pairing the two homotopies verifies representative independence. Concatenation commutes coordinatewise and path components correspond without connectedness hypotheses. The displayed loop substitutions have the correct first/second half coefficients and both seam values are zero.

### ex-relative-homotopy-of-a-disk-boundary-pair

Accepted. The disk contraction fixes the chosen boundary basepoint, so all positive absolute groups vanish. Exactness gives the boundary isomorphism for k>=2; the reviewed lower-sphere and degree suppliers provide the claimed vanishing and top Z, with outward-oriented characteristic disk mapped to the identity boundary. For k=1,m>=2 pointed-set exactness gives a singleton. For m=1 the two endpoint choices cannot change during a relative homotopy and convex interpolation contracts each fixed-endpoint class, giving exactly two elements.

### ex-mapping-cone-of-a-degree-d-circle-map

Accepted. The angular coordinate computation has |d| isolated preimages, local sign sign(d), and treats d=0 separately. The open cone-collar cover has path-connected intersection, its overlap generator maps to a^d and to the identity, so van Kampen gives the asserted presentation with the specified height-path basepoint. The cone is one attached disk, hence cellular differential d computes H1 and H2 independently. Cases d=0,+/-1,-2 agree. Published reflection supplier step 1.2 has undeclared excision/pair-sequence dependencies, recorded separately as published metadata debt; its explicit two-arc calculation is sound and this example consumes only its circle clause, not its higher suspension argument.

### ex-cofiber-sequence-of-a-wedge-summand-inclusion

Accepted. The wedge inclusion is a pushout of the well-pointed V basepoint inclusion, so HEP is licensed. Quotient maps identify the quotient with V. The explicit reduced cone contraction fixes V and the shared basepoint, giving an inverse equivalence under which the cofiber projection is literally constant on V. This proves the zero connecting map, including the two-circle example.

### cex-unbased-homotopic-based-maps-need-not-induce-the-same-based-homotopy-map-without-basepoint-transport

Accepted. Finite vertex HEP extends the prescribed loop a from initial identity. Its endpoint g is based since the loop closes, while the homotopy has moving basepoint track a. The reviewed transport convention gives id*=beta_a g*, hence g*(b)=a^-1 b a. The free-group reduced word has three letters and differs from b. This is an explicit degree-one counterexample and does not purport to refute based-homotopy invariance.

### cex-an-arbitrary-subspace-inclusion-need-not-be-a-cofibration

Accepted. The convergent-sequence space is a closed compact Hausdorff example and its singleton zero subspace is closed. Intermediate value makes every path constant. The HEP strip test forces R(1/n,1)=(1/n,0), while continuity of the second coordinate at (0,1) contradicts the prescribed R(0,1)=(0,1). Thus even closedness does not imply HEP; no unrelated necessary-condition argument replaces the witness.

### higher-homotopy-groups-and-cofiber-sequences

Accepted. The A-page lists the 34 assigned definitions and results in supplier order; its prose accurately describes based cubes, relative sequence, transport, CGWH cofibers and the local finite signed-bubble degree proof. It contains no extra exactness claim, Recorded dependency, or unproved sphere calculation. Its item list agrees with the owning manifest and batch scope.

### higher-homotopy-groups-and-cofiber-sequences-examples

Accepted. The B-page lists exactly the six assigned examples/counterexamples and its summary matches their actual verified claims: products, disk pairs with the low-degree exception, circle-map cones, wedge cofibers, moving-basepoint and noncofibration witnesses. It does not overstate their conclusions.

### Batch 8 completion, dependency records and local checks

All 40 authored items and both pages are accepted, each with an `authored:8:<id>` decision and item-specific evidence in `phase-2-catchup-24-alpha-d-6b-decisions.json`. Every owning contract now has a specific completed local risk review. No authored items were repaired, withdrawn or escalated; no repair-confidence field is asserted for acceptance. No item/page/manifest content was edited. Batch 9 was not reviewed or edited.

The published finding `p2c24-6b-d8-published-reflection-deps` was appended through `tools/defect-ledger.mjs`; the canonical published-consumer ledger contains its exact evidence, supplier states and Phase-3 strategy, and its unique index row moved from U-P to A-P. The finding is confined to missing dependency records in published `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`, step 1.2. Its circle calculation remains mathematically sound; `ex-mapping-cone-of-a-degree-d-circle-map` consumes only that clause. This acceptance does not close or repair the published finding. The ledger lock was acquired with mkdir, current text reread and merged, and only this review's lock released with rmdir.

The owning `phase-2-catchup-24-batch-8.cross-batch-dependencies.json` remains the correct empty array. A fresh read-only collection from current manifests and authored dependencies returned no batch-8 cross-batch edges and no orphaned owned records. The manual argument review found no implicit changing-frontier supplier. The same-page local supplier chain is fully authored and reviewed here; the finite simplicial approximation, finite Gram–Schmidt, homology shift, local-degree and circle computations use the published interfaces identified in the individual contracts. In particular no Recorded item, general-CW HEP theorem, Hurewicz theorem, or infinite choice principle supplies the degree argument.

Authoritative source evidence actually read:

- Strickland, definitions 1.1–1.2 and results 1.8–1.11, PDF pp.1–2: k-closedness and weak Hausdorffness test continuous maps from compact Hausdorff domains; the CG-source lifting property applies with CG source and arbitrary target. The authored compact-test exponential proof supplies its non-WH extension directly, so no WH conclusion is assumed before quotient separation. Source: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf.
- May, Chapter 8 §4, printed pp.59–60 (PDF pp.67–68): cone extension detects the distinguished fibre; the cofibration quotient equivalence uses the strip retraction and max(s,t) cone homotopy; rotation uses (f(x),t-st) and (y,s+t-st). The assigned proof checks every quotient seam and gives its own coordinate-interchange homotopy. Source: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf.
- Hatcher, Chapter 2, printed pp.134–137, Proposition 2.30 and Examples 2.31–2.32: for positive-dimensional spheres a finite fibre gives the sum of local degrees; isolated homeomorphic branches have signs, and the circle power map has degree d. The authored finite-bubble proof supplies classification, which is not inferred merely from the existence examples. The local fibre hypotheses, orientation convention, empty fibre and negative/zero circle degrees were checked. Source: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf.

Checks completed locally:

- `risk-report` on the owning contract with `--require-reviewed`: 40 items, zero errors.
- `proof-contract` on the owning contract with `--strict`: 40/40 items, zero errors or warnings. All derivation claims were also compared to their actual item text, with no mismatch; contract inputs and boundary evidence were read in bounded groups.
- Explicit-path precheck for the 40 scoped items: 33 proof-bearing items checked, zero failures; seven definitions have no proof.
- `content-policy` on the owned manifest: 40 scoped items, zero errors or warnings.
- Manifest claims and both current page lists were read and matched against the reviewed contents. The decision inventory has exactly the 42 assigned obligations, with no duplicate or missing obligation.

No new shared-plan or Phase-2 amendment is required by this review. The previously recorded authoring amendments remain subject to the serial lead's existing reconciliation; this review introduces none. The published dependency repair remains Phase-3 debt as recorded above. There is no unresolved batch-8 mathematics or source-access blocker. Full-join hashes, cross-batch audit, 6C and 6D remain engine/lead responsibilities; these local checks do not replace them.

## Batch 9

Local authored-content review completed for dispatch 6b-d-9 only. Earlier batch-8 statements that batch 9 was unassigned describe that earlier review. Decisions below concern current authored text and its stated dependencies; no independent certification, scheduling transition or publication stamp is supplied. Item decisions and owning risk reviews are checkpointed as they are completed. Source locators remain in each authored item; additional source reading, dependency dispositions and completed checks appear at the end of this section.

### def-de-rham-cochain-complex

Accepted. The complex uses real smooth forms on finite-dimensional boundaryless Hausdorff second-countable manifolds, zero outside the dimension range. Read the declared d-squared supplier: mixed-partial terms cancel pairwise. Empty sections and locally extendible endpoint forms are explicitly specified.

### def-closed-and-exact-differential-forms

Accepted. Kernel/image definitions have the correct degrees; d squared zero proves image contained in kernel. Negative-degree zero terms make B0 zero, while the zero form remains exact and closed in every degree.

### def-de-rham-cohomology

Accepted. The published cohomology definition identifies the cokernel of boundaries in cycles; in real vector spaces this is exactly the displayed quotient. Equality of closed representatives is precisely an exact difference, including the empty zero space.

### prop-zero-and-out-of-range-de-rham-cohomology

Accepted. Steps 1.1 and 2.1 compute zero cycle/boundary quotients out of range and for the empty manifold. Dimension zero is covered without asserting H0 vanishes for nonempty manifolds.

### thm-zero-th-de-rham-cohomology-is-locally-constant-functions

Accepted. Step 1.1 integrates the derivative along a segment inside a convex coordinate ball; the Newton–Leibniz hypotheses hold for its smooth restriction. Singleton charts handle dimension zero. Local constancy gives smoothness conversely, and connectedness plus one point proves global constancy without a choice family.

### prop-pullback-is-a-morphism-of-de-rham-complexes

Accepted. The pointwise differential formula is smooth, real linear and degree preserving, including rank-deficient maps and zero terms. The declared exterior-derivative naturality supplies exactly the cochain square in step 2.1.

### thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology

Accepted. Step 1.1 proves preservation of cycles and exact differences directly. Reindexing C_n=Omega^{-n} preserves the differential and identifies H_{-k} with H^k, so the induced homology map has the stated direction and quotient property. No simultaneous representative selection is needed.

### prop-de-rham-cohomology-is-a-contravariant-functor

Accepted. Pullback composition already reverses arrows on forms; applying the covariant homology functor to these reversed cochain maps gives F*G*, not G*F*. Identity maps and zero groups are included.

### lem-wedge-with-a-closed-form-preserves-exactness-classes

Accepted. Both primitives follow with the displayed Leibniz signs: the first uses d beta=0, the second d alpha=0 and multiplication by (-1)^p. Degrees p=0 and q=0 are explicitly treated with the zero negative-degree primitive.

### thm-wedge-product-descends-to-de-rham-cohomology

Accepted. Step 1.1 uses the closed beta-prime in the first exact-change term, so it includes the mixed d eta wedge d theta term. Leibniz proves closedness first. Associativity, bilinearity and graded sign descend, and the empty zero algebra consistently permits unit zero.

### def-de-rham-cohomology-ring

Accepted. The direct sum has only the nonnegative dimension-range contributions. Its multiplication and unit are supplied by the preceding reviewed theorem, with an explicit zero-unital-algebra convention for the empty manifold.

### prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras

Accepted. The wedge pullback identity gives multiplication on homogeneous classes and linearity extends it to finite sums. Pullback of the constant function proves the unit clause, including empty source and zero algebra.

### def-integration-along-the-unit-interval-for-a-differential-form

Accepted. The tangential/vertical splitting is uniquely recovered by endpoint pullback and contraction with partial_t. Integration is in a fixed exterior-power fibre. Product endpoint smoothness is locally extendible, and degree zero is explicitly sent to zero; the following lemma supplies the stated justification.

### lem-the-interval-homotopy-operator-is-coordinate-independent

Accepted. Transition matrices depend on x alone and commute with the finite-dimensional t integral. Step 2.1 applies the rectangle differentiation theorem to each coordinate and then every multi-index; uniform continuity on a compact rectangle gives joint continuity of all integrated derivatives. Endpoints, k=0 and dimension zero are covered.

### thm-de-rham-homotopy-formula-on-a-product

Accepted. Direct computation gives d omega=d_M alpha+dt wedge(partial_t alpha-d_M beta). Integrating the vertical coefficient and using Newton–Leibniz gives alpha1-alpha0-d_M K omega, hence exactly dK+Kd. Degree zero and top-dimensional vanishing terms obey the same identity.

### thm-de-rham-homotopy-formula-for-a-smooth-homotopy

Accepted. Apply the product formula to F*omega; tangent-tuple evaluation identifies i_t*F* with F_t*. Exterior derivative naturality holds in the locally extended endpoint charts and gives the final operator equation in every degree.

### cor-smoothly-homotopic-maps-induce-the-same-de-rham-map

Accepted. For closed omega the K F* d term vanishes, leaving an explicit exact difference. Degree zero gives actual equality. Under C_n=Omega^{-n}, K has degree +1, so the optional chain-homotopy interpretation has the correct grading.

### thm-de-rham-cohomology-is-smooth-homotopy-invariant

Accepted. The two given smooth inverse homotopies yield f*g*=id_M and g*f*=id_N with the correct contravariant order. Both maps preserve graded products and units. An equivalence with an empty target forces both manifolds empty.

### cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds

Accepted. Read all steps 1.1–8.1 and the current published embedding, absolute Euclidean approximation, partition and normal-addition proofs. The bounded radius supremum is positive, downward eligibility proves injectivity at its supremum, the inclusion estimate proves it is 1-Lipschitz, and half-radii give global tube injectivity. The error ball stays in U, while the grouped cutoff has closed support in V, so the convex blend is smooth and fixes a neighbourhood of A. Smaller collars 1/4 and 3/4 lie strictly inside the constant regions 1/3 and 2/3. Smooth representatives and both composite homotopies give independence and inverse algebra maps. Countable tuple/list/bump selections are explicit; no point-indexed or dependent choice is used. Lee, Theorems 6.21, 6.24, Proposition 6.25 and Theorem 6.26, printed pp.136–141, were read at https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf. Target boundarylessness, positive continuous tolerance and closed-relative-set neighbourhood smoothness match. Published partition choice/indexing debt remains in the canonical ledger; the authored proof closes the needed finite-cover grouping and countable choices locally.

### def-radial-contraction-of-a-star-shaped-domain

Accepted. The specified centre ensures nonemptiness; star-shapedness keeps every radial segment in U. The polynomial coordinate expression is locally smooth across both parameter endpoints, and dimension zero reduces to the point.

### thm-poincare-lemma-for-differential-forms-on-star-shaped-domains

Accepted. The constant endpoint has zero differential in positive degree, so homotopy gives omega=d K F*omega. Evaluating partial_t and the k-1 tangential vectors yields t^{k-1} with the stated sign. k=1 has no singularity at t=0; out-of-range forms give zero primitives. Degree zero is correctly excluded.

### cor-closed-differential-forms-are-locally-exact

Accepted. Pullback to a convex coordinate ball preserves closedness, the positive-degree Poincare lemma gives a primitive there, and inverse pullback returns it with the correct differential. One chart at a specified point requires no simultaneous choice. Empty and dimension-zero cases are explicit.

### thm-de-rham-cohomology-of-a-contractible-smooth-manifold

Accepted. Contractibility applied to the identity supplies a point and its constant homotopy. The maps to and from that point are continuous homotopy inverses. The reviewed continuous-invariance result applies under the stated countable choice, and the point has H0=R and no positive-degree forms.

### def-two-open-set-de-rham-mayer-vietoris-cochain-maps

Accepted. Restriction is a cochain map, and s is consistently second minus first. The direct-sum differential is componentwise; empty opens have zero complexes. This definition fixes the connecting-map sign without presuming surjectivity.

### lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms

Accepted. Pointwise cover membership proves injectivity; equal restrictions glue unique smooth sections since smoothness is local. Both image-kernel inclusions are explicitly proved, including empty overlap and empty opens, without choice.

### lem-the-de-rham-mayer-vietoris-difference-map-is-surjective

Accepted. Step 1.1 supplies the countable-choice implementation of the published partition construction using all admissible tuples, least exhaustion indices and finite annular lists. Grouped unions of supports are closed by local finiteness and contained in the assigned open. Thus the two zero extensions are smooth, and beta-alpha=(rho_U+rho_V)omega=omega with correct signs. Empty overlap is lifted by zero. Existing published choice/indexing debt is not silently repaired by this local construction.

### thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes

Accepted. The preceding two lemmas supply degreewise injectivity, equality of image and kernel, and surjectivity. Restriction commutes with d, and reindexing C_n=C^{-n} gives exactly the published short-exact-complex convention. Countable choice is used only by the surjectivity supplier.

### thm-mayer-vietoris-sequence-in-de-rham-cohomology

Accepted. Read the published cohomology long-exact-sequence proof and its degree-negation convention. The reviewed short exact sequence satisfies its real-vector-space hypotheses; the connector raises degree by one. Componentwise cycles and boundaries identify middle cohomology with the finite direct sum, and negative-degree zeros give the initial zero.

### prop-explicit-de-rham-mayer-vietoris-connecting-class

Accepted. The two lifted derivatives agree because their difference is d omega=0; their glued form is closed by d squared zero. The overlap value is d rho_U wedge omega with positive sign. Read the module connector proof: individual lift differences are boundaries and representative changes lift through d, so the reindexed formula is independent of lift, representative and partition.

### thm-naturality-of-de-rham-mayer-vietoris-for-maps-of-covered-manifolds

Accepted. Both restriction squares commute in the direction N to M, with beta-alpha on each side. Read the published connecting-morphism naturality proof; its short-exact ladder hypothesis is supplied here. The additional direct lift calculation verifies the same connector sign without requiring pullbacks of a partition to remain subordinate.

### cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum

Accepted. Forms and d glue componentwise on a finite disjoint union. Finite representatives and primitives suffice for surjectivity and the kernel calculation; no arbitrary-family choice is implicit. The empty union gives zero and a single component gives identity.

### thm-de-rham-cohomology-of-spheres

Accepted. Stereographic formulas and the overlap diffeomorphism were checked by substitution. The overlap contracts smoothly onto S^{n-1}. For n=1, the H0 map has diagonal image (b-a,b-a) and one-dimensional cokernel; for n>=2 it is surjective, giving H1=0. Higher exactness shifts k to k-1 and n to n-1 without using the later punctured-space result or fundamental groups. S0 and negative degrees are separately handled; countable choice enters the Mayer–Vietoris supplier.

### cor-de-rham-cohomology-of-punctured-euclidean-space

Accepted. The radial homotopy has strictly positive scalar coefficient and fixes the unit sphere, so it stays in punctured space and supplies both inverse relations. The n=1 half-lines and n=0 empty space are calculated separately. The stated countable choice propagates the sphere computation.

### fs-the-de-rham-cohomology-class-of-a-form-is-defined-without-closedness

Accepted. For alpha=x dy, d alpha evaluates to 1 on the coordinate basis, so the smooth form is outside the cycle numerator. This directly refutes the claimed class construction.

### fs-every-smooth-form-is-either-closed-or-exact

Accepted. The explicit x dy witness is nonclosed; exactness would force d alpha=0 by d squared zero. Thus it is neither closed nor exact, refuting the disjunction without claiming closed and exact are mutually exclusive.

### fs-continuously-homotopic-smooth-maps-can-be-inserted-directly-into-the-differential-form-homotopy-operator

Accepted. The cusp H(t)=|t-1/2| has smooth singleton endpoint maps but unequal one-sided derivatives at the midpoint. Pullback of dy requires the missing differential there, so the specified smooth-form operator cannot take this continuous homotopy directly.

### fs-the-poincare-lemma-says-every-closed-form-is-globally-exact

Accepted. The coefficient derivatives of the angular form agree, giving closedness on the punctured plane. Pullback to the explicit unit loop is dt and has period 2pi; a global primitive would give zero by Newton–Leibniz at equal endpoints. This addresses positive-degree global exactness while respecting the star-shaped hypothesis.

### fs-the-mayer-vietoris-sequence-is-obtained-by-restricting-forms-without-a-partition-of-unity

Accepted. The proposed unchanged extension of 1/x to U fails continuity at zero, as values at 1/n diverge. The text correctly limits the refutation to the incomplete lift recipe; it does not assert that all proofs must name partitions or deny that the actual difference map is surjective.

### fs-de-rham-cohomology-is-a-covariant-functor

Accepted. On the three-point manifold the stated swaps yield F*G*u(2)=1 and G*F*u(2)=0. Degree-zero functions have no boundaries, so this is an actual distinction on cohomology and verifies the reversed composition order.

### ex-de-rham-cohomology-of-a-point

Accepted. Evaluation at the supplied point identifies functions and their degree-zero classes with R, preserving products and unit. Zero cotangent space kills positive degrees; negative degrees vanish by convention.

### ex-de-rham-cohomology-of-euclidean-space

Accepted. The explicit radial primitive applies to each positive degree on R^n. Connectedness identifies H0 with constant functions, and n=0 is separately the point calculation. No smoothing or choice theorem is needed.

### ex-de-rham-cohomology-of-a-finite-discrete-manifold

Accepted. Zero tangent spaces make all functions closed and all positive-degree forms zero. Restriction gives finite tuples with componentwise multiplication, including the zero algebra for m=0 and R for m=1.

### ex-de-rham-cohomology-of-the-circle-from-mayer-vietoris

Accepted. The two contractible arcs have overlap consisting of two contractible arcs. The displayed H0 difference has diagonal kernel and image, and d-c identifies its cokernel with R. Exactness gives H0 and H1; dimension kills all higher degrees.

### ex-the-angular-form-generates-the-first-de-rham-cohomology-of-the-circle

Accepted. Substitution along the counterclockwise unit loop gives dt/(2pi) and period one. Read the published period obstruction: its compact boundaryless embedded positive-dimensional hypotheses hold for S1 in itself. The reviewed sphere computation gives dimension one, so the nonexact class is a basis.

### ex-de-rham-cohomology-of-the-two-sphere

Accepted. The overlap inverse (u,t)/sqrt(1+t^2) is correct and the reviewed sphere computation applies at n=2. Multiplication of two degree-two classes lands in the zero degree-four group, yielding the stated square-zero ring.

### ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere

Accepted. Expansion of the displayed alternating sum gives det(x,v1,...,vn), positive on outward-oriented tangent bases and nonzero because x is a nonzero normal. Read the published positive-top-form obstruction, whose compact, boundaryless and n>=1 hypotheses hold. Closedness follows by dimension and the nonzero class generates the one-dimensional top group.

### ex-de-rham-cohomology-of-punctured-three-space

Accepted. The homotopy radius (1-t)|x|+t is positive throughout and fixes radius one. The n=3 punctured-space result gives only degrees zero and two, with positive products zero by degree. No separate generator formula is needed for the stated group assertion.

### ex-homotopy-equivalent-annulus-and-circle-have-isomorphic-de-rham-rings

Accepted. The interpolated radius stays strictly inside (a,b) because both |x| and 1 do. The explicit smooth retraction gives inverse algebra pullbacks, and the circle computation gives one degree-one generator with square zero. The countable-choice assumption is retained for that computation.

### cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact

Accepted. The two coefficient derivatives agree on the positive-denominator domain, so the angular witness is closed. Its loop pullback is dt with integral 2pi; Newton–Leibniz would give zero for any global primitive. No later example or choice principle supplies the obstruction.

### cex-the-pullback-on-cohomology-reverses-composition-order

Accepted. The explicit three-point permutations give different outputs 1 and 0 at point 2. Locally constant functions identify with their H0 classes, so the calculation refutes the wrong composition order on cohomology itself.

### ex-an-explicit-mayer-vietoris-connecting-form-on-the-circle

Accepted. The reviewed connector glues zero on W0 and d rho_U on W1, with valid support-based zero extensions. The overlap vector (0,1) is outside the diagonal image of the H0 difference map, so exactness makes its connecting class nonzero. Signs agree with second minus first.

### def-riemannian-metric-and-riemannian-manifold

Accepted. Smooth symmetric positive-definite covariant tensors define precisely fibre inner products. The empty base and rank-zero tangent spaces are explicitly allowed with vacuous positivity; boundary smoothness applies only where stated.

### prop-coordinate-criterion-for-a-riemannian-metric

Accepted. The quadratic value v^T G v proves both directions of the criterion. Substitution of partial_y=J partial_x gives J^T G J, and invertibility of the chart Jacobian preserves positivity. Zero-dimensional and empty charts are handled.

### thm-every-smooth-manifold-admits-a-riemannian-metric

Accepted. Read the published bundle-metric and boundary partition proofs. The owned construction records complete chart/frame tuples before countable selection, least exhaustion indices, finite annular lists and bumps; no uncountable frame choice is required. Locally finite zero-extended weighted metrics are smooth, and a positive weight proves strict positivity at every nonzero vector. Boundary tangent/half-space suppliers and empty/rank-zero cases are explicit. Published bundle-metric choice debt remains separate; the needed construction is justified locally under the stated countable choice.

### def-pullback-riemannian-metric

Accepted. The pullback formula gives a symmetric nonnegative tensor, with no premature positive-definiteness claim. It uses the usual covariant tensor pullback and defers the precise immersion criterion to the next result.

### prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions

Accepted. Positive definiteness of h makes the pullback quadratic value zero exactly on ker dF. This proves immersion iff positivity and, by testing a radical vector against itself, equality of radical and kernel. Tensor pullback supplies smoothness; empty source and rank zero satisfy the same criterion.

### def-riemannian-isometry-and-local-isometry

Accepted. The definition separates isometries, local isometries and isometric immersions. Equal dimensions and boundarylessness are retained for the inverse-function criterion; the boundary definition explicitly requires a local diffeomorphism.

### prop-riemannian-isometries-form-a-group-and-local-isometries-are-local-diffeomorphisms

Accepted. Functorial tensor pullback verifies identity, composition and inverse metric preservation. Injective differential follows from positivity; equal finite dimensions and the boundaryless inverse function theorem then give local diffeomorphisms. Dimension zero is valid.

### def-conformal-equivalence-of-riemannian-metrics

Accepted. Multiplication by e^{2u} preserves positivity and smoothness; every positive smooth factor has u=(log f)/2. Zero, negation and addition of u establish the equivalence relation, without requiring uniqueness of u in dimension zero.

### def-pointwise-norm-and-angle-from-a-riemannian-metric

Accepted. Cauchy–Schwarz puts the normalized inner product in [-1,1], and cosine is bijective on [0,pi]. The definition excludes zero-vector angles but includes both endpoint angles; the norm uses the correct square root.

### def-musical-isomorphisms

Accepted. Positive definiteness makes flat injective, and equality of finite fibre dimensions makes it bijective. The inverse pairing uniquely defines sharp pointwise, including rank zero. Smoothness is supplied by the following theorem.

### thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms

Accepted. Flat has matrix G and sharp has adj(G)/det G; positivity gives nonzero positive determinant. The local-matrix smoothness criterion applies to both, and the two matrix inverse identities prove inverse bundle maps. Empty base and rank zero are addressed separately.

### def-riemannian-gradient

Accepted. The smooth sharp map applied to df gives a smooth vector field, with coordinate entries g^{ij} partial_j f. The differential-function supplier identifies its action, and constants and zero-dimensional functions have zero gradient.

### prop-the-gradient-is-characterized-by-inner-products

Accepted. The defining inverse pairing proves existence. For uniqueness the global difference field Z is a legitimate test field; g(Z,Z)=0 forces Z=0, avoiding any unproved global extension of arbitrary pointwise test vectors.

### prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles

Accepted. Successive tensor universal properties descend the product pairing over R, and tensor product bases prove positivity. The determinant is alternating in each list, so two exterior universal properties descend it; increasing orthonormal monomials have identity Gram matrix, without a k! factor. Explicit finite Gram–Schmidt has positive denominators and smooth coefficients, proving local smoothness and overlap agreement. k=0 has empty determinant one; zero exterior spaces are vacuous.

### def-piecewise-c-one-curve-on-a-manifold

Accepted. The finite piecewise C1 definition permits pauses and uses one-sided derivatives on closed pieces. It also specifies the singleton interval as a constant curve, so later length and reparametrization claims have a defined degenerate case.

### def-riemannian-speed-and-length

Accepted. Each speed is continuous on its closed C1 piece, hence has a finite nonnegative Riemann integral. Corner values affect finitely many points only. Constant and singleton-domain curves have length zero, with partition independence supplied next.

### lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision

Accepted. The union of the two finite breakpoint sets is an admissible common refinement, and scalar integral additivity preserves the sum. Bounded changes at finitely many corners do not change a Riemann integral. The proof reuses only the scalar refinement argument from the cited Euclidean line-integral lemma.

### thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization

Accepted. A monotone continuous surjection has interval fibres; adding endpoints of the finitely many breakpoint fibres gives a finite C1 subdivision of the composite. On each nonconstant piece the chain rule gives speed times nonnegative phi-prime, meeting the continuous-speed and integrable-derivative substitution hypotheses. Pauses contribute zero, endpoint images exhaust [a,b], and singleton intervals are treated separately.

### prop-length-is-additive-under-concatenation-and-invariant-under-reversal

Accepted. The two half-interval derivatives carry factors 2, cancelled by affine substitution. Reversal changes velocity sign but preserves its norm and reverses integration limits, so length is unchanged. The scalar integral calculation applies directly to Riemannian speeds, including constant pieces and finite repetition.

### lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric

Accepted. Empty K and n=0 are removed before taking extrema on K times S^{n-1}. The declared compactness and metric-topology suppliers license the nonempty compact metric domain. Strict positivity and an attained minimum give c>0; homogeneity supplies all nonzero vectors and v=0 is immediate.

### lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve

Accepted. Finite coordinate-segment reachability is an equivalence relation with open classes; the complement of one class is open. Connectedness forces the class of p to be all M. Convex relative half-balls handle boundary points, and no infinite selection of charts or paths is made.

### def-riemannian-distance-on-a-connected-manifold

Accepted. For each actual pair, finite reachability gives a finite length and zero is a lower bound, so real completeness supplies a finite infimum. Empty connected M has no pairs. The definition requires no minimizer.

### thm-riemannian-distance-is-a-metric

Accepted. Reversal and two epsilon-competitors prove symmetry and the triangle inequality with finite choice only. A compact chart ball excluding q has an attained first exit; the initial coordinate curve displaces by its radius. Newton–Leibniz and the unit-field line-integral estimate bound its Euclidean length below, and sqrt(c) converts this to a strictly positive Riemannian lower bound. Relative half-balls, dimension zero and empty M are addressed.

### thm-the-riemannian-distance-topology-is-the-manifold-topology

Accepted. The first-exit lower bound places a metric ball inside any sufficiently small coordinate neighbourhood. Conversely the coordinate segment and the upper comparison bound put a coordinate ball inside every metric ball. These prove both topology inclusions; convex half-balls and singleton/empty cases satisfy the same conclusion.

### prop-length-dominates-endpoint-distance

Accepted. The supplied curve is one competitor in the defining nonempty length set, so its length is at least the infimum. No equality or minimizing-curve assertion is made; constant and singleton cases give zero.

### prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance

Accepted. The chain rule transfers the pointwise differential bound to each path speed and its length. For c>0 one epsilon/c competitor suffices; c=0 is handled without division. Connectedness provides competitors, and empty source has no pairs.

### cor-riemannian-isometries-preserve-length-and-distance

Accepted. Metric preservation gives identical speeds and lengths. A diffeomorphism maps components onto components by connectedness and inverse maximality. Applying the c=1 bound to F and its inverse gives both distance inequalities.

### def-extended-riemannian-distance-on-a-disconnected-manifold

Accepted. Components are open by connected coordinate balls and carry the reviewed finite metric. Continuous path images cannot cross components. The extended triangle inequality is valid because different endpoint components force one infinite right-hand term; empty and singleton spaces are consistent.

### def-distance-from-a-point-to-a-subset

Accepted. A component meeting A gives a nonempty set of finite nonnegative distances, while other components contribute only infinity. A component missing A has value infinity; empty A, singleton A and x in A agree with the stated conventions.

### prop-distance-to-a-nonempty-subset-is-one-lipschitz

Accepted. One point in A intersect C bounds both set distances finitely. Taking infima in the triangle inequality gives the first bound, and interchanging x,y gives the absolute-value estimate. The proof never subtracts infinities and excludes a real-valued assertion on components missing A.

### def-riemannian-volume-density

Accepted. The positive square root of det G is smooth and has the density coefficient type. Empty determinant one gives orientation-independent unit weights in dimension zero; compatibility is explicitly supplied by the following lemma.

### lem-the-riemannian-volume-density-is-coordinate-independent

Accepted. Taking determinants in G_y=J^T G_x J gives sqrt(det G_y)=|det J|sqrt(det G_x), precisely the density transition law. Positivity, smoothness, empty base and zero-dimensional determinant conventions all agree.

### def-riemannian-volume-form-on-an-oriented-manifold

Accepted. Positive coordinate transitions let the determinant density coefficient glue as a top form. The explicit zero-dimensional orientation sign follows the established determinant-ray convention. Reversing orientation negates the form and preserves its absolute density.

### prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form

Accepted. The squared norm of the coordinate top wedge is det(G^{-1}), so the displayed volume has unit norm. Any positive unit top form differs by f>0 with f^2=1, forcing equality. The argument includes signed zero-dimensional rays and empty base.

### def-riemannian-volume-of-a-compactly-supported-smooth-density

Accepted. Multiplication of the smooth positive density by compactly supported smooth f meets the existing intrinsic density-integral hypotheses. Countable choice is identified at chart-partition selection; compact support yields finite chart sums, including scalar point sums in dimension zero. No orientation is assumed.

### prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density

Accepted. Read both published density-measure suppliers in full. The metric density meets finite-valued positive smooth hypotheses; compact chart coefficient bounds give compact/local finiteness, the countable-base argument gives sigma-finiteness, and second-countable LCH regularity gives Radon. The smooth-integral agreement uses only finitely many compactly supported chart terms. The Borel measure and completion remain separate. Open components and the reviewed distance topology make finite open metric balls Borel; dimension-zero counting and empty measure cases are valid.

### def-riemannian-divergence

Accepted. Two local oriented metric volumes differ by a locally constant sign, so their Lie derivatives and volume quotients agree. This defines divergence on nonorientable M as well. Boundary local extensions and dimension-zero zero vector fields are explicitly specified.

### prop-coordinate-formula-for-riemannian-divergence

Accepted. Substitution rho=sqrt(det G)>0 into the declared volume-divergence formula gives the expression. Orientation reversal changes numerator and denominator together, so the scalar glues; the empty sum gives zero in dimension zero.

### thm-riemannian-divergence-theorem

Accepted. The inward boundary coordinate has nonzero differential, so minus its normalized gradient is the unique outward unit normal and glues. Tangent decomposition kills the tangential contraction term; outward-first orientation and normalized exterior metric identify the remaining boundary form, including signed zero-forms when n=1. Read current general Stokes: the primitive contraction is compactly supported, its derivative equals divergence times volume, and all stated orientation, dimension and countable-choice hypotheses match.

### def-riemannian-hodge-star

Accepted. The defining wedge-pairing identity uses the normalized exterior metric and supplied orientation, and its degree range is 0 through n. Existence and uniqueness are justified next. The scalar star in dimension zero is explicitly multiplication by the orientation sign.

### thm-hodge-star-is-a-smooth-bundle-isomorphism

Accepted. Finite Gram–Schmidt preserves the positive orientation and yields smooth coframes. Complementary wedge monomials give the signed-permutation formula; testing against every basis monomial proves the defining equation and uniqueness. Uniqueness glues the local smooth invertible matrices. Degree endpoints, dimension zero and empty base are included.

### prop-hodge-star-squared-sign

Accepted. Interchanging the complementary index blocks takes k(n-k) swaps, giving the product of the two star signs. Linearity proves the formula, and the degree endpoints and zero-dimensional orientation-sign square are explicitly one.

### prop-riemannian-inner-product-of-compactly-supported-forms

Accepted. The star identity identifies the integrand with the symmetric pointwise pairing times volume; compact support makes its integral finite. For a nonzero form its squared norm produces a nonzero nonnegative top form, to which the positivity supplier applies. The signed zero-dimensional volume and integration signs cancel, yielding sums of squares. Countable choice is exposed at integration localization.

### rem-the-codifferential-and-hodge-theory

Accepted. The remark restricts established claims to the algebraic star and its square sign. It makes no analytic adjoint, harmonic-representative or Hodge-decomposition claim and uses none as a premise.

### fs-the-pullback-of-a-riemannian-metric-by-every-smooth-map-is-a-riemannian-metric

Accepted. The explicit constant map R to R is smooth with zero differential. Pullback of the positive Euclidean metric evaluates to zero on the nonzero coordinate vector, giving a valid nonempty positive-dimensional counterexample.

### fs-every-riemannian-manifold-has-finite-distance-between-points-in-different-components

Accepted. The two-line disjoint union has explicit countable charts and positive metrics. A joining path would separate its connected parameter interval by the two component preimages, which is impossible; the empty competitor family gives infinity.

### fs-riemannian-distance-is-defined-by-the-length-of-a-unique-shortest-curve

Accepted. The punctured-plane displacement bound gives length at least two, and the explicit semicircle detours approach two. Equality forces the continuous nonnegative speed-minus-x-prime integrand to vanish, hence y=0 throughout; intermediate value would then hit the removed origin. For the circle, a finite angle-chart subdivision and finite angle adjustments give a continuous piecewise C1 lift. Antipodal endpoint lifts differ by an odd multiple of pi, so length is at least pi, attained by the two distinct semicircle images. Both nonattainment and nonuniqueness are proved without geodesic theory.

### fs-the-riemannian-volume-form-exists-on-every-riemannian-manifold

Accepted. The quotient atlas uses t-width below one, open saturations and smooth signed translations. Only finitely many orbit translates can be within distance one of a fixed representative, giving a positive separation bound and Hausdorffness; rational boxes give second countability. Euclidean metrics and absolute densities descend. A putative nonvanishing top-form coefficient changes sign from (0,0) to (1,0), contradicting continuity on that segment. Thus the actual Riemannian witness has density but no ordinary volume form.

### fs-the-distance-function-is-smooth-on-all-of-m-times-m

Accepted. Newton–Leibniz gives the lower bound |y-x| and the affine path attains it, proving the distance formula. Restriction to (x,0) is |x|, whose difference quotients are 1 and -1; the claimed global smoothness therefore fails.

### fs-the-hodge-star-is-defined-without-an-orientation

Accepted. With the same line metric, opposite orientations give star(1)=dx and -dx by the defining wedge identity. Since dx is nonzero, the ordinary star depends on orientation. The example does not concern an orientation-twisted star.

### ex-the-euclidean-metric-and-its-musical-maps

Accepted. The identity metric matrix and inverse give both musical formulas; pairing the differential with the metric yields the displayed gradient, including the quadratic example and dimension zero.

### ex-the-round-metric-on-the-sphere-as-an-induced-metric

Accepted. The inclusion differential is injective on sphere tangent spaces. The two displayed spherical-coordinate derivatives have squared norms 1 and sin²(theta) and zero mixed product. The angular domain is a genuine chart; failure at the poles does not affect intrinsic positivity, including S^0.

### ex-the-product-riemannian-metric

Accepted. Product-chart projection differentials yield the block diagonal tensor. Smoothness follows coefficientwise, and every nonzero product tangent vector has a positive summand. Empty and zero-dimensional factors cause no exception. The concrete squared norm is 25.

### ex-a-conformal-metric-on-the-plane

Accepted. The positive smooth factor gives G=e^{2u}I, inverse e^{-2u}I and determinant e^{4u}. Direct pairing verifies the gradient; the positive determinant square root gives the density. The explicit u=x, f=y computation is correct.

### ex-the-hyperbolic-upper-half-space-metric

Accepted. On the stated domain y>0 every coefficient is smooth and the quadratic form is strictly positive. The determinant y^{-2n} has positive square root y^{-n}, also for n=1. No curvature or completeness assertion is used.

### ex-the-flat-torus-metric-from-periodic-euclidean-coordinates

Accepted. Openness of the quotient and injectivity on small boxes give charts. Finite nearby integer vectors give a positive separation of distinct orbits, and rational boxes give second countability. Transition derivatives are identity, so the positive Euclidean tensors glue. The n=0 and n=1 cases and the explicit squared norm are consistent.

### ex-length-and-distance-on-the-circle

Accepted. A finite angle-arc subdivision and finitely many endpoint adjustments produce a piecewise C^1 lift. Speed equals the absolute angular derivative; piecewise Newton–Leibniz yields the lower bound for every lift endpoint. Nearest-integer rounding and the displayed constant-speed arc attain it. Equal endpoints and the two distinct antipodal semicircles are checked.

### ex-a-riemannian-distance-with-no-cross-component-finite-value

Accepted. Connectedness of the parameter interval excludes every cross-component path, giving infinity under the declared convention. Piecewise Newton–Leibniz gives the same-line lower bound |y-x|, attained by the explicit affine curve, including equal endpoints.

### ex-volume-density-in-polar-coordinates

Accepted. Expanding the differentials gives diag(1,r²) and positive square root r on r>0. The wedge Jacobian is also r, so the density and oriented form agree with the standard orientation. The angular chart restriction and exclusion of the polar origin are correct.

### ex-hodge-star-on-euclidean-three-space

Accepted. Each listed complementary wedge has the required sign and all off-diagonal pairings vanish by repeated factors. The two-form table, top and zero degrees and linear combination check agree. The exponents k(3-k) are even for all four relevant degrees.

### ex-divergence-in-polar-coordinates

Accepted. Substitution of sqrt(det G)=r into the reviewed coordinate divergence formula yields the claimed expression because r is independent of theta. The conversion from orthonormal to coordinate angular component b/r is correct. The radial and angular examples give 2 and 0; division is confined to r>0.

### cex-a-degenerate-pullback-metric-under-a-constant-map

Accepted. The constant differential gives the zero pullback. On nonempty positive-dimensional M a coordinate tangent vector witnesses failure of positivity; the explicit real-line example refutes the universal statement. The empty-domain exception is expressly handled and agrees with the library manifold convention.

### Page: the-de-rham-complex-homotopy-and-mayer-vietoris

Accepted. The complete page text and ordered list of 39 items agree with the manifest and reviewed arguments. The real graded-algebra convention, second-minus-first difference, positive-degree Poincare result, low-dimensional calculations and explicit countable-choice uses are consistent. The interval operator precedes its consumers; the continuous result contains its smoothing argument. No page prose asserts an additional unsupported result.

### Page: the-de-rham-complex-homotopy-and-mayer-vietoris-examples

Accepted. The complete page text and 12 example IDs agree with the manifest and A-page interfaces. The actual calculations justify the claimed groups, products, periods, annulus equivalence and connecting-form sign. The page introduces no stronger global exactness or variance assertion.

### Page: riemannian-metrics-length-distance-and-volume

Accepted. The complete page text and ordered list of 50 items agree with the manifest. Positivity, stationary path pieces, componentwise distance, lack of assumed minimizers, density versus oriented volume and star, and the explicit Mobius obstruction match the authored proofs. Local metric and exterior-metric suppliers precede consumers. Boundary and zero-dimensional conventions remain consistent, and the deferred Hodge-theory remark is not consumed.

### Page: riemannian-metrics-length-distance-and-volume-examples

Accepted. The complete page text and 12 example IDs agree with the manifest. Quotient-chart metric descent, circle minimization, polar formulas and all three-dimensional star signs are established in their examples. The empty constant-map domain exception is retained. No curvature or completeness conclusion is inferred from the upper-half-space metric.

### Batch 9 completion, source evidence, dependencies and checks

All 113 authored items and four pages are accepted, with one exact `authored:9:<id>` decision each in `phase-2-catchup-24-alpha-d-6b-decisions.json`. The existing 42 batch-8 decisions and all earlier report sections are preserved. Every one of the 88 proof-bearing owning contracts has an item-specific completed `risk_review`; definitions and the deferral remark have individual authored decisions. No mathematical repair, withdrawal or escalation was needed. No repair-confidence field or independent certification is asserted for these acceptances.

Only the assigned review report, merged decision file, batch-9 risk reviews, and the authorized published ledger were edited. Authored items, pages, manifest, provenance, contracts' derivations/citations, page order and dependency declarations needed no changes. The manifest's current claim for each item was compared to the reviewed text; all four page lists match the manifest in order. No new local item or page was created. **Shared-plan and Phase-2 amendments for the serial lead: none from this review.** Existing author amendments and other groups' decisions remain their owners' records.

Authoritative source sections actually read for the nontrivial smoothing construction:

- John M. Lee, *Introduction to Smooth Manifolds*, Theorem 6.21, printed pp.136–137 (PDF pp.154–155); Theorem 6.24, printed pp.139–140 (PDF pp.157–158); Proposition 6.25, printed pp.140–141; Theorem 6.26, printed p.141. Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf. These sections give positive-error Euclidean approximation, tubular neighbourhoods of embedded submanifolds, smooth retraction, and approximation relative to a closed set when the map is smooth nearby. Checked: the normal addition map has invertible differential on the zero section; admissible radii shrink monotonically; the positive radius function controls global injectivity; the approximation segment stays inside the retraction domain. The owned argument supplies its countable choices and open endpoint collars explicitly.

The current published embedding and Euclidean-approximation proofs were read completely, including their countable-choice constructions. The authored continuous-homotopy corollary proves the needed tubular and relative smoothing steps locally, so an unproved relative endpoint assertion is not treated as a supplier. The Mayer–Vietoris proof's grouped supports and signed lift were checked directly; the cochain connecting-map and naturality suppliers were read at their stated interfaces. The Radon-density construction, its smooth-integral agreement, general Stokes, nonzero-period obstruction, and positivity of oriented integration were also read in their current published text. Compact support, finite localization, real coefficients, degree ranges and outward-normal-first boundary orientation were checked where used. The remaining evidence above records the actual coordinate, quotient, first-exit and finite-lift arguments rather than relying on source titles alone.

The owned `phase-2-catchup-24-batch-9.cross-batch-dependencies.json` remains `[]`. A fresh read-only `collect` through `tools/frontier-dependency-ledger.mjs` found zero owned cross-batch edges and zero orphaned owned reviews, with batch 9 present in reviewed inputs. Manual argument reading found no undeclared changing-frontier supplier. Thus no owned input or derived frontier record required amendment. The local same-page dependencies are fully authored; no Recorded result was consumed, including the deferred codifferential/Hodge remark.

Published findings: the complete current proofs of `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, and `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric` confirm their existing choice/refinement debt. The canonical published-consumer ledger's section “Batch 9 Step 6B supplier reread — 2026-09-10” records exact proof steps, supplier IDs/status, owned local closure and Phase-3 strategy. Their unique A-P index rows now point to that reread; classifications and counts are unchanged. The lock was acquired by `mkdir`, current entries reread and merged, and only this review's lock released by `rmdir`. A sound local construction in this batch does not repair any of those published proofs. No new concrete workflow defect was found, so no duplicate defect-ledger row was appended.

Local checks completed:

- `node tools/risk-report.mjs research/phase-2-catchup-24-batch-9.proof-contracts.json --require-reviewed`: 88 routed items, zero errors.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-9.proof-contracts.json --strict`: 88/88 checked, zero errors or warnings. Every recorded derivation claim also matches its current item text after whitespace normalization.
- Explicit-path `tools/precheck.mts` over all 113 assigned item paths: 88 proof-bearing items checked, zero failures. No content changed, so reflow was unnecessary.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-9.pages.json`: 113 scoped items, zero errors or warnings.
- Decision inventory: exactly 117 unique batch-9 obligations, all accepted with nonempty evidence and empty defect references; 42 prior group decisions preserved. No supplemental decision was replaced.

Unresolved owned mathematical or source-understanding obligations: none. The published repairs above remain open for their licensed owners. Next action belongs to the engine and serial lead: full-join hash stamping and the unchanged 6C/6D protocols. No transition or audit gate was invoked here.
