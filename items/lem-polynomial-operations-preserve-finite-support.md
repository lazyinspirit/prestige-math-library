---
id: lem-polynomial-operations-preserve-finite-support
kind: lemma
title: 'Coefficientwise sums and convolution products of finitely supported sequences are finitely supported'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-ring-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Section 22'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

If $a,b\colon\mathbb N\to R$ have finite support, then their coefficientwise sum and convolution product have finite support.

## Facts & Assumptions

**Given:** A commutative ring $R$ and finitely supported coefficient sequences $a,b\in R[x]$.

[L1] A coefficient sequence has finite support when it vanishes beyond some natural-number bound; addition is coefficientwise and multiplication is convolution ([[def-polynomial-ring-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Choose $M,N\in\mathbb N$ such that $a_i=0$ for $i>M$ and $b_j=0$ for $j>N$. [given, L1, choose]

2.1 If $k>\max\{M,N\}$ then $(a+b)_k=0$, and if $k>M+N$ then every pair $i+j=k$ has $i>M$ or $j>N$, so every summand $a_i b_j$ in $(ab)_k$ is zero; hence both sequences have finite support. [step 1.1, L1, algebra] ∎
