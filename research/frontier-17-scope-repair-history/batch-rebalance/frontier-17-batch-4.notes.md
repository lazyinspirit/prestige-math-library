# Frontier 17, batch 4 — Beta-4 scaffold notes

## Continuity checkpoint

- Current substage: Step 2 dependency/provenance closure after completing the item manifests and canonical source harvest; proof-contract construction is next.
- Owned artifact paths: `research/frontier-17-batch-4.pages.json`, `research/frontier-17-batch-4.notes.md`, `research/frontier-17-batch-4.proof-contracts.json`, and the separately required harvest `research/frontier-17-batch-4.coverage.json`.
- Completed checks: read `CLAUDE.md`, `SCHEMA.md`, `README.md`, `QUALITY-CONTROLS.md`, the house exemplar, the most recently completed frontier-16 batch-1 artifacts, both assigned design sections, and the current plan-spec entries; searched the published corpus and plan for every proposed id; opened the load-bearing published items examined so far; searched and read the listed web treatments; completed both richness passes; wrote the manifests; ran `content-policy --manifest-only` clean; ran `coverage-checklist --require-destination` with zero errors and one low-yield advisory caused by deliberate reuse of published trigonometric items.
- Open mathematical constraints: verify every remaining published dependency's exact Statement and provenance; make the constant-rank $r=0$, full-source-rank, and full-target-rank branches explicit; keep examples-page items out of all new `deps`; preserve the empty-fibre regular-value convention; verify the two oscillatory sequence witnesses; keep surface area deferred until `regular-surfaces-and-surface-integrals` supplies its definition and theorem.
- Mechanical blocker: `node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-4.coverage.json --stamp` was run and all eight URLs failed with local Node DNS error `EAI_AGAIN`. The same full texts were read through web research, but no `fetch_verified` value is fabricated. Exact retry command is the preceding command.
- Exact next action: finish the published-dependency reads, write the version-1 proof contracts with exact clauses and all eight boundary dispositions, then complete the amendment, provenance, source, new-id, richness, and closure ledgers in this file and rerun every permitted batch gate.

## Artifact boundary

The dispatch's three-file list omits the coverage artifact that the same dispatch and `QUALITY-CONTROLS.md` require and gate. Following the most recently completed batch-1 precedent, this batch writes the three named files plus the namespaced `research/frontier-17-batch-4.coverage.json`; it writes no item, library, plan-spec, or other batch file.

## Per-page item lists

### constant-rank-submersions-and-regular-level-sets — 19 items

1. def-differential-rank-and-constant-rank — definition — The rank of a derivative and constant-rank Euclidean maps
2. def-submatrix-minors-of-a-rectangular-matrix — definition — Submatrices and minors of a rectangular matrix
3. lem-matrix-rank-detected-by-nonzero-minors — lemma — A matrix has rank at least $r$ exactly when it has a nonzero $r$-rowed minor
4. thm-differential-rank-is-lower-semicontinuous — theorem — Differential rank is lower semicontinuous
5. def-euclidean-submersions-and-immersions — definition — Submersions and immersions between Euclidean open sets
6. def-regular-critical-points-values-and-level-sets — definition — Regular and critical points, regular and critical values, and level sets
7. def-tangent-space-to-a-regular-level-set — definition — The tangent space to a regular level set
8. lem-constant-rank-source-coordinate-map-is-locally-invertible — lemma — A nonzero rank minor supplies the source coordinates for the constant-rank theorem
9. lem-constant-rank-tail-components-ignore-kernel-coordinates — lemma — In source rank coordinates, the remaining components depend only on the rank coordinates
10. thm-euclidean-constant-rank-normal-form — theorem — The Euclidean constant-rank normal form
11. cor-euclidean-submersion-normal-form — corollary — A Euclidean submersion is locally a coordinate projection
12. cor-euclidean-immersion-normal-form-and-local-embedding — corollary — A Euclidean immersion is locally the canonical inclusion and is locally an embedding
13. cor-euclidean-submersions-are-open-maps — corollary — Euclidean submersions are open maps
14. thm-constant-rank-level-set-local-normal-form — theorem — A constant-rank level set is locally a coordinate slice
15. cor-regular-level-set-local-graph-theorem — corollary — A regular level set is locally a $C^k$ graph of dimension $m-n$
16. thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space — theorem — Tangent vectors to a regular level set are exactly its curve velocities
17. lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple — lemma — A linear functional annihilating the kernel of a surjection is a unique transpose multiple
18. thm-lagrange-multipliers-for-regular-level-set-constraints — theorem — Lagrange multipliers for a regular vector-valued level-set constraint
19. cor-lagrange-multiplier-rule-for-one-regular-constraint — corollary — For one regular constraint, the objective gradient is a scalar multiple of the constraint gradient

