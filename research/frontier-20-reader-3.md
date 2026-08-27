# frontier-20 reader-3 report

Date: Wednesday, August 26, 2026
Batch: `3`
Run: `frontier-20`

## Opened scope

- Repo instructions and live-run context: `README.md`, `CLAUDE.md`, `research/frontier-20-reader.task.md`, `research/frontier-20-dispatch/reader-reader-3.prompt.md`, `.autopilot/status.md`.
- Batch artifacts: `research/frontier-20-batch-3.pages.json`, `research/frontier-20-batch-3.notes.md`, `research/frontier-20-batch-3.coverage.json`, `research/frontier-20-batch-3.proof-contracts.json`, `research/frontier-20-covers.json`.
- Assigned page files: `library/complex-analysis/subharmonic-functions-and-the-dirichlet-problem.md`, `library/complex-analysis/subharmonic-functions-and-the-dirichlet-problem-examples.md`.
- Assigned A-page items opened: `rem-standard-upper-semicontinuous-subharmonic-convention`, `def-plane-subharmonic-function`, `def-plane-superharmonic-function`, `lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined`, `thm-harmonic-majorant-characterization-of-plane-subharmonicity`, `thm-c-two-characterization-of-plane-subharmonicity`, `thm-plane-subharmonic-functions-are-locally-integrable`, `thm-log-modulus-of-a-holomorphic-function-is-subharmonic`, `cor-modulus-powers-of-holomorphic-functions-are-subharmonic`, `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity`, `thm-decreasing-limit-theorem-for-plane-subharmonic-functions`, `def-upper-semicontinuous-regularization`, `thm-upper-envelope-theorem-for-plane-subharmonic-functions`, `thm-maximum-principle-for-plane-subharmonic-functions`, `def-poisson-modification-of-a-subharmonic-function`, `lem-gluing-lemma-for-plane-subharmonic-functions`, `thm-poisson-modification-preserves-subharmonicity-and-majorizes`, `def-perron-family-for-the-plane-dirichlet-problem`, `def-perron-envelope-for-the-plane-dirichlet-problem`, `lem-perron-family-is-nonempty-and-bounded`, `thm-perron-envelope-is-harmonic`, `def-barrier-and-regular-boundary-point`, `thm-barrier-characterization-of-regular-boundary-points`, `thm-perron-solves-dirichlet-on-regular-plane-domains`, `thm-exterior-disc-and-exterior-cone-points-are-regular`, `lem-local-subharmonic-peak-function-globalizes`, `lem-weak-local-subharmonic-peak-function-implies-regularity`, `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular`, `thm-nonsingleton-boundary-component-is-regular`, `cor-simply-connected-proper-plane-domains-are-regular`, `thm-conformal-transport-of-plane-dirichlet-solutions`.
- Assigned B-page items opened: `ex-basic-plane-subharmonic-functions`, `ex-poisson-modification-of-a-radial-quadratic-on-a-disc`, `ex-perron-solution-on-an-annulus-with-radial-data`, `ex-a-square-corner-has-an-explicit-barrier`, `cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum`, `fs-every-bounded-plane-domain-has-a-dirichlet-solution`, `fs-the-perron-envelope-always-attains-the-boundary-data`, `fs-a-subharmonic-function-can-attain-an-interior-maximum`, `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic`.
- Dependency items opened independently for verification: `def-plane-harmonic-function`, `def-poisson-integral-on-the-disc`, `thm-poisson-integral-solves-the-disc-dirichlet-problem`, `thm-conformal-invariance-of-plane-harmonicity`, `thm-monotone-convergence`, `thm-monotone-convergence-for-the-integral`, `thm-zero-order-factorization-holomorphic-function`, `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc`, `cor-holomorphic-functions-are-real-analytic-and-smooth`, `thm-harnack-convergence-principle-for-plane-harmonic-functions`, `cor-uniqueness-for-the-bounded-plane-dirichlet-problem`, `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions`, `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace`, `def-null-homologous-and-homologous-complex-cycles`, `thm-homological-simple-connectivity-equivalences`.

## Repairs

- `items/thm-harmonic-majorant-characterization-of-plane-subharmonicity.md`
  - Replaced the false dependency and citation to the sequence theorem `thm-monotone-convergence` with the actual nonnegative-integral theorem `thm-monotone-convergence-for-the-integral`.
