---
id: lem-cauchy-filter-with-a-cluster-point-converges
kind: lemma
title: "A Cauchy filter with a cluster point converges to that point"
status: published
origin: session
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
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

## Statement

A Cauchy filter on a uniform space with a cluster point $x$ converges to $x$.

## Facts & Assumptions

**Given:** A Cauchy filter $\mathcal F$ and one of its cluster points $x$.

[L1] A cluster point meets every filter member in every neighbourhood, while convergence means containment of every neighbourhood ([[def-filter-convergence-and-cluster-point]]).

[L2] Cauchy filters have small members, and symmetric entourages have symmetric square roots ([[def-cauchy-filter-in-a-uniform-space]], [[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** direct.

1.1 Let $E$ be an entourage and choose symmetric $D$ with $D\circ D\subseteq E$; choose $A\in\mathcal F$ with $A\times A\subseteq D$. [L2, choose]

1.2 The ball $D[x]$ meets $A$ because $x$ is a cluster point; fix $a\in A\cap D[x]$. [L1, choose]

2.1 For every $b\in A$, symmetry gives $(x,a)\in D$ and smallness gives $(a,b)\in D$, hence $(x,b)\in E$; so $A\subseteq E[x]$. [step 1.1, step 1.2]

3.1 Every entourage ball about $x$ belongs to $\mathcal F$ by upward closure, so $\mathcal F$ converges to $x$. [step 2.1, L1] ∎
