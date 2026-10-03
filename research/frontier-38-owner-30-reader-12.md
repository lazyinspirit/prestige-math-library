# Reader 12 — batch 12, frontier-38-owner-30

Reviewed the two assigned pages and all 25 authored items independently of author decisions. Repaired 24 assigned draft items, A-page prose and the affected batch proof contracts. Three uneditable defects remain: two false claims in B-page prose and a missing argument in a published density supplier. No item was withdrawn, published, judged or certified.

## Scope and opened inventory

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the exact batch page manifest, batch notes and batch proof contracts. Consulted the relevant workflow/checker clauses. Engine status for `.autopilot/frontier-38-owner-30` showed an active Step 5a run; this review did not use concluded-run RESUME files.

Opened pages:

- `library/differential-topology/oriented-and-mod-two-intersection-numbers.md` (A; prose repaired).
- `library/differential-topology/oriented-and-mod-two-intersection-numbers-examples.md` (B; read-only).

Opened item bodies in supplier-before-consumer order; the page order below respects their local dependency order. Published supplier statements and conventions were opened before their relevant uses. Added replacement suppliers were opened before the associated repairs.

### oriented-and-mod-two-intersection-numbers

- `items/def-transverse-complementary-dimensional-intersection-set.md` — read; unchanged; no local defect found.
- `items/lem-compact-transverse-complementary-intersections-are-finite.md` — read and repaired.
- `items/def-mod-two-intersection-number.md` — read and repaired.
- `items/lem-overlap-of-arc-length-parametrizations-of-a-one-manifold.md` — read and repaired.
- `items/lem-boundary-of-a-compact-one-manifold-has-even-cardinality.md` — read and repaired.
- `items/lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count.md` — read and repaired.
- `items/thm-transverse-preimage-for-manifolds-with-boundary.md` — read and repaired.
- `items/thm-mod-two-intersection-number-is-homotopy-invariant.md` — read and repaired.
- `items/lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign.md` — read and repaired.
- `items/def-local-oriented-intersection-sign.md` — read and repaired.
- `items/def-oriented-intersection-number.md` — read and repaired.
- `items/lem-preimage-orientation-agrees-with-the-local-intersection-sign.md` — read and repaired.
- `items/lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs.md` — read and repaired.
- `items/thm-oriented-intersection-number-is-homotopy-invariant.md` — read and repaired.
- `items/cor-oriented-intersection-reduces-to-mod-two-intersection.md` — read and repaired.
- `items/thm-intersection-number-under-factor-interchange.md` — read and repaired.
- `items/prop-two-map-intersection-as-a-diagonal-preimage.md` — read and repaired.
- `items/cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary.md` — read and repaired.
- `items/cor-negative-expected-dimension-generic-intersections-are-empty.md` — read and repaired.
- `items/rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact.md` — read and repaired.
### oriented-and-mod-two-intersection-numbers-examples

- `items/ex-latitude-and-meridian-intersections-on-the-torus.md` — read and repaired.
- `items/ex-two-projective-lines-have-one-mod-two-intersection.md` — read and repaired.
- `items/ex-degree-as-intersection-with-a-regular-value.md` — read and repaired.
- `items/cex-geometric-cardinality-is-not-homotopy-invariant.md` — read and repaired.
- `items/cex-noncompact-intersections-can-escape-during-a-homotopy.md` — read and repaired.

The original manifest has 60 distinct external dependency targets. Their full relevant statement/definition sections, including conventions and boundary qualifications, were opened:

