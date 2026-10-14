---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
id: ex-geometrically-summable-bernoulli-shift
kind: example
title: A geometrically summable Bernoulli shift
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps: [cor-countable-independent-copies-exist, def-axiom-of-choice, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-independent-random-elements, def-l2-m-approximable-causal-bernoulli-shift, thm-dominated-convergence, thm-factorization-of-expectations-for-independent-variables, thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Statement

Let $(\epsilon_t)_{t\in\mathbb Z}$ be iid Rademacher variables, put
$e(u)=1$ in $H=L^2([0,1],dt;\mathbb R)$, and define
$$X_t=\left(\sum_{k=0}^{\infty}2^{-k}\epsilon_{t-k}\right)e.$$
The series converges absolutely for every sign sequence. Its physical
dependence coefficients are
$$\delta_m^2=\frac83\,4^{-m},$$
so they are summable. Its long-run covariance is $4(e\otimes e)$, and under
AC the Hilbert-valued CLT gives a centered Gaussian limit with that
covariance.

## Facts & Assumptions

**Given:** AC and countably many iid Rademacher innovations.

[A1] AC supplies Countable Choice and the countable independent family used
here ([[def-axiom-of-choice]], [[cor-countable-independent-copies-exist]]).

[F1] For fixed $m$, the replacement keeps coefficients $k<m$ and uses
independent copies for all $k\ge m$; $\delta_m$ is the resulting $L^2(H)$
error ([[def-l2-m-approximable-causal-bernoulli-shift]]).

[F2] The stated two-point Rademacher law gives mean zero and variance one;
independence means independence of the generated sigma-algebras, and
expectations of independent integrable products factor
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]],
[[def-independent-random-elements]],
[[thm-factorization-of-expectations-for-independent-variables]]). Dominated
convergence passes expectations through uniformly bounded partial sums
([[thm-dominated-convergence]]).

[F3] Under AC, a centered $L^2$-approximable causal shift has the Hilbert
valued CLT with its long-run covariance operator
([[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]]).

## Proof

**Given:** The innovations and process in the Statement.

1.1 For every input sequence with $|\epsilon_t|=1$, $\sum_{k\ge0}|2^{-k}\epsilon_{t-k}|\le2$, so the series converges absolutely and uniformly over the product space. Its partial sums are product-measurable and bounded by $2$, so their pointwise limit is a Borel causal map. Finite partial-sum variances are $\sum_{k\le N}4^{-k}$ by [F2]; the uniform bound and dominated convergence give centering and $\mathbb E\|X_0\|_H^2=\sum_{k\ge0}4^{-k}=4/3<\infty$. For the replacement, the first $m$ terms cancel; finite tails are independent centered differences with variance $2\sum_{k=m}^N4^{-k}$ and are bounded in absolute value by $2\sum_{k=m}^\infty2^{-k}$. Dominated convergence [F2] passes these variances to the infinite tail, giving $\delta_m^2=2\sum_{k=m}^\infty4^{-k}=\frac83\,4^{-m}.$ Thus $\sum_{m\ge1}\delta_m=\sqrt{8/3}\sum_{m\ge1}2^{-m}<\infty$. [A1, F1, F2, construct, algebra]

2.1 For $j\ge0$, truncate both linear sums at index $N$. Their product is bounded by $4$ and converges pointwise to $X_0X_j$, so dominated convergence [F2] passes expectations to the limit. The finite sums share exactly innovations with indices $-k=j-(k+j)$; their coefficient products are $2^{-k}2^{-(k+j)}$, while all other products have zero expectation by [F2]. The finite shared-coefficient sums tend to $\sum_{k\ge0}2^{-k}2^{-(k+j)}$, giving $\gamma_j=\mathbb E\langle X_0,X_j\rangle_H =\frac43\,2^{-j}.$ Symmetry gives $\gamma_{-j}=\gamma_j$. Therefore the scalar long-run variance is $$\gamma_0+2\sum_{j\ge1}\gamma_j =\frac43+\frac83\sum_{j\ge1}2^{-j}=4,$$ and the operator is $4(e\otimes e)$. [F2, step 1.1, algebra]

3.1 Step 1.1 gives centering, a finite second moment and summable physical-dependence errors; step 2.1 gives the long-run covariance. Applying [F3] yields convergence of the normalized $H$-valued sums to a centered Gaussian with covariance $4(e\otimes e)$. [F3, step 1.1, step 2.1] ∎
