---
id: thm-separated-uniformity-iff-induced-topology-is-hausdorff
kind: theorem
title: "A uniformity is separated if and only if its induced topology is Hausdorff"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separated-uniform-space, thm-uniformity-induces-a-topology, def-hausdorff-space, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

The topology induced by a uniformity $\mathcal U$ is Hausdorff if and only if $\mathcal U$ is separated.

## Facts & Assumptions

**Given:** A uniform space $(X,\mathcal U)$ with its induced topology.

[A1] A uniformity is separated exactly when each distinct pair is excluded by an entourage ([[def-separated-uniform-space]]).

[L1] Entourage balls are neighbourhood bases, and symmetric square roots exist ([[thm-uniformity-induces-a-topology]], [[lem-symmetric-entourages-form-a-base]]).

[L2] Hausdorff means that distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathcal U$ is separated and $x\ne y$. Choose $E$ with $(x,y)\notin E$, then a symmetric $D$ with $D\circ D\subseteq E$. [A1, L1, choose]

1.2 Conversely, if the induced topology is Hausdorff and $x\ne y$, choose disjoint neighbourhoods of $x,y$ and refine the first by an entourage ball $E[x]$; then $y\notin E[x]$, so $(x,y)\notin E$. [L1, L2, choose]

2.1 The neighbourhoods $D[x]$ and $D[y]$ are disjoint: if $z$ belonged to both, symmetry would give $(x,z),(z,y)\in D$ and hence $(x,y)\in D\circ D\subseteq E$. [step 1.1, L1]

3.1 Thus the induced topology is Hausdorff by [L2]. [step 2.1, L2]

4.1 Every distinct pair is excluded by an entourage, so $\mathcal U$ is separated by [A1]. [step 1.2, A1] ∎
