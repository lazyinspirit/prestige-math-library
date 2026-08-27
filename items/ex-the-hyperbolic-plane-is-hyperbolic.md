---
id: ex-the-hyperbolic-plane-is-hyperbolic
kind: example
title: "The hyperbolic plane is hyperbolic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-delta-slim-geodesic-triangle-and-hyperbolic-space]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Example

The hyperbolic plane $\mathbb H^2$ is a hyperbolic geodesic metric space.

## Facts & Assumptions

**Given:** The standard geodesic metric on $\mathbb H^2$.

[A1] Classical hyperbolic geometry gives a uniform slimness constant for
geodesic triangles in $\mathbb H^2$.

[L1] A geodesic metric space is hyperbolic exactly when all geodesic triangles
are $\delta$-slim for some $\delta \ge 0$
([[def-delta-slim-geodesic-triangle-and-hyperbolic-space]]).

## Verification

**Proof technique:** direct.

1.1 By [A1], geodesic triangles in $\mathbb H^2$ are uniformly slim. [given, A1]

2.1 Therefore [L1] shows that $\mathbb H^2$ is hyperbolic. [L1, step 1.1] ∎ 