---
id: alg-safeguarded-levenberg-marquardt
kind: algorithm
title: "Finite-budget Levenberg-Marquardt with a trust-ratio safeguard"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-gauss-newton-qr-svd-step-with-rank-safeguard
  - def-euclidean-inner-product
  - def-matrix-product-and-identity-matrix
  - def-trust-region-quadratic-model-and-ratio
  - lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer
  - thm-nonlinear-least-squares-gradient-and-hessian
  - thm-of-square-roots
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.3, printed pp. 258–261 / PDF pp. 277–280: LM trust-region subproblem, damped system, augmented QR formulation, and scaled trust region."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section Levenberg-Marquardt: damped least-squares step and its scaling."
---

## Definition

This algorithm performs one finite-budget LM trial update. Inputs are $x\in U$, a residual function $r:U\to\mathbb R^m$, its Jacobian $J(x)$, a fixed nonsingular $D\in\mathbb R^{n\times n}$, a floor $\lambda_{\min}>0$, current damping $\lambda\ge\lambda_{\min}$, factors $\gamma>1$, $0<\eta_1<\eta_2<1$, a trust radius $\Delta>0$, and an attempt cap $N\ge1$. A computed run may include a certificate that the exact scalar product $J(x)^Tr(x)$ is zero. Put $\phi(x)=\|r(x)\|_2^2/2$ and $m_0(p)=\|r(x)+J(x)p\|_2^2/2$. The returned step is obtained by minimizing
$$\tfrac12\|r(x)+J(x)p\|_2^2+\tfrac\lambda2\|Dp\|_2^2,$$
which is equivalent to solving
$$(J(x)^TJ(x)+\lambda D^TD)p=-J(x)^Tr(x).$$
For stable linear algebra, form $A_\lambda=[J(x);\sqrt\lambda D]$ and $s_\lambda=[r(x);0]$, then call [[alg-gauss-newton-qr-svd-step-with-rank-safeguard]] in QR mode on $(A_\lambda,s_\lambda)$. The exact augmented matrix has full column rank because $D$ is nonsingular and $\lambda>0$. A computed-candidate status remains a candidate and carries no convergence guarantee.

For attempts $j=1,\ldots,N$, do the following.

1. If the linear solver reports a factorization, rank, or solve failure, return linear-solve-failure with its report. In exact arithmetic, if $J(x)^Tr(x)=0$, return stationary without forming a ratio. In a computed run, return stationary only with the supplied certificate that this exact gradient is zero; a rounded zero without such a certificate returns gradient-unverified and no ratio.
2. For a nonzero trial $p$, compute $\operatorname{pred}=m_0(0)-m_0(p)$. If $\operatorname{pred}\le0$, return nonpositive-predicted-decrease; do not compute a ratio.
3. If $x+p\notin U$ or $\|Dp\|_2>\Delta$, reject the trial, set $\lambda\leftarrow\gamma\lambda$, and continue. If the damping update is not representable in the selected arithmetic, return damping-range-failure.
4. Otherwise compute $\operatorname{ared}=\phi(x)-\phi(x+p)$ and $\rho=\operatorname{ared}/\operatorname{pred}$. If $\rho<\eta_1$, reject and set $\lambda\leftarrow\gamma\lambda$. If this was attempt $N$, return rejection-budget-exhausted; otherwise continue.
5. If $\rho\ge\eta_1$, accept and return $x+p$, $p$, $\rho$, and the next damping. If also $\rho\ge\eta_2$ and $\|Dp\|_2=\Delta$, set $\lambda_{\rm next}=\max\{\lambda_{\min},\lambda/\gamma\}$; in every other accepted case set $\lambda_{\rm next}=\lambda$. A failed function evaluation returns trial-evaluation-failure.

If all $N$ attempts are rejected, return rejection-budget-exhausted. The equality in the boundary test is exact for exact arithmetic and is the equality test on stored values in a computed run. No claim is made that every finite budget succeeds.

## Facts & Assumptions

**Given:** The input objects and admissibility conditions in the Definition.

[F1] [[alg-gauss-newton-qr-svd-step-with-rank-safeguard]]: a successful exact QR step solves the linear least-squares problem; computed candidates and rank-unverified statuses are distinct.

[F2] [[lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer]]: for $g=J^Tr\ne0$, the unique damped step has positive predicted reduction $m_0(0)-m_0(p)=\|Jp\|_2^2/2+\lambda\|Dp\|_2^2$.

[F3] [[thm-nonlinear-least-squares-gradient-and-hessian]]: the exact objective gradient is $J^Tr$.

[F4] [[def-trust-region-quadratic-model-and-ratio]]: the actual-to-predicted reduction ratio is defined only for positive predicted reduction.

[F5] [[thm-of-square-roots]]: every positive real $\lambda$ has a unique positive square root.

[F6] [[def-euclidean-inner-product]]: $\|v\|_2^2=v^Tv$ for the standard dot product.

[F7] [[def-matrix-product-and-identity-matrix]]: a compatible product $AB$ is defined entrywise by finite sums, and $I_n$ is the identity matrix.

## Proof

1.1 The augmented matrix satisfies $A_\lambda^TA_\lambda=J^TJ+\lambda D^TD$ and $A_\lambda^Ts_\lambda=J^Tr$. For every $v\ne0$, $\|A_\lambda v\|_2^2=\|Jv\|_2^2+\lambda\|Dv\|_2^2>0$, so it has full column rank. Therefore the exact QR branch of [F1] gives the unique minimizer of the augmented least-squares problem, which solves the displayed damped system. The computed branch is passed through with its separate status. [given, F1, F5, F6, F7, algebra]

1.2 In exact arithmetic, if $J^Tr=0$, [F3] makes $x$ stationary, and the algorithm returns before forming a ratio. In a computed run, a stationary status is returned only with the stated zero-gradient certificate. Otherwise [F2] gives a nonzero exact step and positive predicted reduction; [F4] therefore permits the ratio only after this check. Each branch then performs exactly the stated accept, reject, or failure return. [given, F2, F3, F4, algebra]

2.1 Every attempt consists of a finite augmented solve followed by finitely many matrix-vector operations, domain/status checks, and one of the listed branches. The attempt index increases by one after every rejection and is bounded by $N$, so execution returns a status after at most $N$ trials. The damping update on an accepted high-ratio boundary step and the unchanged-parameter branch are precisely those in the Definition. [given, F1, step 1.1, step 1.2, construct] ∎