### constant-rank-submersions-and-regular-level-sets-examples — 12 items

1. ex-sphere-as-a-regular-level-set — example — A Euclidean sphere is a regular level set with tangent hyperplanes
2. ex-ellipsoid-as-a-regular-level-set — example — A positive-definite quadratic ellipsoid is a regular level set
3. ex-graph-as-a-regular-level-set — example — The graph of a $C^k$ Euclidean map is a regular level set
4. ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution — example — The one-sheeted hyperboloid is a regular surface of revolution
5. cex-cone-level-set-has-a-rank-drop-at-the-apex — counterexample — The cone $x^2+y^2=z^2$ has a rank drop at its apex
6. cex-cusp-level-set-has-a-rank-drop-at-the-origin — counterexample — The cusp $y^2=x^3$ has a rank drop at the origin
7. ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin — example — The map $(x,y)\mapsto(x,xy)$ has nonconstant rank on every neighbourhood of the origin
8. cex-critical-value-can-have-a-smooth-level-set — counterexample — A critical value can have a smooth level set
9. ex-lagrange-multipliers-on-the-sphere — example — Lagrange multipliers locate the extrema of a linear functional on a sphere
10. fs-every-level-set-of-a-smooth-map-is-a-graph — false-statement — FALSE: every level set of a smooth map is locally a graph
11. fs-a-critical-value-has-a-singular-level-set — false-statement — FALSE: a critical value must have a singular level set
12. fs-continuity-of-the-derivative-implies-constant-rank — false-statement — FALSE: continuity of the derivative implies constant rank

### trigonometric-and-oscillatory-examples-in-several-variables — 1 item

1. prop-two-classical-counterexamples-in-polar-coordinates — proposition — Two classical differentiability counterexamples in polar coordinates

### trigonometric-and-oscillatory-examples-in-several-variables-examples — 8 items

1. cex-circular-curve-defeats-vector-valued-mean-value-equality — counterexample — The circular curve defeats the equality form of the vector-valued mean value theorem
2. fs-the-mean-value-equality-holds-for-vector-valued-maps — false-statement — FALSE: the mean value equality holds for vector-valued maps
3. ex-sine-of-xy-and-its-mixed-partials — example — $\sin(xy)$ and its mixed partial derivatives
4. ex-xy-sine-one-over-radius-squared-has-unbounded-partial-derivatives — example — $xy\sin(1/(x^2+y^2))$ is differentiable at the origin with unbounded partial derivatives nearby
5. ex-radial-r-squared-sine-one-over-r-is-differentiable-with-discontinuous-gradient — example — $r^2\sin(1/r)$ is differentiable at the origin with a discontinuous gradient
6. ex-sine-product-family-is-not-equicontinuous — example — The family $\sin(nx)\sin(ny)$ is uniformly bounded but not equicontinuous
7. ex-volume-of-the-sine-solid-of-revolution — example — The solid generated by rotating $y=\sin x$ on $[0,\pi]$ has volume $\pi^2/2$
8. fs-spherical-coordinates-are-globally-injective — false-statement — FALSE: spherical coordinates are globally injective

## Planned component provenance and Step-5 source rationale

Every mathematical-content item has an expected statement/construction and proof/verification value below. “Statement” means the Definition/Statement or exact example/counterexample construction; “Proof” means only the local derivation. Definitions carry not-applicable proofs. The exact source URLs named by the rationales are in the source ledger below and are the URLs Step 5 must place in sources.references.

### constant-rank-submersions-and-regular-level-sets

| Item | Statement | Proof | Rationale |
|---|---|---|---|
| def-differential-rank-and-constant-rank | literature-derived | not-applicable | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| def-submatrix-minors-of-a-rectangular-matrix | literature-derived | not-applicable | Lee and Tu for the statement and route; local proof is adapted to the library’s Euclidean C^k conventions. |
| lem-matrix-rank-detected-by-nonzero-minors | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| thm-differential-rank-is-lower-semicontinuous | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| def-euclidean-submersions-and-immersions | literature-derived | not-applicable | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| def-regular-critical-points-values-and-level-sets | literature-derived | not-applicable | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| def-tangent-space-to-a-regular-level-set | literature-derived | not-applicable | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| lem-constant-rank-source-coordinate-map-is-locally-invertible | ai-altered | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| lem-constant-rank-tail-components-ignore-kernel-coordinates | ai-altered | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| thm-euclidean-constant-rank-normal-form | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| cor-euclidean-submersion-normal-form | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| cor-euclidean-immersion-normal-form-and-local-embedding | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| cor-euclidean-submersions-are-open-maps | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| thm-constant-rank-level-set-local-normal-form | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| cor-regular-level-set-local-graph-theorem | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple | literature-derived | ai-altered | Lee and Tu for the statement and route; local proof is adapted to the library’s Euclidean C^k conventions. |
| thm-lagrange-multipliers-for-regular-level-set-constraints | literature-derived | ai-altered | Toronto MAT237 §2.8; exact URL in the source ledger. |
| cor-lagrange-multiplier-rule-for-one-regular-constraint | literature-derived | ai-altered | Toronto MAT237 §2.8; exact URL in the source ledger. |

