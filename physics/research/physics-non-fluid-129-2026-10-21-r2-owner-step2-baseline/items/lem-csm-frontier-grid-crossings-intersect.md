---
id: lem-csm-frontier-grid-crossings-intersect
kind: lemma
title: "Opposite crossings of a rectangular grid intersect"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-polygonal-jordan-curve
dependency_roles:
  thm-polygonal-jordan-curve: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 2, Proposition 8, path-intersection and rectangle-gluing arguments."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapter 6 §6.1, planar crossing and dual-path separation convention."
verification:
  precheck: pass
---

## Statement

Let $a,b\geq1$ be integers and let $Q_{a,b}=\{0,\ldots,a\}\times\{0,\ldots,b\}$ have its nearest-neighbor square-grid edges, drawn as unit horizontal and vertical segments. A left-to-right path is a finite edge path whose endpoints lie on the sides $x=0$ and $x=a$; a bottom-to-top path is defined analogously using $y=0$ and $y=b$. Every left-to-right path and every bottom-to-top path in $Q_{a,b}$ share a vertex.

## Statement references

[[thm-polygonal-jordan-curve]]

## Facts & Assumptions

**Given:** Positive integers $a,b$, the embedded square-grid rectangle $Q_{a,b}$, and finite edge paths with the stated opposite-side endpoints.

[F1] A simple polygonal closed curve separates the plane into a bounded and an unbounded component, with the curve as their common frontier ([[thm-polygonal-jordan-curve]]).

## Proof

1.1 Delete loops from each finite path until it is simple, preserving its endpoints. In the square grid, two unit edges can meet only at a shared endpoint, so if the paths do not share a vertex their polygonal realizations are disjoint compact sets. Their distance is then positive. [given, construct]

2.1 Suppose the paths are disjoint and denote the simple left-to-right path by $\gamma$. Perturb its finitely many interior vertices and boundary contacts by less than one third of the distance in step 1.1, pushing every nonendpoint boundary contact slightly into the rectangle. Since $\gamma$ is a finite simple polygonal arc, choose disjoint small neighborhoods of its nonadjacent segments; local polygonal detours inside those neighborhoods preserve simplicity, keep its endpoints on the left and right sides, and preserve disjointness from the other path. The resulting simple arc $\widetilde\gamma$ meets the rectangle boundary only at its two endpoints. [step 1.1, construct]

3.1 Join the endpoints of $\widetilde\gamma$ by a simple polygonal arc lying outside the rectangle and running around its top side. Their union is a simple polygonal closed curve by the boundary-contact property in step 2.1. By [F1], its bounded component contains the part of the rectangle immediately below the top side and above $\widetilde\gamma$, while the bottom side lies in the unbounded component. A bottom-to-top path staying in the rectangle must therefore cross this Jordan curve; it cannot meet the outside closing arc, so it must meet $\widetilde\gamma$. This contradicts the preserved disjointness in step 2.1. Thus the original paths intersect; grid edges intersect only at shared vertices, proving the claim. [F1, step 2.1, construct] ∎

## Remarks

The lemma is a finite topological consequence of polygonal Jordan separation. It does not assert anything about FK probabilities.
