---
title: "Proposition 2.2: retarded local smoothing"
status: draft
research_item: prop-se-2-2-retarded
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 7: ` Proposition 2.2; (2.2) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [lem-author-03489e9088b7-bochner-lifted-spectral-measure](item-lem-author-03489e9088b7-bochner-lifted-spectral-measure)
- [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:cor-cauchy-schwarz-inequality-for-l-two](https://alphabetamath.cc/item/cor-cauchy-schwarz-inequality-for-l-two)


## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary. Assume that $\Theta$ is non-trapping in the complete-ray sense: for every complete unit-speed admissible generalized reflected or glancing ray $x:\mathbb R\to\overline\Omega$ and every compact $K\subset\mathbb R^n$, there is $t\ge0$ with $x(t)\notin K$. Let $\Delta_D$ be the Dirichlet Laplacian, $H_D^s(\Omega)$ the spectral scale of $I-\Delta_D$, and $W(t)=e^{it\Delta_D}$.

For every $\chi\in C_c^\infty(\mathbb R^n)$ there is a constant $C>0$ such that, for every $T>0$, $s\in[-1,1]$, and $f\in L^2(0,T;H_D^s(\Omega))$, the retarded evolution $u(t)=\int_0^t W(t-r)\chi f(r)\,dr$ satisfies
$$\|\chi u\|_{L^2(0,T;H_D^{s+1}(\Omega))}\le C\|\chi f\|_{L^2(0,T;H_D^s(\Omega))}.$$
The cutoff acts by multiplication after restriction to $\Omega$. The constant may depend on the obstacle and cutoff, but is independent of $T$, $s$, and $f$. The time spaces are Bochner spaces and the integral is a Bochner integral in $H_D^s$.

## Facts & Assumptions

[F1] The smooth exterior geometry and generalized-ray non-trapping convention are specified by [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping).

[F2] The Dirichlet spectral scale, including its negative-order pivot-antidual interpretation, is specified by [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Its flow $W(t)$ is a strongly continuous unitary group on every scale level [prop-se-scale-flow](item-prop-se-scale-flow). The spaces $L^2(0,T;H_D^s)$ and their Bochner integrals use [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F3] For each smooth compactly supported cutoff $\eta$, [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing) gives the causal estimate with input $\eta h$, output cutoff $\eta$, and orders $-1\le s\le1$; its constant is independent of $T$ and the data, and may depend on the order.

[F4] Multiplication by a smooth compactly supported function is bounded on $H_D^q$ for $-2\le q\le2$; the negative-order action is the compatible pivot-dual extension [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality).

[F5] A smooth compactly supported function equal to one on a prescribed sufficiently large closed ball exists by [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls).

[F6] The lifted spectral-scale interpolation theorem gives the exact Bochner-space interpolation identity and the geometric-mean endpoint operator bound for maps whose source and target are such time-space scales [lem-author-03489e9088b7-bochner-lifted-spectral-measure](item-lem-author-03489e9088b7-bochner-lifted-spectral-measure). The assumptions of the cited scale and interpolation results include the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F7] Scalar integral Cauchy–Schwarz gives $\int_0^t a(r)\,dr\le t^{1/2}\|a\|_{L^2(0,t)}$ for each nonnegative $a\in L^2(0,t)$, by pairing $a$ with the constant function $1$ in [math:cor-cauchy-schwarz-inequality-for-l-two](https://alphabetamath.cc/item/cor-cauchy-schwarz-inequality-for-l-two).

## Proof

[F1] The smooth exterior geometry and generalized-ray non-trapping convention are specified by [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping).

[F2] The Dirichlet spectral scale, including its negative-order pivot-antidual interpretation, is specified by [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Its flow $W(t)$ is a strongly continuous unitary group on every scale level [prop-se-scale-flow](item-prop-se-scale-flow). The spaces $L^2(0,T;H_D^s)$ and their Bochner integrals use [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F3] For each smooth compactly supported cutoff $\eta$, [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing) gives the causal estimate with input $\eta h$, output cutoff $\eta$, and orders $-1\le s\le1$; its constant is independent of $T$ and the data, and may depend on the order.

[F4] Multiplication by a smooth compactly supported function is bounded on $H_D^q$ for $-2\le q\le2$; the negative-order action is the compatible pivot-dual extension [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality).

[F5] A smooth compactly supported function equal to one on a prescribed sufficiently large closed ball exists by [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls).

[F6] The lifted spectral-scale interpolation theorem gives the exact Bochner-space interpolation identity and the geometric-mean endpoint operator bound for maps whose source and target are such time-space scales [lem-author-03489e9088b7-bochner-lifted-spectral-measure](item-lem-author-03489e9088b7-bochner-lifted-spectral-measure). The assumptions of the cited scale and interpolation results include the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F7] Scalar integral Cauchy–Schwarz gives $\int_0^t a(r)\,dr\le t^{1/2}\|a\|_{L^2(0,t)}$ for each nonnegative $a\in L^2(0,t)$, by pairing $a$ with the constant function $1$ in [math:cor-cauchy-schwarz-inequality-for-l-two](https://alphabetamath.cc/item/cor-cauchy-schwarz-inequality-for-l-two).



**Given:** The obstacle, cutoff $\chi$, time $T$, order $s$, and function $f$ in the statement.

**Goal:** Prove the displayed retarded estimate with one constant independent of $T$ and $s$.

1.1 Choose a real $\eta\in C_c^\infty(\mathbb R^n)$ equal to one on a neighborhood of $\operatorname{supp}\chi$, using a ball containing that support and [F5]. Thus $\chi\eta=\chi$. For each $T$, define $S_Tg(t)=\chi\int_0^t W(t-r)\eta g(r)\,dr$. Strong continuity of $W$ on the relevant scale and bounded cutoff multiplication give strongly measurable integrands for $g$ in either endpoint time-space. Applying [F7] to $a(r)=\|\eta g(r)\|_{H_D^q}$, with $q=-1,1$, gives $\int_0^t\|W(t-r)\eta g(r)\|_{H_D^q}\,dr\le t^{1/2}\|\eta g\|_{L^2(0,t;H_D^q)}<\infty$ by unitarity, so the stated Bochner integrals exist. [F2, F4, F5, F7, given]

2.1 Apply [F3] with cutoff $\eta$ and input $g$ at each endpoint $q=-1,1$. Since $\chi\eta=\chi$, multiplying its output by $\chi$ and using [F4] gives $\|S_Tg\|_{L^2H_D^{q+1}}\le M_q\|g\|_{L^2H_D^q}$, where $M_q$ is independent of $T$. The constants include the bounded multiplication norms of $\chi$ on $H_D^{q+1}$ and $\eta$ on $H_D^q$. The endpoint definitions agree on their common domain because they use the same integral and compatible scale actions. [F3, F4, step 1.1]

3.1 For $-1<s<1$, set $\theta=(s+1)/2$. Apply [F6] to the consistent endpoint map $S_T$, with source orders $-1,1$ and target orders $0,2$. It gives $\|S_Tg\|_{L^2H_D^{s+1}}\le M_{-1}^{1-\theta}M_1^\theta\|g\|_{L^2H_D^s}$. This bound and the endpoint bounds are all at most $\max(M_{-1},M_1)$, independently of $s$ and $T$. [F6, step 2.1]

4.1 Put $g=\chi f$. By [F4], $g$ belongs to $L^2(0,T;H_D^s)$ and $\eta g=g$: the identity holds on the common spectral core and extends by the compatible bounded multiplier actions, including at negative orders. Hence $S_Tg=\chi u$. Substitution into the bound from step 3.1, with the endpoint cases from step 2.1, proves the claimed estimate with $C=\max(M_{-1},M_1)$. [F4, step 1.1, step 2.1, step 3.1, given] ∎

## Source notes

The original article is cited for attribution of Proposition 2.2 and its equation (2.2). The causal smoothing input is the independent Burq–Gérard–Tzvetkov result recorded in [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing); the uniformity in the order range is obtained by the endpoint interpolation above. No Christ–Kiselev argument is used.
