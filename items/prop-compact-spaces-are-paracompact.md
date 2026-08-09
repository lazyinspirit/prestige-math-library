---
id: prop-compact-spaces-are-paracompact
kind: proposition
title: "Every compact space is paracompact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-paracompact-space, def-compact-space]
justified_by: []
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
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Every compact topological space is paracompact.

## Facts & Assumptions

**Given:** A compact topological space $X$ and an open cover $\mathcal U$ of $X$.

[F1] Compactness means that $\mathcal U$ has a finite subcover ([[def-compact-space]]).

[F2] Paracompactness asks for a locally finite open refinement of each open cover ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 By compactness, fix a finite subfamily $\mathcal V\subseteq\mathcal U$ covering $X$. [F1, choose]

2.1 The family $\mathcal V$ is open, covers $X$, refines $\mathcal U$, and is locally finite because every point has the neighbourhood $X$, which meets only members of the finite family $\mathcal V$. [step 1.1]

3.1 Thus $\mathcal V$ is the refinement required by [F2], and $X$ is paracompact. [F2, step 2.1] ∎
