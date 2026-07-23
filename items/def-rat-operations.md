---
id: def-rat-operations
kind: definition
title: "Arithmetic on the rationals"
status: draft
origin: session
deps: [def-rationals, lem-int-cancellation]
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
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
- Independence of representatives: [[lem-rat-ops-well-defined]].