- `items/thm-decreasing-limit-theorem-for-plane-subharmonic-functions.md`
  - Repaired the same monotone-convergence miscitation: the proof uses integral monotone convergence, not monotone convergence of real sequences.
- `items/thm-exterior-disc-and-exterior-cone-points-are-regular.md`
  - Rewrote the exterior-cone proof with a symmetric sector and the correct exponent `\lambda=\pi/(2\theta)`, so `-\operatorname{Re}(z^\lambda)` is actually negative on the sector used.
- Render repairs on in-flight scoped items:
  - `items/def-poisson-modification-of-a-subharmonic-function.md`
  - `items/lem-gluing-lemma-for-plane-subharmonic-functions.md`
  - `items/def-barrier-and-regular-boundary-point.md`
  - `items/thm-barrier-characterization-of-regular-boundary-points.md`
  - `items/lem-local-subharmonic-peak-function-globalizes.md`
  - `items/ex-basic-plane-subharmonic-functions.md`
  - `items/ex-poisson-modification-of-a-radial-quadratic-on-a-disc.md`
  - `items/fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic.md`
  - These repairs were all scoped to real render defects: multiline `$$...$$` displays that the renderer mis-parsed, plus the invalid YAML title escape in `ex-basic-plane-subharmonic-functions`.
- Proof-contract refresh:
  - Regenerated contract entries for `thm-harmonic-majorant-characterization-of-plane-subharmonicity`, `thm-decreasing-limit-theorem-for-plane-subharmonic-functions`, `thm-exterior-disc-and-exterior-cone-points-are-regular`, `lem-gluing-lemma-for-plane-subharmonic-functions`, `thm-barrier-characterization-of-regular-boundary-points`, `lem-local-subharmonic-peak-function-globalizes`, `ex-basic-plane-subharmonic-functions`, `ex-poisson-modification-of-a-radial-quadratic-on-a-disc`, and `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic`.
  - Corrected stale boundary rows for `thm-upper-envelope-theorem-for-plane-subharmonic-functions`, `thm-exterior-disc-and-exterior-cone-points-are-regular`, `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular`, `ex-perron-solution-on-an-annulus-with-radial-data`, and `ex-basic-plane-subharmonic-functions`.

## Uneditable artifact drift

- `research/frontier-20-batch-3.pages.json` still carries scaffold-era dependency metadata for the repaired monotone-convergence items.
  - `thm-decreasing-limit-theorem-for-plane-subharmonic-functions` still names `thm-monotone-convergence`.
  - `thm-harmonic-majorant-characterization-of-plane-subharmonicity` still omits the current `thm-conformal-invariance-of-plane-harmonicity` and `thm-monotone-convergence-for-the-integral` item-level dependencies.
  - I did not edit the batch manifest because Step 6a authority is limited to in-flight items, assigned A-page prose, and the supporting batch proof contract.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on every changed item file
  - Passed. `lem-local-subharmonic-peak-function-globalizes`, `ex-basic-plane-subharmonic-functions`, and `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic` were mechanically reflowed; the other changed files were already canonical.
- `node tools/tsx-run.mjs tools/precheck.mts` on every changed proof-bearing item
  - Passed after adopting the canonical renumbering in `ex-basic-plane-subharmonic-functions`.
  - The changed definition items are correctly non-proof-bearing.
- `node tools/rendercheck.mjs <42 batch-3 page/item files>`
  - Passed after the render repairs.
- `node tools/proof-contract.mjs research/frontier-20-batch-3.proof-contracts.json --strict --items ...`
  - Passed on the 12 touched contract entries.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-3.proof-contracts.json --items ... --fail-on-missing-quote`
  - Passed; no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-3.proof-contracts.json --items ...`
  - Passed with no contradicted dispositions.
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-3.pages.json`
  - Not a meaningful Step-6 gate on already-authored batch files; it predictably raised `batch-item-already-exists` errors because it is a future-batch minting check, not a read-stage validation.

## Page verdicts

- `subharmonic-functions-and-the-dirichlet-problem` (A page): pass after the three mathematical repairs and the scoped render/contract repairs; no remaining uneditable item, page-prose, or published-dependency defect found.
- `subharmonic-functions-and-the-dirichlet-problem-examples` (B page): pass after the scoped in-flight item render repairs; no remaining uneditable defect found.

## Blockers

- None.
