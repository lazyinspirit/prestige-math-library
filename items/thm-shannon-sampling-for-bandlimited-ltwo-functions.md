---
id: thm-shannon-sampling-for-bandlimited-ltwo-functions
kind: theorem
title: "Shannon sampling for band-limited $L^2$ functions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
design_row: FR-19
deps: [def-normalized-sinc-function, lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval, thm-riesz-fischer-for-fourier-coefficients, thm-plancherel, thm-l-two-fourier-inversion, thm-l-one-l-two-agreement-of-fourier-transform, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, cor-trigonometric-parity-and-pythagorean-identity, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, def-fourier-coefficients-and-trigonometric-polynomials, def-countable-choice, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, lem-a-uniformly-approximable-real-valued-map-is-continuous, thm-componentwise-limits-and-continuity, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, thm-lebesgue-measure-of-a-box-of-every-kind, thm-algebra-of-continuous-functions]
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
      locator: "ch. 22, Theorem 22.3 and its proof, printed pp. 130-133: expansion of the band-limited spectrum in the coefficients $f((\\pi/\\omega)n)$, inverse transform of the modulated indicator, and the sinc series; Remark 22.4(2) records that the kernel vanishes at the other samples"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§2-§3, Exercises 9-10 and 13: the $L^2$ Fourier series expansion on $T$ is an isometric isomorphism and the coefficients are the band samples, PDF pp. 3-4"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $h>0$ and let
$f\in L^2(\mathbb R;\mathbb C)$ have $L^2$ Fourier transform vanishing almost
everywhere off the band $[-1/(2h),1/(2h)]$; write $f$ also for its continuous
representative. Then
$$f(x)=\sum_{k\in\mathbb Z}f(hk)\operatorname{sinc}(x/h-k)\qquad\text{with convergence in }L^2(\mathbb R).$$
If in addition $\sum_{k\in\mathbb Z}|f(hk)|<\infty$, then the series converges
absolutely and uniformly on every compact subset of $\mathbb R$, its sum is
continuous, and the identity holds for every $x\in\mathbb R$. In the
$L^2$-only case no pointwise convergence and no evaluation at a non-Lebesgue
representative value is claimed.

## Facts & Assumptions

**Given:** Countable Choice, $h>0$, a band-limited class $f\in L^2(\mathbb R;\mathbb C)$ with continuous representative $f$ and $L^2$ transform $\widehat f=\mathcal F_2f$ vanishing almost everywhere off $B=[-1/(2h),1/(2h)]$, the rescaled circular function $G_h\in L^2(\mathbb T)$ of [[lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval]], and the normalised sinc of [[def-normalized-sinc-function]].

[F1] Band-limited samples lemma: $\widehat{G_h}(k)=h^{1/2}f(hk)$, $G_h\in L^2(\mathbb T;\mathbb C)$ and $\sum_k|f(hk)|^2=h^{-1}\|f\|_{L^2}^2$ ([[lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval]]); the characters $e_k$ and coefficients on $\mathbb T$ are those of [[def-fourier-coefficients-and-trigonometric-polynomials]].

[F2] Riesz–Fischer: every square-summable family is the Fourier coefficient family of a unique $L^2(\mathbb T)$ class, namely the $L^2$ limit of the partial sums $\sum_{|k|\le N}a_ke_k$ ([[thm-riesz-fischer-for-fourier-coefficients]]).

[F3] Plancherel: $\mathcal F_2$ is a surjective complex-linear isometry of $L^2(\mathbb R;\mathbb C)$ ([[thm-plancherel]]); $\mathcal F_2^2=R$ and $\mathcal F_2^{-1}=R\mathcal F_2$ ([[thm-l-two-fourier-inversion]]); on $L^1\cap L^2$ the bounded continuous integral transform represents the $L^2$ transform almost everywhere ([[thm-l-one-l-two-agreement-of-fourier-transform]]).

[F4] Change of variables: a $C^1$ diffeomorphism $T:U\to V$ of open subsets of $\mathbb R$ satisfies $\int_VF\,d\lambda_1=\int_UF\circ T\,|T'|\,d\lambda_1$ for nonnegative Lebesgue measurable $F$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F5] The complex exponential is entire with derivative itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]), and the chain rule for complex derivatives gives $\frac{d}{d\xi}e^{c\xi}=ce^{c\xi}$ for complex $c$ ([[thm-chain-rule-for-complex-derivatives]]); consequently the complex FTC gives the exponential primitive $\int_a^be^{c\xi}d\xi=(e^{cb}-e^{ca})/c$ for $c\ne0$ and $a<b$ ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]). The normalised sinc is even, satisfies $|\operatorname{sinc}|\le1$, $\operatorname{sinc}(t)=\sin(\pi t)/(\pi t)$ for $t\ne0$, and $\operatorname{sinc}(\cdot/h-k)$ is continuous ([[def-normalized-sinc-function]], with [[cor-trigonometric-parity-and-pythagorean-identity]] for the oddness of sine).

