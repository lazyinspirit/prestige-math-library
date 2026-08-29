---
id: def-manifold-chart-coordinate-domain-and-coordinate-functions
kind: definition
title: "Manifold charts, coordinate domains, and coordinate functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-manifold-without-boundary, def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.1"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Definition

Let $M$ be a topological $n$-manifold ([[def-topological-manifold-without-boundary]]).
A **chart** on $M$ is a pair $(U,\varphi)$ in which:

- $U\subseteq M$ is open, called the **coordinate domain**;
- $\varphi:U\to\widehat U$ is a homeomorphism onto an open subset
  $\widehat U\subseteq\mathbb R^n$ ([[def-homeomorphism-and-open-maps]]), called
  the **coordinate map**; the open set $\widehat U=\varphi(U)$ is the **chart
  image**.

For $n\ge1$ and $i<n$, the $i$-th **coordinate function** is
$$x^i:=\pi_i\circ\varphi:U\longrightarrow\mathbb R,\qquad x^i(p)=\varphi(p)_i,$$
so that $\varphi=(x^0,\ldots,x^{n-1})$. A chart is often written
$(U,(x^0,\ldots,x^{n-1}))$
and the coordinates are then used to name points of $U$. In dimension zero the
coordinate map is the unique map to $\{0\}$ and there are no coordinate functions.

## Remarks

- **The domain is open in the manifold, the image is open in Euclidean space.**
  The two openness statements are separate hypotheses; in particular the domain
  $U$ need not itself be an open subset of $\mathbb R^n$, although the chart
  map makes it homeomorphic to the Euclidean open set $\widehat U$. The
  companion false statement
  [[fs-a-chart-domain-is-an-open-subset-of-euclidean-space]] records the failure
  to keep them apart.

- **A chart is a homeomorphism by definition**, so $\varphi$ is continuous,
  bijective, and $\varphi^{-1}:\widehat U\to U$ is continuous. Smoothness of
  either map is a *later* condition on pairs of charts, not a hypothesis here.
