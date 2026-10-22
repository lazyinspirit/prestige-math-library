---
id: thm-carter-saito-movie-move-equivalence
kind: theorem
title: "Movie-move equivalence for surface cobordisms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-generic-movie-of-an-oriented-knot-cobordism
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. Scott Carter and Masahico Saito, Reidemeister moves for surface isotopies and their interpretations as moves to movies"
      url: "https://www.worldscientific.com/doi/pdf/10.1142/S0218216593000167"
      locator: "Journal of Knot Theory and Its Ramifications 2 (1993), pp.251–284; classification by the fifteen movie moves"
    - title: "Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology, §4.2"
      url: "https://arxiv.org/pdf/math/0206303"
      locator: "Printed p.1235; statement of the Carter–Saito movie-equivalence theorem used in the proof"
    - title: "Hilary Hunt, Movie presentations of isotopies, §5.2"
      url: "https://tqft.net/web/research/students/HilaryHunt/thesis.pdf"
      locator: "Thesis pp.42–44; statement and illustrated movie moves, with proof referred to Carter–Saito"
---

## Statement

Let \(\Sigma_0,\Sigma_1\subset S^3\times[0,1]\) be compact smooth properly embedded oriented surfaces from fixed oriented knots \(K_0\) to \(K_1\), with the same boundary parametrizations and product collars. Suppose their generic movies represent ambient isotopic cobordisms by an isotopy fixed on those collars. Then one movie can be changed to the other by a finite sequence of the fifteen Carter–Saito movie moves and interchanges of two disjoint critical points of the height function. Every intermediate movie represents a generic surface cobordism with the same fixed boundary data.

## Statement references

[[def-generic-movie-of-an-oriented-knot-cobordism|Generic movies and boundary collars]]

[Carter and Saito, *Reidemeister moves for surface isotopies and their interpretations as moves to movies*, pp.251–284](https://www.worldscientific.com/doi/pdf/10.1142/S0218216593000167)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, §4.2](https://arxiv.org/pdf/math/0206303)

[Hunt, *Movie presentations of isotopies*, §5.2](https://tqft.net/web/research/students/HilaryHunt/thesis.pdf)

## Unresolved proof obligations

The Carter–Saito source is the primary proof source for the finite movie-move classification. Its official publisher PDF, EPDF, and PDFPLUS retrievals failed in prior attempts. The alternative thesis states the theorem and explicitly refers its proof to Carter–Saito; Jacobsson quotes the result before using it and does not prove the classification. No proof of the general-position and Cerf-decomposition argument producing exactly the fifteen moves has been completed in this carrier. The theorem remains escalated pending a verified complete proof source or a full local proof.
