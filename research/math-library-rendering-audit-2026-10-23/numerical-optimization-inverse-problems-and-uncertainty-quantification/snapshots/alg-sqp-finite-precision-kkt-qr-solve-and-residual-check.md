---
id: alg-sqp-finite-precision-kkt-qr-solve-and-residual-check
kind: algorithm
title: "Finite-precision reduced-QR KKT solve with certified residual status"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-sqp-linearized-quadratic-subproblem
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
  - alg-scaled-householder-reflector-formation-and-application
  - def-forward-and-back-substitution-for-triangular-systems
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - thm-computed-full-rank-least-squares-backward-stability
  - lem-rounded-linear-and-normal-residual-certificates
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.1, SQP KKT systems, printed pp. 528–530 / PDF pp. 546–548."
---

## Definition

Let $K=\begin{bmatrix}H&A^T\\A&0\end{bmatrix}\in\mathbb R^{N\times N}$
be an active KKT matrix, where $A$ has full row rank and $H$ is positive
definite on $\ker A$, and let $b\in\mathbb R^N$. By
[[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]], $K$ is
nonsingular. Also supply a terminating exact-storage routine which, for each requested real entry, either returns that same value with an exact representability certificate in the selected floating-point set or returns `unavailable`. Before QR, invoke this routine on every entry of the intended $K$ and $b$, in increasing row and column order for $K$ and increasing index for $b$. If any call is unavailable or its equality/representability certificate is not verified, return `numerical-failure` without a solve certificate. Otherwise use these unchanged stored values, still denoted $K,b$, for both the solve and residual evaluation. No rounded conversion is performed: every successful residual certificate below concerns the original intended data. Assume $Nu<1$, $\gamma_{N+3}<1/8$, and the successful-operation hypotheses of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].

Set $R^{(0)}=K$. For $k=0,\ldots,N-1$, call [[alg-scaled-householder-reflector-formation-and-application]] on the active column $R^{(k)}_{k:N-1,k}$ and trailing block $R^{(k)}_{k:N-1,k+1:N}$. Set $R^{(k+1)}$ equal to $R^{(k)}$ with the returned active block written into those rows and columns, leaving earlier rows and columns unchanged, and store the returned reflector. If a call fails, return `numerical-failure`. After the loop set $\widehat R=R^{(N)}$. Call the stored reflectors on $b$ in the same order, on the matching active row slices and without column overwrites; call the result $\widehat y$. Solve $\widehat R\widehat z=\widehat y$ by descending substitution, for $i=N-1,\ldots,0$: compute the sequential rounded dot $s_i=\operatorname{fl}(\sum_{j=i+1}^{N-1}\widehat R_{ij}\widehat z_j)$, then $t_i=\operatorname{fl}(\widehat y_i-s_i)$ and $\widehat z_i=\operatorname{fl}(t_i/\widehat R_{ii})$, following [[def-forward-and-back-substitution-for-triangular-systems]]. If reflector application or substitution fails, return `numerical-failure`. The perturbation bounds for these procedures are supplied by [[thm-computed-full-rank-least-squares-backward-stability]].

For a returned stored vector $\widehat z$, compute in the specified order
$\widehat v=\operatorname{fl}(K\widehat z)$ and
$\widehat r=\operatorname{fl}(\widehat v-b)$. Use
[[lem-rounded-linear-and-normal-residual-certificates]] with $A=K$,
$x=\widehat z$, and $y=b$ to compute
$$g_N=\frac{1+6u}{1-(N-1)u}-1,\qquad W=g_N\|K\|_F\|\widehat z\|_2+u(\|\widehat v\|_2+\|b\|_2),$$
where the product and subtraction use successful sequential dot products
and $(N-1)u<1$. Let $\kappa_N$ be the local coefficient specified by
[[lem-scaled-householder-step-meets-local-backward-error-premise]], and set
$$\beta_Q=(1+\kappa_N)^N-1,\qquad \beta_b=\beta_Q,\qquad \beta_K=\beta_Q+\gamma_{N+3}(1+\beta_Q),$$
where $\gamma_j=ju/(1-ju)$ is defined by the operationwise model. The QR
theorem supplies an exactly orthonormal $\widehat Q$, a triangular
$\widehat R$, and perturbations satisfying
$$K+\Delta_Q=\widehat Q\widehat R,\quad (\widehat R+\Delta_R)\widehat z=\widehat Q^T(b+\delta b),$$
with $\|\Delta_Q\|_F\le\beta_Q\|K\|_F$,
$\|\Delta_R\|_F\le\gamma_{N+3}\|\widehat R\|_F$, and
$\|\delta b\|_2\le\beta_b\|b\|_2$. Define
$\Delta_K=\Delta_Q+\widehat Q\Delta_R$. Return
$$\eta=\min\left\{\|\widehat r\|_2+W, \beta_K\|K\|_F\|\widehat z\|_2+\beta_b\|b\|_2\right\}$$
using exact norms or certified upward bounds. If residual evaluation or a
certified bound fails, return `numerical-failure`. A successful return
certifies a residual upper bound, not a small residual or an accurate exact
solution by itself.

