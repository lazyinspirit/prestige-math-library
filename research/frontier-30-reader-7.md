# frontier-30 reader-7 report

Date: 2026-09-04.
Run: `frontier-30`
Batch: `7`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-dispatch/reader-reader-7.prompt.md`, `research/frontier-30-batch-7.pages.json`, `research/frontier-30-batch-7.coverage.json`, `research/frontier-30-batch-7.proof-contracts.json`, `research/frontier-30-batch-7.notes.md`, `research/frontier-30-splice-7.json`, and the live controller state via `tools/autopilot/bin/autopilot.mts status`.
- Assigned pages: `library/pde/partial-differential-equations-and-characteristics.md` and `library/pde/partial-differential-equations-and-characteristics-examples.md`.
- Assigned A-page items: `def-partial-differential-operator-order-and-solution`, `def-linear-semilinear-quasilinear-and-fully-nonlinear-pde`, `def-principal-part-and-principal-symbol-of-a-scalar-pde`, `lem-principal-symbol-under-a-c-one-coordinate-change`, `def-characteristic-covector-hypersurface-and-noncharacteristic-data`, `lem-characteristic-hypersurface-is-independent-of-defining-function`, `def-elliptic-hyperbolic-and-parabolic-principal-symbols`, `thm-symmetric-principal-part-has-a-signature-normal-form`, `def-two-variable-second-order-discriminant`, `thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant`, `thm-two-variable-constant-coefficient-canonical-principal-forms`, `rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy`, `def-linear-transport-equation-and-its-characteristic-flow`, `lem-transport-equation-along-a-characteristic`, `lem-transport-characteristics-depend-c-one-on-initial-position`, `thm-homogeneous-linear-transport-by-the-flow`, `thm-inhomogeneous-linear-transport-formula`, `def-noncharacteristic-first-order-cauchy-surface`, `thm-local-linear-transport-cauchy-problem`, `cor-support-propagates-along-transport-characteristics`, and `rem-characteristics-are-covectors-before-they-are-curves`.
- Assigned B-page items: `ex-constant-velocity-transport`, `ex-transport-with-growth-and-source`, `ex-radial-transport-flow`, `cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible`, `ex-classification-of-laplace-heat-and-wave-equations`, `ex-canonical-coordinates-for-a-hyperbolic-equation`, `ex-tricomi-equation-changes-type`, and `cex-threefold-classification-is-not-global`.
- Published dependency items opened for verification: `thm-chain-rule-for-total-derivatives`, `thm-symmetry-of-higher-mixed-partials`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-sylvesters-law-of-inertia`, `def-first-order-ode-initial-value-problem-and-solution`, `def-jacobian-matrix-and-gradient`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-continuous-dependence-of-odes-on-initial-data-and-parameters`, `thm-euclidean-inverse-function-theorem`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `thm-first-order-linear-ode-integrating-factor`, `thm-gronwall-integral-inequality`, `thm-norm-inequality-for-the-vector-valued-integral`, and `thm-picard-lindelof-local-existence-and-uniqueness`.

## Confirmed defects and edits

1. Repaired `items/lem-characteristic-hypersurface-is-independent-of-defining-function.md`.
   The old step `1.1` differentiated a pointwise factorization `\psi=h\phi` while only asserting `h` was continuous, so the proof used an unlicensed derivative. I replaced that step with the tangent-hyperplane argument: at each point of the hypersurface, `d\phi` and `d\psi` annihilate the same tangent space and therefore differ by a nonzero scalar. This keeps the homogeneity step valid without adding unsupported smoothness.
2. Repaired `items/thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant.md`.
   The old discriminant computation used the wrong matrix transformation law `M' = J^T M J`, which reverses the covector pullback from the preceding principal-symbol lemma. I corrected the proof to `M' = J^{-1} M J^{-T}` and updated the determinant scaling to `(\det J)^{-2}`, preserving the intended sign-invariance conclusion.
3. Repaired `items/thm-local-linear-transport-cauchy-problem.md`.
   The old proof appealed to the initial-position regularity lemma for a family of characteristics whose initial time varies with `\eta`, which the cited lemma does not state. I rewrote the argument through the space-time flow of `\widetilde a((x,t),r)=(a(x,t),1)` based at flow time `0`, so the inverse-function step now uses a genuinely `C^1` map with derivative equal to the surface tangents plus the transport vector at `(0,\eta_*)`.
4. Updated `research/frontier-30-batch-7.proof-contracts.json`.
   I aligned the three repaired derivation entries with the current item text so the contract evidence matches the repaired proofs.

No `verification.judge` block was present on the repaired items, so there was no stale judge record to remove.

## Per-page verdicts

- `partial-differential-equations-and-characteristics`: pass after the three repairs above. The page summary, item statements, and proof-contract entries now match the opened dependency closure.
- `partial-differential-equations-and-characteristics-examples`: pass. I re-read all eight example and counterexample items against the repaired A-page results; no B-page-body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-characteristic-hypersurface-is-independent-of-defining-function.md items/thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant.md items/thm-local-linear-transport-cauchy-problem.md`
  Result: all three repaired items were reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-characteristic-hypersurface-is-independent-of-defining-function.md items/thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant.md items/thm-local-linear-transport-cauchy-problem.md`
  Result: `3 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts` over the remaining proof-bearing assigned batch-7 items
  Result: `16 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-30-batch-7.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 19/19 item(s) checked`.
- `node tools/rendercheck.mjs items/lem-characteristic-hypersurface-is-independent-of-defining-function.md items/thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant.md items/thm-local-linear-transport-cauchy-problem.md library/pde/partial-differential-equations-and-characteristics.md library/pde/partial-differential-equations-and-characteristics-examples.md`
  Result: all 5 files passed YAML and KaTeX checks.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-7.proof-contracts.json`
  Result: no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-30-batch-7.pages.json`
  Result: `29 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-7.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: 3 advisory candidates only. I re-opened `lem-principal-symbol-under-a-c-one-coordinate-change`, `lem-transport-equation-along-a-characteristic`, and `lem-transport-characteristics-depend-c-one-on-initial-position`; none was a real contradiction, so no further edit was warranted.
- `git diff --check -- items/lem-characteristic-hypersurface-is-independent-of-defining-function.md items/thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant.md items/thm-local-linear-transport-cauchy-problem.md research/frontier-30-batch-7.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
