---
id: thm-safeguarded-levenberg-marquardt-global-stationarity
kind: theorem
title: "Exact safeguarded Levenberg-Marquardt iterates approach stationarity on compact sublevels"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-safeguarded-levenberg-marquardt
  - def-euclidean-inner-product
  - def-induced-matrix-p-norm
  - lem-levenberg-marquardt-large-damping-forces-sufficient-decrease
  - lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer
  - thm-singular-value-decomposition
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-chain-rule-for-total-derivatives
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
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
      locator: "Chapter 10, §10.3, printed pp. 261–262 / PDF pp. 280–281: Theorem 10.3 and its Cauchy-decrease and bounded-level-set hypotheses."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section Levenberg-Marquardt: the regularized subproblem and a gradient-based stopping test; the nonzero-residual stationarity caveat is proved locally below."
---

## Statement

Let $r:U\to\mathbb R^m$ be $C^1$ on open $U\subseteq\mathbb R^n$, let
$\phi=\|r\|_2^2/2$, and fix $x_0\in U$. Suppose the initial sublevel
$S=\{x\in U:\phi(x)\le\phi(x_0)\}$ is compact, its closed unit neighborhood
$S_1=\{y:\operatorname{dist}(y,S)\le1\}$ lies in $U$, and on $S_1$ the
Jacobian $J=Dr$ is $L$-Lipschitz with
$\|J(x)\|_2\le M$ and $\|r(x)\|_2\le R_0$.
Fix nonsingular $D$ and constants $d,d_+>0$ such that
$\|Dv\|_2\ge d\|v\|_2$ and
$\max\{\|D\|_2,\|D^T\|_2\}\le d_+$.
Choose $\lambda_{\min}>0$, $\lambda_0\ge\lambda_{\min}$, $\gamma>1$,
$0<\eta_1<\eta_2<1$, and $\Delta>0$, and define $C_D,C_E,P,\Lambda,N$ as
in [[lem-levenberg-marquardt-large-damping-forces-sufficient-decrease]].
Run [[alg-safeguarded-levenberg-marquardt]] in exact arithmetic with at least
$N$ trials per iteration, a supplied exact reduced QR factorization of each
augmented matrix at every trial, exact subproblem solves, and no evaluation
failures.

The run either terminates at an iterate with $J(x_k)^Tr(x_k)=0$, or every
nonstationary iteration is accepted and
$$\phi(x_k)-\phi(x_{k+1})\ge\eta_1 c\,\|J(x_k)^Tr(x_k)\|_2^2,\qquad c:=\frac{\lambda_{\min}d^2}{\bigl(M^2+\lambda_{\max}d_+^2\bigr)^2},$$
where $\lambda_{\max}:=\max\{\lambda_0,\gamma\Lambda\}$.
Consequently $\|J(x_k)^Tr(x_k)\|_2\to0$, and every accumulation point is
stationary. This does not imply $r(x_k)\to0$; the method certifies first-order
stationarity of the least-squares objective, not exact data fit.

## Facts & Assumptions

**Given:** The residual, objective, compact sublevel and neighborhood, Jacobian and residual bounds, scaling matrix, damping parameters, trial cap, and exact-arithmetic LM run in the Statement.

[F1] [[alg-safeguarded-levenberg-marquardt]]: a nonstationary exact LM trial is accepted only when $\rho\ge\eta_1$; its damping increases by $\gamma$ on rejection and decreases only on an accepted high-ratio boundary step, with floor $\lambda_{\min}$.

[F2] [[lem-levenberg-marquardt-large-damping-forces-sufficient-decrease]]: for every $x\in S$ with $g:=J(x)^Tr(x)\ne0$ and current $\lambda\ge\lambda_{\min}$, the stated finite cap reaches a feasible trial with positive predicted reduction and $\rho\ge\eta_2$, unless an earlier trial is accepted.

[F3] [[lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer]]: the exact damped equation gives $\operatorname{pred}=\|Jp\|_2^2/2+\lambda\|Dp\|_2^2$.

[F4] [[def-c-one-map-and-local-inverse]] and [[def-jacobian-matrix-and-gradient]] give $Dr=J$; [[thm-chain-rule-for-total-derivatives]] applies to $\Psi(y)=\|y\|_2^2/2$ and $r$. The expansion $\Psi(y+z)-\Psi(y)-\langle y,z\rangle=\|z\|_2^2/2=o(\|z\|_2)$ gives $D\Psi(y)[z]=\langle y,z\rangle$.

[F5] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: induced matrix norms bound products and matrix-vector products.

