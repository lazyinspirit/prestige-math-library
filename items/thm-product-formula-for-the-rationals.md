---
id: thm-product-formula-for-the-rationals
kind: theorem
title: "The product formula for the rationals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-place-of-the-rationals, def-p-adic-absolute-value-on-the-rationals, thm-canonical-prime-factorisation]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 7.2"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Statement

For every nonzero rational number $x$,

$$\prod_{v \le \infty} |x|_v = 1,$$

where $v$ runs over the archimedean place and all prime places, and all but
finitely many factors are equal to $1$.

## Facts & Assumptions

**Given:** A nonzero rational number $x$.

[L1] The finite places of $\mathbb Q$ are represented by the normalized
$p$-adic absolute values ([[def-place-of-the-rationals]],
[[def-p-adic-absolute-value-on-the-rationals]]).

[L2] A nonzero rational has a finite prime factorization in lowest terms
([[thm-canonical-prime-factorisation]]).

## Proof

**Proof technique:** direct.

1.1 Write $$x = \pm \prod_{i=1}^r p_i^{e_i}$$ with distinct primes $p_i$ and integers $e_i$, as supplied by [L2]. Then $|x|_{p_i} = p_i^{-e_i}$ for the listed primes and $|x|_q = 1$ for every other prime $q$. [L1, L2, given, algebra]

2.1 The archimedean factor is $|x|_\infty = \prod_{i=1}^r p_i^{e_i}$, so $$|x|_\infty \prod_{i=1}^r |x|_{p_i} = \left(\prod_{i=1}^r p_i^{e_i}\right)\left(\prod_{i=1}^r p_i^{-e_i}\right) = 1.$$ Since the omitted prime factors are all $1$, this is exactly the full product formula. [step 1.1, algebra] ∎
