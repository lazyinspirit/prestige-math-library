---
id: ex-binomial-one-sided-ump-test
kind: example
title: A randomized UMP test for a binomial model
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps: [def-monotone-likelihood-ratio-family,
       thm-karlin-rubin-one-sided-ump-test,
       lem-randomized-threshold-has-exact-level, def-randomized-test,
       def-measure-kernel-and-probability-kernel,
       def-test-size-and-power]
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited only through the MLR definition's density-version convention; all displayed binomial masses are finite and explicit.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Jun Shao, Stat 610 Mathematical Statistics, Lecture 11, Theorem 8.3.17, PDF pp. 9–10
      url: https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf
---

## Example

Assume AC. Let $X=(X_1,X_2,X_3)\in\{0,1\}^3$ have mass function
$P_p(X=x)=p^{T(x)}(1-p)^{3-T(x)}$ for $0<p<1$, where
$T(x)=x_1+x_2+x_3$. For $H_0:p\le\tfrac12$ against $H_1:p>\tfrac12$,
the randomized test with rejection function
$\phi(x)=\mathbf1_{\{T(x)>2\}}+\tfrac13\mathbf1_{\{T(x)=2\}}$
is UMP of level $\alpha=\tfrac14$.

## Verification

**Given:** The finite experiment and hypotheses in the statement.

[F1] In a family with MLR in $T$, the upper boundary-randomized threshold test calibrated at $p_0$ is UMP for $p\le p_0$ versus $p>p_0$. ([[thm-karlin-rubin-one-sided-ump-test]])

[F2] A randomized test is a binary-action probability kernel; its test function is a measurable rejection probability in $[0,1]$. ([[def-randomized-test]])

[F3] MLR means the likelihood ratio for every larger parameter is nondecreasing in $T$, including the extended-ratio support convention. ([[def-monotone-likelihood-ratio-family]])

[F4] The size of a test is the supremum of its null rejection probabilities, and level $\alpha$ means that size is at most $\alpha$. ([[def-test-size-and-power]])

[F5] A probability kernel assigns a probability measure to each observation and has measurable event-evaluation functions. ([[def-measure-kernel-and-probability-kernel]])

1.1 The sample space has eight points, and $\sum_{x\in\{0,1\}^3}p^{T(x)}(1-p)^{3-T(x)}=(p+(1-p))^3=1$, so the masses define a probability law; the statistic $T$ is measurable on the finite power-set space. [given, algebra]

1.2 For $0<p_1<p_2<1$, the likelihood ratio is $\frac{p_2^{T(x)}(1-p_2)^{3-T(x)}}{p_1^{T(x)}(1-p_1)^{3-T(x)}}=\left(\frac{1-p_2}{1-p_1}\right)^3\left(\frac{p_2(1-p_1)}{p_1(1-p_2)}\right)^{T(x)}$. The second base exceeds one since $p_2(1-p_1)-p_1(1-p_2)=p_2-p_1>0$, so the ratio increases with $T$ and [F3] applies. [given, F3, algebra]

1.3 At $p_0=1/2$, each point has mass $1/8$, with one point at $T=3$ and three at $T=2$; hence $P_{1/2}(T>2)=1/8$ and $P_{1/2}(T=2)=3/8$. The threshold $c=2,\gamma=1/3$ therefore has endpoint-null rejection probability $1/8+(1/3)(3/8)=1/4$. Define $K(x,B)=\phi(x)\mathbf1_{\{1\in B\}}+(1-\phi(x))\mathbf1_{\{0\in B\}}$ for $B\subseteq\{0,1\}$. The two weights are nonnegative and sum to one, and the formula is countably additive because each point belongs to at most one event in a disjoint sequence, so each section is a probability measure. Every event evaluation is measurable because the sample space is finite with its full sigma-algebra. Thus [F5] gives a probability kernel and [F2] makes it a randomized test with rejection function $\phi$. [given, F2, F5, algebra, construct]

2.1 By step 1.2 the family has MLR in $T$, and step 1.3 calibrates the upper boundary-randomized threshold at $p_0=1/2$ to $\alpha=1/4$. The Karlin–Rubin result [F1] therefore makes this test UMP of level $1/4$ for $H_0:p\le1/2$ versus $H_1:p>1/2$, with size and level interpreted by [F4]. [F1, F4, step 1.2, step 1.3] ∎
