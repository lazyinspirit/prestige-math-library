# Step 3a reader report — batch 23

Run: numerical-analysis-remaining-71-2026-10-17  
Role: reader  
Batch: 23

## Opened inventory

Assigned pages:

- library/numerical-linear-algebra-and-approximation/numerical-algebraic-riccati-equations-and-stabilizing-branches.md
- library/numerical-linear-algebra-and-approximation/numerical-algebraic-riccati-equations-and-stabilizing-branches-examples.md

Assigned items, read in dependency order:

- Level 0: def-lqr-stabilizability-and-detectability; lem-reachable-decomposition-and-state-feedback-pole-placement; alg-finite-budget-stable-block-reordering-for-schur-and-qz.
- Level 1: def-standard-continuous-and-discrete-riccati-equations; lem-powers-of-a-schur-stable-matrix-decay; lem-stabilizability-and-detectability-pbh-necessary-conditions; thm-finite-budget-stable-block-reordering-correctness-and-status.
- Level 2: alg-finite-budget-newton-kleinman-policy-iteration; alg-finite-budget-schur-qz-riccati-candidate-extraction; alg-finite-budget-structure-preserving-doubling-for-dare; thm-pbh-stabilizability-and-detectability-equivalence; thm-care-stabilizing-psd-solution-and-value; thm-dare-stabilizing-psd-solution-and-value; ex-scalar-care-two-stabilizing-branches; ex-singular-a-dare-infinite-pencil-eigenvalue.
- Level 3: lem-riccati-finite-budget-wrappers-return-a-status; lem-sda-doubling-composition-and-psd-invariants; prop-care-hamiltonian-stable-graph; prop-dare-symplectic-pencil-graph-and-stable-spectrum; prop-inexact-newton-kleinman-safeguard; prop-riccati-dense-work-and-acceptance-diagnostics; thm-care-local-residual-ball-certificate; thm-dare-local-residual-ball-certificate; thm-newton-kleinman-exact-global-and-local-quadratic-convergence; ex-unstabilizable-or-undetectable-mode-breaks-stability.
- Level 4: prop-graph-basis-yields-care-or-dare-solution; thm-sda-convergence-and-eventual-quadratic-envelope; prop-dare-stable-deflating-subspace-perturbation-bound; ex-near-boundary-riccati-residual-inconclusive; ex-newton-kleinman-exact-and-inexact-step; ex-sda-psd-blocks-and-symmetry-defect.
- Level 5: prop-riccati-sensitivity-and-graph-subspace-conditioning.

Additional required pages opened:

- library/numerical-linear-algebra-and-approximation/generalized-eigenvalue-pencils-and-qz-methods.md
- library/numerical-linear-algebra-and-approximation/matrix-functions-and-scaling-squaring.md

Direct item dependencies opened for the assigned claims:

- alg-bartels-stewart-sylvester-equation; alg-finite-budget-francis-schur-reduction; alg-finite-budget-qz-iteration-with-deflation-and-residual; cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form; cor-every-complex-polynomial-splits-into-linear-factors; cor-finite-dimensional-normed-spaces-are-banach; cor-operator-norm-submultiplicative-and-t-star-t-identity; def-characteristic-polynomial-of-a-matrix; def-eigenvalue-eigenvector-eigenspace-and-spectrum; def-frobenius-matrix-norm; def-generalized-schur-form; def-hurwitz-matrix-and-continuous-lyapunov-equation; def-linear-combination-and-span; def-linear-isometry-and-orthogonal-or-unitary-operator; def-operator-norm-on-a-finite-dimensional-inner-product-space; def-real-and-complex-schur-forms; def-regular-generalized-eigenvalue-pencil; def-sylvester-operator-and-separation-number; def-verified-linear-residual-certificate-data; lem-block-upper-triangular-pencil-determinant-factorizes; lem-characteristic-polynomial-of-block-triangular-matrix; lem-hurwitz-matrix-exponential-decay-bound; lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval; lem-neumann-inverse-norm-bound; lem-span-is-the-set-of-linear-combinations; prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence; thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique; thm-bartels-stewart-finite-status-and-local-pivot-uniqueness; thm-computed-qz-pair-has-certified-backward-error; thm-continuous-lyapunov-integral-and-positivity; thm-determinant-multiplicative; thm-determinant-of-a-triangular-matrix; thm-existence-and-uniqueness-of-a-maximal-ode-solution; thm-finite-budget-francis-schur-termination-and-status; thm-gram-schmidt-orthonormalisation; thm-non-negative-square-root-exists-and-is-unique; thm-operator-invertible-iff-determinant-nonzero; thm-outward-rounded-operations-are-isotone-and-dag-sound; thm-picard-lindelof-local-existence-and-uniqueness; thm-rank-nullity; thm-root-bound-for-polynomials-over-a-domain; thm-row-rank-equals-column-rank; thm-schur-triangularisation; thm-singular-value-decomposition; thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison; thm-spectrum-is-the-root-set-of-the-characteristic-polynomial; thm-sylvester-unique-solvability-spectral-separation; thm-uniform-linear-residual-solution-enclosure.

