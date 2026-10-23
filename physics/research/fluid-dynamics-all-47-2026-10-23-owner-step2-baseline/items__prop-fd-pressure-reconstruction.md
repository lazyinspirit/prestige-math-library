---
id: prop-fd-pressure-reconstruction
kind: proposition
title: Mean-zero pressure as a distribution
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [thm-fd-periodic-global-weak-existence, def-fd-periodic-solenoidal-spaces, def-distribution, def-distributional-derivative, def-regular-distribution-from-a-locally-integrable-function]
dependency_roles:
  thm-fd-periodic-global-weak-existence: mathematical-premise
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.1, printed pp. 37–39; the local proof constructs pressure by Fourier coefficients."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Lemma 2, §3, printed pp. 6–7, periodic case."
---

## Statement

Let $u$ be a solution supplied by
Global periodic weak viscous existence on $\mathbb T_L^d$, with $d\ge2$,
$L>0$, and viscosity $\nu>0$. Then there is a unique mean-zero-in-space
distribution $\pi$ on $(0,\infty)\times\mathbb T_L^d$ such that
$\partial_tu+\operatorname{div}(u\otimes u)+\nabla\pi=\nu\Delta u$
as a spacetime distribution, normalized by requiring its zero spatial Fourier
coefficient to vanish. No function-space or pointwise regularity for $\pi$ is
asserted.

## Statement references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.1, pp. 37–39](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, Lemma 2, §3, pp. 6–7](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** The global weak velocity from the Statement, the Fourier convention of [[def-fd-periodic-solenoidal-spaces]], and the distribution and derivative conventions stated by [[def-distribution]] and [[def-distributional-derivative]].

[F1] [[thm-fd-periodic-global-weak-existence]]: $u\in L^\infty_{\rm loc}H\cap L^2_{\rm loc}V$ and satisfies the unforced periodic solenoidal weak identity.

[F2] [[def-fd-periodic-solenoidal-spaces]]: $P_k=I-\kappa_k\kappa_k^{\mathsf T}/|\kappa_k|^2$ for $k\ne0$, and $P_0=I$.

[F3] [[def-distribution]] and [[def-distributional-derivative]]: a distribution is a continuous linear functional on smooth compactly supported tests; derivatives transfer to tests with a minus sign.

[F4] [[def-regular-distribution-from-a-locally-integrable-function]]: a locally integrable field defines a distribution by integration against tests.

## Proof

1.1 Write $T=u\otimes u$. Since $u\in L^\infty_tL^2_x$, $T\in L^\infty_{\rm loc}(0,\infty;L^1_x)$, and each Fourier coefficient $\widehat T(k,t)$ is measurable and bounded on finite time intervals. For $k\ne0$ set
$$\widehat\pi(k,t)=-\sum_{a,b=1}^d\frac{\kappa_{k,a}\kappa_{k,b}}{|\kappa_k|^2}\widehat T_{ab}(k,t),\qquad \widehat\pi(0,t)=0.$$
The coefficients are bounded in $k$ by $C_d\|u(t)\|_2^2$. For a smooth spacetime test $\phi$, repeated spatial integration by parts makes $\widehat\phi(k,t)$ decay faster than any power of $|k|$, uniformly with each time derivative on its compact support. Therefore $\langle\pi,\phi\rangle=\int\sum_k\widehat\pi(k,t)\widehat\phi(-k,t)dt$ converges absolutely and is bounded by a finite test seminorm; it defines a spacetime distribution with zero spatial mean. [given, F1, F3, F4]

2.1 At each nonzero frequency, the Fourier multiplier identity gives $i\kappa_k\widehat\pi(k)=- (I-P_k)\,i\sum_b\kappa_{k,b}\widehat T_{\cdot b}(k)$; the zero-frequency identity is also valid because both sides vanish. The weak identity in [F1] is exactly $\partial_tu+P\operatorname{div}T-\nu\Delta u=0$ after testing against solenoidal fields. Adding the displayed gradient identity yields $\partial_tu+\operatorname{div}T+\nabla\pi-\nu\Delta u=0$ for every smooth periodic vector test, which is the claimed equation. [given, F1, F2, F3, step 1.1]

3.1 If $\pi_1,\pi_2$ are two such mean-zero distributions, the difference has zero spatial gradient. Its $k$th Fourier coefficient therefore vanishes for every $k\ne0$, since $i\kappa_k\ne0$; its zero coefficient vanishes by the mean-zero normalization. All Fourier coefficients of the difference are zero, so Fourier completeness implies $\pi_1=\pi_2$. [given, F2, step 2.1] ∎

