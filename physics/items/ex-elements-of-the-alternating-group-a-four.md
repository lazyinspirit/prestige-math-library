---
id: ex-elements-of-the-alternating-group-a-four
kind: example
title: '$A_4$ consists of the identity, eight $3$-cycles, and three products of disjoint transpositions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-disjoint-cycle-decomposition, cor-sign-from-disjoint-cycle-structure,
       cor-alternating-group-is-normal-and-has-half-the-elements]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1, Example 8'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Example

The alternating group $A_4$ consists of

- the identity;
- the eight three-cycles $(0\,1\,2)$, $(0\,2\,1)$, $(0\,1\,3)$,
  $(0\,3\,1)$, $(0\,2\,3)$, $(0\,3\,2)$, $(1\,2\,3)$, and
  $(1\,3\,2)$;
- the three products $(0\,1)(2\,3)$, $(0\,2)(1\,3)$, and
  $(0\,3)(1\,2)$.

## Facts & Assumptions

**Given:** The symmetric group $S_4$ and its alternating subgroup $A_4$.

[L1] Every permutation has a unique disjoint-cycle type, and a cycle of length $k$ has sign $(-1)^{k-1}$ ([[thm-disjoint-cycle-decomposition]], [[cor-sign-from-disjoint-cycle-structure]]).

[L2] The alternating group has $4!/2=12$ elements in degree $4$ ([[cor-alternating-group-is-normal-and-has-half-the-elements]]).

## Verification

**Proof technique:** direct.

1.1 The possible cycle types in $S_4$ are the identity; one transposition; two disjoint transpositions; a three-cycle with one fixed point; and a four-cycle. By [L1], exactly the identity, the three-cycles, and the products of two disjoint transpositions are even. There are two orientations on each of the four three-point supports and three partitions into two unordered pairs, giving exactly the displayed list. [given, L1]

2.1 The list has $1+8+3=12$ elements, and [L2] gives $|A_4|=4!/2=12$, so it contains every even permutation and no other element. [step 1.1, L1, L2] ∎
