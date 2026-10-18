# Batch 15 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17. Group: batch-15. Scope: batch 15 only; batch 7 producer read-only. Engine owns hashes, gates and transitions.

## Completed reviews in dependency order

### reader:15:1 — alg-floating-filter-for-geometric-determinants

Verdict: false_positive. Independently read the current Definition, batch-7 manifest entry and proof contract, forward-error lemma, filter-sign theorem, certified predicate and its correctness theorem. The input is a certificate “listing each exact product or sum in the fixed left-to-right Leibniz schedule”, rather than an arbitrary unverified list. Consistency with that schedule is part of this specified input; a fabricated inconsistent list is not such a certificate. The explicit unavailable-certificate/model branch returns inconclusive, and the certified caller invokes the filter only when its inputs are satisfied, skipping invalid configurations. The relative model expressly concerns exact results on the actual representable operands. Under those hypotheses q=(s-1)+(s!-1), the telescoping error proof gives gamma_q S; the outward absolute-term enclosure and upward E bound give |Dhat-det M|<=E. Strict tests cannot certify zero or a threshold endpoint. No item edit is justified by the alleged arbitrary-certificate execution. This is a conditional mathematical procedure, and no certificate construction or acceptance of inconsistent lists is asserted.

Original routing and immutable producer fingerprints are preserved in the decisions JSON. No historical-unbound resolution is used. This decision concerns the routed observation, not a subsequent repaired producer.

### thm-lexicographic-lift-tie-break-consistent

Read all three proof steps and the exact four declared suppliers. Expanding just the height column leaves one cofactor per row; the query cofactor is the nonzero base orientation up to sign. Distinct universe ranks prevent perturbation coefficient cancellation, and the constant term dominates every positive exponent. A single shared formal field configuration proves coherence without selecting a numerical epsilon. Degenerate bases are outside the theorem; zero original power determinants receive a nonzero tie polynomial. No AC. Current proof is sound.

## Owner alerts outside routed edit scope

`def-indexed-geometric-site-set`, Definition first paragraph, calls D={m 2^e} a “dyadic subfield”. This is false: 3 belongs to D and 1/3 does not. It is the dyadic subring of R. `lem-large-delaunay-supertriangle-exists` fact F4 repeats “ordered subfield”; its actual argument only uses dyadic density and real-field division. The foundational definition is untouched and unflagged and has no routed edit obligation. Owner should route the terminology correction and check its citation/manifest consumers; the explicit set and the claims reviewed here require no closure under division in D. No out-of-scope source was edited.

## Sources and checks

Initial full batch risk-report: 19 rows, 12 HIGH/CRITICAL, zero tool errors. Detailed source access and final checks are recorded below.

### lem-large-delaunay-supertriangle-exists

Read steps 1.1–6.1, site/planar definitions and Archimedean supplier. Finite noncollinear triples have unique real centers from the nonsingular two-by-two system. Integer M bounds coordinates, centers and squared radii; baseline triangle strictly contains the M-box and gives distance squares >56M^2 or >48M^2 >r^2. Finite strict margins persist under small perturbations. Archimedean dyadic density plus avoidance of finitely many lines/circles supplies general position. No general-position claim without A1; finite choices need no AC. F4 repeats the supplier subfield terminology error, alerted for owner routing; only the defined dyadic set, density, and real division are used. Current mathematical argument is sound; no source edits.

### lem-lifted-flip-potential-decreases

Read all four steps and all four declared suppliers. At diagonal intersection O the difference is t times the strict below-plane height deficit, hence negative. The overlay triangles have zero boundary differences and common deficit delta, so the finite area-weighted affine integral decreases by area(ABCD) delta/3. Strict convexity guarantees positive areas and 0<t<1. Algebraic determinant identity extends coefficientwise to formal heights and coherent ranks. The zero constant-term case is handled in the formal order; no analytic limiting exchange or AC is required. Current mathematical argument is sound; no source edits.

### lem-lower-lifted-facets-cover-the-convex-hull

