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
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-matrix-product-and-identity-matrix
  - def-trust-region-quadratic-model-and-ratio
  - lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer
  - thm-chain-rule-for-total-derivatives
  - thm-of-square-roots
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
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

This algorithm performs one finite-budget LM trial update. Inputs are $x\in U$, a $C^1$ residual function $r:U\to\mathbb R^m$ on open $U$ with $m,n\ge1$ and $J=Dr$, the exact values $r(x)$ and $J(x)$, a fixed nonsingular $D\in\mathbb R^{n\times n}$, an arithmetic mode (exact or computed), a floor $\lambda_{\min}>0$, current damping $\lambda\ge\lambda_{\min}$, factors $\gamma>1$, $0<\eta_1<\eta_2<1$, a trust radius $\Delta>0$, and an attempt cap $N\ge1$. In computed mode the input values are finite stored numbers treated as the exact data for this update; only arithmetic performed below is rounded. A computed run may include a certificate that the exact scalar product $J(x)^Tr(x)$ is zero. Put $\phi(x)=\|r(x)\|_2^2/2$ and $m_0(p)=\|r(x)+J(x)p\|_2^2/2$. In exact mode the step is the unique minimizer of
$$\tfrac12\|r(x)+J(x)p\|_2^2+\tfrac\lambda2\|Dp\|_2^2,$$
which is equivalent to solving
$$(J(x)^TJ(x)+\lambda D^TD)p=-J(x)^Tr(x).$$
In computed mode the returned vector is only a candidate for this same subproblem; no exact minimizer claim is made.


