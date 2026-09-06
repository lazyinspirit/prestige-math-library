# frontier-32 · Alpha · Step 4 splice-refusal adjudication

Date checked: Sunday, September 6, 2026.

## Inputs and live gate state

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`,
  `research/frontier-32-alpha-step4.task.md`, and
  `research/frontier-32-splice-refusals.json` before editing.
- `research/frontier-32-splice-refusals.json` contains an empty `refusals`
  array on the adjudicated bytes.
- The pre-edit command
  `node tools/validate-plan.mjs research/plan-spec.json` reported eleven hard
  edge errors: two `b-leaf` item edges and nine `undeclared-prereq` page
  edges. Those eleven live errors are adjudicated below.
- For every edge, the citing scaffold was read from its owning
  `research/frontier-32-batch-*.pages.json`, the cited item was read from
  `items/`, the target page was read from `library/`, and the page orders and
  declared-requirement closure were checked in `research/plan-spec.json`.

## Edge adjudications

### 1. Radon examples to the Lebesgue-integral examples page: Dirac evaluation

- **Edge:**
  `radon-measures-and-the-riesz-markov-kakutani-theorem-examples`
  (`288.04`) ->
  `the-lebesgue-integral-and-the-convergence-theorems-examples`
  (`288.016`) via
  `ex-point-evaluation-functional-is-represented-by-a-dirac-measure` ->
  `ex-dirac-integral-is-evaluation-at-a-point`.
- **Evidence:** `research/frontier-32-batch-3.pages.json` says that the new
  example identifies the representing Dirac measure by direct integration.
  The cited published example in
  `items/ex-dirac-integral-is-evaluation-at-a-point.md` is homed on the target
  B page and derives its calculation from the Dirac measure facts plus the
  nonnegative-integral, simple-approximation, monotone-convergence, and
  real/complex-integral interfaces on earlier A pages. The citing page's
  closure through its Radon A page already reaches those A pages. A direct
  dependency on the published B-page example is nevertheless forbidden by the
  B-leaf contract.
- **Disposition:** forbidden foreign `-examples` dependency; reroute through
  the exact earlier A-page support used by the cited example.
- **Edit:** in `research/frontier-32-batch-3.pages.json`, replaced
  `ex-dirac-integral-is-evaluation-at-a-point` with
  `prop-dirac-measure-is-a-probability-measure`,
  `def-nonnegative-lebesgue-integral`,
  `def-integrable-real-and-complex-functions-and-their-integrals`,
  `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`,
  and `thm-monotone-convergence-for-the-integral`; synced the same dependency
  list into `research/plan-spec.json`.
- **Validation result:** the corresponding `b-leaf` error is absent from the
  final validation.
- **Blocker:** none.

### 2. Radon examples to the Lebesgue-integral examples page: counting integral

- **Edge:**
  `radon-measures-and-the-riesz-markov-kakutani-theorem-examples`
  (`288.04`) ->
  `the-lebesgue-integral-and-the-convergence-theorems-examples`
  (`288.016`) via `ex-counting-functional-on-a-discrete-lch-space` ->
  `ex-counting-measure-integral-is-a-series`.
- **Evidence:** the Batch-3 scaffold uses only finite-support summation on a
  discrete LCH space. The published target example in
  `items/ex-counting-measure-integral-is-a-series.md` obtains the integral
  calculation from counting-measure facts and the nonnegative simple-integral
  and monotone-convergence results on the A page
  `the-lebesgue-integral-and-the-convergence-theorems` (`288.015`). Those A-page
  interfaces are already in the Radon pair's closure; the foreign B-page item
  is not an admissible prerequisite.
- **Disposition:** forbidden foreign `-examples` dependency; reroute through
  the cited example's earlier A-page support.
- **Edit:** in `research/frontier-32-batch-3.pages.json`, replaced
  `ex-counting-measure-integral-is-a-series` with
  `def-nonnegative-lebesgue-integral`,
  `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, and
  `thm-monotone-convergence-for-the-integral`; synced the same dependency list
  into `research/plan-spec.json`.
- **Validation result:** the corresponding `b-leaf` error is absent from the
  final validation.
- **Blocker:** none.

### 3. Schemes to the Noetherian-ring definition

- **Edge:** `schemes-subschemes-and-morphisms-locally-of-finite-type`
  (`366.063`) -> `holomorphic-inverse-and-weierstrass-preparation` (`353`) via
  `def-locally-noetherian-and-noetherian-scheme` ->
  `def-noetherian-ring-and-module`.
- **Evidence:** the Batch-12 scaffold defines a locally Noetherian scheme by
  affine opens with Noetherian coordinate rings. The exact published target
  definition in `items/def-noetherian-ring-and-module.md`, homed on
  `library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation.md`,
  defines Noetherian rings and modules. Before repair the citing page required
  only `affine-schemes-and-the-structure-sheaf-examples`, whose closure did not
  contain the target page.
