---
id: fs-induced-outer-measures-always-agree-with-finitely-additive-data
kind: false-statement
title: "FALSE: the covering construction agrees with every finitely additive source function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebra-of-subsets, def-outer-measure-induced-by-a-premeasure, def-countable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercises 1.7.4(iii) and 1.7.6"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

If a nonnegative set function on an algebra is finitely additive and vanishes at the empty set, then the countable-covering infimum agrees with it on the source algebra.

## Facts & Assumptions

**Given:** The finite-cofinite algebra $\mathcal A_0$ of $\mathbb N$ and $\mu_0(A)=0$ for finite $A$, $\mu_0(A)=+\infty$ for cofinite $A$.

[F1] The set function induced by $\mu_0$ assigns $E\subseteq X$ the infimum of $\sum_k\mu_0(A_k)$ over all countable algebra covers $E\subseteq\bigcup_kA_k$. ([[def-outer-measure-induced-by-a-premeasure]])

[F2] An algebra of subsets of $X$ contains $\varnothing$ and is closed under complements and finite unions. ([[def-algebra-of-subsets]])
## Refutation

**Proof technique:** direct.

1.1 The finite-cofinite family is an algebra by [F2]. For disjoint $A,B$, two cofinite sets cannot both occur; if both are finite, all three values are $0$, and if one is cofinite, the union and that set have value $+\infty$, so $\mu_0$ is finitely additive. [F2, algebra]

2.1 Apply the covering formula of [F1] to this source function. The singleton sequence $(\{k\})_{k\in\mathbb N}$ covers $\mathbb N$ with total cost $0$, so the covering infimum at $\mathbb N$ is $0$, while $\mu_0(\mathbb N)=+\infty$; hence finite additivity does not force agreement. [step 1.1, F1, algebra] ∎
