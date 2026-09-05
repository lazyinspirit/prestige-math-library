---
id: rem-noncompact-morse-genericity-is-not-an-open-dense-claim
kind: remark
title: "On a noncompact manifold, this page states Morse genericity as a strong-topology residual theorem"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-morse-functions-form-a-residual-subset, thm-morse-functions-are-open-dense-on-a-compact-manifold]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
---

## Remark

The compact theorem and the general theorem package different results.

On a compact manifold,
[[thm-morse-functions-are-open-dense-on-a-compact-manifold]] gives an open dense
subset in the ordinary $C^2$ or $C^\infty$ topology. On an arbitrary
noncompact manifold, [[thm-morse-functions-form-a-residual-subset]] is the
strong-topology theorem proved on this page.

The drifting-shell counterexample below serves a narrower purpose. It shows
that perturbations which are tiny only on each fixed compact set can still
create new critical points far out at infinity, so that kind of weak control is
not a substitute for the strong topology. By itself, that example does not
settle any separate openness claim.
