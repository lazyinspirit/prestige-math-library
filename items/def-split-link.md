---
id: def-split-link
kind: definition
title: "Split and nonsplit links"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-oriented-link-in-s-three-and-ambient-isotopy]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; splitness is defined by existence of a separating sphere."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "William W. Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), Theorem 1(a), pp. 37–41"
      url: "https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, §2.1, arXiv:2008.06490v3"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Definition

An oriented link $L\subset S^3$ is **split** if a smoothly embedded sphere $S\subset S^3\setminus L$ has link points in both components of $S^3\setminus S$; otherwise $L$ is **nonsplit**.

## Definition references

[Menasco, *Closed incompressible surfaces in alternating knot and link complements* (1984), Theorem 1(a)](https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2)

[Kindred, *A geometric proof of the flyping theorem*, §2.1](https://arxiv.org/pdf/2008.06490v3)

## Facts & Assumptions

**Given:** A link $L\subset S^3$ as a finite disjoint union of embedded circles.

[F1] A link is a finite disjoint union of smoothly embedded circles in $S^3$ ([[def-oriented-link-in-s-three-and-ambient-isotopy]]).

## Proof
1.1 Forgetting the component orientations does not change the point set $L$ or the complementary regions of a sphere disjoint from it. Thus the split predicate depends only on the underlying unoriented link type, as required by [F1]. [given, F1, construct]

2.1 Ambient isotopy carries any witnessing sphere and the two components of its complement to a sphere and two complementary components for the image link. The existence or nonexistence of a witness is therefore an ambient-isotopy invariant. [given, F1, step 1.1, construct] ∎
