---
id: def-heegaard-splitting-of-closed-oriented-three-manifold
kind: definition
title: "Heegaard splitting of a closed oriented three-manifold"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-smooth-embedding
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Notes on 3-Manifolds"
      url: "https://sschleimer.warwick.ac.uk/Teach/2021_3MFDS/References/2014notes_on_three-manifolds.pdf"
      locator: "Definitions 3.20–3.21, §3, printed pp. 22–23"
verification:
  precheck: n/a
---

## Definition

For $g\in\mathbb Z_{\ge0}$, an **orientable handlebody of genus $g$** is a compact connected orientable smooth $3$-manifold obtained from a $3$-ball by attaching $g$ smooth $1$-handles along orientation-compatible pairs of disjoint boundary disks and rounding the corners. A $1$-handle here is a copy of $D^2\times[-1,1]$ attached by its two end disks to those boundary disks. Its boundary is a connected closed orientable surface of genus $g$. A **Heegaard splitting** of a closed connected oriented smooth $3$-manifold $M$ is a decomposition
$$
M=H_-\cup_{\varphi}H_+
$$
in which $H_-$ and $H_+$ are orientable handlebodies of the same genus, their common boundary is a connected closed surface $\Sigma=\partial H_-=\partial H_+$, and $\varphi:\partial H_-\to\partial H_+$ is an orientation-reversing diffeomorphism whose gluing gives $M$. The surface $\Sigma$ is the **Heegaard surface** of the splitting.

## Definition references

[[def-oriented-smooth-manifold-and-oriented-chart|Smooth orientations on the manifold and surface]]

[[def-smooth-embedding|Smooth embeddings of attaching disks and handlebodies]]

[Danny Calegari, Notes on 3-Manifolds, Definitions 3.20–3.21](https://sschleimer.warwick.ac.uk/Teach/2021_3MFDS/References/2014notes_on_three-manifolds.pdf)
