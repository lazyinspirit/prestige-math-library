---
id: lem-nitsche-fractional-weak-green-and-flux-cancellation
kind: lemma
title: Fractional weak Green identity and interior flux cancellation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-matching-affine-simplicial-meshes,
    def-nitsche-restriction-bessel-potential-sobolev-spaces,
    def-real-order-bessel-potential-sobolev-space,
    thm-bessel-potential-completions-embed-in-tempered-distributions,
    thm-plancherel,
    thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces,
    thm-fourier-transform-converts-allowed-tempered-convolutions-to-products,
    thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
    lem-nitsche-fractional-face-trace-on-simplex,
    lem-nitsche-scaled-fractional-simplex-trace,
    lem-affine-simplex-gauss-green-formula,
    lem-affine-pullback-weak-derivatives-and-scaling,
    lem-smooth-density-on-reference-simplex,
    lem-test-function-cutoffs-and-euclidean-localization,
    lem-compact-support-zero-extension-in-wkp,
    lem-mollification-commutes-with-weak-derivatives-in-the-interior,
    lem-smooth-bump-between-concentric-euclidean-balls,
    def-mollifier-family-generated-by-a-unit-mass-smooth-bump,
    def-l-one-approximate-identity-on-rn,
    thm-l-one-approximate-identities-converge-in-l-p,
    thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign,
    cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn,
    thm-riesz-fischer-completeness-of-l-p,
    thm-dominated-convergence,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $d\ge2$ and let $K\subset\mathbb R^d$ be a nondegenerate affine simplex, let $r>1/2$, and let $q\in H^r(K;\mathbb R^d)$ in the restriction convention of [[def-nitsche-restriction-bessel-potential-sobolev-spaces]]. Suppose $\operatorname{div}q\in L^2(K)$ distributionally. Then for every $v\in H^1(K)$,
$$\int_Kq\cdot\nabla v\,dx+\int_K(\operatorname{div}q)v\,dx=\sum_{F\subset\partial K}\int_F(T_Fq\cdot n_{K,F})T_Fv\,dS,$$
where $T_Fq$ is the fractional $L^2(F)$ trace of [[lem-nitsche-fractional-face-trace-on-simplex]], $T_Fv$ is the weak $H^1$ endpoint trace of [[lem-nitsche-scaled-fractional-simplex-trace]] (agreeing with the Fourier trace whenever $v$ has a restriction-space extension), and $n_{K,F}$ is the outward unit normal. This identifies the fractional facet trace of $q$ as its weak conormal flux.

Now let $\Omega$ be a nonempty bounded polyhedral open set with a finite matching affine simplicial mesh $\mathcal T_h$, let $u\in H^{1+r}(\Omega)$ with $r>1/2$, and suppose $-\Delta u=f\in L^2(\Omega)$ distributionally. The traces of $\nabla u$ from the two cells incident to every interior facet agree as vectors, so their outward normal fluxes cancel. For every $w\in H^1(\Omega)$ the sum of the cell identities is
$$\int_\Omega\nabla u\cdot\nabla w\,dx-\sum_{F\in\mathcal F_h^\partial}\int_F\partial_nu\,T_Fw\,dS=\int_\Omega fw\,dx.$$
Here $\mathcal F_h^\partial$ is the set of boundary facets, $\partial_nu:=T_F(\nabla u)\cdot n_F$, and all interior-facet value traces of a global $H^1(\Omega)$ function agree.

## Facts & Assumptions

**Given:** Countable Choice; the restriction Bessel-potential convention; a simplex $K$ and $r>1/2$; $q\in H^r(K;\mathbb R^d)$ with distributional divergence in $L^2(K)$; and, for the global statement, the nonempty bounded matching mesh, $u\in H^{1+r}(\Omega)$, and $-\Delta u=f\in L^2(\Omega)$.

[F1] Restriction $H^r(K)$ is the quotient of whole-space Bessel-potential extensions, the Fourier derivative multiplier maps $H^{1+r}(\mathbb R^d)$ continuously into $H^r(\mathbb R^d)$, and restriction-space traces for exponents greater than $1/2$ are the unique whole-space hyperplane traces ([[def-nitsche-restriction-bessel-potential-sobolev-spaces]], [[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]], [[lem-nitsche-fractional-face-trace-on-simplex]]). Vector-valued Bessel spaces, whole-space extensions, derivatives, and facet traces are interpreted componentwise; the scalar results apply to each of the finitely many components and the squared norms add.

[F2] The scaled endpoint trace estimate on a simplex is continuous from weak $H^1(K)$ to $L^2(F)$, and smooth functions on a neighbourhood of the closed reference simplex are dense in $W^{1,2}$ ([[lem-nitsche-scaled-fractional-simplex-trace]], [[lem-smooth-density-on-reference-simplex]]).

