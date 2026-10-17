---
id: lem-trust-region-ratio-accuracy-for-small-radii
kind: lemma
title: "The actual-to-predicted ratio approaches one at small radii away from stationarity"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-trust-region-quadratic-model-and-ratio
  - alg-trust-region-cauchy-step
  - lem-trust-region-cauchy-decrease
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-mean-value-theorem
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
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §4.2, Theorem 4.5 proof, equations (4.27)–(4.32), printed pp. 80–81 / PDF pp. 98–99: actual/model reduction error and small-radius ratio behavior for sufficient-decrease steps."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 20–22: ratio accuracy at small radii and its use in the global-convergence proof."
---

## Statement

Let $m$ be the model of
[[def-trust-region-quadratic-model-and-ratio]], with $g\ne0$, symmetric
$B$, and radius $\Delta>0$. Suppose $\|B\|_2\le M_B$ for a declared
$M_B\ge0$, and $f$ is $C^1$ on an open set containing the segment from $x$
to $x+p$. Suppose the gradient of $f$ is $L$-Lipschitz on that segment,
meaning
$$\|\nabla f(u)-\nabla f(v)\|_2\le L\|u-v\|_2$$
there. Let $0<\theta\le1$, let $p$ be feasible, and suppose
$$m(0)-m(p)\ge\theta\,[m(0)-m(p_C)]$$
for the Cauchy step $p_C$ of [[alg-trust-region-cauchy-step]]. Interpret
$\|g\|_2/(2M_B)=+\infty$ if $M_B=0$, and assume
$\Delta\le\|g\|_2/(2M_B)$. Then the predicted reduction is positive and
$$|\rho(p)-1|\le\frac{2(L+M_B)\Delta}{\theta\|g\|_2}.$$
Consequently, for $0<\eta_2<1$, if $L+M_B>0$ and
$$\Delta\le\frac{\theta(1-\eta_2)\|g\|_2}{2(L+M_B)},$$
then $\rho(p)\ge\eta_2$. If $L+M_B=0$, then $\rho(p)=1$.

## Facts & Assumptions

**Given:** The model, the smoothness and Hessian-bound assumptions in the Statement, and a feasible step satisfying the stated fraction of Cauchy decrease.

[F1] [[alg-trust-region-cauchy-step]]: if $c:=g^TBg\le0$, then $p_C=-(\Delta/\|g\|_2)g$; if $c>0$, then $p_C=-\min\{\|g\|_2^2/c,\Delta/\|g\|_2\}g$.

[F2] [[lem-trust-region-cauchy-decrease]]:
$$m(0)-m(p_C)\ge\tfrac12\|g\|_2 \min\{\Delta,\|g\|_2/M_B\},$$
with the zero-matrix convention from that lemma.

[F3] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: $\|Bv\|_2\le\|B\|_2\|v\|_2$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^Tv|\le\|u\|_2\|v\|_2$.

[F5] [[cor-mean-value-theorem]]: if a scalar function is continuous on a closed interval and differentiable in its interior, its endpoint difference equals its derivative at an interior point times the interval length.

[A1] $\|B\|_2\le M_B$.

[A2] The gradient Lipschitz inequality in the Statement holds along the segment $x+tp$, $0\le t\le1$.

[A3] $m(0)-m(p)\ge\theta[m(0)-m(p_C)]$ with $0<\theta\le1$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $a:=\|g\|_2>0$ and $c:=g^TBg$. By [F3] and [F4], $c\le|c|\le a\|Bg\|_2\le M_Ba^2$. If $c\le0$, [F1] gives $\|p_C\|_2=\Delta$. If $c>0$, then $M_B>0$ and $a^2/c\ge1/M_B$; since $\Delta/a\le1/(2M_B)$, [F1] again gives $\|p_C\|_2=\Delta$. Put $M:=\|B\|_2$. If $M>0$, [A1] gives $a/M\ge a/M_B$; if $M=0$, use the zero-matrix convention in [F2]. Hence [F2] and [A3] imply $$m(0)-m(p)\ge\theta[m(0)-m(p_C)] \ge\tfrac12\theta a\Delta>0.$$ [given, A1, A3, F1, F2, F3, F4, algebra]

2.1 Define $\phi(t):=f(x+tp)$ and $h(t):=\phi(t)-\phi(0)-t\phi'(0)$. For $0<t\le1$, the gradient Lipschitz bound and [F4] give $$|h'(t)|=|\langle\nabla f(x+tp)-\nabla f(x),p\rangle| \le Lt\|p\|_2^2.$$ By [F5] on $h$ over $[0,1]$, $|h(1)|\le L\|p\|_2^2$. From the model formula and [A1], $$|\operatorname{ared}(p)-\operatorname{pred}(p)| \le |h(1)|+\tfrac12|p^TBp| \le(L+M_B)\|p\|_2^2.$$ Since $\|p\|_2\le\Delta$, step 1.1 yields $$|\rho(p)-1|\le \frac{(L+M_B)\Delta^2}{\tfrac12\theta a\Delta} =\frac{2(L+M_B)\Delta}{\theta a}.$$ If $L+M_B=0$, the numerator vanishes and $\rho(p)=1$; otherwise the stated threshold gives $|\rho(p)-1|\le1-\eta_2$, hence $\rho(p)\ge\eta_2$. [given, A1, A2, F4, F5, step 1.1, algebra] ∎

