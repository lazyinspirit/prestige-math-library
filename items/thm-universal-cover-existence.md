---
id: thm-universal-cover-existence
kind: theorem
title: "Every nonempty path-connected locally path-connected semilocally simply connected space has a universal cover"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-path-class-projection-is-a-covering-map, def-universal-covering-space, def-simply-connected, thm-covering-maps-inject-fundamental-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Statement

Every nonempty path-connected, locally path-connected, semilocally simply connected space has a universal covering space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] If $X$ is nonempty, path-connected, locally path-connected, and semilocally simply connected, then after a basepoint is fixed the path-class basic sets define a topology on $\widetilde X$ for which the endpoint projection $p:\widetilde X\to X$ is a covering map. ([[lem-path-class-projection-is-a-covering-map]]).

[F2] A **universal covering space** of $B$ is a covering map $p:\widetilde B\to B$ whose total space $\widetilde B$ is simply connected (def-covering-map-and-evenly-covered-neighbourhoods, def-simply-connected). ([[def-universal-covering-space]]).

[F3] A topological space $X$ is **simply connected** when it is nonempty and path-connected (def-path-connected) and, for every $x_0\in X$, the group $\pi_1(X,x_0)$ has exactly one element. ([[def-simply-connected]]).

[F4] For a covering $p:(E,e_0)\to(B,b_0)$, the induced homomorphism $p_*:\pi_1(E,e_0)\to\pi_1(B,b_0)$ is injective. ([[thm-covering-maps-inject-fundamental-groups]]).

## Proof

**Proof technique:** direct.

1.1 Use the path-class projection, already proved to be a covering. [given, F1, F2, F3, F4]

2.1 The path-class space is nonempty and path-connected by truncating representatives. [step 1.1, F1, F3, F2]

3.1 A loop upstairs projects to a loop whose path-class endpoint is the starting class, hence to the trivial element downstairs; injectivity of the fundamental-group map then makes every upstairs loop nullhomotopic. [step 2.1, F1, F3, F2]

4.1 Thus the total space is simply connected. [step 3.1, F2, F3, F1]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎

