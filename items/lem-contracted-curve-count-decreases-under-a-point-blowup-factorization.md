---
id: lem-contracted-curve-count-decreases-under-a-point-blowup-factorization
kind: lemma
title: The number of contracted curves drops by one after factoring through a point blowup
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps:
- def-axiom-of-choice
- def-finite-morphism-schemes
- def-proper-morphism
- def-quasi-finite-morphism-schemes
- lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point
- lem-blowing-up-a-regular-point-is-a-contraction
- lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces
- lem-finite-birational-to-normal-is-isomorphism
- thm-proper-quasi-finite-is-finite
- lem-surface-modification-isomorphism-in-codimension-one
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
  - title: The Stacks Project, Resolution of Surfaces, Chapter 54 (complete chapter PDF)
    url: https://stacks.math.columbia.edu/download/resolve.pdf
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

Assume the Axiom of Choice. Let $k$, $X$, $Y$ and $f\colon X\to Y$ be as in
[[lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point]], and let $N(f)$ be the
number of integral curves of $X$ contracted by $f$, a nonnegative integer by
[[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]]. Let $y\in Y$ be a closed point
such that $f$ factors through the blowup $b\colon Y'=\operatorname{Bl}_yY\to Y$, say $f=b\circ g$ with
$g\colon X\to Y'$ the factorization of the previous lemma. Then $g$ is again a birational morphism of integral
regular proper surfaces over $k$, and $N(g)=N(f)-1$.

## Facts & Assumptions

**Given:** A field $k$, integral regular finite-type proper $k$-schemes $X,Y$ of pure dimension two, a birational morphism $f\colon X\to Y$, a closed point $y\in Y$ such that $f$ factors as $f=b\circ g$ through the blowup $b\colon Y'=\operatorname{Bl}_yY\to Y$, and the finite number $N(f)$ of integral curves of $X$ contracted by $f$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-finite-morphism-schemes.* A morphism of schemes $f:X\to S$ is **finite** if, for every affine open $U=\operatorname{Spec}A\subseteq S$, its inverse image is affine, $f^{-1}(U)=\operatorname{Spec}B$, and the induced $A$-algebra $B$ is module-finite over $A$ in the sense of def-finite-type-and-module-finite-algebras. The affineness language agrees with def-affine-morphism-schemes. ([[def-finite-morphism-schemes]])

[F3] *def-proper-morphism.* A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. Here separatedness has the meaning of def-separated-morphism-schemes, finite type has the meaning of def-locally-finite-type-and-finite-type-morphism, and universally closed has the meaning of def-universally-closed-morphism. ([[def-proper-morphism]])

[F4] *def-quasi-finite-morphism-schemes.* A morphism of schemes $f:X\to S$ is **quasi-finite** if it is of finite type (def-locally-finite-type-and-finite-type-morphism) and, for every point $x\in X$, there are affine neighbourhoods $U=\operatorname{Spec}(B)$ of $x$ and $V=\operatorname{Spec}(A)$ of $f(x)$ such that $f(U)\subseteq V$ and the induced finite-type ring map $A\to B$ is quasi-finite at the prime  ([[def-quasi-finite-morphism-schemes]])

[F5] *lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point.* Assume the Axiom of Choice. Let $k$ be a field, let $X$ and $Y$ be integral regular finite-type $k$-schemes of pure dimension two that are proper over $k$, and let $f\colon X\to Y$ be a birational morphism. ([[lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point]])

[F6] *lem-blowing-up-a-regular-point-is-a-contraction.* Assume the Axiom of Choice. Let $k$ be a field, let $S$ be an integral regular finite-type $k$-scheme of pure dimension two, let $p\in S$ be a closed point, let $\pi\colon S'=\operatorname{Bl}_pS\to S$ be the blowup of $S$ at $p$ and let $E=\pi^{-1}(p)$ be its exceptional curve. ([[lem-blowing-up-a-regular-point-is-a-contraction]])

[F7] *lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces.* Assume the Axiom of Choice. Let $k$ be a field, let $X$ and $Y$ be integral regular finite-type $k$-schemes of pure dimension two, let $f\colon X\to Y$ be a proper birational morphism and let $y\in Y$ be a closed point. Put $F=f^{-1}(y)$. Then: 1. $F$ is a proper $\kappa(y)$-scheme with $\dim F\le 1$. 2. ([[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]])

[F8] *lem-finite-birational-to-normal-is-isomorphism.* Assume the Axiom of Choice. Let $f\colon Y\to X$ be a finite birational morphism of irreducible classical varieties over an algebraically closed field. If $X$ is normal, then $f$ is an isomorphism. The normality of the target is essential: the normalization of the cusp is finite and birational but not an isomorphism. ([[lem-finite-birational-to-normal-is-isomorphism]])

[F9] *thm-proper-quasi-finite-is-finite.* Assume the Axiom of Choice. Every proper quasi-finite morphism of schemes $f:X\to S$ is finite ([[def-proper-morphism]], [[def-quasi-finite-morphism-schemes]], [[def-finite-morphism-schemes]]). No Noetherian or nonemptiness hypothesis is imposed, and the assertion is local on the base. ([[thm-proper-quasi-finite-is-finite]])

[F10] A proper birational morphism of integral Noetherian schemes with normal two-dimensional target is an isomorphism over every codimension-one point. ([[lem-surface-modification-isomorphism-in-codimension-one]])

## Proof

1.1 The factorization $g$ is again a proper birational morphism of integral regular finite-type $k$-surfaces, and the exceptional curve $E$ of $b$ is an integral curve over $\kappa(y)$; this is the point-blowup dictionary of the contraction lemma. [F2, F3, F5, F6, given]

2.1 Exactly one irreducible component $C_0$ of $f^{-1}(y)$ dominates $E$: the codimension-one isomorphism argument for a proper birational morphism with normal target shows that the fibre over the generic point of $E$ is a single point, so at most one component dominates $E$, and surjectivity of $g$ forces exactly one. [F4, F7, F9, F10, step 1.1]

3.1 Every other one-dimensional component of a fibre of $f$ over $y$ lies in a fibre of $g$ over a point of $E$, and every contracted curve of $g$ is a contracted curve of $f$ different from $C_0$; conversely a contracted curve of $f$ is either $C_0$ or is contracted by $g$, because $b$ is an isomorphism off $y$. Hence the two sets of contracted curves differ by $C_0$ alone. [F7, F8, step 2.1]

4.1 Therefore $N(g)=N(f)-1$, as claimed; the Axiom of Choice is inherited from the cited factorization and blowup suppliers. [F1, step 3.1] ∎

## Remarks

- The count drop is exactly one at each blowup of a point where the inverse map is undefined.
- The argument uses only the component structure of the fibre and the birationality of g, not any classification of the exceptional curve.