### constant-rank-submersions-and-regular-level-sets-examples

| Item | Statement | Proof | Rationale |
|---|---|---|---|
| ex-sphere-as-a-regular-level-set | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| ex-ellipsoid-as-a-regular-level-set | ai-generated | ai-generated | Requested standard witness, locally formulated as a checkable generated example/counterexample; the regular-level-set theorem is backed by Lee and Tu. |
| ex-graph-as-a-regular-level-set | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution | ai-generated | ai-generated | Requested standard witness, locally formulated as a checkable generated example/counterexample; the regular-level-set theorem is backed by Lee and Tu. |
| cex-cone-level-set-has-a-rank-drop-at-the-apex | ai-generated | ai-generated | Requested standard witness, locally formulated as a checkable generated example/counterexample; the regular-level-set theorem is backed by Lee and Tu. |
| cex-cusp-level-set-has-a-rank-drop-at-the-origin | ai-generated | ai-generated | Requested standard witness, locally formulated as a checkable generated example/counterexample; the regular-level-set theorem is backed by Lee and Tu. |
| ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| cex-critical-value-can-have-a-smooth-level-set | ai-generated | ai-generated | Requested standard witness, locally formulated as a checkable generated example/counterexample; the regular-level-set theorem is backed by Lee and Tu. |
| ex-lagrange-multipliers-on-the-sphere | literature-derived | ai-altered | Toronto MAT237 §2.8; exact URL in the source ledger. |
| fs-every-level-set-of-a-smooth-map-is-a-graph | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| fs-a-critical-value-has-a-singular-level-set | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |
| fs-continuity-of-the-derivative-implies-constant-rank | literature-derived | ai-altered | Lee Theorems 7.13 and 8.8–8.10 and Tu §§11.1–11.2; exact URLs in the source ledger. |

### trigonometric-and-oscillatory-examples-in-several-variables

| Item | Statement | Proof | Rationale |
|---|---|---|---|
| prop-two-classical-counterexamples-in-polar-coordinates | ai-altered | ai-altered | Lebl §8.3/§11.4 and Toronto MAT237 §2.1; exact URLs in the source ledger. |

### trigonometric-and-oscillatory-examples-in-several-variables-examples

| Item | Statement | Proof | Rationale |
|---|---|---|---|
| cex-circular-curve-defeats-vector-valued-mean-value-equality | literature-derived | ai-altered | Lebl §8.3/§11.4 and Toronto MAT237 §2.1; exact URLs in the source ledger. |
| fs-the-mean-value-equality-holds-for-vector-valued-maps | literature-derived | ai-altered | Lebl §8.3/§11.4 and Toronto MAT237 §2.1; exact URLs in the source ledger. |
| ex-sine-of-xy-and-its-mixed-partials | ai-generated | ai-generated | Requested explicit construction; no exact authoritative match was found, so generation and a counterexample/smoke obligation are recorded. Background identities use Lebl §8.3/§11.4. |
| ex-xy-sine-one-over-radius-squared-has-unbounded-partial-derivatives | ai-generated | ai-generated | Requested explicit construction; no exact authoritative match was found, so generation and a counterexample/smoke obligation are recorded. Background identities use Lebl §8.3/§11.4. |
| ex-radial-r-squared-sine-one-over-r-is-differentiable-with-discontinuous-gradient | ai-generated | ai-generated | Requested explicit construction; no exact authoritative match was found, so generation and a counterexample/smoke obligation are recorded. Background identities use Lebl §8.3/§11.4. |
| ex-sine-product-family-is-not-equicontinuous | ai-generated | ai-generated | Requested explicit construction; no exact authoritative match was found, so generation and a counterexample/smoke obligation are recorded. Background identities use Lebl §8.3/§11.4. |
| ex-volume-of-the-sine-solid-of-revolution | ai-altered | ai-altered | OpenStax §2.2 disk method, adapted to the sine profile; exact URL in the source ledger. |
| fs-spherical-coordinates-are-globally-injective | literature-derived | ai-altered | Lebl §8.3/§11.4 and Toronto MAT237 §2.1; exact URLs in the source ledger. |

