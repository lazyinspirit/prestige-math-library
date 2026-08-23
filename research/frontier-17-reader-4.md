# Frontier 17 — independent reader 4 report

Run: `frontier-17`  
Role: Step 6a independent reader  
Batch: `4`  
Status: complete

## Fatal findings

### R4-1 — `cor-surface-area-of-revolution-formula`

- **Exact location:** frontmatter `title`.
- **Defect:** the title asserts the area formula with
  `\sqrt{1+r''(s)^2}`, while the Statement, cited theorem, and proof all use
  `\sqrt{1+r'(s)^2}`. The title therefore asserts a different, generally false
  formula.
- **Evidence:** `thm-scalar-surface-integrals-on-a-surface-of-revolution`
  states the density `r(s)\sqrt{1+r'(s)^2}`, and proof steps 1.1–2.1 merely set
  `q=1` and integrate that density in the angular variable.
- **Severity:** fatal — false/overstrong title.

### R4-2 — `thm-surface-integrals-over-c-one-graphs`

- **Exact location:** `## Statement`, scalar-integral formula.
- **Defect:** the Statement introduces `q` only inside
  `\int_S q\,dS` and imposes no continuity or integrability hypothesis on it.
  Thus the displayed scalar integral need not be defined.
- **Evidence:** the cited definition
  `def-surface-area-and-scalar-surface-integral-of-a-patch` defines this
  integral for a **continuous** real-valued function on the patch image, and
  fact L2 quotes that restricted definition.
- **Severity:** fatal — missing Statement hypothesis.

### R4-3 — `thm-scalar-surface-integrals-on-a-surface-of-revolution`

- **Exact location:** `## Statement`, the displayed scalar-integral formula.
- **Defect:** `q` is unquantified and has no continuity/integrability
  hypothesis, so the asserted surface integral need not exist.
- **Evidence:** cited item
  `def-surface-area-and-scalar-surface-integral-of-a-patch` requires `q` to be
  continuous on the patch image; the theorem's fact L2 and proof step 3.1 use
  exactly that definition.
- **Severity:** fatal — missing Statement hypothesis.

### R4-4 — `thm-scalar-surface-integrals-on-a-surface-of-revolution`

- **Exact location:** `## Statement`, interval hypotheses; proof-contract
  boundary rows `empty`, `degenerate`, and `endpoints`.
- **Defect:** the Statement does not require `a<b`. At `a=b`, positivity on
  `(a,b)` is vacuous and the rectangle `[a,b]\times[0,2\pi]` has empty
  interior, so it is not a compact Jordan parameter region under
  `def-admissible-regular-parametrized-surface-patch`; the claimed regular
  surface integral is therefore undefined. The contract calls the empty case
  inapplicable and does not test this degeneration.
- **Evidence:** the cited patch definition requires the parameter region to be
  the closure of a **nonempty** connected interior. Proof step 2.1 silently
  reasons about "the rectangle interior" and uses `r(s)>0` there.
- **Severity:** fatal — missing nondegeneracy hypothesis and inaccurate
  boundary disposition.

### R4-5 — `cor-regular-level-set-local-graph-theorem`

- **Exact location:** fact L2 and proof step 2.1.
- **Defect:** L2 says the inverse function theorem yields a local `C^k`
  diffeomorphism "after applying higher inverse regularity", but it cites only
  `thm-euclidean-inverse-function-theorem`, whose Statement supplies a `C^1`
  inverse. The cited clause does not license the `C^k` graph asserted in the
  Statement.
- **Evidence:** `thm-higher-regularity-of-local-inverses` is a separate item and
  states the missing `C^k` conclusion; it was not a dependency or citation.
- **Severity:** fatal — inaccurate/incomplete dependency citation supporting a
  load-bearing regularity conclusion.

### R4-6 — `thm-cross-product-norm-is-the-two-vector-gram-determinant`

- **Exact location:** fact L1 and proof step 1.1.
- **Defect:** L1 says the cited lemma supplies the coordinate formula for the
  cross product, but the Statement of
  `lem-cross-product-is-bilinear-alternating-and-orthogonal` supplies
  bilinearity, alternation, the determinant identity, and orthogonality — not
  the coordinate definition used in step 1.1's expansion.
- **Evidence:** the exact coordinate formula is the Statement/Definition of
  `def-cross-product-in-r3`, which was not a direct dependency.
- **Severity:** fatal — inaccurate citation restatement.