[F3] Classical affine-simplex Gauss–Green holds for smooth vector fields, and affine pullback preserves the stated weak-derivative scaling ([[lem-affine-simplex-gauss-green-formula]], [[lem-affine-pullback-weak-derivatives-and-scaling]]).

[F4] In a matching mesh, every interior facet has exactly two incident cells on opposite sides, every boundary facet has one, and the open domain is the interior of the finite cell union ([[def-matching-affine-simplicial-meshes]]).

[F5] The nonnegative $C^1$ change-of-variables formula gives affine integral and $L^2$ scaling identities; signed integrable products are handled by their positive and negative parts. Smooth cutoffs and compact-support zero extension localize $H^1$ functions. A smooth bump equal to one on a ball and supported in a larger ball can be normalized to a nonnegative smooth unit-mass kernel; change of variables preserves the rescaled mass and $L^1$ norm, and the shrinking support gives the $L^1$ approximate-identity tail condition. Every such family converges to the identity in finite $L^p$, including $L^2$. Convolution is smooth and commutes with weak derivatives, and translations are continuous in $L^2$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[lem-test-function-cutoffs-and-euclidean-localization]], [[lem-compact-support-zero-extension-in-wkp]], [[lem-smooth-bump-between-concentric-euclidean-balls]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[def-l-one-approximate-identity-on-rn]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[thm-riesz-fischer-completeness-of-l-p]]).

[F6] The Bessel-potential completion embeds canonically in tempered distributions, and the Fourier transform of its convolution with a Schwartz function is the product of the Fourier distributions ([[thm-bessel-potential-completions-embed-in-tempered-distributions]], [[thm-fourier-transform-converts-allowed-tempered-convolutions-to-products]]).

[F7] Dominated convergence applies to the weighted Fourier integrands and the squared smooth dilation differences used below ([[thm-dominated-convergence]]).

[A1] Countable Choice is the only choice principle used, to select extension and smoothing sequences for each member of the finite mesh ([[def-countable-choice]]).

## Proof

**Given:** The hypotheses and [F1]–[F5].

1.1 Choose a whole-space extension $Q\in H^r(\mathbb R^d;\mathbb R^d)$ of $q$, componentwise by [F1]. For $a$ in the interior of $K$ and $0<t<1$, set $A_t x=a+t(x-a)$. For every Schwartz vector field, the affine change-of-variables formula in [F5] and dominated convergence give $Q\circ A_t\to Q$ in $H^r(\mathbb R^d)$ as $t\uparrow1$; the dilation operators are uniformly bounded for $1/2\le t\le1$ because their Fourier norm is $t^{-d}\int\langle t\xi\rangle^{2r}|\widehat Q(\xi)|^2d\xi\le2^d\|Q\|_{H^r}^2$. Density of Schwartz space in the Bessel completion extends this convergence to every $Q$. [F1, F5, F7, given, algebra]

2.1 Let $f_0$ be the zero extension of $\operatorname{div}q$ from $K$ to $\mathbb R^d$. Strong continuity of affine dilations in $L^2$, first for smooth compactly supported functions and then by density and the uniform change-of-variables bound in [F5], gives $t f_0\circ A_t\to f_0$ in $L^2(\mathbb R^d)$. Since $A_t(\overline K)$ is compactly contained in $K$, there is a bounded open neighborhood $N_t\supset\overline K$ with $A_t(N_t)\subset K$. On $N_t$, $Q\circ A_t=q\circ A_t$ almost everywhere, because [F5] sends the null set where $Q$ and $q$ differ to a null preimage under the invertible affine map. This divergence identity follows directly without assuming that $q$ has all first weak derivatives in $L^2$: for $\phi\in C_c^\infty(N_t)$ put $\psi=\phi\circ A_t^{-1}\in C_c^\infty(K)$. Apply [F5] to the positive and negative parts of each integrable component product and use $\nabla\phi=t(\nabla\psi)\circ A_t$ to obtain $\int_{N_t}(Q\circ A_t)\cdot\nabla\phi=t^{1-d}\int_Kq\cdot\nabla\psi=-t^{1-d}\int_K(\operatorname{div}q)\psi=-\int_{N_t}t(\operatorname{div}q)\circ A_t\,\phi$. Thus $\operatorname{div}(Q\circ A_t)=t(\operatorname{div}q)\circ A_t$ distributionally. [F3, F5, F7, step 1.1, given]

