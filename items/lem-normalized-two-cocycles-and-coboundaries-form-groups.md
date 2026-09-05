---
id: lem-normalized-two-cocycles-and-coboundaries-form-groups
kind: lemma
title: "Normalized two-cocycles and coboundaries form groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normalized-two-cocycle-and-two-coboundary]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

Under pointwise addition, $Z^2(G,M)$ is an abelian group and $B^2(G,M)$ is a
subgroup of it.

## Facts & Assumptions

**Given:** A group $G$ and an abelian $G$-module $M$.

[F1] Normalized two-cocycles and two-coboundaries are defined by the displayed
equations in
[[def-normalized-two-cocycle-and-two-coboundary]].

## Proof

**Proof technique:** direct.

1.1 If $f$ and $f'$ satisfy the cocycle and normalization equations of [F1], then $f+f'$ does too, because each equation is linear in the values of the function. The zero function also satisfies those equations, and so does $-f$. Hence $Z^2(G,M)$ is an abelian group under pointwise addition. [F1, given, algebra]

2.1 If $u$ and $v$ are normalized one-cochains, then $\delta(u+v)=\delta u+\delta v$ by the formula in [F1], and $\delta 0=0$. So $B^2(G,M)$ is a subgroup of the abelian group from step 1.1. [F1, step 1.1, algebra]

3.1 Therefore $Z^2(G,M)$ is an abelian group and $B^2(G,M)\le Z^2(G,M)$. [step 1.1, step 2.1] ∎
