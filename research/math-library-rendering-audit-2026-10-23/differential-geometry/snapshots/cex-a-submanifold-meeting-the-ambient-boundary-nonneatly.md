---
id: cex-a-submanifold-meeting-the-ambient-boundary-nonneatly
kind: counterexample
title: "A submanifold meeting the ambient boundary nonneatly"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-embedded-smooth-submanifold-with-boundary, def-neat-submanifold-of-a-manifold-with-boundary]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement refuted

In $M=[0,\infty)\times\mathbb R$, the embedded interval $S=\{0\}\times[-1,1]$ is not neat.

## Facts & Assumptions

**Given:** The standard manifold with boundary $M=[0,\infty)\times\mathbb R$ and the subset $S=\{0\}\times[-1,1]$, supplied with the smooth structure transported from $[-1,1]$ by $s\mapsto(0,s)$.

[L1] An embedded submanifold with boundary is a subset carrying a manifold-with-boundary structure for which inclusion into the ambient manifold is a smooth embedding ([[def-embedded-smooth-submanifold-with-boundary]]).

[L2] Neatness requires both $S\cap\partial M=\partial S$ and transversality to $\partial M$ ([[def-neat-submanifold-of-a-manifold-with-boundary]]).

## Counterexample

**Proof technique:** direct.

1.1 The parametrization $[-1,1]\to S$, $s\mapsto(0,s)$, is a diffeomorphism onto $S$ with its subspace topology, and its derivative $v\mapsto(0,v)$ is injective. Thus the inclusion is a smooth embedding, so [L1] makes $S$ an embedded submanifold with boundary $\partial S=\{(0,-1),(0,1)\}$. [given, L1, construct, algebra]

2.1 Since $\partial M=\{0\}\times\mathbb R$, one has $S\cap\partial M=S$, which is not the two-point set $\partial S$. The equality required by [L2] therefore fails, so $S$ is not neat (independently of the transversality condition). [given, L2, step 1.1, algebra] ∎
