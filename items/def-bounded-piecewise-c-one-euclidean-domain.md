---
id: def-bounded-piecewise-c-one-euclidean-domain
kind: definition
title: Specified finite piecewise C1 boundary presentations
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.12, printed p. 18, mentions the piecewise extension. The exact finite-face/null-edge class is the explicit local presentation retained in the batch design.
status: draft
origin: pipeline
deps: ["def-bounded-c-one-domain-boundary-charts-and-outward-normal", "lem-surface-integral-is-independent-of-c-one-boundary-charts"]
---

## Definition

Under the $\mathrm{AC}_\omega$ convention of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], a finite piecewise $C^1$ presentation of a nonempty bounded open $\Omega\subset\mathbb R^n$, $n\ge2$, consists of compact faces $S_1,\ldots,S_q$ covering its boundary, each a compact Borel subset of a regular $C^1$ hypersurface patch, and a compact edge set $E\subset\partial\Omega$. Require $S_j\cap E$ to have surface measure zero in each face, using [[lem-surface-integral-is-independent-of-c-one-boundary-charts]]. E contains the boundaries of the faces relative to their patches and every overlap $S_i\cap S_j$, i different from j. At every point outside E the domain boundary is locally a single $C^1$ graph with Omega on one side. Each face carries this actual outward unit normal off E. Values assigned to the normal on E do not affect its integral.

For a specified finite gluing also list the open pieces with disjoint interiors, the shared faces, and their opposite outward normals. Require the pieces to cover the final domain up to their boundary faces, and the exposed faces to give its specified presentation. Internal faces are counted twice before cancellation, once from each side. The phrase piecewise smooth by itself supplies none of this data.

## Source notes

Hunter §1.12, printed p. 18, mentions the piecewise extension. The exact finite-face/null-edge class is the explicit local presentation retained in the batch design.

