---
id: thm-computed-full-rank-least-squares-backward-stability
kind: theorem
title: "Computed reduced QR least squares is backward stable for full column rank"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-scaled-householder-qr-backward-stability
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
  - thm-floating-point-dot-product-componentwise-and-normwise-error-bounds
  - thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number
  - def-normwise-and-componentwise-backward-error-for-linear-systems
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pending
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Fundamentals of Numerical Computation, Householder triangularization"
      url: https://fncbook.com/house/
    - title: "Fundamentals of Numerical Computation, QR factorization and least squares"
      url: https://fncbook.com/qr/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Statement

Let $A\in\mathbb R^{m\times n}$, $m\ge n\ge1$, have full column rank. Suppose successful computed reduced QR gives exactly orthonormal $\widehat Q$ and triangular $\widehat R$ with
$$A+\Delta_Q=\widehat Q\widehat R,\qquad \|\Delta_Q\|_F\le\beta_Q\|A\|_F,\qquad \beta_Q=(1+3\gamma_m)^n-1.$$
Compute $\widehat y=\operatorname{fl}(\widehat Q^Tb)$ by rounded dot products and solve $\widehat R\widehat x=\widehat y$ by successful rounded back substitution. If $\gamma_m<1$ and $\gamma_{n+3}<1/8$, then there are $\delta b$ and $\Delta R$ such that
$$(\widehat R+\Delta R)\widehat x=\widehat Q^T(b+\delta b),\quad \|\delta b\|_2\le\sqrt n\,\gamma_m\|b\|_2,\quad \|\Delta R\|_F\le20\gamma_{n+3}\|\widehat R\|_F.$$
If $\widehat R+\Delta R$ is nonsingular, $\widehat x$ is the unique least-squares solution for $\widetilde A=\widehat Q(\widehat R+\Delta R)$ and $\widetilde b=b+\delta b$. The relative matrix perturbation is at most $\beta_Q+20\gamma_{n+3}(1+\beta_Q)$, and the right-hand perturbation is at most $\sqrt n\,\gamma_m$. This is conditional on the local QR premise, successful solve, and nonsingularity check.
## Facts & Assumptions

**Given:** full column rank, the conditional computed QR bound, the relative model, and successful back substitution.

[F1] [[thm-scaled-householder-qr-backward-stability]]: under the local reflector premise, A+Delta_Q=Q-hat R-hat with its Frobenius bound.

[F2] [[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]: a successful length-m dot product has error at most gamma_m sum_i|x_i y_i|.

[F3] [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]: exact back substitution is the descending triangular row recurrence when the diagonal is nonzero.

[F4] [[thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number]]: exact full-rank reduced QR gives the unique least-squares minimizer from R x=Q^T b.

[F5] [[def-normwise-and-componentwise-backward-error-for-linear-systems]]: normwise backward error measures relative perturbations of the matrix and right-hand side.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|x^Ty|\le\|x\|_2\|y\|_2$ for finite real vectors.

## Proof

1.1 For each column of Q-hat, [F2] bounds the computed inner product error by gamma_m sum_i|q_ij b_i|<=gamma_m||b||_2, by [F6], because that column has unit norm. Combining the n coordinate bounds gives ||y-hat-Q-hat^T b||_2<=sqrt(n)gamma_m||b||_2. Set delta b=Q-hat(y-hat-Q-hat^T b); orthonormality gives Q-hat^T delta b=y-hat-Q-hat^T b and preserves its norm. [given, F2, F6, algebra]

1.2 The exact triangular-substitution supplier [F3] gives the row recurrence but not a floating-point backward-error estimate. To continue, one must prove that the actual rounded products, row sums, subtraction, and division produce a residual r=R-hat x-hat-y-hat with ||r||_2<=20gamma_(n+3)||R-hat||_F||x-hat||_2. No such estimate has been proved here, so DeltaR cannot yet be constructed. [given, F2, F3]

1.3 If the missing estimate in step 1.2 were established, the rank-one matrix DeltaR=-r x-hat^T/||x-hat||_2^2 for nonzero x-hat would satisfy DeltaR x-hat=-r and the claimed Frobenius bound. The zero-solution case also requires proof that successful rounded substitution forces y-hat=0. These solve facts remain unresolved. [step 1.2, algebra]

1.4 Conditional on those two solve facts, step 1.1 would give Q-hat^T(b+delta b)=y-hat and step 1.3 would give (R-hat+DeltaR)x-hat=y-hat. Exact reduced QR would then identify x-hat as the perturbed least-squares solution via [F4]; the normwise perturbation estimate would follow from A-tilde-A=Delta_Q+Q-hat DeltaR and [F5]. This conditional implication does not close the theorem. [step 1.1, step 1.3, F1, F4, F5]

## Owner escalation

The rounded triangular-solve backward estimate and its zero-solution branch are unresolved. The existing supplier [F3] proves exact triangular substitution only. The theorem statement is retained as the assigned target, but the item is not ready.

## Readiness

The transfer argument depends on the escalated local Householder lemma, and the rounded triangular-solve row estimate in step 1.2 needs independent reconciliation. This item is escalated.
