---
dependency_level: 5
id: lem-gl3-simple-singularity-mellin-pairing
kind: lemma
title: "Mellin pairing of simple singularities against a flat tempered distribution"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-gl3-voronoi-archimedean-transform, lem-gl3-mellin-endpoint-pairing-and-cutoff-independence, lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion, lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals, lem-gl3-homogeneous-fourier-mellin-kernel, thm-cauchy-integral-formula-higher-derivatives, cor-cauchy-theorem-convex-domain, lem-test-function-cutoffs-and-euclidean-localization, def-countable-choice]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Distributions and Analytic Continuation of Dirichlet Series, Lemma 6.40 and complete proof (6.41)–(6.45)"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. Let $f\in\mathcal S_{\mathrm{sis}}(\mathbb R)$ and let $\sigma\in\mathcal S'(\mathbb R)$ vanish to infinite order at zero. The canonical pairing
$$\int_{\mathbb R}f(x)\sigma(x)dx:=\lim_{t\downarrow0}\left\langle\sigma,(1-\chi(x/t))f(x)\right\rangle$$
exists and is independent of the even compact smooth cutoff $\chi$ equal to one near zero. It agrees with multiplication by the canonical power/log extensions at zero and ordinary Schwartz pairing away from zero.

For each parity $\delta$, $M_\delta f(s)$ is absolutely convergent and holomorphic sufficiently far to the right. It extends meromorphically, with poles in finitely many arithmetic progressions of nonpositive shifts of fixed complex numbers and uniformly bounded pole orders, and is rapidly decreasing on vertical strips at large imaginary height. If $\sigma$ has parity $\delta$, then for every sufficiently large real $c$,
$$\int_{\mathbb R}f(x)\sigma(x)dx=\frac1{4\pi i}\int_{\operatorname{Re}s=c}M_\delta f(s)M_\delta\sigma(1-s)\,ds.$$
The integral is absolutely convergent and is independent of $c$ within the sufficiently far right half-plane of holomorphy.

## Statement references

