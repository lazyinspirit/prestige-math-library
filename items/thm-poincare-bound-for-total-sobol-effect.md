---
id: thm-poincare-bound-for-total-sobol-effect
kind: theorem
title: Coordinate Poincare inequalities bound total Sobol effects
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [thm-product-hoeffding-anova-decomposition, def-first-and-total-sobol-indices, lem-uniform-interval-poincare-inequality, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice, def-dependent-choice, def-product-coordinate-projections, lem-product-coordinate-projections-commute-and-contract]
proof_strategy: direct
axiom_use: Countable Choice and Dependent Choice are inherited only through the uniform-interval Poincare supplier; the ANOVA decomposition and the integration step add no stronger axiom.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Matieyendou Lamboni, Bertrand Iooss, Anne-Laure Popelin, and Fabrice Gamboa, Derivative-based global sensitivity measures: general links with Sobol' indices and numerical tests, §3"
      url: https://arxiv.org/pdf/1202.0943
    - title: "I.M. Sobol' and S. Kucherenko, Derivative based global sensitivity measures and their link with global sensitivity indices, §4, Theorem 2"
      url: https://www.andreasaltelli.eu/file/repository/DGSA_MATCOM_2009.pdf
---

## Statement

Assume Countable Choice and Dependent Choice. Let $X=(X_1,\ldots,X_d)$ have a finite product probability law, let $f$ be a real class in $L^2$, and choose a real product-measurable representative $F$ of $f$. Fix $i$ such that its marginal law is
$\mu_i(A)=\lambda(A\cap[a_i,b_i])/L_i$ with $L_i=b_i-a_i>0$. Assume that for
almost every fixed $x_{-i}$, the section
$x_i\mapsto F(x_i,x_{-i})$ is absolutely continuous and its derivative
$\partial_i F$ is square-integrable under the product law. If
$V=\operatorname{Var}(f(X))>0$, then
$$S_{T_i}\le \frac{L_i^2}{\pi^2}\,\frac{\mathbb E|\partial_i F(X)|^2}{V}.$$
More generally, the same conclusion holds with $L_i^2/\pi^2$ replaced by any
constant $C_i$ for which each such almost-everywhere coordinate section of $F$ satisfies
$\operatorname{Var}_{X_i}(g)\le C_i\mathbb E_{X_i}|g'|^2$.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice, the product law, a real product-measurable representative $F$ of a real $f\in L^2$, the regularity assumptions in the Statement, and positive output variance.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: for a nonempty set $X$, an entire relation $R$ on $X$, and $a\in X$, there is $x:\mathbb N\to X$ with $x_0=a$ and $x_n R x_{n+1}$ for every $n$.

[F1] [[thm-product-hoeffding-anova-decomposition]]: $f$ is the orthogonal sum of its product ANOVA components, each $f_u$ depends only on $X_u$, and $P_{u\setminus\{j\}}f_u=0$ for every $j\in u$.

[F2] [[def-first-and-total-sobol-indices]]: $VS_{T_i}=\sum_{u\ni i}V_u$ when $V>0$.

[F3] [[lem-uniform-interval-poincare-inequality]]: for the uniform law on an interval of length $L_i$, the coordinate variance of an absolutely continuous section is at most $(L_i^2/\pi^2)$ times its derivative's second moment.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the almost-everywhere coordinate inequalities may be integrated over the remaining product coordinates.

[F5] [[def-product-coordinate-projections]]: $P_{-i}$ averages only coordinate $i$ and lifts the section average to the full product space.

[F6] [[lem-product-coordinate-projections-commute-and-contract]]: $P_JP_K=P_{J\cap K}$ for every pair of coordinate subsets.

## Proof

**Given:** The hypotheses, axioms [A1]–[A2], and facts [F1]–[F6].

1.1 For $i\notin u$, [F5] and dependence only on $X_u$ give $P_{-i}f_u=f_u$. For $i\in u$, dependence gives $P_uf_u=f_u$, so [F6] yields $P_{-i}f_u=P_{-i}P_uf_u=P_{u\setminus\{i\}}f_u=0$ by the coordinate-centering property in [F1]. Linearity and reconstruction in [F1] therefore give $f-P_{-i}f=\sum_{u\ni i}f_u$. Orthogonality [F1] and the index definition [F2] give $\|f-P_{-i}f\|_2^2=\sum_{u\ni i}V_u=VS_{T_i}$. [F1, F2, F5, F6]

2.1 For almost every $x_{-i}$, apply [F3] to the section of the chosen representative $F$. Its variance is $\int|F-P_{-i}F|^2d\mu_i$, and its derivative moment is $\int|\partial_i F|^2d\mu_i$. Integrate the inequality over $x_{-i}$; [F4] justifies the iterated integrals and gives $\|f-P_{-i}f\|_2^2\le(L_i^2/\pi^2)\mathbb E|\partial_i F(X)|^2$. [A1, A2, F3, F4, F5, step 1.1]

3.1 Substitute the identity from step 1.1 into step 2.1 and divide by $V>0$. This proves the displayed bound. The same calculation with any valid coordinate constant $C_i$ proves the stated general form. [F2, step 1.1, step 2.1, given, algebra] ∎
