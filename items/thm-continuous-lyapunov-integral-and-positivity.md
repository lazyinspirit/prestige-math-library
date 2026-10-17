---
id: thm-continuous-lyapunov-integral-and-positivity
kind: theorem
title: "The Hurwitz Lyapunov integral is the unique solution and has the stated positivity"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hurwitz-matrix-and-continuous-lyapunov-equation
  - lem-hurwitz-matrix-exponential-decay-bound
  - lem-exponential-series-of-a-bounded-operator
  - thm-non-negative-square-root-exists-and-is-unique
  - def-frobenius-matrix-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

Let $A\in F^{n\times n}$ be Hurwitz and let $Q=Q^*\in F^{n\times n}$. Then the improper matrix integral

$$
X=\int_0^\infty e^{tA}Qe^{tA^*}\,dt
$$

converges and is the unique solution of $AX+XA^*+Q=0$. If $Q\succeq0$, then $X\succeq0$. If $Q\succ0$, then $X\succ0$. For $Q\succeq0$, $X\succ0$ if and only if there is no nonzero $v$ for which $e^{tA^*}v\in\ker Q^{1/2}$ for every $t\ge0$.

## Facts & Assumptions

**Given:** A Hurwitz matrix $A$, a self-adjoint matrix $Q$, and the definitions of $Q\succeq0$ and $Q\succ0$ from [[def-hurwitz-matrix-and-continuous-lyapunov-equation]].

[F1] [[lem-hurwitz-matrix-exponential-decay-bound]]: $\|e^{tA}\|_2\le e^{-\alpha t}\sum_{k=0}^{n-1}(t\|N\|_2)^k/k!$ for some $\alpha>0$.

[F2] [[lem-exponential-series-of-a-bounded-operator]]: $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$, and the same formula applies to $A^*$.

[F3] [[thm-non-negative-square-root-exists-and-is-unique]]: A non-negative finite-dimensional self-adjoint operator has a unique non-negative square root $Q^{1/2}$ with $(Q^{1/2})^2=Q$.

[F4] [[def-frobenius-matrix-norm]]: $\|M\|_F^2$ is the sum of squared absolute values of the entries of $M$.

[F5] [[thm-singular-value-decomposition]]: A finite-dimensional matrix has a singular value decomposition, and its adjoint has the same positive singular values.

[F6] [[thm-operator-norm-is-the-largest-singular-value]]: The operator norm of a finite-dimensional map is its largest singular value.

## Proof


1.1 Put $M(t)=e^{tA}$. For finite matrices $P,R$, $\|PR\|_F^2=\sum_j\|PR e_j\|_2^2\le\|P\|_2^2\sum_j\|R e_j\|_2^2=\|P\|_2^2\|R\|_F^2$ by the operator-norm definition and [F4]. The entry formula in [F4] gives $\|R^*\|_F=\|R\|_F$. The SVD in [F5] gives the same positive singular values for $P$ and $P^*$; [F6] therefore gives $\|P^*\|_2=\|P\|_2$. Applying the left-multiplication estimate to adjoints yields $\|RP\|_F\le\|R\|_F\|P\|_2$. Applying these inequalities successively gives $\|M(t)QM(t)^*\|_F\le\|M(t)\|_2^2\|Q\|_F$. [F4, F5, F6, algebra]

1.2 For $X_T=\int_0^T M(t)QM(t)^*\,dt$, [F2] and the product rule give $\frac{d}{dt}(M(t)QM(t)^*)=AM(t)QM(t)^*+M(t)QM(t)^*A^*$. Integrating this identity yields $AX_T+X_TA^*=M(T)QM(T)^*-Q$. [F2, algebra]

2.1 By [F1], the right side in step 1.1 is bounded by a finite sum of polynomial multiples of $e^{-2\alpha t}$. Each such term is integrable on $[0,\infty)$ by repeated integration by parts. Every entry of the integrand is therefore absolutely integrable; define $X$ by the finitely many scalar improper entry integrals. The entrywise tails tend to zero, so $X_T\to X$ in Frobenius norm and the matrix integral converges absolutely in that norm. The integrand is self-adjoint because $Q=Q^*$. [F1, step 1.1, algebra]

3.1 By [F1], $M(T)QM(T)^*\to0$ as $T\to\infty$, and by step 2.1, $X_T\to X$. Taking limits in step 1.2 gives $AX+XA^*=-Q$. [F1, step 2.1, step 1.2, algebra]

3.2 Suppose $Q\succeq0$. By [F3], $Q^{1/2}$ exists and is self-adjoint, so $Q=(Q^{1/2})^*Q^{1/2}$. Hence for every $v$, $v^*Xv=\int_0^\infty\|Q^{1/2}e^{tA^*}v\|_2^2\,dt\ge0$. Thus $X\succeq0$. If $Q\succ0$ and $v\ne0$, the integrand at $t=0$ is $v^*Qv>0$ and is continuous, so it stays positive on an interval of positive length; therefore $v^*Xv>0$ and $X\succ0$. [F3, F4, step 2.1, algebra]

4.1 If $Y$ is another solution, $H=Y-X$ satisfies $AH+HA^*=0$. The derivative of $M(t)HM(t)^*$ is therefore zero by [F2], so it is constant and equals $H$ at $t=0$. By [F1] it tends to zero as $t\to\infty$, hence $H=0$ and the solution is unique. [F1, F2, step 3.1, algebra]

5.1 For $Q\succeq0$ and nonzero $v$, the continuous integrand in step 3.2 has integral zero exactly when it vanishes for all $t\ge0$: if it were positive at one time, continuity would make its integral over a neighboring interval positive. It vanishes at time $t$ exactly when $e^{tA^*}v\in\ker Q^{1/2}$. Hence $v^*Xv>0$ for every nonzero $v$ exactly when no nonzero trajectory remains in that kernel for all $t\ge0$. [F3, step 3.2, algebra] ∎
