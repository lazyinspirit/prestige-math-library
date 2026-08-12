---
id: cor-three-cycles-form-one-conjugacy-class-in-a-n
kind: corollary
title: 'All $3$-cycles are conjugate in $A_n$ for $n\ge5$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-symmetric-permutations-are-conjugate-iff-same-cycle-type, thm-alternating-conjugacy-class-splitting-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Simplicity of $A_n$"
      url: "https://judsonbooks.org/aata-files/aata-html/normal-section-simplicity-of-an.html"
pipeline_run: frontier-11
---

## Statement

For $n\ge5$, all $3$-cycles in $A_n$ lie in one $A_n$-conjugacy class.

## Facts & Assumptions

**Given:** $n\ge5$.

[F1] Two permutations in $S_n$ are conjugate exactly when their cycle types agree ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]]).

[F2] An even $S_n$-class splits in $A_n$ exactly when all cycle lengths, including fixed points, are odd and distinct ([[thm-alternating-conjugacy-class-splitting-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Every $3$-cycle has cycle type consisting of one $3$-cycle and $n-3$ fixed points, so [F1] puts all of them in one $S_n$-class. [F1]

2.1 Since $n-3\ge2$, the length $1$ is repeated. Thus [F2] says that this class does not split in $A_n$. [F2, step 1.1]

3.1 Therefore all $3$-cycles form one $A_n$-conjugacy class. [step 1.1, step 2.1] ∎
