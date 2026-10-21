# Batch 100 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-100`.

Review completed in the generated dependency order. Scope: three touched-item decisions, one refuter-page decision, eighteen HIGH/CRITICAL risk reviews; no reader findings or foreign gate routes.

## Completed level 0 reviews

- `def-double-branched-cover-of-an-oriented-link`: checked the nonempty finite smooth-link domain, complement eligibility, index-two kernel and the phase-twisted local model. Following a longitude in `(s,exp(i eta s)z^2)` changes the square-root sheet exactly when eta is odd; meridians always exchange sheets. This handles nonzero longitude monodromy without imposing a false zero-framing condition. Definition discharges to the assigned well-definedness lemma; AC is explicit.
- `cex-knot-kt-45-boundary-case`: independently computed both total homologies and early pages. The contractible filtered pair x -> y lowers filtration by one, so d0=0, d1(x)=y; adjoining z gives E1 dimensions 3 versus 1 and common E2 and total homology of dimension 1. No empty-link claim or implication about the actual knot spectral sequence is made.

Sources opened: Hatcher, Algebraic Topology, https://pi.math.cornell.edu/~hatcher/AT/AT.pdf (covering classification and duality locators checked); Ozsváth–Szabó v1, https://arxiv.org/pdf/math/0309170v1 (Proposition 2.1 and §§4,6 checked). Local prerequisite statements read: link/complement, covering/regularity/classification/uniqueness, AC, filtered complex, spectral sequence, page transition, finite convergence, Alexander duality, Hurewicz, surface classification and annulus suppliers.

No mathematical change made so far. Next: complete level 1 branch-cover and tangle reviews, then half-twist lift.

## Completed level 1 reviews

- `lem-double-branched-cover-of-an-oriented-link-well-defined`: the coordinate meridian basis defines the unique onto mod-two character; the phase model realizes the peripheral character and accommodates framing parity. Transporting tubular charts along the ambient isotopy gives the claimed smooth oriented diffeomorphism. Checked Hatcher Theorem 1.38 (printed p. 67), Corollary 3.45 (p. 255), and current direct prerequisites.
- `lem-double-cover-of-two-arc-rational-tangle-is-solid-torus`: checked every cell count and boundary monodromy; capping the connected oriented chi-zero surface with two boundary components gives the sphere. The resulting annulus times I is a solid torus. Ozsváth–Szabó v1 Proposition 2.1 proof (printed p. 6) agrees.

No repair or unresolved prerequisite at these levels. Next: explicit half-twist model and level 4 Floer/tangle suppliers.

## Completed level 2 review

- `lem-lift-of-two-strand-half-twist-is-annular-dehn-twist`: checked the complex orientation, degree-two ellipse map, simple branch germs, symmetric cutoff, nested-ellipse coordinate Jacobian, quotient rotation sign, boundary-fixed lift uniqueness, cutoff isotopies, and reversal. The positive quotient angle is `2 pi (1-rho)` in the oriented disk coordinate, so the proof establishes handedness. Its qualification to compatible local square germs avoids an unjustified smooth lift of arbitrary germs. Hatcher Proposition 1.30, printed p. 60, supplies ordinary isotopy lifting away from the branch points. No change required.

### lem-hat-CF-genus-one-lens-space-order-three-rank-three

Reviewed all three steps and all six direct interfaces. Curves (1,0),(1,+/-3) have exactly three generators; the supplier explicitly computes zero normalized full-curve periodic lattice and contracts every same-end relative disk in the plane, excluding distinct ends. Region-degree homotopy invariance and the actual positivity/energy bound exclude nonconstant strips for allowed nearly symmetric data, not just flat J. Constant operators have real index zero. Global admissibility includes empty sectors; invariance is invoked only after computing the diagram. Both orientations have total rank three, no graded claim. Source primary disk positivity and invariance are the stated analytic inputs; no reader/refuter finding on this item.

### lem-os-link-surgery-filtered-complex-and-triangle

Reviewed every step, general-Y slope labels lambda,mu+lambda,mu, all finite path sums and all direct analytic/invariance interfaces. Independently checked Ozsvath-Szabo v1 Theorem4.1/Remark4.2 p17; equations9-10, Lemma4.5 and Proposition4.6 pp21-23; Theorem4.7 pp24-27 and total-cube proof p27. Actual top-cycle vanishing and filling comparison are explicitly external, not inferred from mere A-infinity identities. D raises cube weight and lowers n-|I|, so preserves the increasing filtration. Infinity-face is a subcomplex, quotient the 0/1 cube; enlarged-coordinate acyclicity yields the comparison. n=0 and n=1 are retained. The prose in 4.1 says step1.2 but its actual tag and argument point to 2.1, an immediately recoverable nonfatal cross-reference typo only. No full-AC classification or filtered presentation invariance claimed.

