---
id: thm-fourier-inversion-at-lebesgue-points-under-summability
kind: theorem
title: Gaussian Fourier summability at Lebesgue points
deps: ["thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "lem-gaussian-fourier-summability-kernel-is-an-approximate-identity", "lem-radial-majorized-kernels-recover-lebesgue-point-values", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "def-countable-choice", "thm-l-one-approximate-identities-converge-in-l-p", "lem-complex-translation-and-approximate-identity-interfaces"]
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
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Theorem 14.7, p.382, with Problem 15.8 fully supplied locally
---

## Statement

Assume countable choice. For $f\in L^1(\mathbb R^n;\mathbb C)$ and $t>0$,
$$S_tf(x):=\int\widehat f(\xi)e^{-\pi t|\xi|^2}e^{2\pi ix\cdot\xi}\,d\xi=(f*k_t)(x)$$
for every $x$, where $k_t(x)=t^{-n/2}e^{-\pi|x|^2/t}$. As $t\downarrow0$, $S_tf\to f$ in $L^1$ and at every Lebesgue point with value $a$ one has $S_tf(x)\to a$.

## Facts & Assumptions

**Given:** $n\ge1$, $f\in L^1$, $t>0$ and [[def-countable-choice]].

[F1] $\widehat f$ is bounded by $\|f\|_1$ ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F2] The Gaussian kernels have mass one, form an approximate identity, and equal the inverse Gaussian integral ([[lem-gaussian-fourier-summability-kernel-is-an-approximate-identity]]).

[F3] A bounded integrable decreasing radial majorant gives convergence at every specified Lebesgue value ([[lem-radial-majorized-kernels-recover-lebesgue-point-values]]).

[F4] Complex Fubini holds for absolutely integrable product integrands ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] Complex approximate identities converge in each finite $L^p$ norm under countable choice ([[lem-complex-translation-and-approximate-identity-interfaces]]).

## Proof

1.1 By F1 and Gaussian integrability, the defining integral for $S_tf(x)$ is absolutely convergent. Inserting the definition of $\widehat f$, the product integrand has modulus $|f(y)|e^{-\pi t|\xi|^2}$, whose double integral is $\|f\|_1t^{-n/2}<\infty$. Use a Borel representative of f as supplied in F5's convolution construction; the resulting integrand is product measurable. F4 therefore gives $S_tf(x)=\int f(y)[\int e^{-\pi t|\xi|^2}e^{2\pi i(x-y)\cdot\xi}\,d\xi]\,dy=\int f(y)k_t(x-y)\,dy$ by F2. This last integral exists at every x since k_t is bounded; substitution $y\mapsto x-y$ gives the stated convolution convention. [F1, F2, F4, F5, given]

2.1 F2 and F5 now give $\|S_tf-f\|_1\to0$. For pointwise recovery, take $K(y)=e^{-\pi|y|^2}$, $\Phi(r)=e^{-\pi r^2}$ and $\varepsilon=\sqrt t$ in F3. This profile is bounded, nonnegative and decreasing, its radial integral is one, and the dilated kernel is exactly k_t. Thus at every specified Lebesgue value a, $S_tf(x)\to a$. The two assertions use different estimates; norm convergence alone has not been used to infer pointwise convergence. [F2, F3, F5, step 1.1] ∎
