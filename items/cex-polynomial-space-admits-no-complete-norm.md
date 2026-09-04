---
id: cex-polynomial-space-admits-no-complete-norm
kind: counterexample
title: "The polynomial space admits no complete norm"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-banach-space-no-countably-infinite-hamel-basis,
       def-polynomial-ring-over-a-commutative-ring, def-linear-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Christopher Heil, A Basis Theory Primer"
      url: "https://heil.math.gatech.edu/papers/bases.pdf"
pipeline_run: frontier-29
---

## Statement refuted

**Refuted claim:** the polynomial space over a scalar field can be made into a
Banach space by some norm.

Let $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let $\mathbb K[x]$ be the
polynomial ring of [[def-polynomial-ring-over-a-commutative-ring]], regarded as
a vector space over $\mathbb K$. Then no norm on $\mathbb K[x]$ is complete.

## Facts & Assumptions

**Given:** A scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$ and the vector
space $\mathbb K[x]$ of polynomials in one indeterminate.

[L1] A Banach space has no countably infinite Hamel basis
([[thm-banach-space-no-countably-infinite-hamel-basis]]).

[L2] A basis is a linearly independent spanning subset
([[def-linear-basis]]).

[L3] The polynomial ring $\mathbb K[x]$ is the set of finite sums
$a_0+a_1x+\cdots+a_mx^m$ ([[def-polynomial-ring-over-a-commutative-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 The set $\{1,x,x^2,\dots\}$ spans $\mathbb K[x]$ by [L3], because every polynomial is a finite linear combination of monomials. It is linearly independent: if $a_0+a_1x+\cdots+a_mx^m=0$ as a polynomial, then every coefficient is $0$. Hence [L2] makes $\{1,x,x^2,\dots\}$ a countably infinite Hamel basis of $\mathbb K[x]$. [L2, L3, algebra]

2.1 If some norm on $\mathbb K[x]$ were complete, then [L1] would forbid the countably infinite Hamel basis from step 1.1. This contradiction shows that no norm on $\mathbb K[x]$ is complete. [L1, step 1.1, assume-contra, discharge-contradiction] ∎
