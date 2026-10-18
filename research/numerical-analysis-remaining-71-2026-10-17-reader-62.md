# Step 3a reader report — batch 62

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Verdict: the assigned pages have no remaining confirmed defect after the repairs below.

## Opened inventory

Pages reviewed:

- `library/numerical-pdes-and-spatial-discretization/reaction-diffusion-invariants-and-pattern-discretization.md` (A page)
- `library/numerical-pdes-and-spatial-discretization/reaction-diffusion-invariants-and-pattern-discretization-examples.md` (B page)

All 24 assigned items were opened and read: `def-reaction-vector-field-and-quasipositivity`, `def-periodic-reaction-diffusion-grid`, `def-reaction-invariant-rectangle`, `def-stoichiometric-mass-invariant`, `def-semilinear-reaction-diffusion-system`, `def-fv-tpfa-no-flux-diffusion-specialization`, `thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass`, `lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass`, `def-cell-centered-rectangular-no-flux-tpfa-grid`, `thm-reaction-diffusion-continuous-mass-balance`, `lem-periodic-fv-grid-spatial-consistency`, `lem-periodic-fv-grid-reaction-diffusion-commutator-bound`, `prop-two-species-continuous-and-discrete-turing-criterion`, `thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass`, `alg-exact-lie-reaction-diffusion-step`, `alg-euler-reaction-lie-diffusion-step`, `thm-exact-lie-step-preserves-invariant-rectangle-and-mass`, `thm-euler-lie-step-preserves-invariant-rectangle-and-mass`, `thm-periodic-reaction-diffusion-lie-error-estimate`, `thm-cell-centered-no-flux-reaction-diffusion-lie-error`, `cex-consistent-mass-p1-fem-diffusion-fails-positivity`, `ex-brusselator-continuous-turing-instability`, `ex-three-cell-grid-suppresses-continuous-turing-mode`, and `ex-fisher-kpp-forward-reaction-euler-bound`.

The 18 unique direct dependencies outside the assigned batch were opened: `def-parabolic-theta-finite-difference-scheme`, `lem-periodic-heat-difference-amplification-symbol`, `def-fv-admissible-cell-face-mesh`, `def-tpfa-harmonic-face-scheme`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `cor-differentiable-implies-continuous`, `thm-ftc-second-part`, `thm-gronwall-integral-inequality`, `thm-riemann-fubini-on-product-rectangles`, `def-bounded-piecewise-c-one-euclidean-domain`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, `def-countable-choice`, `cor-taylor-lagrange-and-cauchy-remainders`, `thm-continuous-implies-integrable`, and `lem-xd-finite-matrix-exponential-series`.

The batch manifest and `research/numerical-analysis-remaining-71-2026-10-17-batch-62.proof-contracts.json` were used as navigation and evidence; the authored mathematics and current source items governed the review.

## Repairs and evidence

1. In `thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass`, proof step 2.1 cited [F6] (the FTC) as the result that forces the nonnegative distance function to vanish. [F5] is the cited Grönwall inequality that gives that conclusion. The step now names and cites [F5] only. The matching derivation in the batch proof contract was updated.

2. `lem-periodic-fv-grid-reaction-diffusion-commutator-bound` bounded the commutator only for widths $h_j\le1$, while `thm-periodic-reaction-diffusion-lie-error-estimate` asserts an error bound for every periodic grid in its definition, including coarser grids. The commutator proof uses only positive widths and its centered-difference and gradient estimates are independent of the mesh widths. Its statement now gives the bound uniformly for all grids with $h_j=L_j/N_j$, $N_j\ge3$. The affected periodic-error contract excerpt was refreshed. Its direct consumer and indirect consumer, `thm-cell-centered-no-flux-reaction-diffusion-lie-error`, were checked against the expanded scope.

3. The Definition inputs in `alg-exact-lie-reaction-diffusion-step` did not specify the regularity needed to ensure its exact reaction substep exists for every finite time; the algorithm only supplied those conditions in a later note. Its Input now requires $F\in C^1$ near the reaction-inward rectangle with bounded derivative on a closed neighborhood, matching `thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass`. The direct and indirect consumers `thm-exact-lie-step-preserves-invariant-rectangle-and-mass`, `thm-periodic-reaction-diffusion-lie-error-estimate`, and `thm-cell-centered-no-flux-reaction-diffusion-lie-error` were checked against this condition. Their batch contract excerpts were refreshed.

4. The Definition inputs in `alg-euler-reaction-lie-diffusion-step` referred to $\tau_R$ without spelling out the coordinate Lipschitz constants from which it is determined. Its Input now states those constants and the exact $\tau_R$ formula from `lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass`. The direct consumers `thm-euler-lie-step-preserves-invariant-rectangle-and-mass` and `ex-fisher-kpp-forward-reaction-euler-bound` were checked against the clarified conditions. Their batch contract excerpts were refreshed.

No `verification.judge` record was present in any changed item. No proposed withdrawal was found.

## Page verdicts

- **A page — `reaction-diffusion-invariants-and-pattern-discretization`:** Its summary, titles, definitions, hypotheses, proofs, and stated scope agree with the reviewed items. The mass-balance branch explicitly states its $\mathrm{AC}_\omega$ assumption; the periodic and no-flux estimates are limited to the stated grids and smoothness. The three relevant proof/definition issues above were repaired. No unedited defect remains.
- **B page — `reaction-diffusion-invariants-and-pattern-discretization-examples`:** The P1 matrix calculation and the Brusselator and Fisher–KPP computations support their claims. The three-node grid eigenvalues lie below the unstable band and each discrete mode is Hurwitz. The page summary matches its examples. No unedited defect remains.

## Validation and blockers

- `reflow.mts` ran on all four changed items; all were unchanged by reflow.
- `precheck.mts` passed for both changed proof items; both algorithms returned 0 proof rows and 0 failures.
- The final `node tools/proof-layout.mjs` run covered all four changed item paths: 4 items, 7 steps, 0 defects.
- No batch-62 blocker was found. Run status also showed an unrelated `3a-collect` blocker: `collect-11 failed 3x (covers 11)`, outside this dispatch.

## Coverage note

All assigned pages and items, plus their 18 unique direct upstream dependencies, were read. This was not a recursive audit of every dependency beneath those published upstream results; their cited statements and the local proofs needed for this batch were opened. No unresolved mathematical uncertainty remained in the reviewed claims.
