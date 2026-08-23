# Frontier 17, batch 4 — post-scope-repair notes

This batch now owns the constant-rank pair and the regular-surfaces pair. The
scope-only rebalance co-locates the latter with the item-level prerequisites
that its scaffold uses. No page, item, source disposition, or proof contract was
discarded.

The full source and design notes remain preserved at:

- `research/frontier-17-scope-repair-history/batch-rebalance/frontier-17-batch-4.notes.md` — read the constant-rank sections.
- `research/frontier-17-scope-repair-history/batch-rebalance/frontier-17-batch-10.notes.md` — read all regular-surfaces sections.

The live manifest, coverage file, and proof-contract file are authoritative for
current batch ownership.

## Step-3 Alpha direct repairs

Alpha removed the illegal load-bearing edges onto AI-generated counterexample
constructions. The affected false statements now reproduce the cone and
$F(x,y)=x^2$ witnesses inline from eligible definitions and source-backed
results, and their contract entries were updated with the new exact inputs.
Alpha also added the earlier prerequisite pages actually used by the
regular-surfaces scaffold: Gram-determinant linear algebra, the
content-zero-modification lemma, the integral logarithm, and the volume page
needed by the retained Gabriel's-horn boundary claim. The closed-cylinder
example now declares the boundary-exception lemma that its contract cites.
The plan validator passed after the backward repins.

## Schwarz-lantern source re-harvest after bounded repair exhaustion

Both source-scout rounds confirmed that the TU Wien page is live and contains
the two harvested claims, but Step 1 could not close its full-text gate. The
engine's contemporaneous URL sweep reached the page with HTTP 200; the page is
a short single-example HTML document, while the full-text gate deliberately
requires a substantive treatment. Weakening that global floor would reduce
source assurance for every batch, so the checker remains unchanged.

The source row was re-harvested from Leo Brewin, *Curvature corrected estimates
for geodesic arc-length*, §3.2, `https://arxiv.org/pdf/1512.03461`. The complete
13-page paper was read at pp. 8–11. It constructs the lantern using $2M$
horizontal and $2N$ vertical slices, hence $4NM$ congruent triangles, derives
the triangle and total-area bounds, and states that convergence requires
$N\to\infty$ and $M/N^2\to0$; otherwise the triangulated area can diverge.
The coverage locator and both contents rows were rewritten in Brewin's own
notation, and the former TU Wien URL is retained as `original_url`. No item,
claim, or mathematical content was removed.

## Step-3 fix pass

- **B4-1 — already correct.** The Alpha repair is present on disk.
  `fs-every-level-set-of-a-smooth-map-is-a-graph` now reconstructs the cone
  witness from eligible definitions and derivative results and does not depend
  on `cex-cone-level-set-has-a-rank-drop-at-the-apex`.
  `fs-a-critical-value-has-a-singular-level-set` similarly reconstructs
  $F(x,y)=x^2$ and does not depend on
  `cex-critical-value-can-have-a-smooth-level-set`. Their proof-contract
  citation sources are declared dependencies.
- **B4-2 — already correct.** The live regular-surfaces A page declares
  `inner-product-spaces-and-orthogonality`,
  `improper-and-parameter-dependent-multiple-integrals`,
  `the-integral-logarithm-and-its-characterisations`, and
  `volumes-of-elementary-solids-and-solids-of-revolution`. These are the
  earlier pages supplying the Gram determinant, content-zero modification,
  integral logarithm, and disc-volume route used by the scaffold.
- **B4-3 — applied.** The Toronto MAT237 §2.8 harvest now records Example 3,
  whose squared unit-circle constraint has zero gradient along the constraint,
  as `already-published` at
  `cex-lagrange-multiplier-rule-needs-a-regular-constraint`. The published
  item was opened from disk: it is published, literature-derived, and states
  the same failure of the multiplier conclusion when the constraint gradient
  vanishes. Example 5 is now separately deferred to
  `constant-rank-submersions-and-regular-level-sets-examples`: its worked
  sphere-plane calculation applies the general two-constraint theorem but adds
  elimination arithmetic rather than a new regularity condition or multiplier
  result. The source page itself was opened and these example statements
  were checked against its displayed constraints and conclusions.
- **B4-4 — applied.** Added
  `fs-finite-volume-implies-finite-lateral-surface-area` immediately after the
  existing Gabriel-horn area example on the companion page. Its proof contract
  separates the finite improper-volume calculation, the compact-truncation
  area lower bound, and the refutation. The APEX finite-volume coverage row now
  includes this item; the infinite-area row continues to include
  `ex-gabriels-horn-has-unbounded-truncated-lateral-area`.