[F6] [[thm-singular-value-decomposition]] and [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: a matrix and its transpose have the same singular values, hence the same Euclidean induced matrix norm.

[F7] [[def-euclidean-inner-product]]: $\|v\|_2^2=v^Tv$ for the standard Euclidean inner product.

[F8] [[def-induced-matrix-p-norm]]: at $p=2$, the matrix norm is induced by the Euclidean vector norm.

[F9] A $C^1$ map is continuous and its derivative matrix is continuous ([[def-c-one-map-and-local-inverse]], [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[A1] The sublevel set and bounded residual/Jacobian hypotheses in the Statement hold.

[A2] Every accepted step has exact ratio at least $\eta_1$ and the exact arithmetic run has no solver or objective-evaluation failure.

## Proof

1.1 Let $\Psi(y)=\|y\|_2^2/2$. The identity $\Psi(y+z)-\Psi(y)-\langle y,z\rangle=\|z\|_2^2/2=o(\|z\|_2)$ gives $D\Psi(y)[z]=\langle y,z\rangle$. Since $r$ is $C^1$ and $J=Dr$, the chain rule yields $D\phi(x)[h]=\langle r(x),J(x)h\rangle=(J(x)^Tr(x))^Th$, so $\nabla\phi=J^Tr$. At a nonstationary $x_k\in S$, [F2] shows that the iteration either accepts an earlier trial or accepts once $\lambda\ge\Lambda$, within $N$ attempts. Thus no rejection-budget status occurs. The accepted actual reduction is $\rho\,\operatorname{pred}\ge\eta_1\operatorname{pred}>0$ by [F1], so $\phi(x_{k+1})<\phi(x_k)\le\phi(x_0)$ and $x_{k+1}\in S$. Induction keeps all iterates in $S$. [given, A1, A2, F1, F2, F4, F7]

2.1 The damping remains at least $\lambda_{\min}$ by [F1]. If $\lambda_k\ge\Lambda$, [F2] accepts the trial with $\|Dp_k\|_2\le\Delta/2$, so it is not a boundary step and the damping is unchanged. If $\lambda_k<\Lambda$, every rejection multiplies it by $\gamma$; the first value reaching $\Lambda$ is less than $\gamma\Lambda$, and [F2] accepts that interior trial without decreasing the damping. An earlier accepted step either preserves $\lambda_k$ or decreases it to at least $\lambda_{\min}$. Hence every damping used satisfies $\lambda_{\min}\le\lambda_k\le\lambda_{\max}:=\max\{\lambda_0,\gamma\Lambda\}$. [F1, F2, step 1.1, algebra]

3.1 For an accepted nonstationary step, [F3] gives $\operatorname{pred}\ge\lambda_k\|Dp_k\|_2^2\ge\lambda_{\min}d^2\|p_k\|_2^2$. Its normal equation is $J^Tr=-(J^TJ+\lambda_kD^TD)p_k$; [F6] gives $\|J^T\|_2=\|J\|_2\le M$, so submultiplicativity [F5] gives $\|J^Tr\|_2\le(M^2+\lambda_{\max}d_+^2)\|p_k\|_2$. Combining these inequalities yields $\operatorname{pred}\ge c\|J^Tr\|_2^2$ with the stated $c>0$. [A1, F3, F5, F6, F7, F8, step 2.1, algebra]

4.1 Multiplying step 3.1 by $\rho\ge\eta_1$ proves the sufficient-decrease inequality in the Statement. Summing it over $k=0,\ldots,K-1$ telescopes and uses $\phi(x_K)\ge0$, giving $\eta_1c\sum_{k<K}\|J(x_k)^Tr(x_k)\|_2^2\le\phi(x_0)$. The nonnegative series is bounded, so its terms tend to zero. For $y\to x$ in $U$, [F5]–[F6] give $\|J(y)^Tr(y)-J(x)^Tr(x)\|_2\le\|J(y)\|_2\|r(y)-r(x)\|_2+\|J(y)-J(x)\|_2\|r(x)\|_2\to0$ by [F9], since $J(y)$ is locally bounded. Thus if a subsequence $x_{k_j}$ converges to $\bar x\in S\subset U$, continuity gives $J(\bar x)^Tr(\bar x)=0$. [step 1.1, step 2.1, step 3.1, A1, F5, F6, F9, algebra]

5.1 To verify the limitation under the hypotheses, take $U=\mathbb R$, $r(t)=(t,1)$, and $x_0=0$. Then $\phi(t)=(t^2+1)/2$, $S=\{0\}$, $S_1=[-1,1]$, $J=(1,0)^T$, and $J^Tr(0)=0$ while $\|r(0)\|_2=1$. On $S_1$ take $L=0$, $M=1$, and $R_0=\sqrt2$; set $D=1$, $d=d_+=1$, $\lambda_{\min}=\lambda_0=1$, $\gamma=2$, $\eta_1=1/4$, $\eta_2=3/4$, and $\Delta=1$. These bounds give $P=1/2$, $\Lambda=2\sqrt2$, and finite cap $N=3$. The iteration returns stationary immediately, with nonzero residual. Thus even under the stated compact-sublevel and finite-attempt conditions the conclusion cannot be strengthened to $r(x_k)\to0$. [F4, given, algebra] ∎