- **Disposition:** genuine backward prerequisite.
- **Edit:** added `holomorphic-inverse-and-weierstrass-preparation` to this
  page's `requires` in `research/plan-spec.json` and synced the edge into
  `research/frontier-32-batch-12.pages.json`.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none; the target is an earlier A page.

### 4. Harmonic A page to the classical Laplacian

- **Edge:** `harmonic-functions-and-mean-values-in-rn` (`458.003`) ->
  `the-divergence-theorem-and-classical-stokes` (`288.00017`) through
  `def-laplacian-of-a-c2-function`.
- **Evidence:** in `research/frontier-32-batch-14.pages.json`,
  `def-distributional-harmonicity-and-poisson-equation-in-rn`,
  `thm-spherical-mean-value-property-for-harmonic-functions`, and
  `thm-continuous-mean-value-functions-are-harmonic` all depend on the exact
  published Laplacian/harmonicity convention in
  `items/def-laplacian-of-a-c2-function.md`. It is homed on
  `library/real-analysis/the-divergence-theorem-and-classical-stokes.md`.
  Before repair the citing A page required only
  `quasilinear-characteristics-and-cauchy-kovalevskaya-examples`, and its
  closure omitted the target.
- **Disposition:** genuine backward prerequisite.
- **Edit:** added `the-divergence-theorem-and-classical-stokes` to the A page's
  `requires` in `research/plan-spec.json` and synced it into the Batch-14
  scaffold.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none; the target is an earlier A page.

### 5. Harmonic A page to the published ball-average convention

- **Edge:** `harmonic-functions-and-mean-values-in-rn` (`458.003`) ->
  `the-maximal-function-and-lebesgue-differentiation` (`288.033`) via
  `def-spherical-averages-and-local-ball-means-in-rn` ->
  `def-ball-average-operator-on-r-n`.
- **Evidence:** the Batch-14 scaffold explicitly says it extends the published
  whole-space ball-average notation to compactly contained balls. The exact
  convention is in `items/def-ball-average-operator-on-r-n.md`, homed on
  `library/measure-theory/the-maximal-function-and-lebesgue-differentiation.md`.
  The target was absent from the pre-edit closure.
- **Disposition:** genuine backward prerequisite.
- **Edit:** added `the-maximal-function-and-lebesgue-differentiation` to the A
  page's `requires` in `research/plan-spec.json` and synced it into the
  Batch-14 scaffold.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none; the target is an earlier A page.

### 6. Harmonic examples to the classical Laplacian

- **Edge:** `harmonic-functions-and-mean-values-in-rn-examples` (`458.004`) ->
  `the-divergence-theorem-and-classical-stokes` (`288.00017`) through the
  `def-laplacian-of-a-c2-function` dependencies of
  `ex-affine-and-harmonic-polynomial-functions` and
  `ex-radial-harmonic-functions-away-from-the-origin`.
- **Evidence:** both examples calculate the classical Laplacian as written;
  the target definition is therefore load-bearing. Before repair the B page
  required only its A companion. Edge 4 makes the target part of the A page's
  closure, which this B page inherits through its mandatory companion edge.
- **Disposition:** genuine backward prerequisite, supplied transitively
  through the companion A page so the B-page `requires` remains a transitive
  reduction.
- **Edit:** no separate B-page edge was added; Edge 4 supplies the required
  closure in both `research/plan-spec.json` and the Batch-14 scaffold.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none.

### 7. Harmonic examples to the plane holomorphic-component results

- **Edge:** `harmonic-functions-and-mean-values-in-rn-examples` (`458.004`) ->
  `complex-differentiability-and-cauchy-riemann` (`303`) via
  `ex-real-and-imaginary-parts-of-holomorphic-monomials` ->
  `thm-complex-polynomials-and-rational-functions-are-holomorphic` and
  `thm-c2-holomorphic-components-are-harmonic`.
- **Evidence:** the Batch-14 scaffold expressly makes this example a
  cross-reference rather than a reproof. The two exact published statements
  were checked in `items/` and are both homed on
  `library/complex-analysis/complex-differentiability-and-cauchy-riemann.md`.
  The B page's pre-edit closure through its A companion omitted that page.
- **Disposition:** genuine backward prerequisite for this B page.
- **Edit:** added `complex-differentiability-and-cauchy-riemann` beside the
  mandatory A-companion requirement in `research/plan-spec.json` and synced it
  into the Batch-14 scaffold.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none; the target is an earlier A page.

### 8. Harmonic examples to the ball-average convention

- **Edge:** `harmonic-functions-and-mean-values-in-rn-examples` (`458.004`) ->
  `the-maximal-function-and-lebesgue-differentiation` (`288.033`) via
  `cex-one-centred-ball-mean-identity-does-not-force-harmonicity` ->
  `def-ball-average-operator-on-r-n`.
