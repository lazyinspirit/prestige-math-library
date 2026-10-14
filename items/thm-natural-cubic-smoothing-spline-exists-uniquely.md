---
id: thm-natural-cubic-smoothing-spline-exists-uniquely
kind: theorem
title: Existence, uniqueness, and spline reduction for cubic smoothing
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-natural-cubic-smoothing-spline, def-natural-cubic-spline, thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots, def-sobolev-space-wkp-and-its-norm, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ryan Tibshirani, Nonparametric Regression: Splines and RKHS Methods, §2.3"
      url: https://www.stat.berkeley.edu/~ryantibs/statlearn-s23/lectures/splines_rkhs.pdf
---

## Statement

Assume the Axiom of Choice. Let $[a,b]$, $\lambda>0$, and data $(x_i,y_i)_{i=1}^n$ satisfy the hypotheses of [[def-natural-cubic-smoothing-spline]], with $r\ge2$ distinct inputs $t_1<\cdots<t_r$. Then $J$ has a unique minimizer over $W^{2,2}(a,b)$. It is the natural cubic spline with knots at $t_1,\ldots,t_r$, extended linearly to $a$ and $b$ where needed.

## Facts & Assumptions

**Given:** AC; $\lambda>0$; data on $[a,b]$ with at least two distinct input values; and the variational criterion $J$.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]]. It is used through the supplied one-dimensional Sobolev representative result below, not to choose an arbitrary family of splines.

[A2] $\lambda>0$, the data lie in $[a,b]\times\mathbb R$, and there are at least two distinct input locations.

[F1] $W^{2,2}(a,b)$ consists of $L^2$ classes whose weak derivatives through order two are $L^2$ classes ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] Under AC, a one-dimensional $W^{1,2}(a,b)$ class has a unique continuous representative on $[a,b]$ that is absolutely continuous and whose increments are integrals of its weak derivative ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F3] For $r\ge2$ distinct knots and arbitrary values, the unique natural cubic interpolant exists and has linear tails ([[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]]).

[F4] The criterion $J$ is the squared empirical residual plus $\lambda$ times the integrated squared second weak derivative ([[def-natural-cubic-smoothing-spline]]).

[F5] In ZF, the Axiom of Choice implies Countable Choice and the prescribed-start form of Dependent Choice used by the Sobolev and representative interfaces ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Proof

**Proof technique:** direct.

1.1 Let $g\in W^{2,2}(a,b)$ and use the continuous representative in [F2] for $g$ and $g'$. The Countable Choice convention in [F1] and the choice hypotheses for [F2] are available by [F5] and [A1]. Interpolate the values $g(t_j)$ by the natural cubic $s$ from [F3], and put $h=g-s$. Then $h(t_j)=0$ for every $j$. On each interval between distinct knots, $s'''$ is constant; on the two linear tails, $s''=s'''=0$. [A1, A2, F1, F2, F3, F5, given]

1.2 The natural spline with knots $t_1,\ldots,t_r$ is uniquely determined by its nodal vector $z=(s(t_1),\ldots,s(t_r))\in\mathbb R^r$ by [F3]. The tridiagonal system in the interpolation proof is linear in its data, and the interval formula is linear in the nodal values and second derivatives; hence $z\mapsto s_z''$ is linear into the finite-dimensional space of piecewise-linear functions. Therefore $R(z)=\int|s_z''|^2$ is a finite nonnegative quadratic form. In these coordinates $J(s)=\sum_j\sum_{i:x_i=t_j}(y_i-z_j)^2+\lambda R(z)$. The data term has positive-definite diagonal quadratic part because every $t_j$ occurs at least once. Adding the nonnegative quadratic form $\lambda R$ leaves a positive-definite quadratic objective, which has a unique minimizer by completing the square. [A2, F3, F4, algebra]

2.1 On each knot interval, the product $s''h'$ is absolutely continuous, so the fundamental theorem of calculus gives $\int s''h''=[s''h']-\int s'''h'$. Summing over the intervals, the interior boundary terms cancel because $s''$ and $h'$ are continuous. At each outer endpoint, $s''=0$ either on a linear tail or by the natural condition when that endpoint is a knot. The remaining terms are $-s'''|_{(t_j,t_{j+1})}(h(t_{j+1})-h(t_j))=0$. Thus $\int_a^b s''h''=0$. [F2, F3, step 1.1, algebra]

3.1 Since $g=s+h$, expanding the square and applying step 2.1 yields $\int_a^b|g''|^2=\int_a^b|s''|^2+\int_a^b|h''|^2.$ Also $s(x_i)=g(x_i)$ for every observed input, so their data residual terms agree. Therefore $J(g)=J(s)+\lambda\int_a^b|h''|^2\ge J(s)$, with equality only if $h''=0$ almost everywhere. [A2, F4, step 2.1, algebra, step 1.1, F3]

4.1 Let $s_*$ be this finite-dimensional minimizer. Step 3.1 shows $J(g)\ge J(s_*)$ for every $g\in W^{2,2}$. If equality holds, then $h''=0$ almost everywhere, so by [F2] $h$ is affine; its zero values at the two distinct knots $t_1,t_r$ force $h=0$. Thus $s_*$ is the unique minimizer over the full Sobolev class, and its natural cubic form and linear tails are those of [F3]. [A2, F2, F3, step 3.1, step 1.2, algebra, step 1.1] ∎