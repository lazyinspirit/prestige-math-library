---
id: thm-power-series-expansion-in-several-complex-variables
kind: theorem
title: "A continuous separately holomorphic function is the sum of an absolutely convergent power series with Cauchy-integral coefficients on every smaller polydisc"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-integral-formula-on-a-polydisc, lem-multivariable-geometric-series-on-a-distinguished-boundary, def-multivariable-power-series, thm-uniform-limit-interchanges-complex-line-integrals, cor-ml-estimate-for-complex-line-integrals, prop-linearity-of-complex-line-integrals, thm-absolute-convergence-of-complex-series, thm-weierstrass-m-test-for-complex-function-series, thm-nonnegative-series-bounded-partial-sums, thm-geometric-series, thm-induction-principle, def-complex-integer-powers, def-balls-and-polydiscs-in-complex-euclidean-space, def-separately-holomorphic-function, thm-circle-circumference-diameter-ratio-is-pi, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, lem-complex-conjugation-and-modulus-laws, lem-finite-sum-laws, rem-complex-euclidean-space-dictionary, thm-existence-of-complex-line-integrals-on-rectifiable-paths]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.1"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Statement

Fix $m\ge1$, $a\in\mathbb C^m$ and a polyradius $\rho$, let
$f:\Delta_\rho(a)\to\mathbb C$ be continuous and separately holomorphic, let $r$
be a polyradius with $r_k<\rho_k$ for every $k<m$, and let
$C_k(t)=a_k+r_k\exp(it)$ on $[0,2\pi]$. For each multi-index $\alpha$ set

$$c_\alpha:=\frac1{(2\pi i)^m}\int_{C_0}\!\cdots\!\int_{C_{m-1}} f(\zeta)\prod_{k<m}(\zeta_k-a_k)^{-\alpha_k-1}\,d\zeta_{m-1}\cdots d\zeta_0 ,$$

an iterated integral as in the polydisc Cauchy formula. Then, with
$M=\sup_{\Gamma_r(a)}|f|$,

$$|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k},$$

and for every real $\theta$ with $0<\theta<1$ the series
$\sum_\alpha c_\alpha(z-a)^\alpha$ converges absolutely and uniformly on
$\overline\Delta_{\theta r}(a)$ with

$$f(z)=\sum_\alpha c_\alpha(z-a)^\alpha\qquad(z\in\overline\Delta_{\theta r}(a)).$$

Since every $z\in\Delta_r(a)$ lies in $\overline\Delta_{\theta r}(a)$ for some
$\theta<1$, the expansion holds throughout $\Delta_r(a)$.

**The coefficients are asserted here only as those iterated integrals.** That
$c_\alpha$ equals $\partial^\alpha f(a)/\alpha!$ needs termwise differentiation
and is not claimed by this statement.

## Facts & Assumptions

**Given:** The data above, with $\mathbb C^m$ read through [[rem-complex-euclidean-space-dictionary]] and $f$ continuous and separately holomorphic on $\Delta_\rho(a)$ ([[def-separately-holomorphic-function]]).

[L1] Under these hypotheses, $f(z)=(2\pi i)^{-m}\int_{C_0}\cdots\int_{C_{m-1}}f(\zeta)\prod_{k<m}(\zeta_k-z_k)^{-1}\,d\zeta_{m-1}\cdots d\zeta_0$ for every $z\in\Delta_r(a)$, as an iterated integral each of whose integrands is continuous on its circle ([[thm-cauchy-integral-formula-on-a-polydisc]]).

[L2] For $\zeta\in\Gamma_r(a)$ and $z\in\overline\Delta_{\theta r}(a)$ with $0\le\theta<1$, $\prod_{k<m}(\zeta_k-z_k)^{-1}=\sum_\alpha(z-a)^\alpha\prod_{k<m}(\zeta_k-a_k)^{-\alpha_k-1}$, with each term dominated by $\prod_{k<m}\theta^{\alpha_k}/r_k$ and the convergence absolute and uniform in the pair ([[lem-multivariable-geometric-series-on-a-distinguished-boundary]]).

[L3] A multi-indexed series converges absolutely at $z$ when the series along one, equivalently every, enumeration of $\mathbb N^m$ converges absolutely; its sum is independent of the enumeration; and its box partial sums over $B_N=\{\alpha:\alpha_k\le N\}$ converge to that sum ([[def-multivariable-power-series]]).