- **Evidence:** the generated counterexample computes the published ball
  average on a prescribed ball, so the definition is load-bearing. Before
  repair the target was outside the B page's closure. Edge 5 now places it in
  the A companion's closure, inherited by the B page.
- **Disposition:** genuine backward prerequisite, supplied transitively
  through the companion A page.
- **Edit:** no separate B-page edge was added; Edge 5 supplies the required
  closure in both plan and Batch-14 scaffold.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none.

### 9. Manifold orientations to finite-dimensional orientation

- **Edge:** `manifolds-with-boundary-collars-and-orientations` (`467`) ->
  `exterior-powers-orientation-and-hodge-duality` (`107.003`) via
  `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`
  -> `def-orientation-of-a-finite-dimensional-real-vector-space`.
- **Evidence:** the Batch-15 scaffold refines the published positive-basis
  orientation convention into a determinant-line convention and explicitly
  compares the two, including the dimension-zero distinction. The exact
  earlier definition was checked in
  `items/def-orientation-of-a-finite-dimensional-real-vector-space.md`, homed
  on `library/linear-algebra/exterior-powers-orientation-and-hodge-duality.md`.
  None of the pre-edit direct requirements reached that A page.
- **Disposition:** genuine backward prerequisite.
- **Edit:** added `exterior-powers-orientation-and-hodge-duality` to this
  page's `requires` in `research/plan-spec.json` and synced it into the
  Batch-15 scaffold.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none; the target is an earlier A page.

### 10. Morse--Smale residuality to Baire-category terminology

- **Edge:** `stable-unstable-manifolds-and-morse-smale-transversality` (`523`)
  -> `complete-metrizability-and-baire` (`277`) through
  `def-nowhere-dense-meagre-and-residual-subsets`.
- **Evidence:** in the Batch-18 scaffold,
  `thm-sard-smale-residual-regular-values-for-fredholm-maps`,
  `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics`, and
  `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function` all use
  the exact residual-set convention in
  `items/def-nowhere-dense-meagre-and-residual-subsets.md`, homed on
  `library/topology/complete-metrizability-and-baire.md`. The pre-edit page
  required only `gradient-like-vector-fields-and-morse-trajectories-examples`,
  whose closure omitted the target.
- **Disposition:** genuine backward prerequisite.
- **Edit:** added `complete-metrizability-and-baire` to this page's `requires`
  in `research/plan-spec.json` and synced it into the Batch-18 scaffold.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none; the target is an earlier A page.

### 11. Uniform circuit complexity to the logspace conventions

- **Edge:** `boolean-circuits-and-nonuniform-complexity` (`631`) ->
  `logarithmic-space-nl-and-reachability` (`629`) through
  `def-logspace-uniform-circuit-family` and `def-l-and-nl`.
- **Evidence:** `def-ac-zero-nc-one-and-nc` adopts the published logspace
  uniformity convention, while
  `prop-nc-one-is-contained-in-l-and-l-in-nc-two` states containments using
  the library's exact read-only-input class L. The target definitions were
  checked in `items/def-logspace-uniform-circuit-family.md` and
  `items/def-l-and-nl.md`, both homed on
  `library/computability-theory/logarithmic-space-nl-and-reachability.md`.
  Before repair the page required `the-cook-levin-theorem` and
  `finite-counting-and-binomial-coefficients`; their closure did not contain
  the target.
- **Disposition:** genuine backward prerequisite.
- **Edit:** added `logarithmic-space-nl-and-reachability` to this page's
  `requires` in `research/plan-spec.json` and synced it into the Batch-1
  scaffold.
- **Validation result:** the corresponding `undeclared-prereq` error is absent
  from the final validation.
- **Blocker:** none; the target is an earlier A page.

## Validation

Command run on the final bytes:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result:

- exit status `0`
- terminal status:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 844 page(s) with item lists.`
- no `b-leaf` or `undeclared-prereq` errors remain
- output otherwise contains only the repository-wide `redundant-prereq`
  advisories and the standard note that `449` planned pages have no item list
  yet

Additional focused checks:

- all seven edited JSON files parse successfully
- every edited Batch-1, 3, 12, 14, 15, and 18 page now matches its
  `research/plan-spec.json` `requires` and item-`deps` arrays

## Outcome

- Splice-refusal rows on current bytes: `0`.
- Live validator hard-edge rows adjudicated: `11`.
- Genuine backward page prerequisites added: `7` distinct direct edges.
- Companion-inherited genuine prerequisites: `2` validator edges.
- Forbidden foreign B-page dependencies rerouted through existing A-page
  results: `2`.
- New pages, reading-order changes, or forward edges: `0`.
- Owner blockers: none.

The engine owns the subsequent splice.
