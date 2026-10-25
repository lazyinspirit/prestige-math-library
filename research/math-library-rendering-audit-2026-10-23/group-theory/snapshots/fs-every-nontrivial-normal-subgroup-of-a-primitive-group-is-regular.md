---
id: fs-every-nontrivial-normal-subgroup-of-a-primitive-group-is-regular
kind: false-statement
title: "FALSE: every nontrivial normal subgroup of a faithful primitive group is regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-alternating-group-is-normal-and-has-half-the-elements, ex-natural-actions-of-symmetric-and-alternating-groups, lem-k-transitive-actions-are-k-homogeneous-and-lower-transitive, prop-doubly-transitive-actions-are-primitive]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

Every nontrivial normal subgroup of a faithful primitive group is regular.

## Facts & Assumptions

**Given:** The natural action of $S_n$ on $\{1,\dots,n\}$ for $n \ge 4$.

[L1] The natural action of $S_n$ is sharply $n$-transitive, and hence $n$-transitive; $k$-transitivity implies every lower transitivity level ([[ex-natural-actions-of-symmetric-and-alternating-groups]], [[lem-k-transitive-actions-are-k-homogeneous-and-lower-transitive]]).

[L2] For every natural $n$, the alternating group $A_n$ is a normal subgroup of $S_n$ ([[cor-alternating-group-is-normal-and-has-half-the-elements]]).

[L3] Every doubly transitive action is primitive ([[prop-doubly-transitive-actions-are-primitive]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2], $A_n$ is normal in $S_n$, and it is nontrivial because it contains the $3$-cycle $(1\,2\,3)$. The natural $S_n$-action is faithful, and [L1] makes it doubly transitive, hence primitive by [L3]. [L1, L2, L3, algebra]

2.1 The element $(1\,2\,3)\in A_n$ fixes the point $4$, so the action of $A_n$ is not free and therefore not regular. Thus $A_n$ is a nontrivial normal subgroup of a faithful primitive action that is not regular. [step 1.1, algebra] ∎
