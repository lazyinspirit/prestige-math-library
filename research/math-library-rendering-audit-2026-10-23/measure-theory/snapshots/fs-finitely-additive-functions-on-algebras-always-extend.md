---
id: fs-finitely-additive-functions-on-algebras-always-extend
kind: false-statement
title: "FALSE: every finitely additive nonnegative function on an algebra extends to a measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebra-of-subsets, def-sigma-algebra, def-measure, def-countable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Section 1.7.2 and Exercise 1.7.6"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Every finitely additive function from an algebra of subsets to $[0,+\infty]$ that vanishes at the empty set extends to a measure on the generated sigma-algebra.

## Facts & Assumptions

**Given:** The power-set algebra $\mathcal P(\mathbb N)$ and the function $\lambda(A)=0$ for finite $A$ and $\lambda(A)=+\infty$ for infinite $A$.

[F1] An algebra of subsets of $X$ is a subfamily of $\mathcal P(X)$ containing $\varnothing$ and closed under complements and finite unions. ([[def-algebra-of-subsets]])

[F2] A measure vanishes at the empty set and is countably additive on every pairwise disjoint sequence in its sigma-algebra, beginning at index $0$ and allowing $+\infty$. ([[def-measure]])
## Refutation

**Proof technique:** direct.

1.1 The function vanishes at $\varnothing$. If $A$ and $B$ are disjoint and both finite, their union is finite and $0=0+0$; if their union is infinite, at least one of $A,B$ is infinite, so both $\lambda(A\cup B)$ and $\lambda(A)+\lambda(B)$ are $+\infty$. Thus $\lambda$ is finitely additive on the algebra [F1]. [F1, algebra]

2.1 The algebra is already the sigma-algebra $\mathcal P(\mathbb N)$, so any extension must equal $\lambda$ there. But the disjoint singleton sequence has union $\mathbb N$, while $\lambda(\mathbb N)=+\infty$ and $\sum_{k=0}^{\infty}\lambda(\{k\})=0$, contradicting [F2]. [step 1.1, F2, algebra] ∎
