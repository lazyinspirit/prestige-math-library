---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
id: ex-pathwise-derivative-not-continuous-in-tangent-norm
kind: example
title: A mean derivative that is not continuous in the tangent norm
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps: [cor-cauchy-schwarz-inequality-for-l-two, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-mean-zero-square-integrable-space, def-measure-with-density, def-pathwise-differentiable-functional, def-probability-measure, thm-dominated-convergence, thm-integral-triangle-inequality, thm-integration-against-a-density, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Let $\Omega=\mathbb N$ with $\mathcal F=2^{\mathbb N}$, and define $X:\Omega\to[0,\infty)$ by $X(k)=k$. Let $\mathcal M_X$ be the model of probability laws $Q$ on $(\Omega,\mathcal F)$ satisfying $E_QX<\infty$, and define $\psi:\mathcal M_X\to\mathbb R$ by $\psi(Q)=E_QX$. Take $P\{X=k\}=c k^{-3}$, where $c=(\sum_{k\ge1}k^{-3})^{-1}$. Then $E_PX<\infty$ but $E_PX^2=\infty$. At $P$, designate the bounded-score one-sided paths $dP_{t,s}=(1+ts)dP$ with $E_Ps=0$ and sufficiently small $t\ge0$ as the allowed paths. Their tangent space is $L^2_0(P)$. The right derivative on bounded scores is $s\mapsto E_P[Xs]$, but this map is not continuous in the $L^2(P)$ norm. Thus $\psi$ is not pathwise differentiable relative to this tangent space and has no finite-variance influence curve there.

## Facts & Assumptions

**Given:** The discrete probability law and the bounded-score path class in the example.

[F1] [[def-pathwise-differentiable-functional]]: DQM uses a common-measure square-root $L^2$ expansion; pathwise differentiability requires the derivative to extend continuously to the tangent-space closure, and an influence curve is a square-integrable representer.

[F2] [[def-mean-zero-square-integrable-space]]: $L^2_0(P)$ consists of square-integrable real functions modulo almost-sure equality with mean zero.

[F3] [[def-probability-measure]]: a probability law has total mass one.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation of a nonnegative or integrable function is its Lebesgue integral.

[F5] For measurable representatives $f,g$ of real $L^2(P)$ classes, [[cor-cauchy-schwarz-inequality-for-l-two]] gives $\int|fg|\,dP\le\|f\|_2\|g\|_2$, and [[thm-integral-triangle-inequality]] then gives $|E_P[fg]|\le\|f\|_2\|g\|_2$.

[F6] [[thm-dominated-convergence]]: pointwise convergence under one integrable majorant implies convergence of the integrals.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on integrable functions.

[F8] [[thm-integration-against-a-density]]: integration against a measure with density $q$ is integration of the product against $P$.

[F9] [[def-measure-with-density]]: the measure with density $q$ relative to $P$ assigns $A$ the mass $\int_Aq\,dP$.

## Verification

**Given:** $P\{X=k\}=c k^{-3}$ and the bounded-score paths above. Put $\mu=E_PX$ and $H_m=\sum_{k=1}^m k^{-1}$.

1.1 For $r>1$ and $k\ge2$, monotonicity gives $k^{-r}\le\int_{k-1}^k x^{-r}dx$, so $\sum_{k\ge1}k^{-r}\le1+\int_1^\infty x^{-r}dx<\infty$. Taking $r=3$ shows $c$ is well-defined and the displayed masses sum to one; taking $r=2$ gives $\mu=c\sum_{k\ge1}k^{-2}<\infty$, so $P\in\mathcal M_X$. But $E_PX^2=c\sum_{k\ge1}k^{-1}=\infty$, because each dyadic block $2^{j-1}<k\le2^j$ contributes at least $1/2$. [given, F3, F4, algebra]

1.2 For bounded centered $s$, choose $t\ge0$ small enough that $1+ts\ge0$. By [F7], $E_P(1+ts)=1$, so [F9] gives a probability law $P_{t,s}$ with density $1+ts$. The identity $\sqrt{1+u}-1-u/2=-u^2/[2(1+\sqrt{1+u})^2]$ bounds the square-root remainder for $u=ts$ in $L^2(P)$ by $t^2\|s^2\|_2/2=o(t)$, since $s$ is bounded. Thus these paths are DQM with score $s$ under [F1]. To see their scores are dense in $L^2_0(P)$, take $g\in L^2_0(P)$ and truncate to $g_m=\max(-m,\min(g,m))$. Dominated convergence gives $g_m\to g$ in $L^2(P)$ because $|g_m-g|^2\le g^2$ and the difference tends pointwise to zero. Cauchy--Schwarz and $\|1\|_2=1$ give $E_Pg_m\to0$, so $g_m-E_Pg_m$ are bounded centered scores converging to $g$. Hence the tangent space is $L^2_0(P)$. [given, F1, F2, F3, F5, F6, F7, F9]

2.1 Step 1.1 gives $P\in\mathcal M_X$ and $E_PX<\infty$; since $s$ is bounded, [F8] gives the finite expectation $E_{P_{t,s}}X=E_P[X(1+ts)]$, so every designated path lies in $\mathcal M_X$. Linearity [F7] then gives $\psi(P_{t,s})=E_{P_{t,s}}X=\mu+tE_P[Xs]$, so the right derivative on each allowed score is $\dot\psi_P(s)=E_P[Xs]$. [given, step 1.1, F4, F7, F8, F9, algebra]

3.1 For $m\ge2$ let $s_m=(X\wedge m)-E_P[X\wedge m]$. These are bounded centered scores. Their norms are positive because $X\wedge m$ takes the distinct values $1$ and $2$ on the positive-mass points $k=1$ and $k=2$. Direct summation gives $E_P[Xs_m]=cH_m+cm\sum_{k>m}k^{-2}-\mu E_P[X\wedge m]\ge cH_m-\mu^2$, since $0\le X\wedge m\le X$. Also $$\|s_m\|_2^2=E_P[(X\wedge m)^2]-(E_P[X\wedge m])^2\le cH_m+cm^2\sum_{k>m}k^{-3}\le cH_m+c/2,$$ where the last bound follows from $\sum_{k>m}k^{-3}\le\int_m^\infty x^{-3}dx=1/(2m^2)$. The dyadic-block argument in step 1.1 shows $H_m\to\infty$, so $|E_P[Xs_m]|/\|s_m\|_2\to\infty$. The derivative on the dense score set is therefore unbounded in the tangent norm and cannot extend continuously, contrary to the requirement in [F1]. [given, F1, F4, step 1.1, step 2.1, algebra]

4.1 If a finite-variance influence curve $\phi\in L^2_0(P)$ represented this derivative, then for every $m\ge2$ Cauchy--Schwarz would give $|E_P[Xs_m]|=|E_P[\phi s_m]|\le\|\phi\|_2\|s_m\|_2$, contradicting step 3.1. Thus no such influence curve exists. [F1, F5, step 3.1] ∎

