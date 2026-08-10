---
id: cor-order-of-a-permutation-from-its-cycle-lengths
kind: corollary
title: 'The order of a permutation is the least positive common multiple of its nontrivial cycle lengths, with value $1$ for the identity'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-disjoint-cycle-decomposition, lem-disjoint-cycles-commute, def-order-in-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'J. S. Milne, Group Theory, §4, cycle decompositions'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
pipeline_run: null
---

## Statement

Let the nontrivial cycles in the disjoint-cycle decomposition of a permutation
$\sigma$ have lengths $d_1,\ldots,d_r$. The order of $\sigma$ is the least
positive natural number divisible by every $d_i$. For the identity, where
$r=0$, the order is $1$.

## Facts & Assumptions

**Given:** A permutation $\sigma$ of a finite set and its order as the least positive exponent giving the identity.

[L1] Every finite permutation has a disjoint-cycle decomposition, unique up to reordering and cyclic rotation ([[thm-disjoint-cycle-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 Write $\sigma=\gamma_1\cdots\gamma_r$ as in [L1]. Since the factors commute, $\sigma^k=\gamma_1^k\cdots\gamma_r^k$ for every natural $k$. [given, L1]

2.1 A cycle of length $d_i$ has $k$-th power equal to the identity exactly when $d_i$ divides $k$; because the supports are disjoint, $\sigma^k$ is the identity exactly when every $\gamma_i^k$ is the identity. [step 1.1, L1]

3.1 Thus the positive exponents giving the identity are precisely the positive common multiples of $d_1,\ldots,d_r$, so their least element is the order of $\sigma$. If $r=0$, then $\sigma$ is the identity and its order is $1$. [step 2.1, L1] ∎