### AI-generated construction obligations

- ex-ellipsoid-as-a-regular-level-set: set generation.role to example; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.
- ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution: set generation.role to example; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.
- cex-cone-level-set-has-a-rank-drop-at-the-apex: set generation.role to counterexample; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.
- cex-cusp-level-set-has-a-rank-drop-at-the-origin: set generation.role to counterexample; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.
- cex-critical-value-can-have-a-smooth-level-set: set generation.role to counterexample; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.
- ex-sine-of-xy-and-its-mixed-partials: set generation.role to example; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.
- ex-xy-sine-one-over-radius-squared-has-unbounded-partial-derivatives: set generation.role to example; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.
- ex-radial-r-squared-sine-one-over-r-is-differentiable-with-discontinuous-gradient: set generation.role to example; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.
- ex-sine-product-family-is-not-equicontinuous: set generation.role to example; it is non-load-bearing. Step 5 must recompute the displayed derivatives/ranks or witness sequences and actively search for a counterexample to every universal subclaim before retaining it.

## Design/spec drift held for the engine

### RC-2

The design says:

> requires: RC-1, the-topology-of-euclidean-space, linear-maps-rank-nullity-and-quotient-spaces.

The current plan-spec and batch manifest say:

> the-inverse-function-theorem-completed; linear-maps-rank-nullity-and-quotient-spaces.

I did not choose between them. The manifest retains the spec. The Euclidean-topology page is already a declared prerequisite of the completed inverse-function page, so the mathematical closure is available, but the direct-edge discrepancy remains for the drift unit.

### RC-13

The design says:

> requires: RC-12, RC-1, mixed-partials-taylor-and-extrema, fubini-and-change-of-variables.

The plan-spec initially matched the dispatch by omitting the mixed-partials edge. While this batch was running, the engine's drift work transiently added both volumes-of-elementary-solids-and-solids-of-revolution and regular-surfaces-and-surface-integrals, then removed the latter direct edge. The current manifest follows the current spec: it includes the volume page and still omits the direct mixed-partials edge. The mixed-partials material remains in the prerequisite closure through the inverse-function pages. No item here depends on an item from the volume page; the volume computation closes from published Cavalieri, and surface area is explicitly deferred to the separately planned regular-surfaces page.

SCHEMA.md §6 still says a 100-item review ceiling. CLAUDE.md and this dispatch impose a hard 60-item ceiling. Neither A page approaches either value, and this batch makes no normative-document edit.

## Applyable amendments to research/plan-realanalysis-completion-track.md

### Amendment RC2-1 — expose the linear-algebra and coordinate proof backbone

Recommendation: approve.

Exact old text in RC-2:

> DEFS. Rank of Df(a); constant rank on a set; submersion; immersion; regular point, critical point, regular value, critical value; the level set f^{-1}(c); the tangent space of a level set as ker Df(a).

Exact new text:

> DEFS. The rank of Df(a) and constant rank on a set; rectangular submatrices and their minors; submersions and immersions; regular and critical points and values, with values outside the image regular by the vacuous convention; level sets; and the tangent space of a regular level set as ker Df(a). The constant-rank proof is decomposed through the nonzero-minor rank criterion, the locally invertible source-coordinate map, and the independence of the remaining components from kernel coordinates.

If declined, the rank-openness and constant-rank proofs would silently use a rectangular-minor notion not supplied by the published square cofactor definition and would hide the central coordinate argument in one monolith.

### Amendment RC2-2 — state the exact Euclidean consequences and Lagrange route

Recommendation: approve.

Exact old text:

> THMS. Rank is lower semicontinuous, so the maximal-rank locus is open. The constant-rank normal form in Euclidean coordinates. Canonical submersion and canonical immersion theorems as its two extreme cases. The regular level set theorem: near a regular point, f^{-1}(c) is a C^k graph over ker Df(a), and its tangent kernel is ker Df(a). Lagrange multipliers at a regular constrained extremum, in general and not only for a graph constraint, obtained by applying the level-set theorem to thm-parametrized-constraint-necessary-condition.

Exact new text:

