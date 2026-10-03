---
id: cor-bijective-birational-to-normal-isomorphism-under-finiteness
kind: corollary
title: Birational quasi-finite maps to normal targets are open immersions
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
proof_strategy: direct
justified_by: []
aliases: []
deps: [lem-finite-birational-to-normal-is-isomorphism, def-finite-morphism-classical-affine-local, thm-birational-equivalence-function-fields, def-birational-equivalence-varieties, def-normal-point-and-normal-variety, def-axiom-of-choice, thm-zariski-main-open-immersion-factorization-classical, def-quasi-finite-morphism-classical, def-classical-algebraic-prevariety-regular-maps-and-varieties]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a and §c: finite birational maps onto normal varieties"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $f\colon Y\to X$ be a finite morphism of
irreducible classical varieties over an algebraically closed field. If $f$ is birational
and $X$ is normal, then $f$ is an isomorphism. In particular bijectivity plus
finiteness does not repair a failure of normality of the target, as the cusp
example on the companion page shows.

More generally, a quasi-finite birational morphism $f:Y\to X$ of irreducible classical varieties with normal target $X$ is an open immersion. If it is bijective, it is an isomorphism even without an additional finiteness hypothesis.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the irreducible varieties $Y,X$, the finite morphism $f\colon Y\to X$, birationality of $f$, and normality of $X$.

[F1] A finite birational morphism onto a normal classical variety is an isomorphism ([[lem-finite-birational-to-normal-is-isomorphism]]): this is the substantive input, whose hypotheses are exactly finiteness, birationality, and normality of the target.

[F2] Finiteness, birationality and normality are the notions of [[def-finite-morphism-classical-affine-local]], [[def-birational-equivalence-varieties]], [[thm-birational-equivalence-function-fields]] and [[def-normal-point-and-normal-variety]]; AC is the choice principle consumed by the localisation and Nullstellensatz interfaces behind [F1].

[F3] A separated finite-type classical morphism with finite fibres factors as an open immersion followed by a finite morphism ([[thm-zariski-main-open-immersion-factorization-classical]], [[def-quasi-finite-morphism-classical]]). Classical varieties are separated and have finite affine atlases; a morphism between them is separated, since its relative diagonal is the restriction of the closed absolute diagonal. Closed subvarieties have their reduced classical structure ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]).

[F4] The Axiom of Choice is assumed through the cited finite and Zariski Main suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 The hypotheses of [F1] are satisfied: $f$ is finite, birational, and $X$ is normal. Hence [F1] applies and $f$ is an isomorphism. No injectivity, bijectivity, or surjectivity hypothesis was used, and none is needed. [F1, F2, given]

1.2 For the general quasi-finite case assume $Y,X$ irreducible, $f$ birational and $X$ normal. Apply [F3] to factor $f=g\circ j$, with $j:Y\hookrightarrow N$ open and $g:N\to X$ finite. Let $N_0$ be the reduced irreducible closure of $j(Y)$ in $N$. The subset $j(Y)$ is open and dense in $N_0$, so $j$ identifies $Y$ with that open subvariety and their function fields agree. Over an affine open of $X$, the coordinate ring of $N_0$ is a quotient of the finite coordinate algebra of $N$ and is still finite. Thus $g_0:N_0\to X$ is finite. It is birational because its pullback of function fields agrees with that of $f$ under the dense open identification. By [F1], $g_0$ is an isomorphism. Consequently $f=g_0\circ j$ is an open immersion. [F1, F2, F3, F4, construct, algebra]

2.1 The stated consequence for the cusp is a matter of exhibiting a finite birational morphism onto a nonnormal target that is bijective and not an isomorphism; that witness is the cusp reprise on the companion examples page, where the normalization of the cusp is bijective with a nonsurjective pullback of coordinate rings. Normality of the target is the hypothesis used in step 1.1; the recorded nonnormal-target witness does not contradict it. [F1, F2, step 1.1]

3.1 If $f$ is also bijective, its image open subvariety is all of $X$, and the open immersion of step 1.2 is an isomorphism. This proves both general consequences while retaining the original finite case of step 1.1. [step 1.1, step 1.2] ∎
