---
id: ex-blowup-of-a-smooth-point
kind: example
title: 'Blowing up a smooth point: charts, exceptional curve, and contraction'
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
- def-axiom-of-choice
- def-exceptional-curve-and-contraction
- lem-blowing-up-a-regular-point-is-a-contraction
- lem-blowup-intersection-matrix-at-smooth-point
- lem-blowup-isomorphism-off-center
- lem-exceptional-curve-normal-bundle-minus-one
- thm-blowup-regular-surface-closed-point-regular
- thm-intersection-with-curve-as-degree-of-restriction
- thm-affine-blowup-standard-charts
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Lemma 54.3.1 (Blowing up a regular surface at a point)
    url: https://stacks.math.columbia.edu/tag/0AGQ
  - title: The Stacks Project, Resolution of Surfaces, Section 54.16 (Contracting exceptional curves)
    url: https://stacks.math.columbia.edu/tag/0C2I
  - title: Olivier Debarre, Introduction to Mori Theory (M2 course notes, 2016 version)
    url: https://www.math.ens.psl.eu/~debarre/M2.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice, inherited from the cited blowup and intersection suppliers.
Let $k$ be a field, let $S$ be an integral regular finite-type $k$-scheme of pure dimension two, and let
$p\in S$ be a $k$-rational closed point. Let $\pi\colon S'=\operatorname{Bl}_pS\to S$ be the blowup of $p$,
with exceptional curve $E=\pi^{-1}(p)$.

1. **Charts.** Over an affine neighbourhood $\operatorname{Spec}A$ of $p$ on which $x,y$ generate the point ideal and are regular parameters at $p$, the
blowup is $\operatorname{Spec}A[y/x]\cup\operatorname{Spec}A[x/y]$ inside $A$-charts, glued by inverting $T$
and $U=T^{-1}$ ([[thm-affine-blowup-standard-charts]]).
2. **Exceptional curve.** $E\cong\mathbb P^1_k$ is an effective Cartier divisor on the regular surface $S'$,
$\mathcal O_E(E)\cong\mathcal O_{\mathbb P^1_k}(-1)$ and, if $S$ is projective over $k$, $E\cdot E=-1$
([[thm-blowup-regular-surface-closed-point-regular]], [[lem-exceptional-curve-normal-bundle-minus-one]],
[[lem-blowup-intersection-matrix-at-smooth-point]]). Hence $E$ is an exceptional curve of the first kind and
$\pi$ is a contraction of $E$ ([[lem-blowing-up-a-regular-point-is-a-contraction]]).
3. **One-step factorization.** If $S$ is projective over $k$, then $\pi$ is a birational morphism of regular
projective surfaces which is an isomorphism over $S\setminus\{p\}$, so its factorization into point blowups
consists of the single blowup $\pi$ itself ([[lem-blowing-up-a-regular-point-is-a-contraction]]), and no further
blowup is needed.

For comparison, the companion counterexample page records that normalization of a non-normal surface with a
one-dimensional singular locus is not a point blowup, so point-blowup factorization requires the stated target regularity.
The intrinsic contraction definition requires regularity at the contracted target point, not global regularity of the source.

## Facts & Assumptions

**Given:** A field $k$, an integral regular finite-type $k$-scheme $S$ of pure dimension two, a $k$-rational closed point $p\in S$, and the blowup $\pi\colon S'=\operatorname{Bl}_pS\to S$ with exceptional curve $E=\pi^{-1}(p)$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-exceptional-curve-and-contraction.* Assume the Axiom of Choice where it is inherited from the degree and intersection suppliers below ([[def-axiom-of-choice]]). Let $X$ be a Noetherian scheme. **(a) Exceptional curves of the first kind.** A closed subscheme $E\subseteq X$ (def-closed-immersion-schemes) is an *exceptional curve of the first kind* if: 1. ([[def-exceptional-curve-and-contraction]])

[F3] *lem-blowing-up-a-regular-point-is-a-contraction.* Assume the Axiom of Choice. Assume the Axiom of Choice, inherited from the cited blowup and intersection suppliers. Let $k$ be a field, let $S$ be an integral regular finite-type $k$-scheme of pure dimension two, let $p\in S$ be a closed point, let $\pi\colon S'=\operatorname{Bl}_pS\to S$ be the blowup of $S$ at $p$ and let $E=\pi^{-1}(p)$ be its exceptional curve. ([[lem-blowing-up-a-regular-point-is-a-contraction]])

