---
id: lem-levenberg-marquardt-large-damping-forces-sufficient-decrease
kind: lemma
title: "Uniformly large damping forces an acceptable LM trial in finitely many attempts"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-safeguarded-levenberg-marquardt
  - def-euclidean-inner-product
  - def-induced-matrix-p-norm
  - def-trust-region-quadratic-model-and-ratio
  - lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer
  - lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-singular-value-decomposition
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
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
      locator: "Chapter 10, §10.3, printed pp. 258–262 / PDF pp. 277–281: the LM ratio, scaled least-squares formulation, and sufficient-decrease global-convergence hypotheses."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section Levenberg-Marquardt: large damping gives a small scaled step; the lecture leaves the adaptive ratio strategy to a later lecture."
---

## Statement

Let $r:U\to\mathbb R^m$ be $C^1$ on an open $U\subseteq\mathbb R^n$, let
$J=Dr$, and let $\phi=\|r\|_2^2/2$. Fix $x_0\in U$ and suppose its sublevel set
$S=\{x\in U:\phi(x)\le\phi(x_0)\}$ is compact. Put
$S_1=\{y\in\mathbb R^n:\operatorname{dist}(y,S)\le1\}$ and assume $S_1\subseteq U$.
On $S_1$, suppose $\|r(x)\|_2\le R_0$, $\|J(x)\|_2\le M$, and $J$ is
$L$-Lipschitz in the Euclidean induced matrix norm.
Fix nonsingular $D$, numbers $d,d_+>0$ with
$\|Dv\|_2\ge d\|v\|_2$ and
$\max\{\|D\|_2,\|D^T\|_2\}\le d_+$, and parameters
$\lambda_{\min}>0$, $\gamma>1$, $0<\eta_1<\eta_2<1$, and $\Delta>0$.
Define
$$C_D:=d_+^2+M^2/\lambda_{\min},\quad C_E:=\tfrac L2(R_0+M)+\tfrac{L^2}{8},\quad P:=\min\{1,\Delta/(2d_+)\},$$
$$\Lambda:=\max\left\{\lambda_{\min},\frac{MR_0}{d^2P},\frac{C_EC_D^2}{(1-\eta_2)d^6}\right\},\quad N:=1+\left\lceil\frac{\log(\Lambda/\lambda_{\min})}{\log\gamma}\right\rceil.$$
At any $x\in S$ with $g:=J(x)^Tr(x)\ne0$, an exact LM trial with damping
$\lambda\ge\Lambda$, using a supplied exact reduced QR factorization of
its augmented matrix, has $0<\operatorname{pred}$, $\|Dp_\lambda\|_2\le\Delta/2$,
and $\rho\ge\eta_2$. Therefore, if the algorithm starts an iteration with
$\lambda\ge\lambda_{\min}$ and has at least $N$ trials, it either accepts an
earlier trial with $\rho\ge\eta_1$ or accepts by the $N$th trial. This conclusion
assumes exact subproblem solves and exact objective evaluations.

## Facts & Assumptions

**Given:** The residual map, compact sublevel and unit neighborhood, bounds, nonsingular scaling, damping floor and update factor, ratio thresholds, radius, and exact trial model of the Statement.

[F1] [[alg-safeguarded-levenberg-marquardt]]: the exact step solves $(J^TJ+\lambda D^TD)p=-J^Tr$, rejection multiplies $\lambda$ by $\gamma$, and an actual ratio is tested only on a feasible trial with positive predicted reduction.

[F2] [[lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer]]: for nonzero $g$, $\operatorname{pred}=\|Jp\|_2^2/2+\lambda\|Dp\|_2^2>0$.

[F3] [[lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian]]: on a convex segment, $\|r(x+p)-r(x)-J(x)p\|_2\le(L/2)\|p\|_2^2$.

[F4] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: induced matrix norms bound products and matrix-vector products.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^Tv|\le\|u\|_2\|v\|_2$.

