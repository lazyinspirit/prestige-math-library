---
id: rem-maximum-principles-need-domain-and-boundary-hypotheses
kind: remark
title: "Maximum principles need domain and boundary hypotheses"
status: draft
origin: pipeline
deps: [thm-weak-maximum-principle-for-the-laplacian, thm-strong-maximum-principle-for-harmonic-functions, thm-hopf-boundary-point-lemma-for-the-laplacian, thm-maximum-principle-with-limsup-control-at-infinity]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§§2.3–2.4, pp.26–32"
---

## Remark

The weak principle requires boundedness and continuity on the full closure; it allows disconnected open sets. Its conclusion is an attained boundary maximum for subharmonic functions. The strong harmonic principle instead uses connectedness and an attained **global** interior extremum; neither boundedness nor a boundary trace is needed. These are the distinct scopes of [[thm-weak-maximum-principle-for-the-laplacian]] and [[thm-strong-maximum-principle-for-harmonic-functions]].

At a boundary point, [[thm-hopf-boundary-point-lemma-for-the-laplacian]] needs an interior tangent ball, a strict interior inequality, continuity on its closure, and existence of the supplied outward directional derivative. It gives a positive outward derivative at a maximum; negating the function reverses the sign at a minimum.

Unbounded sets can be treated by [[thm-maximum-principle-with-limsup-control-at-infinity]] if the same finite upper bound controls the boundary and the limsup at infinity. No open-mapping or general boundary-normal theorem is asserted here.