- **B4-5 — already correct.** The closed-cylinder example declares
  `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals`, exactly
  the boundary-exception result cited by its proof contract.

### B4-4 authoring obligations and provenance

`fs-finite-volume-implies-finite-lateral-surface-area` has expected
`provenance.statement: literature-derived` and
`provenance.proof: ai-altered`. APEX Calculus II §7.4, Example 216 supplies the
single Gabriel-horn construction and its finite-volume/infinite-lateral-area
contrast; the local refutation is reorganized through the earlier in-library
disc-volume theorem, the published improper rational $p$-test, and this page's
surface-of-revolution formula. Step 5 must put this exact fetch-verified URL in
`sources.references`:
`https://web.archive.org/web/20251010212618if_/https://www.vmi.edu/media/content-assets/documents/academics/appliedmath/CalculusII_Version2.pdf`.
The Statement is not AI-generated, so there is no generated-claim truth-risk
or counterexample-search obligation and no `generation` block.

The proof contract binds the following route. For $r(x)=1/x$ on $x\ge1$, the
disc theorem gives $V(T)=\pi\int_1^T x^{-2}\,dx$ and the $p=2$ case gives the
finite improper value $\pi$. The surface formula and quotient rule give
$A(T)=2\pi\int_1^T x^{-1}\sqrt{1+x^{-4}}\,dx$; integral monotonicity bounds
this below by $2\pi\int_1^T x^{-1}\,dx$, and the $p=1$ case makes the
truncated lateral areas unbounded. The contract separately disposes of the
nonempty horn, the lower endpoint $1$, the degenerate truncation $T=1$, the
unbounded endpoint, and the asserted direction of the false implication. No
external fallback is used.

The new dependency on
`thm-volume-of-a-solid-of-revolution-by-discs` is a cross-batch dependency on
the A page `volumes-of-elementary-solids-and-solids-of-revolution` at order
288.00009, strictly before the regular-surfaces A page at order 288.00015; its
exact planned Statement clause is “The solid of revolution is compact and
Jordan measurable and has volume $\pi\int_a^b f(x)^2\,dx$.” The page already
declares that prerequisite. `cor-surface-area-of-revolution-formula` is earlier
on the same A page. The remaining targets were opened from disk and have
`status: published` with eligible literature-derived Statements:
`def-improper-integral-at-infinity`, `thm-improper-p-test-rational`,
`thm-algebra-of-derivatives`, and `thm-monotonicity-of-the-integral`. There is
no forward reference or AI-generated dependency target.

The exact-id and semantic collision searches over `items/`,
`research/plan-spec.json`, and all live Frontier-17 manifests returned no
existing id or equivalent finite-volume/finite-lateral-area false statement
before the id was added.

### Richness and size recheck

Both proof-decomposition and corollary passes were rerun for both A/B pairs.
The constant-rank pair needed no additional proof item or corollary for B4-3;
the change is a faithful source-harvest repair. The regular-surfaces pair keeps
its existing decomposition of reparametrization, boundary exceptions, graph
formulas, revolution formulas, and the horn divergence calculation. B4-4 adds
the source-backed logical consequence that combines finite volume with infinite
lateral area; it is not a duplicate of the area-only example. No further useful
immediate corollary or focused decomposition lemma was found. The page counts
are: `constant-rank-submersions-and-regular-level-sets` 19,
`constant-rank-submersions-and-regular-level-sets-examples` 12,
`regular-surfaces-and-surface-integrals` 22, and
`regular-surfaces-and-surface-integrals-examples` 13. No page approaches the
60-item ceiling, no pruning occurred, and no split is proposed.

### Current per-page item lists

#### `constant-rank-submersions-and-regular-level-sets` (`count=19`)

