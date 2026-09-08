---
id: thm-barycentric-subdivision-realizes-homeomorphically
kind: theorem
title: "Barycentric subdivision realizes homeomorphically"
status: draft
origin: pipeline
deps: ["lem-barycentric-face-chains-triangulate-a-geometric-simplex", "def-geometric-realization-of-an-abstract-simplicial-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Statement

For any abstract simplicial complex $K$ with weak realization topology, $b_K:|\operatorname{sd}K|\to|K|$ is a homeomorphism. Its restriction over every subcomplex $A$ is $b_A$, under the natural inclusions.

## Source locators

2.5.8, pp.49–50; weak-topology extension proved locally.


## Facts & Assumptions

[F1] Face chains triangulate each finite simplex with unique positive-weight representations. [[lem-barycentric-face-chains-triangulate-a-geometric-simplex]].

[F2] Continuity out of the weak realization can be tested simplexwise. [[def-geometric-realization-of-an-abstract-simplicial-complex]].


## Proof

**Given:** An arbitrary simplicial complex $K$, without a local-finiteness assumption.

1.1 For every original finite simplex $\sigma$, its chain triangulation gives a bijection $|\operatorname{sd}\sigma|\to|\sigma|$. The inverse formulas agree on common faces because the positive coordinate level sets depend only on the point. Every point of $|K|$ has a finite support face, so these inverses define a single global inverse to $b_K$. This also proves $b_K^{-1}(|A|)=|\operatorname{sd}A|$. [F1, F2]

2.1 On each subdivided simplex $b_K$ is affine into its maximal original simplex and is continuous. The weak topology on $|\operatorname{sd}K|$ therefore implies global continuity: the inverse image of a closed set has closed trace on each simplex. On each original simplex the inverse is affine on finitely many closed chain simplices. A closed set has closed inverse trace on each of these pieces, and their finite union is closed in the original simplex; hence this inverse restriction is continuous. Testing on every original simplex with the weak topology gives continuity of the global inverse. The empty case is the empty homeomorphism, and all formulas restrict identically to subcomplexes. [F1, F2, step 1.1] ∎