Read steps 1.1–6.1 and all four declared suppliers. Affine-dependence elimination chooses a nonincreasing formal-height direction and reaches a basic support; dependent small supports reduce by the same elimination. Finite independent supports give a minimum. Off the finite proper-affine-subspace union its d+1 coefficients are positive, so a small real feasible displacement toward every site proves lower support. Density and finite closed simplices cover hull boundary. Supporting-plane equality gives intersections exactly common faces; the nonzero base-plus-query determinant excludes extra vertices on a full-dimensional lower graph plane. Constant-term inequalities give original weak power emptiness. Full projected affine dimension assumed; hidden weighted sites and equal-coordinate unequal-weight sites need not be vertices. All choices finite, no AC. Current mathematical argument is sound; no source edits.

### lem-simplicial-four-polytope-facet-count — accepted_repair

Read current five-step proof and its Euler-count supplier. The vertex figure is explicitly a transverse cone section: convex coefficients mu_u=lambda_u g_u/delta give both inclusions, cone faces identify edge/facet incidences, and compact coefficient-simplex minimization separates the extreme vertex. Schlegel projection and finite generic avoidance yield a triangulated convex face with T_v=2d_v-2-k_v. Thus t_v<=2d_v-4 and 4 f3<=sum t_v<=4 f1-4m; simplicity gives f3<=m(m-3)/2. Original steps 1.1 and 2.1 were reconstructed from the archived Step-2 contract claims and their trailing inputs in the current carrier; reconstructed raw SHA-256 eb85373cfe1f5bcef00e6236296f455bd2333bcebe4550b39b850b04b7db0d7a exactly matches the pre-reader snapshot. Current raw e59be4148f59ec34dfa2317eafa3538708d6ddd192848c19ba4b5cd3c32f2c3f matches post. The reader supplied concise explanations of standard compactness and vertex-figure/Schlegel facts. These close nonfatal exposition gaps; statement and manifest are unchanged. No further item edits.

### thm-barycentric-interpolation-and-nearest-neighbor-query-correct

Read all four steps and all three suppliers. The invertible two-by-two system uniquely determines affine coordinates; nonnegative coefficients are precisely convex-combination membership in both directions. Invertible augmented vertex matrix gives unique affine data interpolation. Shared-edge restrictions agree at two distinct endpoints and the cardinal edge polynomial is the nodes-0,1 formula. A nonempty finite distance set has a minimum; least stable identifier resolves every tie even outside the hull. Hull status uses actual convex-hull membership; singleton/collinear sets do not require a triangle. No AC. No defects found.

### thm-incremental-planar-delaunay-correctness-and-termination — local risk-review repair

Decision: amended_repair; defect `NA71-3a-batch15-formal-power-bisector`; repair_confidence: 1. Read steps 1.1–7.1 and all eight declared suppliers. Corrected step 3.1: unequal formal heights put the power bisector at x=b0=(a^2+eta_v-eta_p)/(2a), not a/2; the two half-line thresholds now use 2b0 times the opposite vertex abscissa. Subtracting squared power distances proves these thresholds and the same determinant inequality, so the strict power-edge legality argument and flippability conclusion hold. Prefix induction preserves old non-p lower faces; each new p-edge is supported via the interpolated power center, every possible newly illegal opposite edge is recursively checked, finite strict potential decrease excludes recurrence. The exact locator handles interior edge hits; supertriangle search terminates by its existence lemma. Input-only perturbation ranks shift by 3, hence epsilon->epsilon^8 preserves tie signs, and synthetic circle exclusion preserves input lower triangles. Dimension-zero/one and duplicates handled explicitly; no AC or numerical perturbation. Consumer randomized proof uses the repaired edge permanence argument without statement changes. The item was routed for risk review, not a touched/reader/refuter obligation, so this local repair decision is recorded here without adding a nonexistent routed obligation to the decisions array. Statement, dependencies and manifest contract remain unchanged.

### thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination

Read steps 1.1–5.1, the exhaustive prefix algorithm, and all seven exact suppliers. Every nondegenerate four-site support test and formal coefficient calculation is finite; old non-supporting tuples cannot become supporting when constraints are added, and newly available tuples contain the inserted site. Thus the set-difference update equals exhaustive lower-simplex enumeration. The lower-cover lemma gives full hull coverage including boundary, common faces, and original weak power emptiness; zero weights yield ordinary circumspheres. A lower-hull vertex over a point covered by a tetrahedron must lie on its plane; the nonzero base-plus-query determinant forces it to be a listed vertex, proving both hidden-site directions. Equal-coordinate unequal weights may be hidden; degenerate bases are explicitly recorded; lower-dimensional status claims no tetrahedra. No numerical infinitesimal evaluation and no AC. No defect found.

