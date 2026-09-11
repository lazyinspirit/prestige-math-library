---
id: ex-hermite-functions-as-fourier-eigenfunctions
kind: example
title: Normalized Hermite Fourier eigenfunctions
deps: ["def-schwartz-space-and-its-seminorms", "thm-fourier-transform-maps-schwartz-space-continuously-to-itself", "lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization", "cor-uniqueness-of-the-l-one-fourier-transform", "thm-dominated-convergence", "thm-plancherel", "lem-complex-lp-completeness-density-and-inner-product", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "def-complex-exponential", "def-countable-choice", "ex-gaussians-and-polynomials-times-gaussians-are-schwartz"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Daniel W. Stroock, Topics in Fourier Analysis (2024)
      url: https://ocw.mit.edu/courses/res-18-015-topics-in-fourier-analysis-spring-2024/mitres_18_015_s24_full_lec.pdf
      locator: Theorem 10.1 and proof, pp.22–23; §11 opening and Theorem 11.1, pp.23–24; rescaled/sign-converted
---

## Statement

Assume countable choice. On $\mathbb R$ set
$$h_0(x)=2^{1/4}e^{-\pi x^2},\qquad a^\dagger=\sqrt\pi x-\frac1{2\sqrt\pi}\frac d{dx},\qquad h_m=(m!)^{-1/2}(a^\dagger)^mh_0.$$
Then $(h_m)_{m\ge0}$ is an orthonormal basis of complex $L^2(\mathbb R)$, each $h_m$ is Schwartz, and $\widehat h_m=(-i)^mh_m$. Basis means every $f\in L^2$ has the norm-convergent expansion $f=\sum_{m\ge0}\langle f,h_m\rangle h_m$, with the pairing linear in its first variable.

## Facts & Assumptions

**Given:** [[def-countable-choice]], the Schwartz definition [[def-schwartz-space-and-its-seminorms]], and the everywhere-convergent exponential series [[def-complex-exponential]].

[F1] Polynomial Gaussians are Schwartz ([[ex-gaussians-and-polynomials-times-gaussians-are-schwartz]]).

[F2] The Gaussian transform and integral have the stated $2\pi$ normalization ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F3] Fourier interchanges differentiation and polynomial multiplication with their $2\pi$ factors ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

[F4] Complex integration by parts holds on decaying lines ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F5] Complex $L^2$ is complete, with Cauchy–Schwarz and the first-variable-linear pairing ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F6] An integrable function with zero transform vanishes a.e. ([[cor-uniqueness-of-the-l-one-fourier-transform]]).

[F7] Dominated convergence passes limits through integrals ([[thm-dominated-convergence]]).

[F8] Plancherel identifies the resulting eigenfunction identities also in $L^2$ ([[thm-plancherel]]).

## Verification

1.1 Put $a=\sqrt\pi x+(2\sqrt\pi)^{-1}d/dx$ and $u_m=(a^\dagger)^mh_0$. Differentiation gives $ah_0=0$ and $aa^\dagger-a^\dagger a=I$, since $(d/dx)(xf)-x f'=f$. Induction gives $a u_m=m u_{m-1}$ for $m\ge1$, and $a^\dagger a u_m=m u_m$ for $m\ge0$. If $u_m=Q_mh_0$, then $Q_{m+1}=2\sqrt\pi xQ_m-(2\sqrt\pi)^{-1}Q_m'$. Thus $Q_m$ is real of degree $m$ with leading coefficient $(2\sqrt\pi)^m$, and [F1] makes every $u_m$ Schwartz. [F1, given, algebra]

2.1 For polynomial Gaussians $v,w$, [F4] gives $\langle a^\dagger v,w\rangle=\langle v,aw\rangle$: derivative products are polynomial Gaussians and integrable, and their endpoint products vanish. Consequently $N=a^\dagger a$ is symmetric on these functions, since $\langle Nv,w\rangle=\langle av,aw\rangle=\langle v,Nw\rangle$. Step 1.1 implies $(m-l)\langle u_m,u_l\rangle=0$. Also $\|u_m\|_2^2=\langle a^\dagger u_{m-1},u_m\rangle=m\|u_{m-1}\|_2^2$. The base norm is $\|h_0\|_2^2=\sqrt2\int e^{-2\pi x^2}\,dx=1$ by [F2]. Hence $\|u_m\|_2^2=m!$ and the normalized functions are orthonormal, including $m=0$. [step 1.1, F2, F4, F5]

2.2 The derivative identities [F3] give $\mathcal F(a^\dagger v)=(i/(2\sqrt\pi))(\widehat v)' -i\sqrt\pi\xi\widehat v=-i a^\dagger\widehat v$. Since [F2] gives $\widehat h_0=h_0$, induction yields $\widehat u_m=(-i)^mu_m$ and the asserted normalized identity. All operations are on Schwartz functions, so this also holds for their Plancherel classes. [step 1.1, F2, F3, F8]

2.3 Suppose $f\in L^2$ is orthogonal to all $h_m$. By the nonzero real leading coefficients in step 1.1, triangular induction expresses each monomial $x^r$ as a real linear combination of $Q_0,\ldots,Q_r$. Therefore $\int f(x)h_0(x)x^r\,dx=0$ for every $r$; these integrals exist by [F5], since $x^rh_0\in L^2$. Put $v=fh_0\in L^1$ by [F5]. For fixed real $\xi$, the exponential Taylor partial sums are bounded by $e^{2\pi|\xi||x|}$. The majorant $|f|h_0e^{2\pi|\xi||x|}$ is integrable by [F5]: its second factor has finite square integral, because $-2\pi x^2+4\pi|\xi||x|\le-\pi x^2+4\pi\xi^2$. Thus [F7] integrates the exponential series termwise, all terms being the zero moments. It gives $\widehat v(\xi)=0$ for every $\xi$. By [F6], $v=0$ a.e.; positivity of $h_0$ gives $f=0$ a.e. [step 1.1, F5, F6, F7, given]

3.1 For arbitrary $f\in L^2$, put $s_N=\sum_{m=0}^N\langle f,h_m\rangle h_m$. Finite orthogonality in step 2.1 gives $\|f-s_N\|_2^2=\|f\|_2^2-\sum_{m=0}^N|\langle f,h_m\rangle|^2\ge0$. Hence the coefficient-square partial sums are bounded increasing and converge; their tails give $\|s_M-s_N\|_2^2\to0$. Completeness in [F5] supplies $s\in L^2$ with $s_N\to s$. Pairing continuity shows $\langle f-s,h_m\rangle=0$ for every $m$, so step 2.3 gives $f=s$. This proves the promised expansion, not merely orthogonality. All sequences are specified; countable choice is inherited from the complex integral and completeness interfaces. [step 2.1, step 2.3, F5] ∎
