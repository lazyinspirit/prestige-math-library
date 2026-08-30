# frontier-24 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `3`, `8`, and `9` in
`research/frontier-24-alpha-groups.json`: the four A pages
`direct-matrix-factorisations-lu-cholesky-and-qr`,
`chain-complexes-and-homology`,
`smooth-partitions-of-unity-and-exhaustions`, and
`tangent-cotangent-and-the-differential`.

For each owned pair I read the current:

- `research/frontier-24-batch-{3,8,9}.pages.json`
- `research/frontier-24-batch-{3,8,9}.coverage.json`
- `research/frontier-24-batch-{3,8,9}.notes.md`
- `research/plan-spec.json`
- the controlling design sections in
  `research/plan-algebra-track-expansion-v2.md`,
  `research/plan-homological-algebra-track.md`,
  `research/plan-differential-geometry-track.md`, and
  `research/frontier-24-alpha-step0-drift.md`

Checks run on August 29, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-24 --group b`
  - initial result: `scope-decisions: b: 15 decline(s), 15 pending`
- `node tools/scope-decisions.mjs check --run frontier-24 --group b`
  - final result: `scope-decisions: 15 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-3.coverage.json research/frontier-24-batch-8.coverage.json research/frontier-24-batch-9.coverage.json --require-destination`
  - result: `coverage-checklist: 4 page(s), 164 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-3.pages.json research/frontier-24-batch-8.pages.json research/frontier-24-batch-9.pages.json`
  - result: `content-policy: 192 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs /private/tmp/frontier-24-alpha-b-spliced-plan.json`
  - result: `OK`, with only the repository's standing out-of-group `redundant-prereq` warnings
- focused published-home closure audit over the four owned A pages after splicing the batch manifests into the live plan
  - result: `0` hidden prerequisite homes, `0` forward refs, `0` foreign B-page deps, `0` unresolved deps

The temporary spliced plan at `/private/tmp/frontier-24-alpha-b-spliced-plan.json`
was built by replacing the frontier-24 seed entries for batches `3`, `8`, and
`9` inside `research/plan-spec.json` with the live batch manifests.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `direct-matrix-factorisations-lu-cholesky-and-qr` | 3 | 24 | 10 | **sufficient** | no repair needed |
| `chain-complexes-and-homology` | 8 | 47 | 10 | **sufficient** | no repair needed |
| `smooth-partitions-of-unity-and-exhaustions` | 9 | 33 | 9 | **sufficient** | sufficient after direct repair |
| `tangent-cotangent-and-the-differential` | 9 | 49 | 10 | **sufficient** | sufficient after direct repair |

Machine half: `research/frontier-24-alpha-b-step3-verdicts.json`.

No split is owed: the four A-page counts are `24`, `47`, `33`, and `49`, all
below the Step-3 ceiling of `60`.

## Scope receipt

`research/frontier-24-alpha-b-scope-decisions.json` is current. All `15`
decline rows now resolve as `stands`.

That outcome is credible on the current August 29, 2026 bytes:

- batch `3` keeps LA-17 limited to direct LU/PLU/Cholesky/QR material, so the
  two LA-18 deferments and the three out-of-scope exclusions all remain honest
  scope boundaries
- batch `8` keeps HA-1 limited to ordinary chain/cochain complexes, homology,
  exactness, quasi-isomorphisms, degreewise abelian structure, exact functors,
  and Euler-Poincare, so the homotopy, long-exact-sequence, and double-complex
  rows all remain genuine later destinations
- no current row requires `owner-decision`: after the batch-9 prerequisite
  repair, every decline still matches the current manifest route and leaves no
  missing source-backed bridge inside the owned scope

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B9-1 | `smooth-partitions-of-unity-and-exhaustions` | high | repaired in manifest |
| B9-2 | `tangent-cotangent-and-the-differential` | high | repaired in manifest |

### B9-1 — repaired: DG-2 dropped the exponential prerequisite that its first three items actually spend

The live plan spec still gives
`smooth-partitions-of-unity-and-exhaustions` the direct prerequisite
`the-exponential-function`, but `research/frontier-24-batch-9.pages.json` had
dropped it.

That was not harmless drift. The current manifest's first three items still
depend on published items homed on that page:

- `def-the-standard-flat-function` -> `def-real-exponential-function-and-e`
- `lem-exponential-decay-dominates-every-inverse-power` ->
  `thm-exponential-beats-every-polynomial`
- `thm-the-standard-flat-function-is-smooth-and-flat-at-zero` ->
  `thm-derivative-of-exponential`

Those dependencies sat outside the transitive closure of the page's declared
`requires`, so the scaffold understated its real route.

I repaired `research/frontier-24-batch-9.pages.json` by restoring the direct
backward prerequisite `the-exponential-function`. After that change, the
published-home closure audit reports no hidden prerequisite on DG-2.

### B9-2 — repaired: DG-3 dropped three direct prerequisites and hid one extra earlier page

The live plan spec gives `tangent-cotangent-and-the-differential` the direct
prerequisites:

- `smooth-manifolds-and-smooth-maps`
- `dual-spaces-bilinear-forms-and-inertia`
- `the-determinant-of-a-linear-operator`
- `the-fundamental-theorems-of-calculus`

But the batch-9 manifest had reduced that list to
`smooth-manifolds-and-smooth-maps` alone.

The resulting hidden route was real on current bytes:

- `def-derivation-at-a-point-and-tangent-space`,
  `def-differential-of-a-smooth-real-valued-function`, and
  `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union` cite
  `def-algebraic-dual-and-linear-functional`, homed on
  `dual-spaces-bilinear-forms-and-inertia`
- `lem-first-order-hadamard-factorization-near-a-point` cites
  `thm-newton-leibniz-with-interior-derivative` and
  `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, both
  homed on `the-fundamental-theorems-of-calculus`