- `items/cor-transverse-intersection-theorem.md`
- `items/def-a-smooth-map-transverse-to-an-embedded-submanifold.md`
- `items/def-circle-as-real-line-mod-integers.md`
- `items/def-compact-space.md`
- `items/def-countable-choice.md`
- `items/def-degree-of-a-proper-smooth-map-by-compact-support-cohomology.md`
- `items/def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space.md`
- `items/def-diffeomorphism-and-local-diffeomorphism-of-manifolds.md`
- `items/def-embedded-smooth-submanifold-with-boundary.md`
- `items/def-embedded-submanifold-and-slice-chart.md`
- `items/def-induced-boundary-orientation.md`
- `items/def-integers-modulo-n.md`
- `items/def-internal-direct-sum.md`
- `items/def-interval.md`
- `items/def-local-orientation-of-a-regular-c-one-map.md`
- `items/def-local-orientation-sign-of-a-regular-preimage.md`
- `items/def-neat-submanifold-of-a-manifold-with-boundary.md`
- `items/def-orientation-of-a-finite-dimensional-real-vector-space.md`
- `items/def-oriented-smooth-manifold-and-oriented-chart.md`
- `items/def-product-orientation.md`
- `items/def-riemannian-metric-and-riemannian-manifold.md`
- `items/def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary.md`
- `items/def-smooth-family-of-maps-and-evaluation-map.md`
- `items/def-smooth-function-on-a-relatively-open-subset-of-a-half-space.md`
- `items/def-smooth-manifold.md`
- `items/def-smooth-map-between-manifolds-with-boundary.md`
- `items/def-subspace-topology-top.md`
- `items/def-transverse-embedded-submanifolds.md`
- `items/def-transverse-linear-subspaces.md`
- `items/def-transverse-smooth-maps.md`
- `items/def-two-dimensional-torus.md`
- `items/ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds.md`
- `items/ex-great-circles-as-round-sphere-geodesics.md`
- `items/ex-real-projective-space-cover-as-a-discrete-fiber-fibration.md`
- `items/ex-real-projective-space-from-affine-charts.md`
- `items/ex-real-projective-space-is-orientable-exactly-in-odd-dimension.md`
- `items/lem-an-odd-permutation-reverses-oriented-simplex-sign.md`
- `items/prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold.md`
- `items/prop-boundary-orientation-is-independent-of-the-outward-vector-field.md`
- `items/prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary.md`
- `items/prop-components-of-a-topological-manifold-are-open-and-at-most-countable.md`
- `items/prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure.md`
- `items/prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold.md`
- `items/thm-a-regular-level-set-is-an-embedded-submanifold.md`
- `items/thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts.md`
- `items/thm-canonical-tangent-and-cotangent-splittings-for-products.md`
- `items/thm-closed-subspace-of-a-compact-space-is-compact.md`
- `items/thm-continuity-preimage-characterisation.md`
- `items/thm-degree-is-invariant-under-proper-smooth-homotopy.md`
- `items/thm-euclidean-inverse-function-theorem.md`
- `items/thm-every-smooth-manifold-admits-a-riemannian-metric.md`
- `items/thm-neat-submanifolds-have-boundary-adapted-slice-charts.md`
- `items/thm-rank-nullity.md`
- `items/thm-regular-value-formula-for-degree.md`
- `items/thm-relative-whitney-approximation-for-manifold-valued-maps.md`
- `items/thm-strong-whitney-approximation-by-transverse-maps.md`
- `items/thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold.md`
- `items/thm-transversality-homotopy-theorem.md`
- `items/thm-transverse-fibre-product-theorem.md`
- `items/thm-transverse-preimage-theorem.md`

Additional published targets opened to resolve deficiencies:

- `items/thm-continuity-characterisations-top.md`
- `items/prop-relative-transversality-preserves-a-map-on-a-closed-good-region.md`
- `items/prop-the-diagonal-is-an-embedded-submanifold.md`

Full published argument bodies were additionally examined for the general continuity characterization, relative transversality, transversality homotopy theorem, relative manifold-valued Whitney approximation, strong Whitney transverse approximation, transverse fibre product, diagonal embedding, transverse normal orientation, product boundary orientation, projective affine charts, and the projective covering example. Other routine suppliers were reviewed at their exact statement/convention interface, not represented as complete independent proof audits.

## Source evidence

Opened the complete primary PDFs through the web tool and read the complete relevant arguments in their local extracted sections:

