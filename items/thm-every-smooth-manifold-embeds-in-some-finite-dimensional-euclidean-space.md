---
id: thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space
kind: theorem
title: "Every smooth manifold embeds in some finite-dimensional Euclidean space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 6"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Every smooth manifold embeds smoothly in some finite-dimensional Euclidean
space. If the manifold is noncompact, one can choose such an embedding in the
form
$$
M\hookrightarrow \mathbb R^N\times\mathbb R,\qquad p\mapsto (G(p),\rho(p)),
$$
where $G$ is bounded and $\rho$ is a smooth proper exhaustion function.

## Facts & Assumptions

**Given:** A smooth manifold $M$.

[L1] A compact smooth manifold admits a finite coordinate-bump embedding into some Euclidean space ([[lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space]]).

[F1] The noncompact Whitney construction in the cited Chapter 6 source
produces a finite-dimensional embedding in the form
$$p\longmapsto(G(p),\rho(p)),$$
where the coordinate-bump component $G$ is bounded and the final coordinate
$\rho$ is a smooth proper exhaustion function.

## Proof
**Proof technique:** direct.

1.1 If $M$ is compact, [L1] already gives a smooth embedding of $M$ into some finite-dimensional Euclidean space. [L1, given]

1.2 If $M$ is noncompact, [F1] gives an embedding $(G,\rho)$ with $G$ bounded and $\rho$ proper. [F1, given]

2.1 Combining the compact case from step 1.1 and the noncompact case from step 1.2 proves the theorem. [step 1.1, step 1.2] ∎
