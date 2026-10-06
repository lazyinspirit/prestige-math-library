---
id: lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point
kind: lemma
title: A birational morphism of regular surfaces factors through the blowup of a point where its inverse is undefined
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps:
- cor-blowup-birational-integral-scheme
- cor-blowup-unique-up-to-unique-isomorphism
- cor-picard-projective-line-integers
- def-axiom-of-choice
- def-birational-morphism-schemes
- def-embedding-dimension-and-regular-local-ring
- def-etale-locus-morphism
- def-normal-surface-modification-and-normalized-point-blowup
- def-proper-morphism
- def-rational-map-integral-schemes
- def-smooth-morphism-schemes
- lem-exceptional-curve-normal-bundle-minus-one
- lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces
- lem-nonaffine-rational-map-normal-to-proper-codimension-two
- lem-normalized-point-blowups-dominate-local-normal-surface-modifications
- lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point
- lem-surface-modification-isomorphism-in-codimension-one
- lem-universal-property-of-a-contraction
- thm-blowup-regular-surface-closed-point-regular
- thm-blowup-universal-property
- thm-cohomology-projective-space-twisting-sheaves
- thm-nakayama-lemma
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Section 54.17 (Factorization birational maps)
    url: https://stacks.math.columbia.edu/tag/0C5Q
  - title: The Stacks Project, Resolution of Surfaces, Lemma 54.3.1 (Blowing up a regular surface at a point)
    url: https://stacks.math.columbia.edu/tag/0AGQ
  - title: The Stacks Project, Resolution of Surfaces, Lemma 54.4.3 (Rational maps dominated by quadratic transformations)
    url: https://stacks.math.columbia.edu/tag/0C5H
  - title: Olivier Debarre, Introduction to Mori Theory (M2 course notes, 2016 version)
    url: https://www.math.ens.psl.eu/~debarre/M2.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $X$ and $Y$ be integral regular finite-type $k$-schemes of
pure dimension two that are proper over $k$, and let $f\colon X\to Y$ be a birational morphism. Let $y\in Y$ be a
closed point at which the inverse rational map $f^{-1}\colon Y\dashrightarrow X$ is not defined
([[def-rational-map-integral-schemes]], [[def-rational-map-integral-schemes]]). Then $f$ factors through the
blowup $b\colon \operatorname{Bl}_yY\to Y$: there is a unique $k$-morphism $g\colon X\to\operatorname{Bl}_yY$ with
$b\circ g=f$. Equivalently, the ideal $f^{-1}\mathfrak m_y\cdot\mathcal O_X$ is invertible.

## Facts & Assumptions

**Given:** A field $k$, integral regular finite-type proper $k$-schemes $X,Y$ of pure dimension two, a birational morphism $f\colon X\to Y$, and a closed point $y\in Y$ where the inverse rational map is not defined.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-birational-morphism-schemes.* Let $k$ be a field and let $X$ and $Y$ be integral $k$-schemes of finite type (def-integral-scheme, def-locally-finite-type-and-finite-type-morphism). ([[def-birational-morphism-schemes]])

[F3] *def-rational-map-integral-schemes.* Let $k$ be a field and let $X$ be an integral $k$-scheme of finite type and $Y$ a $k$-scheme of finite type (def-integral-scheme, def-locally-finite-type-and-finite-type-morphism) with $Y$ **separated** over $k$ (def-separated-morphism-schemes). ([[def-rational-map-integral-schemes]])

[F4] For an integral finite-type $k$-scheme and a separated finite-type target, a rational map is represented on nonempty opens; a point of indeterminacy is a point at which no representative is defined. ([[def-rational-map-integral-schemes]])

[F5] *lem-normalized-point-blowups-dominate-local-normal-surface-modifications.* Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $S$ be a normal integral modification of $\operatorname{Spec}A$, and let $Y\to S$ be an integral modification with normal $Y$. ([[lem-normalized-point-blowups-dominate-local-normal-surface-modifications]])

[F6] *lem-universal-property-of-a-contraction.* Assume the Axiom of Choice, inherited from the blowup suppliers. Let $X$ be a Noetherian scheme, $E\subseteq X$ an exceptional curve of the first kind and $b\colon X\to X'$ a contraction of $E$ (def-exceptional-curve-and-contraction). Write $x'=b(E)\in X'$. Then: 1. ([[lem-universal-property-of-a-contraction]])