- [Milnor, *Topology from the Differentiable Viewpoint*](https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf), appendix printed pp. 55–57: arc-length overlap and classification; §5 printed pp. 26–29: signed zero-dimensional orientations and the compact oriented trace calculation. Local text: `/tmp/pair12/milnor-appendix.txt` and the corresponding §5 section of `/tmp/pair12/milnor-4-5.txt`.
- [Guillemin–Pollack, *Differential Topology*](https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf), Ch. 2 §4 printed pp. 77–84: boundaryless compact-source parity theory, its homotopy proof, boundary theorem, two-map exercise and failed-hypothesis exercise; Ch. 3 §3 printed pp. 107–115: oriented ambient domain, normal-first local sign, degree, two maps, diagonal determinant and factor interchange. Local text: `/tmp/pair12/GP-ch2-4.txt` and `/tmp/pair12/GP-ch3-3.txt` through printed p. 115.

These sources resolve the classification, local-sign and diagonal uncertainties. Milnor printed p. 26 defines orientations and does not discuss proper homotopies; the inaccurate properness locators in the assigned remark and escape counterexample were corrected. Hirsch and the Stanford lecture notes were not independently read in this review, and no claim of that source coverage is made.

## Repairs and exact mathematical evidence

### `lem-compact-transverse-complementary-intersections-are-finite`

Replaced the real-line-only continuity citation by the arbitrary-space characterization, clause (c). Replaced the literal equality of a preimage with its fibre product by their graph/projection identification, and cited the transverse preimage theorem for its embedding in X. Evidence: the opened real continuity theorem is restricted to A contained in R and real-valued maps; the replacement theorem applies to general spaces.

### `def-mod-two-intersection-number`

Made the boundaryless-source domain explicit and supplied the missing two-map definition through the diagonal, including the quotient-differential transversality computation. This supplies the simultaneous-deformation claim used for projective lines. Evidence: the opened diagonal proposition, fibre-product theorem, and the product homotopy construction; the new extension remains justified by the invariance theorem under AC_omega.

### `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`

Replaced the false component-order assertion in old step 4.1 by the four-side graph argument; treated relatively open interval components, included endpoints, and infinite ends. Retained an explicit two-component circle construction and its seam and injectivity checks. Qualified the inverse-function argument for boundary images. Evidence: Milnor appendix pp. 55–57, plus the elementary graph/projection arguments written into current steps 1.1–4.1. The given metric requires no choice.

### `lem-boundary-of-a-compact-one-manifold-has-even-cardinality`

Declared the inherited AC_omega in the statement; restricted the maximal-extension argument to a connected component before treating general W; explained why the union of extensions is injective, corrected the inverse arc-length variable, and extended the component argument to half-space charts. Evidence: the metric supplier explicitly assumes countable choice; the repaired overlap lemma and the local half-space proof close the classification route.

### `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`

Removed the old two-vector positive/negative basis of a one-dimensional tangent space. Computed the point signs from the single outward tangent vector and included reversed interval orientations. Declared the classification assumption. Evidence: the opened outward-normal-first definition and Milnor pp. 26–29; current step 1.1 now gives +1 at b and -1 at a directly.

### `thm-transverse-preimage-for-manifolds-with-boundary`

Separated interior Euclidean charts from boundary half-space charts, cited the inverse function theorem used by the local construction, and repaired the zero-dimensional boundary caveat. Face transversality makes a zero-dimensional preimage avoid the boundary automatically; negative expected dimension gives an empty preimage. Evidence: a surjection from a face of dimension n-1 to a normal space of dimension n is impossible; the explicit Phi chart proves the positive-dimensional case.

### `thm-mod-two-intersection-number-is-homotopy-invariant`

Repaired endpoint evaluation order for [0,1] times X. Replaced the unsupported relative-transversality assertion by a collar reparametrization, constant extension to R times X, relative smoothing, and the actual relative-transversality proposition. Added the inherited classification assumption and corrected the claim that the whole trace proof was choice-free. Product homotopies close the two-map clause. Evidence: the opened relative Whitney theorem supplies smoothing, not transversality; the opened relative-transversality proposition supplies the second step on a boundaryless source.

### `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`

Corrected the false assertion that the external swap is orientation preserving. Its sign is (-1)^(kl), including -1 for two lines. Rewrote the argument with determinant rays, so dimension zero has two rays rather than a claimed unique orientation. Evidence: the image of the domain list must be reordered by kl transpositions; the product determinant definition gives the same internal comparison.

