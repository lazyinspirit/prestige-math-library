# frontier-24 · Alpha group `b` · Step 3 recheck

Group `b` owns batches `3`, `8`, and `9` in
`research/frontier-24-alpha-groups.json`: LA-17
`direct-matrix-factorisations-lu-cholesky-and-qr`, HA-1
`chain-complexes-and-homology`, DG-2
`smooth-partitions-of-unity-and-exhaustions`, and DG-3
`tangent-cotangent-and-the-differential`.

I re-read the governing task files on Saturday, August 29, 2026, then verified
the live bytes in:

- `research/frontier-24-alpha-b-step3-scaffold-review.md`
- `research/frontier-24-batch-3.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-8.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-9.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-3.pages.json`
- `research/frontier-24-batch-8.pages.json`
- `research/frontier-24-batch-9.pages.json`
- `research/frontier-24-batch-3.coverage.json`
- `research/frontier-24-batch-8.coverage.json`
- `research/frontier-24-batch-9.coverage.json`
- `research/plan-spec.json`
- `research/plan-algebra-track-expansion-v2.md`
- `research/plan-homological-algebra-track.md`
- `research/plan-differential-geometry-track.md`
- `research/frontier-24-alpha-step0-drift.md`
- `research/frontier-24-alpha-b-scope-decisions.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-24 --group b`
  - result: `scope-decisions: b: 15 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-24 --group b`
  - result: `scope-decisions: 15 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-3.coverage.json --require-destination`
  - result: `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-8.coverage.json --require-destination`
  - result: `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-9.coverage.json --require-destination`
  - result: `coverage-checklist: 2 page(s), 69 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  - result: `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK` and reports only the standing repository-wide `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-3.coverage.json`
  - result: `source-fetch-check: 9/9 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-8.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-9.coverage.json`
  - result: `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/splice-plan.mjs --run frontier-24 --batch 3 --dry-run`
  - result: `splice-plan: batch 3 — 2 page(s) spliced, 0 already correct, 34 item(s)`
- `node tools/splice-plan.mjs --run frontier-24 --batch 8 --dry-run`
  - result: `splice-plan: batch 8 — 2 page(s) spliced, 0 already correct, 57 item(s)`
- `node tools/splice-plan.mjs --run frontier-24 --batch 9 --dry-run`
  - result: `splice-plan: batch 9 WITHHELD — 1 requires edge(s) await adjudication`
  - withheld edge: `tangent-cotangent-and-the-differential -> the-inverse-function-theorem-completed`
- `node tools/splice-plan.mjs --run frontier-24 --verify`
  - relevant current-byte result: DG-2 still reports undeclared prerequisites on
    `smooth-manifolds-and-smooth-maps`, and DG-3 still reports the manifest-vs-plan
    `requires` mismatch on `the-inverse-function-theorem-completed`

No newly pending scope row appeared after refresh, so no additional
scope-decision resolution was required.

## Batch 3 dispositions

### Step-3 fix pass — sufficient

- Disposition: **closed with no further fix owed**.
- Evidence: `research/frontier-24-batch-3.notes.md` correctly records that the
  scaffold review issued no batch-3 finding id. The live manifest still keeps
  `direct-matrix-factorisations-lu-cholesky-and-qr` on the LA-17 route declared
  in `research/plan-algebra-track-expansion-v2.md` and in the current
  `research/plan-spec.json`, with the sole direct prerequisite
  `matrix-norms-condition-numbers-and-numerical-stability`.

### `08225f75c32a9459e6b59cf39c3e892e34e8c57f08ff5f580b26689c1b7d3e7e` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-3 coverage still records Truncated SVD as `deferred` to
  `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, and the
  current LA-17 manifest still stops at direct factorisations plus reduced-QR
  least squares.

### `4b0988d4f4b45eb528cccddb2ef8616b3ae43961d757b15fb74b5d6e30d8b9fc` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-3 coverage still records FNC Theorem `2.9.1` as
  `out-of-scope`, and the current manifest still does not widen LA-17 into the
  diagonally dominant no-pivot criterion lane.