Additional point-certificate prerequisites opened for the repaired procedures:

- alg-point-verified-linear-system-certifier; thm-point-verified-linear-system-certifier-soundness; lem-rounded-linear-and-normal-residual-certificates; def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma; def-standard-relative-floating-point-model-and-unit-roundoff; def-intervals-rectangles-and-complex-balls; def-outward-rounded-interval-and-ball-operations; def-dyadic-floating-point-format-and-directed-rounding; alg-dyadic-square-root-bisection; thm-dyadic-square-root-bisection-encloses; lem-product-of-one-plus-deltas-gives-theta-n; thm-cauchy-schwarz-in-an-inner-product-space; thm-geometric-series; thm-binomial-theorem.

For the specialist DARE deflating-subspace perturbation claim, I checked the LAPACK Users' Guide, “Error Bounds for the Generalized Nonsymmetric Eigenproblem,” §4.11.1.3, and “Computing condition numbers for generalized eigenproblems,” §4.11.1.3, equations (4.14), (4.16), and (4.17). Those sections state bounds for regular pairs and define the two ordered generalized-Sylvester separation orientations. The local proposition supplies its own contraction and constants; no LAPACK constants are copied. Sources: https://www.netlib.org/lapack/lug/node102.html and https://www.netlib.org/lapack/lug/node104.html.

## Repairs and evidence

- items/lem-stabilizability-and-detectability-pbh-necessary-conditions.md, Statement: made the field and positive-dimension domain explicit. Its cited definition only defines the continuous/discrete properties for F in {R,C} and n,m,p >= 1; the previous lemma statement left F and the dimensions unconstrained.
- items/alg-finite-budget-schur-qz-riccati-candidate-extraction.md, Definition: specified the graph solve as finite outward matrix/residual enclosures, with a uniform residual certificate, explicit invertibility bound, finite local residual-ball certificate inputs, and inconclusive/rejected branches. The previous “supplied certificate” and “finite verified linear solve” phrases did not state the data or actions that establish them. The inverse bound follows from q < 1 and the Neumann bound; the uniform solution theorem supplies the column error bounds. The local CARE/DARE residual-ball theorems govern acceptance.
- items/alg-finite-budget-newton-kleinman-policy-iteration.md, Definition: defined the exact current policy cost matrix X_j; added a finite point-solve certificate for it; made eta a computable Gershgorin upper bound plus the solution-ball radius; specified the trial inverse and raw residual bounds and Lyapunov witnesses; and explicitly commits the first accepted gain as K_{j+1}. The previous inexact branch used X_j without defining it and had no accepted-gain update.
- items/alg-finite-budget-structure-preserving-doubling-for-dare.md, Definition: tied G_0,H_0 to the standard DARE coefficients, specified exact complete-pivot elimination and the finite point-certified solve loop, separated the DARE residual solve from the recurrence inverse, and specified outputs and failure behavior. The previous input allowed unlinked seed matrices and named an unspecified finite factorization routine.
- items/lem-riccati-finite-budget-wrappers-return-a-status.md: updated the finite call counts and status argument for the explicit point-certificate calls.
- items/prop-riccati-dense-work-and-acceptance-diagnostics.md: made its SDA complexity claim explicitly about exact recurrence steps and separated finite certificate/enclosure work from the dense scalar-core count.
- Regenerated citation and derivation entries in research/numerical-analysis-remaining-71-2026-10-17-batch-23.proof-contracts.json for the nine affected in-batch consumers.

No stale verification.judge record existed on the edited carriers, so none was removed.

## Validation

- Reflow and precheck were run for all six changed item files. The three proof-bearing items passed direct precheck; all three algorithm/definition items reported zero proof phases and zero failures.
- Final batched command: node tools/proof-layout.mjs items/lem-stabilizability-and-detectability-pbh-necessary-conditions.md items/alg-finite-budget-schur-qz-riccati-candidate-extraction.md items/alg-finite-budget-newton-kleinman-policy-iteration.md items/alg-finite-budget-structure-preserving-doubling-for-dare.md items/lem-riccati-finite-budget-wrappers-return-a-status.md items/prop-riccati-dense-work-and-acceptance-diagnostics.md. Result: 6 items, 15 steps, 0 defects.

## Page verdicts and remaining defects

- numerical-algebraic-riccati-equations-and-stabilizing-branches: no remaining page-prose defect. The objective and convention summaries agree with the reviewed CARE/DARE definitions, theorem hypotheses, graph results, and numerical limitations.
- numerical-algebraic-riccati-equations-and-stabilizing-branches-examples: no remaining page-prose defect. Its summary accurately names the six opened examples.
- Defects outside this reader's edit authority: none identified.
- Blocker: none.

Coverage limitation: I opened all assigned pages/items, every direct dependency listed for the assigned items, and the additional supplier arguments needed for the edits above. I did not independently re-audit the full transitive proof closure of every published supplier.