[F6] [[thm-singular-value-decomposition]] and [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: a matrix and its transpose have the same singular values, hence the same Euclidean induced matrix norm.

[F7] [[def-euclidean-inner-product]]: the Euclidean norm is induced by the standard real inner product.

[F8] [[def-induced-matrix-p-norm]]: for $p=2$, $\|A\|_2$ is the operator norm induced by the Euclidean vector norm.

[A1] $S$ is compact, $S_1\subseteq U$, and the stated bounds hold on $S_1$.

[A2] The LM system is solved exactly and each $\phi(x+p)$ used by the ratio is evaluated exactly.

## Proof

1.1 Fix $x\in S$ with $g=J(x)^Tr(x)\ne0$, and let $\lambda\ge\lambda_{\min}$. By [F1] the exact trial solves $Q_\lambda p=-g$ for $Q_\lambda=J^TJ+\lambda D^TD$. For $v\ne0$, $v^TQ_\lambda v=\|Jv\|_2^2+\lambda\|Dv\|_2^2>0$, so the solution is nonzero. By [F2], $\operatorname{pred}=\frac12\|Jp\|_2^2+\lambda\|Dp\|_2^2$. The transpose norm equality [F6] and submultiplicativity [F4] give $\|g\|_2=\|Q_\lambda p\|_2\le(M^2+\lambda d_+^2)\|p\|_2\le\lambda C_D\|p\|_2$. Also $\lambda d^2\|p\|_2^2\le p^TQ_\lambda p=-p^Tg\le\|p\|_2\|g\|_2$ by [F5], so $\|p\|_2\le\|g\|_2/(\lambda d^2)\le MR_0/(\lambda d^2)$ using [F4], [F6], and [A1]. [given, A1, A2, F1, F2, F4, F5, F6, F7, F8, construct]

2.1 If $\lambda\ge\Lambda$, step 1.1 gives $\|p\|_2\le P\le1$ and therefore $\|Dp\|_2\le d_+P\le\Delta/2$. The segment from $x$ to $x+p$ lies in $S_1$, since every point on it is within $\|p\|_2\le1$ of $x\in S$. Apply [F3] on that segment and write $E=r(x+p)-r(x)-Jp$; then $\|E\|_2\le(L/2)\|p\|_2^2$. Expanding the two squared norms and using [F5] yields $|\phi(x+p)-m_0(p)|=|(r(x)+Jp)^TE+\frac12\|E\|_2^2|\le C_E\|p\|_2^2$. [given, A1, F3, F5, F7, F8, step 1.1, algebra]

3.1 By step 1.1, step 2.1, and [F2], $\operatorname{pred}\ge\lambda\|Dp\|_2^2\ge\lambda d^2\|p\|_2^2$. From $g=-Q_\lambda p$ and [F4], $\|p\|_2\ge\|g\|_2/(\lambda C_D)$, so $\operatorname{pred}\ge d^2\|g\|_2^2/(\lambda C_D^2)$. The preceding bounds therefore give
$$|\rho-1|=\frac{|\phi(x+p)-m_0(p)|}{\operatorname{pred}}\le\frac{C_EC_D^2}{\lambda d^6}\le1-\eta_2,$$
and hence $\rho\ge\eta_2$. [F2, F4, step 1.1, step 2.1, algebra]

4.1 Since $\Lambda\ge\lambda_{\min}$, after at most $\lceil\log(\Lambda/\lambda_{\min})/\log\gamma\rceil$ consecutive rejections the damping reaches at least $\Lambda$. At that trial step 2.1 makes it radius-feasible and step 3.1 gives $\rho\ge\eta_2>\eta_1$, so it is accepted. An earlier feasible trial with $\rho\ge\eta_1$ is already accepted by [F1]. The extra one in $N$ counts the final trial at or above $\Lambda$, proving the finite attempt bound. [F1, given, step 2.1, step 3.1, algebra] ∎
