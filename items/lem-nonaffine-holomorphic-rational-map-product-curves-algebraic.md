---
id: lem-nonaffine-holomorphic-rational-map-product-curves-algebraic
kind: lemma
title: "A holomorphic extension of a rational map on a product of smooth complex curves is algebraic"
status: draft
origin: pipeline
deps: [cor-weak-nullstellensatz-algebraically-closed-coordinate-form, thm-identity-theorem-in-several-complex-variables, thm-ag-standard-smooth-geometric-regularity, def-axiom-of-choice, lem-nonsingular-complex-algebraic-curve-holomorphic-charts, thm-associated-graded-ring-of-a-regular-local-ring, thm-faithful-flatness-of-jacobson-adic-completion, thm-faithfully-flat-descent-vanishing, cor-holomorphic-functions-in-several-variables-are-smooth]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 10.97.3, faithful flatness of local completion"
      url: https://stacks.math.columbia.edu/tag/0BNH
    - title: "Milne, Modular Functions and Modular Forms, Chapter 3, Proposition 3.12, p.47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
---

## Statement

Assume the Axiom of Choice. Let $C_1,C_2$ be smooth complex algebraic curves, and $Y$ a separated complex algebraic variety. Suppose a rational map $f:C_1\times C_2\dashrightarrow Y$ has an everywhere defined holomorphic extension on the associated complex manifolds. Then that extension is induced by a unique algebraic morphism $C_1\times C_2\to Y$.

## Facts & Assumptions

[F1] A smooth algebraic complex curve has a local holomorphic parameter which can be taken to be an algebraic local coordinate. ([[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]])

[F2] A regular local ring with residue field $\mathbf C$ and cotangent basis $t_1,\ldots,t_d$ has associated graded ring $\mathbf C[T_1,\ldots,T_d]$. Its completion is faithfully flat, and faithful flatness detects zero modules. ([[thm-associated-graded-ring-of-a-regular-local-ring]], [[thm-faithful-flatness-of-jacobson-adic-completion]], [[thm-faithfully-flat-descent-vanishing]])

[F4] Complex closed points detect nonempty closed subsets of a finite-type complex scheme, and a holomorphic function on a connected several-variable neighbourhood vanishing on an open subset vanishes identically. ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]], [[thm-identity-theorem-in-several-complex-variables]])

[F3] Holomorphic functions in several variables are smooth; their formal Taylor coefficients respect addition and multiplication by the iterated product rule. ([[cor-holomorphic-functions-in-several-variables-are-smooth]])

## Proof

**Given:** AC, $C_1,C_2,Y,f$, and its holomorphic extension $h$.

1.1 Fix a complex point $x$ of the product, and choose algebraic local parameters $t,s$ of the two curves at its coordinates using [F1]. They are holomorphic manifold coordinates at $x$ and a cotangent basis of the two-dimensional regular local algebraic ring $R=\mathcal O_{C_1\times C_2,x}$. By [F2], the map $\mathbf C\left[\!\left[T,S\right]\!\right]\to\widehat R$ sending $T,S$ to $t,s$ is an isomorphism: its maps on successive homogeneous quotients are the graded isomorphism in [F2], so lifting successively in the complete filtrations proves surjectivity and the first nonzero homogeneous term proves injectivity. Formal Taylor expansion of analytic germs, justified by [F3], agrees with this identification on every element of $R$. Indeed it sends the parameters to $T,S$, respects ring operations, and gives the same finite jets on the polynomial representatives of each $R/\mathfrak m^n$ supplied by [F2]. [F1, F2, F3, given, algebra]

2.1 Choose an affine open of $Y$ containing $h(x)$ and finitely many coordinate-ring generators. By holomorphy and continuity their pullbacks under $h$ are holomorphic on a manifold neighbourhood of $x$. On the nonempty rational domain they are rational functions, so write one as $a/b\in\operatorname{Frac}R$. The identity $a=bh^*(z)$ holds on that domain in the neighbourhood and hence as analytic germs by continuity; the complement of the rational domain has no manifold interior, since a nonzero algebraic defining function gives a nonzero holomorphic germ and cannot vanish on a manifold open. Taking formal Taylor series via step 1.1 gives $a\in b\widehat R$. Faithful flatness in [F2] forces $a\in bR$: the nonzero class of $a$ in $R/(b)$ could not become zero after a faithful flat extension. Thus every target coordinate pulls back to an element of $R$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 The finitely many pulled-back coordinates are regular on an algebraic neighbourhood of $x$, satisfy the target's algebraic relations by generic agreement, and therefore define an algebraic extension there. They agree analytically with $h$ near $x$ by step 2.1. The same argument applies at every complex point. The complement of the union of these algebraic neighbourhoods is closed and has no complex closed point, hence is empty by the weak Nullstellensatz. Separatedness glues the extensions and makes them unique, since they agree on the dense original rational domain. This constructs the asserted algebraic morphism. AC is inherited from the regularity/completion suppliers. [F1, F2, F3, F4, step 1.1, step 2.1, construct] ∎
