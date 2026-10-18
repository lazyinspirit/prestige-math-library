# Step 5 adjudication — group **h**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 22, 23, 24: 3 A/B pair(s), 6 page(s), 57 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **22**: `research/numerical-analysis-remaining-71-2026-10-17-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/numerical-analysis-remaining-71-2026-10-17-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/numerical-analysis-remaining-71-2026-10-17-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-analysis-remaining-71-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 22 | `polynomial-eigenproblems-and-linearization` | A | numerical-linear-algebra-and-approximation | 2598 | `restarted-and-block-eigensolvers` |
| 22 | `polynomial-eigenproblems-and-linearization-examples` | B | numerical-linear-algebra-and-approximation | 2599 | `polynomial-eigenproblems-and-linearization` |
| 23 | `numerical-algebraic-riccati-equations-and-stabilizing-branches` | A | numerical-linear-algebra-and-approximation | 2600 | `generalized-eigenvalue-pencils-and-qz-methods`, `matrix-functions-and-scaling-squaring` |
| 23 | `numerical-algebraic-riccati-equations-and-stabilizing-branches-examples` | B | numerical-linear-algebra-and-approximation | 2601 | `numerical-algebraic-riccati-equations-and-stabilizing-branches` |
| 24 | `square-root-covariance-update-error-and-stability` | A | numerical-linear-algebra-and-approximation | 2602 | `numerical-algebraic-riccati-equations-and-stabilizing-branches`, `kalman-filtering` |
| 24 | `square-root-covariance-update-error-and-stability-examples` | B | numerical-linear-algebra-and-approximation | 2603 | `square-root-covariance-update-error-and-stability` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `polynomial-eigenproblems-and-linearization` — Polynomial eigenproblems and linearization (8 item(s))

- `def-matrix-polynomial-and-homogeneous-eigenpairs` · definition — Regular matrix polynomials and homogeneous eigenpairs
- `def-first-frobenius-companion-pencil` · definition — First Frobenius companion pencil of a matrix polynomial
- `def-coefficientwise-weighted-backward-error-for-matrix-polynomial` · definition — Coefficientwise weighted Frobenius backward error for a polynomial eigenpair
- `def-rational-matrix-eigenproblem-and-pole-domain` · definition — Rational matrix eigenproblem on its pole-free domain
- `thm-first-companion-pencil-is-strong-linearization` · theorem — The first Frobenius companion pencil preserves the finite and infinite polynomial spectrum
- `lem-first-companion-pencil-residual-transfer` · lemma — A companion-pencil residual transfers to the polynomial residual through explicit block factors
- `thm-exact-coefficientwise-weighted-backward-error` · theorem — Exact minimum formula for a fixed polynomial eigenpair's weighted backward error
- `prop-clearing-a-common-denominator-away-from-poles` · proposition — Clearing a common denominator preserves rational eigenpairs only away from poles

### `polynomial-eigenproblems-and-linearization-examples` — Polynomial eigenproblems and linearization — Examples (3 item(s))

- `ex-quadratic-damped-vibration-first-companion-pencil` · example — A damped oscillator and its first companion pencil
- `ex-infinite-polynomial-eigenvalue-from-singular-leading-coefficient` · example — A singular leading coefficient gives an infinite polynomial eigenvalue
- `ex-rational-transfer-function-pole-is-a-spurious-cleared-root` · example — A transfer-function pole becomes a spurious root after denominator clearing

### `numerical-algebraic-riccati-equations-and-stabilizing-branches` — Numerical algebraic riccati equations and stabilizing branches (26 item(s))

