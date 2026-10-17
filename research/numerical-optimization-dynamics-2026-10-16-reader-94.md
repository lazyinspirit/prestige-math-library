# Step 3a reader report — batch 94

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `94`  
Role: independent reader

## Scope and result

I reviewed the current authored mathematics of all 14 assigned items and both assigned pages. The run status was `running`; no writer was in flight. The review found no confirmed mathematical, citation, title, definition, computation, algorithm, proof-formatting, or page-summary defect. I made no edits. There are no uneditable findings for batch 94.

## Opened page inventory and verdicts

| Page | Opened carrier | Verdict |
|---|---|---|
| `exponential-and-integrating-factor-integrators` (A) | `library/numerical-differential-equations-and-stochastic-dynamics/exponential-and-integrating-factor-integrators.md` | Pass. The summary accurately limits the results to fixed finite matrices, describes the chosen ETD2 predictor and the phi-series behavior at singular/zero matrices, and states the nonuniformity and PDE limitations. |
| `exponential-and-integrating-factor-integrators-examples` (B) | `library/numerical-differential-equations-and-stochastic-dynamics/exponential-and-integrating-factor-integrators-examples.md` | Pass. The summary matches the four example subjects and distinguishes exact mathematical actions from certified implementation error. |

I also opened the two prerequisite page summaries named in the A-page manifest: `library/numerical-differential-equations-and-stochastic-dynamics/global-ode-and-density-error.md` and `library/numerical-linear-algebra-and-approximation/matrix-exponential-and-phi-function-actions.md`. Their stated interfaces relevant to this batch are consistent with the assigned claims; I did not review their other page contents as assigned work.

## Assigned item inventory

Items were reviewed in supplier-first order. All are current draft carriers from this run.

| Item | Review result |
|---|---|
| `lem-finite-matrix-semilinear-variation-of-constants` | Pass. Realification, product differentiation, and the oriented componentwise integral yield the stated endpoint identity. |
| `lem-skew-hermitian-matrix-exponential-is-unitary` | Pass. Differentiating (U(t)^*U(t)) gives zero and the initial value is the identity; the norm-preservation conclusion follows. |
| `lem-exponential-phi-integral-representations` | Pass. Uniform exponential-series tail bounds justify termwise integration in operator norm; the coefficients give the stated φ₁/φ₂ series, including zero. |
| `def-exponential-euler-and-etd2-step-maps` | Pass. Both maps and the predictor are defined from the convergent finite-matrix series on their stated admissible stages. |
| `lem-exponential-integrator-interaction-picture-stability` | Pass. The interaction-picture formulas and the constants (1+κ h) and (1+h(κ+Tκ^2/2)) follow from the phi integral representations and the stated tube/Lipschitz conditions. |
| `lem-exponential-euler-local-defect` | Pass. Variation of constants reduces the defect to the forcing increment; the derivative bound integrates to (K_+Q_1h^2/2). |
| `lem-etd2-local-defect` | Pass. The linear interpolation remainder is bounded by (Q_2h^2), and the predictor-stage discrepancy contributes (LC_Eh^3/2) after integration. |
| `alg-certified-exponential-euler-etd2-step` | Pass. The procedure specifies branches, certified calls, work accounting, and inconclusive paths. Its action-error amplification uses the stated logarithmic-norm and reduced-action bounds. |
| `lem-certified-exponential-step-action-error` | Pass. The action, phi-operator, state-evaluation, arithmetic, termination, and counter bounds follow from the declared service contracts and cited action estimates. |
| `thm-exponential-euler-etd2-global-error-and-action` | Pass. The exact-action estimates follow after transformation by the inverse linear flow; the variable certified action errors are separately propagated with the stated sum bound. |
| `ex-nonnormal-transient-growth-exponential-step` | Pass. The nilpotent decomposition, matrix exponential, nonnormality calculation, transient growth at (t=1), decay, and exact grid reproduction are correct. |
| `ex-phi-functions-at-zero-no-division` | Pass. The scalar solution is (t^2/2); exponential Euler returns zero and ETD2 returns (h^2/2) at (A=0). |
| `ex-diagonal-stiff-diffusion-with-reaction-etd` | Pass. The coordinatewise exact solution and both step formulas are consistent; the stiff coordinate uses (lambda_2h=1) and ((lambda_2+1)h=1.001). |
| `ex-skew-hermitian-imaginary-time-unitary-step` | Pass. Imaginary-time decay, real-time norm preservation, exact grid values, and the finite-run tube used for the certified global bound are justified. |

