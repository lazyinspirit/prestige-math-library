---
id: lem-double-cover-of-two-arc-rational-tangle-is-solid-torus
kind: lemma
title: "The double branched cover of the trivial two-arc tangle is a solid torus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-double-branched-cover-of-an-oriented-link
  - thm-classification-of-connected-covering-spaces
  - def-euler-characteristic-of-a-finite-cw-complex
  - thm-classification-of-compact-connected-surfaces
  - lem-two-disjoint-circles-in-s-two-cobound-an-annulus
  - def-axiom-of-choice
axiom_use: "Assumes AC only through the compact-surface classification and the link branch-cover interfaces."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §2, proof of Proposition 2.1"
      url: "https://arxiv.org/pdf/math/0309170v1"
---

## Statement

Let $B=D^2\times[0,1]$ be a three-ball and let $A=\{a_1,a_2\}\times[0,1]$ be the trivial pair of vertical properly embedded arcs, with $a_1\ne a_2$ in the interior of $D^2$. The connected two-fold cover of $B\setminus A$ whose meridians about both arcs have monodromy $1\in\mathbb Z/2$ extends across $A$ as a simple branched cover, and its total space is a solid torus.

## Statement references

[[def-double-branched-cover-of-an-oriented-link|Two-fold branch-cover convention]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §2, proof of Proposition 2.1](https://arxiv.org/pdf/math/0309170v1)

## Facts & Assumptions

**Given:** The disk with two marked branch points and its product with an interval.

[F1] A connected two-fold cover of the punctured disk is determined by the homomorphism that sends each puncture meridian to $1$ ([[thm-classification-of-connected-covering-spaces]]).

[F2] The branch cover is obtained by filling the two punctures with the local square map ([[def-double-branched-cover-of-an-oriented-link]]).

[F3] Euler characteristic is the alternating count of cells in a finite CW structure ([[def-euler-characteristic-of-a-finite-cw-complex]]); a compact connected boundaryless orientable surface with Euler characteristic $2$ is $S^2$ ([[thm-classification-of-compact-connected-surfaces]]).

[F4] Two disjoint embedded circles on $S^2$ cobound an annulus ([[lem-two-disjoint-circles-in-s-two-cobound-an-annulus]]).

## Proof

1.1 The restriction to a cross-section is the connected two-fold cover of $D^2\setminus\{a_1,a_2\}$ with both meridians nontrivial. Its extension across the two branch points is a compact connected orientable surface with boundary by [F1]–[F2]. Triangulate the disk with both branch points as vertices. A triangulated $m$-gon with a fan from one vertex has $V=m$, $E=2m-3$, and $F=m-2$, hence Euler characteristic $1$; inserting a branch point by subdividing a face preserves the alternating cell count. Lifting cells gives two lifts of every open cell away from the two branch vertices and one lift of each branch vertex, so the extended cover has Euler characteristic $2\cdot1-2=0$. The boundary loop encloses both branch points, so its monodromy is $1+1=0$ in $\mathbb Z/2$; a two-sheeted cover of the boundary circle with trivial monodromy has two boundary circles. Cap those two boundary circles with disks. The resulting closed connected orientable surface has Euler characteristic $0+1+1=2$, so [F3] identifies it with $S^2$. The original surface is the complement of the interiors of those two disjoint cap disks; [F4] identifies the region between their boundary circles as an annulus. [F1, F2, F3, F4, given, algebra]

2.1 Since the arcs are the product $A=\{a_1,a_2\}\times[0,1]$, the branched cover of $(B,A)$ is the product of the annulus in step 1.1 with $[0,1]$. An annulus times an interval is a solid torus. [F1, F2, step 1.1, construct] ∎