## Facts & Assumptions

**Given:** A nonsingular square KKT matrix, right-hand side, floating-point model hypotheses, and successful QR and triangular solves.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] states the operationwise rounding hypotheses and successful-operation convention.

[F2] [[thm-computed-full-rank-least-squares-backward-stability]] supplies $K+\Delta_Q=\widehat Q\widehat R$ with exactly orthonormal $\widehat Q$, the rounded triangular solve $(\widehat R+\Delta_R)\widehat z=\widehat Q^T(b+\delta b)$, and the stated perturbation bounds.

[F3] [[lem-rounded-linear-and-normal-residual-certificates]]: for the specified rounded product and subtraction, $\|\widehat r-(K\widehat z-b)\|_2\le W$.

[F4] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]] makes the input KKT matrix nonsingular under the stated rank and curvature hypotheses.

[F5] [[lem-scaled-householder-step-meets-local-backward-error-premise]] defines the local coefficient $\kappa_N$ used in the QR backward bound.

[F6] [[alg-scaled-householder-reflector-formation-and-application]] defines the active-column QR step and its stored-reflector application to a separate block.

[F7] [[def-forward-and-back-substitution-for-triangular-systems]] defines the descending row recursion for the upper-triangular solve.

[A1] The terminating exact-storage admission has succeeded and its stored $K,b$ equal the intended inputs entrywise. Also $N\ge1$, $Nu<1$, $\gamma_{N+3}<1/8$, $(N-1)u<1$, all factorization and residual operations succeed under the operationwise model, and any norm upper bounds used in $\eta$ are certified without overflow.

## Proof

1.1 The admission in [A1] supplies stored $K,b$ equal to the intended data; [F6] and [F7] specify the scaled QR and descending substitution used by the procedure. The factorization and transformed right-hand side are therefore admissible stored operands. By [F4], $K$ is nonsingular and, being square, has full column rank, so the perturbation equations of [F2] apply under [A1]. Their additional perturbed-least-squares uniqueness condition is not needed for this residual calculation. Multiplying the triangular equation by $\widehat Q$ and using $\widehat Q\widehat Q^T=I$ gives $\widehat Q(\widehat R+\Delta_R)\widehat z=b+\delta b$. Substituting $\widehat Q\widehat R=K+\Delta_Q$ yields $(K+\Delta_K)\widehat z=b+\delta b$ for $\Delta_K=\Delta_Q+\widehat Q\Delta_R$. Orthogonality gives $\|\widehat Q\Delta_R\|_F=\|\Delta_R\|_F$, and $\|\widehat R\|_F=\|K+\Delta_Q\|_F\le(1+\beta_Q)\|K\|_F$. Hence $$\|\Delta_K\|_F\le \bigl(\beta_Q+\gamma_{N+3}(1+\beta_Q)\bigr)\|K\|_F =\beta_K\|K\|_F.$$ Rearrangement now gives $$\|K\widehat z-b\|_2\le \|\delta b\|_2+\|\Delta_K\|_F\|\widehat z\|_2 \le\beta_b\|b\|_2+\beta_K\|K\|_F\|\widehat z\|_2.$$ [given, A1, F1, F2, F4, F5, F6, F7, algebra]

2.1 By [F3] and the triangle inequality, $$\|K\widehat z-b\|_2\le\|\widehat r\|_2+W.$$ Both entries in the returned minimum are upper bounds, so their minimum is also an upper bound. Failure of any required operation exits without a certificate. [given, A1, F1, F3, step 1.1, algebra] ∎
