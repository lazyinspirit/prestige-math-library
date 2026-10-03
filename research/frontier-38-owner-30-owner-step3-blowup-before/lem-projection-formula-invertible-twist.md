---
id: lem-projection-formula-invertible-twist
kind: lemma
title: "Projection formula for invertible twists"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-euler-characteristic-coherent-sheaf
  - def-higher-direct-image-sheaf
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - lem-higher-direct-image-affine-localization
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - cor-projective-cohomology-finite-dimensional-field
  - thm-pullback-pushforward-module-adjunction
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Chapter 30, Cohomology of Schemes, base change and projection results; Section 31.33 for the applications"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Chapter 24 cohomology and base change, pp. 514-518 (used as an interface check)"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $f\colon X\to Y$ be a morphism of schemes, let
$\mathcal F$ be a quasi-coherent $\mathcal O_X$-module and let $\mathcal L$
be an invertible $\mathcal O_Y$-module. Then the natural map

$$R^qf_*(\mathcal F)\otimes_{\mathcal O_Y}\mathcal L\longrightarrow R^qf_*\bigl(\mathcal F\otimes_{\mathcal O_X}f^*\mathcal L\bigr)$$

is an isomorphism for every $q\ge0$. In particular, if $X$ and $Y$ are proper
over a field $k$ and $\mathcal F$ is coherent, then the Euler characteristics
satisfy $\chi(X,f^*\mathcal L)=\chi(Y,\mathcal L)$ whenever
$f_*\mathcal O_X=\mathcal O_Y$ and $R^qf_*\mathcal O_X=0$ for $q>0$.

## Facts & Assumptions

**Given:** A morphism $f\colon X\to Y$ of schemes, a quasi-coherent $\mathcal O_X$-module $\mathcal F$ and an invertible $\mathcal O_Y$-module $\mathcal L$; the Axiom of Choice is inherited from the cohomology and adjunction suppliers cited below ([[def-axiom-of-choice]]).

[F1] [[def-higher-direct-image-sheaf]]: For a morphism of ringed spaces $f$ and an $\mathcal O_X$-module $\mathcal G$, the higher direct images are $R^qf_*\mathcal G=H^q(f_*I(\mathcal G)_{\mathrm{del}})$ for a fixed functorial injective resolution datum, with $R^0f_*\mathcal G=f_*\mathcal G$ canonically and $R^qf_*=0$ for $q<0$; the functor $f_*$ is left exact and additive.

[F2] [[thm-pullback-pushforward-module-adjunction]]: For a morphism of ringed spaces $f$, the inverse image functor $f^*$ on modules is left adjoint to the direct image functor $f_*$, with unit $\eta\colon\mathrm{id}\to f_*f^*$ and counit $\varepsilon\colon f^*f_*\to\mathrm{id}$.

[F3] [[def-invertible-sheaf]] and [[def-locally-free-sheaf-finite-rank]]: An $\mathcal O_Y$-module $\mathcal L$ is invertible when every point of $Y$ has an open neighbourhood $U$ with $\mathcal L|_U\cong\mathcal O_U$; then $f^*\mathcal L$ is invertible on $X$, and for any $\mathcal O_X$-module $\mathcal G$ the canonical map $\mathcal G\otimes_{\mathcal O_X}f^*\mathcal L\to\mathcal G\otimes_{\mathcal O_X}f^*\mathcal L$ is an isomorphism obtained from the identity.

[F4] [[lem-higher-direct-image-affine-localization]]: For a quasi-compact separated morphism $f$ and quasi-coherent $\mathcal G$, each $R^qf_*\mathcal G$ is quasi-coherent and, on an affine open $V\subseteq Y$, $(R^qf_*\mathcal G)|_V\cong\widetilde{H^q(f^{-1}V,\mathcal G)}$; in particular the formation of $R^qf_*\mathcal G$ is local on $Y$.

[F5] [[thm-leray-spectral-sequence-for-sheaf-cohomology]]: For a morphism $f\colon X\to Y$ and an $\mathcal O_X$-module $\mathcal G$ there is a spectral sequence with $E_2^{pq}=H^p(Y,R^qf_*\mathcal G)$ converging to $H^{p+q}(X,\mathcal G)$.

[F7] [[def-euler-characteristic-coherent-sheaf]]: For a scheme proper over a field $k$ and a coherent module, the Euler characteristic is the finite alternating sum of the $k$-dimensions of the cohomology groups; moreover, on a locally Noetherian scheme finite locally free sheaves, in particular invertible sheaves, are coherent.

[F8] [[cor-projective-cohomology-finite-dimensional-field]]: For a scheme $X$ proper over a field $k$ and a coherent $\mathcal O_X$-module $\mathcal F$, each $H^q(X,\mathcal F)$ is finite-dimensional over $k$ and only finitely many of the groups are nonzero.

## Proof

