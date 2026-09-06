---
id: ex-the-standard-collar-of-a-closed-ball
kind: example
title: "The standard collar of a closed ball"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-collar-of-a-manifold-boundary, ex-the-closed-ball-and-its-sphere-boundary]
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

## Example

For $n\ge1$, $c:S^{n-1}\times[0,\varepsilon)\to B^n$, $c(u,t)=(1-t)u$, is a collar for $0<\varepsilon<1$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a real number $0<\varepsilon<1$, the closed unit ball $B^n$, and the map $c:S^{n-1}\times[0,\varepsilon)\to B^n$ defined by $c(u,t)=(1-t)u$.

[L1] The boundary of $B^n$ is $S^{n-1}$ ([[ex-the-closed-ball-and-its-sphere-boundary]]).

[L2] A smooth collar is a boundary-fixing smooth embedding whose image is an open neighbourhood of the boundary ([[def-smooth-collar-of-a-manifold-boundary]]).

## Verification

**Proof technique:** direct.

1.1 The map $c$ is smooth and satisfies $c(u,0)=u$. Since $1-t>0$, its inverse on its image is $$x\longmapsto\left(\frac{x}{|x|},1-|x|\right),$$ which is smooth; hence $c$ is a smooth embedding. [given, construct, algebra]

2.1 Its image is $\{x\in B^n:|x|>1-\varepsilon\}$, which is open in $B^n$ and contains $S^{n-1}=\partial B^n$ by [L1]. Consequently $c$ satisfies every clause of [L2] and is a collar. [given, L1, L2, step 1.1, algebra] ∎
