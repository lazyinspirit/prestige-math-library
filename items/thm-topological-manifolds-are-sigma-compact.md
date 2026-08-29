---
id: thm-topological-manifolds-are-sigma-compact
kind: theorem
title: "Topological manifolds are sigma-compact"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-manifold-without-boundary,
       lem-coordinate-balls-form-a-basis-of-a-topological-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1, Theorem 1.4"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Every topological manifold is $\sigma$-compact.

## Facts & Assumptions

**Given:** A topological manifold $M$.

[F1] A topological manifold is second countable ([[def-topological-manifold-without-boundary]]).

[F2] Coordinate balls form a basis of the topology, and each coordinate ball has compact closure in $M$ ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] choose a countable basis $\mathcal B=(B_n)_{n\in\mathbb N}$ for the topology of $M$. By [F2], for each $n$ and each point of $B_n$ there is a coordinate ball contained in $B_n$ whose closure is compact. Replacing each $B_n$ by all coordinate balls it contains, we obtain a countable basis $(U_k)_{k\in\mathbb N}$ of coordinate balls with compact closures. [F1, F2, choose]

2.1 Every $\overline{U_k}$ is compact by [F2], and the family $(\overline{U_k})_{k\in\mathbb N}$ covers $M$ because the basis $(U_k)$ does. [F2, step 1.1]

$$M=\bigcup_{k\in\mathbb N}\overline{U_k}$$

is a countable union of compact subsets.

3.1 Therefore $M$ is $\sigma$-compact. [step 2.1] ∎
