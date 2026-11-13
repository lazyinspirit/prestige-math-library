---
title: "Lemma 4.1: retarded smoothing down to negative order two"
status: published
research_item: lem-se-4-1
dependency_level: 10
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 17: ` Lemma 4.1; (4.1) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-2-2-retarded](item-prop-se-2-2-retarded)
- [prop-se-negative-resolvent-duality](item-prop-se-negative-resolvent-duality)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-c-c-and-c-c-infinity-on-rn](https://alphabetamath.cc/item/def-c-c-and-c-c-infinity-on-rn)


## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary. Assume that $\Theta$ is nontrapping: every generalized reflected ray leaves each compact set in finite forward time. Let $\Delta_D$ be the Dirichlet Laplacian, $H_D^s(\Omega)$ the spectral scale of $I-\Delta_D$, with negative orders understood by pivot antiduality, and $W(t)=e^{it\Delta_D}$.

For every $T>0$, real $\eta\in C_c^\infty(\mathbb R^n)$ and $s\in[-2,1]$, there is $C>0$ such that, whenever $g=\eta f\in L^2(0,T;H_D^s(\Omega))$, the retarded integral $u(t)=\int_0^t W(t-r)g(r)\,dr$ satisfies
$$\|\eta u\|_{L^2(0,T;H_D^{s+1}(\Omega))}\le C\|g\|_{L^2(0,T;H_D^s(\Omega))}.$$
The time spaces and integral are Bochner spaces and a Bochner integral. Cutoffs act by their bounded extensions on the indicated scale spaces. The constant may depend on $T$, $s$, the obstacle and the cutoff, but not on $f$.

## Facts & Assumptions

[F1] The smooth exterior geometry and generalized-ray nontrapping convention are given by [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). The scale, its negative-order pivot antiduals and the group notation are given by [def-se-dirichlet-scale](item-def-se-dirichlet-scale). The time-space and Bochner-integral conventions are given by [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F2] For $-1\le s\le1$, [prop-se-2-2-retarded](item-prop-se-2-2-retarded) gives the retarded smoothing estimate with the same smooth cutoff on the input and output, under the stated geometry and Choice assumption.

[F3] For $-2\le s\le-1$, [prop-se-negative-resolvent-duality](item-prop-se-negative-resolvent-duality) gives the stated retarded estimate for input $g=\eta f$ and real cutoff $\eta$, under the stated geometry and Choice assumption.

[F4] Smooth compactly supported cutoff multiplication is bounded on $H_D^q$ for $-2\le q\le2$, with compatible negative-order extensions [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality). A real smooth compactly supported cutoff equal to one on a neighborhood of a prescribed compact set exists by [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls). The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) supplies the Choice hypotheses of the cited results.

[F5] The space $C_c^\infty(\mathbb R^n)$ consists of real-valued smooth functions on $\mathbb R^n$ with compact support [math:def-c-c-and-c-c-infinity-on-rn](https://alphabetamath.cc/item/def-c-c-and-c-c-infinity-on-rn).

## Proof

**Given:** The geometry, $T$, $\eta$, $s$ and $g=\eta f$ in the statement.

**Goal:** Prove the displayed estimate for every $s\in[-2,1]$.

1.1 If $-2\le s\le-1$, apply [F3] directly to $g=\eta f$. Its retarded integral and output cutoff are exactly those in the statement, so it gives the required bound with a constant depending at most on the stated parameters. [F1, F3, given]

1.2 If $-1\le s\le1$, choose a real $\rho\in C_c^\infty(\mathbb R^n)$ equal to one on a neighborhood of $\operatorname{supp}\eta$. Then $\rho g=g$: multiplication identities hold on the common scale core and extend by the compatible multiplier actions. Apply [F2] with cutoff $\rho$ and input $g$ to obtain $\|\rho u\|_{L^2H_D^{s+1}}\le C_\rho\|g\|_{L^2H_D^s}$. Since $\eta\rho=\eta$, bounded multiplication by $\eta$ on $H_D^{s+1}$ gives the required estimate for $\eta u$. [F2, F4, F5, given]

2.1 The two intervals in steps 1.1 and 1.2 cover $[-2,1]$. For the given $s$, use the corresponding constant; the overlap at $s=-1$ requires no additional argument. This proves the estimate. [step 1.1, step 1.2] ∎

## Source notes

The original article is cited for attribution of Lemma 4.1 and equation (4.1). The proof above uses the two stated suppliers; their independent inputs and source reading limits are recorded in those items. The explicit Choice assumption records the hypotheses of those suppliers and is not attributed to the article.
