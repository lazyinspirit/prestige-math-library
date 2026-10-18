---
id: prop-global-graph-characterization-by-one-point-transverse-fibres
kind: proposition
title: "A globally one-to-one transverse-fibre submanifold is a graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-local-graph-characterization-by-transversality-to-vertical-fibres,
       cor-transverse-intersection-theorem,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $S\subseteq M\times N$ be an embedded submanifold. Assume:

1. for every $x\in M$, the vertical fibre $\{x\}\times N$ meets $S$ in exactly
   one point; and
2. $S$ is transverse to every vertical fibre it meets.

Then there is a unique smooth map $f:M\to N$ with $S=\Gamma_f$.

## Facts & Assumptions

**Given:** An embedded submanifold $S\subseteq M\times N$ satisfying the two displayed hypotheses.

[L1] The transverse intersection theorem controls the dimension of the intersection with a vertical fibre ([[cor-transverse-intersection-theorem]]).

[L2] Once $\dim S=\dim M$, the local graph proposition applies to each vertical fibre intersection ([[prop-local-graph-characterization-by-transversality-to-vertical-fibres]]).

[L3] A diffeomorphism is a bijective smooth map with smooth inverse ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Proof
**Proof technique:** direct.

1.1 Let $(x,y)\in S$. The fibre hypothesis gives $S\cap(\{x\}\times N)=\{(x,y)\}$. Because that intersection is a single point, it is $0$-dimensional. The vertical fibre has codimension $\dim M$ in $M\times N$, so [L1] forces $\operatorname{codim}_{M\times N}S=\dim N$, hence $\dim S=\dim M$. [L1, given, algebra]

2.1 Let $\pi_M:S\to M$ be the restriction of the first projection. By the fibre hypothesis, $\pi_M$ is bijective. Since step 1.1 gives $\dim S=\dim M$ and $S$ is transverse to every vertical fibre it meets, [L2] shows that every point of $S$ has a neighbourhood on which $\pi_M$ is a diffeomorphism onto an open set of $M$. [L2, step 1.1, given]

3.1 The local inverses from step 2.1 agree on overlaps because $\pi_M$ is globally one-to-one. Therefore they glue to a smooth inverse $\pi_M^{-1}:M\to S$, so [L3] makes $\pi_M$ a diffeomorphism. [L3, step 2.1]

4.1 Define $f:=\pi_N\circ\pi_M^{-1}:M\to N$. Then every point of $S$ has the form $(x,f(x))$, and uniqueness of the point in each fibre shows that no other point lies over $x$. Hence $S=\Gamma_f$, uniquely. [step 3.1, construct] ∎