- `def-lqr-stabilizability-and-detectability` · definition — Stabilizability and detectability for continuous and discrete linear systems
- `lem-reachable-decomposition-and-state-feedback-pole-placement` · lemma — Reachable block decomposition and same-field state-feedback pole placement
- `alg-finite-budget-stable-block-reordering-for-schur-and-qz` · algorithm — Finite-budget stable block reordering for Schur and QZ forms
- `def-standard-continuous-and-discrete-riccati-equations` · definition — Standard CARE and DARE data, equations, and conventions
- `lem-powers-of-a-schur-stable-matrix-decay` · lemma — Powers of a Schur-stable matrix decay geometrically up to a polynomial factor
- `lem-stabilizability-and-detectability-pbh-necessary-conditions` · lemma — Stabilizability and detectability imply the closed-region PBH rank tests
- `thm-finite-budget-stable-block-reordering-correctness-and-status` · theorem — Finite-budget stable block reordering has exact adjacent-swap correctness and status
- `alg-finite-budget-newton-kleinman-policy-iteration` · algorithm — Finite-budget exact or safeguarded inexact Newton-Kleinman policy iteration
- `alg-finite-budget-structure-preserving-doubling-for-dare` · algorithm — Finite-budget structure-preserving doubling iteration for the DARE
- `thm-pbh-stabilizability-and-detectability-equivalence` · theorem — Closed-region PBH rank tests characterize continuous and discrete stabilizability and detectability
- `thm-care-stabilizing-psd-solution-and-value` · theorem — Stabilizability and detectability give the unique stabilizing positive-semidefinite CARE solution
- `thm-dare-stabilizing-psd-solution-and-value` · theorem — Stabilizability and detectability give the unique stabilizing positive-semidefinite DARE solution
- `lem-sda-doubling-composition-and-psd-invariants` · lemma — The DARE doubling recurrence composes two Riccati steps and preserves positive semidefiniteness
- `prop-care-hamiltonian-stable-graph` · proposition — The stabilizing CARE solution is the Hamiltonian stable invariant graph
- `prop-dare-symplectic-pencil-graph-and-stable-spectrum` · proposition — The stabilizing DARE solution is the stable deflating graph of a regular symplectic pencil
- `prop-inexact-newton-kleinman-safeguard` · proposition — Verified Lyapunov residual, descent, and stability checks make an inexact Newton-Kleinman step safe
- `thm-care-local-residual-ball-certificate` · theorem — A CARE residual and Lyapunov margin certify a unique stabilizing root in a matrix ball
- `thm-dare-local-residual-ball-certificate` · theorem — A DARE residual, Stein inverse bound, and Lyapunov margin certify a stabilizing root
- `thm-newton-kleinman-exact-global-and-local-quadratic-convergence` · theorem — Exact Newton-Kleinman iteration preserves stability, decreases cost matrices, and converges quadratically locally
- `alg-finite-budget-schur-qz-riccati-candidate-extraction` · algorithm — Finite-budget CARE and DARE candidate extraction from ordered Schur and QZ forms
- `prop-graph-basis-yields-care-or-dare-solution` · proposition — An invertible graph block converts an exact stable Schur or QZ basis into a Riccati solution
- `thm-sda-convergence-and-eventual-quadratic-envelope` · theorem — DARE structure-preserving doubling converges with a quantified quadratic error envelope
- `prop-dare-stable-deflating-subspace-perturbation-bound` · proposition — Separated DARE pencils have quantitatively stable deflating graphs
- `lem-riccati-finite-budget-wrappers-return-a-status` · lemma — Finite Riccati candidate, Newton-Kleinman, and doubling wrappers return a status
- `prop-riccati-dense-work-and-acceptance-diagnostics` · proposition — Dense Riccati work counts and numerical acceptance require equation-level diagnostics
- `prop-riccati-sensitivity-and-graph-subspace-conditioning` · proposition — Riccati residual sensitivity and invariant graph conditioning retain spectral separation

### `numerical-algebraic-riccati-equations-and-stabilizing-branches-examples` — Numerical algebraic riccati equations and stabilizing branches — Examples (6 item(s))

- `ex-scalar-care-two-stabilizing-branches` · example — A scalar CARE has two real roots but only one stabilizing branch
- `ex-singular-a-dare-infinite-pencil-eigenvalue` · example — A singular A can give a stable DARE solution and an infinite pencil eigenvalue
- `ex-unstabilizable-or-undetectable-mode-breaks-stability` · example — Unstabilizable and undetectable unstable modes break the CARE conclusion
- `ex-near-boundary-riccati-residual-inconclusive` · example — A tiny CARE residual is inconclusive near the stability boundary
- `ex-newton-kleinman-exact-and-inexact-step` · example — Exact Newton-Kleinman decreases the cost while an unchecked inexact step can lose stability
- `ex-sda-psd-blocks-and-symmetry-defect` · example — SDA preserves PSD blocks exactly and exposes a finite-precision symmetry defect

### `square-root-covariance-update-error-and-stability` — Square root covariance update error and stability (10 item(s))

- `lem-square-root-kalman-householder-error-rational-envelope` · lemma — An explicit rational envelope for the scaled Householder QR error
- `lem-square-root-kalman-gram-perturbation-bound` · lemma — A factor perturbation gives an explicit Gram-matrix error
- `lem-square-root-kalman-measurement-block-factor-identity` · lemma — The block QR measurement update gives the canonical Kalman update
- `lem-square-root-kalman-prediction-factor-identity` · lemma — QR prediction preserves the canonical covariance factor
- `lem-square-root-kalman-schur-perturbation-bound` · lemma — Innovation, gain, and posterior errors follow from joint covariance perturbations
- `lem-square-root-kalman-triangular-solve-forward-bound` · lemma — An innovation solve residual gives a singular-value forward bound
- `alg-finite-budget-square-root-kalman-filter` · algorithm — Finite-horizon square-root Kalman filter by rectangular factors and QR
- `lem-square-root-kalman-prearray-qr-error-bound` · lemma — Product and Householder QR errors bound the represented joint covariance
- `thm-square-root-kalman-finite-procedure-status` · theorem — The square-root Kalman procedure terminates with a finite status and operation-count bound
- `thm-square-root-kalman-finite-horizon-perturbation-bound` · theorem — The square-root filter has an explicit conditioned finite-horizon error bound

### `square-root-covariance-update-error-and-stability-examples` — Square root covariance update error and stability — Examples (4 item(s))

- `ex-square-root-kalman-perturbed-prearray-psd-factor` · example — A nonzero prearray perturbation changes the posterior but keeps its factor product PSD
- `ex-subtractive-kalman-update-loses-positive-semidefiniteness` · example — A rounded subtractive covariance update can become indefinite
- `ex-square-root-kalman-singular-prior-positive-innovation` · example — A singular prior factor with a positive innovation remains admissible
- `ex-square-root-kalman-nearly-noiseless-solve-sensitivity` · example — A nearly noiseless weakly scaled observation amplifies innovation-solve residual

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-analysis-remaining-71-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-analysis-remaining-71-2026-10-17`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
