---
id: lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold
kind: lemma
title: "The index sum of an outward field on an even-dimensional manifold"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poincare-hopf-for-closed-manifolds, prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions, cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic, lem-reflection-of-an-outward-field-extends-over-the-double, lem-local-index-is-additive-under-a-transverse-perturbation, lem-negation-scales-the-local-index-by-minus-one-to-the-dimension, def-isolated-zero-and-local-index-of-a-vector-field, def-nondegenerate-zero-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, def-euler-characteristic-of-a-compact-manifold, def-inward-outward-and-boundary-tangent-vectors, def-double-of-a-smooth-manifold-with-boundary, thm-the-double-has-a-well-defined-smooth-structure, thm-collar-neighborhood-theorem, prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Step 3, printed pp. 40-41 (boundary smoothness caveat; the even-dimensional doubling argument here is derived from the cited local suppliers)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Theorem 2.3.1, printed p. 33 (the boundary form with an outward field)"
dependency_level: 7
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a compact
smooth $n$-manifold with nonempty boundary, $n$ even, and let $X$ be a smooth
vector field with only isolated zeros that is nonzero and strictly outward
along $\partial M$ ([[def-inward-outward-and-boundary-tangent-vectors]]). Then
$$\sum_{p:X(p)=0}\operatorname{ind}_pX=\chi(M).$$

## Facts & Assumptions

**Given:** A compact smooth even-dimensional manifold $M$ with nonempty boundary, and a smooth field $X$ on $M$ with only isolated zeros, nonzero and strictly outward along $\partial M$.

[F1] Reduction: the zeros of $X$ lie in the interior at positive distance from $\partial M$, because $X\ne0$ on the compact boundary and there are finitely many zeros; hence, by part (iii) of the index-perturbation lemma, they can be perturbed inside disjoint small balls contained in the interior of $M$ and away from a neighbourhood of $\partial M$, producing a field $X_0$ with only nondegenerate zeros, the same index sum, and still strictly outward on $\partial M$ ([[lem-local-index-is-additive-under-a-transverse-perturbation]], [[def-isolated-zero-and-local-index-of-a-vector-field]], [[def-inward-outward-and-boundary-tangent-vectors]]).

[F2] Doubling: choose the global flow collar of $-X$ and use it to define $DM$, a closed smooth $n$-manifold with seam involution $\tau$, and the reflected field $X^+$ of [[lem-reflection-of-an-outward-field-extends-over-the-double]] is smooth, has zeros exactly the two copies of the zeros of $X$, and for every zero $p$, $\operatorname{ind}_{\tau p}X^+=\operatorname{ind}_p(-X)=(-1)^n\operatorname{ind}_pX$ ([[def-double-of-a-smooth-manifold-with-boundary]], [[thm-the-double-has-a-well-defined-smooth-structure]], [[lem-negation-scales-the-local-index-by-minus-one-to-the-dimension]]).

[F3] Poincare-Hopf on $DM$: the index sum of $X^+$ on the closed manifold $DM$ equals $\chi(DM)$ ([[thm-poincare-hopf-for-closed-manifolds]]).

[F4] Additivity: $\chi(M\cup_{\partial M}M)=\chi(M)+\chi(M)-\chi(\partial M)$ by part (iii) of [[prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions]]; the inclusion $\partial M\hookrightarrow M$ is a cofibration, because the collar of [[thm-collar-neighborhood-theorem]] is a neighbourhood deformation retract structure, whose mapping-cylinder retraction characterizes cofibrations ([[prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip]]); and $\chi(\partial M)=0$ because $\partial M$ is a closed manifold of odd dimension $n-1$ ([[cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic]], [[def-euler-characteristic-of-a-compact-manifold]]).

## Proof

1.1 Apply the reduction of [F1] and replace $X$ by a field $X_0$ with only nondegenerate zeros, the same index sum, and still strictly outward on $\partial M$; it suffices to prove the identity for $X_0$, and by [[thm-index-of-a-nondegenerate-vector-field-zero]] each of its zeros has index $\pm1$. [F1, algebra]

2.1 Form the field-adapted double $DM$ and the reflected field $X_0^+$; by [F2] the zeros of $X_0^+$ are the two copies of the zeros of $X_0$ and, since $n$ is even, $\operatorname{ind}_{\tau p}X_0^+=(-1)^n\operatorname{ind}_pX_0=\operatorname{ind}_pX_0$, so the index sum over $DM$ is twice the index sum over $M$; Poincare-Hopf [F3] gives $2\sum_p\operatorname{ind}_pX_0=\chi(DM)$. [F2, F3, step 1.1, algebra]

3.1 By [F4], $\chi(DM)=\chi(M\cup_{\partial M}M)=2\chi(M)-\chi(\partial M)=2\chi(M)$; substituting into step 2.1 gives $2\sum_p\operatorname{ind}_pX_0=2\chi(M)$, hence $\sum_p\operatorname{ind}_pX_0=\chi(M)$ in $\mathbb Z$, and by step 1.1 the same identity holds for the original field $X$. [F4, step 1.1, step 2.1, algebra] ∎