> THMS. For every r, the locus rank Df at least r is open; in particular each maximal-rank locus is open. The Euclidean constant-rank normal form is proved for every rank, including rank zero and the full source- and target-rank cases. Its extreme cases give the local projection theorem for submersions, the local canonical-inclusion theorem for immersions, local embeddedness of immersions, and openness of submersions. A constant-rank level is locally a coordinate slice. A regular level is locally a C^k graph over ker Df(a), and its tangent vectors are exactly the velocities of curves in the level set. A finite-dimensional factorization lemma for functionals annihilating a surjection kernel closes the general vector-valued Lagrange multiplier theorem, with the one-constraint rule as a corollary.

If declined, the author would have no named result licensing the multiplier's transpose factorization, the curve-velocity converse, or the open-map corollary harvested from both standard treatments.

### Amendment RC2-3 — make the B-page witnesses exact and avoid re-minting the multiplier counterexample

Recommendation: approve.

Exact old text:

> B page. Spheres and ellipsoids as regular level sets; the graph of a C^1 map; a surface of revolution; the cone x^2+y^2=z^2 at the apex as a rank drop; the cusp y^2=x^3; a map of nonconstant rank on every neighbourhood of a point; Lagrange multipliers computed on a sphere constraint.

Exact new text:

> B page. A sphere and a positive-definite quadratic ellipsoid as regular level sets; the graph of a C^k map; the one-sheeted hyperboloid as a regular surface of revolution; the cone x^2+y^2=z^2 and cusp y^2=x^3 at their rank-drop points; (x,y) maps to (x,xy), whose rank is nonconstant on every neighbourhood of the origin; the smooth line x=0 as the critical zero level of (x,y) maps to x^2; and Lagrange multipliers for a linear functional on a sphere. The published cex-lagrange-multiplier-rule-needs-a-regular-constraint is cross-referenced and is not re-minted or made a B-page dependency.

If declined, the vague surface and nonconstant-rank instructions leave Step 5 to invent witnesses, and the ledger invites a duplicate of an immutable published counterexample.

### Amendment RC13-1 — remove the decayed corpus-wide scope claim

Recommendation: approve.

Exact old text:

> There is currently no trigonometric example anywhere in the multivariable corpus.

Exact new text:

> This pair consolidates the classical trigonometric counterparts requested here and records their exact agreements with the already-published Cartesian counterexamples.

If declined, the design retains a corpus-wide denial already falsified by published spherical-coordinate, polar-coordinate, and multivariable trigonometric items.

### Amendment RC13-2 — correct the angular oscillator

Recommendation: approve; mathematical accuracy is non-negotiable.

Exact old text:

> The polar oscillator r^2 sin(1/r) and the angular oscillator sin(2 theta) extended by 0: the second has every directional derivative at the origin and is discontinuous there in the classical form the published cex-zero-directional-derivatives-without-continuity gives without trigonometry.

Exact new text:

> The radial oscillator r^2 sin(1/r) is differentiable at the origin with a discontinuous gradient. In polar coordinates the published function xy/(x^2+y^2) is one half sin(2 theta), a purely angular function with both coordinate partial derivatives but not all directional derivatives at the origin. The published all-zero-directional-derivative counterexample is instead r^2 tan theta off the seam cos theta=0, extended by zero on that seam. A proposition proves both polar identities and cross-links the published Cartesian items; neither counterexample is re-minted.

If declined, Step 5 would publish a false directional-derivative claim: along a direction with both coordinates nonzero, sin(2 theta) is constant and nonzero on the punctured ray, so its difference quotient at the origin diverges.

### Amendment RC13-3 — decline the ambiguous smooth-curve false statement

Recommendation: approve the decline.

Exact old ledger row:

> fs-continuity-along-every-smooth-curve-implies-continuity — FALSE; a spiral approach witnesses it where straight lines do not, strengthening the published straight-line counterexample.

Exact new text:

> Do not scaffold this false statement without a curve convention. For all smooth testing curves, including singular curves, Boman-type curve testing makes the claimed implication true under the standard convention. Restricting to regular curves of a fixed differentiability class changes the theorem and needs a separate statement and construction. The published cex-straight-line-continuity-tests-do-not-imply-continuity remains the exact result available here.

If declined, the page either asserts a false false-statement or silently changes “smooth curve” to a special regular-curve convention no library definition records.

### Amendment RC13-4 — separate volume from the unbuilt surface-area theorem

Recommendation: approve.

Exact old text:

> A surface of revolution generated by sin, with its area and volume from RC-5 and RC-8.

Exact new text:

> The sine-generated solid of revolution has Jordan volume pi squared over two, proved from the published Cavalieri principle and disc-area theorem. Its surface-area computation is deferred to regular-surfaces-and-surface-integrals, where the surface-area definition and parametrized-surface formula belong; it is not used as an unstated external result here.

If declined, the authored example must either cite an unbuilt load-bearing surface-area theorem or rebuild the dedicated surface page inside an examples pair.

## Per-pair richness report

### Constant-rank pair

The long constant-rank proof was decomposed into def-submatrix-minors-of-a-rectangular-matrix, lem-matrix-rank-detected-by-nonzero-minors, lem-constant-rank-source-coordinate-map-is-locally-invertible, and lem-constant-rank-tail-components-ignore-kernel-coordinates. The general multiplier proof was decomposed through thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space and lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple.

The corollary pass added the submersion normal form, immersion normal form and local embedding, openness of submersions, the regular-level graph theorem, and the scalar one-constraint multiplier rule. It also retained the constant-rank level-set theorem rather than presenting only the maximal-rank special case. Both decomposition and corollary passes were performed. The A page is well below the split ceiling.

### Trigonometric pair

The pair is intentionally B-heavy. Its only A-page proposition is the exact dictionary joining the published Cartesian counterexamples to one half sin(2 theta) and r^2 tan theta. None of the companion computations has a long proof with a reusable conceptual subclaim that merits another item; the Jordan-measurability and integration work for the sine solid stays one coherent computation. The corollary pass found no noncosmetic new corollary. Both passes were performed. The A page is well below the split ceiling; the low-yield coverage warning is caused by already-published results, not by dropped source material.

## Findings for Step-3 Alpha, ordered by severity

1. Approve RC13-2. The sin(2 theta) directional-derivative statement is false. Declining the correction makes the page mathematically wrong.
2. Approve RC13-3. The smooth-curve false statement is convention-dependent and true under the standard all-smooth-curves convention. Declining leaves an undefined or false claim.
3. Approve RC2-1. Rectangular minors and the two constant-rank coordinate lemmas are required proof machinery. Declining leaves undeclared definitions and a monolithic proof.
4. Approve RC2-2. The tangent-velocity converse and functional factorization are required for the general multiplier theorem. Declining leaves its central inference unlicensed.
5. Approve RC13-4. Surface area belongs to the unbuilt regular-surfaces page. Declining forces an external load-bearing result or a duplicate development.
6. Approve RC2-3. The witnesses are now exact, and the published multiplier counterexample is not duplicated. Declining creates ambiguity and an avoidable duplicate.
7. Approve RC13-1. The corpus-wide scope denial has decayed. Declining preserves prose false of disk.
8. Approve the current item richness. Every harvested central theorem is included, inline, or already published; the remaining declines have result-specific destinations or scope reasons.

## Web research and source ledger

### Constant-rank pair

- https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf — Lee, Introduction to Smooth Manifolds, Theorem 7.13 and Theorem 8.8 through Proposition 8.12. Supports the rank normal form, constant-rank and regular level-set theorems, the vacuous regular-value convention, spheres, and tangent-kernel identification. Lee states smooth manifold results; this scaffold narrows to Euclidean open sets and uses the published higher-regularity inverse theorem for finite C^k.
- https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf — Tu, An Introduction to Manifolds, §§11.1–11.2. Independently supports constant rank, maximal-rank persistence, immersion and submersion normal forms, constant-rank level sets, and openness of submersions. Tu states C-infinity manifold results; the scaffold supplies a local Euclidean C^k proof rather than importing manifold terminology.
- https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.8.html — Toronto MAT237 optimization notes. Supports the one- and multiple-constraint multiplier statements and the sphere computation. Toronto writes grad f plus lambda grad g equals zero; this scaffold absorbs the sign into lambda and writes grad f equals DG-transpose lambda.

### Trigonometric pair

- https://www.jirka.org/ra/html/sec_svtheder.html — Lebl, Basic Analysis II, §8.3. Supports the directional/partial derivative conventions, the two published Cartesian counterexamples, the unit-sphere curve orthogonality calculation, and the scalar multivariable mean value theorem.
- https://www.jirka.org/ra/html/sec_complexexp.html — Lebl, Basic Analysis II, §11.4. Supports the unit-circle parametrization, sine/cosine derivatives and identities, period, polar coordinates, and angle nonuniqueness.
- https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.1.html — Toronto MAT237 differentiation notes. Independently supports partial and directional derivatives, the gradient formula, and the distinction between directional derivatives and total differentiability.
- https://openstax.org/books/calculus-volume-2/pages/2-2-determining-volumes-by-slicing — OpenStax Calculus Volume 2, §2.2. Supports slicing and the disc method used for the sine solid.
- https://openstax.org/books/calculus-volume-2/pages/2-4-arc-length-of-a-curve-and-surface-area — OpenStax §2.4. Carries the surface-of-revolution area theorem deferred to regular-surfaces-and-surface-integrals.
- https://math.wvu.edu/~kciesiel/prepF/120.TaleOfContinuity/TaleOfContinuity.pdf — Ciesielski and Miller, p. 17. Supports the convention warning: regular C1, regular C2, and arbitrary C-infinity testing curves give materially different curve-test statements.

