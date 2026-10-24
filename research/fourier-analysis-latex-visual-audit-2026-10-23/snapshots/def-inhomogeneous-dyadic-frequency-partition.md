---
id: def-inhomogeneous-dyadic-frequency-partition
kind: definition
title: "The inhomogeneous dyadic frequency partition and its Littlewood-Paley operators"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-translation-invariant-fourier-multiplier-on-schwartz-space, lem-ltwo-fourier-multiplier-bound, def-fourier-transform-of-a-tempered-distribution, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, def-convolution-of-two-functions-on-rn, thm-young-convolution-inequality, thm-fourier-inversion-on-schwartz-space, thm-fourier-transform-converts-convolution-to-products, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, lem-smooth-polynomially-bounded-multipliers-on-schwartz-space, def-countable-choice, cor-schwartz-convolution-and-product-transform-laws]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Definition 6.1.1 ($\\Delta_j(f)=f*\\Psi_{2^{-j}}$ and its Fourier support, and the associated square function), printed pp. 420-421"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "§5, $\\psi_j(D)$ for bumps adapted to $\\{|\\xi|\\sim2^j\\}$, printed pp. 23-24"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "(5.11) and (6.3), the rescaled convolution operators and the nonhomogeneous low-pass, printed pp. 18, 24"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]). Fix a function $\psi$ and
its partition $(\varphi_j)_{j\ge0}$ as in
[[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]]. Define
the **companion sequence** by
$$\tilde\varphi_j:=\varphi_{j-1}+\varphi_j+\varphi_{j+1}\qquad(j\ge0),$$
with $\varphi_{-1}:=0$. For $f\in\mathcal S'(\mathbb R^n)$ define
$$\Delta_jf:=\mathcal F^{-1}\bigl(\varphi_j\cdot\mathcal F f\bigr),\qquad \tilde\Delta_jf:=\mathcal F^{-1}\bigl(\tilde\varphi_j\cdot\mathcal F f\bigr),$$
where $\varphi_j\cdot\mathcal F f$ and $\tilde\varphi_j\cdot\mathcal F f$ are
the products of the tempered distribution $\mathcal Ff$ with the smooth
polynomially bounded symbols $\varphi_j,\tilde\varphi_j$ (transposition,
[[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]); for
$f\in\mathcal S$ these operators are the translation-invariant Fourier
multipliers $T_{\varphi_j}f$, $T_{\tilde\varphi_j}f$ of
[[def-translation-invariant-fourier-multiplier-on-schwartz-space]]; for
$f\in L^p(\mathbb R^n;\mathbb C)$, $1\le p<\infty$, define
$\Delta_jf:=f*K_j$ and $\tilde\Delta_jf:=f*\tilde K_j$, where
$$K_j:=\mathcal F^{-1}\varphi_j,\qquad \tilde K_j:=\mathcal F^{-1}\tilde\varphi_j$$
are the inverse transforms of the symbols ([[def-fourier-transform-of-a-tempered-distribution]]).
The following well-definedness and compatibility facts are part of the
definition and are recorded with their cited suppliers.

1. **Domains.** Each $\varphi_j$ and each $\tilde\varphi_j$ is smooth,
   compactly supported and bounded together with all its derivatives, hence a
   smooth polynomially bounded multiplier: for $f\in\mathcal S(\mathbb R^n)$
   the products $\varphi_j\widehat f$ and $\tilde\varphi_j\widehat f$ lie in
   $\mathcal S(\mathbb R^n)$
   ([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]), so
   $\mathcal S\subset D_{\varphi_j}\cap D_{\tilde\varphi_j}$ and
   $T_{\varphi_j}f$, $T_{\tilde\varphi_j}f$ are well-defined tempered
   distributions. Because
   $\varphi_0=\psi$ and
   $\varphi_j(\xi)=\psi(2^{-j}\xi)-\psi(2^{-(j-1)}\xi)$ for $j\ge1$, the pieces satisfy the
   rescaling law $\varphi_{k+j-1}(\xi)=\varphi_k(2^{-(j-1)}\xi)$ for every
   $k\ge1$ and $j\ge1$ (so $\varphi_j(\xi)=\varphi_1(2^{-(j-1)}\xi)$ for $j\ge1$); the
   companion symbols are sums of neighbouring pieces, and no single rescaling
   law for all $j\ge0$ is used. They have
   the recorded supports
   $\operatorname{supp}\tilde\varphi_j\subset\{|\xi|\le2^{j+2}\}$ for every
   $j\ge0$, with
   $\operatorname{supp}\tilde\varphi_j\subset\{2^{j-2}\le|\xi|\le2^{j+2}\}$
   for $j\ge2$, together with
   $\operatorname{supp}\tilde\varphi_0\subset\{|\xi|\le4\}$. The vanishing is
   strict: for $j\ge1$, since $\psi=1$ on the unit ball, $\varphi_j(\xi)=0$ whenever
   $|\xi|\le2^{j-1}$ (both arguments of $\psi$ have modulus at most $1$), and
   since $\psi=0$ for $|\xi|\ge2$, $\varphi_j(\xi)=0$ whenever
   $|\xi|\ge2^{j+1}$; thus for $j\ge1$ its nonzero set is contained in the open annulus
   $2^{j-1}<|\xi|<2^{j+1}$, while its closed support lies in
   $2^{j-1}\le|\xi|\le2^{j+1}$. Boundary points can belong to the support
   even though the function vanishes there, and
   $\varphi_0=0$ for $|\xi|\ge2$.
2. **The $L^p$ definition.** $K_j,\tilde K_j\in\mathcal S(\mathbb R^n)$
   ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]),
   hence $K_j,\tilde K_j\in L^1(\mathbb R^n)$, and Young's inequality
   ([[thm-young-convolution-inequality]]) shows that for $f\in L^p$,
   $1\le p<\infty$, the convolutions $f*K_j$, $f*\tilde K_j$ are defined
   almost everywhere, lie in $L^p$ and satisfy
   $\|f*K_j\|_p\le\|K_j\|_1\|f\|_p$,
   $\|f*\tilde K_j\|_p\le\|\tilde K_j\|_1\|f\|_p$; the convolution is the one
   of [[def-convolution-of-two-functions-on-rn]].