### thm-randomized-history-dag-expected-location-cost — local risk-review repair

Decision: amended_repair; defect `NA71-3a-batch15-expected-degree`; repair_confidence: 1. Read all six steps, exact four suppliers and history-DAG procedure, and de Berg Chapter 9 pp. 204–208, Lemmas 9.11/9.13 and Theorem 9.12, including the full conflict-count argument. Corrected step 1.1 to bound conditional expected degree, not every sampled vertex degree; the explicit subsequent expectation argument was already correct. Clarified the step-1.2 sum as final new triangles T_r minus T_(r-1), excluding temporary legalization triangles, which are charged separately in step 2.1. Under uniform prefix conditioning, each triangle has probability <=3/r of incidence to the last site; next-site conflicts count exactly destroyed old lower triangles, and expected final new degree <=12 gives 36(n-r)/r. Temporary nodes receive at most two charges per old destroyed triangle. Harmonic summation gives expected O(n log n) walks and O(n) nodes; O(r) worst-case new nodes per stage gives O(n^3) walks. Fixed augmented general position, exact-call model, valid passed face certificates and exclusion of supertriangle search/bit costs checked. No AC and no adversarial-order expectation asserted. This is a nonfatal quantifier/notation correction in the proof; the statement and actual expectation argument are unchanged. No extra routed obligation is asserted.

### thm-three-dimensional-delaunay-output-size-quadratic

Read all three steps and four declared suppliers. For n>=5, each base-plus-query polynomial has nonzero leading coefficient; the explicit C epsilon bound preserves its sign for a sufficiently small positive real epsilon. A finite common epsilon preserves every support test. Thus each formal lower tetrahedron injects into a distinct real lower facet with no fifth coplanar point; one independent projected base plus another site makes the real hull four-dimensional. The general convex four-polytope bound applies to its m<=n extreme vertices, with monotonicity for m>=5. For n=4 there is at most one candidate and the stated upper bound is two. Hidden weights and nonsimplicial upper facets do not affect the injection; no mesh quality or planar bound is inferred. No AC. Source CGAL Complexity and Performance corroborates quadratic worst-case size; the exact bound is proved locally. No defect found.

### ex-cocircular-four-site-lexicographic-tie

Read steps 1.1–4.1 and all five suppliers. Direct substitution gives unperturbed plane z=x+y and circle center (1/2,1/2), squared radius 1/2. Height difference at D is epsilon^8-epsilon+epsilon^2-epsilon^4, negative, while the ABD and BCD support differences at the fourth site both have leading +epsilon. Thus BD is selected and both triangles are originally weakly empty. Three auxiliary IDs shift all input ranks by 3 and exponents by factor 8, preserving signs. The planar theorem proof repair changes no statement or example use; original cocircular ties remain exact zeros before caller refinement. No AC. No defect found.

### ex-collinear-sites-lower-dimensional-output

Read steps 1.1–3.1 and four suppliers. IDs 2 and 3 coincide at (1,0); least-ID rule retains 2 and records 3. Three remaining distinct sites have affine dimension exactly one, so increasing x gives two consecutive edges and no triangles. The full-dimensional planar count theorem is explicitly inapplicable. The corrected planar proof has unchanged lower-dimensional branch and statement. All choices deterministic and finite; no AC. No defect found.

### ex-scattered-linear-interpolation-over-delaunay-cell

Read steps 1.1–3.1 and all five suppliers. Exact two coordinate equations give lambda1=lambda2=1/4 and lambda0=1/2; all nonnegative and sum to one. Data sum is 1, and unique affine interpolation follows from the nonsingular triangle supplier. The sole cell has circle center (1,1), squared radius 2, and no other sites. Planar theorem proof correction leaves its single-triangle and empty-circle use unchanged. Endpoint conventions and nonempty three-site assumption checked; no AC. No defect found.

## Source evidence and review limits

