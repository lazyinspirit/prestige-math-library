---
id: thm-factorization-of-birational-morphisms-of-smooth-surfaces
kind: theorem
title: Factorization of birational morphisms of regular surfaces into point blowups
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps:
- cor-blowup-birational-integral-scheme
- def-axiom-of-choice
- def-birational-morphism-schemes
- def-etale-locus-morphism
- def-proper-morphism
- def-quasi-finite-morphism-schemes
- def-smooth-morphism-schemes
- lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point
- lem-blowing-up-a-regular-point-is-a-contraction
- lem-contracted-curve-count-decreases-under-a-point-blowup-factorization
- lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces
- lem-finite-birational-to-normal-is-isomorphism
- lem-surface-modification-isomorphism-in-codimension-one
- thm-blowup-regular-surface-closed-point-regular
- thm-proper-quasi-finite-is-finite
- def-exceptional-curve-and-contraction
- def-rational-map-integral-schemes
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
  - title: The Stacks Project, Resolution of Surfaces, Lemma 54.4.3 (Rational maps dominated by quadratic transformations)
    url: https://stacks.math.columbia.edu/tag/0C5H
  - title: Olivier Debarre, Introduction to Mori Theory (M2 course notes, 2016 version)
    url: https://www.math.ens.psl.eu/~debarre/M2.pdf
  - title: The Stacks Project, Resolution of Surfaces, Chapter 54 (complete chapter PDF)
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $X$ and $Y$ be integral regular finite-type $k$-schemes
of pure dimension two that are proper over $k$ (for instance smooth projective surfaces over $k$). Then every
birational morphism $f\colon X\to Y$ is a composition of blowups at closed points and an isomorphism: there are
schemes $X_0=Y,X_1,\dots,X_n$ with $X_n\cong X$ over $Y$, closed points $y_{i-1}\in X_{i-1}$ with
$\mathcal O_{X_{i-1},y_{i-1}}$ regular of dimension two, and morphisms $X_i=\operatorname{Bl}_{y_{i-1}}X_{i-1}
\to X_{i-1}$ whose composition $X\to Y$ is $f$ up to the isomorphism $X\cong X_n$.

Equivalently, every proper birational morphism of such surfaces is, up to isomorphism, a composition of
contractions of exceptional curves of the first kind ([[def-exceptional-curve-and-contraction]]).

## Facts & Assumptions

**Given:** A field $k$, integral regular finite-type proper $k$-schemes $X,Y$ of pure dimension two, and a birational morphism $f\colon X\to Y$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-birational-morphism-schemes.* Let $k$ be a field and let $X$ and $Y$ be integral $k$-schemes of finite type (def-integral-scheme, def-locally-finite-type-and-finite-type-morphism). ([[def-birational-morphism-schemes]])

[F3] *def-etale-locus-morphism.* Let $f:X\to S$ be a morphism locally of finite presentation (def-locally-finite-presentation-morphism). The **étale locus** of $f$ is $\operatorname{Et}(f)=\{x\in X:\text{the morphism }f\text{ is étale at }x\}\subseteq X,$ the set of points at which the conditions of def-etale-morphism-schemes hold. (def-etale-locus-morphism)

[F4] *def-proper-morphism.* A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. Here separatedness has the meaning of def-separated-morphism-schemes, finite type has the meaning of def-locally-finite-type-and-finite-type-morphism, and universally closed has the meaning of def-universally-closed-morphism. ([[def-proper-morphism]])

[F5] *def-quasi-finite-morphism-schemes.* A morphism of schemes $f:X\to S$ is **quasi-finite** if it is of finite type (def-locally-finite-type-and-finite-type-morphism) and, for every point $x\in X$, there are affine neighbourhoods $U=\operatorname{Spec}(B)$ of $x$ and $V=\operatorname{Spec}(A)$ of $f(x)$ such that $f(U)\subseteq V$ and the induced finite-type ring map $A\to B$ is quasi-finite at the prime  (def-quasi-finite-morphism-schemes)

[F6] *def-smooth-morphism-schemes.* Let $f:X\to S$ be a morphism of schemes, let $x\in X$ and put $s=f(x)$. The morphism $f$ is **smooth at $x$** when the following three conditions hold at $x$: 1. $f$ is locally of finite presentation at $x$ (def-locally-finite-presentation-morphism); 2. $f$ is flat at $x$ (def-flat-morphism-schemes); 3. (def-smooth-morphism-schemes)

