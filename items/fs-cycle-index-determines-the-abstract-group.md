---
id: fs-cycle-index-determines-the-abstract-group
kind: false-statement
title: "FALSE: the cycle index of a permutation action determines the abstract group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cycle-index-of-a-permutation-group,
       fs-distinct-groups-have-distinct-cycle-indices]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
pipeline_run: null
---

## Statement

**False claim:** once one knows the cycle index of a finite permutation action,
the acting group is determined up to isomorphism.

## Facts & Assumptions

**Given:** the four-point set $X=\{1,2,3,4\}$ and the permutation $\tau=(1\,2)(3\,4)$.

[F1] The cycle index averages the cycle monomials of the acting permutations ([[def-cycle-index-of-a-permutation-group]]).

## Refutation

**Proof technique:** direct.

1.1 Let $C_4=\langle g\rangle$ act on $X$ through the quotient map $g \mapsto \tau$. Then two elements act as the identity and two act as $\tau$, so [F1] gives the cycle index $\frac14(2s_1^4+2s_2^2)=\frac12(s_1^4+s_2^2)$. [F1, algebra]

2.1 Let $V_4$ act on $X$ through a quotient onto $\{1,\tau\}$ with kernel of size $2$. Again two elements act as the identity and two act as $\tau$, so the same calculation gives the same cycle index $\frac12(s_1^4+s_2^2)$. [F1, step 1.1, algebra]

3.1 The abstract groups $C_4$ and $V_4$ are not isomorphic, so equal cycle index does not determine the acting group. Therefore the displayed claim is false. [step 1.1, step 2.1] ∎