1. `def-differential-rank-and-constant-rank` — definition — The rank of a derivative and constant-rank Euclidean maps
2. `def-submatrix-minors-of-a-rectangular-matrix` — definition — Submatrices and minors of a rectangular matrix
3. `lem-matrix-rank-detected-by-nonzero-minors` — lemma — A matrix has rank at least $r$ exactly when it has a nonzero $r$-rowed minor
4. `thm-differential-rank-is-lower-semicontinuous` — theorem — Differential rank is lower semicontinuous
5. `def-euclidean-submersions-and-immersions` — definition — Submersions and immersions between Euclidean open sets
6. `def-regular-critical-points-values-and-level-sets` — definition — Regular and critical points, regular and critical values, and level sets
7. `def-tangent-space-to-a-regular-level-set` — definition — The tangent space to a regular level set
8. `lem-constant-rank-source-coordinate-map-is-locally-invertible` — lemma — A nonzero rank minor supplies the source coordinates for the constant-rank theorem
9. `lem-constant-rank-tail-components-ignore-kernel-coordinates` — lemma — In source rank coordinates, the remaining components depend only on the rank coordinates
10. `thm-euclidean-constant-rank-normal-form` — theorem — The Euclidean constant-rank normal form
11. `cor-euclidean-submersion-normal-form` — corollary — A Euclidean submersion is locally a coordinate projection
12. `cor-euclidean-immersion-normal-form-and-local-embedding` — corollary — A Euclidean immersion is locally the canonical inclusion and is locally an embedding
13. `cor-euclidean-submersions-are-open-maps` — corollary — Euclidean submersions are open maps
14. `thm-constant-rank-level-set-local-normal-form` — theorem — A constant-rank level set is locally a coordinate slice
15. `cor-regular-level-set-local-graph-theorem` — corollary — A regular level set is locally a $C^k$ graph of dimension $m-n$
16. `thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space` — theorem — Tangent vectors to a regular level set are exactly its curve velocities
17. `lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple` — lemma — A linear functional annihilating the kernel of a surjection is a unique transpose multiple
18. `thm-lagrange-multipliers-for-regular-level-set-constraints` — theorem — Lagrange multipliers for a regular vector-valued level-set constraint
19. `cor-lagrange-multiplier-rule-for-one-regular-constraint` — corollary — For one regular constraint, the objective gradient is a scalar multiple of the constraint gradient

#### `constant-rank-submersions-and-regular-level-sets-examples` (`count=12`)

1. `ex-sphere-as-a-regular-level-set` — example — A Euclidean sphere is a regular level set with tangent hyperplanes
2. `ex-ellipsoid-as-a-regular-level-set` — example — A positive-definite quadratic ellipsoid is a regular level set
3. `ex-graph-as-a-regular-level-set` — example — The graph of a $C^k$ Euclidean map is a regular level set
4. `ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution` — example — The one-sheeted hyperboloid is a regular surface of revolution
5. `cex-cone-level-set-has-a-rank-drop-at-the-apex` — counterexample — The cone $x^2+y^2=z^2$ has a rank drop at its apex
6. `cex-cusp-level-set-has-a-rank-drop-at-the-origin` — counterexample — The cusp $y^2=x^3$ has a rank drop at the origin
7. `ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin` — example — The map $(x,y)\mapsto(x,xy)$ has nonconstant rank on every neighbourhood of the origin
8. `cex-critical-value-can-have-a-smooth-level-set` — counterexample — A critical value can have a smooth level set
9. `ex-lagrange-multipliers-on-the-sphere` — example — Lagrange multipliers locate the extrema of a linear functional on a sphere
10. `fs-every-level-set-of-a-smooth-map-is-a-graph` — false-statement — FALSE: every level set of a smooth map is locally a graph
11. `fs-a-critical-value-has-a-singular-level-set` — false-statement — FALSE: a critical value must have a singular level set
12. `fs-continuity-of-the-derivative-implies-constant-rank` — false-statement — FALSE: continuity of the derivative implies constant rank

#### `regular-surfaces-and-surface-integrals` (`count=22`)

