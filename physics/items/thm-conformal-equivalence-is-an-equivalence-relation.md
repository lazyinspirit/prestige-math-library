---
id: thm-conformal-equivalence-is-an-equivalence-relation
kind: theorem
title: "Conformal equivalence is an equivalence relation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conformal-equivalence-and-automorphism-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Conformal equivalence of complex domains is an equivalence relation: every complex domain $U$ is conformally equivalent to itself; if $U$ is conformally equivalent to $V$ then $V$ is conformally equivalent to $U$; and if $U$ is conformally equivalent to $V$ and $V$ to $W$, then $U$ is conformally equivalent to $W$.

## Facts & Assumptions

**Given:** Complex domains $U,V,W$, and the conformal-equivalence notion of [[def-conformal-equivalence-and-automorphism-group]].

[F1] $U$ and $V$ are conformally equivalent when there exists a biholomorphism $f:U\to V$. The identity map $\operatorname{id}_U$ is biholomorphic; the inverse of a biholomorphism is biholomorphic; and the composite of two biholomorphisms $U\to U$ is biholomorphic ([[def-conformal-equivalence-and-automorphism-group]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity: [F1] makes $\operatorname{id}_U$ biholomorphic, witnessing $U\sim U$. [F1, given]

1.2 Symmetry: for biholomorphic $f:U\to V$, [F1] makes $f^{-1}:V\to U$ biholomorphic. [F1, assume-hyp]

1.3 Transitivity: for biholomorphic $f:U\to V$, $g:V\to W$, [F1] makes $g\circ f$ biholomorphic. [F1, assume-hyp]

2.1 Steps 1.1-1.3 are the three clauses of an equivalence relation. [step 1.1, step 1.2, step 1.3] ∎