[F6] Uniform limits: if for every $\varepsilon>0$ a real-valued function differs from a continuous function by less than $\varepsilon$ uniformly, it is continuous ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]]); a complex-valued map is continuous exactly when its real and imaginary parts are ([[thm-componentwise-limits-and-continuity]]); sums of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]]).

[F7] $L^p$-convergent sequences have almost everywhere convergent subsequences ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]); every box with $a_i<b_i$ in all coordinates has positive Lebesgue measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $G_h(\theta)=h^{-1/2}\widehat f(-\theta/h)$ on the fundamental interval and $\widehat{G_h}(k)=h^{1/2}f(hk)$; the expansion clause of [F2] gives $G_h=\sum_k\widehat{G_h}(k)e_k$ as the $L^2(\mathbb T)$ limit of the partial sums $\sum_{|k|\le N}h^{1/2}f(hk)e_k$. Substituting $\theta=-h\xi$, which maps $[-1/2,1/2]$ diffeomorphically onto $B$ with $|d\theta/d\xi|=h$ and converts the torus integral into $h\int_B$ by [F4], turns this into convergence in $L^2(B)$ of $\sum_{|k|\le N}h\,f(hk)e^{-2\pi ihk\xi}$ to $\widehat f(\xi)$; since $\widehat f$ vanishes off $B$, this is an identity $\widehat f=\sum_kc_k\varphi_k$ in $L^2(\mathbb R)$ with $c_k:=hf(hk)$ and $\varphi_k(\xi):=e^{-2\pi ihk\xi}\mathbf 1_B(\xi)$. [F1, F2, F4, given, algebra]

2.1 Each $\varphi_k$ lies in $L^1\cap L^2$ and its integral transform is computed from the primitive [F5]: with $u:=x+hk$, $\int_Be^{-2\pi iu\xi}\,d\xi=(e^{-\pi iu/h}-e^{\pi iu/h})/(-2\pi iu)=\sin(\pi u/h)/(\pi u)=h^{-1}\operatorname{sinc}(u/h)$ for $u\ne0$ (using oddness of sine from [F5]), while for $u=0$ the integral is $h^{-1}=h^{-1}\operatorname{sinc}(0)$. Hence $\mathcal F\varphi_k(x)=h^{-1}\operatorname{sinc}((x+hk)/h)$; by the agreement clause of [F3] this bounded continuous function represents $\mathcal F_2\varphi_k$, so the inverse transform $\mathcal F_2^{-1}\varphi_k=R\mathcal F_2\varphi_k$ is represented by $x\mapsto h^{-1}\operatorname{sinc}(-x/h+k)=h^{-1}\operatorname{sinc}(x/h-k)$, where evenness of $\operatorname{sinc}$ was used [F3, F5]. [step 1.1, F3, F4, F5, algebra]

3.1 Since $\mathcal F_2^{-1}$ is continuous complex-linear [F3], it may be applied termwise to the $L^2$-convergent series of step 1.1: $f=\mathcal F_2^{-1}\widehat f=\sum_kc_k\mathcal F_2^{-1}\varphi_k=\sum_kf(hk)\operatorname{sinc}(\cdot/h-k)$ in $L^2(\mathbb R)$, which is the asserted $L^2$ identity. [step 1.1, step 2.1, F3, algebra]

4.1 Assume now $\sum_k|f(hk)|<\infty$, and consider the series of step 3.1. For every $x$, $|f(hk)\operatorname{sinc}(x/h-k)|\le|f(hk)|$ by $|\operatorname{sinc}|\le1$ [F5], so the series $S(x):=\sum_kf(hk)\operatorname{sinc}(x/h-k)$ converges absolutely and uniformly on all of $\mathbb R$ by the Weierstrass majorant $\sum_k|f(hk)|$; each term is continuous [F5], so the real and imaginary parts of $S$ are continuous by [F6], and $S$ is continuous. [step 3.1, F5, F6, given, algebra]

5.1 The partial sums converge pointwise everywhere to $S$ by step 4.1 and in $L^2(\mathbb R)$ to the class $f$ by step 3.1; by [F7] a subsequence converges to $f$ almost everywhere, so $S=f$ almost everywhere. Both $S$ and the continuous representative $f$ are continuous [F6], and a continuous function vanishing almost everywhere vanishes identically: if $(S-f)(x_0)\ne0$, continuity would make $S-f$ nonzero on a ball about $x_0$, which contains a nondegenerate box of positive measure [F7] on which $S-f$ is nonzero, contradicting almost-everywhere equality. Hence $f(x)=S(x)$ for every $x$, which is the pointwise identity under the extra hypothesis. Without that hypothesis only step 3.1, an $L^2$ statement, is asserted. Countable Choice enters only through the integration, Fourier and Riesz–Fischer suppliers quoted above. [step 3.1, step 4.1, F6, F7, given] ∎ 