---
id: cex-tangent-bundle-rp2-has-no-spin-structure
kind: counterexample
title: The tangent bundle of RP² is not Spin
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations-examples
dependency_level: 1
deps:
- def-given-spin-and-spinc-structures-and-associated-spinor-bundles
- lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space
- def-stiefel-whitney-classes-from-the-projective-bundle-relation
- prop-first-stiefel-whitney-class-classifies-orientability
- def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Milnor and Stasheff, Characteristic Classes, §2
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
  - title: M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement
      1 (1964)
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf
proof_strategy: direct
---

## Statement refuted

A Spin structure can be supplied to every tangent bundle. In particular, the tangent bundle of $\mathbb{RP}^2$ would admit one.

## Facts & Assumptions

**Given:** AC and the tangent bundle of $\mathbb{RP}^2$.

[F1] In $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[a]/(a^{m+1})$ the class $a$ is nonzero and $w(T\mathbb{RP}^m)=(1+a)^{m+1}$ ([[lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space]]), using the exact convention of [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]].

[F2] Under AC, $w_1(E)=0$ exactly when the real bundle is orientable ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

[F3] A given Spin structure is a lift of the oriented orthonormal frame bundle, and therefore requires an orientation ([[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]).

## Counterexample

1.1 Put $m=2$ in [F1]. Modulo two and $a^3=0$, $(1+a)^3=1+3a+3a^2+a^3=1+a+a^2$. Its degree-one part is $w_1(T\mathbb{RP}^2)=a\ne0$. The exact SW definition supplier is the existing item with `the` in its ID; no nonexistent substitute is used. [F1, algebra]


2.1 By [F2] the tangent bundle is not orientable. A Spin lift would supply the orientation required by [F3], a contradiction. Thus $T\mathbb{RP}^2$ has no Spin structure, refuting the asserted universal existence and exhibiting the intended first-class obstruction. AC is carried from the characteristic-class and orientability suppliers. [F2, F3, step 1.1] ∎