### lem-os-unlink-resolution-covers-and-floer-tqft

Reviewed all six steps: the two-ball k-handle branched construction gives a genus k-1 handlebody and its double; k=1 gives S3. Checked all four Frobenius tables, including marked merge killing the unmarked X and marked split creating new X. Exterior split (xd+xe) wedge j is independent of child lift because (xd+xe) wedge (xd+xe)=0. Ozsvath-Szabo v1 Propositions6.1-6.2 pp32-34 supply the actual exterior-module handle maps and simultaneous arc-lift bases with gamma0=0, including marked cases; counts are not inferred from dimensions. Local analytic and full-group suppliers were read at their exact interfaces. Nonempty based domain and F2 only; no unsupported integral or arbitrary unlink naturality.

### lem-trefoil-double-branched-cover-is-lens-space-order-three

Reviewed all five steps and the exact cover/tangle/half-twist/lens/van-Kampen statements. Disk-open-book covering has trivial sheet monodromy near the axis because linking is two; both lifted binding neighborhoods fill the annular mapping torus along u. Untwisting theta prime=theta+2 pi k rho u gives boundary meridians (0,1),(k,1). Lower torus identifies l=mu_U,m=lambda_U, so upper meridian is k mu_U+lambda_U, establishing L(3,1) up to orientation for k=+/-3. Van Kampen eliminates the attached core and gives cyclic order |k|=3. Knot orientation reversal leaves the mod-two character unchanged. No conclusion from determinant alone; no diagrams in this item.

## Completed level 5 review

### def-reduced-khovanov-cohomology-of-a-based-link-over-f2

Reviewed both proof steps, the quotient Definition and all five suppliers. X_p commutes with disjoint edges, merge by associativity and marked split by Delta(Xa)=(X tensor id)Delta(a)=(id tensor X)Delta(a), checked on a=1,X. Thus image X_p is a subcomplex, quotient d squares to zero and its marked factor is F2{1}; j-1 makes that label degree zero. Marked-point input forces nonempty diagram, satisfying the current procedure/property theorem domains; zero crossings still works. The source Frobenius square has correct typed composites. Component-independence is explicitly deferred to its separate lemma, not assumed. Current contract procedure-theorem quote must use its corrected nonempty domain.

Next: level 6 first differential, basepoint independence, and trefoil cube calculation.

### lem-os-first-differential-is-reduced-khovanov

Reviewed all four proof steps, supplier current proofs and source OS v1 Figure1, Proposition2.1, Proposition6.2 and Theorem6.3. E0 diagonal counts give E1 resolution homology; only weight-one components survive as d1. One simultaneous vertex basis handles every edge, including both marked maps. Mirror has nminus=nplus(D), so i=|I|-nplus(D), reduced j=sum unmarked degrees+|I|+nminus(D)-2 nplus(D), and i=nminus(D)-p for p=n-|I|. Marked merge/split also decrease the unmarked-label degree by one. No Floer cochain grading or presentation invariance inferred. The prose step1.3 in 4.1 is a recoverable reference typo for the explicitly tagged 3.1, not a proof gap.

### lem-reduced-khovanov-over-f2-basepoint-independence

Verified all five steps on the finite cube, including Nm=m(N tensor id+id tensor N), the analogous split identity, N squared=0 and NXp+XpN=id specifically in characteristic two. Orthogonal chain idempotents XpN and NXp split C, with Xp,N inverse on the two summands and raw quantum shift -2. Thus h(i,j)=r(i,j-1)+r(i,j+1); finite-support downward recursion determines r uniquely for every mark, including different components. Finite equal-dimensional bigraded spaces give noncanonical isomorphisms without infinite choice. Source Shumakovitch 3.1.A-C gives the same degree-two operator, Turner 1.2 states the F2 splitting/component independence. No integral or diagram-invariance claim here.

### lem-trefoil-reduced-khovanov-rank-three

Reviewed all three steps and every Frobenius/procedure supplier. All-through two-braid closure has two circles; r positive cap-cups give r circles, hence state counts 2,1,1,2,1,2,2,3 and reduced cochain dimensions 2,3,6,4. The three last split tables agree with marked split, unmarked split and marked split, respectively, in suitable common state bases; d1 gives marked splits from the three one-dimensional states. Independent F2 elimination on the exact displayed matrices gives ranks 1,2,3; both consecutive products are zero and cohomology dimensions are 1,0,1,1. Arbitrary mark can use the preceding reviewed component/point independence result; the displayed matrices fix a compatible representative mark and bases. Shifts do not affect total rank; no diagram in this lemma.

