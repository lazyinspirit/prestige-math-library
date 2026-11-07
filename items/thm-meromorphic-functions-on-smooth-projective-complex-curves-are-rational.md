---
id: thm-meromorphic-functions-on-smooth-projective-complex-curves-are-rational
kind: theorem
title: Meromorphic functions and holomorphic projective maps on a smooth projective complex curve are algebraic
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- lem-smooth-projective-analytification-has-rational-kahler-polarization
- lem-irreducible-complex-varieties-are-analytically-connected
- cor-smooth-proper-curve-finite-map-projective-line
- thm-proper-holomorphic-map-riemann-surfaces-has-degree
- thm-local-normal-form-holomorphic-map-riemann-surfaces
- thm-meromorphic-functions-riemann-sphere-are-rational
- thm-removable-singularity-characterizations
- thm-primitive-element-theorem-for-finite-separable-extensions
- lem-rational-map-smooth-curve-to-proper-scheme-extends
- cor-strong-nullstellensatz-two-inclusions
- thm-one-dimensional-regular-local-rings-are-dvrs
- thm-identity-theorem-holomorphic-functions
- thm-pole-characterizations
justified_by: []
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms, version 2017
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter1 Proposition1.16 and Theorem1.17, printed20; compare introductory Theorem0.5, printed8. The branch/pole extension and field-degree argument are supplied completely below; general algebraization of Riemann surfaces is not imported.
---

## Statement

Assume the Axiom of Choice. Let $C$ be a smooth projective geometrically integral curve over $\mathbb C$. Its rational functions identify with the field of analytic meromorphic functions on its compact Riemann surface:
$$\mathbb C(C)\xrightarrow{\sim}\mathcal M(C^{\mathrm{an}}).$$
Here a meromorphic function is locally a quotient of holomorphic functions and is not identically infinity. Moreover, for every smooth projective complex variety $Y$, every holomorphic map $C^{\mathrm{an}}\to Y^{\mathrm{an}}$ is induced by a unique algebraic morphism $C\to Y$. No general Chow theorem, GAGA theorem or algebraization theorem for arbitrary compact Riemann surfaces is assumed.

## Facts & Assumptions

**Given:** AC, the smooth projective complex curve and, for the map assertion, the smooth projective complex target and its holomorphic map.

[A1] AC is explicit ([[def-axiom-of-choice]]).

[F1] Smooth projective complex schemes analytify to compact complex manifolds and algebraic morphisms analytify holomorphically. Irreducible complex varieties are analytically connected, and one-dimensional regular local rings are DVRs ([[lem-smooth-projective-analytification-has-rational-kahler-polarization]], [[lem-irreducible-complex-varieties-are-analytically-connected]], [[thm-one-dimensional-regular-local-rings-are-dvrs]]).

[F2] A smooth proper geometrically integral curve admits a finite locally free map $t:C\to\mathbb P^1$ of degree $N=[\mathbb C(C):\mathbb C(t)]$, with each fibre divisor of degree $N$ ([[cor-smooth-proper-curve-finite-map-projective-line]]).

[F3] A proper nonconstant holomorphic map of Riemann surfaces is a branched covering with finite branch locus over a compact target; its degree is the sum of the local ramification indices. Local coordinates put such a map in the form $w=z^e$ ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[thm-local-normal-form-holomorphic-map-riemann-surfaces]]).

[F4] Every meromorphic function on the Riemann sphere is rational. Meromorphic germs have finite-order poles or are holomorphic, and the holomorphic identity theorem holds in local charts. A bounded holomorphic function on a punctured disk extends holomorphically over its centre ([[thm-meromorphic-functions-riemann-sphere-are-rational]], [[thm-removable-singularity-characterizations]], [[thm-pole-characterizations]], [[thm-identity-theorem-holomorphic-functions]]).

[F5] Every finite separable field extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[F6] A rational map from a smooth curve to a proper scheme extends uniquely to a morphism. Over an algebraically closed field, the strong Nullstellensatz detects equality of regular functions on reduced schemes from closed points ([[lem-rational-map-smooth-curve-to-proper-scheme-extends]], [[cor-strong-nullstellensatz-two-inclusions]]).

## Proof

1.1 By [F1], $X=C^{\mathrm{an}}$ is a compact connected Riemann surface. Algebraic rational functions on $C$ are analytic meromorphic functions: on affine charts their numerator and denominator are holomorphic and a nonzero algebraic denominator cannot vanish identically on an analytic open. A standard smooth chart in [F1] has one free algebraic coordinate with nonzero differential at a chosen point. Its difference from its value is a generator of the one-dimensional cotangent space, hence a uniformizer in the local DVR. Every other uniformizer differs from it by an algebraic unit, and therefore also has nonzero analytic differential and is a holomorphic local coordinate. The DVR identity $h=u^e v$ with $v$ a local algebraic unit then has the same order $e$ analytically. This also proves injectivity of the rational-to-meromorphic map: a nonzero rational function cannot be identically zero on $X$, by [F6] on an affine chart. [A1, F1, F6, given, algebra]

