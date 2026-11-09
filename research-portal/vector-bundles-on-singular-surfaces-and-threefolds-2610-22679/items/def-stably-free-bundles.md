---
id: def-stably-free-bundles
kind: definition
title: Stable triviality and stable bundle equivalence
status: published
domain: mathematics
deps:
  - math:def-locally-free-sheaf-finite-rank
dependency_roles:
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 2, opening sentence
      reading_limits: The article reports the example; the cited construction in Kum85
        was not read.
dependency_level: 0
---

## Definition
Let $X$ be a scheme. A vector bundle on $X$ means a locally free $\mathcal O_X$-module of finite rank. Write $\mathcal O_X^N$ for the direct sum of $N$ copies of the structure sheaf, with $\mathcal O_X^0=0$; these are the trivial bundles. Direct sums and isomorphisms below are taken as $\mathcal O_X$-modules.

Bundles $E$ and $F$ are **stably isomorphic** if, for some integer $N\geq 0$, there is an isomorphism $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. A bundle $E$ of constant rank $r\geq 0$ is **stably trivial** if, for some integer $N\geq 0$, $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$. It is **trivial** if $E\cong\mathcal O_X^r$. Stable triviality is stable isomorphism to $\mathcal O_X^r$; the definition itself does not assert cancellation of the trivial summand.

## Definition references
[[math:def-locally-free-sheaf-finite-rank]]

## Facts & Assumptions
[F1] A finite-rank locally free sheaf is locally isomorphic to a finite free sheaf, and its rank is independent of the chosen local chart. See [[math:def-locally-free-sheaf-finite-rank]].

## Justification
**Given:** A scheme $X$ and finite-rank vector bundles on $X$.

**Goal:** The displayed conditions are well-defined and stable isomorphism is an equivalence relation.

1.1 On common local trivializing neighbourhoods, the direct sum of bundles with local ranks $r$ and $s$ is isomorphic to $\mathcal O_X^{r+s}$. Thus the direct sums in the definition are bundles; their ranks and the stated constant rank $r$ are independent of the chosen charts by [F1]. [F1]

2.1 The identity isomorphism with $N=0$ gives reflexivity, and an isomorphism can be inverted, giving symmetry. If $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ and $F\oplus\mathcal O_X^M\cong G\oplus\mathcal O_X^M$, add $\mathcal O_X^M$ to the first isomorphism and $\mathcal O_X^N$ to the second, then compose them using the canonical reassociation and permutation of finite direct sums. This gives $E\oplus\mathcal O_X^{N+M}\cong G\oplus\mathcal O_X^{N+M}$, proving transitivity. Finally, $\mathcal O_X^r\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$, so the stated form of stable triviality is exactly stable isomorphism to $\mathcal O_X^r$. [step 1.1, algebra] ∎

## Remarks
The article reports a nontrivial stably trivial rank $2$ bundle on a smooth complex affine fourfold, attributed to Mohan Kumar. This definition does not establish that example or a cancellation theorem.
