---
id: rem-euclidean-divergence-versus-classical-and-manifold-stokes
kind: remark
title: Euclidean divergence and the Stokes comparison
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.12, Theorem 1.46 and ensuing discussion, printed pp. 17–18 (PDF pp. 23–24). The manifold comparison is a forward explanatory comment, not a theorem used in this batch.
status: published
origin: pipeline
deps: ["thm-divergence-theorem-for-bounded-c-one-euclidean-domains", "thm-divergence-theorem-for-bounded-piecewise-c-one-domains"]
---

## Remarks

The Euclidean results here prove the divergence identity in every dimension $n\ge2$ from graph integration, a finite partition, and explicit edge cutoffs. The earlier three-dimensional finite-gluing vector-calculus result is a narrower comparison. In the later smooth differential-form setting, the flux form $\iota_F(dx_1\wedge\cdots\wedge dx_n)$ has exterior derivative $(\operatorname{div}F)dx_1\wedge\cdots\wedge dx_n$, so manifold Stokes specializes to the smooth-boundary formula. That comparison supplies no dependency for this proof. Neither rough-boundary divergence nor Sobolev traces are asserted here.

## Source notes

Hunter §1.12, Theorem 1.46 and ensuing discussion, printed pp. 17–18 (PDF pp. 23–24). The manifold comparison is a forward explanatory comment, not a theorem used in this batch.