[Miller and Schmid, Lemma6.40 and (6.41)–(6.45)](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** The stated objects and [[def-countable-choice|Countable Choice]]. The signed Mellin convention and distribution pairings are bilinear.

[F1] [[def-gl3-voronoi-archimedean-transform]] defines the simple-singularity space. [[lem-test-function-cutoffs-and-euclidean-localization]] supplies the finite localization near zero.

[F2] [[lem-gl3-mellin-endpoint-pairing-and-cutoff-independence]] gives endpoint Mellin transforms, polynomial vertical bounds and locally uniform cutoff convergence. [[lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion]] gives the Schwartz/distribution inversion pairing on its full strip.

[F3] [[lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals]] gives canonical power/log products with infinitely flat distributions, temperedness and normalization to an infinity extension of order at least one after sufficiently large integer division.

[F4] [[lem-gl3-homogeneous-fourier-mellin-kernel]] gives meromorphic continuation and rapid vertical decay for Schwartz Mellin transforms. [[thm-cauchy-integral-formula-higher-derivatives]] bounds their derivatives, and derivatives of holomorphic polynomial-growth transforms, on smaller closed strips by the same type of bounds. [[cor-cauchy-theorem-convex-domain]] permits the pole-free vertical contour shifts used below.

## Proof

**Given:** The stated data.

1.1 A compact cutoff at zero decomposes $f$ into a finite sum of global products $(\operatorname{sgn}x)^\eta|x|^\beta(\log|x|)^qg(x)$ with $g\in\mathcal S$, plus a Schwartz function zero near zero. This follows by extending each smooth local coefficient after multiplying by that cutoff; the remaining function is smooth and rapidly decreasing with all derivatives. For one such product, use an arbitrarily high local flat normal form for $\sigma$. Pairing against a cutoff difference supported at $|x|\le At$ and moving its finitely many derivatives gives a bound $C t^{k+\operatorname{Re}\beta+1}(1+|\log t|)^q$ for a sufficiently large chosen $k$. The derivatives of the power/log factor have the same bound with the corresponding inverse powers of $x$, and cutoff derivatives have support in a fixed rescaled annulus. Choose $k+\operatorname{Re}\beta+1>0$. This proves existence and independence of the displayed limit, as well as its equality with the canonical product from [F3], since both agree off zero and are infinitely flat at zero. Away from zero the input is a Schwartz test and no endpoint regularization is needed. Linear combinations prove the pairing for every $f$. [F1, F2, F3, given, algebra]

2.1 Assume $f$ has parity $\delta$; its opposite parity pairs to zero with a parity-$\delta$ $\sigma$. The decomposition in step 1.1 may be projected so that the coefficient $g$ in a term of parity factor $\eta$ has parity $\delta+\eta$. For that term, ordinary absolutely convergent integration sufficiently far right gives [F2, F4, step 1.1, algebra]
$$M_\delta f(s)=D_s^qM_{\delta+\eta}g(s+\beta).$$
Thus [F4] gives the asserted meromorphic continuation: the poles of each Schwartz Mellin factor are at the nonpositive integers of the corresponding parity, shifted by $-\beta$, and differentiation raises their orders by at most $q$. Derivatives preserve rapid vertical decay on smaller pole-free real strips by the Cauchy formula, using a fixed-radius circle and the uniform rapid bound on a slightly larger strip. The same argument applied to the holomorphic endpoint transform of $\sigma$ gives polynomial vertical bounds for every one of its complex derivatives in a sufficiently far left half-plane. Consequently all forthcoming vertical integrals and their integrations by parts have absolutely integrable majorants. [F2, F4, step 1.1, algebra]

3.1 Continue with one product from step 2.1. By [F3], $V=(\operatorname{sgn}x)^\eta|x|^\beta(\log|x|)^q\sigma$ is tempered and infinitely flat at zero. Divide it by a sufficiently large even integer power $x^{2r}$ so that $\sigma'=(\operatorname{sgn}x)^\eta|x|^{\beta-2r}(\log|x|)^q\sigma$ has an infinity extension of order at least one. If the initial normalizing power is odd, increase it by one: reciprocal-coordinate multiplication by $u$ raises that finite infinity order, and canonical division at the flat origin preserves temperedness. Put $g_r=x^{2r}g\in\mathcal S$. Then the pairing in step 1.1 is $\langle\sigma',g_r\rangle$. On a sufficiently far left half-plane, the cutoff definition and differentiation in the Mellin parameter give [F2, F3, F4, step 1.1, step 2.1, algebra]
$$M_{\delta+\eta}\sigma'(w)=D_w^qM_\delta\sigma(w+\beta-2r).$$
Indeed this is an exact equality before cutoff removal. The locally uniform holomorphic convergence from [F2] permits passing derivatives through that limit by Cauchy's formula in [F4], on a slightly smaller strip. The inversion identity [F2] therefore yields
$$\langle\sigma',g_r\rangle=\frac1{4\pi i}\int_{\operatorname{Re}z=d}M_{\delta+\eta}g_r(z)D_w^qM_\delta\sigma(1-z+\beta-2r)\,dz,$$
where $d$ is sufficiently large; the notation $D_w$ differentiates the displayed argument. No upper bound on $d$ is needed because $\sigma'$ is infinitely flat at zero. [F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Set $z=s+\beta-2r$ in this integral. The shifted vertical line still runs from bottom to top. Since $D_w^qM_\delta\sigma(1-s)=(-1)^qD_s^qM_\delta\sigma(1-s)$, integrating by parts $q$ times along it transfers the derivatives to $M_{\delta+\eta}g_r(s+\beta-2r)$, with the two sign factors canceling. The endpoint terms vanish by the rapid/polynomial derivative bounds in step 2.1. The resulting differentiated factor is $M_\delta f(s)$ by the formula of step 2.1 and $g_r=x^{2r}g$. This proves the asserted pairing integral for one term, on a sufficiently far right line. The purely Schwartz remainder is the same case with zero power and logarithmic degree. Finite sums admit a common farther-right half-plane; rectangular contour shifts there have vanishing horizontal sides by [F4] and the same rapid/polynomial bounds. They give independence of the abscissa and allow the terms to be added on any common sufficiently far right line. This proves the full formula. Zero inputs give zero pairings, and $q=0$ requires no integration by parts. [F1, F2, F4, step 1.1, step 2.1, step 3.1, algebra] ∎