### `def-local-oriented-intersection-sign`

Corrected the all-zero-dimensional formula to eps_X eps_Z eps_M. Evidence: the determinant-line isomorphism compares the product of the source rays with the ambient ray; a negatively oriented ambient point reverses the sign.

### `def-oriented-intersection-number`

Extended the ambient domain from closed manifolds to oriented boundaryless manifolds, retaining a compact boundaryless source and closed target submanifold. Added the finite transverse two-map signed sum previously used but absent from the cited definition. Evidence: closedness of the coincidence set in a compact product gives finiteness; ambient compactness is not used. GP p. 107 uses this boundaryless, potentially noncompact ambient setting.

### `lem-preimage-orientation-agrees-with-the-local-intersection-sign`

Replaced the incompatible tangent-first normal convention and the operation of orienting a point by orienting its source tangent. Established the normal-first quotient determinant and kernel-first exact sequence for general transverse preimages, including boundary sources transverse on the face. Point signs follow from the zero-dimensional kernel ray. Specified the positive target-point convention for degree and the sign change for a negative point. Evidence: the explicit wedge and exact-sequence argument, the opened preimage theorems, and the regular-preimage sign definition.

### `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`

Replaced the incomplete quotient lifts and the nonexistent u_x in the x=0 case by a kernel vector with t-component 1 and determinant elements. Updated the facts and first step as well as the computation, retaining minus at t=0 and plus at t=1. Declared the inherited choice assumption and allowed a noncompact ambient manifold. Evidence: the shear preserves the product determinant; outward directions reverse at the two ends; current step 2.1 covers scalar quotient rays.

### `thm-oriented-intersection-number-is-homotopy-invariant`

Replaced the unlicensed relative use of strong Whitney density with the actual collar/relative-smoothing/relative-transversality construction. Removed the false caveat that ambient compactness is essential, compared transverse endpoints before extending the invariant, and declared inherited AC_omega. Evidence: the fixed-endpoint construction in the repaired mod-2 theorem and the signed trace boundary identity.

### `cor-oriented-intersection-reduces-to-mod-two-intersection`

Removed the concluding false assertion that the reduction statement is available exactly where the oriented number is unavailable. Comparison requires both numbers; parity alone survives without orientations. Made the inherited assumption explicit. Evidence: each sign is congruent to 1 modulo two, whereas no integral comparison is defined without orientations.

### `thm-intersection-number-under-factor-interchange`

Aligned the ambient domain with the corrected definition and retained the compact-source finite coincidence sum. The direct-sum supplier now correctly gives the sign of both the external swap and internal comparison. Evidence: the same pointwise (-1)^(xz) block permutation; no ambient compactness is used.

### `prop-two-map-intersection-as-a-diagonal-preimage`

Made the oriented boundaryless ambient hypothesis and the transversality condition for the numerical formulas explicit. Conditioned the zero-dimensional fibre-product fact on transversality. Replaced the old basis computation, which treated the image sum as a positive ambient basis regardless of its sign, with the full derivative block determinant. Explained the finite local-sign sum when the diagonal inclusion is noncompact. Evidence: quotient by the diagonal is the difference map; the block determinant has sign (-1)^z times det[df,dg], including source point-ray factors.

### `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`

Corrected the misleading title to identify the bounding cycle and algebraic count. Supplied the actual general preimage orientation rather than citing the special cylinder trace for arbitrary W. Proved the boundary sign by an outward vector and the map TB to TM/TA, then performed the block swap. Used the mod-2 definition directly for the unoriented clause and declared inherited AC_omega. Evidence: current step 2.1 proves eps_boundary=(-1)^(ab) eps_(A,B), including b=0.

### `cor-negative-expected-dimension-generic-intersections-are-empty`

Restricted the cited perturbation clause to a fixed closed embedded target submanifold; the arbitrary-transverse-map rank conclusion remains intact. The old citation did not prove strong-topology perturbation against an arbitrary map g or preservation of submanifold embeddings. Evidence: the opened strong Whitney statement names a fixed closed embedded Z. Its published proof defect remains separately reported below.

