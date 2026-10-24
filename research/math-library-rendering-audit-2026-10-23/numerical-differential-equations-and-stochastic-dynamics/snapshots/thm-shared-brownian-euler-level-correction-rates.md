---
id: thm-shared-brownian-euler-level-correction-rates
kind: theorem
title: "Shared-Brownian Euler level correction rates"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - thm-euler-maruyama-strong-rate-for-square-integrable-initial-data
  - thm-euler-maruyama-weak-order-one-under-backward-regularity
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §2 and Theorem 3.1"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §4"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Statement

Assume AC and the finite-$L^2$ coefficient and initial-value hypotheses of
[[thm-euler-maruyama-strong-rate-for-square-integrable-initial-data]]. Fix an
integer refinement factor $M\ge2$ and a fine step $h$ with $0<h\le1/M$,
$T/h\in\mathbb N$, and $T/(Mh)\in\mathbb N$. Construct the fine and coarse
Euler paths with the same initial value and Brownian motion. The coarse
Brownian increment over each coarse interval is, by definition, the sum of
the $M$ fine Brownian increments in that interval. Let $X_T$ be the common
exact solution, and let $\varphi:\mathbb R^d\to\mathbb R$ be globally
Lipschitz with constant $L_\varphi$. Then constants independent of $h$ satisfy
$$\mathbb E|Y_T^h-Y_T^{Mh}|^2\le C_M h,$$
$$\operatorname{Var}\bigl(\varphi(Y_T^h)-\varphi(Y_T^{Mh})\bigr)\le C_ML_\varphi^2h, \qquad |\mathbb E\varphi(X_T)-\mathbb E\varphi(Y_T^h)|\le C L_\varphi h^{1/2}.$$
Thus the Lipschitz-payoff Euler level pair has correction variance exponent
$\beta=1$ and strong-error bias exponent $\alpha=1/2$. If, in addition,
$\varphi$ is bounded and its backward value function satisfies the hypotheses
of [[thm-euler-maruyama-weak-order-one-under-backward-regularity]], then the
bias bound improves to $|\mathbb E\varphi(X_T)-\mathbb E\varphi(Y_T^h)|\le Ch$,
so $\alpha=1$ while $\beta=1$ remains. With fixed dimension, fixed $M$, and
unit-cost coefficient and payoff evaluations, one coupled fine/coarse sample
has work $O(h^{-1})$.

## Facts & Assumptions

**Given:** AC; the stated finite-$L^2$ SDE assumptions; the fixed refinement factor and nested grids; a common exact solution and Brownian path; and the Lipschitz payoff (plus, for the weak branch, the bounded-payoff backward contract).

[F1] Under the finite-$L^2$ coefficient, time-modulus, Brownian and initial-value hypotheses, the continuous Euler path satisfies $\mathbb E\sup_{t\le T}|X_t-Y_t^h|^2\le Ch$, uniformly in $0<h\le1$ with $T/h\in\mathbb N$. [[thm-euler-maruyama-strong-rate-for-square-integrable-initial-data]]

[F2] For the weak-bias branch, retain finite $d,m$, the Euclidean/Frobenius norm convention and $A:B=\operatorname{tr}(A^{\mathsf T}B)$, and the same finite-horizon, complete usual filtered Brownian and grid setup as in the Statement. Assume jointly Borel coefficients that are globally Lipschitz in state, have uniform linear growth, and satisfy the half-Hölder time modulus. Require an $\mathcal F_0$-measurable initial value independent of future Brownian increments with $\mathbb E|X_0|^p<\infty$ for finite real $q\ge0$ and finite $p\ge2q+8$ (using $|x|^0=1$), and uniform pointwise order-$p$ moments of the exact solution, Euler interpolation, and Euler step process on $[0,T]$. The payoff is bounded Borel, and its backward value function $u(t,x)=\mathbb E[\varphi(X_T^{t,x})]$, using the unique shifted strong solutions supplied by the global well-posedness theorem, satisfies $u(T,x)=\varphi(x)$, $(\partial_t+L_t)u=0$ for $L_tv=b(t,\cdot)\cdot\nabla v+\tfrac12(\sigma\sigma^{\mathsf T})(t,\cdot):D_x^2v$, and continuous mixed derivatives $\partial_t^jD_x^\alpha u$ for $0\le j\le2$, $|\alpha|\le4$, bounded by $C_u(1+|x|^q)$. Under this full contract of [[thm-euler-maruyama-weak-order-one-under-backward-regularity]], $|\mathbb E\varphi(X_T)-\mathbb E\varphi(Y_T^h)|\le Ch$.

[A1] The refinement factor $M$ is fixed as $h\to0$; both mesh sizes obey $0<h\le1$ and have $T/h$ and $T/(Mh)$ integral. The coarse path uses the sum of each corresponding block of $M$ fine Brownian increments, so both Euler paths use the same Brownian path and initial value.

[A2] $|\varphi(x)-\varphi(y)|\le L_\varphi|x-y|$ for all states. In the weak branch, the same $\varphi$ is bounded and satisfies the additional backward regularity contract [F2].

[A3] AC is included because [F1] carries that assumption from the Doob and Brownian Itô interfaces. [[def-axiom-of-choice]]

