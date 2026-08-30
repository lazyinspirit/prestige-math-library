# frontier-25 reader-9 report

Date: Sunday, August 30, 2026.

## Opened scope

- Control and instructions: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-25-reader.task.md`, `research/frontier-25-beta-9.task.md`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts: `research/frontier-25-batch-9.pages.json`, `research/frontier-25-batch-9.coverage.json`, `research/frontier-25-batch-9.notes.md`, `research/frontier-25-batch-9.proof-contracts.json`, and `research/frontier-25-step6-hash-9-pre.json`.
- Assigned pages: `library/differential-geometry/rank-theorems-and-embedded-submanifolds.md` and `library/differential-geometry/rank-theorems-and-embedded-submanifolds-examples.md`.
- Assigned items: all 45 current batch-9 item files on the A/B pair (`37` A-page items and `8` B-page examples/counterexamples).
- Direct dependency items opened for verification: `cor-inverse-matrix-by-adjugate`, `def-compact-space`, `def-determinant-of-a-square-matrix`, `def-differential-of-a-smooth-map`, `def-hausdorff-space`, `def-homeomorphism-and-open-maps`, `def-second-countable-space`, `def-smooth-manifold`, `def-subspace-topology-top`, `lem-derivative-of-a-power`, `lem-t0-t1-and-hausdorff-are-hereditary`, `prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets`, `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds`, `prop-identity-maps-and-composites-of-smooth-maps-are-smooth`, `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`, `prop-second-countability-is-hereditary`, `prop-smooth-maps-are-continuous`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-differentials-of-smooth-maps`, `thm-change-of-coordinate-formula-for-tangent-bases`, `thm-closed-subspace-of-a-compact-space-is-compact`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `thm-coordinate-formula-for-the-differential`, `thm-derivative-of-exponential`, `thm-determinant-multiplicative`, `thm-differential-rank-is-lower-semicontinuous`, `thm-euclidean-constant-rank-normal-form`, `thm-euclidean-inverse-function-theorem`, `thm-higher-regularity-of-local-inverses`, `thm-product-universal-property`, `thm-sine-and-cosine-derivatives`, and `thm-total-derivative-computes-directional-and-partial-derivatives`.

## Edits kept

- `items/cor-local-normal-form-for-immersions.md`
  Removed the citation-inaccurate rank fact and proved the rank-`m` step directly from injectivity of `dF_p`.
- `items/cor-local-normal-form-for-submersions.md`
  Removed the analogous citation-inaccurate rank fact and proved the rank-`n` step directly from surjectivity of `dF_p`.
- `items/thm-embedded-submanifolds-admit-local-defining-submersions.md`
  Repaired the local defining-map construction by replacing the ill-typed `y \circ \varphi` with the explicit second-factor projection composed with the slice chart.
- `items/prop-tangent-space-of-a-regular-level-set-is-the-kernel.md`
  Added the missing regular-value and local-submersion route, so the proof now takes its coordinate normal form from the submersion theorem rather than from the level-set conclusion.
- `items/thm-preimage-theorem-for-submanifolds-under-submersions.md`
  Replaced the wrong smoothness citation with the smooth-composition theorem, added the manifold differential chain rule, and made the regular-value argument explicit.
- `items/prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold.md`
  Rebuilt the proof through an explicit local defining map for the diagonal in product coordinates, so surjectivity of the graph-defining map is now proved rather than asserted.
- `items/prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form.md`
  Added the missing lower-semicontinuity step that upgrades surjectivity at one point to regularity on a neighbourhood before invoking the regular-level-set theorem.
- `items/cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding.md`
  Removed the over-specialized compact-metric citation and replaced it with a direct compact/Hausdorff topological proof on the corestriction.
- `research/frontier-25-batch-9.proof-contracts.json`
  Regenerated the eight affected contract entries after the item repairs.

The A/B page prose was left unchanged.

## Confirmed defects repaired