### `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact`

Stated complementary dimensions for finite counts and compactness of Z when deriving compact trace from properness of the combined map. Distinguished source-boundary contributions from failure of compactness. Removed the unsupported half-line escape explanation and corrected the Milnor locator. Evidence: a proper map need not have compact preimage of a noncompact closed Z; the explicit sine graph gives infinitely many transverse intersections; a source boundary creates extra trace endpoints even for a compact trace.

### `ex-latitude-and-meridian-intersections-on-the-torus`

Supplied the quotient smooth charts and compactness argument that the cited purely topological circle definition did not assert. Kept the meridian counts explicit for every parameter rather than claiming a choice-free application of classification-based invariance. Evidence: local real coordinates have integer-translation transitions; the projection of [0,1] covers Q; each meridian meets the latitude once.

### `ex-two-projective-lines-have-one-mod-two-intersection`

Replaced covering-implies-local-diffeomorphism and surjectivity-implies-image-intersection shortcuts by affine-coordinate inverses and antipodal saturation. Explained the quotient circle embedding, and stated AC_omega for the simultaneous-deformation obstruction. Evidence: normalization gives smooth local inverses; antipodally invariant great circles satisfy q(C1) intersect q(C2)=q(C1 intersect C2); the repaired two-map parity invariant supplies the obstruction.

### `ex-degree-as-intersection-with-a-regular-value`

Specified positive target-point, graph and fibre orientations. Separated the finite regular-value signed count for a proper noncompact source from I in the compact-source definition. Retained the degree formula for all proper maps and the fibre-first graph formula for compact M, with the opposite-order (-1)^n sign and n=0 determinant-ray case. Evidence: the opened published regular-value formula and the displayed triangular derivative matrix.

### `cex-geometric-cardinality-is-not-homotopy-invariant`

Made the circle witness well defined on R/Z by cos(2 pi u), sin(2 pi u), and changed the refuted claim to concern transverse endpoint maps. Distinguished the nontransverse tangency slice from the full evaluation map, which is transverse because its parameter derivative supplies the missing direction. Corrected the oriented-invariance citation and its assumption. Evidence: period-one invariance, the determinant -cos(theta), and derivative with respect to s equal to (0,1).

### `cex-noncompact-intersections-can-escape-during-a-homotopy`

Replaced the arctangent family as the proper-endpoint witness by F(x,t)=x-(1-t)x^2. Every slice is proper and transverse at its zeros, but the second root escapes as t approaches 1, changing cardinality 2 to 1 and signed/parity counts 0 to 1. Retained arctangent as a secondary example explicitly having improper endpoints; removed the invalid half-line explanation and corrected source/provenance metadata. Evidence: the two zeros and derivative signs are computed in steps 1.1–2.1; absolute values of every slice tend to infinity, while the combined zero trace is unbounded.

### A-page prose and proof contracts

Corrected the A-page assertion that a cycle must meet a bounding chain's boundary “zero times”: the algebraic intersection vanishes, while the geometric intersection can be nonempty. Corrected its choice bookkeeping to include compact-one-manifold classification. The remaining summary agrees with the repaired ordered-sign, diagonal and compact-trace conventions.

Updated `research/frontier-38-owner-30-batch-12.proof-contracts.json`: regenerated the 20 proof-bearing entries' exact supplier quotes and derivations after the repairs and refreshed affected definition, endpoint, zero-dimensional, witness and choice boundaries. This includes consumers whose supplier statement or convention changed. All changed items have no `verification.judge` record; none was present to retain. No mathematical verdict stamp was added.

The mathematical sign conventions are now: source factor first; normal quotient before TZ; kernel before quotient in the preimage exact sequence; parameter before X for the homotopy cylinder; outward normal before the boundary determinant. Point orientations use signed determinant rays. Compact sources and closed target submanifolds give finite transverse counts and compact homotopy traces; ambient compactness is unnecessary. Proper endpoints alone do not control a homotopy trace.

## Uneditable defects

### `oriented-and-mod-two-intersection-numbers-examples`, lines 17–19

