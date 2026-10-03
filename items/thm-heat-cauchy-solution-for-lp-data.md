---
id: thm-heat-cauchy-solution-for-lp-data
kind: theorem
title: "The heat Cauchy problem for $L^p$ data"
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - lem-heat-kernel-semigroup-identity
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-young-convolution-inequality
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 5.5, printed p. 131 (smoothness and $L^p$ convergence for $1\\le p<\\infty$)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 6.9 and Corollary 6.10, printed pp. 152–153 (solution and conservation for integrable/bounded data)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "Theorem 3.1.3 and §3.2.4, printed pp. 103 and 111"
---

## Statement

Assume Countable Choice, let $n\ge1$ and $1\le p<\infty$. For every
$f\in L^p(\mathbb R^n)$ the heat evolution of
[[def-heat-evolution-of-initial-data]] satisfies: (i)
$\|H_tf-f\|_p\to0$ as $t\downarrow0^+$; (ii) $\|H_tf\|_p\le\|f\|_p$ for every
$t>0$; (iii) the semigroup law $H_{t+s}=H_tH_s$ on $L^p$ for all $s,t\ge0$,
with $H_0$ the identity.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p<\infty$, $f\in L^p(\mathbb R^n)$, and $s,t>0$.

[A1] Countable Choice is the hypothesis carried by the integration and approximate-identity suppliers below ([[def-countable-choice]]).

[F1] For $1\le p\le\infty$ and $g\in L^p(\mathbb R^n)$, $H_tg$ is the $L^p$ class of $x\mapsto\int\Gamma(x-y,t)g(y)\,dy$, defined almost everywhere, each $H_t$ is complex-linear, and $H_0$ is the identity on $L^p$ ([[def-heat-evolution-of-initial-data]]).

[F2] For every $t>0$ the kernel satisfies $\|\Gamma_t\|_1=1$ and the family $(\Gamma_t)_{t>0}$ is an $L^1$ approximate identity ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F3] For all $s,t>0$, $\Gamma_t*\Gamma_s=\Gamma_{t+s}$ as functions on $\mathbb R^n$, the convolution converging absolutely everywhere ([[lem-heat-kernel-semigroup-identity]]).

[F4] Assume countable choice; if $(K_\varepsilon)$ is an $L^1$ approximate identity and $f\in L^p$ with $1\le p<\infty$, then $\|f*K_\varepsilon-f\|_p\to0$ as $\varepsilon\to0^+$ ([[thm-l-one-approximate-identities-converge-in-l-p]]).

[F5] Assume Countable Choice; for $1\le p,q,r\le\infty$ with $1/r=1/p+1/q-1$, convolution gives $\|f*g\|_r\le\|f\|_p\|g\|_q$ ([[thm-young-convolution-inequality]]).

[F6] On sigma-finite product spaces, Tonelli's theorem holds for nonnegative product-measurable functions and Fubini's theorem for $L^1$ functions ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); the Lebesgue measure on $\mathbb R^{2n}$ is the completed product of two copies of $\lambda_n$ ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).



## Proof

**Proof technique:** direct.

1.1 Contraction: by [F1] the class $H_tf$ is represented by the convolution $\Gamma_t*f$, so Young's inequality [F5] with the exponent triple $(p,1,p)$, which satisfies $1/p=1/p+1/1-1$, gives $\|H_tf\|_p\le\|\Gamma_t\|_1\|f\|_p=\|f\|_p$ by [F2]; at $t=0$, $H_0f=f$ has the same norm. [A1, F1, F2, F5, given, algebra]

2.1 Strong convergence at time zero: by [F2] the family $(\Gamma_t)_{t>0}$ is an $L^1$ approximate identity, so the published $L^p$ approximate-identity theorem [F4] gives $\|f*\Gamma_t-f\|_p\to0$ as $t\downarrow0^+$; by [F1] the class $H_tf$ is exactly the class of $f*\Gamma_t$, so $\|H_tf-f\|_p\to0$, which is (i). [step 1.1, F1, F2, F4, given]

2.2 Semigroup law: assume first $s,t>0$ and put $g(z):=\int\Gamma_s(z-y)f(y)\,dy$, a representative of $H_sf$ defined for almost every $z$ by [F1]. For fixed $x$ consider the nonnegative function $(y,z)\mapsto|\Gamma_t(x-z)|\,\Gamma_s(z-y)|f(y)|$ on $\mathbb R^n\times\mathbb R^n$; by the identification of [F6] and Tonelli's theorem, its iterated integral equals $\int_{\mathbb R^n}|f(y)|\Bigl(\int_{\mathbb R^n}\Gamma_t(x-z)\Gamma_s(z-y)\,dz\Bigr)dy$, and the inner integral is $(\Gamma_t*\Gamma_s)(x-y)=\Gamma_{t+s}(x-y)$ by [F3], so the whole integral is $(\Gamma_{t+s}*|f|)(x)$, finite for almost every $x$ because $\Gamma_{t+s}\in L^1$ and Young's inequality [F5] applies. Hence the signed double integral is absolutely convergent, Fubini [F6] applies, and $\int\Gamma_t(x-z)g(z)\,dz=\int f(y)\Gamma_{t+s}(x-y)\,dy$ for almost every $x$; that is, $H_t(H_sf)=H_{t+s}f$. If $s=0$ or $t=0$ the identity is the operator identity $H_0=\mathrm{id}$ of [F1], so the semigroup law holds for all $s,t\ge0$, which is (iii). [step 1.1, F1, F3, F5, F6, given, algebra]

3.1 Steps 1.1, 2.1 and 2.2 prove the contraction bound (ii), the strong convergence (i) and the semigroup law (iii) for every $f\in L^p(\mathbb R^n)$, $1\le p<\infty$, which is the whole statement. [step 1.1, step 2.1, step 2.2, given] ∎