In computed mode use [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. Evaluate every dot product by initializing $s=0$ and, for indices in increasing order, computing $u=\operatorname{fl}(a_i b_i)$ followed by $s=\operatorname{fl}(s+u)$. Matrix-vector products and squared norms use this schedule row by row and coordinate by coordinate. Each other scalar arithmetic operation uses $\operatorname{fl}$, with copies and sign changes exact; the first failed operation returns the status assigned to its stage. Function evaluation returns either a finite stored residual vector or failure.

For attempts $j=1,\ldots,N$, do the following with the current damping. After a damping change, construct a new augmented matrix and obtain a report for that actual matrix; do not reuse an earlier damping value's factorization or report.

1. In exact arithmetic, if $J(x)^Tr(x)=0$, return stationary before calling the linear solver. In a computed run, evaluate $J(x)^Tr(x)$ by the stated dot schedule and return stationary before the solve only with the supplied certificate that this exact gradient is zero; if evaluating the product fails, return gradient-evaluation-failure; if the computed product is a rounded zero without that certificate, return gradient-unverified and do not form a ratio. Otherwise perform the augmented construction and linear solve afresh inside this attempt at its current damping: Form $A_\lambda=[J(x);\sqrt\lambda D]$ and $s_\lambda=[r(x);0]$, then call [[alg-gauss-newton-qr-svd-step-with-rank-safeguard]] in QR mode on $(A_\lambda,s_\lambda)$. Exact mode uses the exact positive square root and requires a supplied exact reduced factorization of $A_\lambda$ for each call; absence of that factorization returns linear-solve-failure. This matrix has full column rank because $D$ is nonsingular and $\lambda>0$. In computed mode, copy the stored $J(x)$ and $r(x)$ into the top blocks, compute $t=\operatorname{fl}(\sqrt\lambda)$, then fill the bottom block entries $\operatorname{fl}(tD_{ij})$ in increasing row and column order and fill the appended residual entries with exact zeros. Any first arithmetic or range failure in this construction returns linear-solve-failure with its stage and indices. The call receives a computed QR report for this actual stored $A_\lambda$. A computed-candidate is usable only when that report includes the low-level procedure's independently verified full-rank certificate $s_\lambda>0$ for the actual stored matrix, namely $\|A_\lambda v\|_2\ge s_\lambda\|v\|_2$ for every $v\in\mathbb R^n$. Pass this bound as the computed report's certificate field; it is not inferred from a nonzero computed diagonal or from positive definiteness of the ideal exact system alone. A rank-unverified report and every other status besides exact-step in exact mode or computed-candidate in computed mode are unusable and return linear-solve-failure with the report. A computed-candidate remains a candidate and carries no convergence guarantee. If the solver status is not exact-step in exact mode or computed-candidate in computed mode, return linear-solve-failure with its report; in particular, rank-unverified is a failure, not a usable trial.
2. If exact mode returns $p=0$ after the nonzero-gradient check, return linear-solve-failure with the inconsistent exact solve report. If computed mode returns $p=0$, return zero-step-unverified and do not compute a ratio. For every remaining candidate $p$ (the zero candidates have already returned a status), compute $\operatorname{pred}=m_0(0)-m_0(p)$. If this computation fails, return model-evaluation-failure; if $\operatorname{pred}\le0$, return nonpositive-predicted-decrease. In either case do not compute a ratio.
3. If computing $x+p$ or $Dp$ fails in the selected arithmetic, return trial-evaluation-failure. If $x+p\notin U$ or $\|Dp\|_2>\Delta$, reject the trial and compute the damping update $\lambda^+=\gamma\lambda$ in the selected arithmetic. If that update fails, is nonfinite, or is outside the representable range, return damping-range-failure with the current $x,\lambda$ and the trial report. Otherwise set $\lambda\leftarrow\lambda^+$ and continue.
4. Otherwise evaluate $r(x+p)$ and compute $\operatorname{ared}=\phi(x)-\phi(x+p)$ and $\rho=\operatorname{ared}/\operatorname{pred}$. A failed trial evaluation or nonfinite computed result returns trial-evaluation-failure. If $\rho<\eta_1$, reject and compute $\lambda^+=\gamma\lambda$ in the selected arithmetic. If that damping update fails, is nonfinite, or is outside the representable range, return damping-range-failure with the current $x,\lambda$ and the trial report. Otherwise set $\lambda\leftarrow\lambda^+$. If this was attempt $N$, return rejection-budget-exhausted; otherwise continue.
5. If $\rho\ge\eta_1$, first determine the next damping. If also $\rho\ge\eta_2$ and $\|Dp\|_2=\Delta$, compute $q=\lambda/\gamma$ in exact mode and $q=\operatorname{fl}(\lambda/\gamma)$ in computed mode. If this division fails, has a nonfinite or nonpositive result, or is outside the representable range, return damping-range-failure with the current $x,\lambda$ and the trial report, without accepting that trial. Otherwise set $\lambda_{\rm next}=\max\{\lambda_{\min},q\}$. In every other accepted case set $\lambda_{\rm next}=\lambda$. Only after the next damping is available, accept and return $x+p$, $p$, $\rho$, and $\lambda_{\rm next}$.

If all $N$ attempts are rejected, return rejection-budget-exhausted. The equality in the boundary test is exact for exact arithmetic and is the equality test on stored values in a computed run. No claim is made that every finite budget succeeds.

## Facts & Assumptions

**Given:** The input objects and admissibility conditions in the Definition.

[F1] [[alg-gauss-newton-qr-svd-step-with-rank-safeguard]]: an exact QR step solves the linear least-squares problem; a computed-candidate requires a verified full-rank certificate, while rank-unverified is a separate status.

[F2] [[lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer]]: for $g=J^Tr\ne0$, the unique damped step has positive predicted reduction $m_0(0)-m_0(p)=\|Jp\|_2^2/2+\lambda\|Dp\|_2^2$.

[F3] [[def-c-one-map-and-local-inverse]]: a $C^1$ residual is totally differentiable at $x$; [[def-jacobian-matrix-and-gradient]] fixes the Jacobian and gradient coordinates; [[thm-chain-rule-for-total-derivatives]] differentiates the objective composition.

[F4] [[def-trust-region-quadratic-model-and-ratio]]: the actual-to-predicted reduction ratio is defined only for positive predicted reduction.

[F5] [[thm-of-square-roots]]: every positive real $\lambda$ has a unique positive square root.

[F6] [[def-euclidean-inner-product]]: $\|v\|_2^2=v^Tv$ for the standard dot product.

[F7] [[def-matrix-product-and-identity-matrix]]: a compatible product $AB$ is defined entrywise by finite sums, and $I_n$ is the identity matrix.

[F8] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: computed scalar operations use the stated rounding rule and return a range failure when its input conditions are not met.

## Proof

1.1 In exact mode, the augmented matrix satisfies $A_\lambda^TA_\lambda=J^TJ+\lambda D^TD$ and $A_\lambda^Ts_\lambda=J^Tr$. For every $v\ne0$, $\|A_\lambda v\|_2^2=\|Jv\|_2^2+\lambda\|Dv\|_2^2>0$, so it has full column rank. The supplied exact QR factorization and [F1] give the unique minimizer of the augmented least-squares problem, which solves the displayed damped system. In computed mode, only a computed-candidate accompanied by the specified certificate is eligible; rank-unverified and all other non-candidate statuses return linear-solve-failure. The computed report is not used to assert the exact matrix identities or an exact minimizer. Construction and solving occur within each attempt at its current damping, and an earlier damping value's augmented factorization or report is not substituted. [given, F1, F5, F6, F7, F8, algebra]

1.2 Let $\Psi(y)=\|y\|_2^2/2$. For every $y,z$, $\Psi(y+z)-\Psi(y)-\langle y,z\rangle=\|z\|_2^2/2=o(\|z\|_2)$, so $D\Psi(y)[z]=\langle y,z\rangle$. Since $r$ is $C^1$ and $J=Dr$, the chain rule [F3] gives $D\phi(x)[h]=\langle r(x),J(x)h\rangle=(J(x)^Tr(x))^Th$; thus $J^Tr$ is the exact objective gradient. In exact arithmetic, if $J^Tr=0$, $x$ is stationary, and the algorithm returns before the solve or any ratio. In a computed run the same return is made only with the stated exact-zero certificate; a rounded zero without it returns gradient-unverified. For an exact nonstationary step, [F2] gives $p\ne0$ and positive predicted reduction. The computed path does not use [F2] to infer either property: its zero candidate returns zero-step-unverified, and its nonzero candidate reaches the ratio only after the explicit positive-prediction check. [F2, F3, F4, given, algebra]

2.1 Every attempt consists of finitely many gradient/status checks, a finite augmented construction and solve at the current damping, finitely many model and trial evaluations, and one of the listed branches. Any reported failure returns immediately. The attempt index increases by one after every rejection and is bounded by $N$, so execution returns a status after at most $N$ trials. Every attempted damping multiplication or division either produces the stated next damping or returns damping-range-failure, and a trial is accepted only after its next damping is available. In exact arithmetic the high-ratio boundary update is still $\max\{\lambda_{\min},\lambda/\gamma\}$; the unchanged-parameter branch is retained. [given, F1, step 1.1, step 1.2, construct] ∎
