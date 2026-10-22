---
id: ex-nrqmx-attractive-separable-bound-state
kind: example
domain: mathematics
library: mathematics
title: Rank-one attractive perturbation has at most one negative eigenvalue
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - thm-nrqmx-rank-one-resolvent
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-intermediate-value
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-rank-one-resolvent: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-intermediate-value: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "S. Albeverio and P. Kurasov, Singular Perturbations of Differential
        Operators: Solvable Schrödinger Type Operators"
      url: https://api.pageplace.de/preview/DT0400.9781139382595_A23867432/preview-9781139382595_A23867432.pdf
      locator: "Chapter 1, §1.1.1, Theorem 1.1.1 and proof, printed pp.9-10: rank-one
        resolvent scalar denominator used for the exact separable model."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice and Countable Choice. On
$L^2(\mathbb R^3;\mathbb C)$ let
$(H_0f)(p)=|p|^2f(p)$ with domain
$D(H_0)=\{f\in L^2:|p|^2f(p)\in L^2\}$, let
$g(p)=C e^{-|p|^2/2}$ for a constant $C\in\mathbb C\setminus\{0\}$, and
let $\lambda<0$. Define $P_gf=\langle f,g\rangle g$, using the
first-variable-linear $L^2$ pairing. The self-adjoint rank-one perturbation
$H_\lambda=H_0+\lambda P_g$ has a negative eigenvalue
$-\kappa^2$ exactly when
$$1+\lambda\int_{\mathbb R^3}\frac{|g(p)|^2}{|p|^2+\kappa^2}\,dp=0,\qquad\kappa>0.$$
There is at most one such eigenvalue. More precisely, it exists exactly when
$1+\lambda I_0<0$, where
$I_0=\int |g(p)|^2|p|^{-2}\,dp\in(0,\infty)$; equality is the threshold
case and yields no negative eigenvalue.

## Statement references

[[thm-nrqmx-rank-one-resolvent]]

## Facts & Assumptions

**Given:** Choice, $C\ne0$, $\lambda<0$, the multiplication operator $H_0$, and $g$ as in the Statement.

[F1] The rank-one resolvent theorem says $E<\inf\sigma(H_0)$ is an eigenvalue exactly when $1+\lambda\langle(H_0-E)^{-1}g,g\rangle=0$, with a one-dimensional eigenspace ([[thm-nrqmx-rank-one-resolvent]]).

[F2] Multiplication by $|p|^2$ is self-adjoint on its maximal domain, has the real-multiplier self-adjointness interface ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F3] For radial nonnegative functions on $\mathbb R^3$, Lebesgue integration reduces to $4\pi\int_0^\infty r^2(\cdot)\,dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] Monotone convergence and dominated convergence hold for the integrals used to analyze $m(\kappa)$ ([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]]).

[F5] A continuous real function on a closed interval takes each value between its endpoint values ([[thm-intermediate-value]]).

[A1] Choice is the hypothesis of the rank-one resolvent input ([[def-axiom-of-choice]]).

[A2] Countable Choice is assumed by the $L^2$ and polar-coordinate interfaces ([[def-countable-choice]]).

## Proof

**Given:** [A1], [A2], [F1]–[F4], $C\ne0$, and $\lambda<0$.

1.1 By [F2], $H_0$ is self-adjoint. If $E<0$, multiplication by $(|p|^2-E)^{-1}$ is a bounded inverse of $H_0-EI$: it is bounded by $|E|^{-1}$, and $|p|^2/(|p|^2-E)\le1$ puts its range in $D(H_0)$. Therefore $\sigma(H_0)\subseteq[0,\infty)$. For $B_n=\{p:|p|<1/n\}$, [F3] gives $0<|B_n|<\infty$; the unit vectors $f_n=|B_n|^{-1/2}\mathbf1_{B_n}$ lie in $D(H_0)$ and satisfy $\|H_0f_n\|\le n^{-2}$. If $0\in\rho(H_0)$, then $1=\|f_n\|\le\|H_0^{-1}\|\,\|H_0f_n\|\to0$, a contradiction. Thus $\inf\sigma(H_0)=0$. [A1, A2, F2, F3, algebra]

2.1 By [F3], $$\|g\|_2^2=4\pi|C|^2\int_0^\infty r^2e^{-r^2}\,dr<\infty.$$ For $E=-\kappa^2<0$, the rank-one scalar in [F1] is $$m(\kappa)=\langle(H_0+\kappa^2)^{-1}g,g\rangle =\int_{\mathbb R^3}\frac{|C|^2e^{-|p|^2}}{|p|^2+\kappa^2}\,dp.$$ By [F1] and step 1.1, its zeros in $1+\lambda m(\kappa)$ correspond exactly to negative eigenvalues, each with multiplicity one. [A1, F1, F3, step 1.1, algebra]

3.1 If $0<\kappa_1<\kappa_2$, then $(|p|^2+\kappa_1^2)^{-1}>(|p|^2+\kappa_2^2)^{-1}$ everywhere; since $|g(p)|^2>0$, integration gives $m(\kappa_1)>m(\kappa_2)$. On any compact interval $[a,b]\subset(0,\infty)$, the integrands are bounded by $|g(p)|^2/a^2\in L^1$, so dominated convergence [F4] gives continuity of $m$ there. Also $0<m(\kappa)\le\|g\|_2^2/\kappa^2$, hence $m(\kappa)\to0$ as $\kappa\to\infty$. [F3, F4, step 2.1, algebra]

4.1 The integrands for $m(1/n)$ increase pointwise to $|g(p)|^2/|p|^2$ as $n\to\infty$. Monotone convergence [F4] gives $\lim_n m(1/n)=I_0$. Since step 3.1 makes $m$ strictly decreasing in $\kappa$, its limit as $\kappa\downarrow0$ equals this supremum. By [F3], $$I_0=4\pi|C|^2\int_0^\infty e^{-r^2}\,dr\in(0,\infty).$$ [F3, F4, step 3.1, algebra]

5.1 The function $1+\lambda m(\kappa)$ is continuous and strictly increasing on $(0,\infty)$ by step 3.1, with endpoint limits $1+\lambda I_0$ and $1$ by steps 3.1 and 4.1. When $1+\lambda I_0<0$, the endpoint limits give finite $0<a<b$ with $1+\lambda m(a)<0<1+\lambda m(b)$; [F5] on $[a,b]$ gives a positive zero, unique by strict increase. If $1+\lambda I_0\ge0$, then $m(\kappa)<I_0$ for every $\kappa>0$ by step 3.1 and the endpoint limit in step 4.1; because $\lambda<0$, this gives $1+\lambda m(\kappa)>1+\lambda I_0\ge0$, so no positive zero exists. Therefore a positive zero exists exactly when $1+\lambda I_0<0$. By step 2.1 and [F1], these zeros correspond exactly to negative eigenvalues. [A1, F1, F4, F5, step 2.1, step 3.1, step 4.1, algebra] ∎
