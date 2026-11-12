---
id: def-stably-free-bundles
kind: definition
title: Stable triviality and stable bundle equivalence
status: published
domain: mathematics
deps:
  - math:def-scheme
  - math:def-module-on-ringed-space
  - math:def-locally-free-sheaf-finite-rank
dependency_roles:
  math:def-scheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 1, final introductory paragraph, continued in p. 2, opening sentence
      reading_limits: Read the text extracted directly from the frozen article PDF, p.
        1 final introductory paragraph and p. 2 opening sentence. The article
        reports the example; the cited construction in Kum85 was not read. No
        original existence or nontriviality proof was checked, and the example
        is used only as contextual attribution.
      statement: The article reports that Mohan Kumar constructed a nontrivial stably
        trivial rank-two bundle on a smooth complex affine fourfold.
      hypotheses: Algebraic vector bundle of constant rank two on a smooth affine
        complex variety of algebraic dimension four; this is a reported
        existence example, not a premise for the definitions or
        equivalence-relation proof.
dependency_level: 0
---

## Definition
Let $X$ be a scheme, with structure sheaf $\mathcal O_X$. A vector bundle on $X$ means a locally free $\mathcal O_X$-module of finite rank. For a finite family $E_1,\ldots,E_m$ of $\mathcal O_X$-modules, define its direct sum by $(\bigoplus_{i=1}^m E_i)(U)=\prod_{i=1}^m E_i(U)$ for each open $U\subseteq X$, with componentwise restriction maps and module operations; for $m=0$ this is the zero sheaf. A morphism of $\mathcal O_X$-modules is a sheaf morphism linear on sections over every open set, and an isomorphism is such a morphism with a two-sided inverse. Direct sums of morphisms act componentwise. Write $\mathcal O_X^N$ for the direct sum of $N$ copies of the structure sheaf, with $\mathcal O_X^0=0$; these are the trivial bundles. Direct sums and isomorphisms below are taken as $\mathcal O_X$-modules.

Bundles $E$ and $F$ are **stably isomorphic** if, for some integer $N\geq 0$, there is an isomorphism $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. A bundle $E$ of constant rank $r\geq 0$ is **stably trivial** if, for some integer $N\geq 0$, $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$. It is **trivial** if $E\cong\mathcal O_X^r$. Stable triviality is stable isomorphism to $\mathcal O_X^r$; the definition itself does not assert cancellation of the trivial summand.

## Definition references
[[math:def-scheme]]

[[math:def-module-on-ringed-space]]

[[math:def-locally-free-sheaf-finite-rank]]

## Facts & Assumptions
[F1] A finite-rank locally free sheaf is locally isomorphic to a finite free sheaf, and its rank is independent of the chosen local chart. See [[math:def-locally-free-sheaf-finite-rank]].

[F2] A scheme carries its structure sheaf, and an $\mathcal O_X$-module is a sheaf of modules whose scalar action respects restriction. Its morphisms are linear on sections and commute with restriction. See [[math:def-scheme]] and [[math:def-module-on-ringed-space]].

## Justification
**Given:** A scheme $X$ and finite-rank vector bundles on $X$.

**Goal:** The displayed conditions are well-defined and stable isomorphism is an equivalence relation.

1.1 For the finite direct sum defined above, compatible local sections glue uniquely component by component because each $E_i$ is a sheaf. The module operations and restrictions satisfy the module-sheaf axioms componentwise. Componentwise maps, coordinate permutations and reassociations are linear and commute with restriction; their inverse maps are given componentwise or by inverse coordinate permutations and reassociations. Restricting a finite direct sum to an open set gives the direct sum of the restrictions. On the intersection of local trivializing neighbourhoods at any point, the direct sum of bundles with local ranks $r$ and $s$ is therefore isomorphic to $\mathcal O_X^{r+s}$ by concatenating coordinates. Thus the direct sums in the definition are bundles; their ranks and the stated constant rank $r$ are independent of the chosen charts by [F1]. [F1, F2, construct]

2.1 The identity isomorphism with $N=0$ gives reflexivity, and an isomorphism can be inverted, giving symmetry. If $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ and $F\oplus\mathcal O_X^M\cong G\oplus\mathcal O_X^M$, take the direct sum of the first isomorphism with the identity on $\mathcal O_X^M$ and of the second with the identity on $\mathcal O_X^N$, then compose them using the coordinate reassociation and permutation maps from step 1.1. This gives $E\oplus\mathcal O_X^{N+M}\cong G\oplus\mathcal O_X^{N+M}$, proving transitivity. Finally, concatenation gives $\mathcal O_X^r\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$, so the stated form of stable triviality is exactly stable isomorphism to $\mathcal O_X^r$. [step 1.1, algebra] ∎

## Remarks
The article reports a nontrivial stably trivial rank $2$ bundle on a smooth complex affine fourfold, attributed to Mohan Kumar. This definition does not establish that example or a cancellation theorem.