**False claim; fatal.** The summary identifies degree with the graph-first intersection against the complementary fibre without the factor `(-1)^n`. The corrected item takes the fibre first. For the identity of the positively oriented circle, degree is 1; graph-first followed by fibre has tangent columns (1,1), (1,0), determinant -1. Thus the displayed prose's order cannot recover degree in odd dimension. B-page prose is read-only. Suggested repair for the lead: state fibre-first, or include the opposite-order sign.

### `oriented-and-mod-two-intersection-numbers-examples`, lines 25–28

**False claim; fatal.** The arctangent family's endpoint maps are improper. For `G_t(x)=arctan(x)-t`, the compact interval `[-pi/2-t, pi/2-t]` contains the whole range and has preimage R. In particular this holds at t=0 and t=2. The page's assertion “despite proper endpoints” is false. B-page prose is read-only. The repaired item supplies a polynomial proper-slice witness, but retaining arctangent in the summary requires deleting the improper attribution or distinguishing the examples.

### `thm-strong-whitney-approximation-by-transverse-maps`, F1 and Proof 1.1–2.1 (lines 39–46)

**Unlicensed inference; fatal proof defect.** F1 is the claimed density theorem itself. With `deps: []`, the two proof steps merely unpack F1 and restate the conclusion; they supply neither a proved density prerequisite nor a local-to-global perturbation argument controlling an arbitrary strong smooth neighbourhood. This is not an immediately closable elementary omission. The theorem's mathematical statement is standard; this finding concerns its unsupported proved-here argument, not a claim that density is false. Exact assigned consumer: `cor-negative-expected-dimension-generic-intersections-are-empty`, F3 and Proof 3.1. The published supplier cannot be edited by this dispatch. Suggested repair for its owner: supply the actual strong-topology density proof with the needed hypotheses and declared choice use, then inspect affected consumers.

## Page verdicts and blockers

- **A — `oriented-and-mod-two-intersection-numbers`: locally repaired; changes still require the independent Step 5b review.** The geometric definitions, compact trace proofs and orientation computations have been repaired. The strong-density clause in the negative-dimension corollary still depends on the published proof defect above; that is a blocker to accepting the full page as proved. No proposed withdrawal was performed.
- **B — `oriented-and-mod-two-intersection-numbers-examples`: changes requested.** All five authored item bodies were checked and repaired, but the two read-only summary claims above remain fatal. Their item repairs do not authorize editing B-page prose.

The original page manifests retain their author-era statement and dependency snapshots, including the obsolete arctangent-only witness and orientation-domain text. This reader did not edit manifests, the shared plan, the published ledger, engine state or other batches. The Step 5b lead must integrate item/manifest effects and the read-only page corrections through its authorized route.

## Validation and limitations

- Reflow ran on all 24 changed item paths and reported them unchanged by the formatter. After subsequent edits, reflow and precheck were rerun on those affected paths.
- Final applicable prechecks pass for all 20 changed proof-bearing items; the three changed definitions and one remark are mechanically not applicable.
- Strict batch proof-contract check: 25/25 entries checked, 0 errors, 0 warnings.
- Scoped rendercheck: all 25 items and both pages, 27 files, exit 0; all frontmatter and KaTeX spans parsed.
- Final batched `node tools/proof-layout.mjs` invocation covered all 24 changed item paths after the last item edits and formatter: 61 steps, 0 defects, exit 0.
- Manifest-only content-policy check: 25 scoped items, 0 errors, 0 warnings, exit 0.

An exploratory `rendercheck --help` invocation actually triggered a whole-repository scan and returned five unrelated KaTeX errors in two other-batch files. Those files were not reviewed or edited; that broad scan is not batch validation. The explicit 27-file scoped rendering check above is the relevant result.

The review covers every assigned page and item and the exact supplier interfaces needed for their claims. It is not an independent audit of the entire transitive published library, nor of every inherited historical source locator. The unread-source and published-proof limitations above are genuine. Format checks and contract quote matching do not certify mathematical correctness. Three uneditable findings are carried in the findings JSON; repaired carriers are excluded from it.