### lem-link-surgery-e-one-differential-is-reduced-khovanov

Reviewed all three steps after local differential and basepoint suppliers. F1 is E1 vertex homology with weight-one maps (not raw E0); F2 supplies a single simultaneous state identification including marked quotient and normalized mirror grading; its finite direct sum is an actual cochain isomorphism. Page transition gives E2 as reduced cohomology, and component independence is only asserted for this fixed diagram. Checked OS v1 Theorem6.3 pp34-35 and all three current supplier proofs. No diagram or stronger filtered invariance claimed.

### thm-reduced-khovanov-over-f2-link-invariance

Reviewed all three steps and all eight prerequisite interfaces. The reader correctly adds existence of a regular finite diagram for an arbitrary nonempty link in S3: move off infinity then use the AComega projection theorem. Finite crossings leave exterior marks; each Reidemeister disk has an unchanged continuing exterior arc. The arbitrary-based-link local lemma, not the knot-only reduced clause of the older homotopy lemma, supplies marked-action-commuting maps/homotopies; these descend modulo two. Fixed-diagram component independence allows different auxiliary marks at every move. Empty move sequence handled, finite bigrading support and noncanonical choices retained. Statement unchanged. Current source exactly equals reader-post hash; full HEAD preimage matches reader-pre hash. Accepted reader repair; manifest deps need synchronization.

### thm-os-spectral-sequence-for-a-fixed-link-diagram

Reviewed all four steps and all nine supplier interfaces after lower-level reviews. The actual OS subordinate construction supplies D squared=0 and the branched-filling comparison, with the labelled external top/filling inputs retained. The filtration p=n-|I| is finite of length n+1 and increasing; n=0 gives a single vertex. E1 is the direct sum of vertex Floer homologies and d1 the surgery edges, identified with the mirror reduced cube by the reviewed common-basis lemma; E2 is its cohomology. The finite-convergence supplier gives associated graded of image-filtered total homology, not a filtered equivalence between diagrams. AC for the cover and AComega for analytics are explicit. Checked OS v1 Theorem6.3 proof pp34-35 and Weibel 5.5.1 p135. No diagram or unresolved prerequisite.

### thm-os-khovanov-spectral-sequence-to-branched-cover-floer

Reviewed all three steps, all seven exact prerequisite statements and the current fixed-diagram and link-invariance proofs. The reader adds the missing projection-existence interface, chooses an isotopic representative in R3 and uses branched-cover invariance to identify the original target. Mirror reduced cohomology is then independent of diagram/component by the preceding theorem. Both AC and AComega assumptions are stated; no stronger filtered-presentation invariant follows or is claimed. Statement is unchanged, current source equals reader-post raw hash, and complete HEAD preimage matches reader-pre raw hash. Accept reader repair; synchronize its two new deps in the manifest. This is endpoint assembly with explicitly external OS surgery inputs, not a new analytic proof.

### ex-knot-kt-45-worked-cases

Reviewed the complete Example, both proof steps, four actual suppliers and the closed three-crossing braid diagram. The drawn SW-NE over-strands and two exterior closure arcs agree with the positive mirror convention; no mathematical step depends on the drawing. The endpoint lemmas establish reduced Kh rank3 and rank3 HF for both lens orientations. For r>=2, dim E(r+1)=dim E(r)-2 rank d(r) forces d(r)=0 because E2 and E-infinity both have dimension3. Reader correctly removes the false claim that this controls d1; the actual reduced first-page chain groups have dimensions 2,3,6,4 and nonzero differential. Original/current statements differ only in this necessary scope correction; source equals post hash and HEAD equals pre hash. Search items/library found no logical or reference consumer besides its owning frontmatter-only B page; no downstream repair or outside escalation. Manifest Example synchronized; no source edit by Alpha.

## Decisions and metadata reconciliation

All three touched carriers: **accepted_repair**, repair_confidence 1. Their current raw bytes equal the immutable reader-post hashes, and git `7a78a7796c3a1fd74b411546292993a44f6f182f` supplies complete preimages with the exact reader-pre hashes. The two existence additions are nonfatal proof/citation polish, not false mathematical Statements. The Example repairs a false differential-range conclusion. Alpha changed no item or page source.

