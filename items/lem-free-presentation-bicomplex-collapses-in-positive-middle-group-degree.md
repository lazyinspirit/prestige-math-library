---
id: lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree
kind: lemma
title: "Free-presentation total homology and its degree-one edges"
status: draft
origin: pipeline
deps: [def-free-presentation-lyndon-bar-bicomplex-and-edge-maps, lem-free-group-augmentation-ideal-has-the-generator-difference-basis, lem-bar-first-integral-homology-is-the-abelianization, lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For the free-presentation bicomplex, $H_n(\operatorname{Tot}D)=0$ for $n>1$, $H_1(\operatorname{Tot}D)=F_{\rm ab}$, $E^2_{01}=R/[F,R]$, and $E^2_{p0}=H_p(G;\mathbb Z)$. The degree-one maps are inclusion and quotient on abelianizations. This does not assert vanishing of every positive-degree E2 term. Retain DC and supplied-resolution conventions.

## Facts & Assumptions

**Given:** The free presentation and bicomplex of the Definition, with the inherited homology conventions.

[F1] Total homology is H*(F), E2 is H_p(G;H_q(R)), and the degree-one edges are identified ([[def-free-presentation-lyndon-bar-bicomplex-and-edge-maps]]).

[F2] A free group has a length-one free resolution ([[lem-free-group-augmentation-ideal-has-the-generator-difference-basis]]).

[F3] H1(R) conjugation coinvariants equal R/[F,R] ([[lem-bar-first-integral-homology-is-the-abelianization]]).

## Proof

1.1 The total homology equals H*(F) by F1. The free resolution of F2 has no terms above degree one, so after tensoring it has zero homology there; in degree one it gives the free abelian group on the free generators, which is $F_{\rm ab}$. Hence the asserted total vanishing holds even for an infinite free generating set. [F1, F2, given]

2.1 The zero homology of R with trivial integers is $\mathbb Z$: every vertex is identified, and each degree-one boundary is a difference of vertices. Conjugation fixes this generator. Consequently $E^2_{p0}=H_p(G;\mathbb Z)$. Also $E^2_{01}=H_0(G;H_1(R;\mathbb Z))=R/[F,R]$ by F3. The edge calculations of F1 send r to its class in $F_{\rm ab}$ and f to its image in $G_{\rm ab}$, with positive signs. [F1, F3, step 1.1, algebra] ∎