### `56675e835d70e4a13604f9b26bcd2dff18239516be37c80d863f2820989f0d02` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-3 coverage still records the Cornell inertia computation as
  `out-of-scope`, and the current manifest still keeps Cholesky inside the
  Hermitian positive-definite boundary rather than the indefinite LDL^T lane.

### `aebbf454dbf3f367928c18abfd06b86bddeaf55cf777e113259794ac1a70e86a` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-3 coverage still records `l1 and the lasso` as
  `out-of-scope`, and the current plan/manifest route still ends before any
  convex-optimization or sparse-regularization material.

### `c946bde5ec121b807c82c01d3f37537e5d6368bd6e136b508e498b8554a4ab60` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-3 coverage still records Tikhonov as `deferred` to
  `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, and the
  current LA-17 route still leaves regularization and singular-value filters to
  that next page.

## Batch 8 dispositions

### Step-3 fix pass — sufficient

- Disposition: **closed with no further fix owed**.
- Evidence: `research/frontier-24-batch-8.notes.md` correctly records that the
  scaffold review issued no batch-8 finding id. The live manifest still keeps
  `chain-complexes-and-homology` on the HA-1 route declared in
  `research/plan-homological-algebra-track.md` and in the current
  `research/plan-spec.json`, with direct prerequisites
  `abelian-categories` and `exactness-and-the-member-calculus`.

### `26d5be0c21781436620be5a58bf9e0000ca0e463997dafb189b9cfc90b7ce69a` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Stacks Lemma `12.13.5(2)` as
  `deferred` to `chain-homotopy-and-the-homotopy-category`, and the current
  manifest still does not define homotopy equivalence or contractibility.

### `345545eaba78c66497ea0413a95a9537f0a46613a14090e57b22741d877fa1ac` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Sharifi Theorem `2.7.13` as
  `deferred` to `long-exact-sequences-in-homology`, and the current manifest
  still stops before the connecting-morphism construction.

### `543287093990cb550e26fef11dc07d299038fead7ac8e927c90a332b117456b9` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Stacks Lemma `12.13.5(1)` as
  `deferred` to `chain-homotopy-and-the-homotopy-category`, and the current
  manifest still does not define chain homotopy.

### `6df11649e84cd83d5d51bef5d9b469f8e9fe50e8fcdf126d7d1c8e1b726f11dc` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Weibel Example `1.2.4` as
  `deferred` to `double-complexes-exact-couples-and-convergence`, and the
  current manifest still contains no bicomplex or totalization item.

### `77882406e9e9e54e4c2c4e9e900aeda75e2bb8e9a8e1f2bf582b0ef64fdca171` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Weibel Sign Trick `1.2.5` as
  `deferred` to `double-complexes-exact-couples-and-convergence`, and the
  current manifest still contains no sign-trick or total-complex route.

### `a56308c3feeb974cd8a28f801a21885192ad8425c16dc1ed185c777dc7a8e976` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Weibel Total Complexes `1.2.6` as
  `deferred` to `double-complexes-exact-couples-and-convergence`, and the
  current manifest still contains no total-complex item.

### `c0d235b86f26336c7a33c2dbda8f1905afd3fa72b6924e68edd4f43af4b5f4c1` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Sharifi Remark `2.7.8` as
  `out-of-scope`, and the current manifest still spends its capacity on the
  abelian-category construction rather than on the abelian-group terminology
  remark.

### `c5763b764f1c5fc57d021c06c96be65bfbe2f3cfd16d8c13e604b0c7a058fe7c` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Weibel Exercise `1.1.5` (`0 -> C`
  quasi-isomorphism iff acyclic) as `out-of-scope`, and the current manifest
  still authors the exact-at-a-degree criterion and quasi-isomorphism
  definition directly without isolating that reformulation as its own item.

### `dc43acc8934fa28609f23b11f3b225e8b48582f86fd1ab3d9348b4216ae1ed8a` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Sharifi Example `2.7.9` as
  `out-of-scope`, and the current B-page scope still keeps the selected two-term,
  split, quotient, and Euler-Poincare examples instead of the periodic torsion
  example.

### `fd856ada952926c03d3f10f91e0fad67055fe2486d46f6ff001e5b38b4677cda` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-8 coverage still records Stacks Lemma `12.13.6` as
  `deferred` to `long-exact-sequences-in-homology`, and the current manifest
  still ends before the canonical long exact homology sequence.

## Batch 9 dispositions

### `B9-1` — insufficient

- Disposition: **accepted repair stands, but the pair remains blocked**.
- Evidence: the live batch-9 manifest does now restore the direct prerequisite
  `the-exponential-function`, exactly as the scaffold review required, so the
  narrow B9-1 repair itself is present on current disk.
- Evidence: the current DG-2 route is still not sufficient for authoring.
  `research/plan-differential-geometry-track.md` §DG-2 declares the direct
  prerequisite `smooth-manifolds-and-smooth-maps`, but both the live
  `research/plan-spec.json` entry and the live batch-9 manifest still point
  instead to the B page `smooth-manifolds-and-smooth-maps-examples`.
- Evidence: `node tools/splice-plan.mjs --run frontier-24 --verify` still
  reports current undeclared prerequisites from DG-2 items back to
  `smooth-manifolds-and-smooth-maps`, including `def-smooth-manifold`,
  `prop-smoothness-is-local-on-the-source`, and
  `lem-coordinate-balls-form-a-basis-of-a-topological-manifold`.

### `B9-2` — insufficient

- Disposition: **still blocked**.
- Evidence: the live batch-9 manifest does now include the three direct
  prerequisites already named by the authoritative plan for DG-3:
  `dual-spaces-bilinear-forms-and-inertia`,
  `the-determinant-of-a-linear-operator`, and
  `the-fundamental-theorems-of-calculus`. That part of the scaffold repair is
  present on current disk.
- Evidence: the current DG-3 route is still not closed against the
  authoritative plan. The live manifest additionally requires
  `the-inverse-function-theorem-completed`, but
  `node tools/splice-plan.mjs --run frontier-24 --batch 9 --dry-run` is still
  withheld because that edge awaits adjudication, and
  `node tools/splice-plan.mjs --run frontier-24 --verify` still reports the
  manifest-vs-plan `requires` mismatch for
  `tangent-cotangent-and-the-differential`.
- Evidence: the current motivating dependency remains real on disk: the DG-3
  bundle-transition items still cite
  `lem-matrix-inversion-preserves-ck-regularity` from
  `the-inverse-function-theorem-completed`, so the extra prerequisite is still
  load-bearing rather than stale.

## Verdicts

- `direct-matrix-factorisations-lu-cholesky-and-qr`: **sufficient**
- `chain-complexes-and-homology`: **sufficient**
- `smooth-partitions-of-unity-and-exhaustions`: **insufficient**
- `tangent-cotangent-and-the-differential`: **insufficient**

`research/frontier-24-alpha-b-step3-verdicts.json` was updated to match these
verified current-byte outcomes.

## Orchestrator adjudication after the failed Step 3 gate

The Step 3 `scaffold-verdicts` gate exposed both batch-9 prerequisite defects
as blockers. The orchestrator resolved them on Saturday, August 29, 2026:

- DG-2 now directly requires `smooth-manifolds-and-smooth-maps` in both the
  authoritative plan and the batch manifest; the incorrect B-page edge was
  removed.
- DG-3 now directly requires `the-inverse-function-theorem-completed` in the
  design, authoritative plan, and batch manifest. This edge is load-bearing
  for the two bundle-transition lemmas that use
  `lem-matrix-inversion-preserves-ck-regularity`, and it points backward to an
  already published page.
- Both batch-9 A-page verdicts were changed to `sufficient` only after the
  governing files agreed and the exact validators passed.