### R4-7 — `ex-graph-as-a-regular-level-set`

- **Exact location:** fact L1 and proof step 1.2.
- **Defect:** L1 claims that sums, scalar multiples, and coordinate maps
  preserve the `C^k` class while citing only the definition of `C^k` and
  `thm-algebra-of-total-derivatives`. The latter states only total-derivative
  formulas for sums and scalar multiples at one point; neither cited Statement
  supplies `C^k` closure.
- **Evidence:** `thm-ck-euclidean-maps-closed-under-algebra-and-composition`
  states the missing closure result and was not cited.
- **Severity:** fatal — inaccurate citation needed to establish that the
  defining map is `C^k`.

### R4-8 — `ex-sphere-as-a-regular-level-set`

- **Exact location:** fact L1 and proof step 1.1.
- **Defect:** L1 attributes the product/quadratic derivative
  `DF(x)h=2\langle x,h\rangle` to
  `thm-algebra-of-total-derivatives`, whose Statement gives only addition and
  scalar-multiple rules, not a product or power rule.
- **Evidence:** the published route is the power/one-variable derivative
  algebra followed by
  `thm-continuous-partial-derivatives-imply-total-differentiability`, which
  identifies the derivative with the Jacobian.
- **Severity:** fatal — inaccurate citation.

### R4-9 — `ex-ellipsoid-as-a-regular-level-set`

- **Exact location:** fact L2 and proof step 2.1.
- **Defect:** the bilinear quadratic derivative
  `DF(x)h=\langle Ah,x\rangle+\langle Ax,h\rangle` is attributed to
  `thm-algebra-of-total-derivatives`, but that theorem's Statement has no
  product rule.
- **Evidence:** the exact cited clause supplies only derivatives of `f+g` and
  `cf`; continuous polynomial partials plus the published continuous-partials
  theorem supply the required derivative instead.
- **Severity:** fatal — inaccurate citation.

### R4-10 — `ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution`

- **Exact location:** fact L1 and proof step 1.1.
- **Defect:** the derivative of `x^2+y^2-z^2` is attributed to the
  addition-only `thm-algebra-of-total-derivatives`; its Statement does not give
  the power rule used here.
- **Evidence:** `lem-derivative-of-a-power`, one-variable derivative algebra,
  and the continuous-partials/Jacobian theorem are the on-disk clauses that
  license the displayed derivative.
- **Severity:** fatal — inaccurate citation.

### R4-11 — `cex-cone-level-set-has-a-rank-drop-at-the-apex`

- **Exact location:** fact L1 and proof steps 1.1–1.2.
- **Defect:** the derivative of `x^2+y^2-z^2` is attributed to
  `thm-algebra-of-total-derivatives`, whose Statement does not contain a power
  or product rule.
- **Evidence:** the cited item states only the sum and scalar-multiple formulas
  for already totally differentiable maps.
- **Severity:** fatal — inaccurate citation.

### R4-12 — `cex-cusp-level-set-has-a-rank-drop-at-the-origin`

- **Exact location:** fact L1 and proof steps 1.1–1.2.
- **Defect:** although the one-variable power rule is cited, the fact identifies
  the displayed row with the total derivative `DF` without citing the
  Jacobian/continuous-partials result that licenses that identification; the
  remaining total-derivative algebra citation gives only sums and scalar
  multiples.
- **Evidence:** `thm-continuous-partial-derivatives-imply-total-differentiability`
  explicitly supplies total differentiability with derivative equal to the
  Jacobian when the computed partials are continuous.
- **Severity:** fatal — missing load-bearing derivative citation.

### R4-13 — `ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin`

- **Exact location:** fact L1 and proof step 1.1.
- **Defect:** the Jacobian entry arising from the product `xy` is attributed to
  `thm-algebra-of-total-derivatives`, whose Statement has no product rule.
- **Evidence:** `thm-algebra-of-derivatives` supplies the one-variable product
  rule for the partials, and the continuous-partials theorem identifies the
  Jacobian with the total derivative whose rank is used.
- **Severity:** fatal — inaccurate citation.

### R4-14 — `cex-critical-value-can-have-a-smooth-level-set`

- **Exact location:** fact L1 and proof step 2.1.
- **Defect:** the one-variable power rule is cited for the total derivative row
  `DF(x,y)=(2x,0)`, but no cited clause identifies the continuous partials with
  the total derivative.
- **Evidence:** the separate published continuous-partials theorem supplies
  exactly that identification.