- [de Berg et al., Chapter 9](https://ics-websites.science.uu.nl/geobook/interpolation.pdf): read pp. 193–194 for planar counting, pp. 197–199 for legality/empty-circle conventions, and the complete pp. 204–208 structural-change and conflict-count analysis (Lemmas 9.11/9.13, Theorem 9.12). The local proof uses looser constants and distinguishes temporary triangles from final lower triangles.
- [Mount, CMSC 754 notes](https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf): downloaded the actual PDF and read Lecture 13, PDF pp. 80–83, including determinant convention, the recursive update and footnote 11 requiring synthetic vertices outside final circumcircles. The source mentions the history DAG but uses buckets for its detailed analysis; de Berg supplies the full DAG charging argument.
- [CGAL 3D Triangulations](https://cgal.github.io/9465/doc/Triangulation_3/index.html): read Delaunay/Regular Triangulation, lines 64–86, and Complexity and Performance, lines 1754–1756. These support the lift, hidden sites, zero-weight specialization and quadratic worst-case context. The precise four-polytope bound and the formal-to-real specialization are independently checked local arguments, not claims proved by that manual.
- [Shewchuk, robust predicates](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf): inspected the floating arithmetic conventions at Section 2.1, PDF p. 7 (printed p. 6), explicitly excluding overflow/underflow. The local fixed-Leibniz forward-error lemma and its exact range preconditions were checked directly; no robust-predicate implementation details were assumed from the paper.
- Sheehy's cited Lecture 22 PDF could be opened as a URL but supplied no extracted text; screenshots failed and direct download returned HTTP 406. I do not claim to have read that source. The weighted claims were checked through the complete local determinant/support arguments and the accessible CGAL regular-triangulation statement instead.

Read the relevant real addition/multiplication and topological DAG-induction branches of the published outward-rounding definition/theorem, plus directed rounding and the standard relative model. No published defect was found in those branches. Unused complex-ball/square-root branches and their transitive suppliers were not audited. Published content remains unchanged; no published-ledger entry was needed.

## Final local checks and artifacts

- Reflow on the two Alpha-edited proofs: unchanged.
- Precheck on the reader-repaired facet lemma and both Alpha-edited theorems: 3 checked, 0 failing.
- Scoped strict proof-contract check on those same three: 3/3 checked, 0 errors, 0 warnings. Changed proof-step derivations retain their complete inline fact citations.
- Rendercheck on those same three: passed real KaTeX and renderer YAML parsing, no errors.
- Final batched proof-layout after all item edits and formatter: 3 items, 19 steps, 0 defects.
- Full owned-contract risk report with --require-reviewed: 19 items, all 12 HIGH/CRITICAL rows have complete independent Alpha reviews, 0 errors.
- Updated the owned batch-15 cross-batch dependency input, preserving owner-resolution history, and ran the required frontier-dependency-ledger refresh successfully. No supplier interface changed. Proof-only changes leave all manifest statements and dependency lists current; existing statement/proof provenance was already literature-derived/ai-altered. Neither edited item had a judge record.
- Current filter raw SHA-256 still equals its routed observation, `12527c0974007d2bc639619a2cc25787572392f62a2b496f5939deb1268764e7`. The two owed decisions preserve original consumer/producer identities and fingerprints. No stamping, judging, certification or gate battery was run.

## Owner/engine handoff

Both originally routed obligations are decided in the requested JSON: `reader:15:1` is false_positive and `touched:15:lem-simplicial-four-polytope-facet-count` is accepted_repair. Their closed ledger rows are `NA71-3a-batch15-filter-certificate-FP` and `NA71-3a-batch15-vertex-figure-exposition`.

Two additional mathematical defects were found and completely repaired during mandatory risk review, with report-local decisions and closed rows `NA71-3a-batch15-formal-power-bisector` and `NA71-3a-batch15-expected-degree`. Their carriers were untouched/unflagged in the generated scope and therefore have no original routed decision obligation. **Engine/owner action remains:** supply the native additional finding/decision route for these two real repairs before the ledger-ownership gate can close; this worker has not invented obligations or modified the scope. The engine must also stamp current decision hashes and run its ordinary battery. This is a routing/bookkeeping hold, not an unresolved mathematical prerequisite.

The untouched dyadic-subfield terminology error remains an explicit owner alert above; route its supplier and repeating F4 correction. All IDs and pages remain present. No substantive mathematical escalation or unresolved proof uncertainty remains for the reviewed claims.
