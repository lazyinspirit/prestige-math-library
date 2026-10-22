---
id: lem-knot-connected-sum-well-defined
kind: lemma
title: "The oriented connected sum is independent of its local choices"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-knot-connected-sum-and-prime-knot
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-countable-choice
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, §§7.1–7.3, printed pp.91–93"
    - title: "Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Proposition 2.14, printed pp.24–25"
---

## Statement

Assume the Axiom of Countable Choice. For two smooth oriented knots, changing either representative by oriented ambient isotopy, changing the sufficiently small coordinate ball and trivial subarc used for either knot, or changing the positive local frame used to identify that ball with the standard oriented ball does not change the oriented ambient-isotopy class of the connected-sum knot, when the boundary gluing map is the fixed standard orientation-reversing map from the definition.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The connected-sum construction and its fixed gluing convention]]

[[thm-isotopy-extension|Ambient extension of compact isotopies of ball-arc pairs]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and two smooth oriented knots with connected-sum data as in the Definition.

[F1] A knot is a smooth embedding of one oriented circle in the standard oriented three-sphere, and equivalence of oriented knots is by an orientation-preserving ambient isotopy. ([[def-oriented-link-in-s-three-and-ambient-isotopy]])

[F2] The connected-sum datum uses an orientation-preserving embedding of a standard ball-arc pair into each knot and a fixed standard boundary gluing. ([[def-knot-connected-sum-and-prime-knot]])

[F3] Under the Axiom of Countable Choice, an isotopy of embeddings of a compact manifold with boundary into a boundaryless manifold extends to an ambient isotopy supported near its track. ([[thm-isotopy-extension]])

[A1] The Axiom of Countable Choice is the sequence-choice principle stated in the item. ([[def-countable-choice]])

## Proof

**Given:** $\mathrm{AC}_\omega$, the two oriented knot embeddings, and two sets of connected-sum data.

1.1 A change of knot representative already comes with an oriented ambient isotopy by [F1]. Applying that isotopy to its ball-arc data carries the cut complement and its boundary collars to the new data, so the standard gluing produces an ambient-isotopic sum. A change of radius in one local straightening chart is the isotopy that rescales the standard ball radially while preserving its oriented diameter. To preserve the entire knot, perform this rescaling by a radial vector field in a larger straightening chart, equal to the required radial field on all swept balls and cut off before the chart boundary. The chart meets the knot only in its diameter line, to which this field is tangent. Its flow therefore preserves the whole knot setwise, including the part outside the moving ball, and identifies the two cut complements and their boundary parametrizations. [given, F1, F2, F3, A1, construct]

1.2 For two local oriented ball-arc charts centered at the same point, express them in one smooth coordinate chart. Their transition germ fixes the center, carries the positive tangent line of the knot to itself, and has positive determinant. Shrink to a common ball and use the smooth rescaling homotopy $G_s(x)=s^{-1}(G(sx)-G(0))$ for $s>0$, with $G_0(x)=DG_0(x)$. Taylor's formula gives the smooth extension at $s=0$. On a sufficiently small common ball the differentials stay uniformly close to the injective linear map $DG_0$, so every $G_s$ is an embedding and preserves the oriented diameter. The subgroup of invertible linear maps preserving that oriented line and the ambient orientation is path-connected: in line-normal coordinates its diagonal blocks lie in $(0,\infty)$ and $GL^+(2,\mathbb R)$, and the shear block contracts linearly to zero. Thus the chart germ is isotopic through oriented ball-arc embeddings to the fixed standard chart. Here too ambient extension must preserve the whole knot. On each moving ball the isotopy velocity is tangent to the knot along its diameter. In straightening coordinates $(s,u,v)$ with knot $u=v=0$, its normal components vanish on that axis and have the form $u a+v b$, with smooth coefficients, by integrating their normal derivatives. Extend these coefficients and the tangential component slightly past the moving ball, then cut off inside the larger straightening chart. The resulting extension still has zero normal components along the knot. Finite such extensions and a partition of unity give the velocity-field construction of [F3] tangent to the whole knot, with zero field outside the chart. Uniqueness of its flow keeps the knot setwise fixed while carrying the prescribed balls and their boundary parametrizations. [F2, construct, algebra]

2.1 If the marked points differ, move the parameter point along the knot circle by a smooth isotopy of that circle. The resulting family of knot embeddings carries the short oriented subarc along a finite chain of local straightening charts; compactness of the parameter interval gives a common sufficiently small ball radius. Apply [F3] to the whole-circle isotopy; its extension carries the entire knot to itself. For the chart isotopies use the knot-preserving extensions explicitly constructed in steps 1.1 and 1.2. The resulting ambient isotopies identify the cut complements with their boundary collars and preserve the fixed endpoint pairing in the standard gluing. Hence they induce an oriented ambient isotopy between the two connected-sum outputs. [F1, F2, F3, A1, step 1.1, step 1.2, construct] ∎

## Sources

[[def-knot-connected-sum-and-prime-knot]]

[[thm-isotopy-extension]]