The reader had not synchronized the two theorem dependency arrays or the Example text into the batch manifest; those entries now match the current sources. Strict contract inspection found two F0 citations using a bold prose subheading as a source section and omitting F0 from derivation inputs. Corrected each to Definition, an actual source substring, and the complete input list. Refreshed the three owned procedure-theorem quotations to the current nonempty-diagram Statement following the batch-90 supplier domain repair. No mathematical change to those three consumers is needed because their marks force nonempty input. These are metadata reconciliations, not extra owed decisions or extra authored defects.

`refuter:100:1`: **false_positive**. The actual bound page carrier already contains page_layout: compact-v1 and has an empty body. Its raw SHA256 7664e07ead9763bf48bcf89943fb3a88f003f3bfeb0883091b42fdd52f21fbae equals both immutable reader-pre and reader-post page hashes. Hashing its file_sha256 and manifest_sha256 carrier reproduces the exact refuter observed_sha256 1b2e6579e29800846007376645f5da799ef6215739161917050e20dbcb370a2e. Thus the flag was present at the bound observation, not restored by a later repair. The two-example inventory, requires edge and draft status are correct. No edit needed. The closed false-positive ledger row records disposition of this native finding; no mechanical failure or hypothetical missing flag is treated as a confirmed defect.

## Consumer and publication checks

The two theorem Statements are unchanged. The Example's defining-section correction has no item consumer or other reference consumer in `items/` or `library/`; only its owning examples page lists it, without a narrative claim. That page stays draft and frontmatter-only. No outside repair, proposed withdrawal, or defective published supplier was found. The new projection/link suppliers are published context, so there are no new in-run cross-batch edges to add. Frontier dependency evidence is recorded in the shared ledger.

## Source and diagram reading limits

Checked the exact primary input statements and relevant arguments in [Ozsváth–Szabó v1](https://arxiv.org/pdf/math/0309170v1): Proposition 2.1, pp.6–7; Figure 1, p.2 (visually inspected from the downloaded PDF after the web screenshot failed); §4 equations 9–10, Lemma 4.5, Proposition 4.6, Theorem 4.7 and the total-cube comparison, pp.21–27; Propositions 6.1–6.2 and Theorem 6.3, pp.32–35. The explicit library calculations and the external imports remain distinct. Also checked [Hatcher](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), Proposition 1.30 p.60, Theorem 1.38 p.67 and Corollary 3.45 p.255; [the primary disk paper](https://arxiv.org/pdf/math/0101206), Lemma 3.2, Theorem 3.4, Lemma 3.5 and its energy-bound argument, pp.20–24; [Lipshitz](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf), §§5.1–5.3; [Shumakovitch](https://arxiv.org/pdf/math/0405474v2), §§3.1–3.2 operator statements; [Turner](https://www.i2m.univ-amu.fr/perso/luisa.paoluzzi/Turner1.pdf), §1.2; and [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Theorem 5.5.1 p.135. No complete-paper reading, recursive audit of the entire analytic package, or new local reconstruction of imported Floer results is claimed.

Reviewed the owned trefoil braid diagram and the relevant supplier Frobenius square, RII state-indexing square, and bracket smoothing/crossing-sign charts. Their objects, composites, pairings, over-strands and closures agree with the text; no diagram repair or addition is required. No owned Statement/Definition/Example has an inline hyperlink; reference sections and both page inventories remain intact.

## Local verification

- Initial risk-report: 18 HIGH/CRITICAL items among 20. Completed specific per-item risk reviews in the contract; final --require-reviewed: 0 errors, 20 items routed.
- F2 elimination of the displayed trefoil matrices: ranks 1,2,3; both consecutive products zero; cohomology dimensions 1,0,1,1.
- Strict proof-contract: 0 errors across all 20 entries after metadata repair. One structural shotgun-bracket warning remains on the unlink lemma's final recap; the actual proof uses the imported maps at 4.1 and separately proves the finite algebra, so this is not a logical defect.

- Scoped precheck: PASS for all three touched items.
- Scoped rendercheck: 22 files (20 items and both pages), 0 errors; actual KaTeX and renderer YAML parsing completed.
- Manifest-deps: 20 items, 0 errors.
- Final single batched proof-layout invocation: 3 items, 8 steps, 0 defects.
- Defect ledger: appended three closed reader-repair rows and one closed false-positive disposition using the serialized append tool; generated view refreshed. No ledger row was created for the intermediate mechanical contract failures.
- Decision inventory: exactly four owed obligations, with one row per obligation and exactly one closed ledger row referenced by each decision. No extra decision for an untouched risk-only carrier.

No unresolved mathematical blocker or published-content repair remains in this dispatch. No new item/page source edit, judgment, stamp, publication or full gate battery was performed. The engine owns stamping and full gates.