- `lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses` and
  `lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian` cite
  `lem-matrix-inversion-preserves-ck-regularity`, homed on the additional
  earlier page `the-inverse-function-theorem-completed`

I repaired `research/frontier-24-batch-9.pages.json` by restoring the three
direct plan-spec prerequisites and adding the missing backward prerequisite
`the-inverse-function-theorem-completed`. `the-determinant-of-a-linear-operator`
was kept explicitly because the authoritative plan already declares it directly.
After that repair, the published-home closure audit reports no hidden
prerequisite on DG-3.

## Page review

### `direct-matrix-factorisations-lu-cholesky-and-qr`

This pair is sufficient on the current bytes. The manifest keeps the LA-17
route cleanly separated into triangular solves, unpivoted LU/LDU, block LU,
PLU, Cholesky, and computational QR, exactly as the controlling design
requires. The source stack is sufficient for authoring: FNC plus Cornell cover
the owned exact statements, the two LA-18 topics are explicitly deferred, and
the remaining three exclusions are genuine scope boundaries rather than missing
current bridges.

**Verdict:** sufficient.

### `chain-complexes-and-homology`

This pair is sufficient on the current bytes. The manifest follows the HA-1
route from complexes and homology through induced maps, quasi-isomorphisms,
degreewise kernels/cokernels, exact functors, and Euler-Poincare. The source
stack is sufficient for authoring: Weibel, Sharifi, and Stacks cover the current
page, while homotopy, long exact sequences, and double complexes are all
explicitly deferred to their exact later destinations. No hidden prerequisite or
foreign B-page dependency remains.

**Verdict:** sufficient.

### `smooth-partitions-of-unity-and-exhaustions`

This pair is sufficient after B9-1. The controlling DG-2 route is intact:
flat and step functions, Euclidean and chart bumps, locally finite smooth sums,
normalization, smooth partitions, smooth Urysohn/extension, and proper
exhaustions. The source basis is sufficient for authoring: Merry and Hitchin
carry the detailed live mathematics, Lee is a valid contents-map witness for
the chapter route, and the 12 canonical rows are all compatible with those
treatments. The only real closure defect was the dropped exponential
prerequisite, and that is now repaired.

**Verdict:** sufficient.

### `tangent-cotangent-and-the-differential`

This pair is sufficient after B9-2. The DG-3 route remains derivations first,
then curves, then the differential, then tangent/cotangent bundles and
pullbacks. The source basis is sufficient for authoring: Lee, Merry, and
Hitchin cover the tangent, differential, and bundle constructions, and the 13
canonical rows are all ordinary intermediate obligations inside that route. The
only substantive scaffold defect was the understated page-closure claim, which
is now repaired by the added backward prerequisites.

**Verdict:** sufficient.

## Outcome

All four owned A pages are now sufficient for authoring on the current August
29, 2026 bytes:

- `direct-matrix-factorisations-lu-cholesky-and-qr`
- `chain-complexes-and-homology`
- `smooth-partitions-of-unity-and-exhaustions`
- `tangent-cotangent-and-the-differential`