3.1 For fixed $t<1$, let $q_{t,\epsilon}:=\rho_\epsilon*(Q\circ A_t)$ for a nonnegative smooth unit-mass mollifier supported in the unit ball. Since $Q\circ A_t\in H^r\subset\mathcal S'$ and $\rho_\epsilon\in\mathcal S$, [F6] gives $\widehat{q_{t,\epsilon}}=\widehat{Q\circ A_t}\,\widehat{\rho_\epsilon}$. Nonnegativity and unit mass give $|\widehat{\rho_\epsilon}(\xi)|\le1$, while its defining integral and dominated convergence give $\widehat{\rho_\epsilon}(\xi)\to1$ for each $\xi$. The exact weighted Fourier characterization in [F1] and dominated convergence therefore give $q_{t,\epsilon}\to Q\circ A_t$ in $H^r(\mathbb R^d)$. Choose $N_t$ bounded with $\overline K\subset N_t$ and $A_t(N_t)\subset K$, as in step 2.1, and put $f_t:=t(\operatorname{div}q)\circ A_t\in L^2(N_t)$. If $\epsilon<\operatorname{dist}(\overline K,N_t^c)$, then for $x\in K$ the convolution kernel $y\mapsto\rho_\epsilon(x-y)$ is supported in $N_t$. Differentiating the smooth convolution under the integral and using the distributional identity $\int_{N_t}(Q\circ A_t)\cdot\nabla\phi=-\int_{N_t}f_t\phi$ with $\phi(y)=\rho_\epsilon(x-y)$ gives, componentwise and after summing, $\operatorname{div}q_{t,\epsilon}(x)=-\int_{N_t}(Q\circ A_t)(y)\cdot\nabla_y\rho_\epsilon(x-y)\,dy=\int_{N_t}f_t(y)\rho_\epsilon(x-y)\,dy$. Extend $f_t$ by zero from $N_t$ to $\mathbb R^d$; [F5] gives $\rho_\epsilon*f_t\to f_t$ in $L^2(\mathbb R^d)$, so these divergences converge to $f_t$ in $L^2(K)$. Choose $t_n\uparrow1$ and then sufficiently small $\epsilon_n$ so that $q_n:=q_{t_n,\epsilon_n}$ is smooth and $q_n\to q$ in $H^r(K)$ while $\operatorname{div}q_n\to\operatorname{div}q$ in $L^2(K)$, using steps 1.1 and 2.1 for the two limits. The countable selection is permitted by [A1]. [F1, F5, F6, F7, A1, step 1.1, step 2.1]

4.1 For a smooth $v$ on a neighbourhood of $\overline K$, apply the classical affine-simplex Gauss–Green formula [F3] to each smooth field $q_n v$. The volume terms converge because $q_n\to q$ in $L^2(K)$ and $\operatorname{div}q_n\to\operatorname{div}q$ in $L^2(K)$; the facet terms converge because the $H^r$ trace in [F1] is continuous for $r>1/2$. This proves the displayed identity for such smooth $v$. [F1, F3, step 3.1]

5.1 For arbitrary $v\in H^1(K)$, affine pullback of the published smooth-density result in [F2] gives smooth $v_m\to v$ in $H^1(K)$. The volume integrals in the identity for $v_m$ converge by $L^2$ Cauchy–Schwarz, and their facet traces converge in $L^2(F)$ by the endpoint estimate in [F2]. Passing to the limit proves the identity for every $H^1$ test. [F2, step 4.1, algebra]

6.1 For the global case, take a whole-space extension $U\in H^{1+r}(\mathbb R^d)$ of $u$; [F1]'s Fourier multiplier bound gives $\nabla U\in H^r(\mathbb R^d)$. Thus both cell traces of $\nabla u$ on an interior facet are restrictions of the same hyperplane trace, so they agree as vectors and their opposite outward normals cancel. For a global $w\in H^1(\Omega)$, its two value traces agree on each interior facet: on every compact subfacet choose a ball whose closure lies in $\Omega$ and meets no other facets, multiply $w$ by a smooth cutoff equal to one near that subfacet, extend by zero, and mollify with radii tending to zero below the cutoff margin. [F5] applied to the cutoff function and its weak gradient, with the interior derivative-commutation identity, gives convergence of these smooth approximants in $H^1$ on the smaller neighborhood. Their traces therefore converge on each cell by [F2], while the smooth approximants have identical restrictions from both sides. Exhaust the facet by compact subfacets; its lower-dimensional rim has surface measure zero. Sum the first identity over all cells with $q=\nabla u$ and test $w$. The interior fluxes cancel by the common vector trace and the interior test traces agree; the volume divergence is $\Delta u=-f$. Rearranging gives the global formula. [F1, F2, F4, F5, given, algebra] ∎

## Source notes

The proof constructs smooth vector-field approximants that converge both in the restriction $H^r$ norm and in the $L^2$ divergence norm, so the facet trace is identified with the weak conormal term. The mesh sum uses only the exact face matching and the common whole-space trace of the global gradient. No $C^1$ boundary trace or unproved $H(\mathrm{div})$ Green theorem is imported.