- **Severity:** fatal — missing dependency citation.

### R4-15 — `fs-every-level-set-of-a-smooth-map-is-a-graph`

- **Exact location:** fact L1 and proof step 1.1.
- **Defect:** the derivative of the quadratic polynomial is supported by a
  power rule plus the addition-only total-derivative theorem, but no cited
  Statement identifies the computed continuous partial derivatives with `DF`.
- **Evidence:** the required identification is the conclusion of
  `thm-continuous-partial-derivatives-imply-total-differentiability`.
- **Severity:** fatal — missing load-bearing derivative citation.

### R4-16 — `fs-a-critical-value-has-a-singular-level-set`

- **Exact location:** fact L1 and proof step 1.1.
- **Defect:** `lem-derivative-of-a-power` is a one-variable result and does not
  alone license the asserted total derivative row `DF(x,y)=(2x,0)`.
- **Evidence:** the continuous-partials theorem and Jacobian definition are the
  separate on-disk clauses needed to reach the displayed total derivative.
- **Severity:** fatal — missing dependency citation.

### R4-17 — `def-admissible-regular-parametrized-surface-patch`

- **Exact location:** second paragraph of `## Definition`, and the `[L#]`
  restatements of this Definition in its batch consumers.
- **Defect:** the opening sentence requires the parametrization to be
  injective, while the next clause admits seam identifications on the boundary
  and the "More precisely" clause requires only that no **interior** parameter
  share its image with a distinct point of `D`. These are different conditions;
  the global-injectivity wording contradicts the intended boundary-seam
  convention and makes several consumer restatements wider than the precise
  clause.
- **Evidence:** the sphere, torus, and revolution parametrizations in this same
  batch identify boundary seam points and therefore satisfy only the precise
  interior-injectivity condition.
- **Severity:** fatal — internally inconsistent load-bearing Definition and
  inflated dependency restatements.

### R4-18 — `cex-schwarz-lantern-polyhedral-areas-diverge`

- **Exact location:** fact L1 and proof step 1.1.
- **Defect:** L1 says triangle areas are computed from cross-product norms while
  citing only `def-cross-product-in-r3`, which merely defines the cross product
  coordinates and states no triangle-area result. The nontrivial total-area
  formula in step 1.1 is therefore unsupported by the cited input.
- **Evidence:** the batch already contains the surface-area definition and
  cross-product density theorem, and the published
  `thm-triangle-content-and-base-height-formula` supplies the standard
  parameter triangle's content; together they license an affine-triangle
  calculation.
- **Severity:** fatal — inaccurate citation/unlicensed inference.

### R4-19 — `fs-continuity-alone-suffices-for-the-regular-surface-area-formula`

- **Exact location:** fact L1 and proof step 1.1.
- **Defect:** L1 claims the Euclidean norm is continuous while citing only
  `def-euclidean-inner-product`. That Definition introduces the norm and its
  algebra but does not state continuity.