3. **Agreement on $\mathcal S$ and composition.** For $f\in\mathcal S$ the
   convolution $K_j*f$ is Schwartz by
   [[cor-schwartz-convolution-and-product-transform-laws]], hence lies in $L^1$, its integral transform is
   $\widehat{K_j*f}=\widehat K_j\widehat f=\varphi_j\widehat f$ by the
   convolution theorem ([[thm-fourier-transform-converts-convolution-to-products]]),
   and Fourier inversion ([[thm-fourier-inversion-on-schwartz-space]]) gives
   $K_j*f=\mathcal F^{-1}(\varphi_j\widehat f)$ as functions; since
   $T_{\varphi_j}f=\mathcal F^{-1}(u_{\varphi_j\widehat f})$ and the right side
   is the regular distribution of $\mathcal F^{-1}(\varphi_j\widehat f)$, the
   two definitions of $\Delta_jf$ agree on $\mathcal S$, and
   $\widehat{\Delta_jf}=\varphi_j\widehat f$ as tempered distributions (using
   that the distributional transform agrees with the integral transform on
   $L^1$ functions,
   [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]); the
   same holds for the companions. Moreover, if $m,n$ are smooth polynomially
   bounded symbols with $\mathcal S\subset D_m\cap D_n$, then
   $T_mT_n=T_{mn}$ on $\mathcal S$: for $f\in\mathcal S$ the density
   $n\widehat f$ lies in $\mathcal S$, so $T_nf$ is the regular distribution
   of $\mathcal F^{-1}(n\widehat f)\in\mathcal S$ and
   $T_m(T_nf)=T_{mn}f$ by the same computation.
4. **The companion identity and the low-frequency block.** Because
   $\varphi_j\varphi_k=0$ pointwise whenever $|j-k|\ge2$ (the annular supports
   meet at most at the endpoint spheres, where both factors vanish), expanding
   $1=(\sum_j\varphi_j)^2$ gives
   $1=\sum_j\varphi_j^2+2\sum_j\varphi_j\varphi_{j+1}
   =\sum_j(\varphi_{j-1}+\varphi_j+\varphi_{j+1})\varphi_j
   =\sum_j\tilde\varphi_j\varphi_j$,
   the sums being locally finite. Neither the low-frequency block $\Delta_0$
   nor its companion $\tilde\Delta_0$ is assigned mean zero: indeed
   $\int_{\mathbb R^n}K_j=\varphi_j(0)$ and
   $\int_{\mathbb R^n}\tilde K_j=\tilde\varphi_j(0)$, so
   $\int K_0=\psi(0)=1$ and
   $\int\tilde K_0=\varphi_0(0)+\varphi_1(0)=1$, and no cancellation is
   claimed for these blocks.

This partition is fixed once and for all on this page. The operator norms of
$\Delta_j$ on $L^2$ are at most $\|\varphi_j\|_\infty\le1$
([[lem-ltwo-fourier-multiplier-bound]]), and all constants below refer to this
fixed partition.