## Proof



**Given:** AC; the stated finite-$L^2$ SDE assumptions; the fixed refinement factor and nested grids; a common exact solution and Brownian path; and the Lipschitz payoff (plus, for the weak branch, the bounded-payoff backward contract).

[F1] Under the finite-$L^2$ coefficient, time-modulus, Brownian and initial-value hypotheses, the continuous Euler path satisfies $\mathbb E\sup_{t\le T}|X_t-Y_t^h|^2\le Ch$, uniformly in $0<h\le1$ with $T/h\in\mathbb N$. [[thm-euler-maruyama-strong-rate-for-square-integrable-initial-data]]

[F2] For the weak-bias branch, retain finite $d,m$, the Euclidean/Frobenius norm convention and $A:B=\operatorname{tr}(A^{\mathsf T}B)$, and the same finite-horizon, complete usual filtered Brownian and grid setup as in the Statement. Assume jointly Borel coefficients that are globally Lipschitz in state, have uniform linear growth, and satisfy the half-Hölder time modulus. Require an $\mathcal F_0$-measurable initial value independent of future Brownian increments with $\mathbb E|X_0|^p<\infty$ for finite real $q\ge0$ and finite $p\ge2q+8$ (using $|x|^0=1$), and uniform pointwise order-$p$ moments of the exact solution, Euler interpolation, and Euler step process on $[0,T]$. The payoff is bounded Borel, and its backward value function $u(t,x)=\mathbb E[\varphi(X_T^{t,x})]$, using the unique shifted strong solutions supplied by the global well-posedness theorem, satisfies $u(T,x)=\varphi(x)$, $(\partial_t+L_t)u=0$ for $L_tv=b(t,\cdot)\cdot\nabla v+\tfrac12(\sigma\sigma^{\mathsf T})(t,\cdot):D_x^2v$, and continuous mixed derivatives $\partial_t^jD_x^\alpha u$ for $0\le j\le2$, $|\alpha|\le4$, bounded by $C_u(1+|x|^q)$. Under this full contract of [[thm-euler-maruyama-weak-order-one-under-backward-regularity]], $|\mathbb E\varphi(X_T)-\mathbb E\varphi(Y_T^h)|\le Ch$.

[A1] The refinement factor $M$ is fixed as $h\to0$; both mesh sizes obey $0<h\le1$ and have $T/h$ and $T/(Mh)$ integral. The coarse path uses the sum of each corresponding block of $M$ fine Brownian increments, so both Euler paths use the same Brownian path and initial value.

[A2] $|\varphi(x)-\varphi(y)|\le L_\varphi|x-y|$ for all states. In the weak branch, the same $\varphi$ is bounded and satisfies the additional backward regularity contract [F2].

[A3] AC is included because [F1] carries that assumption from the Doob and Brownian Itô interfaces. [[def-axiom-of-choice]]




1.1 By [A1], the fine and coarse paths are driven by nested increments of this common Brownian path. Since $h\le1/M$, both meshes lie in the range of [F1]. Therefore $|Y_T^h-Y_T^{Mh}|^2 \le2|Y_T^h-X_T|^2+2|Y_T^{Mh}-X_T|^2.$ Taking expectations and applying [F1] at step sizes $h$ and $Mh$ gives $\mathbb E|Y_T^h-Y_T^{Mh}|^2\le2Ch+2CMh=2C(1+M)h.$ This is the correction second-moment bound. [F1, A1, algebra]

1.2 The same Lipschitz bound and Cauchy–Schwarz give $|\mathbb E\varphi(X_T)-\mathbb E\varphi(Y_T^h)| \le L_\varphi\mathbb E|X_T-Y_T^h| \le L_\varphi\bigl(\mathbb E|X_T-Y_T^h|^2\bigr)^{1/2} \le C^{1/2}L_\varphi h^{1/2}.$ Thus $\beta=1$ and the strong route gives $\alpha=1/2$. [A2, F1, algebra]

2.1 Let $D=\varphi(Y_T^h)-\varphi(Y_T^{Mh})$. Since variance is at most second moment and [A2] gives $|D|\le L_\varphi|Y_T^h-Y_T^{Mh}|$, step 1.1 yields $\operatorname{Var}(D)\le\mathbb E D^2\le2C(1+M)L_\varphi^2h.$ [A2, step 1.1, algebra]

3.1 If the additional bounded-payoff backward contract holds, [F2] applied to the same fine Euler scheme gives bias at most $Ch$. It changes only the bias exponent to $\alpha=1$; the correction-variance bound of step 2.1 is unchanged. [F2, step 2.1]

4.1 A fine path takes $T/h$ Euler steps and the coarse path takes $T/(Mh)$ steps. The coarse increments are sums of already generated fine increments, so they add no Brownian draws; for fixed $M,d$ and unit-cost coefficient/payoff evaluations, total path work is proportional to $T/h+T/(Mh)=O(h^{-1})$. AC is inherited only through [A3]. [A1, A3, step 3.1] ∎

## Remarks

This is the solver-rate interface for multilevel examples; it makes no claim
about learned-drift or learned-score bias. The variance-rate and work statements
do not import the abstract MLMC complexity theorem.
