---
id: op-global-siegel-effective-bound
kind: open-problem
title: Effective general bounds for integral points in Siegel’s theorem
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-s-integral-points-on-an-affine-curve
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: G. Faltings, G. Wüstholz et al., Rational Points, Chapter V §5
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: Theorem 5.1 and complete proof, printed pp. 198–200; arbitrary finite S and the ineffective finiteness conclusion.
    - title: Bjorn Poonen, Rational Points on Varieties
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
      locator: Chapter 9 §9.5.1, the Mordell–Faltings theorem and its ineffectivity boundary; the separate Faltings–Wüstholz source supplies the Siegel context.
---

## Open problem

Let $K$ be a number field, let $S$ be a finite set of nonzero prime ideals of $\mathcal O_K$, let $X/K$ be a smooth proper geometrically connected curve of genus $g$, and let $D\subset X$ be a nonempty finite reduced closed subscheme. Put $d=\#D(\overline K)$ and assume $g\ge1$ or $d\ge3$. Set $Y=X\setminus D$, fix a flat affine finite-type $\mathcal O_{K,S}$-model $\mathcal Y$ with generic fibre $Y$, and fix a projective embedding $j:X\hookrightarrow\mathbb P^n_K$. Prove that there is a terminating algorithm which, from explicit equations for $K,S,X,D,\mathcal Y$ and $j$, outputs a bound $B$ such that every section
$$P\in Y(\mathcal O_{K,S};\mathcal Y)=\operatorname{Hom}_{\mathcal O_{K,S}}(\operatorname{Spec}\mathcal O_{K,S},\mathcal Y)$$
satisfies $h(j(P))\le B$, where $h$ is the absolute logarithmic projective height. The algorithm and bound must work uniformly for every input in this stated class; the problem asks for a height bound, not a point-listing algorithm.

## Open problem references

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[def-s-integral-points-on-an-affine-curve]]

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[Faltings–Wüstholz, *Rational Points*, Chapter V §5, Theorem 5.1](https://yhzhumath.github.io/Mordell2024/RP.pdf)

[Bjorn Poonen, *Rational Points on Varieties*, Chapter 9 §9.5.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** $K,S,X,D,\mathcal Y$ and $j$ with the hypotheses in the statement.

[F1] Integral points on the fixed affine model are sections $\operatorname{Spec}\mathcal O_{K,S}\to\mathcal Y$; the model is part of the data. ([[def-s-integral-points-on-an-affine-curve]])

[F2] The absolute logarithmic projective height is defined on $\mathbb P^n(K)$, with the library's AC convention. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]], [[def-axiom-of-choice]])

## Status

Faltings–Wüstholz proves finiteness for this hyperbolic affine-curve range but the cited proof gives no effective height bound. Effective unit-equation and Thue cases are special subcases and are not promoted to a general algorithm here.

## Unresolved prerequisites

The current Batch 138 manifest contains draft carriers for the fixed-model definition `def-s-integral-points-on-an-affine-curve` (level 0) and the finiteness theorem `thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves` (level 27); neither currently has a Step 1 record. The theorem's current Proof status remains escalated on its exact Mordell–Faltings, Shafarevich and Parshin inputs, so this open problem does not use it as an accepted proof supplier. Faltings–Wüstholz is cited only for the established but ineffective finiteness context; the problem asks for the stronger effective height bound.
