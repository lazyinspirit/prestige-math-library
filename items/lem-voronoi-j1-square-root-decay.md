---
id: lem-voronoi-j1-square-root-decay
kind: lemma
title: "The first Bessel function has square-root decay on the positive ray"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-complex-exponential, def-integer-order-bessel-series, lem-integer-order-bessel-series-tail, lem-bessel-integral-representations-and-scaled-range, lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase, thm-integration-by-parts-with-interior-derivatives, lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-complex-exponential-is-entire-with-derivative-itself, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-termwise-differentiation-of-complex-power-series]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Summation Formulas, from Poisson and Voronoi to the Present"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§6, the stationary-phase estimate (6.11)"
    - title: "NIST Digital Library of Mathematical Functions"
      url: "https://dlmf.nist.gov/10.17"
      locator: "§10.17(i), large-argument asymptotics of integer-order Bessel functions"
verification:
  precheck: pending
---

## Statement

For every $t>0$,
$$\frac{d}{dt}\bigl(tJ_1(t)\bigr)=tJ_0(t).$$
There is also a constant $C>0$ such that for every real $t\ge1$,
$$|J_1(t)|\le C t^{-1/2}.$$

## Statement references

[Miller and Schmid, §6, estimate (6.11)](https://arxiv.org/pdf/math/0304187v1)

[NIST Digital Library of Mathematical Functions, §10.17(i)](https://dlmf.nist.gov/10.17)

## Facts & Assumptions

**Given:** A real parameter $t\ge1$ and the defining Bessel series.

[F1] [[def-integer-order-bessel-series]]: $J_0(t)=\sum_{k\ge0}(-1)^k(t/2)^{2k}/(k!)^2$ and $J_1(t)=\sum_{k\ge0}(-1)^k(t/2)^{2k+1}/(k!(k+1)!)$.

[F2] [[lem-integer-order-bessel-series-tail]] and [[thm-termwise-differentiation-of-complex-power-series]]: these power series and their derivative series converge locally uniformly and may be differentiated term by term.

[F3] [[lem-bessel-integral-representations-and-scaled-range]]: $J_1(t)=\pi^{-1}\int_0^\pi\cos(\theta-t\sin\theta)\,d\theta$.

[F4] [[lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase]]: for a smooth compactly supported amplitude and a smooth real phase with one nondegenerate stationary point in the amplitude support, the oscillatory integral is $O(\lambda^{-1/2})$ for parameter $\lambda\ge1$.

[F5] [[thm-integration-by-parts-with-interior-derivatives]]: the real integration-by-parts formula applies to the real and imaginary parts of the smooth compact-interval factors, giving the endpoint and derivative terms.

[F6] [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]: smooth cutoffs can be chosen to equal $1$ on a prescribed compact subinterval and vanish outside a slightly larger open interval.

[F7] [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-sine-and-cosine-derivatives]], and [[thm-chain-rule]]: the complex exponential and trigonometric functions have their standard derivatives and the chain rule applies to their compositions.

## Proof

1.1 Termwise differentiation from [F2] gives
$$\frac{d}{dt}\bigl(tJ_1(t)\bigr)=\sum_{k\ge0}\frac{(2k+2)(-1)^kt^{2k+1}}{2^{2k+1}k!(k+1)!}=\sum_{k\ge0}\frac{(-1)^kt^{2k+1}}{2^{2k}(k!)^2}=tJ_0(t),$$
which proves the derivative identity. [F1, F2, given, algebra]

1.2 In [F3], write the cosine integral as the real part of $\pi^{-1}\int_0^\pi e^{i\theta}e^{it\phi_0(\theta)}d\theta$, where $\phi_0(\theta)=-\sin\theta$. Its derivative is $-\cos\theta$, which vanishes at $\pi/2$ and has derivative $1$ there. Choose by [F6] a smooth cutoff $\chi$ supported in $(\pi/4,3\pi/4)$ and equal to $1$ near $\pi/2$. To meet the global phase hypothesis in [F4], choose smooth cutoffs $\rho_L,\rho_R$ with $\rho_L=0$ on $(-\infty,\pi/8]$, $\rho_L=1$ on $[\pi/4,\infty)$, $\rho_R=1$ on $(-\infty,3\pi/4]$, and $\rho_R=0$ on $[7\pi/8,\infty)$. Define $g(\theta)=(1-\rho_L)(-1)+\rho_L(-\cos\theta)$ to the left of $\pi/4$, $g(\theta)=-\cos\theta$ on $[\pi/4,3\pi/4]$, and $g(\theta)=\rho_R(-\cos\theta)+(1-\rho_R)$ to the right of $3\pi/4$. The transition intervals lie where $-\cos\theta$ has the same sign as the constants, so $g$ is smooth and has exactly one zero, at $\pi/2$. Put $\widetilde\phi(\theta):=-1+\int_{\pi/2}^{\theta}g(s)\,ds$. It equals $-\sin\theta$ on $[\pi/4,3\pi/4]$, has a unique nondegenerate stationary point at $\pi/2$, and therefore agrees with $\phi_0$ on the support of $\chi$. For $t\ge2\pi$, apply [F4] to amplitude $e^{i\theta}\chi(\theta)$ and phase $\widetilde\phi$ with parameter $\lambda=t/(2\pi)$; this part is bounded by $C_1t^{-1/2}$. [F3, F4, F6, given, choose]

2.1 On the support of $1-\chi$, $|\phi_0'(\theta)|$ has a positive lower bound; on the neighborhood where $\phi_0'=0$, $1-\chi$ vanishes identically. Thus $a(\theta):=e^{i\theta}(1-\chi(\theta))$ divided by $\phi_0'(\theta)$ extends smoothly by zero near $\pi/2$, and $(a/\phi_0')'$ is bounded on $[0,\pi]$. By [F7], $(e^{it\phi_0})'=it\phi_0'e^{it\phi_0}$. Integration by parts [F5] writes the remaining integral as endpoint terms $[e^{it\phi_0}a/(it\phi_0')]_0^\pi$ and an integral bounded by $t^{-1}\int_0^\pi|(a/\phi_0')'|d\theta$. The endpoint values and this derivative are bounded independently of $t$, so this part is $O(t^{-1})$. [F5, F6, F7, step 1.2, algebra]

3.1 Combining steps 1.2 and 2.1 gives $|J_1(t)|\le C_2t^{-1/2}$ for $t\ge2\pi$. For $1\le t\le2\pi$, [F3] gives $|J_1(t)|\le1\le\sqrt{2\pi}\,t^{-1/2}$. Increasing the constant proves the bound for every $t\ge1$. [F3, step 1.2, step 2.1, algebra] ∎