1. The two normal-form corollaries each rested on a citation-inaccurate rank fact rather than an explicit finite-dimensional linear-algebra step.
2. `thm-embedded-submanifolds-admit-local-defining-submersions` had an ill-typed local defining-map construction.
3. `prop-tangent-space-of-a-regular-level-set-is-the-kernel` used the regular-level-set theorem for a local projection normal form that it does not state.
4. `thm-preimage-theorem-for-submanifolds-under-submersions` cited the wrong smoothness item and used an unstated differential-composition argument.
5. `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold` asserted surjectivity for a local defining map that had not actually been chosen in the proof.
6. `prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form` jumped from surjectivity at one point to a regular-value conclusion on a neighbourhood.
7. `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding` cited a compact-metric theorem where only a general compact/Hausdorff topological argument applies.

## Uneditable defect

- `items/thm-coordinate-formula-for-the-differential.md:32`
  The published statement sums over `j=1,\dots,m`, but the target chart contributes `\partial_{y^j}` only up to `\dim N`. When `\dim N \ne m`, the displayed formula either omits target coordinates or refers to nonexistent ones. This is a fatal published-dependency defect in the closure of multiple assigned A-page items, and I did not edit it.

## Report-only drift outside edit scope

- `research/frontier-25-batch-9.pages.json` still records the pre-repair dependency sets for `prop-tangent-space-of-a-regular-level-set-is-the-kernel`, `thm-preimage-theorem-for-submanifolds-under-submersions`, `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold`, `prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form`, and `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding`.

I left the batch manifest untouched because this dispatch is licensed to repair in-flight items and assigned A-page prose, not batch-manifest metadata.

## Page verdicts

- `rank-theorems-and-embedded-submanifolds`
  The editable in-flight items are materially stronger after repair, but the page is not fully clear because its dependency closure still contains the fatal published defect in `thm-coordinate-formula-for-the-differential`.
- `rank-theorems-and-embedded-submanifolds-examples`
  No local example/counterexample defect remained on the current bytes. The companion page is locally coherent, but the batch still inherits the A-page dependency blocker above.

## Checks

- `node tools/regen-contract-entries.mjs research/frontier-25-batch-9.proof-contracts.json cor-local-normal-form-for-immersions cor-local-normal-form-for-submersions thm-embedded-submanifolds-admit-local-defining-submersions prop-tangent-space-of-a-regular-level-set-is-the-kernel thm-preimage-theorem-for-submanifolds-under-submersions prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding`
  Result: regenerated `8` affected proof-contract entries.
- `node tools/tsx-run.mjs tools/reflow.mts items/cor-local-normal-form-for-immersions.md items/cor-local-normal-form-for-submersions.md items/thm-embedded-submanifolds-admit-local-defining-submersions.md items/prop-tangent-space-of-a-regular-level-set-is-the-kernel.md items/thm-preimage-theorem-for-submanifolds-under-submersions.md items/prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold.md items/prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form.md items/cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding.md`
  Result: the changed items were reflowed once; the final reruns reported them unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-local-normal-form-for-immersions.md items/cor-local-normal-form-for-submersions.md items/thm-embedded-submanifolds-admit-local-defining-submersions.md items/prop-tangent-space-of-a-regular-level-set-is-the-kernel.md items/thm-preimage-theorem-for-submanifolds-under-submersions.md items/prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold.md items/prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form.md items/cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding.md`
  Result: pass, `8 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts <full batch-9 item scope>`
  Result: pass, `37 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-25-batch-9.proof-contracts.json --strict`
  Result: pass, `37/37 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-25-batch-9.proof-contracts.json`
  Result: pass, `128 citation(s) over 37 authored item(s)` with no quote failures and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-25-batch-9.proof-contracts.json`
  Result: no contradicted-disposition candidates. The reported template-reuse clusters were read during this dispatch and did not expose an additional mathematical defect.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-9.coverage.json`
  Result: pass, `1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-25-batch-9.pages.json`
  Result: pass, `45 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/rendercheck.mjs library/differential-geometry/rank-theorems-and-embedded-submanifolds.md library/differential-geometry/rank-theorems-and-embedded-submanifolds-examples.md items/cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding.md items/thm-embedded-submanifolds-admit-local-defining-submersions.md items/prop-tangent-space-of-a-regular-level-set-is-the-kernel.md items/thm-preimage-theorem-for-submanifolds-under-submersions.md items/prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold.md items/prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form.md`
  Result: pass, `OK — 8 file(s)`.
- `git diff --check`
  Result: pass.

## Blockers

- The remaining blocker is the fatal published dependency defect in `thm-coordinate-formula-for-the-differential`.