[F7] *lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point.* Assume the Axiom of Choice. Let $k$ be a field, let $X$ and $Y$ be integral regular finite-type $k$-schemes of pure dimension two that are proper over $k$, and let $f\colon X\to Y$ be a birational morphism. ([[lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point]])

[F8] *lem-blowing-up-a-regular-point-is-a-contraction.* Assume the Axiom of Choice. Let $k$ be a field, let $S$ be an integral regular finite-type $k$-scheme of pure dimension two, let $p\in S$ be a closed point, let $\pi\colon S'=\operatorname{Bl}_pS\to S$ be the blowup of $S$ at $p$ and let $E=\pi^{-1}(p)$ be its exceptional curve. ([[lem-blowing-up-a-regular-point-is-a-contraction]])

[F9] *lem-contracted-curve-count-decreases-under-a-point-blowup-factorization.* Assume the Axiom of Choice. Let $k$, $X$, $Y$ and $f\colon X\to Y$ be as in [[lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point]], and let $N(f)$ be the number of integral curves of $X$ contracted by $f$, a nonnegative integer by [[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]]. ([[lem-contracted-curve-count-decreases-under-a-point-blowup-factorization]])

[F10] *lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces.* Assume the Axiom of Choice. Let $k$ be a field, let $X$ and $Y$ be integral regular finite-type $k$-schemes of pure dimension two, let $f\colon X\to Y$ be a proper birational morphism and let $y\in Y$ be a closed point. Put $F=f^{-1}(y)$. Then: 1. $F$ is a proper $\kappa(y)$-scheme with $\dim F\le 1$. 2. ([[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]])

[F12] *lem-surface-modification-isomorphism-in-codimension-one.* Assume AC. Let $f:X\to S$ be a modification of integral Noetherian schemes and let $S$ be normal of dimension two. Then $f$ is an isomorphism over an open subset containing every point of codimension at most one in $S$. The complement is a finite set of closed points. If every fibre is zero-dimensional, $f$ is an isomorphism. ([[lem-surface-modification-isomorphism-in-codimension-one]])

[F13] *thm-blowup-regular-surface-closed-point-regular.* Assume the Axiom of Choice. Let $S$ be a regular finite-type $k$-scheme of pure dimension two, let $p$ be a closed point, put $\kappa=\kappa(p)$ and $r=[\kappa:k]$, and let $\pi\colon S'=\operatorname{Bl}_p S\to S$ be the blowup of $S$ at $p$ with exceptional subscheme $E$. ([[thm-blowup-regular-surface-closed-point-regular]])

## Proof

1.1 Induct on the finite number $N(f)$ of contracted curves, which is finite by the fibre-components lemma; the codimension-one modification lemma shows that $f$ is an isomorphism outside finitely many closed points, if $N(f)=0$, the fibre-components lemma gives that $f$ is an isomorphism, proving the induction base. Otherwise take the actual non-isomorphism locus, which is a nonempty finite set. [F2, F10, F12, given]

2.1 Otherwise choose a point $y$ of the finite exceptional set; the inverse rational map is undefined at $y$, because if it extended over an open neighbourhood it would give a section of the proper separated morphism $f$, which is closed and contains the generic point of the integral inverse image, hence equals it, making $f$ an isomorphism there. [F4, step 1.1]

3.1 The local factorization lemma then writes $f=b\circ g$ with $b$ the blowup of $Y$ at $y$; the source and target of $g$ remain integral regular proper $k$-surfaces because a point blowup of a regular surface is regular and proper, and $g$ is again birational. [F2, F7, F13, step 2.1]

4.1 The curve-count lemma gives $N(g)=N(f)-1$: exactly one component of $f^{-1}(y)$ dominates the exceptional curve of $b$, and all other contracted curves of $f$ remain contracted by $g$. [F9, step 3.1]

5.1 Applying the induction hypothesis to $g$ and composing with the point blowup $b$ exhibits $f$ as a composition of point blowups and an isomorphism, and each point blowup is a contraction of its exceptional curve by the definition; the Axiom of Choice is inherited from the cited suppliers. [F1, F8, step 4.1] ∎

## Remarks

- The induction measure is the number of contracted curves, which drops by exactly one at each factorization step.
- No equality of rational maps f^{-1} composed with f is used; the undefinedness of the inverse at the chosen point is proved by the section argument.