- **Evidence:** `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
  explicitly states the missing continuity result.
- **Severity:** fatal — inaccurate citation used to verify that the witness is
  continuous.

### R4-20 — `fs-flux-is-independent-of-the-parametrization`

- **Exact location:** fact L1 and proof steps 1.1–2.1.
- **Defect:** L1 says the coordinate cross product "computes the oriented area
  vectors" while citing only the coordinate Definition of cross product. That
  Definition does not define a surface area vector or flux, yet step 2.1 uses
  exactly the missing flux-integrand definition.
- **Evidence:** `def-oriented-unit-normal-and-flux-of-a-surface-patch` states
  that the flux integrand is `F\circ\varphi` dotted with
  `\varphi_u\times\varphi_v`.
- **Severity:** fatal — inaccurate citation/missing definition.

### R4-21 — `cex-schwarz-lantern-polyhedral-areas-diverge`

- **Exact location:** frontmatter `title`.
- **Defect:** the title says the lantern surfaces "converge to a cylinder", but
  the Statement and proof establish the precise, defined property that they
  are inscribed and have mesh tending to zero. No topology or notion of surface
  convergence is stated or proved.
- **Evidence:** proof step 1.2 proves only the mesh estimate; the remaining
  steps concern area divergence.
- **Severity:** fatal — title asserts an additional undefined conclusion.

## Nonfatal findings and polish

### R4-22 — `ex-sphere-and-hemisphere-surface-integrals`

- **Exact location:** proof step 3.1, prose before its justification tag.
- **Defect:** the prose says “Steps 2.1, 2.2, and 2.2” although the third result
  is step 2.3. The actual bracket correctly cites `[step 2.1, step 2.2, step
  2.3]`, so proof dependency tracking is not lost.
- **Evidence:** step 2.3 is the northern-hemisphere scalar-integral calculation.
- **Severity:** polish. No repair cycle was opened under the 30-second rule.

### R4-23 — `fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas`

- **Exact location:** proof step 2.1.
- **Defect:** the finite lateral area `2\pi rH` of the fixed cylinder is asserted
  without an explicit fact citation. It follows immediately by the regular
  lateral parametrization or by the preceding surface-of-revolution formula,
  and the refutation only needs finiteness.
- **Evidence:** `cor-surface-area-of-revolution-formula` with constant radius
  gives the value in one substitution.
- **Severity:** nonfatal (30-second proof-step gap). No repair was made.

### R4-24 — `ex-closed-cylinder-as-a-finitely-patched-oriented-surface`

- **Exact location:** `Given` paragraph and proof step 1.1.
- **Defect:** the two polar cap parametrizations are named but not displayed
  before their vertical area vectors and density `\rho` are used.
- **Evidence:** the standard maps
  `(\rho,\theta)\mapsto(\rho\cos\theta,\rho\sin\theta,0)` and the analogous map
  at height `H` give the claimed vectors by one cross-product calculation.
- **Severity:** nonfatal (30-second proof-step gap). No repair was made.

### R4-25 — `cor-regular-level-set-local-graph-theorem`

- **Exact location:** proof step 2.1.
- **Defect:** the statement that the projection of the coordinate slice to
  `K` has derivative the identity compresses the chain-rule calculation that
  transports the normal-form slice tangent back to `\ker Df(a)`.
- **Evidence:** differentiating the normal-form equality gives that tangent
  identification, after which the projection restricted to `K` is the identity.
- **Severity:** nonfatal (30-second proof-step gap). The fatal `C^k` citation
  problem in the same item was repaired separately as R4-5.

### R4-26 — `thm-euclidean-constant-rank-normal-form`

- **Exact location:** proof step 2.1.
- **Defect:** the target shear is written as though `h(z)` were defined on an
  unrestricted target neighbourhood; one must shrink the target chart so its
  first `r` coordinates lie in the domain of `h`.
- **Evidence:** the product neighbourhood obtained in step 1.1 supplies exactly
  this shrink, and the displayed inverse then works there.
- **Severity:** polish under the 30-second rule. No repair was made.

### R4-27 — `cor-compact-regular-level-surfaces-have-finite-patch-covers`

- **Exact location:** proof step 1.1.
- **Defect:** the assertion that the patch relative interiors form an open
  cover in the subspace topology suppresses the short check from the local
  graph equality.
- **Evidence:** each constructed patch contains a neighbourhood of its centre
  relative to the level surface, so its relative interior contains an open
  subspace neighbourhood of that centre.
- **Severity:** nonfatal (30-second proof-step gap). No repair was made.

### R4-28 — `fs-every-level-set-of-a-smooth-map-is-a-graph`

- **Exact location:** proof step 1.2.
- **Defect:** the tangent-plane contradiction abbreviates the fact that the
  velocity of every `C^1` curve in a `C^1` graph lies in the graph's
  two-dimensional tangent plane.
- **Evidence:** differentiating a graph curve gives this immediately; the three
  displayed ray velocities span `\mathbb R^3`.
- **Severity:** nonfatal (30-second proof-step gap). No repair was made.

### R4-29 — `cex-schwarz-lantern-polyhedral-areas-diverge`

- **Exact location:** proof step 2.1.
- **Defect:** “grows like” compresses the elementary limit algebra from
  `n^2(1-\cos(\pi/n))\to\pi^2/2>0` to divergence of
  `n^3(1-\cos(\pi/n))`.
- **Evidence:** the first sequence is eventually bounded below by a positive
  constant, so multiplying it by `n` gives divergence.
- **Severity:** polish under the 30-second rule. No repair was made.

### R4-30 — `def-tangent-space-to-a-regular-level-set`

- **Exact location:** `research/frontier-17-batch-4.pages.json`, planned `deps`
  row for the item.
- **Defect:** the authored item correctly declares and cites `thm-rank-nullity`,
  but the batch manifest's planned dependency list omits it.
- **Evidence:** the Definition uses rank-nullity to assert tangent dimension
  `m-n`; the item frontmatter includes the edge and its target lies in the
  declared prerequisite closure.
- **Severity:** nonfatal manifest bookkeeping. The item is mathematically and
  syntactically correct; Step 6b Alpha must apply the manifest update.

### R4-31 — `thm-scalar-surface-integrals-on-a-surface-of-revolution`

- **Exact location:** `research/frontier-17-batch-4.pages.json`, planned `deps`
  row for the item.
- **Defect:** the authored item correctly declares and cites
  `thm-jordan-fubini-by-sections`, but the batch manifest omits that dependency.
- **Evidence:** fact L2 and proof step 3.1 use Jordan–Fubini to pass from the
  parameter integral to the displayed iterated integral; the dependency is in
  the page's declared prerequisite closure.
- **Severity:** nonfatal manifest bookkeeping. Step 6b Alpha must apply the
  manifest update.

## Changes made

- **R4-1:** corrected the area-corollary title from `r''` to `r'` and retagged
  the materially repaired Statement component as `ai-altered`.
