---
id: lem-half-order-singular-integral-exists
kind: lemma
title: The half-order diagonal singularity defines a bounded improper integral
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-continuous-real-functions-on-a-compact-metric-space
  - thm-heine-borel-rn
  - def-riemann-stieltjes-sum-and-integral
  - thm-continuous-implies-integrable
  - thm-monotonicity-of-the-integral
  - thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators
  - thm-reals-cauchy-complete
  - thm-linearity-of-the-integral
  - def-operator-norm
  - thm-c-k-complete-in-the-sup-metric
  - thm-additivity-over-subintervals
  - def-norm-and-normed-space
  - def-banach-space
justified_by: []
proof_strategy: direct
axiom_use: None. The truncated integrals form a real Cauchy family, and the proof uses only real completeness.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jiri Lebl, Basic Analysis I, §5.5 Improper Integrals, Definition 5.5.1 and Proposition 5.5.2"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
      locator: "Definition 5.5.1 and Proposition 5.5.2, especially the endpoint p-test for 0<p<1."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Chapter 3, §3.3, quadrature rule treatment of integral operators, printed pp. 60–64."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For $x\in[0,1]$, $g\in C([0,1],\mathbb R)$, and $0<\varepsilon<1$, let
$$S_{x,\varepsilon}(g):=\int_{[0,1]\setminus(x-\varepsilon,x+\varepsilon)}|x-y|^{-1/2}g(y)\,dy,$$
where the integral is the sum of the ordinary Riemann integrals on the at most
two remaining closed intervals, and an empty interval contributes zero. The
limit
$$S_x(g):=\lim_{\varepsilon\downarrow0}S_{x,\varepsilon}(g)$$
exists. The map $S_x:C([0,1],\mathbb R)\to\mathbb R$ is linear and positive, and its
operator norm ([[def-operator-norm]]) is
$$\|S_x\|=S_x(1)=2\sqrt{x}+2\sqrt{1-x}\le2\sqrt2.$$

## Facts & Assumptions

**Given:** $x\in[0,1]$, $g\in C([0,1],\mathbb R)$, and the truncated Riemann integrals $S_{x,\varepsilon}(g)$ from the Statement.

[F1] [[def-riemann-stieltjes-sum-and-integral]]: $\int_a^b$ denotes the ordinary Riemann integral, realized as the Riemann–Stieltjes integral with the identity integrator.

[F2] [[thm-continuous-implies-integrable]]: a continuous real-valued function on each remaining closed interval has an ordinary Riemann integral.

[F3] [[thm-monotonicity-of-the-integral]]: pointwise inequalities between integrable functions on an interval pass to their integrals.

[F4] [[thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators]]: for the identity integrator, an antiderivative evaluates the integral; since $(2\sqrt r)\prime=r^{-1/2}$ on $r>0$, $\int_\delta^\varepsilon r^{-1/2}dr=2(\sqrt\varepsilon-\sqrt\delta)$ for $0<\delta<\varepsilon$.

[F5] [[thm-reals-cauchy-complete]]: every Cauchy sequence of real numbers converges.

[F6] [[thm-linearity-of-the-integral]]: finite Riemann integrals are linear in their integrands.

[F7] [[thm-c-k-complete-in-the-sup-metric]]: every continuous real-valued function on $[0,1]$ is bounded, so $M:=\|g\|_\infty$ is finite.

[F8] [[thm-additivity-over-subintervals]]: integrals over disjoint intervals add when an interval is split at its endpoints.

[F9] The interval $[0,1]$ with its usual metric is a nonempty compact metric space ([[thm-heine-borel-rn]]).

[F10] On the nonempty compact interval $[0,1]$ ([[thm-heine-borel-rn]]), let $X=C([0,1],\mathbb R)$ with its supremum norm. Pointwise addition and real scalar multiplication preserve continuity. The supremum is finite by [[thm-c-k-complete-in-the-sup-metric]]; the pointwise absolute-value inequalities give $\|u+v\|_\infty\le\|u\|_\infty+\|v\|_\infty$ and $\|cu\|_\infty=|c|\|u\|_\infty$, and $\|u\|_\infty=0$ holds exactly when $u=0$. Thus this is a real norm ([[def-norm-and-normed-space]]). Its induced metric is the complete supremum metric of [[thm-c-k-complete-in-the-sup-metric]], so $X$ is Banach ([[def-banach-space]]).

[F11] The operator norm of a bounded linear map is the supremum of its values on the closed unit ball ([[def-operator-norm]]).

## Proof


**Given:** The data in the Statement, $M:=\|g\|_\infty$, and $0<\delta<\varepsilon<1$.

1.1 By [F9], [F7] applies and $M=\|g\|_\infty$ is finite. The integrand $y\mapsto |x-y|^{-1/2}g(y)$ is continuous on each closed interval in $[0,1]\setminus(x-\varepsilon,x+\varepsilon)$, because that set stays away from $x$. Thus the truncated integrals are finite and defined by [F1]. [given, F1, F2, F7, F9]

1.2 For $m\ge2$, put $a_m:=S_{x,1/m}(g)$. By [F8], the difference $a_m-a_\ell$ integrates only over the two annuli between the cutoffs $1/m$ and $1/\ell$. On each annulus, $|g(y)|\le M$; by [F2] and [F3], its absolute integral is bounded by $M\int_{\min(1/m,1/\ell)}^{\max(1/m,1/\ell)}r^{-1/2}dr$. Adding at most two sides gives $|a_m-a_\ell|\le4M|m^{-1/2}-\ell^{-1/2}|$, so $(a_m)$ is Cauchy and has a limit $L$ by [F5]. For any $\varepsilon>0$, choose $m$ with $1/m<\varepsilon$; comparing the two cutoffs gives $|S_{x,\varepsilon}(g)-a_m|\le4M\sqrt\varepsilon$. Letting $m\to\infty$ along such choices yields $|S_{x,\varepsilon}(g)-L|\le4M\sqrt\varepsilon$, so $S_{x,\varepsilon}(g)\to L$ as $\varepsilon\downarrow0$. [given, F2, F3, F4, F5, F8, algebra]

2.1 For every $\varepsilon$, comparison on the left and right of $x$ with the positive function $r^{-1/2}$ gives $|S_{x,\varepsilon}(g)|\le M\left(2\sqrt{x}+2\sqrt{1-x}\right).$ Taking the limit from step 1.2 proves the same bound for $S_x(g)$. For $g=1$, the truncated integrals increase to the sum of the two endpoint integrals by [F8], so $S_x(1)=2\sqrt{x}+2\sqrt{1-x}$. Since $(2x-1)^2\ge0$, we have $2\sqrt{x(1-x)}\le1$, and therefore $S_x(1)^2=4\bigl(1+2\sqrt{x(1-x)}\bigr)\le8$. Thus $S_x(1)\le2\sqrt2$. [given, F3, F4, F8, step 1.2, algebra]

3.1 Each truncated functional is linear and nonnegative on nonnegative $g$; limits preserve those equalities and inequalities, so $S_x$ is linear and positive. By [F10] it is a linear functional on a normed space. Step 2.1 gives $|S_x(g)|\le S_x(1)\|g\|_\infty$, and the input $g=1$ attains equality; [F11] therefore gives $\|S_x\|=S_x(1)$. [F3, F6, F9, F10, F11, step 2.1, algebra] ∎

