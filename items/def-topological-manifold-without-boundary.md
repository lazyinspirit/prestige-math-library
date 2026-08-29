---
id: def-topological-manifold-without-boundary
kind: definition
title: "Topological manifolds without boundary: Hausdorff, second-countable, and locally Euclidean spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hausdorff-space, def-second-countable-space, def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Definition

Let $n\in\mathbb N$. For $n\ge1$, put $\mathbb R^n:=\prod_{k<n}\mathbb R$ with its
usual topology; for $n=0$ put $\mathbb R^0:=\{0\}$, the one-point space. A
**topological $n$-manifold without boundary** (or briefly an **$n$-manifold**) is
a topological space $M$ satisfying:

1. $M$ is Hausdorff ([[def-hausdorff-space]]);
2. $M$ is second countable ([[def-second-countable-space]]);
3. $M$ is **locally Euclidean of dimension $n$**: every $p\in M$ has an open
   neighbourhood $U\subseteq M$ homeomorphic to an open subset of $\mathbb R^n$
   ([[def-homeomorphism-and-open-maps]]).

The empty space satisfies all three conditions vacuously, so $M=\varnothing$ is
an $n$-manifold for every $n$; this degenerate instance is kept, and statements
about nonempty manifolds name the hypothesis. In dimension zero, condition 3
forces the one-point neighbourhoods of points to be open singletons, so a
$0$-manifold is exactly a discrete second-countable space with at most countably
many points.

## Remarks

- **Second countability is part of the definition.** It is exactly the axiom
  that the long line fails, and it is what later turns the local hypotheses into
  global ones: countable chart bases, $\sigma$-compactness, metrizability and
  paracompactness all flow from it. The convention split is recorded in
  [[rem-manifold-conventions-and-the-role-of-second-countability]].

- **No boundary is defined here.** A *manifold with boundary* replaces the local
  models by open subsets of the closed upper half-space; that is a strictly later
  construction and no statement on this page silently permits it.
