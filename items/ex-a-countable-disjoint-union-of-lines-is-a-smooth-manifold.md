---
id: ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold
kind: example
title: "A countable disjoint union of lines is a smooth manifold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds,
       ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Example

The countable disjoint union

$$X:=\bigsqcup_{m\in\mathbb N}\mathbb R_m$$

of countably many copies of the real line is a smooth $1$-manifold.

## Facts & Assumptions

**Given:** The countable family $(\mathbb R_m)_{m\in\mathbb N}$ of copies of the real line.

[F1] Each copy of $\mathbb R$ is a smooth $1$-manifold ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]).

[F2] A countable disjoint union of fixed-dimensional smooth manifolds is a smooth manifold ([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], every summand $\mathbb R_m$ is a smooth $1$-manifold. [F1]

2.1 The index set $\mathbb N$ is countable, so [F2] applies to the family [F2, step 1.1] $(\mathbb R_m)_{m\in\mathbb N}$ and yields a smooth $1$-manifold structure on $X$. [F2, step 1.1] ∎
