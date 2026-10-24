---
id: ex-pointwise-but-not-uniform-convergence-on-a-countable-domain
kind: example
title: "The functions $f_n(k)=1$ for $k\\ge n$ and $0$ otherwise converge pointwise but not uniformly on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-and-uniform-convergence-uniformities, lem-uniform-convergence-uniformity-is-finer-than-pointwise, def-standard-topologies, def-sequence-convergence-top, def-metric-space, lem-metric-uniformity-dictionary]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Give $\{0,1\}$ the uniformity of its zero-one metric. For $n,k\in\mathbb N$, let $f_n(k)=1$ when $k\ge n$ and $f_n(k)=0$ otherwise. Then $f_n$ converges pointwise, but not uniformly, to the zero function.

## Facts & Assumptions

**Given:** The function set $\{0,1\}^{\mathbb N}$.

[L1] For $d(u,v)=0$ when $u=v$ and $d(u,v)=1$ otherwise, separation and symmetry are immediate, while the triangle inequality follows because $u\ne w$ forces $u\ne v$ or $v\ne w$. Thus $d$ is a metric; its radius-$1/2$ balls are singletons, so its topology is discrete, and its radius-$1/2$ entourage is equality ([[def-metric-space]], [[lem-metric-uniformity-dictionary]], [[def-standard-topologies]]).

[L2] Pointwise and uniform convergence are the two function-space uniformities of [[def-pointwise-and-uniform-convergence-uniformities]].

[L3] Sequence convergence means eventual membership in every neighbourhood ([[def-sequence-convergence-top]]).

## Verification

**Proof technique:** direct.

1.1 For fixed $k$, all $n>k$ have $f_n(k)=0$, so the coordinate sequence converges to $0$. [L1, L3]

1.2 For every $n$, $f_n(n)=1$, so $f_n$ is not in the uniform entourage induced by equality on $\{0,1\}$. [L1, L2]

2.1 Thus $f_n$ converges pointwise to zero by [L2]. [step 1.1, L2]

3.1 Hence convergence is not uniform. [step 1.2] ∎
