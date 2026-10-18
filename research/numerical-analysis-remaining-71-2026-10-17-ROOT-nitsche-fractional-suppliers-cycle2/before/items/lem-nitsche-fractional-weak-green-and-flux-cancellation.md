---
id: lem-nitsche-fractional-weak-green-and-flux-cancellation
kind: lemma
title: Fractional weak Green identity and interior flux cancellation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-matching-affine-simplicial-meshes, def-nitsche-restriction-bessel-potential-sobolev-spaces, def-real-order-bessel-potential-sobolev-space, thm-plancherel, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, thm-linear-change-of-variables-for-lebesgue-measure, lem-nitsche-fractional-face-trace-on-simplex, lem-nitsche-scaled-fractional-simplex-trace, lem-affine-simplex-gauss-green-formula, lem-affine-pullback-weak-derivatives-and-scaling, lem-smooth-density-on-reference-simplex, lem-test-function-cutoffs-and-euclidean-localization, lem-compact-support-zero-extension-in-wkp, lem-mollification-commutes-with-weak-derivatives-in-the-interior, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, prop-mollifier-families-are-l-one-approximate-identities, thm-l-one-approximate-identities-converge-in-l-p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-riesz-fischer-completeness-of-l-p, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
---

## Statement

Assume Countable Choice. Let $K\subset\mathbb R^d$ be a nondegenerate affine simplex, let $r>1/2$, and let $q\in H^r(K;\mathbb R^d)$ in the restriction convention of [[def-nitsche-restriction-bessel-potential-sobolev-spaces]]. Suppose $\operatorname{div}q\in L^2(K)$ distributionally. Then for every $v\in H^1(K)$,
$$\int_Kq\cdot\nabla v\,dx+\int_K(\operatorname{div}q)v\,dx=\sum_{F\subset\partial K}\int_F(T_Fq\cdot n_{K,F})T_Fv\,dS,$$
where $T_Fq$ and $T_Fv$ are the unique $L^2(F)$ traces of [[lem-nitsche-fractional-face-trace-on-simplex]] and $n_{K,F}$ is the outward unit normal. This identifies the fractional facet trace of $q$ as its weak conormal flux.

Now let $\Omega$ be a nonempty bounded polyhedral open set with a finite matching affine simplicial mesh $\mathcal T_h$, let $u\in H^{1+r}(\Omega)$ with $r>1/2$, and suppose $-\Delta u=f\in L^2(\Omega)$ distributionally. The traces of $\nabla u$ from the two cells incident to every interior facet agree as vectors, so their outward normal fluxes cancel. For every $w\in H^1(\Omega)$ the sum of the cell identities is
$$\int_\Omega\nabla u\cdot\nabla w\,dx-\sum_{F\in\mathcal F_h^\partial}\int_F\partial_nu\,T_Fw\,dS=\int_\Omega fw\,dx.$$
Here $\mathcal F_h^\partial$ is the set of boundary facets, $\partial_nu:=T_F(\nabla u)\cdot n_F$, and all interior-facet value traces of a global $H^1(\Omega)$ function agree.

## Facts & Assumptions

**Given:** Countable Choice; the restriction Bessel-potential convention; a simplex $K$ and $r>1/2$; $q\in H^r(K;\mathbb R^d)$ with distributional divergence in $L^2(K)$; and, for the global statement, the nonempty bounded matching mesh, $u\in H^{1+r}(\Omega)$, and $-\Delta u=f\in L^2(\Omega)$.

[F1] Restriction $H^r(K)$ is the quotient of whole-space Bessel-potential extensions, the Fourier derivative multiplier maps $H^{1+r}(\mathbb R^d)$ continuously into $H^r(\mathbb R^d)$, and restriction-space traces for exponents greater than $1/2$ are the unique whole-space hyperplane traces ([[def-nitsche-restriction-bessel-potential-sobolev-spaces]], [[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]], [[lem-nitsche-fractional-face-trace-on-simplex]]).

[F2] The scaled endpoint trace estimate on a simplex is continuous from weak $H^1(K)$ to $L^2(F)$, and smooth functions on a neighbourhood of the closed reference simplex are dense in $W^{1,2}$ ([[lem-nitsche-scaled-fractional-simplex-trace]], [[lem-smooth-density-on-reference-simplex]]).

[F3] Classical affine-simplex Gauss–Green holds for smooth vector fields, and affine pullback preserves the stated weak-derivative scaling ([[lem-affine-simplex-gauss-green-formula]], [[lem-affine-pullback-weak-derivatives-and-scaling]]).

[F4] In a matching mesh, every interior facet has exactly two incident cells on opposite sides, every boundary facet has one, and the open domain is the interior of the finite cell union ([[def-matching-affine-simplicial-meshes]]).

[F5] Linear change of variables gives the affine $L^2$ bounds; smooth cutoffs and compact-support zero extension localize $H^1$ functions; nonnegative smooth compactly supported unit-mass mollifiers form an $L^1$ approximate identity, and every such family converges to the identity in finite $L^p$, including $L^2$. Convolution is smooth and commutes with weak derivatives on interior neighborhoods, and translations are continuous in $L^2$ ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[lem-test-function-cutoffs-and-euclidean-localization]], [[lem-compact-support-zero-extension-in-wkp]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[thm-riesz-fischer-completeness-of-l-p]]).

[A1] Countable Choice is the only choice principle used, to select extension and smoothing sequences for each member of the finite mesh ([[def-countable-choice]]).