[F4] *lem-blowup-intersection-matrix-at-smooth-point.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let $X$ be an integral regular projective surface over $k$ (def-divisor-intersection-number-on-smooth-projective-surface), let $p\in X$ be a closed point with residue field $\kappa(p)$ and $r:=[\kappa(p):k]$, let $\pi:X'=\operatorname{Bl}_pX\to X$ be the blowup of $X$ at $p$. ([[lem-blowup-intersection-matrix-at-smooth-point]])

[F5] *lem-blowup-isomorphism-off-center.* Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type with zero scheme $Z$ and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup. ([[lem-blowup-isomorphism-off-center]])

[F6] *lem-exceptional-curve-normal-bundle-minus-one.* Assume the Axiom of Choice. Let $p$ be a closed point of a regular surface $S$ over a field $k$, assume $\dim\mathcal O_{S,p}=2$, and let $\pi\colon S'\to S$ be the blowup of $p$ and $E$ its exceptional curve. ([[lem-exceptional-curve-normal-bundle-minus-one]])

[F7] *thm-blowup-regular-surface-closed-point-regular.* Assume the Axiom of Choice. Let $S$ be a regular finite-type $k$-scheme of pure dimension two, let $p$ be a closed point, put $\kappa=\kappa(p)$ and $r=[\kappa:k]$, and let $\pi\colon S'=\operatorname{Bl}_p S\to S$ be the blowup of $S$ at $p$ with exceptional subscheme $E$. ([[thm-blowup-regular-surface-closed-point-regular]])

[F8] The affine blowup along $I=(x,y)$ is covered by $A[I/x]$ and $A[I/y]$, whose overlap inverts $T=y/x$ and $U=x/y$ with $TU=1$. ([[thm-affine-blowup-standard-charts]])

[F9] *thm-intersection-with-curve-as-degree-of-restriction.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let $X$ be an integral regular projective surface over $k$ (def-divisor-intersection-number-on-smooth-projective-surface) and let $C$ and $D$ be effective Cartier divisors on $X$ (def-effective-cartier-divisor, def-cartier-divisor) with associated line bundles $\mathcal O_X(C)$ and  ([[thm-intersection-with-curve-as-degree-of-restriction]])

## Verification

1.1 Over an affine neighbourhood $\operatorname{Spec}A$ of $p$ on which $x,y$ generate the point ideal and are regular parameters at $p$, the blowup is covered by the two charts $\operatorname{Spec}A[y/x]$ and $\operatorname{Spec}A[x/y]$ inside the $A$-charts, glued by inverting the coordinate $T$ and setting $U=T^{-1}$, by the affine Rees-algebra chart formula. [F8, given]

2.1 The exceptional curve $E=\pi^{-1}(p)$ is an effective Cartier divisor on the regular surface $S'$, isomorphic to $\mathbb P^1_k$ because the point is $k$-rational, and its normal bundle is $\mathcal O_{\mathbb P^1_k}(-1)$; the exceptional curve has the self-intersection datum $E\cdot E=-1$ whenever $S$ is projective, by the intersection-matrix computation and the restriction-degree identity. [F2, F3, F6, F7, F9, step 1.1]

3.1 By step 2.1 the curve $E$ is an exceptional curve of the first kind and $\pi$ is a contraction of it; the blowup is an isomorphism off the centre $p$, so $\pi$ restricts to an isomorphism $S'\setminus E\to S\setminus\{p\}$. [F2, F3, F5, step 2.1]

4.1 If $S$ is projective over $k$, then $\pi$ is a birational morphism of regular projective surfaces which is an isomorphism over the complement of the single point $p$; a factorization of $\pi$ into point blowups is therefore the single blowup $\pi$ itself, and no further blowup is needed. [F3, F5, step 3.1]

5.1 The computation is purely the published point-blowup dictionary; the Axiom of Choice is inherited from the blowup and intersection suppliers. [F1, step 4.1, F4] ∎

## Remarks

- The two charts and the glue are the reason the exceptional curve is a projective line over $k$ when the point is $k$-rational.
- The companion counterexample page shows that for a non-normal target with one-dimensional singular locus the normalization is not a point blowup, which records the failure of the stated regular-target factorization after dropping target regularity.