2.1 Choose the finite map $t$ from [F2]. Its analytic map is proper by compactness and nonconstant by step 1.1. Its degree is exactly $N$: at a point of any fibre the algebraic fibre length is the order of $t-c$ (or $1/t$ over infinity) in the local DVR, and this equals the analytic ramification index by step 1.1. The sum of those lengths is $N$ by [F2], so [F3] gives an $N$-sheeted covering away from a finite branch set. [F1, F2, F3, step 1.1, choose, algebra]

3.1 Let $g\in\mathcal M(X)$. Its poles form a closed discrete subset by local meromorphy, hence are finite by compactness. Off the finite union $S$ of the branch set and the images of those poles, an evenly covered disk has inverse branches $P_1(w),\ldots,P_N(w)$. The elementary symmetric functions $a_j(w)$ of $g(P_1(w)),\ldots,g(P_N(w))$ are holomorphic and independent of the ordering, so they glue on $\mathbb P^1\setminus S$. They extend meromorphically across every $c\in S$. Indeed choose a local coordinate $w$ vanishing at $c$. Properness and the finite fibre permit shrinking its disk so that the inverse image lies in finitely many source disks at the points above $c$. In each disk [F3] gives $w=z^e$. If the pole order of $g$ there is at most $R$, enlarge the same finite integer $R\ge0$ to work in all these disks; then $|g|\le K|w|^{-R}$ for $0<|w|<1$, because its actual exponent is at most $R/e\le R$. Hence $|a_j(w)|\le K_j|w|^{-jR}$. The function $w^{jR}a_j(w)$ is holomorphic and bounded on the punctured disk, so [F4] extends it holomorphically. This proves meromorphic extension, including at infinity by its local coordinate. [F3, F4, step 2.1, construct, algebra]

4.1 By [F4], the extended $a_j$ are rational functions of $t$. The symmetric product therefore gives on $X$ the monic equation $g^N-a_1(t)g^{N-1}+\cdots+(-1)^Na_N(t)=0$: it holds away from the finite exceptional fibres and extends as a meromorphic identity at those points. Thus every meromorphic function has algebraic degree at most $N$ over $\mathbb C(t)$. The meromorphic functions form a field, since nonzero meromorphic germs have meromorphic reciprocals and the connected surface prevents a nonzero function from vanishing on an open set. If that field had vector-space dimension greater than $N$, choose $N+1$ independent elements. They generate a finite algebraic subextension, of degree greater than $N$. In characteristic zero it is separable, and [F5] supplies a primitive element whose degree is greater than $N$, contradicting the bound just proved. Therefore $[\mathcal M(X):\mathbb C(t)]\le N$. Step 1.1 embeds $\mathbb C(C)$ in this field, and [F2] gives its degree exactly $N$. The field tower forces equality $\mathcal M(X)=\mathbb C(C)$. [F2, F4, F5, step 1.1, step 3.1, algebra]

5.1 Embed $Y$ into $\mathbb P^M$ and let $h:X\to Y^{\mathrm{an}}$ be holomorphic. Choose an index $j$ whose homogeneous coordinate is nonzero at some image point. Locally the homogeneous coordinates are holomorphic sections of the pulled-back line bundle; their ratios with the $j$th coordinate are globally defined analytic meromorphic functions. The denominator is not identically zero, since its local zero sets are discrete on the connected curve unless the section is zero everywhere. By step 4.1 all these ratios are rational on $C$. They define a rational map $C\dashrightarrow\mathbb P^M$; the equations of the closed subvariety $Y$ vanish because they vanish after evaluating on the nonempty analytic domain of $h$. Thus it is a rational map to $Y$. By [F6] it extends uniquely to an algebraic morphism $C\to Y$. Its analytification equals $h$ on the complement of finitely many points, and hence everywhere by continuity and the Hausdorff property of $Y^{\mathrm{an}}$. Two algebraic morphisms with that analytification are equal by [F6]. This proves the full map assertion, including constant maps and genus-zero curves, without importing a higher-dimensional algebraization theorem. [F1, F6, step 4.1, choose, construct, algebra] ∎

## Source-reading boundary

The cached 2017 Milne MF notes were read at Proposition1.16 and Theorem1.17 and their full printed20 arguments, and the introductory Theorem0.5 on printed8. Proposition1.16 labels its argument a sketch; the finite branch/pole growth and removable-singularity argument are completed in step 3.1 above. Theorem0.5's general compact-surface algebraization assertion is not used. Rational functions on the sphere, finite curve maps, local ramification and the primitive-element theorem are actual provided interfaces, not imported new theorems.
