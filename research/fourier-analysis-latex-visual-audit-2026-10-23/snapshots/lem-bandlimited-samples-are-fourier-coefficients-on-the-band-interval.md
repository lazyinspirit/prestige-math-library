---
id: lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval
kind: lemma
title: "Band-limited samples are the Fourier coefficients of the rescaled spectrum"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
design_row: FR-19
deps: [def-fourier-coefficients-and-trigonometric-polynomials, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-riesz-fischer-for-fourier-coefficients, thm-plancherel, thm-l-two-fourier-inversion, thm-l-one-l-two-agreement-of-fourier-transform, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, cor-c-one-change-of-variables-for-l-one-functions, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 22, proof of Theorem 22.3, (22.1)-(22.2): after rescaling $\\omega=\\pi$ the coefficients of $\\widehat f$ on the cube are the samples $f(-n)$, then reindexed to $f(n)$; the sampling map is the Fourier coefficient map of the band, printed pp. 131-133"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§2, Exercises 8-9 and §3, Exercise 13: the characters $e_k$, the isometric isomorphism $L^2(\\Lambda^*)\\to L^2(T)$ (Parseval) and the coefficient identity, PDF pp. 2-4"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $h>0$ and let
$f\in L^2(\mathbb R;\mathbb C)$ have Plancherel transform
$\widehat f:=\mathcal F_2f$ ([[thm-plancherel]]) vanishing almost everywhere off
the band $[-1/(2h),1/(2h)]$. Then $\widehat f\in L^1$, so $f$ has a continuous
representative, again written $f$, with
$$f(x)=\int_{\mathbb R}\widehat f(\xi)e^{2\pi ix\xi}\,d\xi$$
for every $x$. Choose a measurable representative of $\widehat f$, set
$G_h(\theta):=h^{-1/2}\widehat f(-\theta/h)$ on the half-open interval
$[-1/2,1/2)$, and extend $G_h$ one-periodically to $\mathbb R$. Its
almost-everywhere class is independent of the chosen representative and defines
a function class on the circle $\mathbb T=\mathbb R/\mathbb Z$
([[def-the-one-dimensional-torus-and-normalized-haar-integral]]). Then
$G_h\in L^2(\mathbb T;\mathbb C)$, and for every $k\in\mathbb Z$ its $k$-th
Fourier coefficient ([[def-fourier-coefficients-and-trigonometric-polynomials]])
is
$$\widehat{G_h}(k)=h^{1/2}f(hk).$$
Consequently $\bigl(h^{1/2}f(hk)\bigr)_{k\in\mathbb Z}\in\ell^2(\mathbb Z)$ and
$$\sum_{k\in\mathbb Z}|f(hk)|^2=h^{-1}\|f\|_{L^2(\mathbb R)}^2 .$$
The reflection $\theta\mapsto-\theta$ in the definition of $G_h$ is inserted
only so that the library's negative-sign coefficient convention matches the
samples $f(hk)$ rather than $f(-hk)$.

## Facts & Assumptions

[F1] Plancherel: Fourier transformation on Schwartz space extends uniquely to a surjective complex-linear isometry $\mathcal F_2:L^2(\mathbb R;\mathbb C)\to L^2(\mathbb R;\mathbb C)$ preserving inner products ([[thm-plancherel]]).

[F2] Inversion: $\mathcal F_2^2f=Rf$ with $Rf(x)=f(-x)$, and $\mathcal F_2^{-1}=R\mathcal F_2$ ([[thm-l-two-fourier-inversion]]).

[F3] Agreement: if $g\in L^1\cap L^2$, its bounded continuous integral transform $\widehat g(\xi)=\int g(x)e^{-2\pi ix\xi}\,dx$ represents $\mathcal F_2g$ almost everywhere ([[thm-l-one-l-two-agreement-of-fourier-transform]]).

[F4] The integral transform maps $L^1(\mathbb R;\mathbb C)$ complex-linearly into the bounded uniformly continuous functions, with $\sup_\xi|\widehat g(\xi)|\le\|g\|_1$ ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F5] Finite-measure inclusion: on a measure space of finite measure, $L^r\subseteq L^p$ for $1\le p<r<\infty$ with $\|g\|_p\le\mu(X)^{1/p-1/r}\|g\|_r$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

[F6] $C^1$ change of variables for $L^1$ functions on open subsets of $\mathbb R$ ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F7] Riesz–Fischer: the Fourier coefficient map $\Phi:L^2(\mathbb T;\mathbb C)\to\ell^2(\mathbb Z;\mathbb C)$ is a surjective linear isometry, so $\sum_k|\widehat G(k)|^2=\|G\|_{L^2(\mathbb T)}^2$ ([[thm-riesz-fischer-for-fourier-coefficients]]).

