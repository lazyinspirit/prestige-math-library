---
id: def-int-operations
kind: definition
title: "Arithmetic on the integers"
status: published
origin: session
deps: [def-integers]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

On $\mathbb{Z}$ ([[def-integers]]) define, on representatives,

$$[(a,b)] + [(c,d)] := [(a+c,\; b+d)],$$
$$[(a,b)] \cdot [(c,d)] := [(ac+bd,\; ad+bc)],$$
$$-[(a,b)] := [(b,a)], \qquad 0 := [(0,0)], \qquad 1 := [(1,0)].$$

These do not depend on the chosen representatives
([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).

## Remarks

- The product formula is forced by the intended meaning: if $(a,b)$ stands for
  $a-b$ and $(c,d)$ for $c-d$, then $(a-b)(c-d) = (ac+bd) - (ad+bc)$.
- Negation swaps the components: $-(a-b) = b-a$.
