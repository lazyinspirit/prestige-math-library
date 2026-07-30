---
id: ex-pointwise-but-not-uniform-convergence-on-a-countable-domain
kind: example
title: "The functions $f_n(k)=1$ for $k\\ge n$ and $0$ otherwise converge pointwise but not uniformly on $\\mathbb{N}$"
status: published
origin: session
deps: [def-pointwise-and-uniform-convergence-uniformities, lem-uniform-convergence-uniformity-is-finer-than-pointwise, def-standard-topologies, def-sequence-convergence-top]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Example

Give $\{0,1\}$ its discrete uniformity. For $n,k\in\mathbb N$, let $f_n(k)=1$ when $k\ge n$ and $f_n(k)=0$ otherwise. Then $f_n$ converges pointwise, but not uniformly, to the zero function.

## Facts & Assumptions

**Given:** The function set $\{0,1\}^{\mathbb N}$.

[L1] The discrete topology has every subset open ([[def-standard-topologies]]).

[L2] Pointwise and uniform convergence are the two function-space uniformities of [[def-pointwise-and-uniform-convergence-uniformities]].

[L3] Sequence convergence means eventual membership in every neighbourhood ([[def-sequence-convergence-top]]).

## Verification

**Proof technique:** direct.

1.1 For fixed $k$, all $n>k$ have $f_n(k)=0$, so the coordinate sequence converges to $0$. [L1, L3]

1.2 For every $n$, $f_n(n)=1$, so $f_n$ is not in the uniform entourage requiring equality with zero at every coordinate. [L2]

2.1 Thus $f_n$ converges pointwise to zero by [L2]. [step 1.1, L2]

3.1 Hence convergence is not uniform. [step 1.2] ∎
