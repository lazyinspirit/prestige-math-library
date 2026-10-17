---
id: thm-scaled-householder-qr-backward-stability
kind: theorem
title: "The scaled Householder QR implementation is backward stable"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [alg-scaled-householder-reflector-formation-and-application, lem-scaled-householder-step-meets-local-backward-error-premise, thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
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

Let $A\in\mathbb R^{m\times n}$, $m\ge n\ge1$, undergo successful QR steps of [[alg-scaled-householder-reflector-formation-and-application]], with $mu<1$. Use $\kappa_m$ from [[lem-scaled-householder-step-meets-local-backward-error-premise]] and set $\beta_Q=(1+\kappa_m)^n-1$. The exact orthogonal product represented by the stored reflectors has reduced first $n$ columns $\widehat Q$, and the computed triangular block is $\widehat R$. Then
$$A+\Delta A=\widehat Q\widehat R,\qquad \|\Delta A\|_F\le\beta_Q\|A\|_F.$$
If applying the stored reflectors in the same order to a separate vector $b$, by their rounded rank-one updates without column overwrites, succeeds at every update, the resulting full vector $\widehat c$ satisfies
$$\|\widehat c-Q_{\rm full}^Tb\|_2\le\beta_Q\|b\|_2.$$
The bounds are $O(u)$ for fixed dimensions. An explicitly rounded dense product for $Q_{\rm full}$ is not asserted exactly orthogonal.

## Facts & Assumptions

**Given:** Successful no-underflow QR and vector updates in the stated operationwise arithmetic.

[F1] [[lem-scaled-householder-step-meets-local-backward-error-premise]] supplies each exact orthogonal representative and its local matrix and separate-block bound.

[F2] [[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]] supplies exact orthogonal-product and triangular-block conventions.

## Proof

1.1 Embed each active orthogonal representative into the full row dimension and each local perturbation by zeros outside its active block. All active row counts are at most $m$, so [F1] bounds every local error by $\kappa_m$ times the current active-block norm, hence by that times the current full-matrix norm. A completed full step therefore has norm at most $1+\kappa_m$ times the preceding norm. Induction bounds the matrix before step $k$ by $(1+\kappa_m)^k\|A\|_F$. [given, F1, algebra, induction]

2.1 Transport each local error back through the preceding orthogonal factors. Orthogonal multiplication preserves Frobenius norm, as follows by summing the preserved squared column norms. The transported errors sum to $\Delta A$, and exact column overwrites make the final lower block zero. Thus [F2] identifies $A+\Delta A=\widehat Q\widehat R$, with $\|\Delta A\|_F\le\kappa_m\sum_{k=0}^{n-1}(1+\kappa_m)^k\|A\|_F=\beta_Q\|A\|_F$. [F1, F2, step 1.1, algebra]

3.1 For the separate vector, [F1] bounds each update discrepancy by $\kappa_m$ times its current norm. The identical norm induction and orthogonal transport argument bound its total discrepancy from the exact product by $\kappa_m\sum_{k=0}^{n-1}(1+\kappa_m)^k\|b\|_2=\beta_Q\|b\|_2$. Since $\kappa_m=O(u)$ for fixed $m$, the claimed fixed-dimension backward and application bounds follow. [F1, step 1.1, step 2.1, algebra] ∎

