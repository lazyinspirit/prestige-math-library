---
id: cor-determinant-multiplicativity-from-the-top-exterior-power
kind: corollary
title: "Determinant multiplicativity follows from the top exterior power"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-top-exterior-power-acts-by-the-determinant, thm-exterior-powers-are-functorial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

For endomorphisms $S,T$ of an $n$-dimensional vector space $V$ with $n\ge1$,

$$\det(S\circ T)=\det(S)\det(T).$$

## Facts & Assumptions

**Given:** Endomorphisms $S,T$ of an $n$-dimensional vector space $V$, $n\ge1$.

[L1] The top exterior power acts by the determinant: $\Lambda^nT=\det(T)\cdot\operatorname{id}$ ([[cor-the-top-exterior-power-acts-by-the-determinant]]).

[L2] Exterior powers preserve composition: $\Lambda^n(S\circ T)=\Lambda^nS\circ\Lambda^nT$ ([[thm-exterior-powers-are-functorial]]).

## Proof

**Proof technique:** direct.


1.1 By [L2], $\Lambda^n(S\circ T)=\Lambda^nS\circ\Lambda^nT$. [L2]

2.1 Substituting the scalar actions of [L1] gives $\det(S\circ T)\cdot\operatorname{id}=\det(S)\det(T)\cdot\operatorname{id}$ on $\Lambda^nV$. [L1, step 1.1]

3.1 Since $\Lambda^nV$ is one-dimensional and nonzero, comparing the two scalars gives $\det(S\circ T)=\det(S)\det(T)$. [step 2.1] ∎
