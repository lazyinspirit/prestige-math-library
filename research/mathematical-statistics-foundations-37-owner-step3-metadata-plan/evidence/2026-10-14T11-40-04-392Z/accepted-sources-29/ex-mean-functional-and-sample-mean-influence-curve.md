---
id: ex-mean-functional-and-sample-mean-influence-curve
kind: example
title: Mean functional and the sample-mean influence function
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps: [cor-cauchy-schwarz-inequality-for-l-two, def-asymptotically-linear-estimator-and-influence-function, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-mean-zero-square-integrable-space, def-measure-with-density, def-pathwise-differentiable-functional, def-probability-measure, thm-dominated-convergence, thm-integral-triangle-inequality, thm-integration-against-a-density, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Let $(\mathcal X,\mathcal A)$ be a measurable observation space and let $X:\mathcal X\to[0,\infty)$ be measurable. Let $\mathcal M_X$ be the model of probability laws $Q$ on this space satisfying $E_QX<\infty$, and define $\psi:\mathcal M_X\to\mathbb R$ by $\psi(Q)=E_QX$. Take $P\in\mathcal M_X$ with $X\in L^2(P)$, and write $\mu=E_PX$. Specify the allowed one-sided paths through $P$ to be $dP_{t,s}=(1+ts)dP$ for bounded real $s$ with $E_Ps=0$ and sufficiently small $t\ge0$. Their scores are the bounded mean-zero functions, whose closure is $\mathcal T=L^2_0(P)$. The right path derivative is represented by $X-\mu$. It is the unique representer in $\mathcal T$, hence the canonical gradient in this example. For iid observations from $P$, the sample mean has the exact expansion

$$\overline X_n-\mu=(P_n-P)(X-\mu),$$

so $X-\mu$ is also its estimator influence function. Only the specified bounded-score path class is asserted here.

## Facts & Assumptions

**Given:** A probability law $P$, a nonnegative real $X\in L^2(P)$, the bounded-score path class in the example, and an iid sample $X_1,\ldots,X_n\sim P$.

[F1] [[def-mean-zero-square-integrable-space]]: $L^2_0(P)$ is the set of square-integrable real functions modulo almost-sure equality with mean zero.

[F2] [[def-asymptotically-linear-estimator-and-influence-function]]: an estimator is asymptotically linear when its error is $(P_n-P)\varphi+o_P(n^{-1/2})$ with $\varphi\in L^2_0(P)$.

[F3] [[def-probability-measure]]: $P$ has total mass one, hence $\|1\|_{L^2(P)}=1$.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectations of integrable real functions are their Lebesgue integrals.

[F5] For measurable representatives $f,g$ of real $L^2(P)$ classes, [[cor-cauchy-schwarz-inequality-for-l-two]] gives $\int|fg|\,dP\le\|f\|_2\|g\|_2$, and [[thm-integral-triangle-inequality]] then gives $|E_P[fg]|\le\|f\|_2\|g\|_2$.

[F6] [[thm-dominated-convergence]]: pointwise convergence under one integrable majorant gives convergence of integrals.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on integrable functions.

[F8] [[thm-integration-against-a-density]]: for nonnegative measurable $f$ and $g$, $\int g\,d(fP)=\int gf\,dP$.

[F9] [[def-measure-with-density]]: the measure with density $q$ relative to $P$ assigns $A$ the mass $\int_Aq\,dP$.

[F10] [[def-pathwise-differentiable-functional]]: DQM is defined by a common-measure square-root $L^2$ expansion; the tangent space is the closed span of allowed scores, and a pathwise derivative's unique representer in that tangent space is its canonical gradient.

## Verification

**Given:** The data and path class in the example.

1.1 Since $X\in L^2(P)$ and $P$ is a probability, Cauchy--Schwarz [F5] gives $\mu=E_PX<\infty$. For bounded centered $s$ and sufficiently small $t\ge0$, $1+ts\ge0$ and $E_P(1+ts)=1+tE_Ps=1$, so $P_{t,s}$ is a probability law with density $1+ts$ by [F9]. Direct rationalization gives $\sqrt{1+u}-1-u/2=-u^2/[2(1+\sqrt{1+u})^2]$; for $u=ts$ the $L^2(P)$ norm of the DQM remainder in [F10] is at most $t^2\|s^2\|_2/2=o(t)$ because $s$ is bounded. Thus the score is $s$. [given, F3, F4, F5, F7, F9, F10, algebra]

1.2 Every bounded mean-zero $s$ is an allowed score. If $g\in L^2_0(P)$, truncate it to $g_m=\max(-m,\min(g,m))$. Then $g_m\to g$ in $L^2(P)$ by [F6], since $|g_m-g|^2\le g^2$ and the difference tends pointwise to zero. Also $E_Pg_m\to E_Pg=0$ by Cauchy–Schwarz and [F3], [F5]. Hence $s_m=g_m-E_Pg_m$ is bounded and mean-zero, and $s_m\to g$ in $L^2(P)$. Thus the score closure is exactly $L^2_0(P)$ by the tangent-space convention [F10]. [given, F1, F3, F5, F6, F10]

1.3 Since $P\in\mathcal M_X$, $E_PX<\infty$; with bounded $s$, [F8] gives the finite expectation $E_{P_{t,s}}X=E_P[X(1+ts)]$, so every designated path lies in $\mathcal M_X$. Linearity [F7] then yields $\psi(P_{t,s})=E_{P_{t,s}}X=\mu+tE_P[Xs]$. Since $E_Ps=0$, the right derivative is $E_P[(X-\mu)s]$. [given, F4, F7, F8, F9, algebra]

2.1 Cauchy–Schwarz gives $|E_P[(X-\mu)s]|\le\|X-\mu\|_2\|s\|_2$, so the derivative extends continuously to $\mathcal T$. The vector $X-\mu$ is mean-zero and square-integrable, hence belongs to $\mathcal T$. If another $\tilde\varphi\in\mathcal T$ represents the same derivative, then $h=\tilde\varphi-(X-\mu)\in\mathcal T$ is orthogonal to every bounded mean-zero score; by density and continuity it is orthogonal to itself, so $E_Ph^2=0$ and $h=0$. By [F10], $X-\mu$ is the unique representer in $\mathcal T$ and therefore the canonical gradient. [given, step 1.2, step 1.3, F1, F3, F5, F10]

3.1 For iid observations, $(P_n-P)(X-\mu)=n^{-1}\sum_{i=1}^n(X_i-\mu)=\overline X_n-\mu$ exactly. The remainder is zero, so the sample mean is asymptotically linear with estimator influence function $X-\mu$ under [F2]. This algebraic identity invokes no central limit theorem. [given, F2, algebra] ∎