- **R4-2:** added the required continuity/domain hypotheses for the scalar field
  and vector field in the graph formulas; retagged the Statement component as
  `ai-altered`.
- **R4-3/R4-4:** added `a<b`, quantified continuous `q`, named the parametrized
  patch `S`, and repaired the empty/zero/degenerate/endpoint contract rows for
  the surface-of-revolution theorem; retagged its Statement as `ai-altered`.
- **R4-5:** added and cited
  `thm-higher-regularity-of-local-inverses` for the `C^k` graph conclusion.
- **R4-6:** added the direct coordinate-definition dependency
  `def-cross-product-in-r3` to the Gram/cross-product norm theorem.
- **R4-7:** added the exact `C^k` algebra-closure theorem to the graph example.
- **R4-8–R4-16:** replaced the too-weak addition-only derivative citation with
  the exact power/product, Jacobian, and continuous-partials results in all nine
  affected items. Smooth polynomial witnesses additionally cite the `C^k`
  closure theorem.
- **R4-17:** rewrote the regular-patch Definition so its opening sentence and
  precise clause both require interior injectivity while allowing boundary
  seams. Updated every affected Fact restatement and refreshed all contract
  quotes of the Definition.
- **R4-18:** made the affine-triangle surface-area derivation explicit in the
  Schwarz-lantern proof and added its exact patch, density, and standard-triangle
  dependencies.
- **R4-19:** cited the published norm-continuity lemma for the cone-graph
  witness.
- **R4-20:** added the regular-patch and flux Definitions, verified both square
  parametrizations are regular, and tied the computed cross products to the
  flux integrands.
- **R4-21:** narrowed the Schwarz-lantern title to the proved mesh statement and
  retagged the materially altered Statement/title component as `ai-altered`.
- Regenerated citation and step-map entries for all 53 proof-bearing items,
  then manually reviewed all 424 boundary rows. Thirty-three rows previously
  marked `not_applicable` were corrected to substantive checked dispositions;
  the repaired rows include rank/dimension one, zero vectors and derivatives,
  nonempty parameter regions, unit-square edges, truncation endpoints, cap
  centres, and the Schwarz-lantern top/bottom rings.
- No item was added or deleted. No scoped item carried a stale
  `verification.judge` block. `research/plan-spec.json` and all other batches
  were left untouched. The repaired item-level dependency lists differ from the
  scaffold manifest where the exact replacement citations were added; Step 6b
  Alpha must apply or disposition those planned-dependency deltas through the
  licensed manifest-update path.
- Component provenance remains present on all 66 items. The seven
  `ai-generated` Statements/constructions were recomputed directly and none is
  a dependency target; no counterexample to any of those seven claims was found.

## Gate record

- `reflow.mts`: all 21 changed item files unchanged (already canonical).
- `precheck.mts`: 20/20 changed proof-bearing items pass; the changed Definition
  has no proof body.
- `proof-contract.mjs --strict`: 53/53 pass, no errors or warnings.
- `citation-fidelity.mjs --fail-on-missing-quote`: 263 citations; no missing
  quote or detector widening candidate.
- `boundary-audit.mjs --fail-on-contradicted`: 424 rows; no template cluster or
  contradicted disposition.
- `content-policy.mjs`: 66 scoped items; no errors or warnings.
- `finite-smoke.mjs`: zero registered checks apply. This is recorded as **no
  bounded smoke coverage**, not as mathematical evidence.