1. `def-cross-product-in-r3` — definition — The cross product in $\mathbb R^3$
2. `lem-cross-product-is-bilinear-alternating-and-orthogonal` — lemma — The cross product is bilinear, alternating, and orthogonal to both factors
3. `thm-cross-product-norm-is-the-two-vector-gram-determinant` — theorem — The squared cross-product norm is the Gram determinant of two vectors
4. `def-admissible-regular-parametrized-surface-patch` — definition — Regular parametrized surface patches on compact Jordan parameter regions
5. `def-tangent-plane-of-a-regular-surface-patch` — definition — The tangent plane of a regular surface patch
6. `def-surface-reparametrization-and-orientation` — definition — Surface reparametrizations and their orientation sign
7. `prop-tangent-plane-is-invariant-under-regular-reparametrization` — proposition — The tangent plane is invariant under regular reparametrization
8. `cor-regular-surface-reparametrization-has-constant-orientation-sign` — corollary — A regular reparametrization of a connected parameter region has a constant orientation sign
9. `def-first-fundamental-form-and-surface-area-density` — definition — The first fundamental form, Gram matrix, and area density of a surface patch
10. `thm-surface-area-density-is-cross-product-norm` — theorem — The surface area density is the norm of the cross product of the parameter tangents
11. `lem-oriented-area-vector-under-surface-reparametrization` — lemma — The oriented area vector transforms by the parameter Jacobian determinant
12. `def-surface-area-and-scalar-surface-integral-of-a-patch` — definition — Surface area and scalar surface integrals on a regular patch
13. `thm-surface-area-and-scalar-integrals-are-reparametrization-invariant` — theorem — Surface area and scalar surface integrals are invariant under regular reparametrization
14. `def-oriented-unit-normal-and-flux-of-a-surface-patch` — definition — Unit normal fields, orientations, and flux through a regular surface patch
15. `thm-flux-under-surface-reparametrization` — theorem — Flux is invariant under orientation-preserving reparametrization and changes sign under reversal
16. `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals` — lemma — Content-zero parameter-boundary exceptions do not affect surface integrals
17. `def-finitely-patched-regular-surface-and-integrals` — definition — Finitely patched regular surfaces, their area, scalar integrals, and flux
18. `thm-regular-level-surfaces-have-local-regular-parametrizations` — theorem — Regular level surfaces have local regular parametrizations with the same tangent plane
19. `cor-compact-regular-level-surfaces-have-finite-patch-covers` — corollary — A compact regular level surface is covered by finitely many regular surface patches
20. `thm-surface-integrals-over-c-one-graphs` — theorem — Surface area, scalar integrals, and flux over a $C^1$ graph
21. `thm-scalar-surface-integrals-on-a-surface-of-revolution` — theorem — Scalar surface integrals on a surface of revolution
22. `cor-surface-area-of-revolution-formula` — corollary — The surface of revolution has area $2\pi\int_a^b r(s)\sqrt{1+r'(s)^2}\,ds$

#### `regular-surfaces-and-surface-integrals-examples` (`count=13`)

1. `ex-sphere-and-hemisphere-surface-integrals` — example — Surface area and flux on a sphere, with scalar integrals on a hemisphere
2. `ex-closed-cylinder-as-a-finitely-patched-oriented-surface` — example — A closed cylinder as a finitely patched oriented surface
3. `ex-torus-surface-area` — example — The surface area of a torus is $4\pi^2ab$
4. `ex-downward-flux-on-the-graph-z-equals-xy` — example — Downward flux through the graph $z=xy$ over the unit square
5. `ex-lateral-area-of-a-right-circular-cone` — example — The lateral area of a right circular cone is $\pi R\sqrt{R^2+H^2}$
6. `cex-degenerate-surface-parametrization-collapses-to-a-curve` — counterexample — A degenerate two-parameter map can collapse its image to a curve
7. `ex-orientation-reversal-preserves-area-and-negates-flux` — example — Opposite parametrizations preserve area and negate flux
8. `ex-gabriels-horn-has-unbounded-truncated-lateral-area` — example — Gabriel's horn has unbounded truncated lateral area
9. `fs-finite-volume-implies-finite-lateral-surface-area` — false-statement — FALSE: finite volume implies finite lateral surface area
10. `cex-schwarz-lantern-polyhedral-areas-diverge` — counterexample — Schwarz lanterns can converge to a cylinder while their polyhedral areas diverge
11. `fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas` — false-statement — FALSE: surface area is the supremum of inscribed polyhedral areas
12. `fs-continuity-alone-suffices-for-the-regular-surface-area-formula` — false-statement — FALSE: continuity alone makes the regular-patch surface-area formula applicable
13. `fs-flux-is-independent-of-the-parametrization` — false-statement — FALSE: flux is independent of the parametrization without an orientation condition

### Gate and confidence record

- `coverage-checklist`: pass — `pages=2`, `harvested=71`, `errors=0`,
  `warnings=0`.
- `source-fetch-check --stamp`: pass — all 9 source records remain
  full-text fetch-verified; no stamp was fabricated or newly written.
- The dispatch's exact isolated command,
  `content-policy --manifest-only research/frontier-17-batch-4.pages.json`,
  reports one `batch-dependency-missing` error for
  `thm-volume-of-a-solid-of-revolution-by-discs`. This is the planned
  cross-batch item that B4-4 was expressly required to use, not an unresolved
  mathematical dependency. The same gate passes with batches 4 and 5 together
  (122 scoped items, no errors or warnings) and with the complete Frontier-17
  manifest set (440 scoped items, no errors or warnings). The isolated command
  is therefore not represented as a pass; Step 4's all-batch splice remains the
  authoritative resolution.
- `validate-plan research/plan-spec.json`: exit 0 on the live unspliced plan.
  Its item arrays for batch 4 remain empty, so this result checks the current page
  order and prerequisite graph but is not represented as item-level validation
  of the new id before Step 4.
- `prosecheck --warnings`: 0 errors and 0 warnings across the batch manifest,
  coverage, notes, and proof contract.
- JSON parsing and the local scope audit pass: the manifest has 53
  proof-bearing items, and the contract has the same 53 unique scope ids and
  contract objects with no missing or extra id. Every citation quote in the new
  contract was checked as an exact substring of its published source section or
  of the exact planned Statement clause for the earlier in-run item.

Confidence is high in the coverage dispositions and the Gabriel-horn
refutation. The Toronto source page and APEX Example 216 were read at their
named locators; the APEX calculation gives volume $\pi$ and compares the
lateral integrand with $1/x$. I did not splice the plan, author any item, run a
Step-5 precheck, perform the Step-6 independent audit, or run either judge lane.

## Step-5 authoring

All items in the live manifest and all page compositions were authored as
`status: draft`, `origin: session`. No item was dropped, merged, renamed, or
retitled, and the coverage dispositions remain unchanged and true of disk. The
following source abbreviations are used only in this report:

- **LT:** Lee, Theorems 7.13 and 8.8-8.12, together with Tu, Sections 11.1-11.2.
  The statements follow those treatments; local proofs adapt the manifold or
  smooth formulations to the library's Euclidean finite-$C^k$ conventions.
- **T237:** Toronto MAT237 Section 2.8. The multiplier sign is absorbed into the
  scalar or vector multiplier, without changing the theorem.
- **Surface core:** Taylor Section 3.2, Toronto MAT237 Section 5.3, and, for the
  Gram identity, Sjamaar Section 8.1. Local proofs separate signed area vectors,
  absolute-Jacobian scalar invariance, and orientation-sensitive flux.
- **Surface examples:** Toronto's sphere, cylinder, and graph-flux examples;
  Taylor's torus and revolution exercises; Northwestern's cone calculation;
  APEX Example 216 for Gabriel's horn; and Brewin Section 3.2 for Schwarz's
  lantern. Each computation was redone in the library's parameter convention.

### Per-item authoring, precheck, and component provenance

| Item | Precheck | Statement / construction | Proof / verification | Source and edit history |
|---|---|---|---|---|
| `def-differential-rank-and-constant-rank` | n/a | literature-derived | not-applicable | LT definitions, with the empty-set constant-rank convention made explicit. |
| `def-submatrix-minors-of-a-rectangular-matrix` | n/a | literature-derived | not-applicable | LT's minor language, restricted to positive-sized square submatrices because this corpus defines no empty determinant. |
| `lem-matrix-rank-detected-by-nonzero-minors` | pass | literature-derived | ai-altered | LT criterion; proof rebuilt from the published row-rank, invertibility, and determinant results. |
| `thm-differential-rank-is-lower-semicontinuous` | pass | literature-derived | ai-altered | LT persistence argument; the $r=0$, oversize-$r$, and empty-locus cases are separated locally. |
| `def-euclidean-submersions-and-immersions` | n/a | literature-derived | not-applicable | LT definitions specialized to Euclidean open sets. |
| `def-regular-critical-points-values-and-level-sets` | n/a | literature-derived | not-applicable | LT convention, including values outside the image as vacuously regular. |
| `def-tangent-space-to-a-regular-level-set` | n/a | literature-derived | not-applicable | LT kernel tangent definition; the dimension statement is discharged from rank-nullity. |
| `lem-constant-rank-source-coordinate-map-is-locally-invertible` | pass | ai-altered | ai-altered | The first coordinate move in the LT proof was extracted and adapted to finite $C^k$, including rank zero and full source rank. |
| `lem-constant-rank-tail-components-ignore-kernel-coordinates` | pass | ai-altered | ai-altered | The second coordinate move in the LT proof was extracted; nonzero larger minors and connected slices supply the local argument. |
| `thm-euclidean-constant-rank-normal-form` | pass | literature-derived | ai-altered | LT theorem; the target shear is written with its explicit inverse and all empty coordinate blocks retained. |
| `cor-euclidean-submersion-normal-form` | pass | literature-derived | ai-altered | LT maximal-target-rank case, derived locally through rank persistence. |
| `cor-euclidean-immersion-normal-form-and-local-embedding` | pass | literature-derived | ai-altered | LT maximal-source-rank case, with the inverse on the local image written as a coordinate projection. |
| `cor-euclidean-submersions-are-open-maps` | pass | literature-derived | ai-altered | Tu's open-map consequence, proved from local projection coordinates. |
| `thm-constant-rank-level-set-local-normal-form` | pass | literature-derived | ai-altered | LT coordinate-slice consequence, with empty and zero-dimensional fibres distinguished. |
| `cor-regular-level-set-local-graph-theorem` | pass | literature-derived | ai-altered | LT regular-level theorem, recast over $\ker Df(a)$ and a complement with $Dg(0)=0$. |
| `thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space` | pass | literature-derived | ai-altered | LT tangent characterization; the two implications use the chain rule and the local graph separately. |
| `lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple` | pass | literature-derived | ai-altered | Finite-dimensional factorization used by LT/T237; the proof chooses preimages of a finite standard basis and proves uniqueness. |
| `thm-lagrange-multipliers-for-regular-level-set-constraints` | pass | literature-derived | ai-altered | T237 multiple-constraint theorem, derived through level-set curve velocities and the factorization lemma. |
| `cor-lagrange-multiplier-rule-for-one-regular-constraint` | pass | literature-derived | ai-altered | T237 scalar constraint specialization, retaining uniqueness under a nonzero constraint gradient. |
| `ex-sphere-as-a-regular-level-set` | pass | literature-derived | ai-altered | LT sphere example, radius-generalized and recomputed. |
| `ex-ellipsoid-as-a-regular-level-set` | pass | ai-generated | ai-generated | Locally formulated witness; the derivative, positive-definite exclusion of $Ax=0$, surjectivity, and tangent hyperplane were recomputed. |
| `ex-graph-as-a-regular-level-set` | pass | literature-derived | ai-altered | LT graph construction, written for a vector-valued $C^k$ map. |
| `ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution` | pass | ai-generated | ai-generated | Locally formulated witness; every horizontal section, derivative coefficient, and positive radius was recomputed. |
| `cex-cone-level-set-has-a-rank-drop-at-the-apex` | pass | ai-generated | ai-generated | Locally formulated cone witness; ranks on and off the apex and independent ray directions were recomputed. |
| `cex-cusp-level-set-has-a-rank-drop-at-the-origin` | pass | ai-generated | ai-generated | Locally formulated cusp witness; the parametrization, derivative ranks, and failure of either graph orientation at the origin were checked. |
| `ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin` | pass | literature-derived | ai-altered | LT rank example; the Jacobian determinant and both rank loci were recomputed. |
| `cex-critical-value-can-have-a-smooth-level-set` | pass | ai-generated | ai-generated | Locally formulated $F(x,y)=x^2$ witness; the fibre and derivative were recomputed and the line was checked through the source-backed graph example. |
| `ex-lagrange-multipliers-on-the-sphere` | pass | literature-derived | ai-altered | T237 sphere computation, generalized to $\mathbb R^m$ and globally checked by Cauchy-Schwarz. |
| `fs-every-level-set-of-a-smooth-map-is-a-graph` | pass | literature-derived | ai-altered | LT regular-level hypothesis boundary; the cone witness is reproduced inline rather than cited from a generated construction. |
| `fs-a-critical-value-has-a-singular-level-set` | pass | literature-derived | ai-altered | LT critical-value boundary; the $x^2$ witness is reproduced inline rather than cited from a generated construction. |
| `fs-continuity-of-the-derivative-implies-constant-rank` | pass | literature-derived | ai-altered | LT/Tu rank-persistence boundary; the polynomial map is cited from the eligible worked example. |
| `def-cross-product-in-r3` | n/a | literature-derived | not-applicable | Surface core coordinate definition in the standard basis. |
| `lem-cross-product-is-bilinear-alternating-and-orthogonal` | pass | literature-derived | ai-altered | Surface core identities, proved by direct coordinate and determinant expansion. |
| `thm-cross-product-norm-is-the-two-vector-gram-determinant` | pass | literature-derived | ai-altered | Taylor and Sjamaar identity, with dependent and zero-vector cases inherited from the Gram criterion. |
| `def-admissible-regular-parametrized-surface-patch` | n/a | ai-altered | not-applicable | Taylor's chart convention combined with Toronto's zero-content exception and the compact-Jordan Riemann setting. |
| `def-tangent-plane-of-a-regular-surface-patch` | n/a | literature-derived | not-applicable | Taylor/Toronto tangent-span definition; independence follows from the cross-product Gram theorem. |
| `def-surface-reparametrization-and-orientation` | n/a | literature-derived | not-applicable | Taylor coordinate transitions and Toronto's determinant-sign convention, stated for neighbourhood diffeomorphisms. |
| `prop-tangent-plane-is-invariant-under-regular-reparametrization` | pass | literature-derived | ai-altered | Taylor's chart-independence argument, written as two containments using the inverse reparametrization. |
| `cor-regular-surface-reparametrization-has-constant-orientation-sign` | pass | literature-derived | ai-altered | Toronto sign dichotomy, proved from the published connected-domain Jacobian-sign theorem and closure of the interior. |
| `def-first-fundamental-form-and-surface-area-density` | n/a | literature-derived | not-applicable | Taylor formulas and Sjamaar's Gram determinant; nonnegative square-root existence is discharged inline. |
| `thm-surface-area-density-is-cross-product-norm` | pass | literature-derived | ai-altered | Taylor/Sjamaar identity, proved by equality of nonnegative square roots. |
| `lem-oriented-area-vector-under-surface-reparametrization` | pass | literature-derived | ai-altered | Toronto's signed transformation, with absolute value introduced only after taking norms. |
| `def-surface-area-and-scalar-surface-integral-of-a-patch` | n/a | literature-derived | not-applicable | Taylor/Toronto definition in the compact-Jordan setting; continuity supplies integrability. |
| `thm-surface-area-and-scalar-integrals-are-reparametrization-invariant` | pass | literature-derived | ai-altered | Taylor/Toronto invariance proof through compact-Jordan change of variables. |
| `def-oriented-unit-normal-and-flux-of-a-surface-patch` | n/a | literature-derived | not-applicable | Toronto unit-normal and flux definitions; the nonzero denominator and scalar integrability are discharged inline. |
| `thm-flux-under-surface-reparametrization` | pass | literature-derived | ai-altered | Toronto signed law, proved separately in the preserving and reversing cases. |
| `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals` | pass | literature-derived | ai-altered | Toronto's exceptional-set convention, proved in both integrability directions from the published content-zero modification lemma. |
| `def-finitely-patched-regular-surface-and-integrals` | n/a | ai-altered | not-applicable | Toronto piecewise-surface convention made single-valued by treating the compatible finite presentation as part of the data. |
| `thm-regular-level-surfaces-have-local-regular-parametrizations` | pass | ai-altered | ai-altered | Taylor local charts joined to the source-backed regular-level graph and kernel tangent definitions. |
| `cor-compact-regular-level-surfaces-have-finite-patch-covers` | pass | ai-altered | ai-generated | Direct compactness consequence of the local patch theorem; the empty surface uses the empty family. |
| `thm-surface-integrals-over-c-one-graphs` | pass | literature-derived | ai-altered | Taylor/Toronto graph formulas, with upward and downward flux signs both computed. |
| `thm-scalar-surface-integrals-on-a-surface-of-revolution` | pass | literature-derived | ai-altered | Taylor revolution formula, with positive interior radius, boundary seam, endpoint zeros, and Jordan-Fubini made explicit. |
| `cor-surface-area-of-revolution-formula` | pass | literature-derived | ai-altered | Taylor/APEX area specialization, with the angular factor obtained by Jordan-Fubini. |
| `ex-sphere-and-hemisphere-surface-integrals` | pass | literature-derived | ai-altered | Toronto sphere and hemisphere computations, radius-generalized and recomputed with outward orientation. |
| `ex-closed-cylinder-as-a-finitely-patched-oriented-surface` | pass | literature-derived | ai-altered | Toronto cylinder example, generalized to $R,H>0$ with content-zero overlaps and outward flux. |
| `ex-torus-surface-area` | pass | literature-derived | ai-altered | Taylor Exercise 15; the density and full-period cancellation were recomputed. |
| `ex-downward-flux-on-the-graph-z-equals-xy` | pass | literature-derived | ai-altered | Toronto Basic Problem 3; the pulled-back polynomial and value $-1/18$ were recomputed. |
| `ex-lateral-area-of-a-right-circular-cone` | pass | literature-derived | ai-altered | Northwestern/Toronto cone calculation, evaluated through the retained revolution formula with the apex on the boundary. |
| `cex-degenerate-surface-parametrization-collapses-to-a-curve` | pass | ai-generated | ai-generated | Locally formulated witness; both partial derivatives, the zero cross product, noninjectivity, and exact line-segment image were recomputed. |
| `ex-orientation-reversal-preserves-area-and-negates-flux` | pass | ai-generated | ai-generated | Locally formulated witness; both tangent pairs, determinant sign, areas, and fluxes were recomputed. |
| `ex-gabriels-horn-has-unbounded-truncated-lateral-area` | pass | literature-derived | ai-altered | APEX Example 216, reorganized through the local revolution theorem and published integral logarithm. |
| `fs-finite-volume-implies-finite-lateral-surface-area` | pass | literature-derived | ai-altered | APEX Example 216; finite volume and unbounded area are proved from separate compact-truncation formulas. |
| `cex-schwarz-lantern-polyhedral-areas-diverge` | pass | literature-derived | ai-altered | Brewin Section 3.2, rewritten in the scaffold's $m$-band, $n$-vertex notation with mesh and area limits checked separately. |
| `fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas` | pass | literature-derived | ai-altered | Brewin's lantern consequence, derived from the eligible preceding counterexample. |
| `fs-continuity-alone-suffices-for-the-regular-surface-area-formula` | pass | literature-derived | ai-altered | Northwestern's cone graph against the Taylor/Toronto regular-patch convention; the two one-sided partial quotients are explicit. |
| `fs-flux-is-independent-of-the-parametrization` | pass | literature-derived | ai-altered | Toronto's orientation-reversal law, verified on the horizontal unit square. |

### Scaffold-change ledger

- `def-tangent-space-to-a-regular-level-set`: added `thm-rank-nullity` to
  `deps`. The final Definition states the dimension $m-n$, so this theorem is a
  genuine direct input rather than an edge added for a checker.
- `thm-scalar-surface-integrals-on-a-surface-of-revolution`: added
  `thm-jordan-fubini-by-sections` to `deps`. The exact scaffolded Statement is
  an iterated integral, whereas the surface-integral definition first supplies
  a rectangle integral; Jordan-Fubini is the direct bridge between them.
- No final title or mathematical claim was changed from the approved scaffold.
  No baseline dependency was dropped. No coverage row changed disposition.

### Generated-construction truth checks

The generated ellipsoid example was tested against arbitrary symmetric
positive-definite $A$ and arbitrary points of the level: positive definiteness
forces $x\ne0$ and $Ax\ne0$, so no singular point survives. The hyperboloid
calculation was checked for every real height, where $\sqrt{1+z^2}>0$. The cone
and cusp rank calculations were checked both at and away from their named
singular points. The $x^2$ critical-value witness was solved exactly, so its
fibre is the whole vertical line and no hidden branch occurs.

For the generated surface constructions, the collapsed patch has one zero
parameter derivative everywhere and image exactly a line segment. The
orientation example has nonzero opposite area vectors and determinant $-1$.
These checks searched the entire stated parameter domains for a counterexample
to each retained universal subclaim; none was found. Every generated
construction remains non-load-bearing and has the required `generation` role.

### Gate record, escalations, and confidence

- `precheck`: pass for every proof-bearing item after adopting canonical
  stratification; definitions are correctly `n/a`.
- `proof-contract --strict`: pass for the final prose; every direct fact link has
  an exact source-section excerpt and all uses, and every numbered step has one
  input-map entry. `boundary-audit --fail-on-template --fail-on-contradicted`
  also passed over the final boundary worksheet.
- `coverage-checklist`: pass with every included destination present on disk.
- `content-policy`, `validate-plan`, scoped `rendercheck`, and scoped
  `prosecheck --warnings`: pass.
- `citation-fidelity`: no missing quote and no widening candidate. `finite-smoke`
  ran with no applicable registered analytic check; its zero checks are not
  evidence for any theorem. `risk-report` computed Step-5 tiers only; the
  required high-risk reviews belong to Alpha at Step 6 and were not fabricated.
- Full-corpus `fwdcheck`, `extcheck`, and `depsource` passed. `citecheck` exited
  clean after the batch warning below was triaged rather than silenced.
- The full-corpus `depcheck` remains red because other concurrent Frontier-17
  batches contain YAML-escape errors and an unrelated pre-existing published
  citation-gate issue. Filtering its output to this batch produced no owned item
  finding. The batch's planned cross-batch disc-volume theorem now exists on
  disk and its exact Statement matches the contracted clause.
- Scoped `citecheck` has one heuristic warning on the Schwarz-lantern fact that
  names a positive reciprocal sequence. The declared
  `lem-reciprocal-of-null-diverges` dependency states that exact reciprocal
  implication, so this is a triaged packaged-lemma case, not a missing edge.

There is no mathematical or scope escalation and no published-dependency repair.
Confidence is high in the two proof spines and the explicit examples after the
boundary pass. I did not perform an independent Step-6 audit, run either judge,
set `verification.audited`, publish, or re-download the already fetch-stamped
source bodies during authoring. Source fidelity here rests on the Step-2 source
ledger and its durable full-text stamps, plus the exact on-disk dependency
Statements reopened during authoring.
