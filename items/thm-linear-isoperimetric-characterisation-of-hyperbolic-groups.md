---
id: thm-linear-isoperimetric-characterisation-of-hyperbolic-groups
kind: theorem
title: "Linear isoperimetric characterisation of hyperbolic groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, def-hyperbolic-group, thm-hyperbolic-groups-admit-finite-dehn-presentations, thm-morse-stability-of-quasi-geodesics]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

A finitely generated group is hyperbolic if and only if it admits a finite
presentation satisfying a linear isoperimetric inequality for van Kampen area:
there is a constant $C>0$ such that every null-homotopic word $w$ has a van
Kampen diagram with at most $C|w|$ $2$-cells.

## Facts & Assumptions

**Given:** A finitely generated group $G$.

[A1] A finite Dehn presentation gives a linear isoperimetric inequality by shortening a trivial word one relator cell at a time.

[A2] A finite presentation with linear isoperimetric inequality yields uniformly thin geodesic bigons, and hence a hyperbolic Cayley graph.

[L1] Hyperbolic groups admit finite Dehn presentations
([[thm-hyperbolic-groups-admit-finite-dehn-presentations]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is hyperbolic, then [L1] supplies a finite Dehn presentation, and [A1] turns that Dehn property into a linear isoperimetric inequality. [A1, L1]

2.1 Conversely, if a finite presentation satisfies a linear isoperimetric inequality, then [A2] gives thin geodesic bigons and hence a hyperbolic Cayley graph. Therefore the two conditions are equivalent. [A2, step 1.1] ∎
