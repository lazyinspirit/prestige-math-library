---
id: thm-hausdorff-young-for-periodic-fourier-coefficients
kind: theorem
title: Hausdorff–Young for periodic Fourier coefficients
status: published
origin: pipeline
deps:
  - def-fourier-coefficients-and-trigonometric-polynomials
  - thm-parseval-identity-for-fourier-series
  - cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime
  - cor-complex-interpolation-extensions-agree-on-intersections
  - thm-integral-triangle-inequality
  - thm-finite-measure-l-r-includes-into-l-p-for-p-less-r
  - thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
landmark: false
proof_strategy: interpolation between the absolute-coefficient and Parseval bounds
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: https://arxiv.org/pdf/0903.3845
      locator: "Chapter 13, the circle Hausdorff-Young theorem and its Riesz-Thorin proof, printed pp. 71-72"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§3.2, Exercise 3.2.2, printed p. 191; the endpoint argument is supplied locally from the published interpolation corollary"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Countable Choice and let $\mathbb T=\mathbb R/\mathbb Z$ carry its
normalized Haar measure $m_{\mathbb T}$, so that $m_{\mathbb T}(\mathbb T)=1$.
Let $1\le p\le2$ and let $p'$ be the conjugate exponent, $1/p+1/p'=1$. Every
complex class $f\in L^p(\mathbb T;\mathbb C)$ has a Fourier coefficient
sequence $(\widehat f(k))_{k\in\mathbb Z}$ in
$\ell^{p'}(\mathbb Z;\mathbb C)$ and
$$\Bigl(\sum_{k\in\mathbb Z}|\widehat f(k)|^{p'}\Bigr)^{1/p'} \le\|f\|_{L^p(\mathbb T)},\qquad 1\le p<2,$$
with the supremum reading at $p=1$,
$$\sup_{k\in\mathbb Z}|\widehat f(k)|\le\|f\|_{L^1(\mathbb T)},$$
and at $p=2$ the Parseval equality
$$\Bigl(\sum_{k\in\mathbb Z}|\widehat f(k)|^2\Bigr)^{1/2}=\|f\|_{L^2(\mathbb T)}.$$
The Fourier coefficients are those of
[[def-fourier-coefficients-and-trigonometric-polynomials]]. No reverse
inequality for $p>2$ and no endpoint statement beyond $p=1,2$ is claimed.

## Facts & Assumptions

**Given:** Countable Choice, the probability space $(\mathbb T,m_{\mathbb T})$, an exponent $1\le p\le2$, and $f\in L^p(\mathbb T;\mathbb C)$.

[A1] Countable Choice is the hypothesis carried by the Parseval and interpolation interfaces below ([[def-countable-choice]]).

[F1] The Fourier coefficient is $\widehat f(k)=\int_{\mathbb T}f\,e_{-k}\,dm_{\mathbb T}$ with $e_{-k}(x)=e^{-2\pi ikx}$; the characters satisfy $|e_k|=1$, each coefficient functional is complex-linear and depends only on the almost-everywhere class of $f$ ([[def-fourier-coefficients-and-trigonometric-polynomials]]).

[F2] For $f,g\in L^2(\mathbb T;\mathbb C)$ the Fourier coefficients satisfy the Parseval identities $\|f\|_2^2=\sum_k|\widehat f(k)|^2$ and $\langle f,g\rangle=\sum_k\widehat f(k)\overline{\widehat g(k)}$ ([[thm-parseval-identity-for-fourier-series]]).

[F3] On sigma-finite measure spaces a complex-linear finite-simple-core operator with $\|Tg\|_\infty\le A\|g\|_1$ and $\|Tg\|_2\le B\|g\|_2$ satisfies, for $1<p<2$, the interpolation bound $\|Tg\|_{p'}\le A^{2/p-1}B^{2-2/p}\|g\|_p$; at $p=1$ and $p=2$ the endpoint estimates are retained, and under countable choice the core operator has the unique compatible bounded extensions to the full $L^p$ spaces ([[cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime]]).

[F4] Under countable choice, every two extensions of the same finite-simple core operator agree as measurable almost-everywhere classes on the intersection of their domains ([[cor-complex-interpolation-extensions-agree-on-intersections]]).

[F5] $\bigl|\int g\,d\mu\bigr|\le\int|g|\,d\mu$ for integrable $g$ ([[thm-integral-triangle-inequality]]).

[F6] On a finite measure space, $L^r\subseteq L^p$ for $1\le p<r<\infty$ with $\|g\|_p\le\mu(X)^{1/p-1/r}\|g\|_r$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

[F7] On every measure space, complex finite simple functions with finite-measure nonzero sets are dense in $L^q(\mu;\mathbb C)$ for $1\le q<\infty$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F8] Complex $L^q$ of a measure space is the set quotient $\mathcal L^q/\!\sim$ of measurable classes of [[def-complex-lp-and-euclidean-test-function-conventions]]; the counting-measure space on $\mathbb Z$ is written $\ell^q(\mathbb Z;\mathbb C)$.

## Proof

**Proof technique:** prove the two endpoint bounds on the finite-simple core, interpolate, and identify the interpolated extension with the coefficient map.

1.1 Let $C$ assign to the almost-everywhere class of a complex finite simple function $s$ on $\mathbb T$ with finite-measure nonzero set its coefficient sequence $Cs=(\widehat s(k))_{k\in\mathbb Z}$. This is well defined on classes and complex-linear by [F1]; its target is a space of measurable classes on $\mathbb Z$ with counting measure, which is sigma-finite, and its source space is the probability space $\mathbb T$. [F1, F8, given]

2.1 For such a class $s$ and every $k$, $|\widehat s(k)|\le\int_{\mathbb T}|s|\,|e_{-k}|\,dm_{\mathbb T}=\|s\|_1$ by [F1] and [F5], so $\|Cs\|_\infty\le\|s\|_1$: the L^1-to-L-infinity endpoint bound holds with $A=1$. [F1, F5, step 1.1]

2.2 A finite simple function on a probability space is bounded, hence lies in $L^2(\mathbb T;\mathbb C)$, and [F2] gives $\|Cs\|_2=\|s\|_2$; the L^2-to-L^2 endpoint bound holds with $B=1$. [F2, step 1.1]

3.1 Applying [F3] to the core operator $C$ of step 1.1 with endpoints $(p_0,q_0)=(1,\infty)$, $A=1$ and $(p_1,q_1)=(2,2)$, $B=1$ yields, for every $1<p<2$, a unique compatible bounded extension $T_p:L^p(\mathbb T)\to\ell^{p'}(\mathbb Z)$ with $\|T_pf\|_{p'}\le\|f\|_p$, while at $p=1$ and $p=2$ the endpoint estimates of steps 2.1 and 2.2 hold; both measure spaces are sigma-finite. [F3, step 2.1, step 2.2]

3.2 The $L^1$-extension of $C$ is the coefficient map: the coefficient map is a bounded linear map $L^1(\mathbb T)\to\ell^\infty(\mathbb Z)$ agreeing with $C$ on the finite simple classes, which are dense in $L^1(\mathbb T)$ by [F7], and extensions from a dense core into a Banach space are unique; the same argument identifies the $L^2$-extension with the coefficient map on $L^2(\mathbb T)$. [F1, F2, F7, step 2.1]

4.1 Fix $1<p<2$. Since $m_{\mathbb T}(\mathbb T)=1$, [F6] gives $L^p(\mathbb T)\subseteq L^1(\mathbb T)$ with $\|f\|_1\le\|f\|_p$, so the domain intersection of the $L^p$-extension $T_p$ and the $L^1$-extension contains all of $L^p(\mathbb T)$; by [F4] the two extensions agree as measurable classes there. [F4, F6, step 3.1]

5.1 By steps 4.1 and 3.2, for $1<p<2$ the sequence $T_pf$ is the coefficient sequence $(\widehat f(k))$, and since $\ell^{p'}(\mathbb Z)\subseteq\ell^\infty(\mathbb Z)$ with $|\widehat f(k)|\le\|T_pf\|_{p'}$, step 3.1 gives $\|\widehat f\|_{p'}\le\|f\|_p$; the case $p=2$ is the Parseval equality of [F2]. [F2, step 3.1, step 4.1, step 3.2]

6.1 The case $p=1$ is the endpoint estimate of step 2.1 applied to $L^1$ classes, and Countable Choice is used only through the cited Parseval and interpolation interfaces [A1]; the finite-measure convention $m_{\mathbb T}(\mathbb T)=1$ enters only through [F6] and the probability-space identification of the core. [A1, F6, step 2.1] ∎