[L4] If continuous functions on the trace of a fixed rectifiable contour converge uniformly to a continuous function, their integrals converge to its integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L5] If $|g|\le K$ on the trace of a rectifiable contour $\gamma$, with $K\ge0$, then $|\int_\gamma g\,dz|\le K\,L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]); complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]) and exist for continuous integrands ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L6] An absolutely convergent complex series converges and every rearrangement has the same sum ([[thm-absolute-convergence-of-complex-series]]); a dominated series with summable bounds converges absolutely and uniformly ([[thm-weierstrass-m-test-for-complex-function-series]]); a nonnegative series converges exactly when its partial sums are bounded ([[thm-nonnegative-series-bounded-partial-sums]]); for $|r'|<1$, $\sum_kr'^k=1/(1-r')$ ([[thm-geometric-series]]).

[L7] If a property holds at $0$ and passes from $q$ to $q+1$, it holds for every natural number ([[thm-induction-principle]]).

[L8] Negative integer powers are defined exactly for nonzero complex bases ([[def-complex-integer-powers]]).

[L9] $\Delta_r(a)$, $\overline\Delta_r(a)$ and $\Gamma_r(a)$ are defined coordinatewise by $|z_k-a_k|<r_k$, $\le r_k$ and $=r_k$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[L10] The once-traversed circle of radius $r'>0$ has length $2\pi r'$ ([[thm-circle-circumference-diameter-ratio-is-pi]]).

[L11] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]); the continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); a compact subset is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L12] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); finite sums are additive, scale and are monotone in their terms ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 $\Gamma_r(a)$ is closed and bounded in $\mathbb C^m$, hence compact by [L11] and [L9], and it lies in $\Delta_\rho(a)$ because $r_k<\rho_k$; so $f$ is continuous on it and $M=\sup_{\Gamma_r(a)}|f|$ is a real number by [L11]. [given, L9, L11]

1.2 An induction on the number of remaining integrations ([L7]) using [L5] and [L10] gives the iterated bound: if $|h|\le K$ at every point of $\Gamma_r(a)$, then the modulus of the iterated integral $\int_{C_0}\cdots\int_{C_{m-1}}h\,d\zeta_{m-1}\cdots d\zeta_0$ is at most $K\prod_{k<m}(2\pi r_k)$, each step contributing one factor $L(C_k)=2\pi r_k$. [given, L5, L7, L10]

2.1 Applying step 1.2 to the integrand of $c_\alpha$, whose modulus on $\Gamma_r(a)$ is at most $M\prod_{k<m}r_k^{-\alpha_k-1}$ by [L9] and [L12], gives $|c_\alpha|\le(2\pi)^{-m}M\prod_{k<m}r_k^{-\alpha_k-1}\prod_{k<m}(2\pi r_k)=M\prod_{k<m}r_k^{-\alpha_k}$. [step 1.1, step 1.2, L8, L9, L12]

2.2 Write $S_N(\zeta,z)$ for the box partial sum of the expansion in [L2]. It is a finite sum, so multiplying by $f(\zeta)$ and integrating iteratedly, [L5] and [L12] give $(2\pi i)^{-m}\int_{C_0}\cdots\int_{C_{m-1}}f(\zeta)S_N(\zeta,z)\,d\zeta_{m-1}\cdots d\zeta_0=\sum_{\alpha\in B_N}c_\alpha(z-a)^\alpha$. [step 1.1, L2, L5, L12]

3.1 Fix $\theta$ with $0<\theta<1$ and $z\in\overline\Delta_{\theta r}(a)$. By step 2.1 and [L9], $|c_\alpha(z-a)^\alpha|\le M\prod_{k<m}\theta^{\alpha_k}$, and the box sums of the right-hand side are $M\prod_{k<m}\sum_{j\le N}\theta^j\le M\prod_{k<m}(1-\theta)^{-1}$ by [L12] and [L6]; every finite subset of $\mathbb N^m$ lies in a box, so [L6] makes $\sum_\alpha M\prod_k\theta^{\alpha_k}$ convergent and the M-test gives absolute and uniform convergence of $\sum_\alpha c_\alpha(z-a)^\alpha$ on $\overline\Delta_{\theta r}(a)$. [step 2.1, L6, L9, L12]

3.2 By [L2] the difference $S_N(\zeta,z)-\prod_{k<m}(\zeta_k-z_k)^{-1}$ tends to $0$ uniformly for $\zeta\in\Gamma_r(a)$, so multiplying by $f(\zeta)$ and using step 1.1 the products differ by at most $M\varepsilon_N$ with $\varepsilon_N\to0$; step 1.2 then bounds the difference of the two iterated integrals by $M\varepsilon_N\prod_{k<m}(2\pi r_k)/(2\pi)^m$, which tends to $0$. Hence $\sum_{\alpha\in B_N}c_\alpha(z-a)^\alpha$ converges to the iterated integral of [L1], which is $f(z)$. [step 1.1, step 1.2, step 2.2, L1, L2, L4, L12]

4.1 By step 3.1 and [L3] the box partial sums also converge to the sum $\sum_\alpha c_\alpha(z-a)^\alpha$; comparing with step 3.2 gives $f(z)=\sum_\alpha c_\alpha(z-a)^\alpha$ for every $z\in\overline\Delta_{\theta r}(a)$. Since a point of $\Delta_r(a)$ has $|z_k-a_k|<r_k$ for each $k$, it lies in $\overline\Delta_{\theta r}(a)$ for any $\theta<1$ exceeding every $|z_k-a_k|/r_k$, so the expansion holds on all of $\Delta_r(a)$. [step 3.1, step 3.2, L3, L9] ∎
