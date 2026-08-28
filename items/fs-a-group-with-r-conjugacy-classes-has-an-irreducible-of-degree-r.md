---
id: fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r
kind: false-statement
title: "False statement: a group with $r$ conjugacy classes has an irreducible representation of degree $r$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3 Section 3.4"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

**False claim.** If a finite group has $r$ conjugacy classes, then it has an
irreducible representation of degree $r$.

## Facts & Assumptions

**Given:** The quaternion group $Q_8$.

[L1] The group $Q_8$ has five conjugacy classes, but its irreducible complex degrees are $1,1,1,1,2$ ([[ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the relevant value is $r=5$, while the irreducible degrees of $Q_8$ are only $1,1,1,1,2$. [L1, given]

2.1 None of those degrees equals $5$, so the claim fails even for $Q_8$. Therefore a group with $r$ conjugacy classes need not have an irreducible representation of degree $r$. [step 1.1] ∎
