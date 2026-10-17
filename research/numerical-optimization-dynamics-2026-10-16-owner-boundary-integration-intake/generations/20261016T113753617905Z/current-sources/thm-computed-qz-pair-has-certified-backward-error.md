---
id: thm-computed-qz-pair-has-certified-backward-error
kind: theorem
title: "Certified QZ residuals give a backward error bound for both pencil matrices"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-finite-budget-qz-iteration-with-deflation-and-residual
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
  - lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - lem-qz-two-sided-local-computed-update-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §2.3"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "LAPACK Users' Guide, Error Bounds for the Generalized Nonsymmetric Eigenproblem"
      url: "https://www.netlib.org/lapack/lug/node102.html"
---

## Statement

Suppose [[alg-finite-budget-qz-iteration-with-deflation-and-residual]]
returns exact unitary factor products $Q,Z$, factors $S,T$, and exact local
arithmetic and deflation residuals as specified there. If each local residual
pair has a certified bound, then the accumulated theorem
[[lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil]] gives
perturbations $\Delta_A,\Delta_B$ such that
$$Q^*(A+\Delta_A)Z=S,\qquad Q^*(B+\Delta_B)Z=T,$$
with combined Frobenius error bounded by the sum of the certified local pair
errors and deflation errors. This implication is conditional: it does not
assert such a bound for an arbitrary unspecified rotation implementation. For the specified successful canonical Givens implementation, [[lem-qz-two-sided-local-computed-update-bound]] supplies $\ell_j=\eta$ for actual matrix annihilations and $\ell_j=v$ for external-vector/raw actions. With structural writes included there and only separate tolerance writes $D_{\mathrm{tol},j}$, it gives the concrete bound
$$P(\Delta_A,\Delta_B)\le\sum_j\ell_jP(A_{j-1},B_{j-1})+\sum_j P(D^A_{\mathrm{tol},j},D^B_{\mathrm{tol},j}),$$
where $P(C,D)=(\|C\|_F^2+\|D\|_F^2)^{1/2}$. Tolerance deflations need not be $O(u)$.

Independently, if the exact raw residuals are
$$R_A=Q^*AZ-S,\qquad R_B=Q^*BZ-T,$$
then the choices $\Delta_A=-Q R_A Z^*$ and $\Delta_B=-Q R_B Z^*$ satisfy the
same equations and
$$\sqrt{\|\Delta_A\|_F^2+\|\Delta_B\|_F^2} =\sqrt{\|R_A\|_F^2+\|R_B\|_F^2}.$$
Certified upper bounds on the two residual norms therefore give an
a-posteriori backward-error certificate for the pair.

## Facts & Assumptions

**Given:** A run with exact unitary factor records, computed factors $(S,T)$,
local arithmetic/deflation residuals, and any claimed certified residual norm
upper bounds.

[F1] [[prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence]]:
the completed run has the stated accumulated perturbation representation
whenever all local residual certificates are available.

[F2] [[lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil]]: the
global pair perturbation is bounded by the sum of the local pair and deflation
norms.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]:
left or right unitary multiplication preserves the Frobenius norm.

[F4] [[lem-qz-two-sided-local-computed-update-bound]] proves the actual common
real/complex Givens pair update and target-write coefficients, and a stored
factor-action residual evaluation with explicit norm/controller allowances.

[A1] For the generic implication, local residual certificates remain hypotheses.
The specified canonical implementation instantiates them by [F4] whenever its
successful-operation hypotheses hold; alternative implementations require their
own certificates.

## Proof

1.1 Under [A1], apply [F1] and [F2] to the finite list of left/right QZ updates, keeping each explicit deflation as its own local perturbation. This gives $Q^*(A+\Delta_A)Z=S$ and $Q^*(B+\Delta_B)Z=T$ with the asserted sum of local pair error bounds. This step claims no size bound beyond the supplied certificates. [given, F1, F2, A1]

1.2 From the definitions of $R_A,R_B$, set $\Delta_A=-QR_AZ^*$ and $\Delta_B=-QR_BZ^*$. Exact unitarity gives $Q^*\Delta_A Z=-R_A$ and $Q^*\Delta_B Z=-R_B$, so adding the residuals proves both displayed backward equations. By [F3], $\|\Delta_A\|_F=\|R_A\|_F$ and $\|\Delta_B\|_F=\|R_B\|_F$; squaring and adding proves the exact pair equality. [given, F3, algebra, construct]

2.1 For the specified implementation, [F4] gives $P(E_j^A,E_j^B)\le\ell_jP(A_{j-1},B_{j-1})$. Put each pure tolerance deflation at its own identity stage, and pull back any post-action write before using [F2]. Structural writes are already counted in $E_j$, so summing proves the concrete displayed bound without double counting. [F2, F4, step 1.1, algebra]

3.1 Under the independent residual route's successful-operation hypotheses, [F4] bounds each exact residual column by its computed diagnostic norm plus the propagated factor, stored-input matvec and subtraction allowances. Summing these column bounds gives certified residual upper bounds $b_A,b_B$, hence step 1.2 gives pair error at most $\sqrt{b_A^2+b_B^2}$ (or conservatively $b_A+b_B$). If that route fails, no certificate is claimed from its diagnostic; the local-accumulation route remains available on its own hypotheses. [F4, step 1.2, algebra] ∎

