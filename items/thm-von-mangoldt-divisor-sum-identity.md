---
id: thm-von-mangoldt-divisor-sum-identity
kind: theorem
title: "The divisor sum of von Mangoldt is the arithmetic-function logarithm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-convolution, def-natural-logarithm, def-von-mangoldt-function, thm-canonical-prime-factorisation, thm-natural-logarithm-laws]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Exercise 2.51"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
pipeline_run: null
---

## Statement

For every positive integer $n$,

$$ \sum_{\substack{d\mid n\\d>0}} \Lambda(d)=\log n. $$

Equivalently, if the arithmetic function $\log$ is defined by $n\mapsto\log n$,
then

$$ \mathbf 1 * \Lambda=\log. $$

## Facts & Assumptions

**Given:** A positive integer $n$.

## Proof

**Proof technique:** direct.

1.1 Write the canonical prime factorization of $n$ as $n=\prod_{i<r} p_i^{e_i}$ using [[thm-canonical-prime-factorisation]]. A positive divisor of $n$ contributes to the sum only when it is a prime power $p_i^j$, because [[def-von-mangoldt-function]] is zero on every other divisor. Thus $\sum_{d\mid n} \Lambda(d)=\sum_{i<r}\sum_{j=1}^{e_i}\log p_i=\sum_{i<r} e_i\log p_i$. [given, algebra]

2.1 Repeatedly applying the product law from [[thm-natural-logarithm-laws]] gives $\log n=\log(\prod_{i<r} p_i^{e_i})=\sum_{i<r}\log(p_i^{e_i})=\sum_{i<r} e_i\log p_i$. For $n=1$ both sums are empty, so the same formula gives $0=\log 1$. [step 1.1, algebra]

3.1 Comparing the two expressions in steps 1.1 and 2.1 proves the divisor-sum identity, and the convolution form is exactly [[def-dirichlet-convolution]] with the constant-one function. [step 1.1, step 2.1] ∎
