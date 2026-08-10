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

[L2] Cycles with disjoint supports commute ([[lem-disjoint-cycles-commute]]).

[L3] The order of an element is the least positive natural exponent giving the identity ([[def-order-in-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Write $\sigma=\gamma_1\cdots\gamma_r$ as in [L1]. Since the factors commute by [L2], $\sigma^k=\gamma_1^k\cdots\gamma_r^k$ for every natural $k$. [given, L1, L2]

2.1 The $k$-th power of a $d_i$-cycle shifts its displayed entries by $k$ positions, so it is the identity exactly when $k\equiv0\pmod{d_i}$, equivalently when $d_i$ divides $k$. Because the supports are disjoint, $\sigma^k$ is the identity exactly when every $\gamma_i^k$ is the identity. [step 1.1, L1, L2]

3.1 Thus the positive exponents giving the identity are precisely the positive common multiples of $d_1,\ldots,d_r$, so their least element is the order of $\sigma$ by [L3]. If $r=0$, then $\sigma$ is the identity and its order is $1$. [step 2.1, L1, L3] ∎
