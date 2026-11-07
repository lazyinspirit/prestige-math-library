---
id: def-good-reduction-of-smooth-proper-curve-at-a-finite-place
kind: definition
title: Good reduction of a smooth proper curve at a finite place
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-algebraic-curve-over-field
  - def-geometric-fibre
  - def-geometrically-reduced-integral-connected-fibre
  - def-scheme-over-base
  - def-smooth-morphism-schemes
  - def-proper-morphism
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §4, printed pp. 144–145"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V §4.2, printed p. 187"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a number field, let $\mathcal O_K$ be its ring of integers, and let
$\mathfrak p$ be a nonzero prime ideal of $\mathcal O_K$. Write
$R=\mathcal O_{K,\mathfrak p}$ for the localization and $K$ for its fraction
field. Let $C/K$ be a smooth, proper, geometrically connected curve. A
**smooth proper curve model of $C$ at $\mathfrak p$** is a proper smooth
morphism $\mathcal C\to\operatorname{Spec}R$ whose generic fibre is identified
with $C$ and whose geometric fibres are connected curves of dimension one.
The curve $C$ has **good reduction at $\mathfrak p$** if such a model exists.
For a finite set $S$ of nonzero prime ideals of $\mathcal O_K$, it has good
reduction outside $S$ if it has good reduction at every nonzero prime ideal
$\mathfrak p\notin S$.

## Definition references

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-scheme-over-base]]

[[def-smooth-morphism-schemes]]

[[def-proper-morphism]]

[Milne, Chapter IV §4, good reduction at a finite prime](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz et al., Chapter V §4.2, good reduction outside a finite set](https://yhzhumath.github.io/Mordell2024/RP.pdf)
