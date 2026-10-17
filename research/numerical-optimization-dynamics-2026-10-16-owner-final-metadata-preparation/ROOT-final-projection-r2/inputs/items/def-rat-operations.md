---
id: def-rat-operations
kind: definition
title: "Arithmetic on the rationals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rationals, lem-int-cancellation]
justified_by: [lem-rat-ops-well-defined, lem-rat-inverse-well-defined]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Definition

On $\mathbb{Q}$ ([[def-rationals]]) define, on representatives,

$$[(a,b)] + [(c,d)] := [(ad + cb,\; bd)], \qquad [(a,b)] \cdot [(c,d)] := [(ac,\; bd)],$$
$$-[(a,b)] := [(-a, b)], \qquad 0 := [(0,1)], \qquad 1 := [(1,1)],$$

and, for $[(a,b)] \ne 0$ (equivalently $a \ne 0$), the inverse
$[(a,b)]^{-1} := [(b,a)]$.

## Remarks

- The denominators stay legal: $bd \ne 0$ because $\mathbb{Z}$ has no zero
  divisors ([[lem-int-cancellation]]).
- Independence of representatives: [[lem-rat-ops-well-defined]] for sum, product,
  and negation; [[lem-rat-inverse-well-defined]] for the reciprocal.
