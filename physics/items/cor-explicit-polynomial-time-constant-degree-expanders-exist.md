---
id: cor-explicit-polynomial-time-constant-degree-expanders-exist
kind: corollary
title: "Explicit polynomial time constant degree expanders exist"
status: published
origin: pipeline
deps: [lem-expander-size-adjustment-and-laziness]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §2.1 Lemma2.1, p8, instantiated by preceding construction."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Statement

There is a uniform polynomial-time algorithm producing, for each positive vertex count $N$, a degree-$128$ expander $H_N$ with absolute nontrivial norm at most $1-49/1638400$. The output has $128N$ adjacency slots; its bit-time cost is polynomial in $N$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For every integer $N\ge1$ there is a polynomial-time constructible reverse-paired $128$-regular multigraph $H_N$ on exactly $N$ vertices with $$\alpha(H_N)\le\rho_0:=1-\frac{49}{1638400}<1.$$ For $N\ge2$ every $S$ satisfies $\operatorname{cut}(S)\ge(7/10)\min(|S|,N-|S|)$. Every vertex has loops. ([[lem-expander-size-adjustment-and-laziness]]).


## Proof

1.1 Apply the all-size construction at the given $N$. Its bound is independent of $N$ and is strictly smaller than one. For $N\ge2$ its unnormalized expansion is at least $7/10$, so normalized expansion is at least $7/1280$. [F1]

2.1 The construction explicitly lists $128$ destinations at each of the $N$ vertices and runs in polynomial bit time. The singleton output has only loops and satisfies the zero-space spectral convention. Endpoint names require logarithmically many bits, so the adjacency-slot count alone is not a claim of linear bit time. [F1, step 1.1] ∎
