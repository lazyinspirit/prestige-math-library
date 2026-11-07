---
id: def-s-integral-points-on-an-affine-curve
kind: definition
title: S-integral points on a fixed affine model of a curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-algebraic-curve-over-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Faltings–Wüstholz, Rational Points, Chapter V §5, printed pp. 198–200
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
    - title: Jan-Hendrik Evertse, Diophantine Equations, Chapter 5 §5.3
      url: https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf
---

## Definition

Let $K$ be a number field, let $S$ be a finite set of nonzero prime ideals of its ring of integers $\mathcal O_K$, let $X/K$ be a smooth proper geometrically connected curve, and let $\Delta$ be a nonempty finite reduced closed subscheme of $X$. Put $Y=X\setminus\Delta$, and fix a flat affine finite-type $\mathcal O_{K,S}$-model $\mathcal Y$ whose generic fibre is $Y$. Define the set of $S$-integral points of $Y$ relative to this fixed model by

$$Y(\mathcal O_{K,S};\mathcal Y):=\operatorname{Hom}_{\mathcal O_{K,S}}(\operatorname{Spec}\mathcal O_{K,S},\mathcal Y).$$

The model $\mathcal Y$ is part of the data; this notation does not identify integral-point sets for different models without enlarging $S$.

## Definition references

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[def-algebraic-curve-over-field]]

Faltings–Wüstholz, *Rational Points*, Chapter V §5, printed pp. 198–200: https://yhzhumath.github.io/Mordell2024/RP.pdf

Jan-Hendrik Evertse, *Diophantine Equations*, Chapter 5 §5.3: https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf
