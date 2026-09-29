# Step 5a reader report — batch 11

Run: `frontier-36-complete`  
Batch: `11`  
Reader: `reader-11`  
Date: 2026-09-29

## Opened inventory

Read the assigned manifest and both pages:

- `library/pde/fundamental-solutions-newtonian-potentials-and-green-functions.md`
- `library/pde/fundamental-solutions-newtonian-potentials-and-green-functions-examples.md`

Read all 22 main-page items:

- `def-fundamental-solution-of-a-constant-coefficient-operator`
- `def-laplace-fundamental-solution-with-positive-minus-laplacian-sign`
- `lem-distributional-derivatives-commute-with-convolution-against-test-functions`
- `lem-neumann-compatibility-from-the-divergence-theorem`
- `lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness`
- `cor-neumann-solutions-are-unique-modulo-componentwise-constants`
- `lem-laplace-fundamental-kernel-is-locally-integrable`
- `lem-laplace-fundamental-solution-is-harmonic-off-its-pole`
- `def-newtonian-potential`
- `thm-minus-laplacian-of-the-fundamental-solution-is-dirac`
- `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data`
- `thm-decay-of-the-newtonian-potential-of-compactly-supported-data`
- `thm-newtonian-potential-solves-poisson-distributionally`
- `thm-newtonian-potential-for-holder-data-is-classical`
- `def-dirichlet-green-function-for-minus-laplacian`
- `lem-dirichlet-green-function-is-unique-and-positive`
- `thm-green-function-symmetry`
- `def-poisson-kernel-from-a-green-function`
- `thm-green-representation-formula`
- `cor-zero-dirichlet-green-representation-for-poisson-data`
- `cor-classical-dirichlet-and-poisson-problems-are-unique`
- `rem-green-identities-come-from-the-euclidean-integration-pair`

Read all 9 examples-page items:

- `ex-flux-of-the-laplace-fundamental-solution`
- `ex-two-dimensional-logarithmic-kernel-has-unit-normalised-flux`
- `ex-one-dimensional-green-function-on-an-interval`
- `ex-adding-a-harmonic-function-preserves-a-fundamental-solution`
- `ex-newtons-shell-theorem-from-the-mean-property`
- `ex-newtonian-potential-of-a-radial-density`
- `cex-second-derivatives-of-the-fundamental-solution-are-not-locally-integrable-absolutely`
- `cex-green-functions-need-not-exist-with-the-naive-boundary-regularity`
- `cex-neumann-poisson-problem-needs-the-compatibility-condition`

For dependency checks, opened the relevant claim sections of the bounded-
`C^1`-domain convention, first/second Green and divergence identities,
surface-integration convention, weak maximum and minimum principles, strong
maximum principle, removable-singularity theorem, and smooth-sphere harmonic
replacement theorem. Their stated dimensions, regularity, boundary, and sign
hypotheses match the uses recorded in the assigned proofs. I also consulted
Hunter's PDE notes at §2.6, equations (2.12)–(2.15), and §2.7.1 around the
Hessian cancellation formula, and Schmidt's 2026 notes at §2.8 and §2.11 for
the Green representation and Newton-potential regularity conventions. Schmidt
uses the opposite fundamental-solution sign; the assigned items state and use
the conversion. I did not independently retrieve the cited archived Teschl
PDF during this review.

## Review and repair

The authored kernel normalization, local integrability, flux computations,
Dirac identity, Newtonian-potential claims, radial and shell examples, Green
function claims, Neumann claims, and counterexamples checked out. The item
proofs preserve the stated domains and hypotheses, including the conditional
Green-function existence and the explicitly limited boundary regularity.

One material proof error was repaired in
`items/thm-green-representation-formula.md`, proof step 2.2. The definition
gives `G_Ω(x,·) = Φ(·−x) − H_x`; differentiating on the excised sphere
therefore gives `DΦ(y−x)·σ(y) − DH_x(y)·σ(y)`, not the printed plus sign. The
singular flux is still `1`; the corrector remainder has the same absolute
bound with its sign changed. The Statement and Definition are unchanged, so
there is no downstream interface event. The corresponding step-2-2 claim was
updated in `research/frontier-36-complete-batch-11.proof-contracts.json` and
the aggregate `research/frontier-36-complete-proof-contracts.json`. The item
had no `verification.judge` record to remove.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-green-representation-formula.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-green-representation-formula.md` — passed (`1 checked, 0 failing`).

No other edits were made. There are no uneditable defects and no proposed
withdrawals.

## Page verdicts

- **A page — `fundamental-solutions-newtonian-potentials-and-green-functions`: pass after the local proof repair.** Its summary, dimension conventions, dependency spine, and conditional Green-function scope agree with the reviewed items.
- **B page — `fundamental-solutions-newtonian-potentials-and-green-functions-examples`: pass.** Its examples and counterexample summaries match the reviewed carriers; no B-page prose was edited.

## Blocker and coverage limitation

The dispatch names `frontier-36-complete`, but `.autopilot/frontier-36-complete`
is absent, so that run's live stage and in-flight status could not be
recomputed. The available `.autopilot/frontier-36-twelve-categories` state is
for a differently named run and reports a Step-1 drift gate hold, with no work
in flight. I used the explicit batch-11 dispatch and the current draft files
for this assigned read, but the mismatch remains an operational blocker for
confirming the run-level stage. I did not independently fetch every external
reference cited by the items; the local derivations and the directly consulted
Hunter and Schmidt passages resolved the mathematical checks recorded here.
