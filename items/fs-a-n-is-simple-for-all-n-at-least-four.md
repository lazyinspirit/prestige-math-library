---
id: fs-a-n-is-simple-for-all-n-at-least-four
kind: false-statement
title: 'FALSE: $A_n$ is simple for every $n\ge4$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-conjugating-a-cycle-relabels-its-entries, def-normal-subgroup, def-alternating-group, cor-sign-from-disjoint-cycle-structure, cor-alternating-group-is-normal-and-has-half-the-elements, def-simple-group, thm-alternating-group-is-simple-for-n-at-least-five]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Simplicity of $A_n$"
      url: "https://judsonbooks.org/aata-files/aata-html/normal-section-simplicity-of-an.html"
pipeline_run: frontier-11
---

## Statement refuted

$A_n$ is simple for every $n\ge4$.

## Facts & Assumptions

**Given:** The boundary case $A_4$.

[F1] $A_4$ consists of the even permutations and has order $4!/2=12$ ([[def-alternating-group]], [[cor-alternating-group-is-normal-and-has-half-the-elements]]); moreover $\operatorname{sgn}(\sigma)=(-1)^{n-c(\sigma)}$ when fixed points are included as $1$-cycles ([[cor-sign-from-disjoint-cycle-structure]]).

[F2] Conjugation relabels cycle entries ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F3] Conjugation-invariant subgroups are normal ([[def-normal-subgroup]]), while a simple group has no proper nontrivial normal subgroup ([[def-simple-group]]).

[F4] The valid boundary is that $A_n$ is simple for every $n\ge5$ ([[thm-alternating-group-is-simple-for-n-at-least-five]]).

## Counterexample

**Proof technique:** counterexample.

1.1 Each double transposition has two cycles and hence sign $(-1)^{4-2}=+1$ by [F1]. Thus $V=\{1,(12)(34),(13)(24),(14)(23)\}$ lies in $A_4$, and direct multiplication shows it is a subgroup of order $4$. [F1, algebra]

2.1 By [F2], conjugation relabels a double transposition to another member of $V$. Thus [F3] makes $V\trianglelefteq A_4$. [F2, F3, step 1.1]

2.2 Since $1<4<12$, $V$ is proper and nontrivial, so [F3] shows that $A_4$ is not simple. [F1, F3, step 1.1]

3.1 This refutes the proposed lower bound $4$; [F4] records that $5$ is the correct one. [F4, step 2.2] ∎
