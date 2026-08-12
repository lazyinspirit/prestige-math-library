---
id: ex-negative-binomial-series
kind: example
title: "Negative binomial series: $(1-x)^{-m}=\\sum_{n\\ge0}\\binom{m+n-1}{n}x^n$ for $m\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-formal-power-series-unit-criterion, prop-coefficient-extraction-linearity-and-extensionality, thm-formal-exponential-logarithm-identities, def-binomial-coefficient, thm-stars-and-bars]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Example

For every commutative ring $R$ and integer $m\ge1$,

$$(1-x)^{-m}=\sum_{n\ge0}\binom{m+n-1}{n}x^n.$$

The binomial coefficient acts in $R$ by repeated addition of $1$. When $R$ is a commutative $\mathbb Q$-algebra, this repeated inverse power agrees with the formal binomial power of [[thm-formal-exponential-logarithm-identities]].

## Facts & Assumptions

**Given:** The unit criterion [[thm-formal-power-series-unit-criterion]], coefficient convolution and extensionality from [[prop-coefficient-extraction-linearity-and-extensionality]], the formal power laws of [[thm-formal-exponential-logarithm-identities]], and the counting definition of [[def-binomial-coefficient]].

The theorem [[thm-stars-and-bars]] states that, for $m\ge1$, the number of weak compositions of $n$ into $m$ parts is $\binom{n+m-1}{m-1}$.

## Verification

**Proof technique:** count the product convolution.

1.1 Put $s=\sum_{j\ge0}x^j$. Its constant coefficient in $(1-x)s$ is $1$, and every positive-degree coefficient is $1-1=0$, so extensionality and inverse uniqueness give $s=(1-x)^{-1}$. Hence $(1-x)^{-m}$ is the product of $m$ copies of $s$ over every commutative ring. Over a commutative $\mathbb Q$-algebra, the formal exponent law gives the same series. [given]

2.1 The coefficient of $x^n$ in this product is the number of $m$-tuples $(j_1,\ldots,j_m)$ of nonnegative integers with sum $n$. The stars-and-bars count makes this $\binom{n+m-1}{m-1}=\binom{m+n-1}{n}$. At $n=0$ the unique tuple is all zero, giving coefficient $1$. [step 1.1, given]

3.1 Coefficient extensionality now gives the asserted series identity for every $m\ge1$. When $m=1$ the coefficient is $\binom n n=1$, recovering the series $s$ from step 1.1; step 2.1 already checks $n=0$. [step 1.1, step 2.1, given] ∎
