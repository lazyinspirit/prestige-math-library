---
id: def-fredholm-maps-and-regular-values-on-countable-banach-manifolds
kind: definition
title: "Fredholm maps and regular values on countable-base Banach manifolds"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem, §1"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
---

## Definition

A bounded linear map $T:E\to F$ of Banach spaces is **Fredholm** when its range is closed and both $\ker T$ and $F/\operatorname{im}T$ are finite-dimensional; its index is $\dim\ker T-\dim(F/\operatorname{im}T)$.  A $C^h$ map $P:\mathcal X\to\mathcal Y$ between countable-base Banach manifolds is Fredholm of index $m$ if every $dP_x$ is Fredholm of index $m$.  A value $y$ is regular if each $x\in P^{-1}(y)$ has surjective derivative (vacuously if the fibre is empty).
