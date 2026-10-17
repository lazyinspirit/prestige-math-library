---
id: prop-polynomial-coefficient-sequences-and-trimmed-lists-agree
kind: proposition
title: 'Finitely supported coefficient sequences and trimmed finite coefficient lists define the same formal polynomials'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-polynomial-ring-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Section 22'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Finitely supported coefficient sequences and finite coefficient lists with trailing zeros removed describe the same formal polynomials. Under this correspondence, coefficientwise addition, convolution multiplication, degree, leading coefficient, constants, and the indeterminate agree.

## Facts & Assumptions

**Given:** A commutative ring $R$, the sequence model $R[x]$, and the convention that the zero list is the one-term list $(0)$ while every nonzero trimmed list ends in a nonzero coefficient.

[L1] A polynomial over $R$ is a finitely supported sequence, with coefficientwise addition and convolution multiplication ([[def-polynomial-ring-over-a-commutative-ring]]).

[L2] A nonzero polynomial has degree equal to the largest index of a nonzero coefficient and leading coefficient equal to the coefficient at that index; the zero polynomial has neither ([[def-polynomial-degree-leading-coefficient-and-monic]]).

## Proof

**Proof technique:** direct.

1.1 Send a nonzero sequence $a$ to $(a_0,\ldots,a_{\deg a})$, send the zero sequence to $(0)$, and send a trimmed list $(c_0,\ldots,c_n)$ to the sequence equal to $c_i$ for $i\le n$ and zero for $i>n$; [L2] shows that each construction lands in the stated class and that the two maps are inverse. [given, L1, L2, construct]

2.1 Padding a trimmed list by zeros does not change any coefficient, so the inverse maps preserve coefficientwise sums and every convolution coefficient; [L2] then gives preservation of degree and leading coefficient, and the displayed constant and indeterminate sequences correspond to their usual one-term and two-term lists. [step 1.1, L1, L2, algebra] ∎
