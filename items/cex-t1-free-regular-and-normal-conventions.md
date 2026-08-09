---
id: cex-t1-free-regular-and-normal-conventions
kind: counterexample
title: "Regular and normal do not imply $T_1$ under the library's conventions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-regular-and-t3-spaces, def-normal-and-t4-spaces, def-t0-and-t1-spaces]
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
  references:
    - title: "S. Willard, General Topology, separation axioms"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement refuted

Every regular space, and every normal space, is $T_1$.

## Facts & Assumptions

**Given:** A two-point set $X$ with its indiscrete topology.

[F1] The indiscrete topology has only $\varnothing$ and $X$ as open sets, hence only $\varnothing$ and $X$ as closed sets ([[def-standard-topologies]]).

[F2] Regularity separates a point from a closed set that misses it; normality separates disjoint closed sets; $T_1$ separates each distinct point from the other by an open set ([[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]).

## Counterexample

**Proof technique:** direct.

1.1 In this topology the only closed set missing a point is $\varnothing$, and it is separated from that point by $X$ and $\varnothing$; thus $X$ is regular. [F1, F2]

1.2 Every disjoint pair of closed sets has an empty member, so the same two open sets show that $X$ is normal. [F1, F2]

2.1 No open set contains one point while missing the other, so $X$ is not $T_1$. This refutes both implications. [F1, F2, step 1.1, step 1.2] ∎