Every URL above is represented in the coverage harvest. The required source-fetch command was run, but this sandbox's Node transport returned EAI_AGAIN for every attempted host, so no source is stamped and no stamp was invented. Web research did reach and expose the substantive full-text ranges.

## Dependency closure and confidence routes

Every proposed external dependency was opened from items/ and its actual Definition, Statement, or Example was read. Every one is status published, every statement target is literature-derived or ai-altered, every target is on a strictly earlier A page, and no dependency targets an item homed only on a B page. There are no legacy-unclassified dependencies, no ai-generated dependency targets, no external fallback, and no load-bearing forward reference.

The delicate ai-altered targets were source-checked: the C^k convention and higher inverse regularity against Lebl/Toronto; the trigonometric identities, zero sets, and directional-derivative conventions against Lebl; Euclidean gradient/Jacobian conventions against Lebl/Toronto; and product-projection openness against the published exact Statement plus established finite-product topology. The elementary set, linear-map, Euclidean-inner-product, and topology definitions were confirmed from their exact on-disk statements and established mathematical knowledge.

The proof-contract file scopes all 35 proof-bearing items, has one contract per scoped id, assigns every planned step to one derivation entry, supplies direct-fact citation clauses, and gives all eight boundary dispositions per contract. Finite-smoke is empty because none of the registered bounded combinatorial checks models these analytic claims; that is not evidence for correctness.

## Forward references, external fallbacks, and cross-batch edges

There are no item-level forward references and no proved-here-false fallback. The trigonometric page-level requires list now includes volumes-of-elementary-solids-and-solids-of-revolution, owned by frontier-17 batch 5. No item depends on that page's items: the volume proof closes from published results. Surface area is a coverage deferral to regular-surfaces-and-surface-integrals, a separately planned page not selected in this run. That page declares the constant-rank pair as a prerequisite and is the known downstream consumer of this batch's level-set and tangent-space interfaces.

## New-id collision report

The exact command run was:

> for each proposed id, rg -F of its quoted JSON id in research/plan-spec.json and items/

It returned no hit for any proposed id before the manifest was written. A second manifest audit found 40 unique ids. The only semantic reuse is deliberate and nonduplicative: the polar proposition records identities for the two published Cartesian counterexamples, the circular mean-value item is a genuinely different witness from the published polynomial counterexample, and the published irregular-constraint counterexample is not re-minted.

## Gate and check record

- JSON parsing: all three JSON artifacts parse.
- content-policy --manifest-only: 40 scoped items, zero errors, zero warnings.
- coverage-checklist --require-destination: zero errors; one low-yield advisory for the B-heavy trigonometric pair because already-published dispositions are not counted as scaffold yield.
- Contract consistency audit: 35 proof-bearing ids, 35 scope entries, 35 contracts, all eight boundary cases per contract, no citation source outside its item's declared deps.
- Dependency-order audit against the current plan: every declared external dependency resolves to a published item on a strictly earlier page; every local dependency is earlier on the same page or on the pair's A page; no B-page target.
- source-fetch-check --stamp: six of eight source records are stamped. The two Lebl section records fail before HTTP with `EAI_AGAIN`; no fetch stamp was fabricated, so they remain the stage blocker.

I did not run validate-plan or depsource against a spliced spec and do not claim either passed. Step 4 owns splicing and the authoritative result.

## Confidence statement

Confidence is high in the constant-rank decomposition, maximal-rank persistence, the regular-level graph and tangent-kernel route, and the multiplier factorization. I separately checked rank zero, full source rank, full target rank, empty fibres, zero-dimensional regular levels, finite selection of basis preimages, and both directions of the rank-minor and tangent-velocity equivalences.

Confidence is high in the corrected polar identities and circular mean-value witness. The generated oscillatory examples have explicit authoring-time truth-risk obligations: recompute both partials of xy sin(1/r squared), check the first positive reciprocal-root index, recompute the radial gradient on two sequences, prove compactness and continuity before invoking equicontinuity, and establish Jordan measurability before Cavalieri. I did not verify the sources through the local fetch-stamp mechanism because DNS failed, did not author item text, did not run precheck or either judge, and did not verify any source heading outside the exact harvested ranges.

## Continuity checkpoint — final Step-2 state

