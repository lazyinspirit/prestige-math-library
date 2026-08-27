---
id: fs-distinct-groups-have-distinct-cycle-indices
kind: false-statement
title: "FALSE: nonisomorphic groups acting on finite sets always have different cycle indices"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cycle-index-of-a-permutation-group]
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

**False claim:** if two finite groups are not isomorphic, then every action of
the first has a different cycle index from every action of the second.

## Facts & Assumptions

**Given:** the set $X=\{1,2,3,4\}$ and the permutation $\tau=(1\,2)(3\,4)$.

[F1] The cycle index averages the cycle monomials of the acting permutations ([[def-cycle-index-of-a-permutation-group]]).

## Refutation

**Proof technique:** direct.

1.1 Let $C_4=\langle g\rangle$ act on $X$ through the quotient map $g \mapsto \tau$. Then the two even powers of $g$ act as the identity and the two odd powers act as $\tau$, so $Z_{C_4}(X)=\frac14\left(2s_1^4+2s_2^2\right)=\frac12(s_1^4+s_2^2)$. [F1, algebra]

1.2 Let $V_4=\{1,a,b,ab\}$ act on $X$ through a quotient $V_4 \twoheadrightarrow \{1,\tau\}$ with kernel of size $2$. Then again two group elements act as the identity and two act as $\tau$, so $Z_{V_4}(X)=\frac14\left(2s_1^4+2s_2^2\right)=\frac12(s_1^4+s_2^2)$. [F1, algebra]

2.1 The groups $C_4$ and $V_4$ are not isomorphic, but steps 1.1 and 1.2 give the same cycle index. Therefore the displayed claim is false. [step 1.1, step 1.2] ∎