1.1 For every $\mathcal O_X$-module $\mathcal G$ let $\nu_{\mathcal G}\colon (f_*\mathcal G)\otimes_{\mathcal O_Y}\mathcal L\to f_*(\mathcal G\otimes_{\mathcal O_X}f^*\mathcal L)$ be the $\mathcal O_Y$-module map adjoint to the composite $f^*\bigl((f_*\mathcal G)\otimes\mathcal L\bigr)\cong f^*f_*\mathcal G\otimes f^*\mathcal L\xrightarrow{\varepsilon_{\mathcal G}\otimes\mathrm{id}}\mathcal G\otimes f^*\mathcal L$, using the counit of the adjunction and the compatibility of $f^*$ with tensor products; the map is natural in $\mathcal G$. Applying it to the terms of the fixed injective resolution of $\mathcal F$ and using naturality (so that the maps commute with the differentials) yields a map of complexes $f_*I(\mathcal F)_{\mathrm{del}}\otimes\mathcal L\to f_*(I(\mathcal F)_{\mathrm{del}}\otimes f^*\mathcal L)$ and hence, on cohomology, the natural map $R^qf_*(\mathcal F)\otimes\mathcal L\to R^qf_*(\mathcal F\otimes f^*\mathcal L)$ of the statement. [F1, F2]

2.1 The construction of step 1.1 is compatible with restriction to an open subscheme $U\subseteq Y$: both $f_*$ and $f^*$, the tensor product, and the adjunction restrict, so on $U$ the map for $(f|_U,\mathcal F|_{f^{-1}U},\mathcal L|_U)$ is the restriction of the map for $(f,\mathcal F,\mathcal L)$; in particular it suffices to prove that the map is an isomorphism over a cover of $Y$, because being an isomorphism of sheaves is a local condition. [F1, F2, F4, step 1.1]

2.2 Let $U\subseteq Y$ be an open set on which $\mathcal L$ admits a generator, so that $\mathcal L|_U\cong\mathcal O_U$ and $f^*\mathcal L|_{f^{-1}U}\cong\mathcal O_{f^{-1}U}$ [F3]. Under these trivializations the canonical isomorphism $\mathcal F\otimes f^*\mathcal L\to\mathcal F$ over $f^{-1}U$ identifies the target $R^qf_*(\mathcal F\otimes f^*\mathcal L)|_U$ with $R^qf_*(\mathcal F)|_U$ by the locality of higher direct images [F4], and the map of step 1.1 becomes the canonical map $R^qf_*(\mathcal F)|_U\otimes\mathcal O_U\to R^qf_*(\mathcal F)|_U$ induced by the module structure, which is an isomorphism; by naturality in $\mathcal G$ and in $\mathcal L$ the identification is the one produced by the trivialization, so the map of the statement is an isomorphism over $U$. [F2, F3, F4, step 1.1]

3.1 The trivializing opens of an invertible sheaf cover $Y$, so step 2.2 shows that the natural map of step 1.1 is an isomorphism locally on $Y$; by step 2.1 it is an isomorphism $R^qf_*(\mathcal F)\otimes\mathcal L\xrightarrow{\sim}R^qf_*(\mathcal F\otimes f^*\mathcal L)$ for every $q\ge0$. [F3, step 2.1, step 2.2]

4.1 For the final assertion take $\mathcal F=\mathcal O_X$, so that $f^*\mathcal L=\mathcal O_X\otimes f^*\mathcal L$ and step 3.1 gives $R^qf_*(f^*\mathcal L)\cong R^qf_*(\mathcal O_X)\otimes\mathcal L$; by hypothesis $R^qf_*\mathcal O_X=0$ for $q>0$ and $R^0f_*\mathcal O_X=f_*\mathcal O_X=\mathcal O_Y$, so $R^qf_*(f^*\mathcal L)=0$ for $q>0$ and $R^0f_*(f^*\mathcal L)\cong\mathcal L$. [F1, step 3.1]

5.1 By the Leray spectral sequence [F5] for $f$ and $f^*\mathcal L$, whose $E_2$ page is $E_2^{pq}=H^p(Y,R^qf_*(f^*\mathcal L))$, step 4.1 leaves only the row $q=0$, namely $E_2^{p0}=H^p(Y,\mathcal L)$; hence the spectral sequence degenerates and the edge maps are isomorphisms $H^n(X,f^*\mathcal L)\cong H^n(Y,\mathcal L)$ for every $n\ge0$. [F5, step 4.1]

6.1 Both $X$ and $Y$ are proper over $k$, hence of finite type over the field $k$ and therefore locally Noetherian; the sheaves $\mathcal O_X$, $f^*\mathcal L$ and $\mathcal L$ are invertible, hence locally free of finite rank, hence coherent, so [F7] and [F8] make the two Euler characteristics finite alternating sums of finite-dimensional $k$-vector spaces. By the termwise isomorphism of step 5.1 the sums are equal: $\chi(X,f^*\mathcal L)=\sum_n(-1)^n\dim_kH^n(X,f^*\mathcal L)=\sum_n(-1)^n\dim_kH^n(Y,\mathcal L)=\chi(Y,\mathcal L)$. [F3, F7, F8, step 5.1] ∎

## Remarks

Only the invertibility of $\mathcal L$ is used: for a general quasi-coherent $\mathcal L$ the map is not an isomorphism, its kernel and cokernel being the higher Tor terms, and the local trivialization argument of step 2.2 is exactly where invertibility enters. The Euler-characteristic clause needs no flatness of $f$; the vanishing of the higher direct images of $\mathcal O_X$ is the substitute.