[F7] *lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point.* Assume AC. Let $f:X\to S$ be a proper birational morphism of integral Noetherian schemes with normal $S$. If $f$ is quasi-finite at $x\in X$, then $f$ is an isomorphism over an open neighbourhood of $f(x)$; in particular that fibre consists of $x$. ([[lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point]])

[F8] *thm-blowup-universal-property.* Assume the Axiom of Choice. Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on $X$ with zero scheme $Z$, and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup. For every $X$-scheme $f\colon Y\to X$ such that the inverse image $f^{-1}(Z)$ is an effective Cartier divisor on $Y$, there is a unique $X$-morphism $Y\to\operatorname{Bl}_{\mathcal I}X$. ([[thm-blowup-universal-property]])

[F9] *thm-blowup-regular-surface-closed-point-regular.* Assume the Axiom of Choice. Let $S$ be a regular finite-type $k$-scheme of pure dimension two, let $p$ be a closed point, put $\kappa=\kappa(p)$ and $r=[\kappa:k]$, and let $\pi\colon S'=\operatorname{Bl}_p S\to S$ be the blowup of $S$ at $p$ with exceptional subscheme $E$. ([[thm-blowup-regular-surface-closed-point-regular]])

[F10] *lem-nonaffine-rational-map-normal-to-proper-codimension-two.* Assume the Axiom of Choice. Let $X$ be a normal integral finite-type $k$-scheme and $Y$ a proper finite-type $k$-scheme. The maximal domain of a rational map $f:X\dashrightarrow Y$ contains every codimension-one point of $X$. Thus its closed complement has codimension at least two, if nonempty. ([[lem-nonaffine-rational-map-normal-to-proper-codimension-two]])

[F11] *thm-nakayama-lemma.* Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$. ([[thm-nakayama-lemma]])

## Proof

1.1 Put $A=\mathcal O_{Y,y}$ and localize the proper birational map at $y$; the normalized-point domination helper applied to the normalization of the dominant graph of the rational lift over $X_A$ produces a finite roof of ordinary point blowups of the regular surface $X_A$, all over its closed fibre, on which the lift is a morphism. Each centre lies over the closed point $y$ and has residue field finite over $\kappa(y)$, so it is closed in the corresponding global model of $X$. Point ideals localize, so the same finite sequence can be made globally on $X$, retaining the lift over $A$; the exceptional curves and their conormal bundles are consequently those of point blowups of regular finite-type $k$-surfaces. [F3, F4, F5, given]

2.1 Choose a roof with the least number $n$ of point blowups. If $n>0$, let $E$ be the last exceptional curve and $g$ the induced morphism to the target blowup; if $g(E)$ were a point, the universal property of a contraction would descend $g$ through the last point blowup, contradicting minimality. [F6, F9, step 1.1]

3.1 Hence $g(E)$ is the target exceptional curve $E'$, and $E\to E'$ is birational because $g$ is an isomorphism in codimension one; a proper nonconstant map of integral curves is quasi-finite and therefore finite, and a finite birational map over a normal affine chart equals that chart, so $E\to E'$ is an isomorphism. Their conormal bundles are both $\mathcal O(1)$ over the common constant field. The induced map is nonzero because $g$ is an isomorphism near the generic point of $E$; a nonzero map between these equal-degree line bundles is multiplication by a nonzero constant, hence is an isomorphism, and at every point local equations satisfy $g^*v'=uv$ with $u$ a unit. [F2, F7, F10, step 2.1]

4.1 Consequently the maximal ideal at each point of $E$ is generated by the image of the target maximal ideal together with the local equation of $E$, and the residue field is finite, so $g$ is quasi-finite at every point of $E$; the quasi-finite-point helper makes $g$ an isomorphism over a neighbourhood of every point of $E'$, so the inverse image of $E'$ is exactly $E$. Its image in $X_A$ is the last centre, so the original fibre over $y$ is a singleton and $f$ is quasi-finite there, hence an isomorphism near $y$ by the same helper, contradicting that the inverse is undefined at $y$. [F7, F11, step 3.1]

5.1 Therefore $n=0$ and the rational lift is already a morphism on $X_A$, so the centre ideal pulls back to an invertible ideal there; globally the noninvertible locus is closed and lies over $y$, hence is empty, so the ideal is invertible on $X$ and the universal property of the blowup gives the required unique factorization $g\colon X\to\operatorname{Bl}_yY$. The Axiom of Choice is inherited from the cited suppliers. [F1, F8, step 4.1] ∎

## Remarks

- The roof and conormal argument works over every residue field; no rational point of the exceptional curve is chosen.
- Uniqueness of g follows because two lifts agree on the common generic open, which is dense and reduced.