[F8] The torus integral is integration of the representative on $[0,1)$ against $\lambda_1$, and $\widehat G(k)=\int_{\mathbb T}G\,e_{-k}\,dm_{\mathbb T}$ with $e_{-k}(\theta)=e^{-2\pi ik\theta}$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-fourier-coefficients-and-trigonometric-polynomials]]).

[F9] The band $B=[-1/(2h),1/(2h)]$ has measure $1/h$, and its endpoints are null ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

**Given:** Countable Choice, $h>0$, a class $f\in L^2(\mathbb R;\mathbb C)$ with $\widehat f=\mathcal F_2f$ vanishing almost everywhere off $B:=[-1/(2h),1/(2h)]$, and the $L^2$ classes of [[def-l-p-space-as-a-quotient-by-null-functions]].

## Proof

1.1 The class $\widehat f$ is represented by $\widehat f\mathbf 1_B$, which lies in $L^2(B)$ with the same norm, and $B$ has finite Lebesgue measure $1/h$ by [F9]. Applying [F5] on $B$ with $p=1$, $r=2$ gives $\widehat f\in L^1(\mathbb R;\mathbb C)$ with $\|\widehat f\|_1\le(1/h)^{1/2}\|\widehat f\|_2$. [F5, F9, given, algebra]

2.1 Define $H(x):=\int_{\mathbb R}\widehat f(\xi)e^{2\pi ix\xi}\,d\xi$ for $x\in\mathbb R$. Since $\xi\mapsto\widehat f(\xi)e^{2\pi ix\xi}$ has modulus $|\widehat f|\in L^1$ by step 1.1, the integral converges absolutely, and $x\mapsto H(x)=\widehat g(-x)$ with $g:=\widehat f\in L^1\cap L^2$; hence $H$ is bounded and continuous by [F4] and reflection. By [F3], $g$'s integral transform represents $\mathcal F_2g=\mathcal F_2\widehat f=Rf$ almost everywhere by [F2], so $H$ represents $R(Rf)=f$ almost everywhere. Replacing the class $f$ by its continuous representative $H$ gives $f(x)=\int_{\mathbb R}\widehat f(\xi)e^{2\pi ix\xi}\,d\xi$ for every $x$, and this replacement changes no $L^2$ class. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Represent $G_h$ on the fundamental interval $[0,1)$ by $G_h(\theta)=h^{-1/2}\widehat f(-\widetilde\theta/h)$, where $\widetilde\theta$ is the unique representative of $\theta+\mathbb Z$ in $[-1/2,1/2)$. Substituting $\xi=-\theta/h$ on $(0,1/2)$ and $\xi=(1-\theta)/h$ on $(1/2,1)$, and integrating $|G_h|^2$ with [F6], the factor $h^{-1}$ from $|G_h|^2$ cancels the Jacobian $h$, giving $\int_{\mathbb T}|G_h|^2\,dm_{\mathbb T}=\int_{-1/(2h)}^{1/(2h)}|\widehat f(\xi)|^2\,d\xi=\|\widehat f\|_2^2=\|f\|_2^2$, so $G_h\in L^2(\mathbb T;\mathbb C)$. The endpoints are null, and the same substitutions show that changing the spectrum on a null set changes $G_h$ only on a null set. The same two substitutions applied to $G_he_{-k}$, using $e^{-2\pi ik(1-h\xi)}=e^{2\pi ikh\xi}$ on the right piece, supply the Jacobian $h$ to the prefactor $h^{-1/2}$ and give $\widehat{G_h}(k)=h^{1/2}\int_{-1/(2h)}^{1/(2h)}\widehat f(\xi)e^{2\pi ikh\xi}\,d\xi=h^{1/2}f(hk)$, the last equality being step 2.1 evaluated at $x=hk$. [F1, F6, F8, F9, step 2.1, algebra]

4.1 By step 3.1 and [F7], $\sum_{k\in\mathbb Z}|h^{1/2}f(hk)|^2=\|\Phi(G_h)\|^2=\|G_h\|^2=\|f\|_2^2$. Since the left side is $h\sum_k|f(hk)|^2$, dividing by $h$ gives $\sum_k|f(hk)|^2=h^{-1}\|f\|^2_{L^2(\mathbb R)}$, and in particular $(h^{1/2}f(hk))_{k\in\mathbb Z}\in\ell^2(\mathbb Z)$. [F7, step 3.1, algebra] ∎ 
