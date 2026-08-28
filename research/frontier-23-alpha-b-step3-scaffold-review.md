# frontier-23 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `2`, `5`, and `9` in
`research/frontier-23-alpha-groups.json`: the five A pages
`complexification-realification-and-real-structures`,
`exterior-powers-orientation-and-hodge-duality`,
`matrix-norms-condition-numbers-and-numerical-stability`,
`smooth-manifolds-and-smooth-maps`, and
`euclidean-ordinary-differential-equations-with-smooth-dependence`.

For each owned pair I read the current:

- `research/frontier-23-batch-{2,5,9}.pages.json`
- `research/frontier-23-batch-{2,5,9}.coverage.json`
- `research/frontier-23-batch-{2,5,9}.notes.md`
- `research/plan-spec.json`
- the controlling design sections in
  `research/plan-algebra-track-expansion-v2.md`,
  `research/plan-differential-geometry-track.md`,
  `research/plan-realanalysis-completion-track.md`, and
  `research/frontier-23-alpha-step0-drift.md`

Checks run on 2026-08-29:

- `node tools/scope-decisions.mjs refresh --run frontier-23 --group b`
  - result after the manifest repairs: `scope-decisions: b: 3 decline(s), 3 pending`
- `node tools/scope-decisions.mjs check --run frontier-23 --group b`
  - result after resolution: `scope-decisions: 3 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-23-batch-2.coverage.json research/frontier-23-batch-5.coverage.json research/frontier-23-batch-9.coverage.json --require-destination`
  - result: `coverage-checklist: 5 page(s), 151 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-2.pages.json research/frontier-23-batch-5.pages.json research/frontier-23-batch-9.pages.json`
  - result: `content-policy: 177 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs /tmp/frontier-23-alpha-b-merged-plan.json`
  - result: `OK`, with only the standing repository-wide `redundant-prereq` advisories
- focused merged-plan closure audit over the five owned A pages
  - result: `0` hidden prerequisite homes, `0` forward refs, `0` foreign B-page deps
- `git diff --check -- research/frontier-23-batch-2.pages.json research/frontier-23-batch-5.pages.json`
  - result: clean

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `complexification-realification-and-real-structures` | 2 | 18 | 11 | **sufficient** | sufficient after direct repair |
| `exterior-powers-orientation-and-hodge-duality` | 2 | 28 | 13 | **sufficient** | sufficient after direct repair |
| `matrix-norms-condition-numbers-and-numerical-stability` | 5 | 23 | 11 | **sufficient** | sufficient after direct repair |
| `smooth-manifolds-and-smooth-maps` | 9 | 40 | 10 | **sufficient** | no repair needed |
| `euclidean-ordinary-differential-equations-with-smooth-dependence` | 9 | 17 | 6 | **sufficient** | no repair needed |

Machine half: `research/frontier-23-alpha-b-step3-verdicts.json`.

## Scope receipt

`research/frontier-23-alpha-b-scope-decisions.json` is current. All three
current decline rows now resolve as `stands`.

That outcome is credible on the current bytes:

- the Troshkin paragraph about complex structures on a real vector space is a
  later development than LA-14's current scope, which stops at
  complexification, realification, conjugations, and fixed real forms;
- Trefethen--Bau's rank-deficient least-squares branch is the next page's
  subject, exactly matching
  `the-moore-penrose-pseudoinverse-and-regularised-least-squares`;
- Hitchin's regular-level-set theorem is the later DG-4 normal-form route,
  while DG-1's current manifest deliberately uses the atlas-first examples route.

No current row requires `owner-decision`: the two deferred rows already name
their exact later destinations, and the one out-of-scope row is a deliberate
scope boundary that leaves no missing current bridge.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B2-1 | `complexification-realification-and-real-structures` | high | repaired in manifest |
| B2-2 | `exterior-powers-orientation-and-hodge-duality` | high | repaired in manifest |
| B5-1 | `matrix-norms-condition-numbers-and-numerical-stability` | high | repaired in manifest |

### B2-1 — repaired: the complexification page needed one real backward prerequisite, not three

The batch-2 notes were directionally right that LA-14 had a hidden page-closure
problem, but the current-byte audit showed the actual defect was narrower than
claimed. `tensor-products-of-modules` already reaches
`field-extensions-and-the-complex-numbers` and
`linear-maps-rank-nullity-and-quotient-spaces` transitively, so those two pages
did not need new direct edges.

The real gap was the finite-dimensional operator tail:

- `thm-characteristic-and-minimal-polynomials-survive-complexification` cited
  `def-characteristic-polynomial-of-an-operator`,
  `thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant`,
  and `lem-minimal-polynomial-is-invariant-under-field-extension`;
- `thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs` cited
  `def-primary-component-and-generalised-eigenspace`.

Those items live on
`eigenvalues-eigenvectors-and-the-characteristic-polynomial` and
`diagonalisation-and-the-minimal-polynomial`, outside the page's old declared
closure.

I repaired `research/frontier-23-batch-2.pages.json` by adding the single
minimal backward prerequisite
`diagonalisation-and-the-minimal-polynomial`. Its own declared closure already
pulls in the characteristic-polynomial page, so one edge closes the whole gap
without introducing redundant direct prerequisites.

### B2-2 — repaired: the exterior/Hodge page was reaching forward into a later surface page

`cor-cross-product-is-hodge-star-of-the-wedge` originally depended on
`def-cross-product-in-r3` and
`lem-cross-product-is-bilinear-alternating-and-orthogonal`, whose home page is
the later `regular-surfaces-and-surface-integrals` at order `288.00015`.

