---
id: thm-computed-full-rank-least-squares-backward-stability
kind: theorem
title: "Computed reduced QR least squares is backward stable for full column rank"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-scaled-householder-qr-backward-stability, lem-rounded-triangular-substitution-componentwise-backward-error, thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number, lem-product-of-one-plus-deltas-gives-theta-n]
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

Let $A\in\mathbb R^{m\times n}$, $m\ge n\ge1$, have full column rank. Successful scaled Householder QR gives the exactly orthonormal reduced representative $\widehat Q$ and computed triangular $\widehat R$ with
$$A+\Delta_Q=\widehat Q\widehat R,\qquad \|\Delta_Q\|_F\le\beta_Q\|A\|_F,\qquad \beta_Q=(1+\kappa_m)^n-1,$$
where $\kappa_m$ is the proved local-step coefficient. Apply the stored reflectors to $b$ by rounded rank-one updates and let $\widehat y$ be the first $n$ coordinates. Set $\beta_b=\beta_Q$. Alternatively, if an explicitly supplied exactly orthonormal $\widehat Q$ has entries admissible as arithmetic inputs and $\widehat y=\operatorname{fl}(\widehat Q^Tb)$ uses sequential rounded dots, set $\beta_b=\sqrt n\,\gamma_m$. Solve $\widehat R\widehat x=\widehat y$ by successful rounded back substitution. Suppose $mu<1$ and $\gamma_{n+3}<1/8$. There exist $\delta b$ and upper triangular $\Delta R$ with
$$(\widehat R+\Delta R)\widehat x=\widehat Q^T(b+\delta b),\qquad \|\delta b\|_2\le\beta_b\|b\|_2,\qquad \|\Delta R\|_F\le\gamma_{n+3}\|\widehat R\|_F.$$
If $\widehat R+\Delta R$ is nonsingular, $\widehat x$ is the unique least-squares solution for $\widetilde A=\widehat Q(\widehat R+\Delta R)$ and $\widetilde b=b+\delta b$. The relative matrix perturbation is at most $\beta_Q+\gamma_{n+3}(1+\beta_Q)$; the right-hand perturbation is at most $\beta_b$. Consequently the formerly stated weaker factor $20\gamma_{n+3}$ bound also holds. Success and nonsingularity are explicit hypotheses.

## Facts & Assumptions

**Given:** The stated successful QR, right-hand-side evaluation, and triangular solve; all nonzero exact intermediates are normal.

[F1] [[thm-scaled-householder-qr-backward-stability]] supplies the proved QR bound and the stored-reflector application bound.

[F2] [[lem-rounded-triangular-substitution-componentwise-backward-error]] supplies the rounded triangular matrix perturbation, including the zero-solution branch.

[F3] [[thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number]] identifies exact full-rank reduced-QR least squares.

[F4] [[lem-product-of-one-plus-deltas-gives-theta-n]] bounds the coefficient errors of sequential real dots.

## Proof

1.1 For stored-reflector evaluation, [F1] bounds $\|\widehat y-\widehat Q^Tb\|_2$ by $\beta_Q\|b\|_2$. In the explicit admissible-input alternative, dot expansion by [F4] gives coordinate errors at most $\gamma_m\sum_i|\widehat q_{ij}b_i|\le\gamma_m\|b\|_2$ by Cauchy-Schwarz and unit column norms; combining coordinates gives $\sqrt n\gamma_m\|b\|_2$. In either case put $z=\widehat y-\widehat Q^Tb$ and $\delta b=\widehat Qz$. Exact orthonormality gives $\widehat Q^T\delta b=z$ and $\|\delta b\|_2=\|z\|_2$. [given, F1, F4, algebra, construct]

1.2 Apply [F2] to the actual rounded back substitution. It supplies upper triangular $\Delta R$ with $(\widehat R+\Delta R)\widehat x=\widehat y$ and the displayed Frobenius estimate. This holds also when $\widehat x=0$, since the same row identities force $\widehat y=0$. Combined with step 1.1 this proves the perturbed normal-coordinate equation. [F2, step 1.1, algebra]

2.1 Under the stated nonsingularity hypothesis, $\widetilde A=\widehat Q(\widehat R+\Delta R)$ has full column rank, and [F3] identifies $\widehat x$ as its unique least-squares minimizer for $b+\delta b$. Finally $\|\widehat R\|_F=\|A+\Delta_Q\|_F\le(1+\beta_Q)\|A\|_F$, and $\widetilde A-A=\Delta_Q+\widehat Q\Delta R$ gives the stated relative matrix bound. Replacing $\gamma_{n+3}$ by $20\gamma_{n+3}$ weakens it. [F1, F3, step 1.1, step 1.2, algebra] ∎
