---
id: lem-compression-binomial-sum-bound
kind: lemma
title: "A binomial-sum bound for compression sample sizes"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-binomial-coefficient
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-binomial-theorem
  - def-integer-power
  - lem-power-monotone
  - lem-of-naturals-positive
  - lem-exponential-dominates-one-plus-x
  - thm-exponential-addition-formula
  - def-real-exponential-function-and-e
  - def-natural-numbers
  - def-canonical-natural
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sally Floyd and Manfred Warmuth, Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension, §5 and Appendix"
      url: "https://mwarmuth.bitbucket.io/pubs/J30.pdf"
---

## Statement

For natural numbers $m,d$ with $1\le d\le m$,
$$\sum_{i=0}^{d}\iota\binom{m}{i}\le\left(\frac{e\,\iota(m)}{\iota(d)}\right)^d,$$
where $\binom{m}{i}$ is the number of $i$-element subsets of an $m$-element set, $\iota$ is the canonical embedding of naturals into $\mathbb R$, and $e=\exp(1)$.

## Statement references

[[def-finite-sum]]: defines the real finite sums in the displayed inequality.

[[lem-finite-sum-laws]]: real finite sums preserve inequalities between corresponding terms.

[[def-binomial-coefficient]]: $\binom{m}{i}$ counts the $i$-element subsets of an $m$-element set.

[[def-canonical-natural]]: $\iota(n)$ is the canonical real associated with the natural number $n$.

[[lem-of-naturals-positive]]: $\iota(n)>0$ whenever $n\ge1$.

[[def-integer-power]]: the exponent $d$ denotes a natural power in the real field.

[[def-real-exponential-function-and-e]]: $e=\exp(1)$.

[Floyd and Warmuth, *Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension*, §5 and Appendix](https://mwarmuth.bitbucket.io/pubs/J30.pdf): their compression sample-size derivation uses the same binomial sum; this item proves the estimate below directly.

## Facts & Assumptions

**Given:** Natural numbers $m,d$ satisfying $1\le d\le m$.

[F1] The binomial theorem gives $\sum_{i=0}^{m}\iota\binom{m}{i}x^i=(1+x)^m$ for real $x$.
[[thm-binomial-theorem]]

[F2] If $0<x\le1$ and $i\le d$, then $x^d\le x^i$, by monotonicity of natural powers in the exponent on $(0,1]$.
[[lem-power-monotone]]

[F3] $1+x\le\exp(x)$ for every real $x$.
[[lem-exponential-dominates-one-plus-x]]

[F4] Natural powers use the recursive field-power convention; they preserve order on nonnegative bases, and repeated use of the exponential addition law gives $(\exp(x))^m=\exp(\iota(m)x)$ and $(\exp(1))^d=\exp(\iota(d))$, where $e=\exp(1)$.
[[def-integer-power]], [[lem-power-monotone]], [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]]

[F5] The displayed expressions are real finite sums, and if each term of one such sum is at most the corresponding term of another, then the first sum is at most the second.
[[def-finite-sum]], [[lem-finite-sum-laws]]

[F6] The indices $m,d,i$ are natural numbers, each $\binom{m}{i}$ is a natural count, so its canonical real is nonnegative; $\iota(m)$ and $\iota(d)$ are positive because $m,d\ge1$.
[[def-natural-numbers]], [[def-binomial-coefficient]], [[def-canonical-natural]], [[lem-of-naturals-positive]]

## Proof

**Given:** Natural numbers $m,d$ satisfying $1\le d\le m$.

1.1 Put $x=\iota(d)/\iota(m)$, so $0<x\le1$ by [F6] and $d\le m$. For every $0\le i\le d$, [F2] gives $x^d\le x^i$; multiplying by the nonnegative $\iota\binom{m}{i}$, using [F5] to sum, and extending the sum by nonnegative terms from [F6], then applying [F1], yields $x^d\sum_{i=0}^{d}\iota\binom{m}{i}\le\sum_{i=0}^{d}\iota\binom{m}{i}x^i\le\sum_{i=0}^{m}\iota\binom{m}{i}x^i=(1+x)^m$. [given, F1, F2, F5, F6, algebra]

2.1 By [F3], $1+x\le\exp(x)$; both sides are nonnegative, so [F4] gives $(1+x)^m\le(\exp(x))^m=\exp(\iota(m)x)=\exp(\iota(d))=e^d$. Since $x^d=(\iota(d)/\iota(m))^d>0$ by [F6], divide step 1.1 by this quantity to obtain the stated bound. [given, F3, F4, F6, step 1.1, algebra] ∎