## Proof

**Given:** The hypotheses and [F1]–[F5].

1.1 Choose a whole-space extension $Q\in H^r(\mathbb R^d;\mathbb R^d)$ of $q$. For $a$ in the interior of $K$ and $0<t<1$, set $A_t x=a+t(x-a)$. For every Schwartz vector field, Fourier change of variables and dominated convergence give $Q\circ A_t\to Q$ in $H^r(\mathbb R^d)$ as $t\uparrow1$; the dilation operators are uniformly bounded for $1/2\le t\le1$ because their Fourier norm is $t^{-d}\int\langle t\xi\rangle^{2r}|\widehat Q(\xi)|^2d\xi\le2^d\|Q\|_{H^r}^2$. Density of Schwartz space in the Bessel completion extends this convergence to every $Q$. [F1, F5, given, algebra]

2.1 Let $f_0$ be the zero extension of $\operatorname{div}q$ from $K$ to $\mathbb R^d$. Strong continuity of affine dilations in $L^2$, first for smooth compactly supported functions and then by density and the uniform change-of-variables bound, gives $t f_0\circ A_t\to f_0$ in $L^2(\mathbb R^d)$. Since $A_t(\overline K)$ is compactly contained in $K$, there is a bounded open neighborhood $N_t\supset\overline K$ with $A_t(N_t)\subset K$. On $N_t$, $Q\circ A_t=q\circ A_t$ and the weak affine chain rule gives $\operatorname{div}(Q\circ A_t)=t(\operatorname{div}q)\circ A_t$. [F3, F5, step 1.1, given]

3.1 For fixed $t<1$, let $q_{t,\epsilon}:=\rho_\epsilon*(Q\circ A_t)$ for a nonnegative smooth compactly supported unit-mass mollifier. Its Fourier multiplier tends pointwise to $1$ and is bounded by $1$, so dominated convergence in the weighted Fourier $L^2$ norm gives $q_{t,\epsilon}\to Q\circ A_t$ in $H^r(\mathbb R^d)$. Choose $N_t$ bounded with $\overline K\subset N_t$ and $A_t(N_t)\subset K$, as in step 2.1. If $\epsilon<\operatorname{dist}(\overline K,N_t^c)$, then on $K$ the divergence of $q_{t,\epsilon}$ equals the mollification of $t(\operatorname{div}q)\circ A_t$ from $N_t$; local $L^2$ approximate-identity convergence gives convergence to that divergence as $\epsilon\downarrow0$. Choose $t_n\uparrow1$ and then sufficiently small $\epsilon_n$ so that $q_n:=q_{t_n,\epsilon_n}$ is smooth and $q_n\to q$ in $H^r(K)$ while $\operatorname{div}q_n\to\operatorname{div}q$ in $L^2(K)$. The countable selection is permitted by [A1]. [F1, F5, A1, step 1.1, step 2.1]

4.1 For a smooth $v$ on a neighbourhood of $\overline K$, apply the classical affine-simplex Gauss–Green formula [F3] to each smooth field $q_n v$. The volume terms converge because $q_n\to q$ in $L^2(K)$ and $\operatorname{div}q_n\to\operatorname{div}q$ in $L^2(K)$; the facet terms converge because the $H^r$ trace in [F1] is continuous for $r>1/2$. This proves the displayed identity for such smooth $v$. [F1, F3, step 3.1]

5.1 For arbitrary $v\in H^1(K)$, affine pullback of the published smooth-density result in [F2] gives smooth $v_m\to v$ in $H^1(K)$. The volume integrals in the identity for $v_m$ converge by $L^2$ Cauchy–Schwarz, and their facet traces converge in $L^2(F)$ by the endpoint estimate in [F2]. Passing to the limit proves the identity for every $H^1$ test. [F2, step 4.1, algebra]

6.1 For the global case, take a whole-space extension $U\in H^{1+r}(\mathbb R^d)$ of $u$; [F1]'s Fourier multiplier bound gives $\nabla U\in H^r(\mathbb R^d)$. Thus both cell traces of $\nabla u$ on an interior facet are restrictions of the same hyperplane trace, so they agree as vectors and their opposite outward normals cancel. For a global $w\in H^1(\Omega)$, its two value traces agree on each interior facet: on every compact subfacet choose a ball whose closure lies in $\Omega$ and meets no other facets, multiply $w$ by a smooth cutoff equal to one near that subfacet, extend by zero, and mollify with radii tending to zero below the cutoff margin. [F5] applied to the cutoff function and its weak gradient, with the interior derivative-commutation identity, gives convergence of these smooth approximants in $H^1$ on the smaller neighborhood. Their traces therefore converge on each cell by [F2], while the smooth approximants have identical restrictions from both sides. Exhaust the facet by compact subfacets; its lower-dimensional rim has surface measure zero. Sum the first identity over all cells with $q=\nabla u$ and test $w$. The interior fluxes cancel by the common vector trace and the interior test traces agree; the volume divergence is $\Delta u=-f$. Rearranging gives the global formula. [F1, F2, F4, F5, given, algebra] ∎

## Source notes

The proof constructs smooth vector-field approximants that converge both in the restriction $H^r$ norm and in the $L^2$ divergence norm, so the facet trace is identified with the weak conormal term. The mesh sum uses only the exact face matching and the common whole-space trace of the global gradient. No $C^1$ boundary trace or unproved $H(\mathrm{div})$ Green theorem is imported.