- `risk-report.mjs`: no scoring errors. Forty items are high/critical and still
  need the additional Alpha proof-refuter reading and substantive `risk_review`
  required at Step 6; none had an Alpha review at reader handoff.
- `prosecheck.mjs --warnings`: 70 scoped item/page files; no errors or warnings.

## Exact manifest-dependency handoff

The following current item/manifest deltas require the licensed Step 6b manifest
update. Every added target is on the same page or in the transitive closure of
that page's declared `requires`; none is a forward reference.

- Pre-existing author deltas: R4-30 adds `thm-rank-nullity`; R4-31 adds
  `thm-jordan-fubini-by-sections`.
- `cor-regular-level-set-local-graph-theorem`: add
  `thm-higher-regularity-of-local-inverses`.
- `ex-sphere-as-a-regular-level-set`: remove
  `thm-algebra-of-total-derivatives`; add `lem-derivative-of-a-power`,
  `thm-algebra-of-derivatives`, `def-jacobian-matrix-and-gradient`, and
  `thm-continuous-partial-derivatives-imply-total-differentiability`.
- `ex-ellipsoid-as-a-regular-level-set`: the same removal and four additions.
- `ex-graph-as-a-regular-level-set`: add
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`.
- `ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution`: remove
  `thm-algebra-of-total-derivatives`; add the same four derivative/Jacobian
  inputs used by the sphere.
- `cex-cone-level-set-has-a-rank-drop-at-the-apex`: make those same derivative
  replacements and also add
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`.
- `cex-cusp-level-set-has-a-rank-drop-at-the-origin`: remove
  `thm-algebra-of-total-derivatives`; add `thm-algebra-of-derivatives`,
  `def-jacobian-matrix-and-gradient`, and
  `thm-continuous-partial-derivatives-imply-total-differentiability`.
- `ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin`: remove
  `thm-algebra-of-total-derivatives`; add `lem-derivative-of-a-power`,
  `thm-algebra-of-derivatives`, and the continuous-partials theorem.
- `cex-critical-value-can-have-a-smooth-level-set`: add
  `def-jacobian-matrix-and-gradient` and the continuous-partials theorem.
- `fs-every-level-set-of-a-smooth-map-is-a-graph`: remove
  `thm-algebra-of-total-derivatives`; add `thm-algebra-of-derivatives`, the
  Jacobian Definition, the continuous-partials theorem, and the `C^k` closure
  theorem.
- `fs-a-critical-value-has-a-singular-level-set`: add the Jacobian Definition,
  continuous-partials theorem, and `C^k` closure theorem.
- `thm-cross-product-norm-is-the-two-vector-gram-determinant`: add
  `def-cross-product-in-r3`.
- `cex-schwarz-lantern-polyhedral-areas-diverge`: add the regular-patch
  Definition, scalar surface-integral Definition, cross-product density theorem,
  and `thm-triangle-content-and-base-height-formula`.
- `fs-continuity-alone-suffices-for-the-regular-surface-area-formula`: add
  `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`.
- `fs-flux-is-independent-of-the-parametrization`: add the regular-patch and
  oriented-flux Definitions.

## Coverage and per-page verdicts

- **`constant-rank-submersions-and-regular-level-sets`: pass after repair.**
  R4-5 was repaired. R4-25 and R4-26 remain recorded nonfatal/polish gaps under
  the 30-second rule.
- **`constant-rank-submersions-and-regular-level-sets-examples`: pass after
  repair.** R4-7–R4-16 were repaired where they occur on this page; R4-28 is the
  sole recorded nonfatal gap.
- **`regular-surfaces-and-surface-integrals`: pass after repair.** R4-1–R4-6
  (where applicable) and R4-17 were repaired. R4-27 remains nonfatal.
- **`regular-surfaces-and-surface-integrals-examples`: pass after repair.**
  R4-18–R4-21 were repaired. R4-22–R4-24 and R4-29 are nonfatal/polish.

Both A-page summaries satisfy the two-paragraph and under-150-words-per-paragraph
contract; both B pages have no authored summary body. Titles, Statements, and
proofs were checked as a separate pass after repair. All 263 `[F#]`/`[A#]`/`[L#]`
citations were traced to exact clauses across 110 unique cited dependency items.

**Count actually opened:** 66/66 scoped item files and 4/4 page files. The exact
source sections of all 110 cited dependency items were also opened through the
regenerated contract and checked against the Fact restatements.
