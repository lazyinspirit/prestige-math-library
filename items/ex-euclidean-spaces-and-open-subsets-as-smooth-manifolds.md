---
id: ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
kind: example
title: "Euclidean spaces and Euclidean open subsets as smooth manifolds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-manifold, prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1, Example 1.5"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Example

For every $n\ge0$, the Euclidean space $\mathbb R^n$ is a smooth $n$-manifold,
with global chart the identity map. More generally, every open subset
$U\subseteq\mathbb R^n$ is a smooth $n$-manifold with its standard restricted
smooth structure.

## Facts & Assumptions

**Given:** A natural number $n$ and an open subset $U\subseteq\mathbb R^n$.

[F1] Open subsets of Euclidean space carry the standard smooth structure ([[prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]]).

[F2] A smooth manifold is a topological manifold equipped with a smooth structure ([[def-smooth-manifold]]).

## Verification

**Proof technique:** direct.

1.1 Taking $U=\mathbb R^n$, the identity chart exhibits $\mathbb R^n$ as a topological $n$-manifold and [F1] supplies its smooth structure. Hence $\mathbb R^n$ is a smooth $n$-manifold by [F2]. [F1, F2]

2.1 For a general open subset $U\subseteq\mathbb R^n$, [F1] states exactly that $U$ inherits the standard smooth structure, so again [F2] makes $U$ a smooth $n$-manifold. [F1, F2] ∎