That was a real forward-edge defect. The controlling LA-15 design already says
the cross product is recovered here from wedge and Hodge star, so the right fix
was local rather than a reading-order change.

I repaired `research/frontier-23-batch-2.pages.json` by removing those later
dependencies and tightening the strategy: the item now compares
`u \wedge v \mapsto \star(u \wedge v)` directly with the standard coordinate
cross-product formula in an oriented orthonormal basis. After that change the
merged-plan audit reports no forward refs on the page.

### B5-1 — repaired: the Frobenius norm cannot depend on a published B-page example

`def-frobenius-matrix-norm` originally depended on the published item
`ex-frobenius-inner-product-on-matrix-space`, whose home is
`inner-product-spaces-and-orthogonality-examples`. That violates the examples-
page leaf rule.

I repaired `research/frontier-23-batch-5.pages.json` in the smallest coherent
way:

- the item now defines the Frobenius norm directly by the entrywise formula
  `||A||_F = (\sum_{i,j}|a_{ij}|^2)^{1/2}`;
- its dependencies now cite the scalar absolute-value/modulus infrastructure
  instead of a foreign B page.

No new page or reading-order change is needed, and the merged-plan validation
now reports no foreign B-page dependencies on LA-16.

## Page review

### `complexification-realification-and-real-structures`

This pair is sufficient after B2-1. The current manifest keeps the LA-14 route
intact:

- realification, tensor-model complexification, the `V \oplus iV` model,
  complexified maps, conjugations, and fixed real forms;
- the tensor/direct-sum comparison and universal property;
- dimension, functoriality, kernels/images/rank-nullity/exactness;
- reconstruction from fixed points, real forms versus conjugations, descent of
  commuting operators, and the finite-dimensional operator consequences.

The source routing is sufficient: Conrad supplies the main treatment, Troshkin
supplies the real-structure side, and the one out-of-scope complex-structure row
is now durably recorded in the scope receipt rather than hidden in the route.

**Verdict:** sufficient.

### `exterior-powers-orientation-and-hodge-duality`

This pair is sufficient after B2-2. The current manifest closes the full LA-15
route on current bytes:

- alternating maps, the quotient construction of `\Lambda^k V`, wedge product,
  and the exterior algebra;
- basis wedges, dimension/vanishing, decomposable wedges and independence,
  functoriality, signed minor matrices, and determinant action on top degree;
- Gram pairings, orientation, the Hodge star, interior product, graded
  anticommutation, and cross-product recovery in oriented Euclidean three-space.

The source stack is sufficient and correctly partitioned:
Conrad for the algebraic core, Sjamaar for orientation/Hodge material, and
Chern for interior products. After the local repair there is no remaining hidden
forward dependency.

**Verdict:** sufficient.

### `matrix-norms-condition-numbers-and-numerical-stability`

This pair is sufficient after B5-1. The manifest keeps the LA-16 scope honest:

- problem-map forward error and local conditioning first;
- induced matrix norms, `1`/`infinity` formulas, and the spectral/Frobenius
  singular-value package;
- condition numbers, perturbation bounds, distance to singularity, residual
  versus forward error, and explicit backward-error formulas;
- the floating-point model, the `theta_n` lemma, dot-product error bounds,
  first-order conditioning-versus-backward-error control, normal equations, and
  exact versus numerical rank.

The deferred Lecture 19 branch is correctly handled: full-rank least-squares
conditioning stays here, while rank-deficient least squares is deferred to the
next page exactly as the design and current scope receipt say.

**Verdict:** sufficient.

### `smooth-manifolds-and-smooth-maps`

This pair is sufficient on the current bytes with no local repair. The scaffold
matches the DG-1 design's layered route:

- topological manifolds, charts, compatibility, atlases, maximal atlases, and
  smooth structures;
- smooth maps, chart independence, diffeomorphisms, locality, products,
  disjoint unions, and pasting;
- local compactness, local path connectedness, countable components,
  sigma-compactness, metrizability, paracompactness, and the explicit role of
  second countability.

The source form is strong enough: van der Vorst and Hitchin are both full
lecture-note treatments, and the one deferred Hitchin theorem is a later
submanifold route rather than a missing current bridge.

**Verdict:** sufficient.

### `euclidean-ordinary-differential-equations-with-smooth-dependence`

This pair is sufficient on the current bytes with no local repair. The batch-9
manifest correctly follows the DG-8 seam amendment:

- RC-10 already owns local existence, uniqueness, Gronwall, continuous
  dependence, and maximal continuation;
- DG-8 keeps the smooth-dependence layer, the variational equation, matrix ODEs,
  flow smoothness, openness/composition of maximal domains, and Euclidean
  completeness corollaries.

The source routing is sufficient for that narrowed scope: Hitchin provides the
concise smooth-dependence route, Wang provides the time/parameter-reduction and
implicit-function-theorem route, and the already-published RC-10 suppliers are
explicitly marked as such in coverage.

**Verdict:** sufficient.

## Outcome

All five owned A pages are sufficient for authoring on the current 2026-08-29
bytes:

- `complexification-realification-and-real-structures`
- `exterior-powers-orientation-and-hodge-duality`
- `matrix-norms-condition-numbers-and-numerical-stability`
- `smooth-manifolds-and-smooth-maps`
- `euclidean-ordinary-differential-equations-with-smooth-dependence`

No split is owed: the A-page counts are `18`, `28`, `23`, `40`, and `17`, all
below the Step-3 ceiling.