Proof sections inspected have separated numbered steps and valid final QED tags. No item was changed, so no reflow, precheck, or proof-layout command was required.

## Dependency and source checks

I opened the local suppliers used directly in the reviewed arguments, including:

- Matrix/vector foundations: `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-bounded-linear-operator`, `def-certified-matvec-and-vector-arithmetic`, `def-complete-ordered-field`, `def-euclidean-inner-product`, `def-inner-product-norm`, `def-matrix-product-and-identity-matrix`, `def-operator-norm`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-vector-valued-derivative-and-integral`, `def-phi-functions-by-everywhere-convergent-series`, `def-real-exponential-function-and-e`, `def-complex-exponential`, `def-self-adjoint-and-normal-endomorphism`, and `prop-standard-coordinate-inner-products`.
- Calculus and integration: `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-derivative-of-exponential`, `cor-mean-value-theorem`, `cor-finite-dimensional-normed-spaces-are-banach`, `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-continuous-implies-integrable`, `thm-linearity-of-the-integral`, and `thm-norm-inequality-for-the-vector-valued-integral`.
- Exponential, norms, and error propagation: `lem-exponential-series-of-a-bounded-operator`, `lem-exponential-series-has-infinite-radius`, `lem-exponential-dominates-one-plus-x`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-global-error-from-one-step-defect-and-stability`, `lem-discrete-one-step-error-recurrence-bound`, `lem-relative-compact-closed-sets-have-a-positive-distance-gap`, `thm-metric-continuity-characterisations`, and `thm-heine-borel-rn`.
- Matrix functions and Arnoldi: `thm-complex-numbers-are-the-real-coordinate-plane`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `lem-phi-series-converges-absolutely`, `lem-logarithmic-norm-is-real-and-variational`, `def-logarithmic-norm-for-complex-matrices`, `thm-phi-recurrence-and-augmented-matrix-actions`, `alg-scaled-taylor-exponential-action`, `thm-scaled-taylor-exponential-action-error-and-work`, `def-arnoldi-process`, `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`, `alg-arnoldi-exponential-and-phi-actions`, `thm-arnoldi-exponential-action-error-bound`, `lem-logarithmic-norm-bounds-the-matrix-exponential`, and `lem-matrix-action-defect-variation-of-constants`. I also opened `thm-complex-spectral-theorem-for-normal-endomorphisms`, used by the logarithmic-norm supplier.

The evidence bundle/contract file was treated as a navigation aid only. Its quote payload was too large for a complete displayed contract-by-contract check; verdicts above were based on the current carriers and the cited supplier claims, not on author or contract decisions. I did not recursively audit every prerequisite of each external published supplier.

I checked the relevant primary-source statements against the current claims:

- Al-Mohy and Higham, *Computing the Action of the Matrix Exponential*, §2, equations (2.5) and Theorem 2.1 proof (PDF pp. 3–4), for the phi-series and augmented-exponential identities: [source](https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf).
- Niesen and Wright, *A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators*, §3.1 and §3.2, equations (5), (8), and (9) (PDF pp. 4–6), for the projected phi action and residual discussion: [source](https://arxiv.org/pdf/0907.4631).
- Hochbruck and Ostermann, *Exponential Integrators*, §2.3, Example 2.18, conditions (2.38)–(2.39) (PDF pp. 17–18); setting (c_2=1) gives the ETD2 coefficients used here: [source](https://publikationen.bibliothek.kit.edu/1000024914/1910360).
- Higham, “What Is the Logarithmic Norm?”, Theorem 3 and Theorem 6, formula (4), for the semigroup bound and μ₂ formula: [source](https://nhigham.com/2022/01/18/what-is-the-logarithmic-norm/).

## Edits, remaining defects, and blocker

- Edits: none. No confirmed repairable defect was found.
- Defects not editable: none found.
- Batch-94 blocker: none.
- The live run status separately listed a `3a-split` blocker for batch 70 (`split-70 failed 3x`); it is outside this assignment.
