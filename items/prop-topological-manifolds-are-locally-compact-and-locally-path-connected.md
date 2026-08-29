---
id: prop-topological-manifolds-are-locally-compact-and-locally-path-connected
kind: proposition
title: "Topological manifolds are locally compact and locally path connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-coordinate-balls-form-a-basis-of-a-topological-manifold,
       cor-rn-is-polygonally-connected-and-locally-path-connected,
       cor-rn-is-locally-compact-and-sigma-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Every topological manifold is locally compact and locally path connected. More
precisely, every point has a neighbourhood basis consisting of open sets whose
closures are compact and which are path connected.

## Facts & Assumptions

**Given:** A topological manifold $M$ and a point $p\in M$.

[F1] Every neighbourhood of $p$ contains a coordinate ball $\varphi^{-1}[B(c,r)]$ whose closure is compact ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L1] For $n\ge1$, every Euclidean open ball is path connected and every neighbourhood in $\mathbb R^n$ contains a path-connected open ball ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

[L2] For $n\ge1$, Euclidean space is locally compact ([[cor-rn-is-locally-compact-and-sigma-compact]]).

[A1] Homeomorphisms preserve path connectedness and compactness.

## Proof

**Proof technique:** direct.

1.1 Let $O$ be any open neighbourhood of $p$. By [F1] choose a chart [F1, choose] $(U,\varphi)$ at $p$ and an open Euclidean ball $B(c,r)$ such that $p\in\varphi^{-1}[B(c,r)]\subseteq O$ and the closure of $\varphi^{-1}[B(c,r)]$ in $M$ is compact. This already gives a compact neighbourhood basis at $p$, so $M$ is locally compact. [F1, choose]

2.1 If the manifold dimension is $n=0$, then every point is open, so $M$ is [L1, A1, step 1.1] locally path connected trivially. If $n\ge1$, then [L1] says the Euclidean ball $B(c,r)$ is path connected. Since $\varphi$ is a homeomorphism on $U$, [A1] makes $\varphi^{-1}[B(c,r)]$ path connected. Thus every neighbourhood of $p$ contains an open path-connected neighbourhood of $p$. [L1, A1, step 1.1]

3.1 Step 1.1 proves local compactness and step 2.1 proves local path [step 1.1, step 2.1, L2] connectedness. The role of [L2] is only to justify that the compact-neighbourhood conclusion in step 1.1 matches the Euclidean local model used to produce the coordinate balls. [step 1.1, step 2.1, L2] ∎
