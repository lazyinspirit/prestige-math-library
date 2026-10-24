---
id: lem-qc-tqc-contractible-disk-lifts-to-plane
kind: lemma
title: A contractible toric disk lifts to the square grid
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-qc-tqc-periodic-square-cellulation
justified_by: []
proof_strategy: direct
axiom_use: "None; the lift is unique after a basepoint is fixed."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
---

## Statement

Write the torus as $T_L=\mathbb R^2/(L\mathbb Z^2)$ with its periodic
square cellulation. Let $D\subset T_L$ be a nonempty compact embedded
topological disk with connected complement. Then the quotient map
$\pi:\mathbb R^2\to T_L$ has a lift $\widetilde D\subset\mathbb R^2$ on
which it is one-to-one and maps $\widetilde D$ homeomorphically onto $D$.
Consequently every finite primal or dual edge chain supported in $D$ lifts
to a finite chain in the infinite square tiling, and cycles lift to cycles.

## Facts & Assumptions

**Given:** The quotient torus $T_L=\mathbb R^2/(L\mathbb Z^2)$, the square cellulation, and a compact embedded disk $D$ homeomorphic to the closed unit disk.

## Proof

1.1 For any $\tilde p\in\mathbb R^2$, choose an open square $U$ about $\tilde p$ of side length less than $L$. Its translates by distinct vectors in $L\mathbb Z^2$ are disjoint, and the quotient map restricts to a homeomorphism from each translate onto the same open neighborhood of $\pi(\tilde p)$. These neighborhoods cover the torus. For a path, pull back this cover to the compact interval, take a finite subcover and a Lebesgue number, and partition the interval into pieces of smaller length. Each piece maps into one such neighborhood; once its initial lift is fixed, the inverse on the unique sheet through that lift defines the lift on the piece. These pieces agree at endpoints, and uniqueness follows from uniqueness of the local inverse. For a homotopy square, use a finite grid of rectangles whose images each lie in one evenly covered neighborhood. Starting from a lifted corner, the local inverses extend across adjacent rectangles; on a common edge two extensions agree because they are lifts agreeing at one endpoint. Thus paths and homotopies lift after their initial data are fixed. [given, choose, construct, algebra]

2.1 Fix $p\in D$ and a lift $\tilde p$. For each $q\in D$, lift a path from $p$ to $q$ starting at $\tilde p$. Any two such paths are homotopic relative to their endpoints inside $D$, since the disk is contractible. By the homotopy lifting construction in step 1.1, the lifted endpoint varies continuously through the discrete fiber over $q$, so it is constant during the homotopy. Thus the endpoint is independent of the chosen path. These endpoints define a section $s:D\to\mathbb R^2$ of $\pi$ over $D$; local inverse charts from step 1.1 make the section continuous and one-to-one. [given, step 1.1, construct, algebra]

3.1 The image $\widetilde D$ is compact because $D$ is compact and the section is continuous, hence it is bounded. The square and dual square tilings are locally finite, so only finitely many of their edges meet $\widetilde D$. The lift preserves local edge incidences by step 1.1. Therefore every finite primal or dual cycle supported in $D$ lifts to a finite edge chain with even incidence at each lifted vertex. [given, step 2.1, step 1.1, algebra] ∎

