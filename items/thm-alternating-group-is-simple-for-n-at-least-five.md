---
id: thm-alternating-group-is-simple-for-n-at-least-five
kind: theorem
title: '$A_n$ is simple for every $n\ge5$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-simple-group, lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle, lem-normal-subgroup-containing-a-three-cycle-is-a-n, def-alternating-group, cor-sign-from-disjoint-cycle-structure]
justified_by: []
aliases: []
landmark: true
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

The alternating group $A_n$ is simple for every $n\ge5$.

## Facts & Assumptions

**Given:** $n\ge5$.

[F1] A group is simple when it is nontrivial and its only normal subgroups are the trivial subgroup and the whole group ([[def-simple-group]]).

[F2] Every nontrivial normal subgroup of $A_n$ contains a $3$-cycle ([[lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle]]).

[F3] A normal subgroup of $A_n$ containing a $3$-cycle is all of $A_n$ ([[lem-normal-subgroup-containing-a-three-cycle-is-a-n]]).

[F4] The group $A_n$ is the kernel of sign ([[def-alternating-group]]), and a $k$-cycle has sign $(-1)^{k-1}$ ([[cor-sign-from-disjoint-cycle-structure]]).

## Proof

**Proof technique:** direct.

1.1 The cycles $(1\,2\,3)$ and $(3\,4\,5)$ have sign $(-1)^2=+1$ by [F4], so they belong to $A_n$; they do not commute, so $A_n$ is nontrivial. [F4, algebra]

1.2 Let $N\trianglelefteq A_n$. If $N$ is nontrivial, [F2] gives a $3$-cycle in $N$, and [F3] then gives $N=A_n$. [F2, F3]

2.1 Thus the only normal subgroups are $\{1\}$ and $A_n$; together with step 1.1, [F1] proves simplicity. [F1, step 1.1, step 1.2] ∎
