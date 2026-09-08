---
id: cex-a-corner-is-not-covered-by-the-single-c-one-chart-theorem
kind: counterexample
title: A box is not a C1-boundary domain
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter Definition 1.35, printed pp. 13–14, and the piecewise-boundary comparison after Theorem 1.46, printed p. 18 (PDF pp. 19–20 and 24). The normal-limit contradiction is supplied here.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-bounded-c-one-domain-boundary-charts-and-outward-normal", "def-bounded-piecewise-c-one-euclidean-domain", "ex-internal-face-cancellation-for-two-glued-regions"]
---

## Statement refuted

The claim that every finite piecewise $C^1$ domain is a $C^1$-boundary domain is false. For $n\ge2$, the box $Q=(0,1)^n$ has a finite piecewise $C^1$ presentation, but at any edge or vertex its boundary has no single regular one-sided $C^1$ graph chart.

## Facts & Assumptions

**Given:** Take the unit box $(0,1)^n$, $n\ge2$, and a boundary point with at least two endpoint coordinates.

[F1] Positive-length rectangular boxes have the explicit finite-face presentation. ([[ex-internal-face-cancellation-for-two-glued-regions]]).

[F2] A C1 boundary is a regular one-sided graph. ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

## Counterexample

1.1 Present Q by its 2n closed coordinate faces with normals $\pm e_i$ and the set E where at least two coordinates are endpoints. As in the explicit box verification F1, the parameter boundaries are finite unions of bounded coordinate hyperplanes and have measure zero, and every boundary point outside E has a single planar one-sided neighborhood. This verifies the finite piecewise hypotheses. [given, F1]

2.1 Let p have at least two endpoint coordinates i and j. Approach p through relative interiors of the i-face, moving every other endpoint coordinate slightly into (0,1); also approach through relative interiors of the j-face. The outward normals along these two sequences are the distinct constants $\varepsilon_i e_i$ and $\varepsilon_j e_j$, with $\varepsilon_k=-1$ at endpoint 0 and $+1$ at endpoint 1. If a C1 graph chart as in F2 existed at p, its normal would be the continuous function $(-Dh,1)/\sqrt{1+|Dh|^2}$, transformed by the chart rotation and given the unique outward sign. At neighboring planar points this normal must be the corresponding coordinate normal, since orthogonality to the plane and the outward side uniquely determine it. Continuity at p would force those two distinct constant vectors to have the same limit, a contradiction. This proves failure at every edge and vertex, including the origin. [step 1.1, F2, algebra] ∎

## Source notes

Hunter Definition 1.35, printed pp. 13–14, and the piecewise-boundary comparison after Theorem 1.46, printed p. 18 (PDF pp. 19–20 and 24). The normal-limit contradiction is supplied here.

