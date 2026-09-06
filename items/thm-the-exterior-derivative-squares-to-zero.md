---
id: thm-the-exterior-derivative-squares-to-zero
kind: theorem
title: "The exterior derivative squares to zero"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-exterior-derivative-is-local, thm-local-coordinate-formula-for-the-exterior-derivative, thm-clairaut-schwarz-mixed-partials]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

For every differential form $\omega$, $d(d\omega)=0$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $\omega=\eta$ on an open set $U$, then $d\omega=d\eta$ on $U$. ([[prop-the-exterior-derivative-is-local]]).

[F2] Smooth coefficient functions have equal mixed second partial derivatives ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 On a chart, write $\omega=\sum_I\omega_I\,dx^I$.  Applying the coordinate formula twice gives $$ d^2\omega =\sum_{I,j,\ell}\partial_\ell\partial_j\omega_I\, dx^\ell\wedge dx^j\wedge dx^I. $$ The terms with $j=\ell$ vanish.  For $j\ne\ell$, the terms indexed by $(j,\ell)$ and $(\ell,j)$ cancel because mixed partials of the smooth coefficient $\omega_I$ agree while $dx^\ell\wedge dx^j=-dx^j\wedge dx^\ell$. [F2, given, algebra]

2.1 The coordinate identity holds on every chart and therefore globally by locality. [F1, step 1.1] ∎