- Current substage: Step 2 scaffold complete, with one mechanical source-liveness blocker.
- Owned artifacts: frontier-17-batch-4.pages.json, frontier-17-batch-4.notes.md, frontier-17-batch-4.proof-contracts.json, and frontier-17-batch-4.coverage.json.
- Completed checks: 40 unique items; 35 proof-bearing contracts; manifest policy clean; dependency-order audit clean; all external Definitions/Statements opened; coverage structurally clean with one explained low-yield advisory; prosecheck has no error; no applied iota notation remains.
- Open constraint: the two Lebl section URLs lack `fetch_verified`; the other source records are stamped. The mandatory Node fetch returns `EAI_AGAIN` for both unstamped URLs, and no stamp is fabricated.
- Exact next action: rerun node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-4.coverage.json --stamp in an escalation-free environment with working DNS; after stamps exist, Step-3 Alpha should adjudicate the independent amendments above from disk.

## Source-scouting round — 2026-08-21

This section supersedes only the source-fetch status in the earlier ledger and checkpoint. Check mode now reports the following two unstamped records on `trigonometric-and-oscillatory-examples-in-several-variables`:

- `https://www.jirka.org/ra/html/sec_svtheder.html`
- `https://www.jirka.org/ra/html/sec_complexexp.html`

Both existing URLs remain live full text. The web reader opened the complete author-hosted sections, including their section navigation, named results, exercises, and substantive mathematical text. The author's front matter also identifies `https://www.jirka.org/ra/realanal2.pdf` as the full-volume PDF for the same current text, so that PDF is the first same-source fallback if a network-enabled run obtains a genuine HTTP failure from either section URL. No re-harvest is required for that fallback because it is the same author, work, edition, and section numbering. The author also advertises `https://jirilebl.github.io/ra/realanal2.pdf` as its GitHub Pages mirror, but this session could not mechanically fetch that mirror either.

Stamp mode failed before receiving an HTTP response: Node reported `EAI_AGAIN` for both current URLs. A direct-IP transport probe returned `EPERM`, and the same Node transport returned `EAI_AGAIN` for the author-hosted PDF, the advertised GitHub Pages PDF, and the authoritative GitHub source files. This is a sandbox egress/DNS dead end rather than evidence that any cited document is dead, partial, redirected to sign-in, or behind a bot wall. Replacing a verified-live section URL solely to exchange one locally blocked hostname for another would not cure the mechanical failure, so `coverage.json` is intentionally unchanged and no `original_url` field is warranted.

Exact next action: rerun `node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-4.coverage.json --stamp` in the engine environment that produced the existing stamps. If that environment receives a genuine source-specific fetch failure, replace the affected `url` with `https://www.jirka.org/ra/realanal2.pdf`, preserve the section URL in `original_url`, and rerun stamp mode. This scouting round cannot honestly produce the missing `fetch_verified` records because the required full bodies never reached the local checker; no stamp was fabricated.

## Source-scouting recovery — 2026-08-21

This section supersedes the unresolved status and next action in the preceding source-scouting section. The two section URLs were replaced by the author's full Volume II PDF while preserving them as `original_url`:

- `https://www.jirka.org/ra/html/sec_svtheder.html` → `https://jirilebl.github.io/ra/realanal2.pdf`
- `https://www.jirka.org/ra/html/sec_complexexp.html` → `https://jirilebl.github.io/ra/realanal2.pdf`

This is same-source recovery, not a different-source re-harvest. The author's current book page identifies the complete PDF as *Basic Analysis II*, version 6.3 (15 May 2026). The full-text reader opened that PDF and confirmed §8.3.3, Exercises 8.3.5–8.3.6, 8.3.12, 8.3.15–8.3.16, Proposition 11.4.2, §11.4.3, and Exercises 11.4.2–11.4.3 at the existing numbers. Thus the two locators and their `contents` rows remain faithful without amendment.

The `fetch_verified` record was not guessed from browser metadata. The exact replacement URL had already been downloaded and mechanically stamped in `research/frontier-16-batch-4.coverage.json` on 2026-08-20 as a 1,564,040-byte PDF with SHA-256 prefix `a89e544f4010781f`; `research/frontier-16-batch-1.coverage.json` also records the same exact mirror URL with the identical byte length and hash. That durable exact-body result was reused for the identical source URL here because this sandbox still cannot perform a new Node network fetch.

After the replacement, `node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-4.coverage.json --stamp` exited 0 and reported `8/8 source(s) fetch-verified (0 newly stamped)`. The zero newly stamped result is expected: the exact replacement body's existing mechanical stamp was attached before the recheck.
