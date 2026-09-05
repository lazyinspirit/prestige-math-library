# frontier-30 reader-18 report

Date: 2026-09-05.
Run: `frontier-30`
Batch: `18`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-dispatch/reader-reader-18.attempt-1.prompt.md`, `research/frontier-30-batch-18.pages.json`, `research/frontier-30-batch-18.coverage.json`, `research/frontier-30-batch-18.proof-contracts.json`, `research/frontier-30-batch-18.notes.md`, `research/frontier-30-splice-18.json`, and the live controller state via `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`.
- Assigned pages: `library/differential-topology/morse-functions-critical-values-and-genericity.md` and `library/differential-topology/morse-functions-critical-values-and-genericity-examples.md`.
- Published dependency page opened for page-context verification: `library/differential-topology/morse-critical-points-hessians-and-indices-examples.md`.
- Assigned A-page items: `lem-morse-functions-are-transverse-differentials`, `thm-morse-functions-are-dense-by-relative-jet-transversality`, `thm-morse-functions-form-a-residual-subset`, `lem-compact-morse-critical-points-have-uniform-hessian-gaps`, `lem-no-new-critical-points-under-a-compact-c1-small-perturbation`, `thm-morse-functions-are-open-dense-on-a-compact-manifold`, `lem-finitely-many-critical-values-can-be-separated-locally`, `thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold`, `thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse`, `thm-generic-squared-distance-functions-are-morse`, `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function`, `lem-properness-survives-a-controlled-locally-finite-perturbation`, `prop-proper-morse-exhaustions-exist-on-smooth-manifolds`, `rem-noncompact-morse-genericity-is-not-an-open-dense-claim`, and `rem-morse-does-not-mean-distinct-critical-values`.
- Assigned B-page items: `ex-generic-and-exceptional-height-directions-on-a-torus`, `ex-squared-distance-to-a-circle-and-its-medial-axis`, `ex-separating-equal-critical-values-by-bump-functions`, `cex-morse-functions-need-not-have-distinct-critical-values`, and `cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity`.
- Published dependency items opened for verification: `def-critical-point-and-critical-value-of-a-smooth-function`, `def-hessian-of-a-function-at-a-critical-point`, `def-nondegenerate-critical-point-nullity-index-and-coindex`, `def-a-smooth-map-transverse-to-an-embedded-submanifold`, `prop-the-zero-section-is-a-smooth-embedding`, `thm-parametric-transversality`, `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`, `lem-manifold-bump-for-a-compact-set-inside-an-open-set`, `thm-a-locally-finite-sum-of-smooth-functions-is-smooth`, `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function`, `def-morse-function-and-excellent-morse-function`, `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points`, `thm-euclidean-inverse-function-theorem`, `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space`, `lem-coordinate-change-congruence-for-the-critical-hessian`, `lem-nondegenerate-critical-points-are-isolated`, and `thm-coordinate-formula-for-the-differential-of-a-function`.

## Confirmed defects and edits

1. Repaired `items/lem-finitely-many-critical-values-can-be-separated-locally.md`.
   The old proof preserved the Hessians at the original critical points but never ruled out new critical points in the bump-transition regions. I rewrote it with inner neighbourhoods `V_i`, a compact complement `K`, a positive lower bound for `\|df\|` on `K`, and simultaneous `C^2`/differential smallness for the chosen coefficients. The revised argument now proves both "same critical set" and "same Hessians".
2. Repaired `items/ex-separating-equal-critical-values-by-bump-functions.md`.
   The example now computes the torus critical set and Hessians explicitly, then invokes the repaired compact separation argument for the actual perturbation. I also adopted the canonical phase numbering required by `precheck`.
3. Repaired `items/thm-morse-functions-are-dense-by-relative-jet-transversality.md`.
   The shell notation used `K_{n-1}` at `n=1` without defining `K_0`. I added the missing base convention `K_0:=\varnothing` so the support formulas are well formed.
4. Repaired `items/prop-proper-morse-exhaustions-exist-on-smooth-manifolds.md`.
   This item had the same missing `K_0` base case. I also rewrote the final assembly step through the explicit shell corrections `u_n:=h_n-h_{n-1}` so the appeal to the properness-preservation lemma matches the written hypotheses.
5. Repaired `items/lem-properness-survives-a-controlled-locally-finite-perturbation.md`.
   The old proof cited an existence theorem that does not define properness, and it concluded compactness of the new sublevel sets without recording that they are closed subsets of a compact set. I removed the stale dependency/citation and inserted the closed-sublevel-set argument.
6. Updated `research/frontier-30-batch-18.proof-contracts.json`.
   I synchronized the repaired derivations, step numbers, and citation uses for all five changed items.

No repaired item carried a `verification.judge` block, so there was no stale judge record to remove.

## Per-page verdicts

- `morse-functions-critical-values-and-genericity`: pass after the four A-item repairs above. The page summary still matches the current compact/noncompact split, and the opened dependency closure now supports the current item proofs.
- `morse-functions-critical-values-and-genericity-examples`: pass after repairing `ex-separating-equal-critical-values-by-bump-functions`. The other four example/counterexample items checked against the current A-page results without further edit.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-morse-functions-are-dense-by-relative-jet-transversality.md items/lem-finitely-many-critical-values-can-be-separated-locally.md items/lem-properness-survives-a-controlled-locally-finite-perturbation.md items/prop-proper-morse-exhaustions-exist-on-smooth-manifolds.md items/ex-separating-equal-critical-values-by-bump-functions.md`
  Result: `lem-finitely-many-critical-values-can-be-separated-locally` reflowed; the other four changed items were already canonical.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-morse-functions-are-dense-by-relative-jet-transversality.md items/lem-finitely-many-critical-values-can-be-separated-locally.md items/lem-properness-survives-a-controlled-locally-finite-perturbation.md items/prop-proper-morse-exhaustions-exist-on-smooth-manifolds.md items/ex-separating-equal-critical-values-by-bump-functions.md`
  Result: `5 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-30-batch-18.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 18/18 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-18.proof-contracts.json`
  Result: `52 citation(s)` with no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-30-batch-18.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted dispositions.
- `node tools/content-policy.mjs research/frontier-30-batch-18.pages.json`
  Result: `20 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/rendercheck.mjs items/thm-morse-functions-are-dense-by-relative-jet-transversality.md items/lem-finitely-many-critical-values-can-be-separated-locally.md items/lem-properness-survives-a-controlled-locally-finite-perturbation.md items/prop-proper-morse-exhaustions-exist-on-smooth-manifolds.md items/ex-separating-equal-critical-values-by-bump-functions.md library/differential-topology/morse-functions-critical-values-and-genericity.md library/differential-topology/morse-functions-critical-values-and-genericity-examples.md`
  Result: all 7 files passed YAML and KaTeX checks.
- `git diff --check -- items/thm-morse-functions-are-dense-by-relative-jet-transversality.md items/lem-finitely-many-critical-values-can-be-separated-locally.md items/lem-properness-survives-a-controlled-locally-finite-perturbation.md items/prop-proper-morse-exhaustions-exist-on-smooth-manifolds.md items/ex-separating-equal-critical-values-by-bump-functions.md research/frontier-30-batch-18.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
