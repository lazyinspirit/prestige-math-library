---
id: ex-klein-four-is-normal-in-a-four
kind: example
title: '$V_4=\{1,(12)(34),(13)(24),(14)(23)\}$ is a proper nontrivial normal subgroup of $A_4$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-conjugating-a-cycle-relabels-its-entries, def-normal-subgroup, def-alternating-group, cor-sign-from-disjoint-cycle-structure, cor-alternating-group-is-normal-and-has-half-the-elements]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Simplicity of $A_n$"
      url: "https://judsonbooks.org/aata-files/aata-html/normal-section-simplicity-of-an.html"
pipeline_run: frontier-11
---

## Example

In $A_4$, set
$$V_4=\{1,(12)(34),(13)(24),(14)(23)\}.$$
Then $V_4$ is a proper nontrivial normal subgroup.

## Facts & Assumptions

**Given:** The displayed subset $V_4\subseteq A_4$.

[F1] $A_4$ is the kernel of sign ([[def-alternating-group]]), and $\operatorname{sgn}(\sigma)=(-1)^{n-c(\sigma)}$ when fixed points are included as $1$-cycles ([[cor-sign-from-disjoint-cycle-structure]]).

[F2] Conjugation relabels every cycle entry ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F3] A subgroup is normal when it is invariant under conjugation ([[def-normal-subgroup]]).

[F4] $|A_4|=4!/2=12$ ([[cor-alternating-group-is-normal-and-has-half-the-elements]]).

## Verification

**Proof technique:** direct.

1.1 Every displayed double transposition has two cycles and hence sign $(-1)^{4-2}=+1$ by [F1]. The product of two distinct nonidentity displayed elements is the third, and each is its own inverse; hence $V_4$ is a subgroup of $A_4$. [F1, algebra]

1.2 By [F2], conjugation by any permutation relabels a double transposition to another double transposition. Thus $V_4$ is invariant under $A_4$-conjugation, and [F3] makes it normal. [F2, F3]

2.1 Its order is $4$, strictly between $1$ and $12=|A_4|$ from [F4], so it is nontrivial and proper. [F4, algebra] ∎
